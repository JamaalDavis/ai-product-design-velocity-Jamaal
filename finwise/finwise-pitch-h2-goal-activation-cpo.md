# Ready-to-Pitch — FinWise H2: Goal Activation (Product Leadership / CPO)
**Audience:** CPO / Product Leadership
**Decision needed:** Understand the launch, align on the experiment timeline, and actively support the build through Q3
**Format:** HTML pitch deck (1280×720, self-contained)
**Narrative style:** Strategist
**Date:** 2026-06-07

---

## Deck Metadata

- **Title:** FinWise H2 Goal Activation: Launch Brief
- **Subtitle:** What we're launching, what 90 days will prove, and what we need from product leadership
- **Audience:** CPO and product leadership
- **Goal:** Brief product leadership before build starts so they can champion the experiment, protect engineering time, and be prepared to communicate the launch
- **Decision needed:** Not a gate — they need to be informed, aligned on the timeline, and ready to support
- **Slide count:** 6
- **Tone:** Direct, strategic, evidence-led, executive-level — no deep technical detail
- **Tool:** HTML deck (Phase C build)
- **Brand:** FinWise — Primary blue #2563EB, body text #111827, secondary text #6B7280, success green #16A34A, background white #FFFFFF
- **Accessibility:** Minimum 4.5:1 contrast on all text; alt text on all phone mockups; no color-only information encoding

---

## Story Arc

1. **Open:** The upgrade path runs entirely through goal-setting. 81% of users never reach it. That's Q3's job.
2. **What We're Launching:** One card, one tap, zero decisions — surfaced exactly when users are looking at their own data.
3. **The 90-Day Bet:** A clean 50/50 holdout that will tell us whether removing the decision moves the metric. Conservative upside: $760K ARR. Signal in 90 days.
4. **What's Ready:** Prototype built, PRD done, accessibility cleared, experiment spec written. We're past the concept stage.
5. **The Timeline:** What happens when, and where product leadership should expect to hear from us.
6. **What We Need:** Four specific ways product leadership can make this succeed.

---

## Slide-by-Slide Blueprint

---

### Slide 1: Title / Cover

**Story role:** Frame this as an executive launch brief — informed, not asking for approval.

**Headline:** FinWise H2 Goal Activation: Launch Brief

**Subheadline:** What we're launching, what 90 days will prove, and what we need from product leadership.

