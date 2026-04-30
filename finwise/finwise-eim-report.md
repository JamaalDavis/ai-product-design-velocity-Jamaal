# EIM Hypothesis Report — FinWise
**Dataset:** finwise_accounts.csv, finwise_users.csv, finwise_feature_events.csv, finwise_monthly_snapshots.csv, finwise_onboarding.csv
**Analysis date:** 2026-04-30
**Outcome variables:** `churned_90d` (primary), `upgraded_90d` (secondary — free accounts only)

---

## Hypothesis 1: The Goal Activation Gap

**Evidence**

88% of accounts (1,581 of 1,800) have never set a savings goal. Accounts with at least one goal set churn at 12.3% within 90 days; accounts with no goal set churn at 36.0% — a 2.9x difference (n=219 / n=1,581). The onboarding data confirms this is a funnel problem, not a capability problem: `set_first_goal` has a 12% completion rate — the lowest of all six onboarding steps — despite users having already linked a bank account and viewed their spending summary. The interaction effect compounds the signal: accounts with no goal and only one account linked churn at 42.2% (n=1,112). Accounts with a goal and two or more accounts linked churn at 4.2% (n=96) — a 10x spread between the best and worst activation profiles.

The upgrade signal is equally sharp. Free-tier accounts that have set a goal upgrade at 22.7%; free-tier accounts with no goal upgrade at 5.0% (4.5x difference). Among free accounts that hit the 1-goal limit (`savings_goal` + `blocked` event), 7.8% upgrade within 14 days — vs 0.8% for free accounts who never reach a goal block (9.75x). The upgrade trigger is real, but 88% of the user base never reaches it because they don't set a first goal in the first place.

**Impact**

At current registered user volume (380K), 88% without goals = approximately 334K accounts on the high-churn, low-conversion trajectory. If a friction-reduction intervention moves 10% of those accounts to set a goal within 14 days of sign-up (33,400 accounts), and goal-setters upgrade at 22.7% vs. 5.0% for non-setters, the incremental upgrade volume is approximately 5,900 additional Pro subscribers. At $9.99/month, that is ~$708K additional ARR — roughly a 1.9 percentage point improvement in Pro conversion rate. The current conversion target is 8.0% (from a 4.2% baseline); every 1pp improvement = ~$380K ARR. This hypothesis, fully realised, would move the needle meaningfully toward that target.

On the churn side: 334K no-goal accounts × 36% churn = ~120K accounts churning annually before they ever have a reason to stay. The revenue impact of retaining even a fraction of those accounts — whether through conversion or through extended free engagement — compounds further over lifetime.

**Mechanism**

Goal adoption is a value-visibility problem, not a discovery problem. Users reach the `set_first_goal` step but abandon it at 88%. The goal screen exists; users find it; they leave without acting. The intervention should close the gap between the goal screen and the first moment of personalised progress — the signal that tells the user the goal is real.

Specifically: redesign the goal creation flow to require less upfront commitment. Replace the current open-ended goal setup (name, amount, target date) with a guided selector of 3–5 preset goal types drawn from transaction history (e.g. "Build a $1,000 emergency fund", "Save for a vacation", "Pay off a credit card"). Pre-populate the suggested amount from the user's actual spending data. Reduce the creation step to two taps. After goal creation, show an immediate progress snapshot — e.g. "Based on your last 30 days, you could reach this in 4 months" — so the goal feels real and connected to the user's actual financial situation, not abstract.

Test with a 50/50 holdout: new goal creation flow vs current. Primary metric: `set_first_goal` onboarding completion rate (baseline 12%). Secondary: Pro upgrade rate within 30 days for the test cohort (baseline 5.0% for no-goal free users). Run for 30 days minimum.

---

## Hypothesis 2: The Second Account Trap

**Evidence**

