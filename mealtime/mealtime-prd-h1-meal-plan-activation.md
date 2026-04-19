# PRD: Guided Meal Plan Activation — First Week Template
**Product:** Mealtime
**Hypothesis:** H1 — The Meal Plan Creation Gap
**Author:** EIM Analysis → PRD, 2026-04-19
**Status:** Draft — pending team review

---

## 1. Problem Statement

A user signs up for Mealtime, answers a few questions about what they like to eat, and arrives at the home screen to find an empty calendar grid. They know they're supposed to plan meals — that's why they downloaded the app — but the blank canvas doesn't tell them how to start. They browse a few recipes, save a couple, and close the app. They come back two days later, look at the same empty calendar, and close it again. By day 10 they've stopped opening it. They never churned loudly — they just stopped showing up.

39% of all Mealtime accounts follow this pattern. They complete sign-up, they do not create a meal plan, and they churn at 36.4% within 90 days — 3.2x the rate of accounts that created even one plan. The problem is not that these users don't want to plan meals. It is that nothing in the product gave them a concrete first step in the moment they were most ready to act.

---

## 2. Hypothesis

**We believe** that presenting new users with a set of pre-built weekly meal templates they can adopt in one tap — as the final step of onboarding, before they reach the home screen — **will** increase the rate of meal plan creation within the first 7 days and reduce 90-day churn for accounts that would otherwise have left the step incomplete.

**Because** 704 accounts (39%) never completed `create_first_meal_plan` and churn at 36.4% vs 11.2% for those who did (3.2x, n=704/1,096), and the EIM Mechanism suggests the barrier is activation energy — the blank canvas asks users to "build something" when they are ready to "choose something."

**We'll know it worked when** the % of new accounts with ≥1 meal plan created within 7 days of account creation increases from the baseline to ≥55%, with no more than a 2 percentage point drop in onboarding completion rate.

**Note:** The EIM Mechanism suggested a single template-selection step in onboarding. The team chose this option (Option A) over in-app nudge sequences (Option C) and post-sign-up email drips (Option D) because it addresses the blank canvas at the moment of highest intent — not after the user has already disengaged.

---

## 3. Success Metrics

### Primary metric (leading)
**% of new accounts with ≥1 meal plan created within 7 days of account creation**
- *How measured:* `create_first_meal_plan` completion within 7 days of `account_created_at`, treatment vs holdout
- *Baseline:* ~61% (1,096 of 1,800 accounts completed the step — exact 7-day rate requires instrumentation to establish; use 61% as the conservative baseline)
- *Target:* **≥55% of new accounts with ≥1 meal plan within 7 days** — targeting a meaningful lift; exact target to be set once 7-day baseline is confirmed with instrumentation

### Secondary metric (lagging)
**90-day churn rate for treated accounts**
- *How measured:* `churned_90d` for treatment vs holdout at the 90-day mark
- *Baseline:* 21.1% overall; 36.4% for accounts that skip `create_first_meal_plan`
- *Target:* **≤28% churn for accounts that previously would have skipped** (meaningful reduction from 36.4% baseline)

### Guardrail metric
**Onboarding completion rate**
- *How measured:* % of users who start onboarding and reach the home screen, before and after the template step is introduced
- *Threshold:* Must not drop more than **2 percentage points** from baseline. If it does, the template step is adding net friction and must be reviewed before continuing the experiment.

---

## 4. Scope

### In scope
- **New onboarding screen: "Start with a plan"** — a template selection step added as the final screen of the onboarding flow, immediately before the user reaches the home screen for the first time
- **Meal plan templates:** A curated set of 4–6 pre-built weekly meal templates, each covering 5–7 days with breakfast, lunch, and dinner slots populated. Templates are authored by the Mealtime content team and stored as static plan configurations
- **Template personalisation logic:** If the user completed the taste profile, filter the presented templates to those matching their dietary preference. If taste profile was skipped, show the 4 most popular templates by completion rate
- **One-tap adoption:** Tapping a template populates the user's meal plan calendar with all included recipes and navigates to the home screen (Meal Plan view) with the plan visible
- **Skip affordance:** A clearly labelled "Skip for now" link below the template cards. Skipping navigates to the home screen with an empty calendar (existing behaviour)
- **Feature flag:** Full template step deployable behind a feature flag for 50/50 account-level A/B holdout
- **Analytics instrumentation:** Per Section 7

