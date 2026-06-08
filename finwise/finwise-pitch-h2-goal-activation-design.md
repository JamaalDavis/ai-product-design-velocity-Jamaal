# Ready-to-Pitch — FinWise H2: Goal Activation (Design & UX Team)
**Audience:** Design / UX Team
**Decision needed:** Run the 90-day holdout experiment
**Format:** Google Slides / Canva (8-slide standalone deck)
**Narrative style:** Teacher + Strategist
**Date:** 2026-05-30

---

## Deck Metadata

- **Title:** Goal Activation: From Design to Experiment
- **Subtitle:** H2 Prototype Readout — the auto-drafted goal, and what 90 days will teach us
- **Audience:** Design and UX team
- **Goal:** Share the design rationale, walk through V2 decisions, and align the team on running the 90-day holdout experiment
- **Decision needed:** Approve the experiment run — confirm instrumentation, feature flag, and 30-day check-in schedule
- **Slide count:** 8
- **Tone:** Collaborative, practitioner-to-practitioner, user-centered, evidence-grounded
- **Tool:** Google Slides or Canva
- **Brand:** FinWise — Primary blue #2563EB, body text #111827, secondary text #6B7280, success green #16A34A, background white #FFFFFF or near-white #F9FAFB
- **Accessibility:** Minimum 4.5:1 contrast on all text; alt text on all prototype screenshots; no color-only information encoding

---

## Story Arc

1. **Open:** A user sees their own money for the first time — and then leaves. That's our design problem.
2. **The Problem:** The current UX asks them to make a decision at exactly the wrong moment — processing mode, not decision mode.
3. **The Plan:** We remove the decision entirely. Pre-populate the goal. One tap to activate.
4. **The Prototype:** Five screens, one flow — built, evaluated, and accessibility-cleared.
5. **Design Decisions:** Nine issues found in evaluation. Nine closed before launch. Here's why each one matters.
6. **Why Now:** 90 days is the minimum time to read a clean signal. Every month we wait is data we can't recover.
7. **What We'll Learn:** Three possible outcomes — each one tells us something actionable.
8. **The Ask:** Confirm instrumentation. Approve the experiment. Schedule the 30-day check-in.

---

## Slide-by-Slide Blueprint

---

### Slide 1: Title / Cover

**Story role:** Frame this as a design readout and experiment brief — collaborative, not a budget pitch.

**Headline:** Goal Activation: From Design to Experiment

**Subheadline:** H2 Prototype Readout — the auto-drafted goal, and what 90 days will teach us

