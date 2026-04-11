# Clearpath — Data Dictionary

> This document describes the schema, columns, valid values, and join relationships for the Clearpath synthetic product dataset. Use it alongside the Product Context Statement when analysing data or generating hypotheses.

---

## Tables Overview

| Table | Grain | Purpose |
|---|---|---|
| `accounts` | One row per account | Account-level attributes and 90-day outcome labels |
| `users` | One row per user | User-level attributes and recency |
| `monthly_snapshots` | One row per account per month | Aggregated monthly engagement and completion metrics |
| `feature_events` | One row per feature interaction | Granular event log of feature usage |
| `onboarding` | One row per account per step | Completion status of each onboarding step |

---

## `accounts`

One row per account. The `churned_90d` and `upgraded_90d` columns are outcome labels — they indicate what happened within 90 days of the snapshot date.

| Column | Type | Valid Values / Notes |
|---|---|---|
| `account_id` | string | Unique account identifier. Primary key. |
| `account_name` | string | Synthetic company name |
| `plan_tier` | enum | `starter`, `pro`, `enterprise` |
| `vertical` | enum | `financial_services`, `healthcare`, `legal`, `construction`, `professional_services`, `mixed` |
| `company_size` | enum | `small` (50–200 employees), `mid` (201–1,000 employees), `large` (1,001–5,000 employees) |
| `acquisition_channel` | enum | `paid_search`, `referral`, `outbound`, `organic`, `partner` |
| `integration_count` | int | Number of third-party systems currently connected (HRIS, SSO, Slack, etc.) |
| `account_age_days` | int | Days since account creation at time of snapshot |
| `contract_value_aud` | float | Annual contract value in AUD |
| `churned_90d` | bool | `true` if the account churned within 90 days of the snapshot date |
| `upgraded_90d` | bool | `true` if the account upgraded their plan tier within 90 days of the snapshot date |

---

## `users`

One row per user. Multiple users belong to a single account.

| Column | Type | Valid Values / Notes |
|---|---|---|
| `user_id` | string | Unique user identifier. Primary key. |
| `account_id` | string | Foreign key → `accounts.account_id` |
| `role` | enum | `admin` (full access, manages courses and settings), `manager` (can assign courses and view reports for their team), `learner` (completes assigned courses only) |
| `country` | string | `AU`, `NZ`, `SG`, `GB`, `US` |
| `days_since_last_active` | int | Days since this user last logged in, as of snapshot date |

---

## `monthly_snapshots`

One row per account per month. Covers 12–18 months of history. Use this table for trend analysis, completion rate tracking, and decay detection.

| Column | Type | Valid Values / Notes |
|---|---|---|
| `account_id` | string | Foreign key → `accounts.account_id` |
| `month` | date | First day of the month. Format: `YYYY-MM-01` |
| `courses_assigned` | int | Total course assignments made to employees in the month |
| `courses_completed` | int | Total course completions recorded in the month |
| `overdue_certifications` | int | Number of employee certifications that have expired or passed their due date without completion |
| `seats_used` | int | Count of distinct users who logged in at least once in the month |
| `support_tickets` | int | Number of support tickets raised in the month |
| `support_ticket_category` | enum | Category of tickets raised: `billing`, `product`, `integration`, `none`. If multiple categories exist in a month, reflects the dominant category. |

**Derived metrics to consider:**
- `completion_rate` = `courses_completed / courses_assigned` (values above 0.8 correlate strongly with retention)
- `overdue_rate` = `overdue_certifications / total_active_certifications` (requires joining to feature_events for total active count)
- `seat_utilisation` = `seats_used / total_employees` (total employees can be inferred from company_size in accounts)
- `active_month_trend` = change in `seats_used` or `courses_completed` month-over-month

---

## `feature_events`

One row per feature interaction event. This is the highest-volume table. Join to `users` and `accounts` for segmented analysis.

| Column | Type | Valid Values / Notes |
|---|---|---|
| `event_id` | string | Unique event identifier. Primary key. |
| `user_id` | string | Foreign key → `users.user_id` |
| `account_id` | string | Foreign key → `accounts.account_id` (denormalised for query convenience) |
| `feature_name` | enum | See feature list below |
| `training_type` | enum | `compliance`, `onboarding`, `safety`, `skills`. Nullable for non-training features. |
| `event_type` | enum | `used` (feature was accessed successfully), `blocked` (feature attempted but gated by plan tier), `abandoned` (feature was accessed but the user did not complete the action) |
| `timestamp` | datetime | UTC |

**Feature name reference:**

| Feature | Description | Gated above |
|---|---|---|
| `course_builder` | Creating or editing a training course | Available all tiers |
| `bulk_assign` | Assigning courses to multiple teams or employees at once | `starter` |
| `reminder_automation` | Setting up automated email/Slack reminders for incomplete courses | `starter` |
| `audit_report` | Generating a formatted compliance completion report for export | `starter` |
| `hris_sync` | Syncing employee directory from a connected HRIS system | `starter` |
| `certification_tracker` | Viewing and managing expiry dates for employee certifications | Available all tiers |
| `sso_login` | Logging in via Single Sign-On | `pro` and below |
| `custom_branding` | Applying company logo and colours to the learner portal | `pro` and below |

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
| `publish_first_course` | Admin publishes their first training course |
| `assign_first_team` | Admin assigns a course to at least one team or department |
| `configure_reminders` | Admin sets up at least one automated reminder rule |
| `sync_employee_directory` | Account connects to an HRIS or imports an employee CSV |
| `generate_first_report` | Admin generates a compliance completion report |

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
- **Audit seasonality creates misleading month-over-month signals.** A spike in `courses_completed` followed by a sharp drop does not necessarily indicate churn — it may reflect the natural completion curve before an audit deadline. Look at `account_age_days` and cross-reference with known audit cycles.
- **Completion rate is a more reliable signal than seat usage.** High login counts with low completion rates indicate engaged but ineffective accounts — a support and intervention opportunity, not a health signal.
- **`blocked` events are upgrade signals — but only in context.** A single `blocked` event on `bulk_assign` is weak. A pattern of repeated `blocked` events on `audit_report` or `reminder_automation` in the 30 days before a known audit period is a strong upgrade trigger.
- **The `training_type` column enables segmentation that the account-level `vertical` cannot.** An account in `financial_services` may run only `onboarding` training — which behaves more like a `professional_services` account than its vertical suggests. Always segment feature events by `training_type` as well as `vertical`.
