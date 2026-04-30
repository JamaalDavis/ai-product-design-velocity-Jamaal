# Prototype Brief: Goal Activation — Preset Creator + Motivation-Moment Prompt
**Product:** FinWise
**Hypothesis:** H1 — The Goal Activation Gap
**PRD:** finwise-prd-h1-goal-activation.md
**Date:** 2026-04-30

---

## 0. TL;DR

Right now, 88% of FinWise users never set a savings goal — even though goal-setters churn at one-third the rate and upgrade to Pro at four times the rate of users who don't. The current goal creation screen is a blank form. We believe the blank canvas is the blocker. This prototype replaces it with preset goal options pre-filled with amounts drawn from the user's spending data, followed by a personalised timeline snapshot that makes the goal feel real. We also show the prompt that appears after a user views their spending summary — the second moment where goal motivation is highest. We want to know if users respond to being offered a starting point rather than a blank page.

---

## 1. What We're Testing

We believe that offering users preset goal options connected to their spending data — rather than an empty form — will remove the blank-canvas barrier and get significantly more users to complete goal creation within the first 14 days of signing up.

---

## 2. What the Prototype Must Show

Four specific moments, in order:

1. **Preset goal selection screen** — the redesigned goal creation screen showing 3–5 selectable goal cards, each with a name, a suggested amount, and an estimated timeline derived from the user's spending data. User taps a card to select it.

2. **Confirmation screen** — after selecting a preset, user sees the goal name, amount, and target date pre-filled and editable. A single "Create goal" button completes the flow.

3. **Progress snapshot screen** — shown immediately after goal creation. Displays the goal name, target amount, and a personalised timeline: "Based on your last 30 days, you could reach this in 4 months." A dismiss button returns to the dashboard.

4. **Motivation-moment bottom sheet** — a separate entry point. Shows a partially visible spending summary in the background with a bottom sheet overlay: "You've seen where your money goes — want to set a goal to change it?" with a "Set a goal" CTA. Tapping the CTA leads to the preset selection screen (screen 1).

---

## 3. What the Prototype Does NOT Need to Do

- Connect to real bank data or show real transaction amounts
- Actually save a goal or persist any state between screens
- Show the full onboarding flow (link account, profile setup, etc.)
- Show the full spending summary / analysis view — just the blurred/dimmed version visible behind the bottom sheet
- Handle the "Create your own" custom goal path
- Show error states or validation
- Work on multiple devices or screen sizes — design for one mobile screen size (375px wide)

---

## 4. Fidelity Recommendation

**Mid-fi clickable prototype** (HTML, Figma, or similar).

The core assumption being tested is whether users respond to preset goal cards that feel connected to their data — not just whether the UI is clear. Static slides can show the layout but can't test whether the suggested amounts and timeline feel credible and personal. A clickable prototype lets the customer tap through the flow at their own pace and react naturally to each screen, which is where the real signal comes from. Real data is not required — well-chosen placeholder numbers (see build prompt) are sufficient to test the credibility of the concept.

---

## 5. Build Prompt