**Visual direction:**
- White background, FinWise blue (#2563EB) left accent bar
- Title in #111827, large (48–60pt), no decorative elements
- Subtitle in #6B7280, 20pt
- Badge chip: "H2 — DESIGN READOUT" in blue pill, top-left under logo
- Footer: "Goal Activation | Design & UX | May 2026" in #6B7280, small
- FinWise logo top-right

**Speaker notes:**
This is a readout, not a pitch for money. We built something, we stress-tested it, and now we want to run the real experiment. Today's goal is alignment — are we confident enough in the design to send this to users?

**Accessibility notes:** Title must contrast ≥ 4.5:1 against white background. Include full slide title in the slide's alt/title field.

---

### Slide 2: The User's Moment — "They Saw Their Money and Left"

**Story role:** Open — put the team inside the user's experience before anything else.

**Headline:** A user sees their own money for the first time. Then they leave.

**Subheadline:** That's not a discovery problem. It's an action problem.

**Content blocks:**

Left — simplified user journey (text + thin arrow lines):
```
Connect account         ✓  "I linked my bank"
View first transactions ✓  "I can see my spending"
View spending summary   ✓  "I see where my money went"
Set first goal          ✗  "I... don't know where to start"
```

Right — two anchor stats:
- **63%** of users who reach the spending summary never set a goal
- **32.7pp** — the largest single drop in the entire onboarding funnel

Below: one sentence in #6B7280 italic:
*"Users at this moment are in processing mode — absorbing their financial picture. The product treats them as if they've already decided what to do about it."*

**Speaker notes:**
The spending summary is not the problem. Users get there — 51.6% reach it. The problem is what happens next. They've just seen data that should prompt action. The product offers them nothing to act on except a blank goal creation screen. 63% leave. That's the gap we're designing for.

**Accessibility notes:** Journey arrows must not rely on color alone — use directional labels. Both stats need alt text if embedded as images.

---

### Slide 3: The Design Problem — Processing Mode vs Decision Mode

**Story role:** Name the barrier precisely. Not "users don't want goals" — the UX asks for a decision at the wrong moment.

**Headline:** The current UX asks for a decision at exactly the wrong moment.

**Subheadline:** Users just absorbed their financial picture. We immediately ask them to choose a category, an amount, and commit — from a blank screen.

**Content blocks:**

Left column — "What the user just did":
- Saw their first spending breakdown
- Identified their top categories
- Processed their actual numbers
- Had their first honest look at their spending habits

Right column — "What we ask them to do next":
- Navigate to goal creation
- Choose a category (from scratch)
- Choose an amount (no reference point)
- Commit to a limit
- ... on a blank-state screen, right now

Center divider: bold text — **"That's not how decisions work."**

Below (full width, blue background panel, white text):
*The gap isn't intent — it's decision cost. Users don't leave because they don't want a goal. They leave because we make them decide before they're ready.*

**Speaker notes:**
This is the core insight the whole design is built on. The 63% who leave aren't disengaged — 51% of all FinWise users got far enough to see their spending data. They're motivated. But the product puts them in front of a blank goal screen immediately after an emotionally loaded experience. Cognitive load at that moment is high. Decision cost is high. The path of least resistance is to leave and come back later — except most of them never do.

**Accessibility notes:** The center panel with white text on blue must meet 4.5:1. Don't use the divider color as the only signal — label both columns clearly.

---

### Slide 4: The Design Hypothesis — The Zero-Decision Path

**Story role:** Explain the design bet — what we're proposing and the reasoning behind it.

**Headline:** If we remove the decision, more users will activate.

**Subheadline:** We already have everything we need to draft the goal for them — it's in the data they just saw.

**Content blocks:**

Top — Hypothesis statement (callout box, light blue background #EFF6FF, blue border):
> **We believe** surfacing a pre-populated savings goal immediately after the spending summary — removing the decision of what to set — **will increase `set_first_goal` completion from 18.9% to 35% within 90 days.**
> **Because** the barrier is decision cost, not intent.

Below — three columns explaining the zero-decision path:

**Category** — Pre-selected (top spending category from their actual data)
**Amount** — Pre-calculated (10% below their 30-day spend in that category)
**Action** — One tap to activate (no separate screen, no confirmation flow)

Bottom — one line: *"We're not making the decision for them. We're making it easy enough to make."*

**Speaker notes:**
The key framing here is optionality — not automation. We're not enrolling users in something they didn't choose. We're showing them a suggestion based on their own data and giving them one tap to accept it, the ability to adjust it, and an easy path to ignore it. The design bet is that most users, when shown a reasonable default that mirrors their own spending, will accept it rather than start from scratch.

**Accessibility notes:** Hypothesis callout box needs sufficient contrast for both text and border. Column headers must be visually distinct without relying on color alone.

---

### Slide 5: The Prototype — Five Screens, One Flow

**Story role:** Show the design. Walk through the flow. Name what each screen tests.

**Headline:** We built it. Here's what we're testing.

**Subheadline:** Five screens. One complete activation path. Clickable and accessibility-cleared.

**Content blocks:**

Five prototype phone frames in a row (or 2+3 grid), each with a caption below:

| Screen | Caption | What it tests |
|---|---|---|
| 1 — Spending Summary + Card | "The trigger moment" | Does the card get noticed? Does the framing feel right? |
| 2 — Adjust Amount | "Ownership without friction" | Will users adjust? Does inline editing feel natural? |
| 3 — Goal Set! | "The commitment moment" | Does success feel real? Does reversibility reduce anxiety? |
| 4 — Goal Progress | "The reward" | Does seeing the goal progress screen reinforce the decision? |

Below (full width, grey panel):
Prototype status: **Built** · **Evaluated** · **Accessibility-cleared (WCAG 2.1 AA)** · **V2 fixes applied**

**Speaker notes:**
This prototype covers the complete activation flow — from the spending summary trigger through to the first view of the goal progress screen. It's mid-fidelity: realistic enough to test the concept, simple enough to build without slowing us down. It answers one question: will users tap Activate when the goal is already drafted for them?

**Accessibility notes:** All five phone frame images need descriptive alt text naming the screen and its content. Don't rely on the caption alone.

---

### Slide 6: Design Decisions — "Nine Found. Nine Closed."

**Story role:** Show the team the design reasoning — every V2 change was made for a specific mechanism reason, not aesthetics.

**Headline:** Nine issues found in evaluation. Nine closed before launch.

**Subheadline:** Each fix addresses a specific mechanism risk — not a polish preference.

**Content blocks:**

Table layout (4 columns: Issue → Risk it addresses → Change made → Why it matters to the experiment):

| Issue | Mechanism risk | V2 change |
|---|---|---|
| "Adjust amount" was a text link, visually equal to "Not now" | Users might not feel ownership of the goal — a text link signals "optional, probably skip" | Promoted to full secondary button |
| No scroll hint between spending list and goal card | Card invisible on short viewports → primary metric can't move if card isn't seen | Added scroll chevron |
| "Limit" framing throughout | Punitive framing contradicts the ownership mechanism | Replaced with "target" throughout |
| No reversibility signal after activation | Commitment anxiety inflates `goal_draft_dismissed` rate | Added "You can adjust or delete this goal any time" |
| `span role=button` — no keyboard handlers | Activation path inaccessible to keyboard-only users | Added `keydown` Enter/Space handlers; focus management for screen readers |
| Dual input (stepper + unconstrained text field) with no floor feedback | Amount adjustment is mechanism-critical; ambiguous inputs block it | Single stepper, $10 floor with feedback |
| No undo on success screen | Post-activation commitment cost left unaddressed | 10-second timed undo on Screen 3 |
| "You haven't spent anything yet" on Screen 4 | Backward-looking copy undermines goal-holder identity | Changed to "Your spending will appear here as you use your card" |
| Redundant % labels alongside progress bar | Cognitive noise at the reward moment | Removed |

Below (callout, blue border): *"These weren't design preferences. Each fix maps to a specific guardrail: dismissed rate, abandoned rate, activation rate, or accessibility compliance."*

**Speaker notes:**
The product evaluation process ran H2 against its own success criteria — the primary metric and three guardrails — and identified nine issues. Every one is closed in V2. The table above maps each change to the specific mechanism risk it addresses. This is important context for the experiment: we didn't change things to make it look better, we changed them to make the test cleaner.

**Accessibility notes:** Table must have proper header row. Ensure the table is readable at 320px width — consider a condensed two-column view for small-screen contexts.

---

### Slide 7: What 90 Days Will Tell Us

**Story role:** Reframe the experiment as a learning opportunity — three possible outcomes, each one actionable.

**Headline:** Three outcomes. Each one tells us something we can act on.

**Subheadline:** 90 days. One clean test. No ambiguous results.

**Content blocks:**

Primary metric box (top, full width, light blue background):
- **Primary:** `set_first_goal` completion rate — Baseline: **18.9%** → Target: **35%**
- **Early signal:** Readable within 30 days (~220 accounts per arm)

Three outcome columns:

**✓ Lift confirmed (>8pp)**
Decision cost is the barrier. The auto-draft mechanism works.
→ Scale the mechanism. Refine the algorithm. Build the re-engagement layer.

**~ Partial lift (4–8pp)**
The concept works but draft content may be off.
→ Check `goal_draft_adjusted` rates. Was the suggested amount wrong? Refine the 10%-below calculation.

**✗ No lift**
The barrier isn't the decision — it may be trust, motivation, or timing.
→ Revisit Option A (inline prompt) or Option C (spending summary redesign). Decision-cost assumption is likely wrong.

Guardrails row (bottom, grey panel):
| Guardrail | Threshold | What it tells us |
|---|---|---|
| `goal_draft_dismissed` rate | ≤ 70% | If >70%: card framing or timing is wrong |
| `savings_goal: abandoned` rate | ≤ 60% | If >60%: suggested amount algorithm needs work |
| Session exit time | No increase | If slower: card is adding friction to the summary |

**Speaker notes:**
This is not a pass/fail test. Every outcome is informative. If we see lift, we know the decision-cost hypothesis was right and we scale. If we see partial lift, the instrument data tells us exactly what to fix. If we see no lift, we have strong evidence to revisit the mechanism. Ninety days is the minimum window for the secondary metrics (upgrade rate, churn rate) to move — but we get a first read on the primary metric within 30 days.

**Accessibility notes:** Three outcome columns must have visual distinction beyond color — use column headers, borders, or icons. Don't use only green/yellow/red to signal the three outcomes.

---

### Slide 8: The Ask — Run the Experiment

**Story role:** Make the next step concrete, owned, and specific.

**Headline:** Run the experiment. 90 days. One clean test.

**Subheadline:** The prototype is ready. The instrumentation is specified. We need four things from this team.

**Content blocks:**

Four action items (large numbered list, each with an owner):

**1. Confirm analytics instrumentation** — 6 events specified in the PRD. Engineering + Data: review the event table and confirm implementation plan.
*(Events: `goal_draft_shown`, `goal_draft_activated`, `goal_draft_adjusted`, `goal_draft_dismissed`, `goal_created`, `goal_still_active_30d`)*

**2. Approve feature flag configuration** — 50/50 holdout, stable assignment at account creation. Engineering: confirm feature flag setup and cohort exclusions (< 5 transactions or < 7 days of history).

**3. Schedule the 30-day check-in** — Early signal read at 30 days. Data + Product + Design: calendar now, before build starts.

**4. Design × Engineering alignment session** — Walk through the V2 prototype together. Confirm all nine closed issues are reflected in the build spec. Book for next week.

Status summary (bottom, two columns):
| Already done | Still needed |
|---|---|
| Prototype built (clickable, 5 screens) | Analytics implementation confirmed |
| Accessibility-cleared (WCAG 2.1 AA) | Feature flag configuration approved |
| V2 evaluation fixes applied (9/9 closed) | 30-day check-in scheduled |
| PRD written with full functional requirements | Design × Eng alignment session booked |

**Speaker notes:**
Everything on the left side of that table is done. The prototype exists, it's been through evaluation, the accessibility blockers are fixed, and the PRD is written. What we need today is confirmation on the right side — four concrete next steps that unblock the build. The 30-day check-in is especially important to schedule now, before build starts, so we have a forcing function to look at early data rather than waiting the full 90 days before reviewing anything.

**Accessibility notes:** Numbered list must be accessible to screen readers — use an ordered list element if built in HTML. Status table needs header row. All text must pass 4.5:1 contrast.

---

## Speaker Script

---

### Slide 1: Goal Activation — From Design to Experiment

**Purpose:** Frame the session as a collaborative readout, not a pitch.

**Speaker notes:**
Today's not a budget conversation. We built something, we stress-tested it against its own success criteria, and we want to walk you through the design reasoning before we run the real test. By the end of this, we want to agree on four specific next steps. That's it.

**Key line:** *"We did the design work. Now let's find out if we're right."*

---

### Slide 2: The User's Moment

**Purpose:** Ground the team in the user experience before showing any data.

**Speaker notes:**
Before I show you numbers, I want to put you in the user's shoes. They've connected their bank account. They've seen their transactions. They've landed on the spending summary — their first real look at where their money went. They're processing. And then... nothing happens. They leave. 63% of users who reach this moment never set a goal. That's the gap we're designing for.

**Key line:** *"It's not a discovery problem. They found the data. It's an action problem."*

---

### Slide 3: The Design Problem

**Purpose:** Name the barrier. Make it feel specific, not generic.

**Speaker notes:**
The question we asked is: why do 63% leave? And the answer isn't "they don't care about goals." 51% of all FinWise users got far enough to see their spending data — that's a motivated user. The problem is what we ask them to do next. We put them in front of a blank goal creation screen — choose a category, choose an amount, commit — immediately after an emotionally loaded experience. High cognitive load, high decision cost, easy exit. Of course most of them leave.

**Key line:** *"The gap isn't intent. It's decision cost."*

---

### Slide 4: The Design Hypothesis

**Purpose:** Explain the bet simply. Make it easy to agree or disagree with.

**Speaker notes:**
So our hypothesis is: if we remove the decision, more users will activate. We already have everything we need to pre-populate the goal — their top spending category, their actual 30-day spend in that category, and a suggested limit that's 10% below what they already spent. One card. One tap. No decision required. The bet is that most users, when shown a reasonable default based on their own data, will say "yeah, that looks right" and tap Activate — rather than starting from scratch on a blank screen.

**Key line:** *"We're not making the decision for them. We're making it easy enough to make."*

---

### Slide 5: The Prototype

**Purpose:** Show the team what was built and orient them to the flow.

**Speaker notes:**
The prototype covers the complete activation path — from the spending summary with the goal card, through the adjust-amount flow, the success state, and the first view of the goal progress screen. It's mid-fidelity: realistic enough to test the concept, simple enough to build quickly. It's clickable, it's accessibility-cleared, and V2 fixes have been applied. The question it answers is: will users tap Activate when the goal is already drafted for them?

**Key line:** *"Five screens. One flow. Built to answer one question."*

---

### Slide 6: Design Decisions

**Purpose:** Show the design reasoning. Build confidence in the V2 state.

**Speaker notes:**
The prototype went through a structured product evaluation — run against its own success criteria, not general design principles. We found nine issues. Every one is closed in V2. I want to walk through the most important ones, because they're not about polish — each fix addresses a specific mechanism risk. The "Adjust amount" promotion from text link to button isn't a preference — it's about whether users feel ownership over the goal. The reversibility signal isn't copy — it's about reducing the commitment cost that inflates dismissal rates.

**Key line:** *"Every change maps to a guardrail. This isn't polish — it's mechanism design."*

---

### Slide 7: What 90 Days Will Tell Us

**Purpose:** Reframe the experiment as learning, not a verdict.

**Speaker notes:**
I want to change how we think about the 90-day experiment. This isn't pass/fail. Every outcome is useful. If we see the lift we expect, we know the decision-cost hypothesis is right and we scale. If we see partial lift, the instrument data — specifically the `goal_draft_adjusted` rate — tells us exactly what to fix. If we see no lift, we have strong evidence that the barrier isn't the decision, and we revisit the mechanism. We get a first read on the primary metric within 30 days — which is why scheduling the 30-day check-in today matters.

**Key line:** *"90 days. One clean test. No ambiguous results — every outcome tells us something."*

---

### Slide 8: The Ask

**Purpose:** Make the next step specific. Leave with four owned commitments.

**Speaker notes:**
Everything on the left side of that table is done. The prototype is ready. The PRD is written. The accessibility work is complete. What we need from this session is four things: confirm the analytics instrumentation, approve the feature flag setup, book the 30-day check-in, and schedule the design-engineering alignment session for next week. Those four things unblock the build. Can we agree on them today?

**Key line:** *"The design work is done. We need four yeses to get to launch."*

---

## Build Checklist

### Phase A — Context
- [x] Confirmed audience: Design / UX team
- [x] Confirmed decision needed: Run the 90-day holdout experiment
- [x] Confirmed slide count: 8
- [x] Confirmed brand direction: FinWise blue + white, collaborative tone
- [x] Confirmed strongest proof point: V2 evaluation — 9 issues found, 9 closed; design is ready
- [x] Confirmed biggest objection: "Will the auto-draft feel presumptuous — like the app is deciding for them?"

### Phase B — Story & Spec
- [x] Story arc built (Teacher + Strategist)
- [x] Slide-by-slide spec written
- [x] Speaker notes added
- [x] Visual direction specified per slide
- [x] Accessibility notes added per slide
- [x] Reviewed for clarity
- [x] Reviewed for inclusion (no punitive language about users; barrier named as system, not user failure)

### Phase C — HTML Deck
- [ ] Grep prototype for screen IDs and navigation functions
- [ ] Write build-deck-design.js
- [ ] Run and capture screenshots
- [ ] Build HTML deck
- [ ] Verify all slides
- [ ] Serve locally

---

## Git Commit Suggestion

```bash
git add finwise/finwise-pitch-h2-goal-activation-design.md
git add finwise/finwise-pitch-h2-goal-activation-design.html
git add finwise/build-deck-design.js
git commit -m "Add ready-to-pitch deck for FinWise H2 Goal Activation — Design/UX team version"
```
