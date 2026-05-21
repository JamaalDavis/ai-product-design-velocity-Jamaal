# Prototype Brief — FinWise H2: Goal Activation (Auto-Drafted Goal)

**Product:** FinWise
**Hypothesis:** H2 — Goal Activation: The Missing Personalisation Moment
**Solution direction:** Option B — Auto-Drafted Goal (Zero-Decision Path)
**Status:** Draft
**Date:** 2026-05-20

---

## 0. TL;DR

FinWise users who see their spending data for the first time leave without setting a goal — not because they don't want one, but because deciding what to track feels hard in the moment. This prototype shows users a single card at the end of their spending summary with a goal already drafted: category pre-selected, amount pre-calculated from their actual spend, one tap to activate. We want to learn whether removing the decision is enough to turn passive data-viewers into active goal-holders — before we build the auto-draft algorithm or modify the onboarding flow.

---

## 1. What We're Testing

We believe that presenting a pre-populated savings goal — one that mirrors what users just saw in their spending data — will drive goal activation among users who would otherwise leave the spending summary without acting, because the barrier is the decision of what to set, not the willingness to set something.

---

## 2. What the Prototype Must Show

1. **The spending summary screen** — a realistic breakdown of spending by category, so users feel they're looking at "their data." The auto-draft card appears at the bottom of this screen.
2. **The auto-draft card** — shows the top spending category (Dining), the actual 30-day spend ($340), and the suggested limit ($306/month). Includes three options: "Activate," "Adjust amount," and "Not now."
3. **The adjust-amount flow** — tapping "Adjust amount" reveals an inline editor on the same screen (no navigation). The user changes the amount; "Activate" updates to reflect their number.
4. **The activation success state** — a brief confirmation ("Goal set!") before transitioning.
5. **The goal progress screen** — shows the newly created "Dining spending goal" with a progress bar ($0 of $306 spent this month) and the current month's dining spend.

These five moments are the complete test. Each one should be tappable in sequence.

---

## 3. What the Prototype Does NOT Need to Do

- Connect to real transaction data or a real backend
- Persist the goal after the session ends
- Show any other onboarding steps before or after the spending summary
- Handle any account other than the pre-populated demo (one persona, one data state)
- Show the full app navigation, settings, or other features
- Animate the progress bar filling in real time
- Handle the "Not now" path beyond closing the card (no further screens needed for testing)
- Support multiple categories — Dining is the pre-selected top category for this test

---

## 4. Fidelity Recommendation

**Mid-fi clickable prototype (HTML/CSS/JS or Figma with hotspots).**

The hypothesis is about whether removing the decision barrier drives activation — not whether the interaction feels polished. We need users to tap through the flow and react to the concept of an auto-drafted goal. Static slides can't answer "would you tap Activate?" — but a working prototype can. Real data, real animation, and production-quality UI are not required and would slow the test down without improving signal quality.

---

## 5. Build Prompt

