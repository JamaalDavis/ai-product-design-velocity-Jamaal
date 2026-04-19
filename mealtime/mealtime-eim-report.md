# EIM Hypothesis Report — Mealtime
**Dataset:** mealtime_accounts.csv, mealtime_feature_events.csv, mealtime_monthly_snapshots.csv, mealtime_onboarding.csv, mealtime_users.csv
**Analysis date:** 2026-04-19
**Outcome variable:** `churned_90d` (primary), `upgraded_90d` (secondary)
**Accounts analysed:** 1,800 | **Overall 90-day churn rate:** 21.1%

> **Note on ACV scale:** Mealtime is a consumer subscription product ($7.99/month premium, $12.99/month family). Average paid ACV is ~$92/year. ARR impact figures reflect this — the opportunity is in churn rate reduction across a volume business, not large per-account recovery.

---

## Hypothesis 1: The Meal Plan Creation Gap — 39% of Accounts Never Form the Core Habit

**Evidence**

704 accounts (39% of all accounts) never completed the `create_first_meal_plan` onboarding step. These accounts churn at 36.4% within 90 days, compared to 11.2% for accounts that completed the step (n=704 vs n=1,096 — 3.2x churn ratio). The effect holds across every user segment tested: family_planning skippers churn at 38.1%, health_fitness at 36.5%, budget_cooking at 36.4%. There is no segment where skipping this step is safe. Free-tier skippers churn at 43.0% (n=263); premium at 34.4% (n=331); family at 26.4% (n=110).

The pattern is consistent with what the product context predicts: accounts that never create a meal plan are using Mealtime as a recipe browser, not a planning tool. They do not form the core habit. They disengage without a loud cancellation event.

**Impact**

441 paid skippers × 32.4% churn rate = 143 paid churners. At an average ACV of $92, this represents approximately **$13,171 in ARR at risk annually** from paid accounts alone. A 25% reduction in churn for this segment = approximately **$3,293 ARR retained per year**. Free-tier skippers (n=263, 43% churn) represent a secondary opportunity — accounts that could be converted before they disengage entirely.

**Mechanism**

The meal plan creation step exists in onboarding but 39% of users do not complete it — suggesting it is either framed as optional, arrives too late in the flow, or lacks enough scaffolding to make it feel achievable in the moment. Intervention: redesign the `create_first_meal_plan` onboarding step as a guided, pre-populated experience rather than an empty canvas. Present the user with 3–5 recommended weekly meal templates matched to their taste profile (if completed) or to their stated dietary preference (if not), and allow them to adopt one with a single tap before they reach the home screen. The template lowers the activation energy from "build something" to "choose something." Test with a 50/50 holdout. Primary metric: % of new accounts with ≥1 meal plan created within 7 days. Guard rail: onboarding completion rate must not drop >2pp.

---

## Hypothesis 2: The Double-Skip Compound — Taste Profile + Meal Plan Create a 5.4x Churn Risk

**Evidence**

329 accounts skipped both `complete_taste_profile` and `create_first_meal_plan`. These accounts churn at 45.9% — the highest churn rate of any segment identified in this analysis. Accounts that completed both steps churn at 8.5% (n=763). That is a **5.4x churn ratio** between the best-activated and worst-activated cohorts. The taste profile step is causally upstream: accounts that skipped taste profile but completed meal plan creation still churn at 17.4% (n=333) — double the rate of those who completed both (8.5%). The taste profile drives recipe relevance, which makes meal plan creation feel worthwhile.

Taste profile completion rate is 63.2%. Of the 662 skippers, 329 (50%) also never created a meal plan — meaning taste profile skip has a 50% probability of predicting meal plan skip. These two steps are not independent.

**Impact**

199 paid double-skippers × 42.7% churn = 85 paid churners × $92 ACV = approximately **$7,647 ARR at risk**. 25% churn reduction = **$1,912 ARR retained**. The combined opportunity (H1 + H2) is not simply additive — many accounts are in both segments — but the priority is clear: getting taste profile completion up will pull meal plan completion with it.

**Mechanism**

The taste profile step is currently skippable. Skipping it leads to generic recommendations, which means users immediately see an irrelevant recipe feed, have no motivation to plan meals, and disengage. Intervention: make `complete_taste_profile` the first and required step of onboarding, framed as personalisation ("Tell us what you like so we can show you recipes worth cooking") rather than setup. Reduce to 3 questions maximum (dietary preference, cuisine affinity, cooking time budget) to minimise friction. Gate access to `recipe_browse` and `meal_plan_builder` behind taste profile completion. Test with a 50/50 holdout comparing required vs skippable taste profile. Primary metric: % of accounts completing taste profile within session 1. Guard rail: sign-up completion rate must not drop >2pp.

---

## Hypothesis 3: The Paywall Moment — Habit-Formed Free Users Are Converting at Half Their Potential

**Evidence**

661 free accounts have hit at least one blocked feature event. The most-blocked feature is `grocery_sync` (4,738 block events), followed by `collection_create` (3,188) and `recipe_import` (2,824). Of these, 401 free accounts have also completed `create_first_meal_plan` — they have formed the core habit and are actively running into the paywall. These habit-formed free accounts upgrade at 7.0% (n=401). Free accounts that hit the paywall without a completed meal plan upgrade at 4.2% (n=260). The habit-formed group converts at 1.7x — but 7% upgrade rate for users who are both engaged and paywalled is low. Freemium benchmarks for habit-formed cohorts in consumer SaaS typically run 12–20%.

**Impact**