69% of accounts (1,235 of 1,800) have only one financial account linked. Single-account users churn at 39.8% within 90 days; users with two or more accounts linked churn at 18.4% (2.2x difference). The onboarding data makes this concrete: `link_second_account` has a 32% completion rate — the second-lowest of all six steps. Accounts that completed this step churn at 17.2%; accounts that skipped it churn at 45.7% (2.7x). The single-account + no-goal combination accounts for the largest at-risk segment: n=1,112, churn rate 42.2%. This is 62% of the entire dataset on the worst-outcome path.

The mechanism is intuitive: one account linked = one view of money (usually checking). No credit card means no spending picture. No picture means no value. No value means no reason to return. The product needs at least two data sources to surface the pattern it was built to show — where your money is going across your financial life.

**Impact**

At 380K registered users, 69% with one account = ~262K single-account users. If a second-account prompt (surfaced during the post-onboarding period for users who skipped `link_second_account`) moves 15% of single-account users to link a second account (39K accounts), and their churn trajectory shifts from 39.8% to ~18.4%, approximately 8,400 fewer accounts churn within 90 days. For those who are Pro users (approximately 30% of the affected cohort), that is ~2,500 retained Pro subscribers × $119.88/year = ~$300K ARR preserved. For the free-tier accounts retained, the longer engagement window also increases the probability of eventual upgrade — the secondary revenue lever.

The lower-bound impact is meaningful on its own. The upper bound — if 25–30% of single-account users can be moved — nearly doubles the estimate.

**Mechanism**

This is a friction problem. `link_second_account` exists as an onboarding step, but 68% of users skip or don't reach it. The intervention should re-surface this step at the right moment, with the right framing.

