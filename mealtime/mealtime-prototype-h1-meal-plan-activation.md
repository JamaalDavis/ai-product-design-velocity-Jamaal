# Prototype Brief: Guided Meal Plan Activation — First Week Template
**Hypothesis source:** mealtime-eim-report.md — Hypothesis 1
**Date:** 2026-04-19
**Fidelity:** Mid-fi (clickable HTML prototype)
**Owner:** [PM / designer running the session]

---

## TL;DR

39% of new Mealtime users never create a meal plan and churn at 3.2x the rate of those who do. This prototype tests whether presenting pre-built weekly meal templates at the end of onboarding — so users arrive at the home screen with a plan already in place rather than an empty calendar — is enough to close that gap. We want to know whether users understand what they're being offered, whether a template feels like a useful starting point or an unwanted imposition, and whether they would actually tap one in their own account.

---

## What We're Testing

We believe that offering a ready-made weekly meal plan template as the last step of onboarding — lowering the first action from "build a plan" to "choose a plan" — will cause more users to arrive at the home screen with a plan in place, because the barrier is activation energy, not intent.

---

## What the Prototype Must Show

1. **The template selection screen** — the new onboarding step, appearing after the existing taste profile / permissions flow, with 4 template cards the user can browse and a "Skip for now" option below them.
2. **Tapping a template → home screen with plan populated** — after the user taps a template, they land directly on the Meal Plan home screen with a full week of recipes already filling the calendar slots.
3. **The skip path → empty home screen** — tapping "Skip for now" lands the user on the same home screen but with an empty calendar, showing the contrast with the adoption path.
4. **The populated home screen state** — enough detail in the calendar to show that a real plan is in place: recipe thumbnails, meal category labels, and a visible week of slots. This is the "aha" the user needs to see.

---

## What the Prototype Does NOT Need to Do

- Show the full sign-up or taste profile flow — start directly on the template selection screen
- Use real recipes or real Mealtime content — placeholder recipe names and food photography are fine
- Allow the user to edit, swap, or remove meals from the adopted template — the plan is read-only in the prototype
- Handle the case where no templates match a dietary preference — show 4 templates regardless
- Show loading states or error states
- Reflect real account data — use fixed placeholder values throughout (name: "Alex", plan: Premium)
- Show anything beyond the template selection screen and the home screen — the groceries, favorites, and settings tabs are present but inert

---

## Fidelity Recommendation

**Mid-fi (clickable HTML prototype)**

The assumption being tested is whether the template framing — "here's a week to get you started" — creates enough confidence and relevance to motivate a tap rather than a skip. A static frame can't tell us that. The user needs to be able to tap a template card and see the home screen populate with a real plan — that transition is the core of the hypothesis. Without it, we're testing whether the screen looks appealing, not whether the mechanism works. A clickable prototype in the browser gives us that without engineering time. Real data and real recipes are not needed — the insight is about the framing and the felt effort, not the content accuracy.

---

## Obvious Objections

**1. "61% of users already create a meal plan — what's the problem?"**

The 61% completion rate is not time-bound and includes users who created a plan days or weeks after sign-up. The hypothesis is specifically about the first 7 days, when intent is highest and disengagement risk is greatest. The 39% who skip are churning at 3.2x — the intervention targets them, not the majority.

*What closes it:* Instrument a 7-day window baseline (not yet established) before interpreting experiment results. The 7-day rate is what the experiment will move.

---

**2. "Adding a step to onboarding will reduce sign-up completion."**

A template selection screen adds one screen and one decision. The risk is bounded: the screen has a clearly labelled skip and asks for zero account information. The guardrail metric (onboarding completion rate must not drop >2pp) catches this. If it fires, the step is adding net friction and must be redesigned.

*What closes it:* Run the experiment with the guardrail active. If the guardrail fires, test a lighter version (e.g. a single featured template with a dismiss option) before abandoning the mechanism.

---

**3. "Users who skip the template aren't going to be convinced by a screen."**

Some users skip because they want to explore before committing — not because they can't build a plan. For these users, the template screen may feel like an interruption. The prototype session will reveal whether users read the templates as helpful scaffolding or as noise they want to get past.

*What closes it:* In the customer conversation, ask directly: "What would you do here?" before explaining what the screen is for. If the majority tap skip without reading the templates, the framing needs work — not the mechanism.

---

**4. "Templates will feel generic and not relevant to my diet."**

A user who completed the taste profile will see dietary-matched templates in production. In the prototype, all users see the same 4 templates. If users consistently say "none of these are for me" in sessions, that is a signal about template variety, not the mechanism itself.

