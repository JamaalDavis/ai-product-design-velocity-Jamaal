# PRD: Goal Activation — Preset Creator + Motivation-Moment Prompt
**Product:** FinWise
**Hypothesis:** H1 — The Goal Activation Gap
**Solution:** Options A + C combined — guided preset goal creation in onboarding, plus a contextual re-trigger after first spending view
**Status:** Draft
**Date:** 2026-04-30

---

## 1. Problem Statement

A user links their bank account, browses their transactions, and has no stake in the product. They've connected their past but not their future. The goal creation step is there — they reach it — but it's an empty form asking for a name, an amount, and a date with no connection to the numbers they just looked at. 88% of users skip it. Without a goal, FinWise is a ledger: useful once, forgettable twice. Users return once or twice to see the same numbers they already know, then stop opening the app entirely.

The second missed moment happens later. A user who skipped goal-setting in onboarding eventually views their spending summary — the moment they feel the gap between where their money went and where they wanted it to go. That emotional trigger has no call to action. The app shows the number and goes silent.

---

## 2. Business Context

Goal adoption is the single strongest predictor of both retention and Pro conversion in the dataset. Accounts with a goal set churn at 12.3% vs 36.0% for accounts without one (2.9x difference). Free-tier users with a goal upgrade to Pro at 22.7% vs 5.0% for those without (4.5x). With 88% of accounts never setting a goal, this is the largest addressable driver of FinWise's two critical business metrics.

| Metric | Current | Target | Timeline |
|---|---|---|---|
| Month-2 retention | 31% | 50% | Q4 2026 |
| Pro conversion rate | 4.2% | 8.0% | End of 2026 |
| ARR per 1pp conversion lift | — | +~$380K | — |

Modelled impact of this intervention: moving 10% of no-goal accounts to set a goal (33,400 accounts) = ~5,900 additional Pro upgrades = ~$708K additional ARR. This hypothesis targets both retention and conversion simultaneously — the same lever moves both metrics.

---

## 3. Hypothesis

**We believe** that replacing the blank-canvas goal creation form with a preset selector pre-populated from the user's transaction data (Option A), combined with a motivation-moment prompt triggered after the user's first spending view (Option C), **will** increase `set_first_goal` onboarding completion from 12% to at least 20% within 14 days of account creation.

**Because** users aren't skipping goal creation due to lack of intent — they're skipping because the form requires upfront commitment before they've seen their financial reality, and the moment of highest motivation (after viewing their spending breakdown) currently has no call to action.

**We'll know it worked when:**
- `set_first_goal` completion rate reaches ≥20% in the test group (14-day window)
- Free-tier Pro upgrade rate within 30 days improves from 5.0% to ≥7.5% in the test group

---

## 4. Success Metrics

### Primary metric (leading)
**`set_first_goal` onboarding completion rate**
- Measured within 14 days of account creation
- Baseline: 12% (n=1,800 accounts, FinWise dataset)
- Target: ≥20% in test group
- How measured: `goal_creation_completed` event, filtered to `ab_variant = test`, within 14 days of `account_created_at`

### Secondary metric (lagging)
**Free-tier Pro upgrade rate within 30 days**
- Baseline: 5.0% (free-tier accounts with no goal set)
- Target: ≥7.5% in test group
- How measured: `upgraded_90d` flag on `finwise_accounts`, filtered to test group, 30-day cut

### Guardrail metric
**Onboarding step completion rates for `link_second_account` and `customise_first_category`**
- Must not decrease in the test group relative to control
- Baselines: 32% and 14% respectively
- Purpose: ensure the redesigned goal step doesn't accelerate drop-off at subsequent steps

---

## 5. Scope

### In scope
- Redesigned goal creation screen (preset template cards + pre-populated amounts from transaction data)
- Single confirmation screen after preset selection (amount and date editable)
- Personalised progress snapshot shown immediately after goal creation
- Motivation-moment prompt (bottom sheet) triggered after user's first `analysis_view` completion, for accounts with no goal set
- A/B test infrastructure: 50/50 holdout, test group sees new flow, control group sees current flow
- Analytics instrumentation for all new events (see Section 7)

### Out of scope
- Goal editing or management UI (unchanged)
- Second goal creation flow (free-tier 1-goal cap unchanged — blocked event behaviour unchanged)
- Budget setup, bill tracking features
- Investment account integration
- Shared household goal support
- AI/ML-generated goal suggestions from transaction history (Option D — deferred)
- Email or push notification prompts for goal creation
- Preset template admin configuration (v1 presets are hardcoded)

