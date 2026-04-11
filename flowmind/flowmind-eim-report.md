# EIM Hypothesis Report
**Dataset:** flowmind_accounts.csv, flowmind_onboarding.csv, flowmind_feature_events.csv, flowmind_monthly_snapshots.csv, flowmind_users.csv  
**Analysis date:** 2026-04-04  
**Outcome variables:** `churned_90d` (base rate: 16.4%), `upgraded_90d` (base rate: 10.2%)  
**Total accounts:** 1,800

---

## Hypothesis 1: Small accounts that skip the second integration churn at 3.7x the rate of those that complete it

**Evidence**  
Accounts in the small company segment (20–50 employees) that did not complete the `connect_second_integration` onboarding step churned at 40.7% within 90 days, versus 11.1% for small accounts that completed it (n=312 vs n=485) — a 3.7x difference. This effect is specific to small accounts. In mid-size accounts (51–200 employees), skipping `connect_second_integration` produces no meaningful churn difference (11.4% skipped vs 12.6% completed, n=290/n=412). In large accounts, the difference is similarly flat. The signal holds across all plan tiers within the small segment: starter (40.9% vs 13.3%), pro (41.9% vs 10.5%), and enterprise (35.5% vs 5.6%). It is present across all acquisition channels, strongest in paid_search (41.0% vs 18.1%) and partner (55.6% vs 12.8%) cohorts.

**Impact**  
312 small accounts skipped `connect_second_integration` at the time of this snapshot. At a 40.7% churn rate and a mean ACV of $13,756, these accounts represent approximately $1.75M ARR at risk annually. A 25% reduction in churn for this segment — moving from 40.7% to ~30.5% — would retain approximately $437K ARR per year. This is a conservative estimate; it excludes downstream expansion value from retained accounts and does not account for the compounding effect of integration count on switching costs.

**Mechanism**  
For any account where `company_size = small` and the `connect_second_integration` onboarding step remains incomplete after day 2 post-signup, trigger an in-app modal surfaced to the admin role on day 3. The modal should not be generic — use the account's first connected integration to suggest the top 3 most common second integration pairings made by similar small accounts (e.g. "Teams using Salesforce typically connect HubSpot or Slack next"). Include a one-click "Connect now" CTA that opens the integration catalogue pre-filtered to those suggestions. Dismiss state is stored per-session and the modal does not reappear after dismissal. Complement this with a day-5 email to the admin if the step still hasn't been completed. Run a 50/50 holdout test with `connect_second_integration` completion rate as the primary metric and `churned_90d` as the 90-day lagging secondary metric. Minimum test duration: 6 weeks.

---

## Hypothesis 2: Pro-tier RevOps accounts crossing 4 integrations upgrade to Enterprise at 70.8% — but 62 near-threshold accounts remain stuck at 2–3

**Evidence**  
Pro-tier accounts in the RevOps vertical that have connected 4 or more integrations upgraded to Enterprise within 90 days at a rate of 70.8% (n=48). This compares to an overall Pro upgrade rate of 13.9% (n=674) — a 5.1x difference. The effect is highly specific to RevOps: Pro accounts with 4+ integrations in other verticals upgrade at 15.9% (n=126), elevated but not at the same magnitude. Within RevOps, the upgrade rate at 2–3 integrations is just 4.8% (n=62), meaning the gap between near-threshold and above-threshold is stark. There are currently 62 Pro RevOps accounts sitting at 2–3 integrations who have not yet crossed the threshold.

**Impact**  
The 62 near-threshold Pro RevOps accounts have a mean ACV of $15,908 (Pro tier). Enterprise mean ACV is $72,879 — a delta of ~$57,950 per conversion. Under a conservative scenario where an integration-nudge intervention converts 30% of the near-threshold pool (18 accounts) to 4+ integrations, and those accounts then upgrade at the observed 70.8% rate (~12–13 upgrades), the incremental ARR opportunity is approximately $695K. Even at half that conversion rate, the opportunity exceeds $347K — making this the highest-yield expansion play identified in the data.

