# Script: Write a PRD That Claude Can Actually Build From
**Module:** Module 2 — Topic 1, Lesson 1
**Instructor:** Simon
**Duration:** 7-8 min
**Format:** Screen share (Company A PRD document) + talking head

---

## LESSON GOAL
Students can write a complete PRD from their EIM hypothesis. They understand what belongs in a PRD, what stays out, and why each section exists. The close: vague PRD = vague prototype. The work here determines the quality of everything Claude builds.

## RECORDING NOTES
- Have the Company A PRD open and visible throughout — walk it section by section
- When you name a section, show the actual content in Company A's PRD, not a blank template
- User stories as acceptance criteria: make this concrete — show how a student would test against them
- "What stays out" section is important — be direct about implementation details, tool preferences
- Tone: exacting. Students are about to hand Claude a spec. The spec needs to be right.

---

## SCRIPT

### [0:00–0:40] SETUP

**[Face camera]**

"You have a winning hypothesis. Now you need a PRD — a product requirements document — that Claude can actually build from.

Your organization probably already has a PRD format. That's fine — you don't have to abandon it. But I want to show you the format we recommend for this course, because it's built to align directly with the EIM framework. The sections map to Evidence, Impact, and Mechanism. That alignment is what makes the spec defensible, not just buildable.

There's a file in the skills folder called prd-format.md — that's this structure, documented as a reusable template. You can adapt it to fit your organization's format later. For now, use it as-is.

Whatever PRD format you end up using — yours, ours, or a hybrid — it needs to answer three things: what is the evidence of the problem, what impact can you make by solving it, and what mechanism are you building to do that. If those three things aren't in the PRD, Claude is building from incomplete information and so is your stakeholder.

Let me walk through the Company A PRD section by section."

---

### [0:40–4:30] THE PRD SECTIONS

**[Screen share: Company A PRD open]**

"Seven sections. I'll walk each one.

**[Scroll to Problem Statement]**

Section one: Problem statement. This comes directly from your Evidence. What is the specific behaviour, who is experiencing it, what are the numbers. This is not 'users have friction.' It's: '36% of new accounts skip the taste profile. Those accounts churn at 5.4x the rate of accounts that complete it. The problem is not friction — it's perceived value. The feature reads as overhead, not personalisation.'

One paragraph. Specific. Defensible. Directly from EIM.

**[Scroll to Hypothesis]**

Section two: Hypothesis. This comes from your Mechanism. What intervention do you believe addresses the root cause, and why. Not 'improve the onboarding experience.' Something an engineer can scope and a designer can spec.

'A live recipe preview panel triggered at the taste profile screen, combined with a persistent in-feed completion prompt, will reframe the feature as personalisation at the moment of decision and increase completion rate by a measurable margin within 30 days.'

Specific. Testable. Grounded in the mechanism.

**[Scroll to Success Metrics]**

Section three: Success metrics. This comes from your Impact. What will you measure to know whether the intervention worked? Not vanity metrics — the same metrics you used to size the opportunity.

Taste profile completion rate. Churn rate at 90 days for accounts that completed after the intervention. Time to first completion. If your hypothesis is right, these numbers move. If they don't, that's a signal — either the hypothesis was wrong or the implementation missed.

**[Scroll to Scope]**

Section four: Scope. What are you building? List the surfaces, the features, the user flows — specifically. The goal here is to make scope decisions before the build starts, not during. 'Two screens: the taste profile screen with the recipe preview panel, and the in-feed prompt component.' That's scope. That's what Claude is building.

**[Scroll to User Stories]**

Section five: User stories. These are acceptance criteria. Every user story is a test.

'As a new account on day one, I can see three recipe suggestions that match the taste options I've selected before I finish the profile.' Either Claude built that or it didn't. Binary.

Write three to five user stories. They become your testing checklist in the build loop. If something Claude builds doesn't pass a user story, that's a spec conversation — either the spec needs updating or the build needs correcting.

**[Scroll to Guardrails]**

Section six: Guardrails. What should Claude not do? What constraints apply? 'Do not modify the meal plan creation flow. Do not introduce new data fields. Do not add copy that contradicts the existing brand voice.' Guardrails prevent scope creep from happening silently.

**[Scroll to Out of Scope]**

Section seven: Out of scope. Explicit list of what is not being built. 'Push notifications, email re-engagement sequences, and changes to the subscription tier page are out of scope for this build.' The out-of-scope list is as important as the scope list."

---

### [4:30–5:30] WHAT STAYS OUT

**[Face camera]**

"Now — what doesn't go in a PRD.

Implementation details. How Claude should write the code, which components to use, how to structure the file system. That's CLAUDE.md, not the PRD.

Tool preferences. Which version of a library, how to handle state, what framework to use. Not in the PRD.

Visual direction. Colours, typography, spacing. That's your design system file. Not the PRD.

The PRD answers what and why. Everything else lives somewhere else. Mixing them creates a spec that's hard to update and easy to misread."

---

### [5:30–7:00] CLOSE

**[Face camera]**

"The PRD is the source of truth for everything you build.

When Claude produces output you didn't expect, the first question is: does the spec need updating, or does the build need correcting? You can only answer that question if the PRD is specific enough to check against.

Build the Company A PRD using your EIM hypothesis as source material. You already have the content. This lesson gives it structure.

In the next lesson, I'll walk through CLAUDE.md — the second document that governs how Claude behaves while it builds from your PRD."

**[End]**