**Visual direction:**
- White background, FinWise blue (#2563EB) left accent bar (7px)
- Title in #111827, 52pt, bold
- Subtitle in #6B7280, 20pt
- Badge chip: "H2 — LAUNCH BRIEF" in blue pill, top-left under logo
- Three info chips below subtitle: "Audience: Product Leadership" / "Status: Build starting" / "Experiment: Q3 2026"
- FinWise logo mark (blue square with white F) top-left

**Speaker notes:**
This is a briefing, not a pitch for approval. The board has approved the investment. Engineering is scoping. This session exists so that product leadership has the full picture — the business signal, the mechanism, the experiment plan, and the specific places where we need your support. By the end, you should be able to answer any question your team or stakeholders throw at you about H2.

**Accessibility notes:** Title contrast ≥ 4.5:1 against white. Include full title in slide alt/title field.

---

### Slide 2: The Business Signal — Why This Is Q3's Priority

**Story role:** Open — establish why this is the highest-leverage experiment on the roadmap, quickly.

**Headline:** The upgrade path runs entirely through goal-setting. 81% of users never reach it.

**Subheadline:** Three numbers tell the whole story.

**Content blocks:**

Left — three anchor stats (large, blue):
- **308,000** accounts that have never set a savings goal (81% of 380K)
- **2.6×** — goal-setters churn less; 14.4% vs 37.5% at 90 days
- **98.7%** of every upgrade event came from accounts that previously hit the savings goal paywall

Right — metric chain (text flow with arrows):
```
81% never set a goal
  → never hit the savings_goal paywall
    → never see the upgrade prompt
      → never convert to Pro
        → $380K ARR missed per 1pp of conversion improvement
```

**Key line on slide:** "Our revenue model depends on goal activation. Most users never get there — and we know exactly where the gap is."

**Speaker notes:**
Three numbers. 308,000 accounts that have never set a goal. 2.6x churn difference between users who set a goal and those who don't. And 98.7%: nearly every upgrade we have ever recorded came from an account that previously hit the savings goal paywall. The upgrade path runs entirely through goal-setting. If users never set a goal, they never convert. That's the gap H2 is designed to fix.

**Accessibility notes:** Stats must use text labels — don't rely on color alone to distinguish them. Metric chain arrows must be supplemented with directional text.

---

### Slide 3: What We're Launching — The Auto-Drafted Goal

**Story role:** The Plan — explain the mechanism clearly. One minute to understand, not a feature spec.

**Headline:** One card. One tap. Zero decisions.

**Subheadline:** Immediately after users view their spending summary, we surface a goal already drafted from their own data.

**Content blocks:**

Left — the mechanism in three lines:
- **Category:** Pre-selected from the user's #1 spending category (e.g., Dining)
- **Amount:** Pre-calculated at 10% below their actual 30-day spend, rounded to the nearest dollar
- **Three options on the card:** "Activate goal" (primary) · "Adjust amount" (secondary) · "Not now" (escape)

Below left — the design principle:
> "The auto-draft doesn't make the decision for the user. It removes the blank-state decision. Control is preserved — the user adjusts, confirms, and owns the goal. They just don't have to invent it."

Right — animated phone cycling through 4 screens (live flow demo):
- Screen 1: Spending summary + auto-draft card at the bottom
- Screen 2: Inline amount adjustment
- Screen 3: Goal set! success state with 10-second undo
- Screen 4: Goal progress screen — the product is now personal

**Visual direction:**
- Left column is text-only (no box)
- Right: animated phone frame cycling every 2.8s through 4 prototype screens
- Small label above phone: "Live flow — 4 screens"

**Speaker notes:**
The core insight is that goal creation was asking users to make three simultaneous decisions — category, amount, commitment — immediately after an emotionally loaded experience of seeing their financial picture for the first time. Users at that moment are in processing mode, not decision mode. The auto-draft removes the creative work and replaces it with a confirmation decision: "Does this look right?" That's a significantly lower bar. The user still adjusts and owns the goal. They just don't have to start from scratch.

**Accessibility notes:** Animated phone needs descriptive alt text cycling description. The four options listed in plain text must have sufficient contrast.

---

### Slide 4: The 90-Day Experiment — What We'll Learn

**Story role:** The Unpack — make the experiment concrete and the upside real.

**Headline:** A 50/50 holdout. A clean signal within the quarter. $760K–$1.3M ARR if the hypothesis is confirmed.

**Content blocks:**

Left — experiment design:
- **Type:** 50/50 holdout, stable assignment at account creation
- **Cohort:** New accounts with ≥5 transactions and ≥7 days of linked history
- **Primary metric:** `set_first_goal` completion rate (Baseline: 18.9% → Target: 35%)
- **Early read:** Readable at 30 days (~220 accounts per arm, 80% power)
- **Full outcome window:** 90 days (upgrade rate + churn rate)

Right — scenario table:

| Scenario | What it requires | ARR impact |
|---|---|---|
| Conservative | 2pp Pro conversion lift | +$760K ARR |
| Moderate | 20% of non-goal-setters activated | +$1.3M ARR |
| Guardrail | Churn drops from 37.5% → 28% | Significant retained Pro value |

Below — three-line summary:
- "If we confirm the hypothesis: scale the mechanism, refine the algorithm, build the re-engagement layer."
- "If we see partial lift: instrument data tells us exactly what to refine."
- "If we see no lift: we learn the barrier isn't decision cost and we have data to pivot."

**Speaker notes:**
This experiment is designed to be unambiguous. The primary signal — set_first_goal completion rate — will be readable within 30 days. We'll have a first look at the mechanism before the end of the month after launch. The full outcome read at 90 days will give us the upgrade rate and churn numbers. Conservative scenario: a 2 percentage point lift in Pro conversion, which is $760K ARR. Moderate scenario: 20% of non-goal-setters activated, approaching $1.3M ARR. We'll know which scenario we're in before Q4.

**Accessibility notes:** Scenario table column headers clearly labeled. Impact column uses bold, not color alone, to signal positive outcome.

---

### Slide 5: Where We Are — What's Ready, What's Coming

**Story role:** Status brief — show product leadership that work is done, not conceptual.

**Headline:** Past the concept stage. Build starting now.

**Subheadline:** Here's everything that's complete and what the next 90 days look like.

**Content blocks:**

Left — status two-column table:

| Already done | Still in progress |
|---|---|
| Prototype built (5 screens, clickable) | Engineering scoping (Week 1–2) |
| Accessibility-cleared (WCAG 2.1 AA) | Feature flag configuration |
| Product evaluation: 9/9 issues closed | Analytics instrumentation confirmed |
| PRD written with full functional requirements | Experiment live (Week 6–8) |
| Experiment spec + analytics events defined | 30-day check-in |

Right — horizontal timeline:
```
NOW → Engineering scoping (Wk 1–2) → Experiment live (Wk 6–8) → 30-day read → 90-day read → Q4 board update
```
Each milestone labeled with date context (relative to Q3 2026 start).

Below — one sentence: "The design work is done. The spec is written. The experiment infrastructure is defined. The only remaining input is engineering execution and 90 days of user behavior."

**Speaker notes:**
Everything in the left column is complete. The prototype has been through a full product evaluation — nine issues found, nine closed. It's been accessibility-cleared. The PRD is written with full functional requirements, analytics instrumentation, and experiment spec. We are past the concept stage. What's left is building and running the test. The critical path items on the right are all resolvable within the next six weeks.

**Accessibility notes:** Table headers clearly labeled. Timeline milestones labeled in text. No color-only encoding for done vs. in-progress status.

---

### Slide 6: What We Need from Product Leadership

**Story role:** The Ask — four specific, owned, time-bounded support requests.

**Headline:** Four things that make this experiment succeed.

**Subheadline:** Not budget, not approval — these are the specific ways product leadership can protect the signal.

**Content blocks:**

Four numbered items (large, each with an owner and description):

**1. Protect the engineering time**
Owner: CPO + Eng leadership
"6–8 weeks of engineering time on a single mechanism. The biggest risk to this experiment is scope creep or a mid-sprint reprioritization. Guard the focus."

**2. Join the 30-day check-in**
Owner: CPO + Data + Product
"The early signal at 30 days will be the first real-world read of the mechanism. This is when we'll know if the hypothesis is holding. Leadership presence turns it from a data review into a decision point."

**3. Be prepared to communicate the launch**
Owner: CPO
"When this ships, internal teams — CS, support, sales — will have questions. A one-paragraph brief is all they need, but it has to come from product leadership. We'll draft it; you send it."

**4. Set Q3 expectations with stakeholders**
Owner: CPO
"This is the primary Q3 product investment. Other roadmap items have been deprioritized in favor of getting a clean signal on H2. Stakeholders who expect those items should hear that context from product leadership, not from an engineering email."

**Closing line (bold, bottom):** "The data is clear. The prototype is built. The experiment is ready to run. We need product leadership in the room when it matters."

**Visual direction:**
- Four blue numbered circles (28px) with bold titles and body text below
- Closing line in #111827, bold, 16pt, bottom of slide
- Clean, minimal — the last slide should feel like a decision has already been made

**Speaker notes:**
Close with specificity. We're not asking for money or time — we're asking for four things: engineering protection, leadership at the 30-day readout, internal comms support, and stakeholder expectation-setting. Each of these has a named owner. If we get these four things, the experiment runs clean. If we don't get engineering protection, we get a noisy signal. If leadership isn't at the 30-day check-in, the early read doesn't drive a decision. These aren't nice-to-haves — they're the difference between a clean experiment and a muddled one.

**Accessibility notes:** Numbered items must be accessible to screen readers — implement as an ordered list. Closing line contrast ≥ 4.5:1.

---

## Speaker Script

### Slide 1: Title

**Purpose:** Frame the session. This is a briefing, not a pitch for approval.

**Speaker notes:**
"Quick framing: the board has approved H2. We're not here for that conversation. We're here because product leadership needs the full picture before we start building — the signal that drove this decision, the mechanism we're testing, the experiment design, and the specific places where we need your support over the next 90 days. Let's move through this quickly — six slides."

**Key line:** "The decision is made. This session is about execution."

---

### Slide 2: The Business Signal

**Purpose:** Land the three numbers fast.

**Speaker notes:**
"Three numbers. 308,000 accounts that have never set a savings goal — 81% of our base. A 2.6x churn difference between users who set a goal and those who don't. And 98.7% — nearly every upgrade we've ever recorded came from an account that previously hit the savings goal paywall. The upgrade path runs through goal-setting. Most of our users never reach it. That's what H2 is fixing."

**Key line:** "98.7% of upgrades run through goal-setting. 81% of users never get there."

---

### Slide 3: What We're Launching

**Purpose:** Make the mechanism concrete and fast to understand.

**Speaker notes:**
"The fix is simple. After users see their spending summary for the first time — which 51% of our base reaches — we surface a goal already drafted from their own data. Their top spending category. Their actual 30-day spend. A suggested target at 10% below. One tap to activate. The user still owns it — they can adjust the amount or dismiss. But we've removed the blank-state decision: 'what should I track and how much?' That was the friction. This removes it."

**Key line:** "We're not making the decision for them. We're making it easy enough to make."

---

### Slide 4: The 90-Day Experiment

**Purpose:** Make the bet concrete — what it will prove and what it's worth.

**Speaker notes:**
"This runs as a 50/50 holdout on new accounts. The primary metric is set_first_goal completion — baseline 18.9%, target 35%. We'll have a first read at 30 days. The full outcome read at 90 days gives us the upgrade rate and churn impact. Conservative scenario: $760K ARR from a 2pp Pro conversion lift. Moderate scenario: $1.3M ARR. Either way, we'll have a clear answer within the quarter. If it works, we scale. If it doesn't, we know the barrier isn't decision cost and we have data to pivot."

**Key line:** "$760K conservative, $1.3M moderate. Signal in 90 days."

---

### Slide 5: Where We Are

**Purpose:** Show that we're past the concept stage — give leadership confidence in the work already done.

**Speaker notes:**
"Everything on the done side is complete. The prototype is built and clickable. It's been through a structured product evaluation — nine issues found, nine closed. It's WCAG 2.1 AA accessible. The PRD is written with full functional requirements, analytics instrumentation spec, and experiment design. We are not in concept stage. What's left is engineering execution and 90 days of user behavior data."

**Key line:** "The design work is done. Build starts now."

---

### Slide 6: What We Need

**Purpose:** Land the four asks with specificity and ownership.

**Speaker notes:**
"Four things. Protect the engineering time — 6-8 weeks without mid-sprint reprioritization. Join the 30-day check-in — the early signal is when the hypothesis gets its first real test and leadership presence turns it into a decision point. Be ready to communicate the launch to internal teams — CS, support, and sales will have questions; we'll draft the brief but it should come from you. And set Q3 expectations with stakeholders who were expecting other roadmap items — that context should come from product leadership.

None of these are big asks. But each of them protects the signal quality of this experiment. We need product leadership in the room when it matters."

**Key line:** "The data is clear. The prototype is built. The experiment is ready to run. We need you in the room when it matters."

---

## Canva AI Prompt

*Use if building in Canva or Google Slides instead of the HTML deck.*

```
Create a 6-slide executive briefing deck for FinWise, a US personal finance app.

BRAND
Clean fintech style. Primary color: #2563EB (blue). Body text: #111827.
Secondary text: #6B7280. Success green: #16A34A. Background: white.
Font: Inter or system-ui. No decorative illustrations. Min 4.5:1 contrast.

SLIDE 1 — Cover
Badge chip (pill): "H2 — LAUNCH BRIEF" in blue
Headline: "FinWise H2 Goal Activation: Launch Brief"
Subtitle: "What we're launching, what 90 days will prove, and what we need from product leadership."
Three info chips: "Audience: Product Leadership" / "Status: Build starting" / "Experiment: Q3 2026"

SLIDE 2 — The Business Signal
Badge: "Open"
Headline: "The upgrade path runs entirely through goal-setting. 81% of users never reach it."
Left — 3 large blue stats: 308,000 / 2.6× / 98.7%
Right — metric chain text arrows:
81% never set a goal → never hit paywall → never see upgrade prompt → never convert → $380K ARR per 1pp missed
Key line: "Our revenue model depends on goal activation. Most users never get there."

SLIDE 3 — What We're Launching
Badge: "The Plan"
Headline: "One card. One tap. Zero decisions."
Left — 3 bullet mechanism: Category (pre-selected) / Amount (pre-calculated) / Action (Activate / Adjust / Not now)
Quote block: "The auto-draft doesn't make the decision for the user. It removes the blank-state decision."
Right — phone mockup showing: spending summary with auto-draft card at bottom (light blue #EFF6FF background, "SUGGESTED GOAL" label, Activate goal button in blue)

SLIDE 4 — The 90-Day Experiment
Badge: "The Experiment"
Headline: "A 50/50 holdout. A clean signal within the quarter. $760K–$1.3M ARR upside."
Left — experiment design bullet list: 50/50 holdout / Stable assignment / Primary: set_first_goal 18.9%→35% / Early read 30 days / Full read 90 days
Right — 3-row scenario table:
Conservative: 2pp Pro conversion lift → +$760K ARR
Moderate: 20% of non-goal-setters activated → +$1.3M ARR
Guardrail: Churn 37.5%→28% → Retained Pro value
Below: "Three possible outcomes. Each one tells us something actionable."

SLIDE 5 — Where We Are
Badge: "Status"
Headline: "Past the concept stage. Build starting now."
Two-column table:
Already done | Still in progress
Prototype built (5 screens) | Engineering scoping (Wk 1–2)
Accessibility-cleared WCAG 2.1 AA | Feature flag configuration
9/9 evaluation issues closed | Analytics instrumentation
PRD + functional requirements | Experiment live (Wk 6–8)
Experiment spec + analytics events | 30-day check-in

Timeline (horizontal line, 6 milestones):
NOW → Eng scoping Wk 1-2 → Experiment live Wk 6-8 → 30-day read → 90-day read → Q4 board update

SLIDE 6 — What We Need
Badge: "The Ask"
Headline: "Four things that make this experiment succeed."
4 numbered items (blue circle numbers):
1. Protect engineering time — 6–8 weeks, no mid-sprint reprioritization (Owner: CPO + Eng leadership)
2. Join the 30-day check-in — early signal becomes a decision point (Owner: CPO + Data + Product)
3. Be ready to communicate the launch — CS, support, and sales will have questions (Owner: CPO)
4. Set Q3 expectations with stakeholders (Owner: CPO)
Closing line (bold): "The data is clear. The prototype is built. The experiment is ready to run. We need product leadership in the room when it matters."
```

---

## Build Checklist

### Phase A — Context
- [x] Audience confirmed: CPO / Product Leadership
- [x] Decision confirmed: Not a gate — understand, champion, and support the launch
- [x] Slide count confirmed: 6
- [x] Brand direction confirmed: FinWise blue #2563EB, clean fintech, white backgrounds
- [x] Strongest proof point: 98.7% of upgrades run through goal-setting; $760K–$1.3M ARR upside
- [x] Biggest objection addressed: "Is this really the highest-priority Q3 item?" — answered in Slide 2 (signal) and Slide 4 (upside + timeline)
- [x] Narrative style: Strategist

### Phase B — Story & Spec
- [x] Story arc built
- [x] Slide-by-slide spec written
- [x] Speaker notes added
- [x] Visual direction specified
- [x] Accessibility notes added
- [x] Saved: finwise-pitch-h2-goal-activation-cpo.md

### Phase C — HTML Deck
- [ ] Grep prototype for screen IDs and navigation functions
- [ ] Write build-deck-cpo.js
- [ ] Run node build-deck-cpo.js
- [ ] Screenshot all slides for verification
- [ ] Confirm badge chips are pill-shaped (not full-width)
- [ ] Confirm phone mockups show real prototype content
- [ ] Confirm closing line visible (not hidden behind nav bar)
- [ ] Delete preview-slide-*.png files
- [ ] Start local server on port 4321
- [ ] Confirm deck opens at http://localhost:4321
- [ ] Save finwise-pitch-h2-goal-activation-cpo.html

### Final
- [ ] Commit to git
