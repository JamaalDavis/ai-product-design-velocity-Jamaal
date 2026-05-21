# PRD — FinWise H2: Goal Activation (Auto-Drafted Goal)

**Product:** FinWise
**Hypothesis:** H2 — Goal Activation: The Missing Personalisation Moment
**Solution direction:** Option B — Auto-Drafted Goal (Zero-Decision Path)
**Status:** Draft
**Date:** 2026-05-20

---

## 1. Problem Statement

Users who reach FinWise's spending summary for the first time see their own financial data — category breakdowns, monthly totals, top spending areas — and then leave without acting on it. The product shows users where their money went. It does not show them what to do about it.

63% of accounts that view their first spending summary never go on to set a savings goal. This isn't because users don't want goals. It's because goal creation currently asks them to make a decision they're not ready to make: choose a category, choose an amount, and commit to it — from a blank-state goal screen, immediately after seeing their financial picture for the first time. Users at that moment are in "processing mode," not "decision mode." The current UX treats them as if they've already decided.

The result: 81.1% of accounts (~308,000 at full scale) never reach the single feature that most predicts whether they'll stay — or ever pay.

---

## 2. Business Context

Goal activation is the highest-leverage conversion moment in the product. Free accounts that set a first goal upgrade at 14.5% vs 5.4% for those that don't (2.7x). 98.7% of all upgrade events came from accounts that previously hit the savings_goal paywall — meaning the upgrade path runs entirely through goal-setting. Without goal activation, accounts never experience the moment that makes upgrading worth paying for.

| Metric | Current | Target | Timeline |
|---|---|---|---|
| `set_first_goal` completion rate | 18.9% | 35% | 90 days post-launch |
| Free-to-Pro conversion rate | 4.2% | 8.0% | End of 2026 |
| 90-day churn (non-goal-setters) | 37.5% | 28% | 6 months post-launch |

**Modelled impact:** Every 1pp improvement in Pro conversion = ~$380K ARR. A conservative 2pp lift = $760K ARR. If 20% of free non-goal-setters are moved to goal-setting and their upgrade rate approaches the goal-setter baseline (14.5%), that represents ~3,400 additional upgrades = ~$1.3M ARR.

---

## 3. Hypothesis

**We believe** surfacing a pre-populated, auto-drafted savings goal immediately after a user views their spending summary — removing the decision of what goal to set — **will increase `set_first_goal` completion rate from 18.9% to 35% within 90 days.**

**Because** the primary barrier to goal creation is decision cost. Users who have just seen their financial data for the first time are not ready to choose a category and an amount from scratch. Providing a sensible default that mirrors their actual spending removes the decision and converts passive data-viewers into active goal-holders.

**We'll know it worked when** `set_first_goal` completion increases by at least 8 percentage points in the treatment cohort within 30 days, and 90-day free-to-Pro upgrade rate improves by at least 1pp vs control.

*Note: The EIM Mechanism suggested an inline spend-to-goal prompt that the user actively responds to. After solution exploration, the team chose an auto-drafted goal with one-tap confirmation, betting that decision cost — not prompt presence — is the true barrier.*

---

## 4. Success Metrics

**Primary (leading):**
- `set_first_goal` completion rate within 7 days of `view_first_spending_summary`
- Baseline: 18.9% | Target: 35% | Measured daily from day 1 post-launch

**Secondary (lagging):**
- 90-day free-to-Pro upgrade rate
  - Baseline: 5.4% (free non-goal-setters) | Target: 7.5% (~+2pp overall conversion)
  - Measured over 90-day outcome window from account creation
- 90-day churn rate for accounts in non-goal-setter state at time of trigger
  - Baseline: 37.5% | Target: 28%

**Guardrail metrics:**
- Time from `view_first_spending_summary` to session exit must not increase (the card must not make the summary feel slower)
- `goal_draft_dismissed` rate must not exceed 70% — if most users dismiss, the draft content or timing is wrong
- `savings_goal: abandoned` rate on auto-drafted goals must not exceed 60%
- Support ticket volume related to goals must not increase

---

## 5. Scope

**In scope:**
- A "suggested goal" card displayed at the end of the spending summary screen, triggered on first `view_first_spending_summary` for experiment-cohort accounts with `goals_set = 0`
- Auto-draft logic: reads account's top spending category and 30-day transaction sum, calculates a suggested limit, pre-populates goal name, category, and amount
- One-tap "Activate" CTA that creates the goal and navigates to the goal progress screen
- Inline amount adjustment (stepper or text field) before activation — no separate screen
- "Not now" dismiss that removes the card for the current session
- Goals created via this flow tagged `source: auto_drafted` for analytics segmentation
- 50/50 holdout via feature flag, stable assignment per account

