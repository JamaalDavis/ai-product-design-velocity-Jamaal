# EIM Hypothesis Report
**Dataset:** clearpath_accounts.csv, clearpath_users.csv, clearpath_monthly_snapshots.csv, clearpath_feature_events.csv, clearpath_onboarding.csv  
**Analysis date:** 2026-04-09  
**Outcome variables:** `churned_90d` (base rate: 16.0%), `upgraded_90d` (base rate: 7.8%)  
**Total accounts:** 600

---

## Hypothesis 1: Course completion rate below the 25th percentile is the single strongest churn predictor — stronger than plan tier or vertical

**Evidence**  
Accounts in the bottom completion rate quartile (avg monthly completion rate <~65%) churned at 62.0% within 90 days — against a population base rate of 16.0% (n=150, 3.9x the base rate). Accounts in any of the top three quartiles churned at ≤1%. This effect holds when controlled for plan tier: low-completion pro accounts churned at 66.7% (n=33) vs 0.8% for high-completion pro accounts (n=260, 86x difference). It also holds across every vertical tested — financial services, professional services, and legal all showed 52–63% churn in the low-completion group vs near-zero for high-completion accounts in the same vertical.

**Impact**  
150 accounts currently sit in the bottom completion quartile, with an average ACV of $9,066. At a 62% churn rate, ~93 of these accounts are expected to churn — representing approximately $843K ARR at risk. A 25% reduction in churn for this segment alone would retain ~$211K ARR annually. Because the effect is strongest in the pro tier (where ACV is higher and the signal is clearest), priority intervention there likely yields the fastest return.

**Mechanism**  
Build an admin-facing "Completion Health" card surfaced on the Clearpath home screen, showing the account's rolling 30-day course completion rate against a benchmark band (e.g. "Healthy: >80% | At risk: 50–80% | Critical: <50%"). When an account's completion rate drops below 65% for two consecutive months, trigger an automated in-app notification to the admin role with three specific actions: (1) identify teams with no completions in 30 days, (2) resend reminder to incomplete learners with one click, (3) link to the reminder automation setup wizard if not yet configured. Test with a 50/50 holdout on accounts entering the at-risk band for the first time.

---

## Hypothesis 2: Skipping employee directory sync creates a 3.9x churn gap — and it's the most recoverable onboarding gap post-signup

**Evidence**  
253 accounts (42% of the population) never completed the `sync_employee_directory` onboarding step. These accounts churned at 28.1% vs 7.2% for accounts that completed the sync (n=253 / n=347, 3.9x difference). The gap persists across plan tiers: of the 253 un-synced accounts, 124 are on starter, 98 on pro, and 31 on enterprise — meaning this is not a gating issue. Pro accounts without directory sync churned at approximately 2x the rate of synced pro accounts. The most common reason for skipping, based on product context, is that admins defer the sync intending to do it "after setup" and then never return to it.

**Impact**  
253 at-risk accounts × 28.1% churn rate × average ACV of $17,226 = approximately $1.22M ARR at risk annually. A 30% reduction in churn for this group — achievable by moving some fraction through the sync step — would retain ~$367K ARR. Because un-synced accounts have a lower average ACV ($17,226 vs $22,906 for synced accounts), this segment likely includes many mid-market accounts who bought on a small-team basis and haven't yet expanded.

**Mechanism**  
At day 7 post-signup, trigger a targeted in-app banner for any admin who has published a course but has not yet connected a directory source. The banner should show the number of learners who have been manually assigned vs the total employees on the account (surfacing the gap visually), and offer two paths: (1) connect HRIS via pre-built connectors for the top 5 HRIS tools, or (2) upload a CSV employee list as a fallback for accounts without a supported HRIS. Remove the banner only on completion — not on dismissal. Track time-to-sync as the leading metric; target median time-to-sync <14 days for new accounts.

---

## Hypothesis 3: Skipping reminder configuration drives 4.1x higher churn — and for starter accounts, the feature gate is blocking the action entirely

**Evidence**  
Accounts that did not complete the `configure_reminders` onboarding step churned at 27.5% vs 6.6% for those that did (n=269 / n=331, 4.1x difference). When segmented by plan tier, the effect is sharpest on starter (skipped=38.7%, n=150 vs completed=16.4%, n=61) and remains strong on pro (skipped=15.3%, n=85 vs completed=5.3%, n=208). Critically, the `reminder_automation` feature is gated above the starter tier — meaning many of the 150 starter accounts that skipped this step could not have completed it even if they tried. 164 starter accounts have at least one `reminder_automation` blocked event, confirming active intent to use the feature. These accounts upgrade at 14% vs 9% for starter accounts without blocks — a 1.6x higher upgrade rate, signalling clear latent demand.

**Impact**  
The 269 accounts that skipped reminder configuration have an average ACV of $16,477 and a 27.5% churn rate — approximately $1.22M ARR at risk (269 × 27.5% × $16,477). Even a 20% churn reduction for this group = ~$244K ARR retained. On the upgrade side: the 164 starter accounts actively hitting reminder blocks already upgrade at 14%. A targeted trial unlock that moves even 5 percentage points more of this group to upgrade = ~8 additional conversions × $13,466 average plan delta = ~$110K incremental upgrade revenue.

