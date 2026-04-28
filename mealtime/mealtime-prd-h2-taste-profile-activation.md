# PRD: Personalised Taste Profile Activation — Value Preview + Persistent Nudge
**Product:** Mealtime
**Hypothesis:** H2 — The Double-Skip Compound
**Author:** EIM Analysis → PRD, 2026-04-20
**Status:** Draft — pending team review

---

## 1. Problem Statement

A new Mealtime user signs up, hits the taste profile screen, sees a list of questions about dietary preferences and cuisine, and taps "Skip for now." They land on the recipe feed. The feed shows popular recipes — pasta, chicken, tacos — none of which match the fact that they're coeliac, or vegetarian, or only ever cook for one in under 20 minutes. They scroll, save nothing, and close the app. When they come back the next day the same generic feed is waiting. Nothing has changed because nothing is known about them. They stop returning within two weeks.

This is not a rare edge case. 36.8% of all new accounts — 662 users — skip `complete_taste_profile`. Half of those (329) also never create a meal plan. These double-skippers churn at 45.9%, more than five times the rate of fully-activated accounts. The taste profile isn't optional in any meaningful sense — skipping it breaks the product's ability to deliver its core value. But the current screen doesn't tell the user that. It presents the questions as setup overhead with a clearly-labelled escape route, and a large share of users take it.

---

## 2. Hypothesis

**We believe** that showing users a live preview of personalised recipe recommendations as they answer taste profile questions — and surfacing a persistent contextual prompt in the recipe feed for users who skip — **will** increase taste profile completion rate within session 1 and reduce 90-day churn for accounts that would otherwise have double-skipped.

**Because** 329 accounts (18.3% of all accounts) skipped both `complete_taste_profile` and `create_first_meal_plan` and churn at 45.9% vs 8.5% for fully-activated accounts (5.4x), and the mechanism suggests the barrier is perceived value — the current screen looks like admin, not personalisation.

**We'll know it worked when** taste profile completion within session 1 increases from ~63% to ≥75%, with no more than a 2 percentage point drop in sign-up completion rate.

**Note:** The EIM Mechanism suggested making the taste profile a hard required gate (Option A). After solution exploration, the team chose a combination of Options B and C — a live value preview during onboarding, with a persistent in-feed nudge for skippers — because this tests whether users skip due to perceived irrelevance (not friction intolerance), while avoiding the sign-up completion risk of a hard gate.

---

## 3. Success Metrics

### Primary metric (leading)
**Taste profile completion rate within session 1**
- *How measured:* `complete_taste_profile` event firing within the same session as `account_created`, treatment vs holdout
- *Baseline:* ~63.2% of accounts complete taste profile (exact session-1 rate requires instrumentation to confirm; 63.2% is the lifetime rate and the conservative baseline)
- *Target:* **≥75% of new accounts completing taste profile within session 1**

### Secondary metric (lagging)
**90-day churn rate for double-skip-risk accounts**
- *How measured:* `churned_90d` for treatment vs holdout at 90 days, filtered to accounts that would have skipped under the control condition (inferred from holdout skip rate)
- *Baseline:* 45.9% churn for double-skippers; 17.4% for taste-profile-only skippers
- *Target:* **≤30% churn for accounts in the previously-double-skip-risk segment**

### Guardrail metric
**Sign-up completion rate**
- *How measured:* % of users who start the sign-up flow and reach the home screen
- *Threshold:* Must not drop more than **2 percentage points** from baseline. The preview panel adds content to the taste profile screen — if it increases perceived friction, this guardrail catches it.

---

## 4. Scope

### In scope
- **Live recipe preview panel on the taste profile screen** — a scrollable horizontal strip of 2–3 recipe cards that updates dynamically as the user selects answers. Before any answer is selected, cards show a placeholder / "most popular" state. After each selection, cards update to show matched recipes. Uses the existing Meal Card component.
- **De-emphasised skip affordance** — "Skip for now" text link remains but moves below the preview panel (further down the screen), reducing its visual prominence without removing user control
- **Persistent in-feed completion prompt for skippers** — an Upgrade Promo Card-style banner at the top of `recipe_browse` for any account with an incomplete taste profile. Shows a contextual message referencing what the user is currently seeing ("These are our most popular recipes — answer 3 quick questions to see ones matched to how you eat"). Persists until taste profile is completed; dismissed only on completion, not on tap-away
- **Incomplete profile indicator** — a subtle badge (amber dot) on the profile/settings nav tab for accounts with incomplete taste profile, until completed
- **Feature flag** — full intervention deployable behind a flag for 50/50 A/B holdout
- **Analytics instrumentation** — per Section 7