Trigger a contextual in-app prompt 3 days after account creation, shown only to users who have one account linked and have viewed `transaction_view` or `analysis_view` at least once (they've seen the product and are still active, but the experience is incomplete). Prompt copy should frame the second account as a requirement for the product to work, not an optional extra: "Your spending picture is incomplete — you're only seeing part of your money. Link your [credit card / second bank account] to get the full view." Pre-suggest the most common account type based on what the user already has linked (if checking, suggest credit card; if savings, suggest checking).

Measure: `link_second_account` completion rate in the 7 days after prompt delivery. Baseline: organic rate is low enough that any improvement is attributable. A/B test: prompt shown vs not shown, matched on segment and days-active. Secondary metric: 90-day churn rate by prompt group.

---

## Hypothesis 3: Notification Silence Is a 30-Day Churn Signal

**Evidence**

Notification engagement tracks churn with a clear lead time. Retained accounts maintain an average open rate of 10.8% across their active months. Churned accounts drop to 3.6% average across all months — but the pattern is directional, not static. In the month before churn, open rates in churned accounts fall to 0.7%. In the month of churn, they reach 0.0%. A 30-day early-warning window exists: accounts going silent on notifications are on a predictable trajectory to full churn.

The mechanism is documented in customer voice: all current notifications are spend alerts — negative signals. Users describe the app as "accusatory." One support theme captures it directly: "I know I should look but I'm scared of what I'll see." There is no positive reinforcement in the notification system. No goal progress update. No "good week" message. No milestone. The app communicates only when the user has overspent — which means users who are struggling financially condition themselves to ignore it. Those users are also most likely to churn.

**Impact**

380K users × estimated 30% annual churn = ~114K churning accounts per year. Approximately 40% of churning accounts are Pro users at point of exit (~45K Pro churns annually). Those churns represent ~$540K ARR lost per year from Pro accounts alone. The 30-day window before silent accounts fully churn is an intervention window that currently goes unused.

If a re-engagement notification strategy (positive reinforcement, goal progress nudges, milestone recognition) recovers 10% of at-risk accounts that would have churned — 4,500 Pro accounts retained — that is ~$540K ARR. The baseline cost is low: this is a notification content and targeting change, not a new product surface. Even a 5% recovery rate justifies the investment.

**Mechanism**

Two interventions, distinct test tracks:

**Track A — Positive reinforcement notifications:** Add a second notification category alongside spend alerts. When a user has a week where spending is below their rolling average (or below category budget), send a positive acknowledgment: "Good week — you came in under budget in three categories." When a savings goal crosses a 25%, 50%, or 75% milestone, send a milestone notification. These require no new data infrastructure — the monthly snapshot data already tracks the signals; the notification system already exists. What's missing is the content type.

**Track B — Silent-account re-engagement:** Identify accounts whose notification open rate has dropped to <2% in the last 30 days and who have not opened the app in 7+ days. This is a computable flag from `finwise_monthly_snapshots`. Trigger a re-engagement message outside the standard notification cadence: not a spend alert, but a personal financial snapshot — "Here's where your money went last month" with a single actionable insight from their data. The goal is to create one session before the user fully disengages.

Measure for both tracks: notification open rate (primary), 90-day churn rate (secondary, 90-day lag). Baseline open rate for at-risk cohort: <2%. Any improvement above 5% is a positive signal worth scaling.

---

## What We Ruled Out

**Analysis view abandonment rate**
The `analysis_view` + `abandoned` event pattern (55% of chart-screen visits end within ~20 seconds) looked like a strong signal. On validation, the abandonment rate was nearly identical for churned and retained accounts. Both groups hit the analysis screen and leave quickly. This means analysis view abandonment is a product design problem — the screen isn't useful — but it is not a churn discriminator. Adding depth or recommendations to the analysis screen may improve engagement, but cannot be expected to move churn in the 90-day window. Ruled out of this analysis; worth a separate UX investigation.

**Support ticket category**
Accounts with `categorisation` support tickets were expected to show elevated churn (consistent with the 40% of support tickets being categorisation-related per product context). In the data, churn rates across all support ticket categories were clustered in the 35–41% range with no category showing a statistically meaningful difference from baseline. The signal is too noisy at this table grain to act on. Category confusion is a real problem (confirmed in customer voice) but cannot be reliably targeted via support ticket data alone.

**Acquisition channel**
Accounts acquired via `paid_social` vs `organic` showed directional churn differences, but the effect was weak (<1.3x) and within the noise threshold (required >1.5x to include). The `mint_refugee` channel showed higher early engagement and higher Pro conversion as noted in product context, but the dataset's 90-day outcome window may not capture their month 4–6 churn spike. Mint refugee cohort analysis on a longer time horizon is recommended but cannot be supported by this dataset.

---

## Recommended Next Steps

**Priority order: H1 > H2 > H3**

**H1 first.** Goal activation is both the strongest retention predictor and the primary conversion lever. The intervention (guided goal creation with preset options and immediate progress feedback) is low-complexity, directly testable, and addresses the single step with the largest drop-off in onboarding. A 30-day A/B test on the goal creation flow should be the first sprint.

**H2 in parallel or second.** The second-account prompt is a separate surface and a separate trigger condition. It can be designed and shipped alongside H1 without overlap. The intervention is a single contextual prompt — minimal engineering effort for a clear expected return.

**H3 as an ongoing instrument.** The notification signal is a leading indicator, not a root cause. Tracks A and B can be staged: start with positive reinforcement notifications (Track A, lower friction, no new data requirements), measure open rate recovery, then layer in silent-account re-engagement (Track B) once the baseline notification quality is improved. Running H3 alongside H1 and H2 also gives you a second signal on whether goal-setting and account-linking interventions are reducing notification disengagement over time.

**Confidence note:** H1 and H2 are high-confidence. The signals are large, consistent across segments, and supported by both the data and the customer voice themes. H3 is medium-confidence: the directional signal is clear, but the 90-day outcome window in this dataset limits the ability to measure re-engagement effects. The 30-day leading window exists — the question is how much churn is recoverable vs. already decided. Recommend tracking H3 as a lagging instrument while H1 and H2 are in test.
