# EIM Context Base — FinWise
*Generated: 2026-04-30*
*Sources: finwise-product-context.md, finwise-intro.md, finwise-data-dictionary.md, finwise-company-b-data-brief.md, finwise_accounts.csv, finwise_feature_events.csv, finwise_monthly_snapshots.csv, finwise_onboarding.csv, finwise_users.csv*

---

## What the Product Does

FinWise is a US-based personal finance app that helps Americans aged 25–40 track spending, set savings goals, and understand where their money actually goes. It runs on a freemium model — free tier for core tracking, FinWise Pro at $9.99/month for savings goals, budget automation, and bill tracking. The core job-to-be-done: reduce the cognitive load and shame of managing money for users who earn enough to care about their finances but not enough to afford a financial advisor.

## User and Account Types

**Primary user:** US-based, aged 25–40, earning $45K–$120K/year. Financially anxious. Wants to be better with money but struggles with consistency.

**User segments in the data:**
- `anxious_tracker` (30%) — tracks spending but avoids the numbers emotionally
- `budget_focused` (25%) — wants to stay within limits
- `savings_motivated` (18%) — saving toward a specific goal
- `mint_refugee` (8%) — migrated from Mint after its March 2024 shutdown; higher engagement, higher Pro conversion, higher month 5–6 churn
- `new_to_tracking` (19%) — first finance app, low baseline engagement

**Note on mint_refugee cohort:** these users have higher early engagement (avg 2.9 sessions/week at day 30 vs 1.6 for organic) and higher Pro conversion (7.1% vs 3.8%), but carry unmet expectations around investment account tracking and shared household features that Mint supported. Segment them separately when assessing retention.

## Pricing and Plan Structure

| Tier | Price | Key access |
|---|---|---|
| `free` | $0 | All tracking features. 1 savings goal maximum. |
| `pro` | $9.99/month | Unlimited savings goals, budget automation, bill tracking. |

**Critical for analysis:** The `savings_goal` feature is Pro-gated. Free-tier users hitting the 1-goal limit generate a `blocked` event. 71% of Pro upgrades happen within 14 days of a `savings_goal` + `blocked` event. This is the single most important conversion signal in the data. Any hypothesis touching goal adoption also touches Pro conversion.

**Revenue leverage:** every 1pp improvement in Pro conversion = ~$380K ARR at current user volume (380K registered users, $9.99/month Pro).

## What Healthy Usage Looks Like

A retained Pro subscriber at month 3+ has all of:
- At least one active savings goal created within the first 14 days
- Two or more financial accounts linked
- App opened 3+ times/week in month one
- Notifications engaged with at least once/week in first 30 days
- Fewer than 15% of transactions uncategorised at day 30

The clearest early churn profile: one account linked, no savings goal set, transactions viewed once or twice, then silence. This account has no personalised stake in the product.

## Known Friction Points and Risk Signals

From product context and customer voice:

1. **Goal adoption gap** — savings goal completion at 12% in onboarding despite being the strongest retention predictor. Users report goals feel abstract, lack feedback loops, and produce no celebration moment when milestones are reached. "I set a goal and then forgot it existed."

2. **Category confusion** — transactions landing in wrong categories; "Other" bucket growing unchecked; manual recategorisation consuming session time. 40% of support tickets are "where did my money go?" confusion questions.

3. **Notification fatigue** — all current notifications are spend alerts (negative signals). No positive reinforcement. Open rate has dropped from 41% to 18% over 6 months. Users report alerts feel accusatory. "I know I should look but I'm scared of what I'll see."

4. **Analysis view drop-off** — 55% of users who reach the charts screen exit within 20 seconds. The app shows the number but provides no recommended action. "It gives me all this data but I don't know what to do with it."

5. **Shared finances unaddressed** — no household view, no multi-user support. Approx. 18% of the user base likely manages money with a partner but only has a single-user view. Most-requested feature category.

6. **Investment tracking blind spot** — FinWise shows bank and credit card data only. Investment accounts (401k, brokerage, crypto) are invisible. Net worth calculations are incomplete. Users leave the app mid-session to check separate investment apps, breaking the habit loop.

## Available Data Sources

### finwise_accounts.csv
- **What it is:** One row per account. Spine table — all other tables join back to this.
- **Key columns:** `plan_tier`, `user_segment`, `platform`, `acquisition_channel`, `accounts_linked`, `goals_set`, `account_age_days`, `monthly_revenue`
- **Outcome variable:** `churned_90d` (primary), `upgraded_90d` (secondary — free accounts only)
- **Row count:** 1,800
- **Sampling:** None — within size limit
- **Gaps:** No timestamp for churn or upgrade events — just binary outcome flags at snapshot date