### Assumptions and dependencies
- Transaction data (30-day history) is accessible at goal creation time for amount pre-population; if sync has not completed (<7 days of data), fallback copy is shown
- `analysis_view` events are fired server-side and can be used as a trigger condition in real time
- Existing goal creation data model is unchanged — presets map to existing schema fields (name, amount, target_date)
- Feature flag / experiment framework is in place for 50/50 account-creation assignment
- No changes required to the Pro upgrade gate or 1-goal limit

---

## 6. User Stories

**Story 1 — Preset goal creation during onboarding (happy path)**
As a new free-tier user who has just linked my bank account, I want to create a savings goal quickly using a suggestion that matches my situation, so that I have a concrete reason to return to the app.

*Acceptance criteria:*
- Goal creation screen presents 3–5 preset goal templates as selectable cards
- At least one preset displays a suggested amount derived from my linked account's transaction history
- Tapping a preset pre-fills the goal form and proceeds directly to a confirmation screen
- Confirmation screen allows me to edit the amount and target date
- After confirming, I see a personalised progress snapshot before the dashboard

---

**Story 2 — Motivation-moment prompt after first spending view**
As a free-tier user who skipped goal-setting in onboarding and has now seen my spending summary for the first time, I want to be shown a relevant prompt to set a goal, so I can act on what I've just learned.

*Acceptance criteria:*
- Prompt appears after the user spends ≥20 seconds on `analysis_view` (or navigates away after scrolling past the first chart)
- Prompt only shows if the user has not yet set any goal
- Prompt is dismissible; dismissed users are not re-prompted for 7 days
- Tapping the CTA opens the preset goal creation flow (same as onboarding)

---

**Story 3 — Custom goal option preserved**
As a user who wants to set a goal that doesn't match any preset, I want to create a fully custom goal, so that FinWise reflects my actual financial situation.

*Acceptance criteria:*
- A "Create your own" option is visible below the preset cards
- Tapping it opens the current blank-canvas goal creation form (unchanged)
- Custom goal creation produces the same `goal_creation_completed` event as preset creation, with `goal_type = custom`

---

**Story 4 — Progress snapshot after goal creation**
As a user who just created their first goal, I want to immediately see a realistic timeline for reaching it, so that the goal feels connected to my finances and not arbitrary.

*Acceptance criteria:*
- Progress snapshot screen shown immediately after goal confirmation, before dashboard
- Snapshot displays: goal name, target amount, and estimated timeline ("Based on your last 30 days, you could reach this in X months")
- If <7 days of transaction data is available, snapshot shows: "Your personalised timeline will be ready in a few days — check back soon"
- Snapshot is dismissible in one tap; dismissing navigates to the dashboard

---

**Story 5 — Control group experience unchanged**
As a user in the control group, I continue to experience the current goal creation flow with no changes.

*Acceptance criteria:*
- Control group users see no new UI elements related to goal creation
- Control group assignment persists for the full duration of the test (no re-assignment after account creation)
- Control group users can still create goals via the existing flow

---

## 7. Functional Requirements

### Experiment assignment
**FR-01:** New accounts are assigned to test or control group at account creation time, 50/50 random split.
*Priority: Must*

**FR-02:** Group assignment is stored on the account record and applied consistently across all goal creation entry points (onboarding, Goals tab, dashboard shortcut) for the duration of the test.
*Priority: Must*

### Preset goal creation UI (test group only)
**FR-03:** The goal creation screen in the test group presents 3–5 preset goal templates as selectable cards with: goal name, suggested target amount, and estimated completion timeline.
*Priority: Must*

**FR-04:** Suggested amounts are derived from the user's transaction history. If <7 days of transaction data is available, display a category-average default with a label: "Estimated — personalises as your data builds."
*Priority: Must*

**FR-05:** Selecting a preset pre-fills the goal name, amount, and a default target date. User proceeds to a single confirmation screen.
*Priority: Must*

**FR-06:** Amount and target date fields on the confirmation screen are editable inline. Edits do not add additional steps.
*Priority: Must*

**FR-07:** A "Create your own" option is displayed below the preset cards, opening the current blank-canvas form.
*Priority: Should*

**FR-08:** Preset templates for v1 (hardcoded): Emergency fund, Vacation, Pay off credit card, Home deposit, General savings. PM to confirm final copy and default amounts before build.
*Priority: Must*

