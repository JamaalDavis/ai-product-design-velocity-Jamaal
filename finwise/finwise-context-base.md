# EIM Context Base — FinWise
*Generated: 2026-05-19*
*Sources: finwise-product-context.md, finwise-data-dictionary.md, finwise-intro.md, finwise/data/ (5 CSV files inspected)*

---

## What the Product Does

FinWise is a US-based personal finance app that helps everyday Americans track spending, set savings goals, and understand where their money goes. The core job-to-be-done is reducing the cognitive load and shame of managing money for people who earn enough to care about their finances but not enough to afford a financial advisor. The ideal outcome is a user who opens FinWise weekly, understands their financial situation in under two minutes, and makes at least one intentional decision as a result. FinWise operates a freemium model: tracking features are free, Pro features (unlimited savings goals, budget automation, bill tracking) are $9.99/month.

---

## User and Account Types

**Primary user:** Americans aged 25–40, earning $45K–$120K/year. Financially anxious — knows they should be doing better but is overwhelmed by money management. Common sign-up triggers: new year, first real job, moving in with a partner, paying off a debt.

**Segments (user_segment column):**
- `anxious_tracker` — engaged but anxious; high session frequency, low goal completion
- `budget_focused` — motivated by category control; likely to engage with category_edit
- `savings_motivated` — most likely to convert; responds to savings_goal blocked events
- `mint_refugee` — ~30K users acquired after Mint shut down (March 2024); more experienced, higher initial session frequency, convert to Pro at higher rates, but churn at higher rates in months 4–6 due to unmet expectations around investment tracking and shared household features
- `new_to_tracking` — least experienced; highest onboarding drop-off risk

**Acquisition channels:** `organic`, `paid_social`, `referral`, `mint_refugee`, `other`

**Platform split:** iOS and Android (no meaningful feature differences between platforms in available data)

---

## Pricing and Plan Structure

| Tier | Price | Key access |
|---|---|---|
| `free` | $0 | All tracking features. Unlimited account linking. Notifications. Analysis view. **1 savings goal maximum.** |
| `pro` | $9.99/month | All free features plus unlimited savings goals, budget automation, bill tracking. |

**The upgrade trigger:** 71% of Pro upgrades happen within 14 days of a free-tier user hitting the 1-goal limit (`savings_goal` + `blocked` event). This is the most reliable conversion moment in the product.

**Revenue leverage:** Every 1 percentage point improvement in Pro conversion = ~$380K additional ARR at current user volume (380K registered users, 4.2% current Pro conversion rate).

---

## What Healthy Usage Looks Like

A retained Pro subscriber at month 3+ typically has **all** of the following:
- At least one active savings goal created within the first 14 days
- Two or more financial accounts linked (primary checking + at least one other)
- 3+ app opens per week in the first month
- Notifications engaged with at least once per week in the first 30 days
- Fewer than 15% of transactions uncategorised at the 30-day mark

**The clearest early churn predictor:** An account that links one financial account, views the transaction screen once or twice, and never sets a savings goal. No personalised stake in the product — treated as a ledger, not a companion.

---

## Known Friction Points and Risk Signals

**Onboarding drop-off:** `set_first_goal` has a 12% completion rate — the lowest of any onboarding step and the single strongest predictor of 90-day retention. The gap between step 3 (`view_first_spending_summary`, 61%) and step 5 (`set_first_goal`, 12%) is steep and represents the core product opportunity.

**Analysis view abandonment:** ~55% of `analysis_view` sessions end without interaction within ~20 seconds. Baseline is expected, but accounts that only ever abandon (never interact) are a value visibility problem.

**Manual transaction abandonment:** ~39% abandonment rate. Users start entering transactions and don't finish — likely a friction or form-complexity issue.

**Notification decay:** Declining notification open rates in the 60 days before churned accounts deactivate is a leading churn signal. Look at month-over-month trend, not just the static rate.

**Uncategorised transaction ratio:** When `transactions_uncategorised / total_transactions` exceeds ~20%, it's a friction signal — users aren't engaging with the categorisation layer, which is required for the product to deliver its core value.

**Session drop-off in months 2–3:** Steep month-over-month session decline in the second and third month is the engagement decay signal. Accounts that drop to fewer than 2 sessions/month by month 3 rarely recover.

**Mint refugee churn in months 4–6:** This cohort over-indexes on churn in months 4–6, likely due to absent investment account tracking and no shared household features. Hypotheses targeting this cohort should account for feature-gap expectations, not just engagement patterns.

**Support ticket categories:** `categorisation` and `account_sync` account for 40% of support tickets (business target: reduce to <15% by Q3 2026).

---

## Business Goals (current, as of 2026-05-19)

| Goal | Current | Target | Timeline |
|---|---|---|---|
| Grow engaged user base | 380K registered | 1M registered | End of 2026 |
| Improve month-2 retention | 31% | 50% | Q4 2026 |
| Increase Pro conversion | 4.2% | 8.0% | End of 2026 |
| Reduce support burden | 40% of tickets are categorisation/sync | <15% | Q3 2026 |

---

## Available Data Sources

### finwise_accounts.csv
- **What it is:** One row per account. The spine table — all other tables join back to this via `account_id`.
- **Key columns:** `plan_tier`, `user_segment`, `acquisition_channel`, `accounts_linked`, `goals_set`, `account_age_days`, `monthly_revenue`
- **Outcome variables:** `churned_90d` (boolean), `upgraded_90d` (boolean, always False for pro accounts). Snapshot date: 2026-03-01.
- **Time range:** Snapshot as of 2026-03-01. `account_age_days` reflects days since account creation at that date.
- **Row count:** 1,800 rows
- **Sampling:** No sampling applied — dataset within size limits.
- **Gaps / caveats:** No timestamp for churn/upgrade events — only 90-day outcome flags. Cannot reconstruct the exact day an account churned or upgraded within the window.