### Out of scope
- Making taste profile a hard required gate (no skip affordance removed)
- Changes to the taste profile questions themselves (question count, content, or order are unchanged in v1)
- Personalisation engine changes — the preview uses the existing recommendation logic, not a new model
- Progressive disclosure of taste profile questions beyond the onboarding screen
- Applying the persistent prompt to existing accounts that already skipped (new accounts only in v1)
- Changes to what the app does with the taste profile data after completion — this is an activation intervention, not a recommendations improvement

### Assumptions and dependencies
- The existing recommendation engine can return recipe results filtered by a single dietary preference selection in under 500ms (required for the live preview to feel responsive)
- The taste profile screen is a single-step screen — the preview panel is added to the existing layout, not a new screen
- `complete_taste_profile` is already instrumented as a discrete event with a timestamp; session-1 completion can be derived from this + `account_created_at`
- Feature flagging supports 50/50 account-level assignment at account creation

---

## 5. User Stories

**US-01 — New user sees personalised recipe preview during taste profile**
> As a new Mealtime user completing onboarding, I want to see recipes that match what I'm telling the app about myself, so that I understand why completing the questions is worth my time.
>
> **Acceptance criteria:**
> - The taste profile screen includes a horizontally scrollable strip of 2–3 recipe cards below the question options
> - Before any selection is made, cards show a "most popular" placeholder state with a label: "Answer below to see recipes matched to you"
> - After each answer selection, the recipe cards update to show recipes matching the current answers
> - Card updates complete within 500ms of selection
> - The "Skip for now" link is visible but positioned below the preview panel, requiring a scroll on smaller devices

**US-02 — User skips taste profile and sees persistent in-feed prompt**
> As a new user who skipped the taste profile, I want to understand what I'm missing from the recipe feed, so that I can decide whether completing the profile is worth it.
>
> **Acceptance criteria:**
> - Any account with `complete_taste_profile = false` sees a contextual prompt banner at the top of `recipe_browse`
> - Banner copy: "These are our most popular recipes. Answer 3 questions to see ones matched to how you eat →"
> - Tapping the banner navigates the user to the taste profile screen
> - The banner persists across sessions until taste profile is completed — it does not dismiss on tap-away or app restart
> - Once `complete_taste_profile` fires, the banner is removed immediately on next screen render

**US-03 — User completes taste profile from the in-feed prompt**
> As a user who previously skipped, I want to complete my taste profile from within the recipe feed, so that I don't have to find the setting myself.
>
> **Acceptance criteria:**
> - Tapping the in-feed banner navigates to the taste profile screen
> - The taste profile screen in this context includes a back arrow (returning to recipe browse) rather than the onboarding progress bar
> - On completion, the user is returned to `recipe_browse` with the feed updated to reflect their profile
> - `taste_profile_completed_from_feed` event fires on completion via this path

**US-04 — Incomplete profile indicator visible in navigation**
> As a new user who skipped the taste profile, I want a clear signal that my profile is incomplete, so that I know there is something left to do even if I don't see the recipe feed immediately.
>
> **Acceptance criteria:**
> - An amber dot badge appears on the Settings nav tab for any account with `complete_taste_profile = false`
> - The badge is removed when `complete_taste_profile` fires
> - Tapping Settings with the badge visible shows the taste profile completion prompt at the top of the settings screen

**US-05 — PM can monitor completion rate by entry point**
> As a PM, I want to see what proportion of taste profile completions came from the onboarding preview vs the in-feed prompt, so that I can understand which mechanism is driving lift.
>
> **Acceptance criteria:**
> - All events in Section 7 are firing and queryable within 48 hours of launch
> - A query can distinguish completions from the onboarding path vs the in-feed path via `completion_source` property
> - Treatment vs holdout completion rates are queryable by cohort week

---

## 6. Functional Requirements

### Preview panel — onboarding screen
**FR-01:** A recipe preview panel must appear on the taste profile screen, positioned between the question options and the "Skip for now" link.
*Priority: Must*

**FR-02:** The preview panel must display 2–3 recipe cards in a horizontally scrollable strip using the existing Meal Card component (white background, `#CCCCCC` border, 20px radius).
*Priority: Must*

**FR-03:** Before any answer is selected, cards must display a "most popular" state with a muted overlay label: "Answer below to see recipes matched to you."
*Priority: Must*

**FR-04:** After each answer selection, the recipe cards must update within 500ms to show recipes matching the current selection state. If the API call exceeds 500ms, show a loading skeleton in the card slots.
*Priority: Must*

**FR-05:** The "Skip for now" text link must remain on the screen but must be positioned below the preview panel, requiring a scroll to reach on devices with a screen height below 812px.
*Priority: Should*

