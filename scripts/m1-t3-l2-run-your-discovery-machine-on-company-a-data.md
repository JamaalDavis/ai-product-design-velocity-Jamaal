# Script: Run Your Discovery Machine on Company A Data
**Module:** Module 1 — Topic 3, Lesson 2
**Instructor:** Simon
**Duration:** 7-8 min
**Format:** Screen share (Claude Code running live) + talking head at key moments

---

## LESSON GOAL
Students run the discovery workflow on Company A data at their own pace and confirm their machine produces valid EIM output. Normalise non-determinism — their output will look different from the example and that's fine. The success indicator is binary: at least one hypothesis with evidence, impact, and mechanism. They either have it or they don't.

## RECORDING NOTES
- This is a hands-on walkthrough — screen share throughout, talking head only for framing moments
- Run the workflow live on screen — students should be following along step by step
- When the output comes in, slow down and read it — students are reading along with you
- Non-determinism section is important — explicitly model what to do when output looks different
- Success indicator read out clearly at the end — students should know exactly when they're done
- Tone: guided, calm. They've seen this in Live 1. Now they're doing it themselves.

---

## SCRIPT

### [0:00–0:45] FRAMING

**[Face camera]**

"In Live Session 1, you watched me run the full discovery workflow on Company A data. Now you're going to run it yourself — same data, same workflow, at your own pace.

I'll walk through every step. Follow along in your own Claude Code environment.

Before we start: your output will not look identical to mine. That's not a problem — I'll explain why in a moment. The goal is a working machine that produces EIM hypotheses from Company A data. When that happens, you're done."

---

### [0:45–2:30] STEP 1 — FOLDER AND FILES

**[Screen share: Finder open, Company A folder visible]**

"Step one: confirm your Company A folder is set up correctly.

You should have: CLAUDE.md, the accounts data file, the events data file, the product context document, and the EIM discovery skill file.

**[VS Code file tree check — glance at sidebar, confirm files are present]**

Five files, right folder. If anything is missing, pause here. The pre-course setup materials have the download links for all Company A files.

Now open Claude Code. Connect it to your Company A folder. You should see Claude load and acknowledge the project context from your CLAUDE.md."

---

### [2:30–4:30] STEP 2 — RUN THE WORKFLOW

**[Screen share: Claude Code — type the first prompt live]**

"Step two: run the discovery skill.

Type this prompt, or use the version from your skill file:

'Run the EIM discovery workflow on the Company A data in this folder. Follow the skill file instructions. Produce a full EIM output with at least three hypotheses. Each hypothesis must include Evidence, Impact, and Mechanism.'

Send it and watch.

**[Let it run — narrate what's happening]**

Claude is reading your data files now. It starts with the accounts and events — looking for patterns in user behaviour that correlate with churn or expansion. Then it cross-references your product context to make sense of what those patterns mean in product terms.

This takes a few minutes. Don't interrupt it mid-run."

---

### [4:30–6:00] STEP 3 — READ THE OUTPUT

**[Screen share: EIM output appearing in Claude Code]**

"Here's the output.

Read the first hypothesis before you scroll.

**[Read it out loud, pointing to each section]**

Evidence — is there a specific behaviour, a specific user population, a comparison group? Yes. Good.

Impact — does it show its working? Count, rate, dollar estimate? Good.

Mechanism — is the root cause named? Is the intervention specific enough to scope? Good.

That's a strong hypothesis. That's what you're looking for.

Run the same check on hypotheses two and three. Not every hypothesis will be equally strong — that's expected. You're looking for at least one you could build from."

---

### [6:00–7:00] NON-DETERMINISM

**[Face camera]**

"If your output looks different from mine — different hypotheses, different numbers, different wording — that's not a sign something went wrong.

Claude is non-deterministic. Every run produces a slightly different response. The data is the same, the skill is the same, the analysis is the same — but the specific output varies. This is normal.

What matters is the structure. If your hypotheses have evidence, impact, and mechanism — specific, numbered, defensible — your machine is working.

If a hypothesis is vague — broad claim, no numbers, no mechanism diagnosis — that's a data quality signal, not a Claude problem. Go back to the data preparation lesson and look at what's missing from your files."

---

### [7:00–7:45] SUCCESS INDICATOR AND CLOSE

**[Face camera]**

"The success indicator for this lesson:

Your discovery machine produced an EIM output from Company A data. You can see at least one hypothesis with specific evidence, a dollar-value impact estimate, and an actionable mechanism. You ran the VS Code file tree check and confirmed the output file landed where you expected.

If that's true, you're done.

In the next lesson, we'll look at how to evaluate all the hypotheses your machine produced — and how to pick the one you're going to build from."

**[End]**
