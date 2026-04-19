# Mealtime — Getting Started with This Dataset

## The scenario

You're a product manager at **Mealtime**, a recipe and meal planning app. Mealtime sells direct-to-consumer on a freemium model — users download the app for free, unlock a core set of features at no cost, and upgrade to Premium or Family to remove limits and access collaborative planning tools.

Subscribers pay on a monthly or annual basis, and like all freemium consumer apps, the two outcomes you care about most are **churn** (losing paying subscribers) and **upgrade** (converting free users to paid). This dataset gives you 12–18 months of synthetic but realistic product data to practise with.

**The core question this data is designed to help you answer:** which behaviours predict whether a subscriber will churn or upgrade in the next 90 days — and what can product do about it?

---

## What's in the dataset

There are five CSV files, all stored in `data/mealtime/`. They join together via `account_id` and `user_id`.

### `mealtime_accounts.csv`
One row per subscriber account. This is your spine — every other table joins back to it. It tells you what plan tier each account is on, what user segment they belong to, how many recipes they've saved, and crucially, whether they churned or upgraded within 90 days of the snapshot date.

**What to look for:** `churned_90d` and `upgraded_90d` are your outcome labels. Every hypothesis you form should eventually point back to one of these.

### `mealtime_users.csv`
One row per user. On Family plans, multiple users belong to a single account. Shows each user's role (primary, family_member, viewer), their country, and how recently they were active.

**What to look for:** Family plan accounts where only the primary user is active are at risk — the plan's value proposition depends on shared use.

### `mealtime_monthly_snapshots.csv`
One row per account per month. This is your engagement trend table — it shows how many days an account was active, how many recipes they cooked, how many they saved, how many meal plans they missed, how many seats were in use, and whether they raised support tickets that month.

**What to look for:** Decay patterns over 2–4 month windows. A single bad month is noise; a steady decline in `active_days` or a widening gap between `recipes_saved` and `recipes_cooked` is signal.

### `mealtime_feature_events.csv`
One row per feature interaction — the highest-volume table. Every time a user touches a feature, an event is logged as `used`, `blocked` (plan limit hit), or `abandoned` (started but didn't complete). The `meal_category` column tells you which of Mealtime's five meal categories the event is associated with.

**What to look for:** The mix of features an account engages with, how frequently features are blocked (an upgrade signal), and whether users abandon feature flows before completing them.

### `mealtime_onboarding.csv`
One row per account per onboarding step. Five steps in total — completing a taste profile, saving a first recipe, creating a first meal plan, generating a grocery list, and inviting a family member.

**What to look for:** Which steps are commonly skipped, and how completion patterns correlate with 90-day outcomes. Completing all five steps within 14 days is strongly associated with activation.

---

## Where you'd find this data in your own company

| Dataset | Where to find it in the real world |
|---|---|
| `accounts` | Your billing system (Stripe, RevenueCat, Apple/Google subscriptions), your app's user database, or a CRM for higher-touch consumer segments. Churn and upgrade outcomes typically live in billing data. |
| `users` | Your auth/identity system, mobile analytics platform (Mixpanel, Amplitude, Braze), or the user table in your application database. |
| `monthly_snapshots` | Usually built by a data or analytics engineer from raw event data. Lives in your data warehouse (Snowflake, BigQuery) as a pre-aggregated reporting table, or surfaces in tools like Looker or Amplitude's charting layer. |
| `feature_events` | Your product event tracking pipeline — Segment, Mixpanel, Amplitude, or PostHog. The analytics platform is usually the query layer. |
| `onboarding` | Often a combination of in-app milestone tracking, analytics funnel definitions, and CRM lifecycle stages. May be in your analytics platform, your CRM, or a custom table in your data warehouse. |

---

## Tips before you start

- **Segment early.** The accounts table has `user_segment`, `plan_tier`, `device_platform`, and `acquisition_channel`. Aggregate patterns often mask effects that only appear in specific segments.
- **Saved ≠ cooked.** `recipes_saved` and `recipes_cooked` tell different stories. An account that saves recipes but never cooks them has not found their habit yet — and is at high churn risk.
- **Onboarding step completion is your strongest early predictor.** Look at `create_first_meal_plan` and `complete_taste_profile` first.
- **`billing` support tickets in month 1 are a strong churn signal.** They reflect expectation mismatches at the point of sign-up, not product failure.

For full schema details, see [mealtime-data-dictionary.md](mealtime-data-dictionary.md). For product context that helps you interpret behavioural signals, see [mealtime-product-context.md](mealtime-product-context.md).
