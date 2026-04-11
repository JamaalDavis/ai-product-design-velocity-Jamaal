# Flowmind — Getting Started with This Dataset

## The scenario

You're a product manager at **Flowmind**, a workflow automation SaaS. Flowmind sells to operations teams at mid-market companies — finance managers, HR leads, RevOps folk — who want to automate the manual coordination work that lives in email threads and spreadsheets between their tools.

Accounts pay on a subscription basis (starter, pro, or enterprise), and like most SaaS businesses, the two outcomes you care about most are **churn** and **expansion**. This dataset gives you 12–18 months of synthetic but realistic product data to practise with.

**The core question this data is designed to help you answer:** which behaviours predict whether an account will churn or upgrade in the next 90 days — and what can product do about it?

---

## What's in the dataset

There are five CSV files, all stored in `data/flowmind/`. They join together via `account_id` and `user_id`.

### `flowmind_accounts.csv`
One row per customer account. This is your spine — every other table joins back to it. It tells you what plan tier each account is on, what industry they're in, how they were acquired, how many integrations they've connected, and crucially, whether they churned or upgraded within 90 days of the snapshot date.

**What to look for:** `churned_90d` and `upgraded_90d` are your outcome labels. Every hypothesis you form should eventually point back to one of these.

### `flowmind_users.csv`
One row per user. Multiple users belong to a single account. Shows each user's role (admin, member, viewer), their country, and how recently they were active.

**What to look for:** Accounts where only the admin is active are a very different health profile from accounts with five active members across multiple roles.

### `flowmind_monthly_snapshots.csv`
One row per account per month. This is your engagement trend table — it shows how many days an account was active, how many workflows they ran, how many errored, how many seats were in use, and whether they raised support tickets that month (and what kind).

**What to look for:** Decay patterns over 2–4 month windows. A single bad month is noise; a steady decline in `active_days` or a rising `workflows_errored / workflows_run` ratio is signal.

### `flowmind_feature_events.csv`
One row per feature interaction — the highest-volume table. Every time a user touches a feature, an event is logged as `used`, `blocked` (plan limit hit), or `abandoned` (started but didn't complete). The `workflow_type` column tells you which of Flowmind's four core workflow categories the event belongs to.

**What to look for:** The mix of workflow types an account uses, how frequently features are blocked (an upgrade signal), and whether users abandon feature flows before completing them.

### `flowmind_onboarding.csv`
One row per account per onboarding step. Five steps in total — creating a first workflow, connecting two integrations, inviting a team member, and running a first workflow successfully.

**What to look for:** Which steps are commonly skipped, and how completion patterns correlate with 90-day outcomes. Completing all five steps within 14 days is strongly associated with activation.

---

## Where you'd find this data in your own company

| Dataset | Where to find it in the real world |
|---|---|
| `accounts` | Your CRM (Salesforce, HubSpot), billing system (Stripe, Chargebee, Zuora), or customer success platform (Gainsight, ChurnZero). Churn and upgrade outcomes typically live in billing data. |
| `users` | Your auth/identity system, product analytics platform (Mixpanel, Amplitude, Heap), or the user table in your application database. |
| `monthly_snapshots` | Usually built by a data or analytics engineer from raw event data. Lives in your data warehouse (Snowflake, BigQuery, Redshift) as a pre-aggregated reporting table, or surfaces in tools like Looker or Metabase. |
| `feature_events` | Your product event tracking pipeline — Segment, Mixpanel, Amplitude, Heap, or PostHog. Application logs are the raw source; the analytics platform is usually the query layer. |
| `onboarding` | Often a combination of CRM milestone tracking, product analytics funnel definitions, and customer success playbook stages. May be in Salesforce, your CS platform, or a custom table in your data warehouse. |

---

## Tips before you start

- **Segment early.** The accounts table has `vertical`, `company_size`, `plan_tier`, and `acquisition_channel`. Aggregate patterns often mask effects that only appear in specific segments.
- **Error rate matters more than raw volume.** `workflows_errored / workflows_run` is a more reliable health signal than `workflows_run` alone.
- **`integration_count` is the strongest retention predictor in this dataset.** Look at it first.
- **`blocked` events aren't failures — they're upgrade opportunities.** But only when they're frequent and on specific features.

For full schema details, see [flowmind-data-dictionary.md](flowmind-data-dictionary.md). For product context that helps you interpret behavioural signals, see [flowmind-product-context.md](flowmind-product-context.md).
