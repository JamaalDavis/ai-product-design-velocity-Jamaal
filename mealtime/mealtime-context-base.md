# EIM Context Base — Mealtime
*Generated: 2026-05-04*
*Sources: mealtime-product-context.md, mealtime-intro.md, mealtime-data-dictionary.md, data/mealtime_accounts.csv, data/mealtime_feature_events.csv, data/mealtime_monthly_snapshots.csv, data/mealtime_onboarding.csv, data/mealtime_users.csv*

---

## What the Product Does

Mealtime is a recipe and meal planning app built for home cooks who want to eat better without the daily cognitive load of deciding what to cook. It lets users discover recipes matched to their taste profile, plan their week's meals in a drag-and-drop calendar, and automatically generate a consolidated grocery list. The core job-to-be-done is turning healthy eating intentions into a repeatable weekly habit.

## User and Account Types

**Users:** Health-conscious adults (25–45) who want to eat better and reduce the decision overhead around meals. Sign-up triggers are typically life events (new year, new fitness goal, new household, dietary change) or referrals.

**Roles:** `primary` (account owner, full access), `family_member` (can plan and cook), `viewer` (read-only).

**Account segments:**
- `user_segment`: `health_fitness`, `family_planning`, `foodie`, `budget_cooking`, `dietary_specific`
- `device_platform`: `ios`, `android`, `web`
- `acquisition_channel`: `app_store_search`, `referral`, `social_media`, `influencer`, `organic_search`, `paid_social`

## Pricing and Plan Structure

| Tier | Users | Key feature access | Price |
|---|---|---|---|
| `free` | 1 | Recipe browse, meal plan builder, dietary filter, nutritional info, meal swap. 5 saved recipes max. | $0 |
| `premium` | 1 | All features. Unlimited saves. Grocery sync, collections, recipe import. | $7.99/month or $79.99/year |
| `family` | Up to 5 | All premium features. Shared meal plan, collaborative grocery list, individual taste profiles. | $12.99/month or $129.99/year |

A `blocked` event in `feature_events` means a free user hit a plan gate. Key gated features: `grocery_sync`, `collection_create`, `recipe_import` (all gated above `free`).

## What Healthy Usage Looks Like

A retained Premium or Family subscriber at month 3+ typically has all of:
- Using the **meal plan builder at least 3 weeks per month**
- **Logging at least 10 recipes cooked per month**
- **Completed taste profile** during onboarding
- On Family plans: **at least 2 active users** in the household

Accounts that browse recipes heavily but never create a meal plan have not formed the core habit — they treat Mealtime as a recipe catalogue, not a planning tool. These are the **highest churn risk** regardless of plan tier.

## Known Friction Points and Risk Signals

- **Taste profile skippers see the wrong recipes.** Without a completed taste profile, the recommendation engine surfaces generic popular recipes. Users who skip see low relevance, don't save or cook anything, and disengage within 2 weeks.
- **Recipe hoarders are not active users.** A user who saves many recipes but never creates a meal plan has not formed a habit. They churn silently by stopping to open the app rather than cancelling explicitly.
- **Grocery sync is the stickiest feature but gated from free.** Users who actively use grocery sync almost never churn. Free users who discover this feature and hit the paywall either upgrade (a minority) or disengage.
- **Billing tickets in month 1 are a strong churn signal.** Reflects expectation mismatch about free tier limits, not product quality. These users churn at 2x+ the rate of product or account support contacts.
- **Family plans with only one active user lose their value proposition.** The Family plan's stickiness depends on shared use — single-user Family accounts behave like solo Premium accounts and are at elevated churn risk.

## Available Data Sources

### accounts
- **What it is:** One row per subscriber account — the spine table
- **Key columns:** `plan_tier`, `user_segment`, `device_platform`, `acquisition_channel`, `recipe_saves`, `account_age_days`, `contract_value_aud`
- **Outcome variable:** `churned_90d` (bool), `upgraded_90d` (bool) — explicit labels
- **Row count:** 1,800 rows
- **Sampling:** No sampling applied — dataset within size limits
- **Gaps / caveats:** Snapshot-in-time. Free accounts have `contract_value_aud = 0` — segment by plan tier when calculating ARR at risk.

### feature_events
- **What it is:** One row per feature interaction event — highest volume table
- **Key columns:** `user_id`, `account_id`, `feature_name`, `meal_category`, `event_type` (`used`/`blocked`/`abandoned`), `timestamp`
- **Outcome variable:** Not directly — join to `accounts` via `account_id` for `churned_90d`
- **Time range:** 2024 (inferred from timestamps)
- **Row count:** 160,303 rows | 13.2 MB
- **Sampling:** No sampling applied — under both thresholds (< 200K rows, < 100 MB)
- **Gaps / caveats:** `meal_category` is nullable for non-meal features. No direct outcome column — must join to accounts.

### monthly_snapshots
- **What it is:** One row per account per month — engagement trend table
- **Key columns:** `active_days`, `recipes_cooked`, `recipes_saved`, `missed_meal_plans`, `seats_used`, `support_tickets`, `support_ticket_category`
- **Outcome variable:** Join to `accounts` via `account_id`
- **Time range:** 12–18 months of history
- **Row count:** 20,099 rows
- **Sampling:** No sampling applied — dataset within size limits
- **Gaps / caveats:** `support_ticket_category` reflects dominant category only when multiple exist. Key derived metric: `engagement_ratio = recipes_cooked / recipes_saved`.

### onboarding
- **What it is:** One row per account per step (5 steps × 1,800 accounts = 9,000 rows)
- **Key columns:** `step_name`, `completed` (bool), `completed_at` (datetime, null if incomplete)
- **Outcome variable:** Join to `accounts` via `account_id`
- **Row count:** 9,000 rows
- **Sampling:** No sampling applied — dataset within size limits
- **Gaps / caveats:** Step sequence: `complete_taste_profile` → `save_first_recipe` → `create_first_meal_plan` → `generate_grocery_list` → `invite_family_member`.

### users
- **What it is:** One row per user (multiple per account on Family plans)
- **Key columns:** `role` (primary/family_member/viewer), `country`, `days_since_last_active`
- **Outcome variable:** Join to `accounts` via `account_id`
- **Row count:** 2,908 rows
- **Sampling:** No sampling applied — dataset within size limits
- **Gaps / caveats:** `days_since_last_active` is a snapshot metric — no historical activity log at user level.

## Data Dictionary

Full dictionary available in `mealtime-data-dictionary.md`. Key definitions:
- `churned_90d`: true if account churned within 90 days of snapshot date
- `upgraded_90d`: true if account upgraded plan tier within 90 days of snapshot date
- `blocked` event_type: user attempted a feature gated above their plan tier
- `abandoned` event_type: user accessed a feature but did not complete the action
- `engagement_ratio`: `recipes_cooked / recipes_saved` — the key intent-to-habit metric

## Customer Voice Themes

No qualitative context available. Recommend validating hypotheses against user interviews or app store reviews before prioritising.

## Known Gaps

- **No qualitative data** — hypotheses should be validated against user interviews or support call themes before acting. All signals are quantitative only.
- **No individual session or login timestamps** — `days_since_last_active` is a snapshot, not a time series. Cannot detect engagement decay at the user level within a month.
- **`support_ticket_category` is single-value per month** — multi-category months are collapsed, which may undercount billing ticket signals.
- **Free-tier ACV is zero** — churn impact calculations for free accounts require estimating upgrade probability or lifetime value, not direct ARR impact.

---
*Context base ready. Run /eim-product-analyst mealtime to begin analysis.*
