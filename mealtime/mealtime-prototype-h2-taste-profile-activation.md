# Prototype Brief: Personalised Taste Profile Activation — Value Preview + Persistent Nudge
**Hypothesis source:** mealtime-eim-report.md — Hypothesis 2
**Date:** 2026-04-20
**Fidelity:** Mid-fi (clickable HTML prototype)
**Owner:** [PM / designer running the session]

---

## TL;DR

36.8% of new Mealtime users skip the taste profile questionnaire. When they do, the app shows them generic recipes that don't match how they eat — and they disengage within two weeks at nearly five times the rate of users who completed it. This prototype tests two things: first, whether showing users a live preview of matched recipes as they answer questions converts the taste profile from feeling like admin into feeling like personalisation worth doing; and second, whether a persistent prompt in the recipe feed ("these are generic — answer 3 questions to see ones matched to you") captures the users who skip anyway. We want to know whether users understand what they're being offered and whether the preview changes their decision.

---

## What We're Testing

We believe that showing users matched recipe previews as they answer taste profile questions — and surfacing a contextual prompt in the recipe feed for those who skip — will cause more users to complete the taste profile, because the barrier is perceived value, not friction.

---

## What the Prototype Must Show

1. **The taste profile screen with a live recipe preview panel** — the existing question-and-option layout, with a horizontally scrollable strip of 2–3 recipe cards appearing below the options. Before any answer is selected, cards show a placeholder state ("Answer below to see recipes matched to you"). Tapping an option button updates the recipe cards to show matched recipes. The "Skip for now" link is present but below the preview panel.

2. **The transition from selection → updated preview** — tapping any option button on the taste profile screen visually updates the recipe cards in the preview strip. This is the core moment being tested: does seeing the recipes change land for the user?

3. **The recipe browse screen — skip path** — the screen the user lands on after tapping "Skip for now." The in-feed banner sits at the top of the recipe list: "These are our most popular recipes. Answer 3 questions to see ones matched to how you eat →". The recipe cards beneath it show generic content (no dietary match).

4. **The recipe browse screen — completed path** — the screen after the user completes the taste profile (either via onboarding or from the in-feed prompt). No banner. Recipe cards show matched content with a contextual heading ("Recipes for you").

5. **Tapping the in-feed banner → taste profile screen (post-skip context)** — tapping the banner in the skip-path browse screen returns the user to the taste profile screen. Completing it from here lands on the completed browse screen.

---

## What the Prototype Does NOT Need to Do

- Show the full sign-up or welcome slide flow — start directly on the taste profile screen
- Use real recipes or real Mealtime recommendation data — placeholder recipe names and food photography colour blocks are fine
- Show more than one taste profile question — use dietary preference only; the prototype is testing the preview mechanism, not the questionnaire flow
- Update the preview for every possible dietary preference selection — two states are sufficient: default (no selection) and one selected state (e.g. "Vegan" selected → shows plant-based recipe cards)
- Show loading states — assume instant preview updates
- Show the grocery list, favorites, or settings screens — bottom nav tabs are present but inert
- Reflect real account data — use fixed placeholder values (name: "Alex", plan: Free)
- Show the incomplete profile nav badge — focus on the two core moments, not the ambient indicator

---

## Fidelity Recommendation

**Mid-fi (clickable HTML prototype)**

The assumption being tested is whether the live recipe preview changes the user's decision in the moment — that transition from "this looks like a form" to "oh, these are actually my kind of recipes." A static frame cannot test this because the update itself is the mechanism. The user needs to tap an option and see the preview respond — that cause-and-effect is what will generate signal in the conversation. The in-feed banner moment similarly needs to be tappable so the user can demonstrate what they'd do. Neither moment requires real data or production fidelity — placeholder recipe names and colour blocks are sufficient. A clickable HTML prototype in the browser delivers the right level of interactivity without engineering time.

---

## Build Prompt

