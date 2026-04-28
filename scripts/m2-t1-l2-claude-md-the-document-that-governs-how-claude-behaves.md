# Script: CLAUDE.md — The Document That Governs How Claude Behaves
**Module:** Module 2 — Topic 1, Lesson 2
**Instructor:** Simon
**Duration:** 6-7 min
**Format:** Screen share (Company A CLAUDE.md alongside PRD) + talking head

---

## LESSON GOAL
Students understand what CLAUDE.md is, what goes in it, and how it works alongside the PRD. The PRD/CLAUDE.md distinction made concrete and unambiguous before the build starts. Students leave able to write a CLAUDE.md that governs Claude's behaviour during a build.

## RECORDING NOTES
- Show PRD and CLAUDE.md side by side — the distinction lands better visually than verbally
- When you say "two documents, two jobs," have both files open
- The "what happens without CLAUDE.md" section: keep it brief — one concrete example is enough
- Tone: precise. This is a technical distinction. Make it simple without underselling it.

---

## SCRIPT

### [0:00–0:45] THE TWO-DOCUMENT SETUP

**[Screen share: PRD and CLAUDE.md side by side]**

"You now have a PRD. That's document one.

Before you build anything, you need document two: CLAUDE.md.

**[Gesture to PRD]**

The PRD says what we're building and why. Problem, hypothesis, success metrics, scope, user stories, guardrails.

**[Gesture to CLAUDE.md]**

CLAUDE.md says how Claude should behave while building it. How to handle ambiguity. What to ask before proceeding. What format to produce output in. What never to change without checking.

Two documents. Two jobs. They work as a pair. Never mix them."

---

### [0:45–3:30] WHAT GOES IN CLAUDE.md

**[Screen share: Company A CLAUDE.md — walk through it live]**

"Here's Company A's CLAUDE.md. Let me walk through what's in it.

**[Section 1: Project context]**

First: project context. A short summary of what this project is. Not a full brief — that's the PRD. Just enough for Claude to orient itself at the start of every session.

'This is the Company A recipe app — Mealtime. We are building a taste profile completion intervention: a recipe preview panel and in-feed prompt. See PRD: mealtime-prd-h1.md for full scope.'

One paragraph. Enough for Claude to know what it's working on and where to find the full spec.

**[Section 2: How to work]**

Second: how to work. Instructions about Claude's behaviour during the build. Things like:

'Before making any change that affects more than one file, state what you are about to change and why. Wait for confirmation before proceeding.'

'Do not add features or scope that are not in the PRD without flagging the addition and asking whether to proceed.'

'After every file change, tell me which file was changed and what changed.'

These are not code instructions. They're working instructions. They tell Claude how to communicate, how to handle uncertainty, when to ask versus when to proceed.

**[Section 3: What never to do]**

Third: hard rules. Things Claude should never do in this project without explicit permission.

'Do not modify the design system file. Do not change the folder structure. Do not commit to git without asking first.'

These are the guardrails that stop Claude from doing something irreversible in the background."

---

### [3:30–5:00] WHAT HAPPENS WITHOUT IT

**[Face camera]**

"What happens when you don't have a CLAUDE.md?

Claude defaults to its training data. It makes reasonable assumptions about how to behave, what format to produce output in, how to handle ambiguity.

Sometimes that's fine. When you're prototyping something generic, Claude's defaults are usually acceptable.

When you're building on-brand — with a specific design system, specific scope, specific behaviour rules — Claude's defaults will diverge from what you expect. Not dramatically. Subtly. It'll make a small scope call here, add a component that wasn't in the spec there. Each one individually seems minor. Together they drift the prototype away from the original intent.

CLAUDE.md is what prevents that drift. It's the standing instruction set that applies to every session, every file change, every output."

---

### [5:00–6:30] CLOSE

**[Face camera]**

"Two documents. Two jobs.

The PRD tells Claude what to build. CLAUDE.md tells Claude how to behave while building it. They're complements, not substitutes.

Write your CLAUDE.md now — for your Company B project. You don't need much. Start with three sections: project context, how to work, hard rules. One or two lines in each. You can extend it during the build when you notice Claude doing something you want to correct or reinforce.

In the next lesson, we'll cover the three judgment calls that are yours to make — the decisions Claude cannot make for you, no matter how good the spec is."

**[End]**
