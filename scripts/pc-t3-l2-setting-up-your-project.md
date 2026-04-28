# Script: Setting Up Your Project
**Module:** Pre-Course — Topic 3, Lesson 2
**Instructor:** Simon
**Duration:** 8-10 min
**Format:** Talking head + screen recording

---

## LESSON GOAL
Students get the course files onto their machine and understand the working environment they'll use throughout the course. Covers: clone the repo into VS Code, environment tour (file tree + Claude Code panel), what CLAUDE.md is and why it matters, markdown preview, install course skills globally via Claude Code, and the VS Code file tree check habit. Ends with handoff to Jac's first-prompt lesson.

## RECORDING NOTES
- Have the course repo URL ready to paste — students need the exact URL from the Maven portal
- Show VS Code as the single working environment: file tree left, Claude Code panel right
- When showing CLAUDE.md, open it raw first, then preview — shows both modes
- VS Code file tree check: be explicit, slow down here. Students underestimate how important this habit is.
- Tone: calm and orienting. Students are about to start building — this is their last "setup" moment.
- End with clear handoff: "Jac walks you through your first prompt in the next lesson"

---

## SCRIPT

### [0:00–0:30] INTRO

**[Face camera]**

"Tools are installed. Now let's get the course files onto your machine and get you oriented in the environment you'll be working in throughout this course.

This is the last setup step. By the end of this lesson, you'll have everything in place and you'll know exactly where to look when we start building."

---

### [0:30–2:30] CLONE THE COURSE REPO

**[Screen share: VS Code open — press Cmd+Shift+P to open the Command Palette]**

"The course files live in a GitHub repository. The URL is in your Maven portal under Course Materials — grab it now.

To get the files onto your machine, press Cmd+Shift+P on Mac or Ctrl+Shift+P on Windows. That opens the Command Palette.

**[Type 'Git: Clone' and select it]**

Type 'Git: Clone' and select it.

**[Paste the repo URL]**

Paste in the repo URL and press Enter. VS Code will ask you where to save it — put it somewhere easy to find, like Documents or Desktop.

**[Clone completes — VS Code asks to open]**

When it finishes, VS Code will ask if you want to open the repo. Click Open.

**[File tree populates with course files]**

You'll see the course files appear in the file tree on the left — all the starter files, data files, and skill files you'll use throughout the course.

You're done when you see: the course files in your VS Code file tree."

---

### [2:30–4:00] THE ENVIRONMENT TOUR

**[Screen share: VS Code with Claude Code panel open, course folder loaded]**

"Here's what your working environment looks like — and this is the view you'll have every session.

**[Point to file tree on the left]**

On the left: your project file tree. Every file in your project lives here. When Claude builds something — a markdown output, a data file, a skill file — it lands here and you can see it immediately.

**[Point to Claude Code panel on the right]**

On the right: the Claude Code panel. This is where you direct Claude. You type what you want, Claude works on it, and the files appear in the tree on the left.

One window. File tree on the left. Claude on the right. That's the whole environment."

---

### [4:00–4:30] WHAT IS CLAUDE.MD

**[Screen share: click CLAUDE.md in the file tree]**

"You'll notice a file called CLAUDE.md at the root of the project. This is your context file.

Every time you open a session with Claude, it reads this file first. It tells Claude what the project is, what your conventions are, and what it needs to know before it starts working.

We'll build this out as the course progresses. For now, just know it exists — and that what's in here shapes how Claude responds."

---

### [4:30–5:30] PREVIEWING MARKDOWN FILES

**[Screen share: CLAUDE.md open — raw markdown visible]**

"Most files in this course are markdown files — .md files. Your CLAUDE.md, your data summaries, your skill files — all markdown.

When you open one, it looks like this — raw text with hashtags and asterisks.

**[Press Cmd+Shift+V — preview opens]**

To read it properly formatted, press Cmd+Shift+V on Mac, or Ctrl+Shift+V on Windows. Everything renders: headings, bullet points, tables.

**[Show preview panel]**

Use this whenever you want to check what's in a file — confirm Claude has the right context, review an output, read through a skill file before running it.

Raw view when you're editing. Preview when you're reading."

---

### [4:30–5:00] THE README

**[Screen share: click README.md in the file tree — show it briefly]**

"You'll also see a README.md in the root of the project. This is the map of everything you'll use — every skill documented, the full workflow, an end-to-end example.

Don't read it now. Come back to it when you want to know what a skill does or how the pieces connect. It's a reference, not a lesson.

At the end of the course, it's yours permanently — it works on any project, any company, any data."

---

### [5:00–5:30] INSTALL THE COURSE SKILLS

**[Screen share: Claude Code panel]**

"There's a skills folder in your project. These are the reusable workflows you'll use throughout the course — discovery, hypothesis writing, prototyping.

We're going to install them now so they're available as commands in any project, not just this one.

In the Claude Code panel, type this exactly:

'Install all the skills from the skills folder into my Claude Code skills directory.'

**[Send the prompt — Claude runs the copy commands]**

Claude will copy each skill to your global Claude Code skills directory. Takes about ten seconds.

**[Glance at file tree — confirm skills folder is still there]**

VS Code file tree check — skills folder still in place. Done.

From now on, those skills are available to you anywhere in Claude Code."

---

### [5:30–6:30] THE VS CODE FILE TREE CHECK

**[Face camera]**

"Last thing — and this sounds small but it isn't.

Every time Claude generates something, glance at the file tree on the left. Confirm the file landed where you expected it to land.

This saves you from building on top of the wrong version, or wondering why Claude can't find a file you thought was there. The file tree is already open — it takes five seconds. Make it a habit from your very first session.

We'll come back to it in Module 1, but start doing it now."

---

### [6:30–7:00] HANDOFF

**[Face camera]**

"You're set up. Course files on your machine, skills installed globally, environment oriented, CLAUDE.md in place.

See you there."

**[End]**
