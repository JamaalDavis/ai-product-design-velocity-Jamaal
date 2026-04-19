# Mealtime — Data Dictionary

> This document describes the schema, columns, valid values, and join relationships for the Mealtime synthetic product dataset. Use it alongside the Product Context Statement when analysing data or generating hypotheses.

---

## Tables Overview

| Table | Grain | Purpose |
|---|---|---|
| `accounts` | One row per subscriber account | Account-level attributes and 90-day outcome labels |
| `users` | One row per user | User-level attributes and recency |
| `monthly_snapshots` | One row per account per month | Aggregated monthly engagement metrics |
| `feature_events` | One row per feature interaction | Granular event log of feature usage |
| `onboarding` | One row per account per step | Completion status of each onboarding step |

---

## `accounts`

One row per subscriber account. The `churned_90d` and `upgraded_90d` columns are outcome labels — they indicate what happened within 90 days of the snapshot date.

| Column | Type | Valid Values / Notes |
|---|---|---|
| `account_id` | string | Unique account identifier. Primary key. |
| `account_name` | string | Synthetic household name |
| `plan_tier` | enum | `free`, `premium`, `family` |
| `user_segment` | enum | `health_fitness`, `family_planning`, `foodie`, `budget_cooking`, `dietary_specific` |
| `device_platform` | enum | `ios`, `android`, `web` |
| `acquisition_channel` | enum | `app_store_search`, `referral`, `social_media`, `influencer`, `organic_search`, `paid_social` |
| `recipe_saves` | int | Total number of recipes saved to the account's library at snapshot date |
| `account_age_days` | int | Days since account creation at time of snapshot |
| `contract_value_aud` | float | Annual subscription value in AUD. `0` for free tier. |
| `churned_90d` | bool | `true` if the account cancelled or lapsed within 90 days of the snapshot date |
| `upgraded_90d` | bool | `true` if the account upgraded their plan tier within 90 days of the snapshot date |

---

## `users`

One row per user. On Family plans, multiple users belong to a single account.

| Column | Type | Valid Values / Notes |
|---|---|---|
| `user_id` | string | Unique user identifier. Primary key. |
| `account_id` | string | Foreign key → `accounts.account_id` |
| `role` | enum | `primary` (account owner, full access), `family_member` (can plan and cook), `viewer` (read-only) |
| `country` | string | `AU`, `NZ`, `US`, `GB`, `CA` |
| `days_since_last_active` | int | Days since this user last opened the app, as of snapshot date |

---

## `monthly_snapshots`

One row per account per month. Covers 12–18 months of history. Use this table for trend analysis and decay detection.

| Column | Type | Valid Values / Notes |
|---|---|---|
| `account_id` | string | Foreign key → `accounts.account_id` |
| `month` | date | First day of the month. Format: `YYYY-MM-01` |
| `active_days` | int | Number of days in the month where at least one user opened the app |
| `recipes_cooked` | int | Recipes logged as cooked (marked complete in the meal plan) in the month |
| `recipes_saved` | int | Recipes saved to the account's library in the month |
| `missed_meal_plans` | int | Planned meal slots that were not logged as cooked |
| `seats_used` | int | Count of distinct users who were active in the month |
| `support_tickets` | int | Number of support tickets raised in the month |
| `support_ticket_category` | enum | Category of tickets raised: `billing`, `product`, `account`, `none`. If multiple categories exist in a month, reflects the dominant category. |

**Derived metrics to consider:**
- `engagement_ratio` = `recipes_cooked / recipes_saved` (low ratio = intent without habit)
- `plan_adherence` = `recipes_cooked / (recipes_cooked + missed_meal_plans)` (how consistently the user follows through)
- `active_day_trend` = change in `active_days` month-over-month

---

## `feature_events`

One row per feature interaction event. This is the highest-volume table. Join to `users` and `accounts` for segmented analysis.

| Column | Type | Valid Values / Notes |
|---|---|---|
| `event_id` | string | Unique event identifier. Primary key. |
| `user_id` | string | Foreign key → `users.user_id` |
| `account_id` | string | Foreign key → `accounts.account_id` (denormalised for query convenience) |
| `feature_name` | enum | See feature list below |
| `meal_category` | enum | `breakfast`, `lunch`, `dinner`, `snack`, `dessert`. Nullable for non-meal features. |
| `event_type` | enum | `used` (feature was accessed successfully), `blocked` (feature attempted but gated by plan tier), `abandoned` (feature was accessed but the user did not complete the action) |
| `timestamp` | datetime | UTC |

**Feature name reference:**

| Feature | Description | Gated above |
|---|---|---|
| `meal_plan_builder` | Creating or editing a weekly meal plan | Available all tiers |
| `recipe_browse` | Browsing or searching the recipe library | Available all tiers |
| `grocery_sync` | Generating or syncing the grocery list to an external app | `free` |
| `collection_create` | Creating or managing recipe collections | `free` |
| `dietary_filter` | Filtering recipes by dietary preference | Available all tiers |
| `recipe_import` | Importing a recipe from an external URL | `free` |
| `nutritional_info` | Viewing a recipe's nutritional breakdown | Available all tiers |
| `meal_swap` | Swapping a planned meal for an alternative | Available all tiers |

---

## `onboarding`

One row per account per onboarding step. Five steps total per account.

| Column | Type | Valid Values / Notes |
|---|---|---|
| `account_id` | string | Foreign key → `accounts.account_id` |
| `step_name` | enum | See step reference below |
| `completed` | bool | `true` if the step was completed |
| `completed_at` | datetime | UTC timestamp of completion. Null if `completed = false`. |

**Step reference (in intended sequence):**

| Step | Description |
|---|---|
| `complete_taste_profile` | User completes the dietary preferences and taste questionnaire |
| `save_first_recipe` | User saves their first recipe to their library |
| `create_first_meal_plan` | User assigns at least one recipe to a slot in the meal plan calendar |
| `generate_grocery_list` | User generates a grocery list from their meal plan |
| `invite_family_member` | Primary user invites at least one household member to the account |

---

## Join Map

```
accounts
  ├── users               (accounts.account_id = users.account_id)
  ├── monthly_snapshots   (accounts.account_id = monthly_snapshots.account_id)
  ├── feature_events      (accounts.account_id = feature_events.account_id)
  └── onboarding          (accounts.account_id = onboarding.account_id)

users
  └── feature_events      (users.user_id = feature_events.user_id)
```

---

## Important Analysis Notes

- **`churned_90d` and `upgraded_90d` are your outcome labels.** All hypothesis generation should ultimately connect a behavioural signal to one of these outcomes.
- **Free accounts have `contract_value_aud = 0`.** When calculating ARR at risk, segment by plan tier or use upgrade probability to estimate revenue impact.
- **`recipes_saved` and `recipes_cooked` tell different stories.** High saves with low cooks = intent without habit. This ratio is a more reliable churn signal than raw activity volume.
- **`blocked` events are upgrade signals — but only in context.** A `blocked` event alone doesn't predict upgrade. Look at frequency, recency, and which specific feature was blocked, then cross-reference with whether the account has an active taste profile and meal plan.
- **Time series matters.** A single month's `active_days` value is less meaningful than its trend. Use `monthly_snapshots` to detect decay patterns across 2–4 month windows.
