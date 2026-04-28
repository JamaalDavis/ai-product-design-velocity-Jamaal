# Script: Effective AI Project Structure
**Module:** Module 1 — Topic 3, Lesson 1
**Instructor:** Simon
**Duration:** 6-8 min
**Format:** Screen share (VS Code file tree + Claude Code panel) + talking head

---

## LESSON GOAL
Students understand the three-file architecture before they run anything: CLAUDE.md as Claude's standing brief, data files as the material for analysis, skill files as reusable instructions. Introduce the VS Code file tree check as a non-negotiable ritual. By the end, students can set up a project folder and know what each file does.

## RECORDING NOTES
- Open VS Code with Company A project folder visible in the file tree — name the files as you point to them
- Switch to Claude Code simultaneously so students see the same files in both views
- When you introduce each file type, show where it lives physically before explaining what it does
- VS Code file tree check: do it on screen — glance at the sidebar, confirm the file is there. Model the habit.
- Tone: methodical. This is setup work. Make it feel non-negotiable, not bureaucratic.

---

## SCRIPT

### [0:00–0:40] SETUP

**[Face camera]**

"Before you run the discovery workflow, your project folder needs to be structured correctly.

Not because Claude cares about folder names. Because you do. The structure is what lets you add files, update context, and hand the project to Claude in any session without rebuilding the briefing from scratch.

Let me show you what the Company A project looks like — and what each piece does."

---

### [0:40–2:30] THE THREE FILE TYPES

**[Screen share: VS Code with Company A folder open in file tree, Claude Code panel visible alongside]**

"Three types of files. Everything in the discovery machine is one of these three.

**[Point to CLAUDE.md in VS Code file tree]**

First: CLAUDE.md. This is Claude's standing brief. It opens automatically when Claude Code connects to this folder. It tells Claude who it's working with, what project this is, how it should behave, and what it should never do without checking.

If you remember the contractor analogy from pre-course — the briefing packet that survives the morning reset — this is it. Claude reads this at the start of every session. It's the only context that doesn't need to be re-entered.

You'll update this as your project evolves. But even a minimal CLAUDE.md — a paragraph describing the project and a few rules about how Claude should work — makes every session sharper.

**[Point to data files]**

Second: data files. These are the raw material for the analysis. For Company A, that's an accounts CSV, an events CSV, and a product context document.

Claude reads these during the discovery workflow run. The quality of the hypotheses it produces is a direct function of the quality of what's in these files. We covered that in the last lesson.

**[Point to skill files or show the eim-skill file]**

Third: skill files. These are reusable instruction sets. A skill file tells Claude how to run a specific process — step by step, output format, guardrails — so you don't have to re-explain it every session.

The discovery workflow itself is a skill file. You load it, point Claude at your data files, and it knows what to do. That's the machine."

---

### [2:30–4:30] CONTEXT LAYERING IN PRACTICE

**[Still on screen — VS Code file tree left, Claude Code panel right]**

"Here's what context layering looks like in practice.

When you open Claude Code and connect your project folder, Claude reads CLAUDE.md first. That's layer one — standing brief. It knows the project, the rules, how to behave.

Then you point it to the skill file — in this case, the EIM discovery workflow. That's layer two — process instructions. Claude now knows what it's about to do and in what order.

Then the skill file references the data files. That's layer three — the material. Claude has the accounts, the events, the product context it needs to find patterns.

Three layers, loaded in sequence. By the time Claude starts the analysis, it knows who you are, what you're doing, and what it has to work with.

This is why output quality improves as the course progresses. You're not running better prompts — you're adding layers. The layers compound."

---

### [4:30–6:00] THE VS CODE FILE TREE CHECK

**[Screen: VS Code sidebar visible — demonstrate the check live]**

"Now the VS Code file tree check. This is non-negotiable, and I want you to see me do it.

Every time Claude generates a file — a data file, an EIM output, an updated CLAUDE.md — glance at the VS Code file tree in the left sidebar. Confirm the file is there, the name is right, and it's in the right folder.

**[Point to VS Code sidebar — file appears, confirm name and location]**

Five seconds. Done.

Why does this matter? Because Claude Code creates files in the folder you have open. If you have the wrong folder open, the file goes somewhere you're not looking. You then build the next step on top of missing context and wonder why the output is off.

The VS Code file tree check is not paranoia. It's the fastest way to confirm your project is in the state you think it is. Do it every time."

---

### [6:00–7:00] CLOSE

**[Face camera]**

"So: CLAUDE.md for the standing brief, data files for the material, skill files for the process. Three types. Every file in your project is one of these.

In the next lesson, you'll load the Company A data and run the discovery workflow from start to finish — at your own pace, with the structure you now have in place.

Set up your folder. Do the VS Code file tree check. You're ready."

**[End]**