### finwise_users.csv
- **What it is:** One row per user. One primary user per account in this dataset.
- **Key columns:** `platform`, `days_since_last_active`
- **Outcome variable:** Via join to `finwise_accounts`
- **Row count:** 1,800
- **Sampling:** None

### finwise_feature_events.csv
- **What it is:** One row per feature interaction. Highest-volume table.
- **Key columns:** `feature_name`, `event_type` (used/blocked/abandoned), `timestamp`
- **Outcome variable:** Via join to `finwise_accounts` on `account_id`
- **Row count:** 74,171
- **Sampling:** None — within size limit (6.1MB)
- **Important event patterns:** `analysis_view` + `abandoned` = reached charts screen, left within ~20s (55% rate); `savings_goal` + `blocked` = free-tier user hit 1-goal limit (primary upgrade trigger); `manual_transaction` + `abandoned` = started but didn't complete manual entry (~39% rate)

### finwise_monthly_snapshots.csv
- **What it is:** One row per account per month. Up to 12 months of history per account.
- **Key columns:** `active_days`, `sessions`, `goals_active`, `transactions_categorised`, `transactions_uncategorised`, `notifications_sent`, `notifications_opened`, `support_tickets`
- **Outcome variable:** Via join to `finwise_accounts`
- **Row count:** 16,448
- **Sampling:** None
- **Derived signals:** `notifications_opened / notifications_sent` = open rate (declining trend is H2 signal); `transactions_uncategorised / total transactions` = uncategorised rate; month-over-month `sessions` change = engagement trajectory

### finwise_onboarding.csv
- **What it is:** One row per account per onboarding step. Six steps total.
- **Key columns:** `step_name`, `completed` (boolean), `completed_at`
- **Outcome variable:** Via join to `finwise_accounts`
- **Row count:** 10,800 (1,800 accounts × 6 steps)
- **Sampling:** None
- **Step completion benchmarks:** `link_first_account` 84%, `complete_profile_setup` 91%, `view_first_spending_summary` 61%, `link_second_account` 32%, `set_first_goal` 12%, `customise_first_category` 14%

## Data Dictionary

Full schema in `finwise-data-dictionary.md`. Key relationships:

- All tables join on `account_id`
- `finwise_feature_events` also exposes `user_id` (joins to `finwise_users`)
- `churned_90d` and `upgraded_90d` are the outcome labels — all hypotheses should connect back to one or both

## Customer Voice Themes

Seven themes from customer research and support data. Most analytically relevant for EIM:

1. **Goal abandonment and invisibility** — "I set a goal and then forgot it existed." Goals lack a feedback loop, no milestone celebration, no nudge when progress slips. Adoption at 12% despite high retention correlation.

2. **Data without direction** — "I know I overspend. The app just shows me the number." The analysis view surfaces spend data but provides no recommended next step. Users arrive at the screen and leave without acting.

3. **Category confusion** — "The categories never match how I actually spend. Half my transactions end up in 'Other'." Supports the 40% support ticket volume around categorisation. Trust in the data is low.

4. **Notification fatigue and shame avoidance** — "I know I should look but I'm scared of what I'll see." All alerts are negative. Users conditioning to ignore or avoid. "I had a really good month and the app didn't say anything."

5. **Shared finances** — "My partner and I use different apps and argue about whose numbers are right." Most-requested feature. ~18% of user base likely households with single-user view.

6. **Investment blind spot** — "My net worth calculation is completely wrong because it doesn't include my 401(k)." Second most-requested feature. Users leave the app to check brokerage accounts, breaking the habit loop.

7. **Emotional avoidance** — Users avoiding the app when they know they've overspent. No shame-reduction mechanism. No positive reinforcement for good weeks.

## Known Gaps

- **No session-level timestamps for onboarding** — `completed_at` is date-only, not datetime. Cannot compute exact time-to-completion within a session.
- **No investment account data** — investment tracking is a top customer request but invisible in the dataset. Hypotheses about investment tracking will rely on customer voice only, not behavioural signals.
- **No household data** — shared finance use is inferred from segment and feature requests, not observable in the data. Hypotheses about shared finances will be directional, not quantified.
- **Support ticket categories** are in monthly snapshots but ticket text/content is not available. Cannot distinguish subtypes within `categorisation` tickets.

---
*Context base ready. Run `/eim-product-analyst finwise` to begin analysis.*