```
Build a clickable mid-fi HTML prototype for a Mealtime feature called "Taste Profile Value Preview". Mealtime is a recipe and meal planning app for home cooks. Use the Mealtime design system: DM Sans font imported from Google Fonts; background #FFFAF5 (warm cream); primary colour #F58700 (amber) for CTAs, active states, and selected option borders; #FFE4C2 for selected option backgrounds and banner backgrounds; #1A1A1A for all headings and body text; #808080 for secondary text; #CCCCCC for unselected borders and dividers; #33995B for progress bar active segments.

Build 4 screens. Only one screen is visible at a time. Use JS to show/hide screens on button/link click. All screens are displayed inside a centered 390×844px phone frame with border-radius 44px and a warm grey page background (#D6D0C8).

---

SCREEN 1: Taste Profile — Default State (no selection)

Full-screen layout. Background #FFFAF5. No bottom nav (onboarding context).

Top section:
- Status bar spacer: 50px height
- Progress bar: 4 horizontal pill segments (height 12px, border-radius 30px, gap 6px, full width minus 32px padding). All 4 segments active green (#33995B) — this is the final onboarding step.
- Back arrow (‹) top-left, 44×44px tap target, no border, no background
- Heading (24px, DM Sans Bold, #1A1A1A, padding 16px 24px 8px): "What kind of food do you eat?"
- Subtext (15px, DM Sans Regular, #808080, padding 0 24px 20px): "We'll show you recipes that match how you actually eat."

Middle section — answer options (padding 0 24px, gap 12px):
4 full-width option buttons (397px wide, 57px height, border-radius 16px, DM Sans Bold 18px, #1A1A1A):
- "Everything" — unselected style (background #FFFFFF, border 1.5px solid #CCCCCC)
- "Vegetarian" — unselected style
- "Vegan" — unselected style
- "High Protein" — unselected style

Preview panel (padding 20px 24px 0):
- Label (12px, DM Sans Medium, #808080, margin-bottom 10px): "YOUR MATCHED RECIPES"
- A horizontally scrollable strip of 3 recipe cards. Each card: width 140px, height 160px, border-radius 16px, background #FFFFFF, border 1.5px solid #CCCCCC.
  - Top 100px: a colored rectangle placeholder (food image). Use muted grey #D1D1C7.
  - Bottom 60px, padding 10px: recipe name (13px DM Sans Bold #1A1A1A), meta (11px #808080).
- All 3 placeholder cards show: name "—", meta "Answer above to see your matches". Grey image placeholder.

Bottom section (padding 20px 24px 32px):
- Primary CTA button (full width, 57px, border-radius 16px, background #F58700, DM Sans Bold 18px, #1A1A1A): "Continue"
- Skip link centered below (14px, DM Sans Medium, #808080, no border): "Skip for now →"

Interactions:
- Tapping "Vegan" → switch to Screen 2 (same taste profile screen, but Vegan selected and preview updated)
- Tapping any other option button → also navigate to Screen 2 (treat all as the same selected state for prototype purposes)
- Tapping "Continue" → navigate to Screen 3 (recipe browse, completed path)
- Tapping "Skip for now" → navigate to Screen 4 (recipe browse, skip path)

---

SCREEN 2: Taste Profile — Vegan Selected (preview updated)

Identical layout to Screen 1 EXCEPT:

- "Vegan" option button is in selected state: background #FFE4C2, border 1.5px solid #F58700
- The 3 recipe preview cards are now populated with matched content:
  Card 1: image placeholder color #8FBC8F (sage green), name "Roasted Aubergine Bowl", meta "25 min · Vegan"
  Card 2: image placeholder color #DAA520 (golden), name "Lentil & Coconut Curry", meta "30 min · Vegan"
  Card 3: image placeholder color #8FBC8F, name "Chickpea Tacos", meta "20 min · Vegan"
- Preview panel label changes to: "RECIPES MATCHED TO YOU"

Interactions:
- Tapping "Continue" → navigate to Screen 3 (recipe browse, completed path)
- Tapping "Skip for now" → navigate to Screen 4 (recipe browse, skip path)
- Back arrow → navigate to Screen 1

---

SCREEN 3: Recipe Browse — Completed Path (no banner)

Full-screen app layout. Background #FFFAF5.

Top bar (background #FFFFFF, border-bottom 1px solid #F0EDE8, padding 50px 24px 16px):
- Left: "Mealtime" wordmark (20px DM Sans Bold, #F58700)
- Right: circular avatar 36px, background #F58700, white "A" initial, DM Sans Bold 14px

Content area (padding 20px 24px, scrollable):
- Heading (22px DM Sans Bold #1A1A1A, margin-bottom 4px): "Recipes for you"
- Subtext (14px #808080, margin-bottom 24px): "Based on your taste profile."
- Section label (11px DM Sans Bold #1A1A1A, letter-spacing 0.09em, uppercase, margin-bottom 14px): "RECOMMENDED FOR YOU"
- 3 recipe cards stacked vertically. Each card: background #FFFFFF, border 1.5px solid #CCCCCC, border-radius 20px, shadow 0px 14px 44px 0px rgba(79,94,85,0.2), padding 0, overflow hidden.
  - Top: colored rectangle 100% width × 120px (food image placeholder)
  - Bottom padding 14px: recipe name (16px DM Sans Bold #1A1A1A), meta (13px #808080)
  Card 1: placeholder color #8FBC8F, name "Roasted Aubergine Bowl", meta "25 min · Vegan · 2 servings"
  Card 2: placeholder color #DAA520, name "Lentil & Coconut Curry", meta "30 min · Vegan · 2 servings"
  Card 3: placeholder color #8FBC8F, name "Chickpea Tacos", meta "20 min · Vegan · 2 servings"

Bottom navigation bar (background #FFFFFF, border-top 1px solid #F0EDE8, padding 10px 0 28px, fixed bottom, 4 tabs):
Tabs: Meal Plan · Groceries · Favorites · Settings
Active tab: Meal Plan — icon 🍽️, label color #F58700
Inactive tabs: icons 🛒 ❤️ ⚙️, label color #B3B3B3, 10px DM Sans SemiBold
All tabs inert.

---

SCREEN 4: Recipe Browse — Skip Path (with in-feed banner)

Identical layout to Screen 3 EXCEPT:

- Heading: "Popular Recipes"
- Subtext: "Complete your taste profile to see recipes matched to you."
- A banner appears ABOVE the section label, below the heading/subtext block:
  Background #FFE4C2, border-radius 16px, padding 16px 20px, margin-bottom 20px.
  - Heading inside banner (15px DM Sans Bold #1A1A1A, margin-bottom 4px): "These aren't personalised yet."
  - Body inside banner (13px DM Sans Regular #808080, margin-bottom 12px): "Answer 3 quick questions to see recipes matched to how you actually eat."
  - Full-width CTA inside banner (height 44px, border-radius 12px, background #F58700, DM Sans Bold 15px #1A1A1A): "Set up my taste profile →"
- Recipe cards show generic content:
  Card 1: placeholder color #F4A460, name "Classic Spaghetti Bolognese", meta "40 min · 4 servings"
  Card 2: placeholder color #CD5C5C, name "Chicken Stir Fry", meta "25 min · 2 servings"
  Card 3: placeholder color #DAA520, name "Mushroom Risotto", meta "35 min · 2 servings"

Interactions:
- Tapping the "Set up my taste profile →" button inside the banner → navigate to Screen 1 (taste profile, default state)

---

GENERAL INSTRUCTIONS:
- No external dependencies except Google Fonts (DM Sans). All CSS in <style>, all JS in <script> before </body>.
- Use colored div rectangles for food image placeholders — no external image URLs.
- The prototype opens on Screen 1.
- Do not add any screens, states, or interactions beyond what is described above.
- Keep all type clean: DM Sans throughout. Use font-weight 400 for body, 500 for secondary labels, 700 for headings and buttons.
- Button text color is #1A1A1A (charcoal), not white — on both amber and banner CTAs.
```

