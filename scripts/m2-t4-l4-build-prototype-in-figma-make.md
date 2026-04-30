# Script: Build Your Prototype in Figma Make
**Module:** Module 2 — Topic 4, Lesson 4
**Instructor:** Simon
**Duration:** 5-6 min
**Format:** Screen share (prototype brief in VS Code + Figma Make) + talking head

---

## LESSON GOAL
Students can copy the build prompt from their prototype brief and paste it into Figma Make to generate a clickable prototype. They understand this is a valid, fast path — no MCP, no setup, just the prompt and Figma Make.

## RECORDING NOTES
- Have the FinWise prototype brief open in VS Code — navigate to Section 5 (Build Prompt) on screen
- Copy the prompt live, switch to Figma Make, paste and run — show the full sequence without cuts
- Show Figma Make generating the screens — let it run in real time
- Walk through the output briefly: what it got right, what might need a tweak
- Tone: fast and practical. This is the no-friction path. One section of a document you already have. Paste. Done.

---

## SCRIPT

### [0:00–0:40] SETUP

**[Face camera]**

"Your prototype brief has a section called the Build Prompt. It's a self-contained prompt written specifically to paste into a prototype-building tool — including Figma Make.

In this lesson I'm going to copy that prompt and paste it directly into Figma Make. Figma Make will generate the screens. I'll show you the output and what to do with it.

This is the fastest path from prototype brief to something visual. No MCP, no command line, no setup. You just need the brief and a Figma account."

---

### [0:40–2:00] FIND AND COPY THE BUILD PROMPT

**[Screen share: VS Code with FinWise prototype brief open]**

"The prototype brief is in the finwise folder — `finwise-prototype-h1-goal-activation.md`. I'm scrolling to Section 5: Build Prompt.

This section is a fenced code block. Everything inside it is ready to paste. It describes the screens, the placeholder content, the interactions, the style direction, and what to leave out. It's written so that someone — or Figma Make — can read it with no prior context and produce a usable prototype.

I'm selecting everything inside the code block and copying it."

**[Select and copy the build prompt — show the selection visually]**

"That's the input. Now Figma Make."

---

### [2:00–4:30] PASTE INTO FIGMA MAKE AND RUN

**[Switch to Figma Make in the browser]**

"Figma Make is here — I'm starting a new file. The interface gives you a prompt field. I'm pasting the build prompt directly."

**[Paste the prompt — show the full text populating the field]**

"The prompt is long — that's intentional. The more specific it is, the less Figma Make has to guess. It knows how many screens, what content goes on each one, which elements are tappable, and what not to build. That specificity is what keeps the output on target.

Running it now."

**[Click generate — let Figma Make run in real time]**

"While it generates — this is the same prompt you'd paste into Claude Code's `/build-html-prototype` if you wanted a browser file instead. Both paths read the same section of the same prototype brief. You choose the output format based on how you want to test."

**[When Figma Make finishes — show the output]**

---

### [4:30–5:30] REVIEW THE OUTPUT + CLOSE

**[Screen share: Figma Make output, screens visible]**

"Here's what it produced. Four screens — preset goal selection, confirmation, progress snapshot, and the motivation-moment bottom sheet. The layout matches the prototype brief. The content is from the brief. The interactions are wired as specified.

It won't be pixel-perfect. That's not the point. The point is: does this give you enough to put in front of a customer and test the assumption? In this case — yes. You can see the preset card flow. You can tap through to confirmation. You can show the progress snapshot.

If something looks off — wrong copy, wrong layout — go back to the prototype brief, update the build prompt, and run it again. The brief is the source of truth. When the output doesn't match what you expected, the fix is in the prompt, not in manual Figma edits.

That's it. PRD produces a prototype brief. Prototype brief contains a build prompt. Build prompt goes into Figma Make. You have a prototype."

**[End]**