**Out of scope:**
- Multi-goal auto-drafting (one suggested goal per session only)
- Changes to spending summary layout above the goal card
- Push notifications for goal activation re-engagement
- Day 2–3 in-app banner for non-completers (potential follow-on; excluded to keep the mechanism isolatable in this test)
- Editing goal name or category in the activation flow
- Budget setup or bill tracking integration
- Design system specification (no Figma files available at time of writing — design context TBD)

**Assumptions and dependencies:**
- Transaction categorisation data is available at spending summary load time for accounts with ≥7 days of linked history
- Accounts with fewer than 7 days of history or fewer than 5 transactions are excluded from the experiment cohort
- Free-tier accounts can create 1 savings goal; the auto-draft respects this limit and does not write to the goals model until "Activate" is tapped
- The `view_first_spending_summary` onboarding event can be used reliably as the trigger condition

---

## 6. User Stories

**US-01 — First spending summary, goal auto-draft (happy path)**
As a new FinWise user who has just seen my spending summary for the first time, I want to see a goal suggestion based on my actual spending, so that I can act on my data without having to decide what to track.

**Acceptance criteria:**
- The suggested goal card appears at the end of the spending summary for all treatment-cohort accounts with `goals_set = 0`
- The card displays: actual top spending category name, actual 30-day spend amount, and the suggested limit
- Tapping "Activate" creates the goal and navigates to the goal progress screen within 2 seconds
- The spending summary content above the card is visually unchanged

---

**US-02 — Amount adjustment before activation**
As a user who sees the suggested goal but wants a different limit, I want to change the amount before activating, so that the goal feels like mine, not the app's.

**Acceptance criteria:**
- "Adjust amount" opens an inline editor without navigating away from the spending summary
- User can change the amount via stepper or text input
- Activating after adjustment creates the goal with the user's chosen amount; category and name remain from the auto-draft
- The adjusted amount is recorded separately in `goal_draft_adjusted` for analytics

---

**US-03 — Dismissal without pressure**
As a user who doesn't want a goal right now, I want to dismiss the suggestion without it blocking me from leaving the screen.

**Acceptance criteria:**
- "Not now" tap closes the card and returns to normal spending summary or allows exit
- Card does not re-appear in the same session
- Dismissal fires `goal_draft_dismissed` (not a `savings_goal: abandoned` event)

---

**US-04 — Insufficient transaction history (edge case)**
As a new user with fewer than 7 days of data, I want the spending summary to work normally without a broken or guessed goal suggestion.

**Acceptance criteria:**
- If the account has fewer than 5 transactions or fewer than 7 days of linked history, the auto-draft card is not shown
- Spending summary renders normally; no error state
- These accounts are excluded from experiment cohort assignment

---

**US-05 — Already has a goal**
As a returning user who already set a goal, I want the spending summary to be unaffected.

**Acceptance criteria:**
- Accounts with `goals_set ≥ 1` at spending summary load time do not see the auto-draft card
- No changes to the spending summary experience for these accounts

---

**US-06 — Activation confirmation**
As a user who activates the suggested goal, I want to immediately see my goal progress so the action feels real.

**Acceptance criteria:**
- Navigation to the goal progress screen completes within 2 seconds
- Goal progress screen shows current month's spend vs the new limit
- A success state ("Goal set!") is displayed before or on the progress screen

---

## 7. Functional Requirements

**Trigger logic**

- **FR-01:** The auto-draft card MUST be shown on first `view_first_spending_summary` for accounts in the treatment cohort with `goals_set = 0`. *Priority: Must*
- **FR-02:** The auto-draft card MUST NOT be shown to accounts with `goals_set ≥ 1` at spend summary load time. *Priority: Must*
- **FR-03:** The auto-draft card MUST NOT be shown to accounts with fewer than 5 transactions or fewer than 7 days of linked account history. *Priority: Must*
- **FR-04:** The auto-draft card MUST NOT re-appear in the same session after dismissal. *Priority: Must*

**Auto-draft content**