**Mechanism**  
Run a 60-day trial unlock of `reminder_automation` for all starter accounts that have published at least one course but have not yet configured a reminder. Surface the trial with a contextual banner immediately after the `publish_first_course` step: "Your learners won't receive automatic reminders on your current plan — try it free for 60 days." After 60 days, show a conversion prompt that quantifies what automation did for them (e.g. "Your reminders drove 12 completions this month — keep automating by upgrading to Pro"). Track reminder_configured rate and upgrade conversion as the two primary metrics.

---

## Hypothesis 4: Accounts with 0–1 integrations are stuck in a churn band that 2 integrations reliably breaks

**Evidence**  
Integration count is a near-continuous churn predictor: 0 integrations → 33.1% churn (n=136), 1 integration → 23.3% churn (n=146), 2 integrations → 8.0% churn (n=88), 3+ integrations → ≤7% churn. The jump from 1 to 2 integrations is the most consequential threshold — churn drops by ~15 percentage points. This effect is not a proxy for plan tier: pro accounts with ≤1 integration still churn at 16.1% (n=62), compared to 5.8% for pro accounts with 2+ integrations (n=231, 2.8x difference). Enterprise accounts with ≤1 integration are not present in sufficient numbers to test independently, but the pattern is consistent across starter and pro.

**Impact**  
136 accounts with 0 integrations × 33.1% churn × avg ACV of $10,002 = ~$450K ARR at risk. 146 accounts with 1 integration × 23.3% churn × avg ACV of $9,644 = ~$328K ARR at risk. Combined: approximately $778K ARR at risk across the 0–1 integration band. Moving even 20% of these accounts to 2 integrations (at which point churn drops to ~8%) would reduce expected churn by ~$130K ARR annually, based on the observed rate differential.

**Mechanism**  
At day 14, trigger an in-app prompt specifically for accounts with exactly 1 integration connected: "Most teams that connect a second system see 2x more course completions — here's what works with [connected tool]." The prompt should dynamically surface the top 3 most common second integrations for accounts sharing the same first integration (e.g. BambooHR users → Slack, Workday → SSO, CSV import → Slack). Link directly to the integration wizard for each option. For 0-integration accounts live more than 7 days, surface the same prompt in the weekly summary email sent to the admin. Track integration_count change at day 30 as the leading metric.

---

## What We Ruled Out

**Training type diversity (1–4 types used)**  
Initial inspection showed accounts using all 4 training types at 15% churn vs 91% for accounts using only 3 types. However, n=11 for the 3-type group is far below the n≥30 threshold — this is noise, not signal. The vast majority of accounts (98%) used all four training types, making diversity a near-constant in this dataset. Not actionable.

**Acquisition channel**  
Referral accounts churned at 13% vs 17% for paid search and organic — a 1.3x difference, below the 1.5x threshold for flagging as a signal. The effect is small and does not interact meaningfully with plan tier or vertical. Not prioritised.

**High overdue certifications**  
Accounts in the top quartile for average overdue certifications churned at 21% vs 14% for lower-overdue accounts — a 1.5x difference that just clears the threshold. However, the effect does not hold cleanly when controlled for completion rate, which already captures the same dynamic. Overdue certifications are likely a downstream consequence of low completion rates rather than an independent driver. Not included as a separate hypothesis to avoid duplicating the mechanism.

**Billing tickets in month 1**  
Starter accounts that raised a billing ticket in their first month churned at 58.3% vs 30.7% for those without — a clear 2x signal in direction. However, n=12 for the billing-ticket group is too small to act on reliably. The pro-tier version of this signal (billing ticket → 15.4% vs 7.9% churn, n=13) has the same sample size problem. Worth monitoring as a leading indicator, but insufficient for a product intervention brief at this stage. Flag for reanalysis when n ≥ 30.

**Country / geography**  
Not analysed as a segmentation variable — too low information density relative to vertical and company size, and no hypothesised product mechanism that differs by country in the Clearpath context.

---

## Recommended Next Steps

**Ranked by confidence × impact:**

| Rank | Hypothesis | Confidence | Impact | First action |
|---|---|---|---|---|
| 1 | H2: Directory sync gap | High | $1.22M at risk → ~$367K saved (30% scenario) | Ship day-7 banner with HRIS connector + CSV fallback |
| 2 | H3: Reminder gate (churn + upgrade) | High | $1.22M churn + $110K upgrade upside | Enable 60-day trial unlock for starter accounts post first course |
| 3 | H1: Completion rate collapse | High | $843K at risk → ~$211K saved (25% scenario) | Build Completion Health card; pair with H2 banner as complementary alert |
| 4 | H4: Second integration threshold | Medium-high | $778K at risk → ~$130K saved (20% scenario) | Build integration pairing prompts after H2/H3 ship |

**Start with H2 and H3 in parallel** — both address onboarding gaps with well-scoped in-product interventions that can be built and A/B tested within a single sprint. H2 (directory sync) requires an engineer for the banner and HRIS connector; H3 (reminder trial unlock) requires a feature flag and a conversion email sequence only.

**H1** (completion rate alert) is the highest-leverage long-term instrument — once built, it serves as an ongoing early-warning system for accounts deteriorating post-onboarding, independent of which onboarding gap originally drove the low completion rate.

**H4** should follow once an integration recommendation pipeline is in place — the mechanism depends on knowing which integrations are common pairings, requiring a small data pipeline to compute and serve dynamically.