### Progress snapshot
**FR-09:** After goal confirmation, user sees a progress snapshot screen before the dashboard.
*Priority: Must*

**FR-10:** Snapshot displays goal name, target amount, and personalised timeline ("Based on your last X days, you could reach this in Y months"), where Y is calculated from average monthly surplus in linked accounts.
*Priority: Must*

**FR-11:** If <7 days of data: "Your personalised timeline will be ready in a few days — check back soon."
*Priority: Must*

**FR-12:** Snapshot is dismissible in one tap. No other action required to proceed to the dashboard.
*Priority: Must*

### Motivation-moment prompt (test group only)
**FR-13:** After a test-group user completes their first `analysis_view` session (defined as ≥20 seconds on screen or scrolling past the first chart before navigating away), a bottom sheet prompt is displayed if: (a) user has no goals set, and (b) user has not dismissed this prompt within the past 7 days.
*Priority: Must*

**FR-14:** Prompt is implemented as a bottom sheet, not a full-screen modal. Background content remains partially visible.
*Priority: Should*

**FR-15:** Prompt copy: "You've seen where your money goes — want to set a goal to change it?" with a single CTA: "Set a goal."
*Priority: Should*

**FR-16:** Tapping the CTA navigates to the preset goal creation flow.
*Priority: Must*

**FR-17:** Dismissing the prompt suppresses re-display for 7 days. After 7 days, the prompt is eligible to re-appear on the next qualifying `analysis_view`.
*Priority: Could*

---

## 8. Analytics Instrumentation

All events include base properties: `account_id`, `user_id`, `ab_variant` (test/control), `user_segment`, `platform` (ios/android).

| Event | Fires when | Additional properties |
|---|---|---|
| `goal_creation_flow_started` | User opens goal creation screen (any entry point) | `entry_point` (onboarding / motivation_prompt / goals_tab / dashboard) |
| `goal_preset_viewed` | Preset selection screen is displayed | `presets_shown` (array of preset IDs), `amounts_personalised` (boolean) |
| `goal_preset_selected` | User taps a preset card | `preset_id`, `preset_name`, `suggested_amount_used` (boolean) |
| `goal_creation_completed` | Goal is confirmed and saved | `goal_type` (preset / custom), `time_to_complete_seconds` |
| `goal_creation_abandoned` | User exits goal creation without completing | `last_step_reached` (preset_selection / confirmation / snapshot), `time_on_flow_seconds` |
| `goal_progress_snapshot_viewed` | Snapshot screen is displayed post-creation | `timeline_months` (integer, null if data insufficient) |
| `goal_progress_snapshot_dismissed` | User taps dismiss on snapshot | `time_on_screen_seconds` |
| `motivation_prompt_shown` | Bottom sheet displayed after `analysis_view` | `days_since_signup`, `sessions_to_date` |
| `motivation_prompt_tapped` | User taps "Set a goal" CTA on prompt | — |
| `motivation_prompt_dismissed` | User dismisses prompt | `time_prompt_visible_seconds` |

---

## 9. Open Questions

1. **Transaction data availability at onboarding goal creation:** If account sync takes 24–48 hours, users creating a goal on day 1 won't have transaction data for amount personalisation. Default assumption: show category-average defaults on day 1, personalise on return visits once data is available. Owner: backend / data engineering.

2. **Preset template content:** Which 5 presets, what copy, what default amounts? Default assumption: Emergency fund ($1,000), Vacation ($2,500), Pay off credit card ($800), Home deposit ($10,000), General savings ($500). Owner: PM to confirm before design begins.

3. **`analysis_view` completion definition:** Is 20 seconds on screen the right threshold, or should it be scroll-depth based? Default: 20-second time threshold (simplest to instrument). Owner: product + analytics.

4. **Preset flow for non-onboarding entry points:** If a test-group user navigates to goal creation via the Goals tab (not onboarding), do they see the preset flow? Default: yes — preset flow replaces the goal creation screen for all entry points in the test group. Owner: engineering.

5. **Free-tier second goal attempt:** Does the preset flow change anything about the blocked event when a free-tier user who has already set one goal tries to create another? Default: no change — blocked event fires as before. Owner: engineering to confirm no state conflict with new flow.

6. **Test duration:** Minimum 30 days recommended (EIM report). Confirm minimum sample size required to detect a move from 12% to 20% at 80% power. Default assumption: ~400 accounts per group needed; at current sign-up volume this should be reachable in 30 days. Owner: data/analytics.