### Out of scope
- Editing or customising a template before adopting it (v1: adopt as-is or skip)
- User-generated or community-shared templates
- Template recommendations based on ingredients already in the pantry
- Applying the template experience to existing accounts that have not yet created a plan (new accounts only in v1)
- Changes to the taste profile or any earlier onboarding steps
- Changes to what happens after day 7 (re-engagement for non-activators is a separate initiative)

### Assumptions and dependencies
- The onboarding flow supports insertion of a new step before the home screen transition without requiring auth or backend changes beyond the template data
- Meal plan population via template can be performed client-side on first launch (recipes are loaded from the existing content library)
- `account_age_days` or `account_created_at` is available as a real-time account attribute to define the 7-day window for the primary metric
- Feature flagging infrastructure supports 50/50 account-level (not user-level) assignment, assigned at account creation
- The content team can author 4–6 template configurations in time for the build

---

## 5. User Stories

**US-01 — New user is offered a meal plan template during onboarding**
> As a new Mealtime user completing setup, I want to be shown ready-made meal plan options so that I can start with something rather than facing a blank calendar.
>
> **Acceptance criteria:**
> - The template selection screen appears as the last step of onboarding for all users in the treatment group
> - The screen presents 4–6 template cards, each showing: template name, thumbnail of 2–3 featured recipe images, and a short descriptor (e.g. "5 quick dinners, 3 breakfasts")
> - If taste profile was completed, only templates matching the user's dietary preference are shown
> - If taste profile was skipped, the 4 most popular templates by historical completion rate are shown
> - The screen does not appear for holdout group users

**US-02 — User adopts a template with one tap**
> As a new user on the template selection screen, I want to tap a template and immediately have my calendar populated so that I can see what Mealtime looks like with a real plan in place.
>
> **Acceptance criteria:**
> - Tapping a template card populates the user's meal plan calendar with all recipes in that template
> - The user is navigated to the Meal Plan home screen (not to a confirmation screen)
> - The home screen shows the populated plan immediately — no loading state longer than 1 second on a standard connection
> - `onboarding_template_adopted` event fires with `template_id` and `template_name`

**US-03 — User skips the template step**
> As a new user who wants to choose my own meals, I want to skip the template step without friction so that I can get into the product and explore on my own.
>
> **Acceptance criteria:**
> - A "Skip for now" text link is visible below the template cards at all times
> - Tapping skip navigates to the Meal Plan home screen with an empty calendar (existing behaviour)
> - `onboarding_template_skipped` event fires
> - The skip does not block onboarding completion — the user is considered to have completed onboarding

**US-04 — Template plan is editable after adoption**
> As a user who adopted a template, I want to be able to swap or remove individual meals from my plan so that I'm not locked into something that doesn't work for me.
>
> **Acceptance criteria:**
> - All recipes in an adopted template are editable via the existing meal swap and remove interactions — no restrictions
> - No UI treatment distinguishes a template-populated slot from a manually-added slot after adoption
> - This is existing functionality — no new build required; confirmed in acceptance testing

**US-05 — PM can monitor template adoption rates by template**
> As a PM, I want to see which templates are being adopted vs skipped so that I can understand which content is driving activation and iterate the template library.
>
> **Acceptance criteria:**
> - All events in Section 7 are firing and queryable in the analytics tool
> - A query or dashboard view shows adoption rate per template (taps → adoption, not just views)
> - Treatment vs holdout activation rates (7-day meal plan creation %) are queryable within 48 hours of launch

---

## 6. Functional Requirements

### Onboarding step insertion
**FR-01:** The template selection screen must appear as the final step of the onboarding flow for all accounts in the treatment group, immediately before the first home screen render.
*Priority: Must*

**FR-02:** The template screen must not appear for holdout group accounts. Holdout accounts must proceed directly to the empty home screen as per current behaviour.
*Priority: Must*

**FR-03:** A/B assignment must be at the account level, assigned at account creation, and stored persistently for the lifetime of the account. Assignment must not change between sessions.
*Priority: Must*

### Template content and presentation
**FR-04:** The screen must display 4–6 template cards. Each card must show: template name, a composite of 2–3 recipe thumbnail images from the template, and a descriptor line (e.g. "7 meals · Quick prep · Vegetarian").
*Priority: Must*