---

## Obvious Objections

**1. "63% already complete the taste profile — why fix something that's working for the majority?"**

The 63% figure includes completions that happen days or weeks after sign-up, not just session 1. The intervention targets the activation window — the first session, when intent is highest. Accounts that skip in session 1 and return to complete later are a small minority; the majority of skippers disengage before they return. Session-1 completion rate is the metric that matters, and 63% is the ceiling estimate, not the baseline for that window.

*What closes it:* Instrument session-1 completion rate as a standalone metric before the experiment launches. This establishes the true baseline and makes the experiment result interpretable.

---

**2. "The preview panel adds visual complexity to an already multi-step onboarding screen."**

This is the right concern. The preview panel is a bet that more content on the screen increases completion — not decreases it — because the content is motivating rather than friction-adding. If users read the preview as noise rather than value, onboarding completion drops and the guardrail fires.

*What closes it:* The guardrail metric (sign-up completion must not drop >2pp) catches this directly. In prototype sessions, watch for users who scroll past the preview without looking at it — that's the signal that the panel isn't doing its job.

---

**3. "The persistent in-feed banner will annoy users who deliberately chose to skip."**

Some users skip because they want to explore first. A banner that can't be dismissed may feel aggressive to this segment. The design intent is that the banner is contextual and informative ("these are generic, here's why") rather than nagging — but whether users experience it that way is an assumption that needs testing.