```
Build a clickable mobile prototype (375px wide, mobile browser) for a personal finance app called FinWise. The prototype demonstrates a redesigned savings goal creation flow. Build 4 screens connected by taps as described below. Use a clean, modern mobile UI — white backgrounds, dark text, a teal/green primary colour (#1DB87E), rounded cards, standard iOS-style navigation. No real data needed — use the placeholder content provided.

---

SCREEN 1: Preset Goal Selection

Header: "What are you saving for?" with a back arrow (non-functional) top left.
Subheader below: "Pick a starting point — you can adjust the details next."

Show 4 selectable goal cards in a vertical list. Each card has:
- Goal name (bold, 16px)
- Suggested amount in teal (14px)
- Estimated timeline in grey (13px)

Card content:
1. "Emergency Fund" / "Save $1,000" / "You could reach this in 3 months"
2. "Holiday" / "Save $2,500" / "You could reach this in 8 months"  
3. "Pay off credit card" / "Save $800" / "You could reach this in 2 months"
4. "General savings" / "Save $500" / "You could reach this in 6 weeks"

Below the cards, show a plain text link in grey: "Create your own goal →" (non-functional).

Tapping any card navigates to Screen 2. Show a selected state (teal border) briefly before transition.

---

SCREEN 2: Goal Confirmation

Header: "Confirm your goal" with a back arrow (navigates to Screen 1).

Show the selected goal details in an editable-looking card:
- Goal name: "Emergency Fund" (or whichever was tapped — use Emergency Fund as default)
- Target amount: "$1,000" with a small edit icon (non-functional)
- Target date: "August 2026" with a small edit icon (non-functional)

Below the card, show in grey italic: "Amount estimated from your recent spending. Tap to adjust."

Primary CTA button at bottom: "Create goal" (full width, teal, rounded). Tapping navigates to Screen 3.

Secondary link below button: "Go back" (navigates to Screen 1).

---

SCREEN 3: Progress Snapshot

No header navigation. Full-screen congratulatory moment.

Top section (centred):
- A simple circular progress graphic (show ~15% filled arc in teal around a dollar sign icon)
- Large text: "Emergency Fund"
- Subtext in grey: "$0 saved of $1,000"

Middle section (white card with light grey border, rounded):
- Heading: "Your personalised timeline"
- Body: "Based on your last 30 days, you could reach this goal in 3 months — by August 2026."
- Small note in grey below: "We'll update this as your spending changes."

Bottom:
- Primary CTA: "Go to my dashboard" (full width, teal) — non-functional (no further screens)
- Small grey text below: "We'll remind you to check in on your goal each week."

---

SCREEN 4: Motivation-Moment Bottom Sheet

This screen is separate from the flow above — it represents a different entry point. Do not connect it to Screens 1–3 automatically. Add a small "Preview: Motivation Prompt" label at the top in grey to indicate this is a separate prototype moment.

Background: show a dimmed/blurred version of a spending summary screen. Use simple placeholder content:
- Title "Your spending this month" visible but blurred
- A few category rows (Food & Drink $340, Transport $120, Shopping $280) visible but de-emphasised
- Apply a semi-transparent dark overlay (rgba 0,0,0,0.4) over the background

Bottom sheet (slides up from bottom, white, rounded top corners, ~55% screen height):
- Small drag handle at top centre (grey pill)
- Heading (bold, 18px): "You've seen where your money goes."
- Body (16px, grey): "Most people who track their spending have a goal in mind. Set yours in 30 seconds."
- Below body, show a single example goal card (compact version):
  "Emergency Fund · Save $1,000 · 3 months away"
  — styled as a small teal-bordered card with the FinWise logo/icon placeholder
- Primary CTA button: "Set a goal" (full width, teal) — tapping navigates to Screen 1
- Secondary text link below: "Maybe later" — tapping dismisses the sheet (hide the sheet, show the spending summary unblurred)

---

INTERACTIONS SUMMARY:
- Screen 1: tap any goal card → Screen 2
- Screen 2: tap "Create goal" → Screen 3; tap back → Screen 1
- Screen 3: tap "Go to my dashboard" → no action (end of flow, show a "End of prototype" message)
- Screen 4: tap "Set a goal" → Screen 1; tap "Maybe later" → dismiss sheet

Do not add any screens beyond these four. Do not add login, signup, or account linking flows. Do not add animations beyond simple screen transitions.

Save as a single self-contained HTML file with all CSS and JS embedded.
```

---

## 6. Obvious Objections

**"The 12% baseline — maybe users just skip goal creation because they're not ready, not because the form is hard."**
Honest answer: possible. But users reach the goal step after already linking a bank account and viewing their spending summary — two non-trivial steps. They're not disengaged. The 88% drop-off on a single form, for users who came this far, points to the form, not to lack of intent. The prototype test will reveal whether users respond to being offered a starting point. If they don't — if they say "I still wouldn't know what to set" — that validates the intent hypothesis and rules out the form.

**"Presets might feel generic and miss how people actually think about money."**
Honest answer: v1 presets will be imperfect. The bet is that a relevant-enough starting point converts better than a blank canvas, even if it's not perfectly personalised. The suggested amounts derived from transaction data partially address this. Prototype sessions will reveal which presets resonate and which feel off — that's exactly what the test is for.