*What closes it:* In the conversation guide, ask: "Is there a template here that feels like it's for you?" If not, probe why — is it the dietary content, the meal types, the complexity, or something else?

---

**5. "The plan they adopt won't be one they actually cook."**

Adoption of the template in onboarding doesn't guarantee the user cooks any of the meals. The prototype tests whether users will adopt a template — not whether they'll follow through. The downstream cooking behaviour is measured in the experiment via the secondary metric (90-day churn), not the prototype.

*What closes it:* Frame this explicitly in the customer conversation: "If you tapped this, would you actually try to cook any of these meals this week?" The answer tells you whether the template content needs to change, not whether the mechanism is wrong.

---

**6. "The ARR opportunity is small."**

$3,293 ARR retained at 25% churn reduction is modest in absolute terms. The case rests on Mealtime being a volume business where activation improvements compound across cohorts — every new account that activates is a retained subscriber who may upgrade or refer. The template step is also low build cost (1–2 sprint weeks), so the ROI threshold is low.

*What closes it:* If the experiment shows a meaningful lift in 7-day plan creation, the secondary churn metric at 90 days will show whether that lift translates to retention. A null result on the secondary metric at meaningful lift on the primary would suggest the mechanism works for activation but not for long-term retention — a different problem.

---

## Customer Conversation Guide

### Setup (read to the customer before showing anything)

"I'm going to show you an early version of something we're exploring in Mealtime. It's not finished — some things won't work and the content is placeholder. We're not testing you, we're testing the design. The most helpful thing you can do is think out loud as you go — tell me what you're noticing, what you'd expect to happen, and whether anything feels off. There are no wrong answers."

### Tasks

**Task 1 — Template selection screen:**
"Imagine you've just finished setting up your Mealtime account. You've answered a few questions about what you like to eat, and this is the next screen you see. Take a look and tell me what you notice."

**Task 2 — Making a choice:**
"Based on what you're seeing, what would you do next? Go ahead and do it — talk me through your thinking."

**Task 3 — After the home screen appears (adoption path only):**
"You're now on the home screen. What do you see? Does anything surprise you?"

### Questions to ask after each task

- What did you expect to see on this screen?
- Was anything confusing or surprising?
- Would you do this in your own account? What would make you more or less likely to?

### Hypothesis-specific questions

1. "When you saw the template cards — did they feel relevant to how you actually eat? Was there one that felt like it was for you, or did they all feel too generic?"
2. "If you tapped a template and your calendar was immediately filled in — how would that feel? Helpful? Overwhelming? Something else?"
3. "If there was a 'Skip for now' option — would you use it? What would make you skip rather than tap a template?"

### What a successful session looks like

**Validates the hypothesis:** The customer reads the template cards, identifies at least one that feels relevant to their diet or schedule, and taps it without being prompted. On the home screen, they say something like "oh, that's nice — I didn't have to do anything" or "I'd want to change a few of these but it's a good starting point." When asked about skipping, they say they wouldn't — or they say they'd skip only because they already know exactly what they want to cook.

**Falsifies the hypothesis:** The customer reads the templates and immediately taps skip, saying the options don't apply to them or that they'd rather choose their own. Or: they adopt a template but say they'd delete everything and start over, suggesting the template creates work rather than removing it. Either response suggests the barrier is not activation energy but content relevance or user control — which a template mechanism cannot fix without significantly more personalisation.

---

## Build Prompt