```
Build a mid-fi clickable mobile prototype (375px wide, mobile viewport) for a personal finance app called FinWise. The prototype covers one specific flow: a user views their spending summary and sees a pre-populated savings goal suggestion. Build exactly the screens listed below — nothing else.

VISUAL STYLE
Clean, professional fintech. White backgrounds. Primary colour: #2563EB (blue). Success colour: #16A34A (green). Body text: #111827. Secondary text: #6B7280. Card backgrounds: #F9FAFB. Border radius: 12px on cards, 8px on buttons. Font: system-ui or Inter. No decorative illustrations.

---

SCREEN 1: Spending Summary
Header: "May Spending" (left-aligned, 20px bold). Back arrow top-left (non-functional).

Spending breakdown list (each row: category name left, dollar amount right, light grey divider between rows):
- Dining         $340
- Groceries      $220
- Transport      $180
- Entertainment  $95
- Shopping       $74
- Other          $43

Below the list, a card with a light blue (#EFF6FF) background and a 1px #BFDBFE border:

Card content:
- Small label at top: "SUGGESTED GOAL" in #2563EB, 11px uppercase tracked
- Heading: "You spent $340 on Dining last month"
- Subtext: "Suggested limit: $306/month" in #6B7280
- Primary button (full width, #2563EB background, white text): "Activate goal"
- Below that, two text links centred on the same row: "Adjust amount" (blue) and "Not now" (grey), separated by a bullet

Tapping "Activate goal" → Screen 3 (Success state)
Tapping "Adjust amount" → Screen 2 (Adjust amount)
Tapping "Not now" → closes the card, spending list remains (or just show Screen 1 without the card as a static end state — no further interaction needed for this path)

---

SCREEN 2: Adjust Amount (replaces the card content inline — same screen, same header)
Show the spending breakdown list exactly as in Screen 1 above.

Below the list, the same card but with the content replaced:
- Small label: "ADJUST YOUR GOAL" in #2563EB, 11px uppercase
- Heading: "Dining spending goal"
- Subtext: "Suggested: $306/month"
- Amount input: a large centred number "$306" in 32px bold with a minus (−) button left and plus (+) button right (each 44×44px, grey bordered circles). Each tap on − reduces by $10; each tap on + increases by $10. Show the updated number.
- Primary button (full width): "Activate with $[current amount]" — updates as user taps +/−
- Below: "Back to suggestion" grey text link → returns to Screen 1 card state

Tapping "Activate with $X" → Screen 3 (Success state, using whatever amount is shown)

---

SCREEN 3: Success State
Full screen. White background. Centred vertically.

Large green checkmark icon (48px, #16A34A).
Heading: "Goal set!" (24px bold, #111827)
Subtext: "Dining spending goal · $306/month" (or the adjusted amount if Screen 2 was used)
Small grey text below: "We'll track your dining spend against this limit each month."
Primary button (full width, #2563EB): "See my goal"

Tapping "See my goal" → Screen 4

---

SCREEN 4: Goal Progress Screen
Header: "Dining Spending Goal" (20px bold). Back arrow top-left (non-functional).

Progress section (card, white background, 1px #E5E7EB border):
- Label: "MAY PROGRESS" in #6B7280, 11px uppercase
- Large number: "$0" spent (32px bold)
- Subtext: "of $306 limit"
- Progress bar: full width, light grey (#E5E7EB) track, blue (#2563EB) fill at 0% (no fill — it's day 1)
- Small text below bar: "0% of monthly limit used"

Below the card:
- Section label: "THIS MONTH'S DINING" in #6B7280, 11px uppercase
- Three placeholder transaction rows (grey pill shapes — no real data needed):
  - Row 1: "No dining transactions yet"  —  shown in #9CA3AF italic

Footer note (bottom of screen, grey text, small): "FinWise will update your progress as transactions sync."

No further interactions required on this screen.

---

NAVIGATION SUMMARY
Screen 1 → Screen 3: tap "Activate goal"
Screen 1 → Screen 2: tap "Adjust amount"
Screen 2 → Screen 3: tap "Activate with $X"
Screen 3 → Screen 4: tap "See my goal"
Screen 1 (no card): tap "Not now" end state — static, no further taps

Make all tap targets minimum 44×44px. Ensure text contrast passes 4.5:1 against backgrounds. No placeholder "[INSERT X]" text — use the exact copy specified above.
```

---

## 6. Obvious Objections

**1. "Is the 18.9% baseline real, or an artefact of this dataset?"**
The 18.9% `set_first_goal` completion rate comes from the EIM analysis (n=1,800 accounts, snapshot date 2026-03-01). The data dictionary notes a "typical" rate of 12%, suggesting the dataset may skew slightly high. The direction of the signal — goal-setting as the strongest retention predictor — is consistent across both figures. The exact baseline will be confirmed by the holdout experiment. The prototype test doesn't depend on the exact number; it answers whether users respond to the auto-draft concept at all.

**2. "Will auto-drafting a goal feel presumptuous — like the app is deciding for them?"**
This is the core UX risk. If users read the card as the app making a decision on their behalf rather than offering a helpful suggestion, the card could feel patronising, particularly for financially anxious users sensitive about money judgment. The customer session will specifically probe this. Framing matters: "suggested" and "adjust" language signals optionality. The "Not now" escape must be visible and low-pressure.