### Persistent in-feed prompt
**FR-06:** Any account with `complete_taste_profile = false` must see a contextual banner at the top of the `recipe_browse` screen on every visit until the taste profile is completed.
*Priority: Must*

**FR-07:** The banner must use the Upgrade Promo Card visual treatment (`#FFE4C2` background, 20px border-radius, 24px padding) and display the copy: "These are our most popular recipes. Answer 3 questions to see ones matched to how you eat →"
*Priority: Must*

**FR-08:** The banner must not be dismissable by tap-away, swipe, or app restart. The only dismissal trigger is `complete_taste_profile` firing.
*Priority: Must*

**FR-09:** Tapping the banner must navigate to the taste profile screen. In this context, the screen must show a back arrow (returning to `recipe_browse`) rather than the onboarding progress bar.
*Priority: Must*

**FR-10:** On taste profile completion via the in-feed path, the user must be returned to `recipe_browse` with the feed updated to reflect their new profile. The banner must not appear on the next render.
*Priority: Must*

### Nav badge
**FR-11:** An amber dot badge (`#F58700`, 8px diameter) must appear on the Settings nav tab for any account with `complete_taste_profile = false`.
*Priority: Should*

**FR-12:** The badge must be removed when `complete_taste_profile` fires, on the next app render.
*Priority: Should*

### Feature flag and experiment
**FR-13:** The full intervention (preview panel + in-feed banner + nav badge) must be deployable and rollback-able via a feature flag without a code deploy.
*Priority: Must*

**FR-14:** A/B assignment must be at account level, assigned at account creation, stored persistently. Assignment must not change between sessions.
*Priority: Must*

---

## 7. Analytics Instrumentation

All events must include: `account_id`, `user_id`, `experiment_variant` (treatment / holdout), `platform` (ios / android / web).

| Event name | When it fires | Additional properties |
|---|---|---|
| `taste_profile_preview_shown` | Preview panel renders on taste profile screen | `question_number: int`, `recipes_shown: [array of recipe_ids]` |
| `taste_profile_answer_selected` | User selects an answer on any taste profile question | `question_id`, `answer_value`, `preview_updated: bool` |
| `taste_profile_completed` | User completes all taste profile questions | `completion_source: onboarding / feed_prompt / settings`, `session_number: int` |
| `taste_profile_skipped` | User taps "Skip for now" on taste profile screen | `questions_answered: int`, `time_on_screen_seconds: int` |
| `feed_prompt_shown` | In-feed taste profile banner renders | `session_number: int`, `days_since_signup: int` |
| `feed_prompt_tapped` | User taps the in-feed banner | `session_number: int`, `days_since_signup: int` |
| `taste_profile_completed_from_feed` | Taste profile completed after navigating from the in-feed banner | `days_since_signup: int`, `sessions_since_signup: int` |

---

## 8. Open Questions

**OQ-01 — Recipe preview API latency**
Can the existing recommendation engine return filtered results within 500ms for a single-preference query? If not, what is the realistic P95 response time, and should the preview use a pre-cached set of results per preference rather than a live API call?
*Owner:* Engineering. *Default if unresolved:* Use pre-cached static recipe sets per preference combination for v1. Flag as tech debt to connect to live recommendations in v2.

**OQ-02 — Taste profile question count**
The current taste profile has more than 3 questions. The H2 mechanism suggested reducing to 3. This PRD does not change the question count (out of scope). Should it? If the current taste profile is longer than 3 questions, the preview panel may not adequately reward early answers.
*Owner:* Product / Content. *Default if unresolved:* Do not change question count in v1. If session-1 completion rate doesn't improve despite the preview panel, revisit question count as a separate initiative.

**OQ-03 — In-feed banner copy ownership**
Who owns and approves the banner copy? Is there a localisation dependency?
*Owner:* Marketing / Product. *Default if unresolved:* Use the copy specified in FR-07 for v1. Localisation handled in v2.

**OQ-04 — Settings screen taste profile prompt**
US-04 describes a taste profile completion prompt appearing at the top of the settings screen when the badge is tapped. What does this prompt look like? Is it the same banner component or a different treatment?
*Owner:* Design. *Default if unresolved:* Reuse the in-feed banner component with identical copy and CTA in the settings screen context.

**OQ-05 — Experiment sequencing with H1**
H2 operates on the same onboarding flow as H1 (Guided Template Adoption). Running both simultaneously may create interaction effects — a user could see both the template selection screen (H1) and the taste profile preview panel (H2) in the same onboarding session. How should experiment assignment be handled to avoid contamination?
*Owner:* PM / Data. *Default if unresolved:* Run H2 only after H1 primary metric results are confirmed (minimum 4 weeks). Do not run concurrently without explicit assignment logic to prevent the same account from being in both treatment groups.
