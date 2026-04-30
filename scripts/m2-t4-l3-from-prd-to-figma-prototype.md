# Script: Read Your Figma Design System Into Claude
**Module:** Module 2 — Topic 4, Lesson 3
**Instructor:** Simon
**Duration:** 6-7 min
**Format:** Screen share (Claude Code + Figma + VS Code sidebar) + talking head

---

## LESSON GOAL
Students can run `/figma-make-spec` on a Figma design file, understand what it extracts and why, and confirm the output saved correctly. They know this spec file is what makes Claude prototype on-brand rather than generic — and that it feeds automatically into `/figma-prototype-builder` without any extra setup.

## RECORDING NOTES
- Have the FinWise Figma file open in a browser tab before recording starts
- Run `/figma-make-spec` live — let it run in real time, narrate as it works
- VS Code file tree check is the confirmation moment — make it visible and deliberate
- Open the spec file and walk 3-4 sections — don't read everything, just show enough to make it feel real
- Tone: calm and practical. One command. Clear input, clear output. Students should feel like this is easy to run on their own file.

---

## SCRIPT

### [0:00–0:45] SETUP

**[Face camera]**

"You have a Figma design file. You want Claude to build from it — to use your actual colours, your components, your typography, not a generic approximation of your brand.

The way you do that is `/figma-make-spec`.

One command. It reads your Figma file, extracts everything Claude needs to know about your design system, and saves it as a markdown file in your project folder. From that point on, every prototype Claude builds can reference your actual design system — not a guess at it.

Let me show you how it works."

---

### [0:45–3:30] RUNNING THE SKILL

**[Screen share: Claude Code, FinWise project folder visible in VS Code sidebar]**

"I'm in the FinWise project folder. I'm going to run `/figma-make-spec` and point it at the FinWise Figma design file."

**[Type: /figma-make-spec in Claude Code]**

"When the skill prompts for a URL, paste your Figma design file URL. It needs to be a `/design/` URL — not a team browser URL or a community file link. If you're working from someone else's file, duplicate it to your own Figma workspace first. You need a file you own."

**[Paste the FinWise Figma URL, skill starts running]**

"Now watch what it does. It starts by reading the file metadata — building a picture of what pages, sections, and frames exist. Then it selects a set of representative screens — a home screen, an onboarding screen, a modal or bottom sheet, any screen with a distinct pattern. It samples those screens specifically because no single screen shows every component state."

**[While it runs — narrate the key phases]**

"Now it's extracting design context screen by screen — pulling colour values, type scales, spacing, border radius, component patterns. This is real extraction from your actual Figma file, not inference. The hex values come out exact. The border radius comes out exact. When Claude builds from this, it's matching your design system precisely."

**[When it finishes writing the spec]**

"And it saves."

---

### [3:30–4:30] VS CODE FILE TREE CHECK + OPEN THE SPEC

**[Show VS Code sidebar]**

"VS Code file tree check. Five seconds. I can see `finwise-figma-spec.md` in the finwise folder. That's where it should be — same directory as the PRD and prototype brief.

If you don't see it here, stop and check whether the Figma MCP connection succeeded before running anything else."

**[Open the spec file, scroll through it]**

"Let me show you what's inside.

Colour system — every role mapped to an exact hex value. Background, surface, primary CTA, text primary, text secondary, success, error. These are the values Claude will use when it builds anything from this file.

Typography — font family, size, weight, line height for every text role. Display, heading, body, caption, label.

Component patterns — how the primary button is built, what a card looks like, what the bottom sheet border radius is, what the active and inactive states are on the bottom navigation.

Screen inventory — every screen it sampled, with a description and a note on which component patterns are present.

This is a complete picture of your design system in a format Claude can read."

---

### [4:30–6:00] WHY THIS MATTERS + WHERE IT FEEDS

**[Face camera]**

"Why does this file matter?

Without it, when you ask Claude to build a prototype, it guesses. It picks a reasonable green, a reasonable border radius, a reasonable button style. And the output looks competent but generic — like anyone could have built it.

With this file, Claude knows your specific green. Your specific border radius. Your specific button. The output looks like your product.

That's the difference between a prototype that validates your hypothesis and a prototype that makes your stakeholders ask 'why doesn't it look like our brand.'

One other thing — this file is persistent. You run `/figma-make-spec` once per design file. After that, every skill that builds something — including `/figma-prototype-builder` — discovers this file automatically and reads it without you needing to point at it again. It becomes part of your project context, the same way your PRD and CLAUDE.md are.

Run it on your Company B Figma file before you build anything. It's the step that makes everything Claude produces look like it belongs in your product."

**[End]**
