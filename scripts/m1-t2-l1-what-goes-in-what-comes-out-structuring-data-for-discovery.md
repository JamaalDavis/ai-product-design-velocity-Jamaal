# Script: What Goes In, What Comes Out: Structuring Data for Discovery
**Module:** Module 1 — Topic 2, Lesson 1
**Instructor:** Simon
**Duration:** 6-8 min
**Format:** Talking head + screen (Finder showing Company A data files)

---

## LESSON GOAL
Students understand what types of data belong in the discovery machine and why format matters as much as content. Core mental model: Claude doesn't think — it reads. The better you structure the input, the better the output. Includes the token-as-currency sidebar. Ends with the human judgment framing: Claude finds the patterns, you decide which ones matter.

## RECORDING NOTES
- Open with talking head for the core mental model, then screen for data file examples
- Show actual Company A data files in VS Code file tree — names, structure, rough shape
- Token sidebar: 60 seconds max, tight
- The human judgment close is important — end on it
- Tone: practical, grounding. Students are about to prep their own Company B data.

---

## SCRIPT

### [0:00–0:40] THE CORE MENTAL MODEL

**[Face camera]**

"The discovery machine is only as good as what you feed it.

That sounds obvious — but it has a specific implication most people miss.

Claude doesn't think about your data. It reads your data. It finds patterns in what's there. If the right information isn't in the files, the patterns it finds won't be the ones that matter.

So before you run the workflow on your Company B data, I want to show you what goes in — and why format matters as much as content."

---

### [0:40–3:00] THE FOUR DATA TYPES

**[Screen share: Finder with Company A data folder open]**

"Four types of data produce strong EIM output.

**[On-screen: 1. Behavioural data]**

First: behavioural data. What did users actually do? Event logs, feature usage records, session data, onboarding step completion — anything that records an action at the user or account level.

This is the engine of the analysis. Without it, you have opinions. With it, you have evidence.

Here in Company A's folder — you can see an accounts file and an events file. The accounts file: one row per account, attributes like signup date and plan. The events file: one row per action — what happened, when, for which account. That's the grain Claude needs to find patterns.

**[On-screen: 2. Outcome data]**

Second: outcome data. What happened to those users as a business result? Churned? Upgraded? Cancelled?

In Company A's accounts file, there's a churned_90d column — true or false per account. That single column is what lets Claude calculate churn rates by segment. Without an outcome variable, you can describe behaviour but you can't say which behaviour predicts a bad outcome.

**[On-screen: 3. Product context]**

Third: product context. What does the product do? Who are the users? What are the pricing tiers?

This stops Claude producing hypotheses that are statistically correct but product-irrelevant. When Claude knows that 'taste profile completion' is a key activation step — not just another event in the log — it interprets the skip rate as a product problem, not just a data anomaly.

For Company A, I loaded a product context document alongside the data. Plain text. One page. Just enough for Claude to understand the product before it looks for signals.

**[On-screen: 4. Customer voice — optional]**

Fourth, optional: customer voice. Interview notes, support ticket themes, NPS comments.

This doesn't drive the analysis — it validates it. When Claude surfaces a hypothesis that maps to something you're already hearing from customers, confidence goes up. When it contradicts what you're hearing, that's a conversation worth having before you build."

---

### [3:00–4:30] FORMAT MATTERS

**[Still on screen — maybe show a messy vs structured file example]**

"Now — format.

Raw data produces noise. Structured data produces signal.

If you dump a hundred support ticket emails into a folder and ask Claude to find patterns — it will find something. But unstructured text is expensive to read and the patterns are hard to validate.

If you spend 20 minutes turning those tickets into a structured document — top 5 themes, count per theme, one representative quote each — Claude works with that in a fraction of the context and produces something much more precise.

The practical rule: summarise what you can. Structure what you can't summarise. Load only what's relevant to the question you're asking."

---

### [4:30–5:15] TOKEN SIDEBAR

**[Face camera or simple graphic]**

"Quick sidebar on tokens — because it matters here.

Think of tokens as your AI budget per session. Every file you load, every line of data, every back-and-forth — it costs tokens. A heavy, unstructured file costs a lot and produces mediocre output. A lean, structured file costs a fraction and produces sharper analysis.

You don't need to obsess over this — Claude will let you know if you're approaching limits. But 'tokens as budget' is the right mental model when you're deciding what to load. Don't put everything in. Put the right things in."

---

### [5:15–6:30] THE HUMAN JUDGMENT CLOSE

**[Face camera]**

"One more thing before the next lesson.

Claude finds patterns. You decide which patterns matter.

That's not a small distinction.

Your discovery machine will surface five hypotheses from Company A data. Some will be statistically interesting. Some will be business-relevant. Those two categories overlap — but they're not the same.

Your job — which Claude cannot do — is to look at the output and ask: given what I know about this business, its priorities, its capacity to ship, and its competitive position — which of these signals is worth acting on?

That judgment doesn't live in the data. It lives in you. Claude gets you to the shortlist. You make the call.

In the next lesson, I'll walk you through the project folder structure — CLAUDE.md, data files, skill files — and we'll run the discovery workflow on Company A data step by step."

**[End]**