### finwise_feature_events.csv
- **What it is:** One row per feature interaction. Highest-volume table.
- **Key columns:** `user_id`, `account_id`, `feature_name`, `event_type` (used / blocked / abandoned), `timestamp`
- **Outcome variable:** Join to `finwise_accounts.csv` on `account_id` to attach `churned_90d` / `upgraded_90d`.
- **Time range:** Timestamps range from ~2025-09 to ~2026-03 based on sample inspection.
- **Row count:** 74,171 rows
- **Sampling:** No sampling applied — dataset within size limits.
- **Key signals:** `savings_goal` + `blocked` (upgrade trigger); `analysis_view` + `abandoned` (55% baseline — above baseline is a friction signal); `manual_transaction` + `abandoned` (~39% baseline).
- **Gaps / caveats:** No session ID — cannot reconstruct session-level sequences. `blocked` events only apply to free-tier users.

### finwise_monthly_snapshots.csv
- **What it is:** One row per account per month. Engagement trend table — up to 12 months of history per account.
- **Key columns:** `month`, `active_days`, `sessions`, `goals_active`, `transactions_categorised`, `transactions_uncategorised`, `notifications_sent`, `notifications_opened`, `support_tickets`, `support_ticket_category`
- **Outcome variable:** Join to `finwise_accounts.csv` on `account_id`.
- **Time range:** Monthly snapshots; most accounts have multiple months of history.
- **Row count:** 16,448 rows
- **Sampling:** No sampling applied — dataset within size limits.
- **Derived signals worth computing:**
  - `notifications_opened / notifications_sent` → notification open rate (declining trend is H2 signal)
  - `transactions_uncategorised / (transactions_categorised + transactions_uncategorised)` → uncategorised rate (>20% is friction)
  - Month-over-month `sessions` delta → engagement trajectory
- **Gaps / caveats:** `support_tickets` is 0 or 1 per month (not a count of multiple tickets). `support_ticket_category` is 'none' when no ticket exists.

### finwise_onboarding.csv
- **What it is:** One row per account per onboarding step. Six steps total, always the same six per account.
- **Key columns:** `step_name`, `completed` (boolean), `completed_at` (date, empty if not completed)
- **Outcome variable:** Join to `finwise_accounts.csv` on `account_id`.
- **Time range:** `completed_at` dates reflect when steps were finished; not all accounts have all steps completed.
- **Row count:** 10,800 rows (1,800 accounts × 6 steps)
- **Sampling:** No sampling applied — dataset within size limits.
- **Onboarding step completion rates (from product context doc):**
  - `link_first_account`: 84%
  - `complete_profile_setup`: 91%
  - `view_first_spending_summary`: 61%
  - `link_second_account`: 32%
  - `set_first_goal`: **12%** ← lowest; strongest 90-day retention predictor
  - `customise_first_category`: 14%
- **Gaps / caveats:** Steps are logged as completed or not — no time-on-step or abandonment detail within a step.

### finwise_users.csv
- **What it is:** One row per user. In this dataset, each account has exactly one primary user.
- **Key columns:** `user_id`, `account_id`, `platform`, `days_since_last_active`
- **Outcome variable:** Join to `finwise_accounts.csv` on `account_id`.
- **Time range:** `days_since_last_active` is as of snapshot date (2026-03-01).
- **Row count:** 1,800 rows
- **Sampling:** No sampling applied — dataset within size limits.
- **Gaps / caveats:** `role` is always 'primary' — no multi-user accounts in this dataset. `country` is always 'US'. `platform` duplicates the column in `finwise_accounts.csv`.

---

## Data Dictionary

Full dictionary available in `finwise-data-dictionary.md`. Key definitions for analysis:

| Column | Table | Meaning |
|---|---|---|
| `churned_90d` | accounts | Account cancelled within 90 days of 2026-03-01 |
| `upgraded_90d` | accounts | Free account converted to Pro within 90 days of 2026-03-01 |
| `event_type: blocked` | feature_events | Free-tier user hit a Pro-gated feature limit |
| `event_type: abandoned` | feature_events | User started a feature interaction but did not complete it |
| `goals_set` | accounts | Count of savings goals ever created; free-tier capped at 1 by the product |
| `set_first_goal` | onboarding | Completion of the goal creation step during onboarding (12% completion rate) |
| `days_since_last_active` | users | Days since last app open as of 2026-03-01; 14+ days is a high churn-risk threshold |

---

## Customer Voice Themes

No qualitative context available. Recommend validating hypotheses against customer calls or support data before prioritising.

One proxy signal exists in the data: `support_ticket_category` in `finwise_monthly_snapshots.csv` shows `categorisation` and `account_sync` as the dominant ticket categories (40% of total tickets per the product context doc). This suggests users experience the categorisation layer as confusing or unreliable — a potential mechanism behind uncategorised transaction accumulation.

---

## Known Gaps

- **No customer voice** — hypotheses will describe data patterns. Before acting, validate the top 1–2 hypotheses against customer call recordings or CX team input.
- **No session-level sequencing** — `finwise_feature_events.csv` has no session ID, so event order within a session cannot be reconstructed. Feature co-occurrence can be computed but not feature flow.
- **No exact churn/upgrade timestamps** — only 90-day outcome flags exist. Cannot determine whether an account churned in week 1, 6, or 12 of the window.
- **Mint refugee investment expectations** — the product context flags unmet investment account tracking as a likely cause of months 4–6 churn for this cohort. No investment feature data exists in the dataset to confirm this directly.

---

*Context base ready. Run `/eim-product-analyst finwise` to begin analysis.*