401 free accounts currently upgrading at 7.0% = ~28 upgrades. Improving to 15% (conservative freemium benchmark for engaged users) = ~60 upgrades — **32 additional upgrades × $92 ACV = $2,944 additional ARR**. At 20%: 52 additional upgrades = **$4,784 ARR**. These are zero-acquisition-cost conversions from users already in the product and engaged.

**Mechanism**

The current paywall is likely a generic upgrade prompt. For a user who has built and saved a meal plan, the grocery_sync block is a specific, felt frustration: "I planned my week but I can't get my shopping list out." Intervention: replace the generic blocked-feature modal with a contextual upgrade prompt that references the user's actual plan. Example: "You've planned 4 meals this week — unlock Grocery Sync to turn your plan into a shopping list automatically. Upgrade for $7.99/month." Suppress the generic modal entirely for accounts with ≥1 completed meal plan. Include a one-tap trial CTA if a trial mechanic is available. Test: contextual prompt vs generic modal, 50/50 split, for free accounts with ≥1 completed meal plan. Primary metric: upgrade rate within 7 days of first grocery_sync block.

---

## Hypothesis 4: Personalisation Feature Discoverability — A Leading Indicator of Disengagement Risk

**Evidence**

94 accounts (5.2% of all accounts) never used `dietary_filter` across the entire analysis period. These accounts churn at 78.7%. 204 accounts never used `meal_swap`; churn at 65.7%. Accounts that used `dietary_filter` at least once churn at 17.9%; `meal_swap` adopters at 15.4%. The non-adoption/adoption churn ratios are 4.4x and 4.3x respectively. Both features are available on all tiers — non-adoption is a discoverability and activation issue, not a gating issue.

**Important caveat:** dietary_filter and meal_swap non-adoption likely overlaps significantly with meal plan non-creation (H1). A user who never creates a meal plan has no surface to use meal_swap on. These signals may partly proxy complete non-activation rather than representing an independent mechanism. The H1 overlap should be computed before building a separate intervention.

**Impact**

dietary_filter non-adopters: 74 churners × blended ACV (~$45, mix of free and paid) = approximately **$3,341 ARR lost**. meal_swap non-adopters: 134 churners × $45 = approximately **$6,030 ARR lost**. If independent of H1, combined opportunity is ~$9,371. If heavily overlapping, the marginal opportunity beyond H1 is smaller. Recommend computing the intersection before sizing this separately.

**Mechanism**

Surface `dietary_filter` and `meal_swap` as active prompts during the first session, not as passive UI elements. For `dietary_filter`: when a user opens recipe browse for the first time without a completed taste profile, show an inline banner — "Filter recipes to match what you eat →" — opening the dietary filter directly. For `meal_swap`: when a user opens a meal plan with ≥1 assigned recipe and has never used meal_swap, show a one-time tooltip on the meal slot — "Not feeling this? Tap to swap for something similar." Both prompts fire once only and are permanently dismissed after interaction. Instrument click-through rate and downstream churn as observational signals before running a full experiment.

---

## What We Ruled Out

**Family plan solo-user churn** — The product context flags single-user Family accounts as elevated churn risk. The data does not confirm this. Solo-user Family accounts (avg seats <1.5, n=111) churn at 11.7%; multi-user Family accounts at 15.3%. The signal runs opposite to the hypothesis. May reflect that solo Family purchasers are deliberate power users, or a data quality issue with `seats_used`. Not actionable without further investigation.

**Billing ticket churn** — Billing-ticket accounts churn at 29.0% vs 19.4% (1.5x, n=317/1,483). Real but modest ARR impact (~$2,823 from excess churners). The fix is clearer free-tier feature communication at sign-up — a copy and pricing page change, not a product mechanism. Recommend as a quick win outside the product team's roadmap.

**High missed meal plans as a risk signal** — Accounts with high missed meal plan counts churn at 10.6% vs 24.8% for low-missed accounts. Counter-intuitive but correct: high missed plans means the user is actively planning and occasionally not following through, which is far more engaged than not planning at all. Missed plans are a normal-use pattern. Ruled out as a risk signal.

**Grocery sync as independent retention driver** — The context document notes grocery sync users almost never churn; the data confirms adopters churn at 15.4% vs 28.9% for non-adopters (1.9x). However this conflates plan tier with feature use — grocery sync is gated to premium/family. Addressed through H3's upgrade mechanism rather than as a standalone intervention.

---

## Recommended Next Steps

**Priority order by confidence × impact:**

| # | Hypothesis | Confidence | ARR opportunity | Recommended action |
|---|---|---|---|---|
| H1 | Meal plan creation gap | High | $13,171 at risk | Redesign onboarding step with pre-populated templates. 50/50 holdout. Run first. |
| H2 | Taste profile + meal plan double-skip | High | $7,647 at risk | Make taste profile required, reduce to 3 questions. Run sequentially after H1 or combine into one onboarding overhaul. |
| H3 | Paywall moment for habit-formed free users | Medium | $2,944–$4,784 incremental | Contextual upgrade prompt at grocery_sync block. Low build cost — run in parallel with H1. |
| H4 | Personalisation feature discoverability | Medium | $3,341–$9,371 (H1 overlap unknown) | Compute H1 intersection first. If independent: one-time tooltips. If overlapping: H1 fix may resolve without additional work. |

**Run H1 and H3 together first.** H1 has the largest ARR at risk and the clearest mechanism. H3 operates on a different segment (existing free users vs new accounts) with low build cost — it can run in parallel without competing resources. H2 is sequentially dependent on H1: making taste profile required directly influences meal plan creation, so measure the downstream effect of H1 before building H2 as a separate initiative. H4 waits on the H1 overlap calculation.
