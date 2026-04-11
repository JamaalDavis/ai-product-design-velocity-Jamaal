# Prototype Brief: Integration Milestone Banner — Pro RevOps Upgrade Nudge

**Hypothesis source:** flowmind/flowmind-eim-report.md — Hypothesis 2
**Date:** 2026-04-09
**Fidelity:** Lo-fi (static Figma frames)
**Owner:** [designer / PM running the session]

---

## TL;DR

Show RevOps users a persistent dashboard banner that compares their integration count to peer teams and surfaces the specific tools those peers use most. The bet is that the peer benchmark creates enough social pressure to prompt at least one additional integration — without discounts, prompts from a CSM, or an upgrade gate. We're testing whether the framing alone is sufficient to drive action.

---

## What We're Testing

We believe that showing RevOps users how their integration count compares to peer teams — and showing them specifically which tools those peers connect next — will create enough motivation for them to add at least one more integration within the same session or week, without any other incentive.

---

## What the Prototype Must Show

1. The main Flowmind dashboard as a RevOps Pro user with 2 integrations connected, with the milestone banner visible in the primary content area
2. The banner content: current count, peer benchmark, and a clear CTA
3. The filtered integration catalogue view after clicking the CTA — showing 5 labelled integrations with "popular with RevOps teams" framing
4. A post-connection state: the dashboard after a third integration is connected, with the banner still present (count updated to 3)

---

## What the Prototype Does NOT Need to Do

- Show real account data — use fixed placeholder values ("You're at 2", "5 integrations popular with RevOps teams")
- Demonstrate the actual integration connection flow — a single "connected" confirmation screen is sufficient after clicking an integration
- Show the enterprise upgrade flow — the prototype tests whether users add integrations, not whether they upgrade
- Handle any error states or edge cases
- Be pixel-perfect or match the current Flowmind design system exactly

---

## Fidelity Recommendation

**Lo-fi (static Figma frames)**

The assumption being tested is whether the peer benchmark framing and the integration suggestions are compelling enough to drive action — not whether the UI is polished. The customer just needs to see: the banner, the copy, and the catalogue suggestions. Static frames are sufficient to get a meaningful reaction to the core message. A clickable prototype adds build time without adding meaningful signal at this stage. If the lo-fi sessions reveal that the framing works but the catalogue suggestions feel wrong, that informs what to build — and saves rebuilding a mid-fi prototype around the wrong integrations.

---

## Build Prompt

Paste the prompt below into Claude Code, Lovable, Figma Make, or any prototyping tool to generate the prototype without further explanation.

```
Build a single-page HTML/CSS prototype of a SaaS workflow tool dashboard for a RevOps team. The prototype has 4 screens connected by clicks. Use a clean, minimal SaaS UI style (white background, grey sidebar, blue primary buttons, Inter or system font).

---

SCREEN 1: Dashboard — 2 integrations connected

Layout:
- Left sidebar with nav items: Dashboard, Workflows, Integrations, Reports, Settings
- Top bar with product name "Flowmind" and user avatar
- Main content area with:
  - A prominent banner at the top of the content area (full width, light blue background, rounded corners) containing:
    - Headline: "RevOps teams like yours typically connect 4–6 tools — you're at 2."
    - Subtext: "See what they connect next to get more out of their workflows."
    - One button: "See popular integrations" (blue, primary)
    - NO close or dismiss button
  - Below the banner: a simple workflow list showing 3 placeholder workflow rows (name, last run, status)

Clicking "See popular integrations" → goes to Screen 2

---

SCREEN 2: Integration catalogue — filtered view

Layout: same sidebar and top bar as Screen 1
Main content area:
- Breadcrumb: "Integrations / Popular with RevOps teams"
- Section heading: "Popular with RevOps teams"
- Grid of 5 integration cards, each with:
  - A placeholder logo square (grey box)
  - Integration name (use: Salesforce, HubSpot, Slack, Google Sheets, Notion)
  - One-line description (e.g. "Sync CRM data to your workflows")
  - "Connect" button (outline style)
- Below the grid: a text link "View all integrations →"

Clicking "Connect" on any card → goes to Screen 3
Clicking "View all integrations" → goes to a Screen 4 (full catalogue, not detailed)

---

SCREEN 3: Connection confirmation

Layout: same sidebar and top bar
Main content area:
- Centred confirmation state:
  - Green checkmark icon
  - Heading: "Salesforce connected"
  - Subtext: "You now have 3 integrations connected."
  - Button: "Back to dashboard" (blue, primary)

Clicking "Back to dashboard" → goes to Screen 1 (but update the banner to say "you're at 3" instead of "you're at 2")

---

SCREEN 4: Full integration catalogue (simplified)

Layout: same sidebar and top bar
Main content area:
- Heading: "All integrations"
- A grid of 12 integration cards in the same style as Screen 2, with placeholder names and grey logo boxes
- The first 5 cards (Salesforce, HubSpot, Slack, Google Sheets, Notion) have a small "Popular with RevOps" badge

No interactions needed on this screen beyond displaying it.

---

DO NOT build:
- Any login or authentication screens
- Real API connections or dynamic data
- The full Flowmind product beyond these 4 screens
- Mobile-responsive layout (desktop only)
- Error states or loading states

The prototype should be a single HTML file with embedded CSS and minimal vanilla JS for the screen transitions.
```