```
Build a clickable mid-fi HTML prototype for a Mealtime feature called "Guided Meal Plan Activation". Mealtime is a recipe and meal planning app for home cooks. Use the Mealtime design system: warm, clean, appetising aesthetic; off-white / warm cream backgrounds; amber/saffron primary colour for CTAs and active states; soft coral accent; deep charcoal for headings; Inter font imported from Google Fonts.

Build 3 screens. Only one screen is visible at a time. Use JS to show/hide screens on button/link click.

---

SCREEN 1: Template Selection (Onboarding Final Step)

Full-screen layout. Off-white background (#FAFAF7). No navigation bar.

Top section (padding 24px, text centered):
- Small progress indicator: 4 filled dots in a row (amber), showing this is the last onboarding step
- Heading (text-xl, bold, charcoal): "Here's a week to get you started"
- Subtext (text-sm, gray): "Pick a plan that suits how you eat. You can change any meal after."

Below, a vertically scrollable list of 4 template cards (full width, padding 0 16px, gap 12px):

Card style: white background, border-radius 12px, shadow-sm, padding 16px.
Each card contains:
- Left side: a row of 3 small square food images (40×40px, rounded, placeholder color blocks — use warm food tones: orange, green, red, yellow)
- Right side: template name (text-md, font-semibold, charcoal) and descriptor (text-sm, gray)
- Right edge: a right-facing chevron icon (›)

4 template cards:
1. Name: "Quick Weeknight Dinners" | Descriptor: "7 dinners · 30 min or less · Family friendly"
2. Name: "High Protein Week" | Descriptor: "7 dinners + 5 lunches · Gym-focused · Meal-prep friendly"
3. Name: "Plant-Based Reset" | Descriptor: "7 dinners + 7 breakfasts · Vegan · Light and fresh"
4. Name: "Mediterranean Week" | Descriptor: "7 dinners + 5 lunches · Balanced · Lots of variety"

Below the cards (centered, padding-top 20px):
- Ghost text link: "Skip for now →" (text-sm, gray, no border, no background)

Interactions:
- Tapping ANY template card → navigate to Screen 2 (home screen, plan populated)
- Tapping "Skip for now" → navigate to Screen 3 (home screen, empty)

---

SCREEN 2: Home Screen — Plan Populated

Full-screen app layout. Off-white background.

Top bar (white, border-bottom, padding 16px 20px):
- Left: "Mealtime" wordmark (amber, font-semibold)
- Right: circular avatar placeholder (32px, amber background, white "A" initial)

Below top bar, greeting section (padding 20px):
- Heading (text-lg, bold, charcoal): "Good evening, Alex"
- Subtext (text-sm, gray): "Your week is planned. Here's what's coming up."

Below greeting, a weekly calendar section:
- Section heading (text-sm, font-semibold, charcoal, uppercase, letter-spacing): "THIS WEEK"
- Show 4 day rows (Monday–Thursday). Each row:
  - Day label left (text-xs, gray, uppercase): MON / TUE / WED / THU
  - Meal slot card (full width minus padding, white, border-radius 8px, shadow-sm, padding 12px):
    - Left: colored square thumbnail (40×40px, rounded, warm food tones alternating)
    - Right of thumbnail: recipe name (text-sm, font-semibold, charcoal) + metadata (text-xs, gray): e.g. "30 min · 2 servings"
    - Far right: meal category badge (amber pill, text-xs): "Dinner"

Day/Recipe content:
- MON: "Lemon Herb Chicken" · 30 min · 2 servings
- TUE: "Black Bean Tacos" · 20 min · 2 servings
- WED: "Salmon & Roasted Veg" · 35 min · 2 servings
- THU: "Pasta Primavera" · 25 min · 2 servings

Below the calendar rows, a subtle CTA row (centered, padding-top 16px):
- Ghost button: "+ Add a meal" (text-sm, gray border, rounded, inert — no-op)

Bottom navigation bar (white, border-top, fixed bottom):
- 5 tabs: Home (active, amber icon) · Discover · Groceries · Favorites · Profile
- Active tab: amber icon + amber label text
- Inactive: gray icon + gray label

All tabs except Home are inert (no-op click).

---

SCREEN 3: Home Screen — Empty (Skip Path)

Identical layout to Screen 2 EXCEPT:

- Greeting subtext: "Let's get your first week planned."
- No day rows shown. Instead, a centered empty state below the "THIS WEEK" heading:
  - Dashed rounded rectangle (full width minus padding, height 160px, border: 2px dashed #D1D1C7, border-radius 12px)
  - Inside: fork-and-plate emoji or simple icon placeholder, centered
  - Below icon: text (text-sm, gray, centered): "No meals planned yet"
  - Below that: primary button (amber, rounded, padding 12px 24px): "Build my first plan →" (inert — no-op)

Bottom navigation bar: same as Screen 2, all tabs inert.

---

GENERAL INSTRUCTIONS:
- No external dependencies except Google Fonts (Inter). All CSS in <style>, all JS in <script> before </body>.
- Use placeholder colored squares (div with background-color) for food images — do not use external image URLs.
- Food image colors to use: #F4A460 (warm orange), #8FBC8F (sage green), #CD5C5C (warm red), #DAA520 (golden), #DEB887 (tan), #BC8F8F (rosewood). Rotate through these.
- The prototype should open on Screen 1.
- Do not add any screens, states, or interactions beyond what is described above.
- Keep typography clean: Inter, charcoal (#1A1A2E) for headings, #6B7280 for secondary text, #F59E0B for amber primary.
```
