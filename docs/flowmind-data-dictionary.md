# Flowmind — Data Dictionary

> This document describes the schema, columns, valid values, and join relationships for the Flowmind synthetic product dataset. Use it alongside the Product Context Statement when analysing data or generating hypotheses.

---

## Tables Overview

| Table | Grain | Purpose |
|---|---|---|
| `accounts` | One row per account | Account-level attributes and 90-day outcome labels |
| `users` | One row per user | User-level attributes and recency |
| `monthly_snapshots` | One row per account per month | Aggregated monthly engagement metrics |
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
| `vertical` | enum | `finance`, `hr`, `revops`, `customer_success`, `it_ops`, `mixed` |
| `company_size` | enum | `small` (20–50 employees), `mid` (51–200 employees), `large` (201–500 employees) |
| `acquisition_channel` | enum | `paid_search`, `referral`, `outbound`, `organic`, `partner` |
| `integration_count` | int | Number of third-party tools currently connected to Flowmind |
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
| `role` | enum | `admin` (full access, can configure workflows), `member` (can build and run), `viewer` (read-only) |
| `country` | string | `AU`, `NZ`, `SG`, `GB`, `US` |
| `days_since_last_active` | int | Days since this user last logged in, as of snapshot date |

---

## `monthly_snapshots`

One row per account per month. Covers 12–18 months of history. Use this table for trend analysis and decay detection.

| Column | Type | Valid Values / Notes |
|---|---|---|
| `account_id` | string | Foreign key → `accounts.account_id` |
| `month` | date | First day of the month. Format: `YYYY-MM-01` |
| `active_days` | int | Number of days in the month where at least one user was active |
| `workflows_run` | int | Total workflow executions in the month |
| `workflows_errored` | int | Workflow executions that failed or were abandoned mid-run |
| `seats_used` | int | Count of distinct users who were active in the month |
| `support_tickets` | int | Number of support tickets raised in the month |
| `support_ticket_category` | enum | Category of tickets raised: `billing`, `product`, `integration`, `none`. If multiple categories exist in a month, reflects the dominant category. |

**Derived metrics to consider:**
- `error_rate` = `workflows_errored / workflows_run`
- `seat_utilisation` = `seats_used / seats_purchased` (seats_purchased can be inferred from plan_tier in accounts)
- `active_day_trend` = change in `active_days` week-over-week or month-over-month

---

## `feature_events`

One row per feature interaction event. This is the highest-volume table. Join to `users` and `accounts` for segmented analysis.

| Column | Type | Valid Values / Notes |
|---|---|---|
| `event_id` | string | Unique event identifier. Primary key. |
| `user_id` | string | Foreign key → `users.user_id` |
| `account_id` | string | Foreign key → `accounts.account_id` (denormalised for query convenience) |
| `feature_name` | enum | See feature list below |
| `workflow_type` | enum | `approval_routing`, `data_sync`, `notification_trigger`, `scheduled_report`. Nullable for non-workflow features. |
| `event_type` | enum | `used` (feature was accessed successfully), `blocked` (feature attempted but gated by plan tier), `abandoned` (feature was accessed but the user did not complete the action) |
| `timestamp` | datetime | UTC |

**Feature name reference:**

| Feature | Description | Gated above |
|---|---|---|
| `approval_routing` | Building or running an approval chain workflow | `starter` |
| `data_sync` | Building or running a data sync workflow | Available all tiers |
| `notification_trigger` | Building or running a notification trigger | Available all tiers |
| `scheduled_report` | Building or running a scheduled report | Available all tiers |
| `bulk_export` | Exporting workflow run history or data in bulk | Available all tiers |
| `workflow_templates` | Using a pre-built template to create a workflow | Available all tiers |
| `error_retry` | Manually retrying a failed workflow execution | `starter` |
| `audit_log` | Viewing the account-level audit trail | `pro` and below |

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
| `create_first_workflow` | User creates their first workflow in the builder |
| `connect_first_integration` | User connects their first external tool |
| `connect_second_integration` | User connects a second external tool |
| `invite_team_member` | Admin invites at least one other user to the account |
| `run_first_workflow` | A workflow is executed successfully for the first time |

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
- **Aggregate patterns can be misleading.** Always segment by `vertical`, `company_size`, `plan_tier`, and `acquisition_channel` before drawing conclusions. Key effects in this dataset are segment-specific.
- **High usage ≠ high value.** Some features show high `used` event counts with no positive correlation to retention outcomes. Validate every usage signal against outcome labels before proposing a mechanism.
- **Time series matters.** A single month's `active_days` value is less meaningful than its trend. Use `monthly_snapshots` to detect decay patterns across 2–4 month windows.
- **`blocked` events are upgrade signals — but only in context.** A `blocked` event alone doesn't predict upgrade. Look at frequency, recency, and which specific feature was blocked.