**3. "How does setting a goal connect to actually upgrading?"**
The EIM data shows 98.7% of upgrade events came from accounts that hit the savings_goal paywall. The mechanism is: goal-setter → hits 1-goal free-tier limit → `savings_goal: blocked` → upgrades. Auto-drafted goal activation gets users to the first goal; the upgrade trigger is the second-goal attempt. The prototype test validates step one. Step two depends on the product's existing paywall, which is already instrumented.

**4. "Why target all non-goal-setters? Shouldn't we focus on the highest-intent segment?"**
The EIM analysis doesn't find a segment where the auto-draft bet is wrong — the goal-churn signal holds across `savings_motivated`, `anxious_tracker`, and `budget_focused` segments. The `mint_refugee` cohort is the only population with a meaningfully different profile, representing ~30K of 380K users. Starting broad and segmenting post-experiment is the right sequence.

**5. "Is the auto-draft algorithm worth the engineering cost?"**
The algorithm as specified (top category by 30-day sum, limit = 10% below actual spend) is deliberately simple — no ML, no category benchmarks. The engineering surface is: (1) a query against existing transaction data, (2) a rounding function, (3) a card component. The larger cost is the experiment infrastructure (feature flag, holdout assignment). If the holdout shows no lift, the algorithm question is moot; if it shows lift, refining the algorithm is a low-risk follow-on.

**6. "Does this conflict with the existing manual goal creation flow?"**
The auto-draft card is additive — it doesn't replace or remove the manual goal creation screen. Users who dismiss the card can still navigate to goal creation manually. The risk is that auto-drafted goals set at a poor limit could create a negative association with goal-setting. The `goal_still_active_30d` event is specifically instrumented to catch goal abandonment. If auto-drafted goals are deleted at high rates within 30 days, the suggested amount algorithm needs revisiting before scaling.

---

## 7. Customer Conversation Guide

**Setup (tell the customer — read this verbatim before showing anything):**

"I'm going to show you an early version of a feature we're exploring in FinWise. It's not finished — some parts are placeholders, and nothing you do in here will affect your real account. I'd love for you to just interact with it naturally and tell me what you're thinking as you go. There are no right or wrong answers — we're trying to understand how the feature feels, not test whether you can use it correctly."

---

**Tasks (give one at a time — don't show the next task until the previous one is done):**

1. "You've just connected your bank account and you're looking at your spending for the first time. Take a look at this screen and tell me what you notice."

2. "Based on what you're seeing, what would you do next? Go ahead and do it."

3. "Now imagine it's a week later and you've come back to the app. What would you expect to find when you open it?"

---

**Questions to ask after each task:**

- What did you expect to happen when you tapped that?
- Was there anything confusing or unexpected?
- Would you actually do this in your own account — why or why not?

---

**Hypothesis-specific questions (ask after the full flow):**

1. "The app suggested a spending limit for dining based on what you spent last month. How did that feel — helpful, presumptuous, something else?"

2. "If the suggested amount felt wrong to you, what would you have done?" *(Listen for: did they notice "Adjust amount"? Did they feel confident they could change it? Did they feel they had to accept it?)*

3. "When you set that goal — or if you decided not to — what was going through your mind?" *(Listen for: decision fatigue, trust in the suggested number, whether they felt ownership over the goal.)*

---

**What a successful session looks like:**

The customer taps "Activate" (or "Activate with $X" after adjusting) without being prompted to do so by the facilitator, and when asked why, says something like "it already had the number there" or "I didn't have to think about it" or "it seemed like a reasonable place to start." They express ownership over the goal even though they didn't choose the category or the starting amount.

A session that **falsifies the hypothesis**: the customer reads the card, pauses, and says something like "I don't trust that number" or "I'd want to set this myself" or "this feels like the app is assuming things about me" — and does not tap Activate even when prompted to explore the screen. If this happens in more than 2 of 5 sessions, the decision-cost assumption is likely wrong and Option A (inline prompt) or Option C (spending summary redesign) should be revisited.