**"How does setting a goal actually drive revenue? Users can set a goal on the free tier."**
Honest answer: the path is goal creation → engagement → goal-block event → Pro upgrade. Free-tier users can create one goal; 71% of Pro upgrades happen within 14 days of hitting the 1-goal limit. Getting the first goal created is the prerequisite to the entire conversion chain. No first goal = no goal-block event = no upgrade trigger. The revenue link is real but indirect, and should be explained clearly when presenting.

**"Won't users just tap a preset to get through the screen without actually caring about the goal?"**
Honest answer: some will. But this is observable in the prototype session — watch whether users engage with the suggested amount and timeline or tap through mindlessly. In the live test, the downstream metric (engagement with the goal screen in subsequent sessions, and upgrade rate) catches gaming. If goal creation goes up but engagement with the goal feature doesn't, that's a signal.

**"The progress snapshot requires 30 days of transaction data — most new users won't have that."**
Honest answer: correct, and the PRD specifies a fallback for <7 days of data. The snapshot is designed to be credible, not precise — "could reach this in ~3 months" based on category averages is still more motivating than silence. The prototype should test whether the concept of a personalised timeline is compelling, independent of exact accuracy.

**"We already have a goal creation screen. Why is a redesign the right fix rather than better onboarding copy or a coach mark?"**
Honest answer: copy and coach marks help with discovery problems. This is a commitment problem — the form asks users to name something they haven't thought about yet, assign an amount they haven't calculated, and set a date they can't predict. A coach mark doesn't solve blank-canvas paralysis. The preset approach removes the cognitive load entirely. But if the prototype sessions reveal that users understood the form and just needed a push, the fix might be simpler — that's a valid outcome.

---

## 7. Customer Conversation Guide

**Setup (tell the customer before showing anything):**
"I'm going to show you a concept for a personal finance app. It's not finished — some things won't work. I want your honest reaction as you use it. There are no right or wrong answers. I'm interested in what feels natural and what feels confusing. Don't worry about being polite — the most useful thing you can tell me is when something doesn't feel right."

Do not mention savings goals, goal creation, or the word "conversion" before showing the screens.

---

**Tasks:**

*Task 1 — Preset selection screen (show Screen 1)*
"Imagine you've just connected your bank account to this app for the first time. You're looking at this screen. What would you do?"

Questions after:
- What did you expect to see on this screen?
- Is anything confusing or unexpected?
- Would you tap any of these, or would you want to do something different?

*Task 2 — Confirmation and snapshot (show Screen 2, then Screen 3)*
"Go ahead and complete this step as if you were doing it for real."

Questions after:
- What did you make of the timeline it showed you?
- Does the suggested amount feel relevant to your situation, or does it feel like a guess?
- After seeing this, would you come back to check on this goal? Why or why not?

*Task 3 — Motivation-moment prompt (show Screen 4)*
"Imagine you've been using the app for a week. You just looked at your spending breakdown — where your money went last month. This appears. What would you do?"

Questions after:
- What did you expect to happen after looking at your spending?
- Does this feel helpful or intrusive?
- Would you tap "Set a goal" here, or dismiss it?

---

**Hypothesis-specific questions (ask after all tasks):**

1. "The app suggested a goal amount based on your spending. How did that feel — relevant, or like it was guessing?"
2. "If the app told you 'you could reach this goal in 3 months' — would that make you more or less likely to keep using it? What would make you actually check back?"
3. "Compare what you just saw to setting up a goal from scratch — typing in a name, an amount, a date. Which would you prefer and why?"

---

**What a successful session looks like:**
The customer selects a preset without needing to be prompted, engages with the suggested amount (either accepts it or adjusts it with a clear reason), and — unprompted — says something like "I'd want to see how I'm tracking against this" or "I'd come back to check on this." On the motivation-moment prompt, they say they'd tap "Set a goal" rather than dismiss it, and can articulate why the timing (post-spending-view) felt right.

**What falsifies the hypothesis:**
The customer says the presets don't match anything they'd actually save for, ignores or dismisses the progress snapshot without engaging, or says they'd skip the motivation prompt the same way they'd skip any other notification. If multiple sessions produce this pattern, the problem is intent or relevance — not form friction — and a different mechanism is needed.