**Mechanism**  
For Pro accounts in the RevOps vertical with `integration_count` between 2 and 3, surface a persistent (non-dismissable) "integration milestone" banner in the main dashboard, visible to admin and member roles. The banner uses social proof framing: "RevOps teams like yours typically connect 4–6 tools — you're at [X]. See what they connect next." Clicking surfaces the integration catalogue filtered to the top 5 integrations connected by Pro RevOps accounts with 4+ integrations (based on actual platform data — `bulk_export` and `notification_trigger` dominate RevOps usage; pair accordingly). Track `integration_count` change over 90 days as the primary metric. Use the prior 90-day baseline for the same segment as the comparison group rather than a holdout, since the near-threshold pool is small (n=62). Measure `upgraded_90d` as the secondary metric at the 90-day mark.

---

## Hypothesis 3: Month-1 billing support tickets predict 90-day churn at 2.3x the rate of product or integration tickets — and 74% are from paid search accounts

**Evidence**  
Accounts that raised a billing-category support ticket in their first month churned within 90 days at 32.2%, compared to 14.3% for accounts that raised product or integration tickets in month 1 (n=214 billing vs n=330 other) — a 2.3x difference. The effect is present across all acquisition channels but is heavily concentrated in paid search: 74.3% of all month-1 billing tickets come from paid search accounts, which churn at 35.8% when they raise a billing ticket (n=159). Referral-sourced accounts that raise billing tickets churn at a lower rate (16.7%, n=18) — suggesting the billing friction is primarily driven by expectation mismatch at acquisition, not product failure. The effect holds across plan tiers: starter paid-search + billing = 40.8% churn (n=71), pro = 31.8% (n=66), enterprise = 31.8% (n=22). Billing tickets represent only 12.6% of all month-1 support tickets, which is why this signal is masked in aggregate churn data.

**Impact**  
214 accounts raised billing-category tickets in month 1. At a 32.2% churn rate versus the 14.3% non-billing baseline, approximately 38 accounts churned in excess of what would be expected — attributable to billing friction rather than product dissatisfaction. At a mean ACV of $17,090 for billing-ticket accounts, this represents approximately $657K ARR lost annually to billing-friction churn. A 25% reduction in this excess churn — achievable through faster response and expectation alignment — would retain approximately $164K ARR per year. The mechanism cost is low: this is primarily a CX and sales ops intervention, not a product build.

**Mechanism**  
Two-part intervention. **Part 1 (CX):** Route any billing-category ticket raised within the first 30 days to a dedicated new-account success agent (separate queue from general support) with a 4-hour response SLA. Equip this agent with a CRM flag that marks the account as billing-friction churn-risk. The agent's goal is expectation reset, not ticket closure — they should proactively walk the account through what the plan includes, offer a 15-minute call if needed, and flag misalignments to the sales team. **Part 2 (Acquisition):** Audit paid search ad copy and landing page messaging for the top 3 plan-tier pages. The 74% paid search concentration of billing tickets strongly suggests misrepresentation of pricing, features, or limits at acquisition. Run a copy experiment that makes plan limits (workflow runs, seats, integrations) explicit in the ad and landing page. Track `support_ticket_category = billing` rate in month 1 as the primary metric for Part 2, and `churned_90d` for billing-ticket raisers as the primary metric for Part 1. Measurement window: 90 days from ticket creation date.

---

## Hypothesis 4: Starter IT ops and Finance accounts repeatedly blocked on `approval_routing` upgrade at 1.3x the base rate — but no in-product pathway exists to convert them

**Evidence**  
Starter-tier accounts in the IT ops and Finance verticals that have hit the `approval_routing` feature gate (i.e., received a `blocked` event on `approval_routing`) upgrade to Pro within 90 days at a rate of 12.6–13.0% (n=294), compared to the overall starter upgrade rate of 9.8% (n=909) — a 1.29x difference. The frequency of blocked events is high: the median account in this group has been blocked 15.5 times, with the 75th percentile at 20 blocks. The upgrade rate is relatively stable across blocked-event frequency buckets (1-5 blocks: 14.3%; 6-15: 10.7%; 16-30: 14.2%; 31+: 16.7%), suggesting the upgrade intent is latent but persistent rather than triggered by a specific frustration threshold. These accounts have a mean ACV of $2,989 on starter; upgrading to Pro (mean ACV $14,929) represents a $11,940 ARR delta per account.

**Impact**  
294 starter IT ops and Finance accounts are actively blocked on `approval_routing`. At the current organic upgrade rate of 12.6%, approximately 37 will upgrade naturally. A targeted upgrade nudge that lifts conversion by 30% relative (from 12.6% to ~16.4%) would generate approximately 11 additional upgrades, representing ~$131K incremental ARR. This is a conservative floor — it doesn't account for the pipeline of new IT ops and Finance starter accounts who will hit this gate in future quarters, nor the churn reduction from accounts who currently churn because the workaround for missing `approval_routing` fails them.