- **FR-05:** The suggested goal MUST be based on the account's top spending category by 30-day transaction sum, excluding "Uncategorised" and "Other" categories. *Priority: Must*
- **FR-06:** The suggested limit MUST be calculated as 10% below the account's actual 30-day spend in the top category (rounded to nearest dollar). *Priority: Must*
- **FR-07:** The card MUST display: category name, actual 30-day spend amount, and suggested limit. *Priority: Must*
- **FR-08:** The suggested goal name SHOULD default to "[Category] spending goal" (e.g., "Dining spending goal"). *Priority: Should*

**Activation and adjustment**

- **FR-09:** Tapping "Activate" MUST create a savings goal with the displayed category, name, and limit. *Priority: Must*
- **FR-10:** Goal creation MUST complete within 2 seconds of tap. *Priority: Must*
- **FR-11:** After activation, the app MUST navigate to the goal progress screen. *Priority: Must*
- **FR-12:** An inline amount adjustment option SHOULD be available before activation. *Priority: Should*
- **FR-13:** Adjustment MUST NOT require navigating to a separate screen. *Priority: Must*
- **FR-14:** Goals created via this flow MUST be tagged `source: auto_drafted` in the goals data model. *Priority: Must*

**Experiment infrastructure**

- **FR-15:** The feature MUST be gated behind a feature flag enabling 50/50 holdout assignment at account creation. *Priority: Must*
- **FR-16:** Variant assignment MUST be stable — same account always receives treatment or control. *Priority: Must*

---

## 8. Analytics Instrumentation

| Event name | When it fires | Properties |
|---|---|---|
| `goal_draft_shown` | Auto-draft card renders on spending summary | `account_id`, `user_id`, `plan_tier`, `user_segment`, `experiment_variant`, `draft_category`, `draft_suggested_amount`, `actual_30d_spend` |
| `goal_draft_activated` | User taps "Activate" | `account_id`, `user_id`, `experiment_variant`, `draft_category`, `draft_suggested_amount`, `final_amount`, `adjusted` (boolean) |
| `goal_draft_adjusted` | User taps "Adjust amount" | `account_id`, `user_id`, `experiment_variant`, `draft_suggested_amount`, `adjusted_to_amount` |
| `goal_draft_dismissed` | User taps "Not now" | `account_id`, `user_id`, `experiment_variant`, `draft_category`, `time_shown_ms` |
| `goal_created` | Goal successfully written to backend | `account_id`, `user_id`, `goal_id`, `category`, `amount`, `source` (auto_drafted / manual), `experiment_variant` |
| `goal_still_active_30d` | Scheduled check 30 days post-creation | `account_id`, `goal_id`, `source`, `is_still_active` (boolean) |

*Existing events to monitor (no instrumentation change needed): `savings_goal: used`, `savings_goal: blocked`*

---

## 9. Open Questions

1. **Auto-draft algorithm — is 10% below spend the right default?** Options: (a) 10% below actual spend (current assumption), (b) round-number floor (nearest $10 below spend), (c) category benchmark vs. same user segment. **Owner:** Product + Data. **Default:** Option (a). Flag for review after seeing `goal_draft_adjusted` rates — high adjustment frequency means the suggested amount isn't landing.

2. **Fallback when top category is "Uncategorised" or "Other":** Use the second-highest named category instead. If no named category exists, suppress the card. **Owner:** Engineering. **Default:** Second-highest named category.

3. **Should the card re-surface on a subsequent session for dismissed users?** Current spec: no. If dismissed, treat as unconverted for this mechanism. A day 2–3 re-engagement banner is the natural follow-on iteration. **Owner:** Product. **Default:** Do not re-surface.

4. **What is the minimum sample size for the holdout before calling significance?** At 18.9% baseline conversion and a 35% target, a 50/50 split needs ~220 accounts per arm for 80% power at α=0.05. Confirm with data team whether new-account volume supports a clean read within 30 days. **Owner:** Data. **Default:** Proceed; revisit timing at experiment kickoff.

5. **Goal name editability:** Current scope excludes name editing to reduce friction. If qualitative feedback post-launch suggests "Dining spending goal" feels impersonal, add name editing in iteration 2. **Owner:** Design. **Default:** Non-editable in activation flow.

6. **Does the auto-drafted draft write to the goals model before activation?** No — the draft is a UI suggestion only. Goal is created in the backend only on "Activate" tap. **Owner:** Engineering. **Default:** Confirmed by FR-09 and FR-14.

7. **Free-tier limit edge case:** If an account already has `goals_set = 1` at spending summary load (edge case: goal set before viewing summary), FR-02 suppresses the card. Confirm `goals_set` is available at runtime when the spending summary loads. **Owner:** Engineering.