*What closes it:* In prototype sessions, ask skippers directly: "If this banner was on your screen every time you opened the app, how would you feel about it?" If the majority say "annoying" rather than "useful", explore a time-limited version (e.g. dismissable after 3 sessions) before shipping.

---

**4. "The preview recipe data won't be accurate in production — the recommendation engine may not be fast enough."**

500ms is an aggressive target for a live filtered query. If the recommendation engine can't meet it, the preview may feel laggy, which undermines the "instant relevance" effect the mechanism depends on.

*What closes it:* OQ-01 in the PRD. Pre-cached static recipe sets per preference are the v1 fallback — they won't be perfectly personalised but they'll be fast and directionally correct. The prototype uses static content; in production, static caching is acceptable for launch.

---

**5. "This doesn't fix the underlying problem — the taste profile questions may be too long or too generic."**

True. If the taste profile has more than 3 questions, or asks about things users don't care about, the preview panel makes the payoff visible but doesn't reduce the effort required. The mechanism bets on value perception being the barrier, not question fatigue.

*What closes it:* If session-1 completion improves modestly (not to target) despite the preview panel, the signal is that question count or content is a co-factor. Revisit question reduction as a follow-on. OQ-02 in the PRD surfaces this risk explicitly.

---

**6. "The ARR opportunity ($1,912 retained at 25% churn reduction) is too small to justify the build."**

In isolation, yes. The case for H2 rests on two things: first, it runs sequentially after H1 and likely captures the remaining double-skip tail that H1 doesn't address; second, the build cost is low — the preview panel reuses the existing Meal Card component and the in-feed banner reuses the Upgrade Promo Card pattern. A 1–2 sprint build against even modest ARR retention is a reasonable ROI at Mealtime's volume.

*What closes it:* Measure the H1 + H2 combined effect at 90 days rather than treating the ARR opportunities as independent. If H1 significantly closes the double-skip gap, H2 may no longer be necessary — and that's a valid outcome.

---

## Customer Conversation Guide

### Setup (read to the customer before showing anything)

"I'm going to show you an early version of something we're exploring in Mealtime. It's not finished — some things won't work and the content is placeholder. We're not testing you, we're testing the design. The most helpful thing you can do is think out loud as you go — tell me what you notice, what you'd expect to happen, and what feels off or surprising. There are no wrong answers."

### Tasks

**Task 1 — Taste profile screen:**
"Imagine you've just finished signing up for Mealtime. This is one of the first screens you see. Take a look and tell me what you're noticing."

**Task 2 — Making a decision:**
"Based on what you see here, what would you do next? Go ahead and do it — talk me through your thinking."

**Task 3 — After tapping an option (if they select one):**
"You selected an option and the recipe cards updated. What do you make of that? Does it change anything for you?"

**Task 4 — Skip path (show Screen 4 directly if they completed in Task 2, or let them arrive naturally if they skipped):**
"Now you're in the recipe browse screen. What do you see? Is there anything you'd want to do from here?"

### Questions to ask after each task

- What did you expect to see on this screen?
- Was anything confusing or surprising?
- Would you do this in your own account? What would make you more or less likely to?

### Hypothesis-specific questions

1. "When the recipe cards updated after you tapped an option — did that feel useful, or did you barely notice it? What would make that moment more compelling?"
2. "If you'd skipped the questions and landed on the browse screen with that banner — would you tap it to go back and complete your profile? What would make you more or less likely to?"
3. "Looking at the taste profile screen — does this feel like something worth spending 30 seconds on, or does it feel like setup you want to get past? What's driving that feeling?"

### What a successful session looks like

**Validates the hypothesis:** The customer taps an option, watches the recipe cards update, and unprompted says something like "oh, those are actually more relevant" or "I'd want to keep going to see what else it shows me." On the skip path, they tap the in-feed banner and say they'd complete the profile from there because the generic feed made the value clear. When asked, they describe the preview as "helpful" or "motivating" rather than decorative.

**Falsifies the hypothesis:** The customer taps skip without engaging with the preview cards at all, saying they'd come back to personalisation later — or never. Or: they complete the taste profile but say "I would have done this anyway, the cards didn't really change anything." Either response suggests the barrier is not perceived value but something else — question length, trust in the app, or intention to personalise at all — which the preview mechanism cannot fix.