**Mechanism**  
When a starter IT ops or Finance account has accumulated 10 or more `blocked` events on `approval_routing` within any 30-day window, trigger an in-app upgrade prompt surfaced to the admin role. The prompt should be contextual — shown immediately after the next block event, not as a separate notification. Message: "Your team has been waiting on approval routing [X] times this month. Unlock it on Pro — see what you get." Include a one-click path to the Pro upgrade flow pre-populated with the account's current seat count. For accounts with a high-value admin (determined by role and login frequency), also trigger an outbound sequence from the sales team at the 15-block threshold. Track `upgraded_90d` for the target segment as the primary metric versus the prior-period baseline. Secondary metric: `churned_90d` for accounts that do not upgrade, to quantify the cost of not converting.

---

## What We Ruled Out

**Engagement decay (active_days declining over 3 months)**  
Accounts showing a decline of more than 3 active days over their most recent 3 months churned at 16.4% versus 16.1% for stable/growing accounts. No meaningful signal. Decay in active days does not predict churn in this dataset — possibly because churn events happen before a prolonged decay is detectable, or because day-level activity is too coarse a measure.

**Error rate above 5%**  
Accounts with an average workflow error rate above 5% (the threshold identified in the product context as a healthy-account signal) churned at 16.5% versus 15.4% for low-error accounts. Despite being flagged in the product context as a retention predictor, this did not show a statistically meaningful signal in the data. The signal may be masked by the fact that nearly all accounts (1,722 of 1,800) fall into the high-error bucket by this definition — the threshold may need recalibration.

**Seat utilisation below 30%**  
Low seat utilisation correlated with only a modest churn increase (18.3% vs 16.4%, n=82 vs n=1,718). The effect is too small and the low-utilisation cohort too small to act on. Pro accounts with low utilisation churn at 18.2% — not markedly different from the Pro average of 15.1%.

**Invite team member onboarding step**  
Completing the `invite_team_member` step shows no meaningful churn differentiation (completed: 16.8%, skipped: 15.7%). Despite being part of the healthy-account pattern described in the product context, this step does not independently predict retention in the data — likely because it is correlated with other completion steps rather than being a standalone signal.

**Country**  
Churn rates are consistent across all geographies (AU: 16.8%, NZ: 16.4%, SG: 16.1%, GB: 15.2%, US: 11.3%). The US figure looks lower but n=53 — too small to conclude anything. No country-specific intervention is warranted.

**Bulk export and workflow templates usage**  
Both features are used by essentially all accounts (bulk_export: 100% of accounts, workflow_templates: 99.6%). With no variation in usage, neither can predict outcomes. Ruled out as signals.

**`approval_routing` usage as a churn reducer at pro/enterprise tier**  
All Pro and Enterprise accounts use `approval_routing` (100% usage rate), making it impossible to compare users vs non-users. No meaningful signal can be derived from this dimension.

---

## Recommended Next Steps

**Ranked by confidence × impact:**

| Rank | Hypothesis | Confidence | Impact | First action |
|---|---|---|---|---|
| 1 | H1: Small accounts + second integration | High | $437K ARR saved (25% scenario) | Ship the day-3 admin modal with integration pair suggestions |
| 2 | H2: Pro RevOps 4+ integration upgrade | High | $695K incremental ARR (30% scenario) | Build integration milestone banner for the 62 near-threshold accounts immediately |
| 3 | H3: Billing m1 ticket churn | High | $164K ARR saved (25% scenario) | Create billing ticket triage queue and SLA this week; ad copy audit within 2 weeks |
| 4 | H4: Starter IT ops/Finance upgrade nudge | Medium | $131K incremental ARR (30% lift) | Instrument blocked-event frequency in CRM; build upgrade prompt at 10-block threshold |

**Where to start:** H1 and H2 together are the highest-leverage combination. H1 defends $437K ARR at risk from churn; H2 goes after $695K in expansion revenue. Both require product builds, but H2 can be partially addressed with a manual outreach campaign to the 62 near-threshold accounts while the in-product surface is being built. H3 (billing ticket triage) can be shipped as a process change this week with no product work required — highest speed-to-value ratio.