**FR-05:** If the user completed the taste profile (`complete_taste_profile = true`), only templates whose dietary tags match the user's stated dietary preference must be shown. If no templates match, fall back to showing the 4 most popular templates.
*Priority: Must*

**FR-06:** If the user did not complete the taste profile, show the 4 most popular templates, ordered by adoption rate in descending order (most adopted first).
*Priority: Must*

**FR-07:** Template cards must be scrollable horizontally or presented in a vertical list — the layout must accommodate 4–6 cards without requiring the user to scroll past the skip affordance to see it.
*Priority: Must*

### Template adoption
**FR-08:** Tapping a template card must populate the user's meal plan calendar with all recipe–slot assignments defined in that template's configuration.
*Priority: Must*

**FR-09:** On successful template population, navigate the user to the Meal Plan home screen. The populated plan must be visible on arrival with no additional action required.
*Priority: Must*

**FR-10:** Template population must complete within 1 second on a standard mobile connection. If population exceeds 1 second, show a loading indicator — do not navigate until the plan is confirmed populated.
*Priority: Must*

**FR-11:** If template population fails (network error, content unavailable), show an inline error and offer retry. Do not silently fail — do not navigate the user to an empty home screen as if adoption succeeded.
*Priority: Must*

### Skip affordance
**FR-12:** A "Skip for now" text link must be visible on the template screen without scrolling. It must not be styled as a primary action — use a ghost or secondary text treatment (per design system: text-secondary, no border, no fill).
*Priority: Must*

**FR-13:** Tapping "Skip for now" must navigate to the Meal Plan home screen with an empty calendar. The `onboarding_template_skipped` event must fire.
*Priority: Must*

### Feature flag
**FR-14:** The template step must be deployable and rollback-able via a feature flag without a code deploy.
*Priority: Must*

---

## 7. Analytics Instrumentation

All events must include: `account_id`, `user_id`, `experiment_variant` (treatment / holdout), `platform` (ios / android / web).

| Event name | When it fires | Additional properties |
|---|---|---|
| `onboarding_template_screen_shown` | Template selection screen renders | `taste_profile_completed: bool`, `templates_shown: [array of template_ids]` |
| `onboarding_template_tapped` | User taps a template card (before adoption confirmed) | `template_id`, `template_name`, `template_position: int` |
| `onboarding_template_adopted` | Template successfully populates the meal plan | `template_id`, `template_name`, `recipes_populated: int` |
| `onboarding_template_adoption_failed` | Template population fails | `template_id`, `error_type` |
| `onboarding_template_skipped` | User taps "Skip for now" | `templates_shown: [array of template_ids]`, `time_on_screen_seconds: int` |
| `meal_plan_created_7d` | Synthetic event: fires when an account reaches 7 days old with ≥1 meal plan entry | `source: template / manual / skip_then_manual` (inferred from preceding events) |

---

## 8. Open Questions

**OQ-01 — Template content ownership**
Who authors and maintains the template configurations? How are templates updated or retired? Is there a CMS for this or does it require an app release?
*Owner:* Content / Engineering. *Default if unresolved:* Templates are hardcoded in the app for v1 and updated via app release. Flag as tech debt for v2.

**OQ-02 — Template matching when taste profile has multiple dietary preferences**
If a user's taste profile indicates multiple dietary preferences (e.g. gluten-free AND high-protein), what is the matching logic? Strict AND (template must match all) or OR (template matches any)?
*Owner:* Product. *Default if unresolved:* OR matching — show any template that matches at least one stated preference.

**OQ-03 — What defines "popular" for taste-profile-less users**
Is template popularity calculated globally or segmented by platform, region, or user segment? Global is simplest; segmented may be more relevant.
*Owner:* Data / Product. *Default if unresolved:* Global popularity, ordered by lifetime adoption count.

**OQ-04 — Template availability for Family plan onboarding**
Family plans can have up to 5 members with individual taste profiles. Should the template selection screen appear for secondary members during their first login, or only for the primary account holder?
*Owner:* Product. *Default if unresolved:* Template screen for primary account holder only. Secondary members land on the home screen with the plan already populated by the primary holder.

**OQ-05 — Experiment duration and power**
At ~50% of new accounts per arm, what is the minimum detectable effect at 80% power for the 7-day meal plan creation rate? How long must the experiment run before drawing conclusions?
*Owner:* PM / Data. *Default if unresolved:* Run for a minimum of 4 weeks before reviewing primary metric. Do not call the result early.