---

## Obvious Objections

The most likely critiques when this hypothesis is presented as a roadmap candidate. Each objection is paired with the honest answer and what evidence would close it.

---

**1. "Where does the '4–6 tools' benchmark come from?"**

This is the mechanism's entire premise. If the number is made up, the framing is misleading and the test is invalid. The CPO will ask: is this from our own cohort data, third-party research, or an assumption? If it's an assumption, the test still has value — but the team should say so, and avoid shipping the feature with fabricated social proof.

*What closes it:* Pull real data from existing Pro accounts. Even a rough "median connected integrations for RevOps-tagged accounts is X" is sufficient. If the data doesn't exist yet, the test should be framed as testing the mechanism, not validating the number.

---

**2. "You can't dismiss the banner — that's going to annoy users."**

A persistent, non-dismissable banner is a strong design choice. The CPO's instinct will be to add a close button. The counter-argument is that dismissal is the death of the nudge — users close it once and never see it again — but the CPO will want evidence that the persistence doesn't create negative sentiment or increase churn signal.

*What closes it:* The prototype test should explicitly probe this. Ask participants: "If this appeared every time you logged in, how would you feel about it?" If the answer is "annoying" more than "useful", dismissal or session-based throttling needs to be designed in before build.

---

**3. "How does connecting more integrations translate to revenue?"**

Adding integrations is an activity metric, not a revenue metric. The CPO will want to see the assumed causal chain: more integrations → higher activation → better retention → lower churn → or → upgrade to Enterprise. If that chain hasn't been validated, the feature is optimising for a proxy metric that might not move the needle.

*What closes it:* Pull cohort data on whether integration count correlates with retention or upgrade rate. Even a directional correlation (accounts with 4+ integrations have X% lower churn) gives the CPO something to anchor the bet on.

---

**4. "Why are we prioritising RevOps specifically?"**

RevOps is a named segment but may not be the highest-value or highest-volume segment in the user base. The CPO will ask: what's the size of the RevOps addressable cohort, and is the integration expansion problem more acute here than in other segments?

*What closes it:* Show the segment size and current integration count distribution. Justify why RevOps was chosen — e.g. highest integration gap between current state and benchmark, or highest LTV if expanded.

---

**5. "What's the expected lift, and is it worth the build cost?"**

Even if the hypothesis is right, the magnitude might not justify the work. If the nudge increases integration adds by 10% but each additional integration only marginally improves retention, the ROI is weak. The CPO needs a rough size-of-prize estimate to compare this against competing roadmap items.

*What closes it:* A back-of-envelope model: [number of eligible accounts] × [estimated conversion rate from nudge] × [estimated retention improvement per integration] × [average revenue per account]. It doesn't need to be precise — it needs to show the ceiling is worth chasing.

---

**6. "Does this cannibalise anything we're already doing?"**

If there's an existing onboarding flow, in-app messaging system, or CSM outreach cadence targeting the same behaviour, this feature may duplicate effort or create conflicting signals for the user. The CPO will want to know where this sits in the existing nudge ecosystem.

*What closes it:* Map the current touchpoints that address integration adoption. Show that the dashboard banner fills a gap (e.g. post-onboarding, logged-in users who have stalled) rather than competing with existing flows.

---

### Setup

"I'm going to show you a couple of screens from a product concept — it's early and rough, so some things won't look finished. I'm not testing you, I'm testing whether the idea makes sense. The most useful thing you can do is tell me out loud what you're thinking as you look at it. There are no right or wrong answers."

### Tasks

**Task 1:** "You've just logged into your team's workflow tool. Take a look at the main screen and tell me what you notice."

**Task 2:** "Based on what you're seeing on that screen, what would you do next, if anything?"

**Task 3:** "Go ahead and do that — walk me through your thinking as you go through these screens."

### Questions to ask after each task

- What did you expect to see when you first landed on this screen?
- Was anything confusing or surprising?
- Would you take that action in your own account today? What would make you more or less likely to?

### Hypothesis-specific questions

1. "When you saw 'RevOps teams like yours typically connect 4–6 tools — you're at 2' — what did that tell you? Did it feel relevant to you, or like it didn't apply to your situation?"
2. "Looking at those 5 integrations in the catalogue — do they feel like the right suggestions for your team? Are any of them tools you already use or have been thinking about connecting?"
3. "If you saw this on your dashboard every time you logged in until you connected another integration — would that feel helpful, annoying, or something else? What would make the difference?"

### What a successful session looks like

**Validates the hypothesis:** The customer reads the benchmark copy and reacts with recognition ("oh, we only have 2 as well — interesting") rather than dismissal, clicks through to the catalogue without being prompted, and identifies at least one integration they would genuinely consider connecting. They say they'd act on this within a week, or that they'd bring it to their admin.

**Falsifies the hypothesis:** The customer reads the banner and doesn't find the peer comparison meaningful ("I don't know what other RevOps teams do — that's not really relevant to us"), or they click through to the catalogue and the suggested integrations feel irrelevant or generic ("we already use all of those" or "none of these apply to us"). Either response tells you the mechanism needs reworking — either the framing, the integration suggestions, or both — before a build makes sense.
