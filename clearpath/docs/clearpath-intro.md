# Clearpath — Getting Started with This Dataset

## The scenario

You're a product manager at **Clearpath**, a compliance training and certification management SaaS. Clearpath sells to HR managers and compliance officers at mid-market companies in regulated industries — financial services, healthcare, legal, construction — who need to ensure every employee has completed required training and can prove it to a regulator or auditor.

Accounts pay on a subscription basis (starter, pro, or enterprise), and the two outcomes you care about most are **churn** and **expansion**. This dataset gives you 12–18 months of synthetic but realistic product data to practise with.

**The core question this data is designed to help you answer:** which behaviours predict whether an account will churn or upgrade in the next 90 days — and what can product do about it?

---

## What's in the dataset

There are five CSV files, all stored in `data/clearpath/`. They join together via `account_id` and `user_id`.

### `clearpath_accounts.csv`
One row per customer account. This is your spine — every other table joins back to it. It tells you what plan tier each account is on, what industry they're in, how they were acquired, how many integrations they've connected, and crucially, whether they churned or upgraded within 90 days of the snapshot date.

**What to look for:** `churned_90d` and `upgraded_90d` are your outcome labels. Every hypothesis you form should eventually point back to one of these.

### `clearpath_users.csv`
One row per user. Multiple users belong to a single account. Shows each user's role (admin, manager, or learner), their country, and how recently they were active.

**What to look for:** Accounts where only the admin ever logs in look very different from accounts where multiple managers are actively assigning and reviewing courses. Role spread is a proxy for how embedded the platform is across the organisation.

### `clearpath_monthly_snapshots.csv`
One row per account per month. This is your engagement trend table — it shows how many courses were assigned and completed, how many certifications were overdue, how many seats were in use, and whether support tickets were raised (and what kind).

**What to look for:** Completion rate (`courses_completed / courses_assigned`) is the most important signal in this table. Also watch for the audit seasonality pattern — accounts often spike in usage before a known audit date and drop off sharply after. Don't misread that drop as churn.

### `clearpath_feature_events.csv`
One row per feature interaction — the highest-volume table. Every time a user touches a feature, an event is logged as `used`, `blocked` (plan limit hit), or `abandoned` (started but didn't complete). The `training_type` column tells you whether the interaction was related to compliance, onboarding, safety, or skills training.

**What to look for:** The mix of training types an account uses, repeated `blocked` events on high-value features like `audit_report` or `reminder_automation` (strong upgrade signals before audit season), and whether users start but abandon key flows.

### `clearpath_onboarding.csv`
One row per account per onboarding step. Five steps in total — publishing a first course, assigning it to a team, configuring reminders, syncing the employee directory, and generating a first report.

**What to look for:** Which steps are commonly skipped, and how completion patterns correlate with 90-day outcomes. Completing all five steps within 21 days is strongly associated with activation. The most commonly skipped step — `sync_employee_directory` — is also the strongest predictor of churn.

---

## Where you'd find this data in your own company

| Dataset | Where to find it in the real world |
|---|---|
| `accounts` | Your CRM (Salesforce, HubSpot), billing system (Stripe, Chargebee, Zuora), or customer success platform (Gainsight, ChurnZero). Churn and upgrade outcomes typically live in billing data. |
| `users` | Your auth/identity system, product analytics platform (Mixpanel, Amplitude, Heap), or the user table in your application database. For platforms with a learner tier, this may also include an LMS-side user table. |
| `monthly_snapshots` | Usually built by a data or analytics engineer from raw event data. Lives in your data warehouse (Snowflake, BigQuery, Redshift) as a pre-aggregated reporting table, or surfaces in tools like Looker or Metabase. |
| `feature_events` | Your product event tracking pipeline — Segment, Mixpanel, Amplitude, Heap, or PostHog. Application logs are the raw source; the analytics platform is usually the query layer. |
| `onboarding` | Often a combination of CRM milestone tracking, product analytics funnel definitions, and customer success playbook stages. May be in Salesforce, your CS platform, or a custom table in your data warehouse. |

---

## Tips before you start

- **Segment by vertical and training type — not just vertical.** An account in `financial_services` that only runs `onboarding` training behaves more like a `professional_services` account than its industry label suggests.
- **Completion rate is your north star metric here.** High logins with low completion rates is an intervention opportunity, not a health signal.
- **HRIS sync is the strongest single retention predictor.** Check `integration_count` and `sync_employee_directory` completion first.
- **Audit seasonality will mislead you.** Before calling a month-over-month drop a churn signal, check whether the account recently completed an audit cycle.
- **`blocked` events on `audit_report` and `reminder_automation` in the weeks before audit season are strong upgrade triggers.** Frequency and timing matter more than the event alone.

For full schema details, see [clearpath-data-dictionary.md](clearpath-data-dictionary.md). For product context that helps you interpret behavioural signals, see [clearpath-product-context.md](clearpath-product-context.md).
