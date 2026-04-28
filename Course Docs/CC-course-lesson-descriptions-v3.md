# AI Product & Design Velocity — Lesson Detail Pass
## Course Plan v5 — Lesson Detail (v3)
**Date:** April 27, 2026
**Status:** Updated post Simon review session.
**Changes from v2:**
- M1 T1 lesson retitled and reframed to match course plan ("What Strong Product Opportunities Look Like"). Weak hypothesis now constructed on-screen text — no real document needed.
- M1 T3: Finder check replaced throughout with VS Code file tree check. Format changed from Finder to VS Code file tree.
- M1 T4 replaced: "Picking Your Winning Hypothesis" cut. New lesson "The Pauses Are Where You Do the Work" covers all three workflow pauses. Pause 1 absorbs the three-question filter from old M1 T4. Pauses 2 and 3 previewed so students aren't surprised in Module 2.
- M2 T1 PRD lesson updated: now acknowledges students may have their own org PRD format, positions course format as EIM-aligned recommendation, references prd-format.md, sets E/I/M as minimum requirement for any format.
- M2 T2 ("Three Decisions Claude Can't Make For You") cut. Content absorbed into new M1 T4.
- M4 T2 replaced: "Startup, Growth Stage, or Enterprise?" cut. New lesson "Taking Your Work Back to Your Organisation" — one question, post-Demo-Day frame, 4-5 min.
- M4 T4 ("Deploy to Netlify") cut. Students demo from HTML file or Figma link on Demo Day. Netlify noted in README as post-course option for stakeholder sharing.
- "Finder check" renamed "VS Code file tree check" throughout all lessons. Same habit, already open, five seconds.
- Skills folder added to repo. Setup script (PC T3 L2) now includes README orientation (30 sec) and skills install step. Duration updated to 8-10 min.
- All remaining Finder/finder references in Jac's lessons flagged for update below.

---

## HOW TO READ THIS DOC

Each module opens with its name and a brief description of what it covers (under 500 characters).

Topics sit one level under the module. Each topic contains one or more lessons. Every lesson includes: instructor, what it is, what it covers, learning goal, and duration.

Live sessions and office hours are confirmed as-is from the course plan. No lesson detail needed for those.

---

## PRE-COURSE

The four videos students watch before Session 1. Goal: arrive knowing what they'll build, understanding how Claude reads context, set up and ready to go, and able to define EIM. The pre-course is the difference between Session 1 feeling like a running start and a setup scramble.

---

### PRE-COURSE — Topic 1: What you'll build and how this course works

**Lessons in this topic:** 1

**Lesson 1: Your 2-Week Build: From Opportunity to Demo Day**
*Jac*

- What it is: Orientation walkthrough showing finished Company A outputs, the course arc, and the student's role as strategist.
- What it covers:
  - Show the finished outputs students will build: discovery machine, prototype, EIM write-up, presentation (Company A versions, complete and polished). Students see the end state before anything else.
  - The 5-session arc mapped across 2 weeks, what each session produces, and how each one stacks on the last.
  - Company A vs Company B structure: "You watch us build on Company A. You build on Company B. Same workflow. Different data. That's where the real learning happens."
  - The mindset frame: "You're not here to become a developer. You're here to become the person who finds the right problem, builds a credible solution, and defends every decision. The building happens through AI. The thinking happens through you."
  - Logistics: Maven portal, office hours, how to get help, 5-8 hrs/week commitment.
- Learning goal: "After this lesson, you know exactly what you'll build by Demo Day, how the 5 sessions connect, and what your role is versus Claude's."
- Duration: 5-7 min

---

### PRE-COURSE — Topic 2: How AI reads what you give it

**Lessons in this topic:** 1

**Lesson 1: How to build with AI effectively**
*Jac*

- What it is: Concept explainer with one core analogy that primes the mental model before students touch any tool.
- What it covers:
  - The contractor analogy: "Every morning, no memory of yesterday. The quality of your briefing packet determines the quality of your experience." Claude is not magic. It's a skilled contractor who reads exactly what you give it.
  - Session memory vs persistent context: what disappears when a session ends, what survives, and how context files make it survive across sessions.
  - Non-determinism normalised: "Your output won't look exactly like mine. That's expected, not a sign of failure. Here's what to do when that happens."
  - Context layering introduced: "More context = better output. You'll build these layers throughout the course. By Session 2, your Claude knows your brand, your data, your product direction."
- Learning goal: "After this lesson, you understand why context quality drives output quality, and you won't panic when your output looks different from the instructor's."
- Duration: 4-5 min

---

### PRE-COURSE — Topic 3: Set up your AI building environment

**Lessons in this topic:** 2

**Lesson 1: Your VS Code and Claude Code Setup (Know Your Tools Before You Build)**
*Simon*

- What it is: Optional orientation video explaining Claude Code and VS Code and when each adds value, placed here so students choose their preferred view from day one.
- What it covers:
  - Claude product orientation (90-second visual): Chat, Cowork, Code, Design. "We primarily use Code in this course. Here's where to find it."
  - What Claude Code shows you vs what VS Code shows you: Claude Code is the conversation view. VS Code is the full project laid out in a file tree.
  - When VS Code is worth opening: when you want to see how your project is structured, when a build goes wrong and you want to understand what changed.
  - "Neither is mandatory. Both are available. Pick the view that makes you feel in control."
- Learning goal: "After this lesson, you know what Claude Code and VS Code each show you, and you've chosen your preferred working view before the course starts."
- Duration: 5-6 min

**Lesson 2: Your Project Setup (Clone, Orient, Install Skills)**
*Simon*

- What it is: Screen-recorded setup walkthrough covering repo clone, environment orientation, README introduction, skills install, and the VS Code file tree check habit.
- What it covers:
  - Clone the course repo into VS Code. File tree populates with all course files, data, and skills.
  - Environment tour: VS Code file tree left, Claude Code panel right. One window, everything visible.
  - CLAUDE.md introduced: "This file opens automatically every session. It's Claude's standing brief for this project."
  - Markdown preview: Cmd+Shift+V (Mac) / Ctrl+Shift+V (Windows). Raw view for editing, preview for reading.
  - README orientation (30 seconds): "Don't read it now. Come back to it when you want to know what a skill does or how the workflow fits together. At the end of the course, it's yours permanently."
  - Skills install: ask Claude Code to install all skills from the /skills/ folder into the global Claude Code skills directory. Takes ten seconds. Skills are then available in any project.
  - VS Code file tree check introduced: "Every time Claude generates a file, glance at the file tree. Five seconds. Confirm it landed where you expected." Model the habit on screen.
  - Success indicator: "Course files in your VS Code file tree. Skills installed. Claude responded to your first prompt."
- Learning goal: "After this lesson, your project is set up, your skills are installed globally, and you have the VS Code file tree check as a working habit."
- Duration: 8-10 min

---

### PRE-COURSE — Topic 4: The EIM Framework

**Lessons in this topic:** 1

**Lesson 1: Evidence. Impact. Mechanism. (And Why This Changes Everything)**
*Simon*

- What it is: Framework introduction with one applied example.
- What it covers:
  - Why EIM exists: "95% of AI products fail not because they were built badly, but because nobody answered three questions before the building started."
  - What Evidence, Impact, and Mechanism mean, in plain language. Evidence = signals in real data that tell you this is a genuine problem. Impact = the business value of solving it, in dollars or metrics. Mechanism = the specific reason the gap exists, the root cause the solution will address.
  - One example showing E, I, and M applied to a real product decision using Company A (recipe app) context.
  - "In Live Session 1, you'll watch us run these three questions on real company data. Arrive knowing these three words. That's the whole ask."
- Learning goal: "After this lesson, you can define Evidence, Impact, and Mechanism in your own words and identify them in a product example."
- Duration: 4-5 min

---

## 🗓️ LIVE SESSION 1: Build your product discovery machine
**MON 5/18 7:30 AM (GMT+10)**
*Structure confirmed as-is from course plan. No lesson detail needed.*

---

## MODULE 1: BUILD YOUR PRODUCT DISCOVERY MACHINE

You've watched Simon run EIM live. Now you understand what strong output looks like, how to feed data into the machine, and how to choose the opportunity worth building from. By the end of this module, your discovery machine is running on your own company's data.

---

### MODULE 1 — Topic 1: What strong product opportunities look like

**Lessons in this topic:** 1

**Lesson 1: What Strong Product Opportunities Look Like**
*Simon*

- What it is: Concept explainer showing what a strong EIM output looks like before students build anything. Uses Company A EIM output as the concrete example.
- What it covers:
  - Show the complete Company A EIM output. Walk through one strong hypothesis in detail: where the evidence came from, how impact was sized in dollars, how the mechanism is specific enough to act on.
  - Weak hypothesis comparison: constructed on-screen as text (not a real document) — same topic, deliberately poor example. Tears it apart line by line against the strong version.
  - Three criteria for a strong hypothesis: specific behaviour + comparison group (Evidence), shows its working in dollars (Impact), root cause named + intervention specific enough to scope (Mechanism).
  - "This is what you're building toward. Your discovery machine will produce output like this."
- Learning goal: "After this lesson, you can read an EIM output and identify whether a hypothesis is strong enough to build from, or what specifically is missing."
- Duration: 5-7 min

---

### MODULE 1 — Topic 2: Find the signals that matter in your data

**Lessons in this topic:** 1

**Lesson 1: What Goes In, What Comes Out: Structuring Data for Discovery**
*Simon*

- What it is: Concept explainer with practical examples of data types and how format affects output.
- What it covers:
  - What kind of data goes into the discovery machine: company metrics, user behaviour patterns, support ticket themes, market research, competitive signals. What each type surfaces in the EIM output.
  - How to structure data so Claude can analyse it effectively. Raw data vs structured signals. Why format matters as much as content.
  - Token as currency sidebar: "Think of tokens as your AI budget. Heavy unstructured files cost more and produce less. Here's how to think about what to include."
  - The human judgment call that doesn't go away: "Claude finds patterns. You decide which patterns matter for the business."
- Learning goal: "After this lesson, you can identify which types of data belong in a discovery workflow and why Claude needs them structured, not raw."
- Duration: 6-8 min

---

### MODULE 1 — Topic 3: Build your discovery workflow step by step

**Reasoning for split into 2 lessons:** Two genuinely different formats. Lesson 1 is a file-structure orientation (before you run anything). Lesson 2 is a guided workflow run. A student stuck on file setup shouldn't have to rewatch the whole workflow demo to find the relevant 2 minutes.

**Lessons in this topic:** 2

**Lesson 1: Effective AI Project Structure**
*Simon*

- What it is: Screen-recorded walkthrough of the project file structure before running the workflow. Shows VS Code file tree alongside Claude Code.
- What it covers:
  - Three file types: CLAUDE.md (Claude's standing brief — reads at start of every session), data files (the raw material for analysis), skill files (reusable instruction sets in the /skills/ folder).
  - Context layering in practice: CLAUDE.md loads first (standing brief), then skill file (process instructions), then data files (material). Three layers, loaded in sequence.
  - "This is why output quality improves as the course progresses. You're not running better prompts — you're adding layers. The layers compound."
  - VS Code file tree check: "Every time Claude generates a file, glance at the sidebar. Five seconds. Confirm it's there, the name is right, it's in the right folder."
- Learning goal: "After this lesson, you can set up a project folder with CLAUDE.md, data files, and skill files, and you know what each type does and where it lives."
- Duration: 6-8 min

**Lesson 2: Run Your Discovery Machine on Company A Data**
*Simon*

- What it is: Guided hands-on walkthrough running the full discovery workflow at the student's own pace.
- What it covers:
  - Confirm Company A folder structure. VS Code file tree check before starting.
  - Run the EIM discovery skill on Company A data. Walk through each step live.
  - What happens inside the machine: how Claude reads data files and produces EIM hypotheses.
  - Reading the output as it comes in. Evaluate each hypothesis against the three criteria from M1 T1.
  - Non-determinism normalised: "Your output won't look identical to mine. What matters is the structure — evidence, impact, mechanism."
  - Success indicator: "Your discovery machine produced an EIM output from Company A data. At least one hypothesis with specific evidence, a dollar-value impact estimate, and an actionable mechanism."
- Learning goal: "After this lesson, you can run the discovery workflow independently and confirm your machine is producing valid EIM output."
- Duration: 7-8 min

---

### MODULE 1 — Topic 4: The pauses are where you do the work

**Lessons in this topic:** 1

**Lesson 1: The Pauses Are Where You Do the Work**
*Simon*

- What it is: Framework lesson covering the three built-in workflow pauses — what they are, why they exist, and what students do at each one. Pause 1 covered in full. Pauses 2 and 3 previewed.
- What it covers:
  - The three pauses: Pause 1 after `/eim-product-analyst` surfaces hypothesis titles. Pause 2 inside `/hypothesis-to-prd` during solution exploration. Pause 3 when writing PRD guardrails and out-of-scope sections.
  - Pause 1 in full: "Do these align with what you know?" Three-question filter: evidence credibility, conservative impact sizing, mechanism specificity. Select the one that passes all three. Tell the machine and let it write the full report.
  - Pause 2 preview: workflow presents 3-4 approaches to the problem. Student chooses direction before any requirement is written.
  - Pause 3 preview: guardrails and out-of-scope sections of the PRD encode constraints Claude can't know — engineering freezes, off-limits segments, sprint scope.
  - "The pauses are where you do the work. When the workflow stops, that's your moment."
- Learning goal: "After this lesson, you can describe the three workflow pauses, apply the three-question filter at Pause 1 to select your winning hypothesis, and know what to expect at Pauses 2 and 3."
- Duration: 6-8 min

---

### MODULE 1 — Topic 5: Prepare your company data for opportunity discovery

**Lessons in this topic:** 1

**Lesson 1: Loading Company B (Your Data, Your Discovery Machine)**
*Jac*

- What it is: Practical prep walkthrough for students' own company data.
- What it covers:
  - What Company B materials you need: business goals (one paragraph), company data files (minimum three), and your design system in any format.
  - The imperfect data example: show a real messy submission that produced a strong EIM output. "It doesn't need to be perfect. It needs to be real."
  - For students without a design system: the instructor-provided Figma DS and the Design System Generate skill are both available. Neither is a consolation option.
  - How to load your Company B data into the workflow. Folder location, file format, CLAUDE.md update. VS Code file tree check after each file.
  - "When your discovery machine runs on your company's data, the output stops being a course exercise. That's the moment."
- Learning goal: "After this lesson, you have your Company B materials prepared and loaded into your project folder, ready to run the discovery workflow."
- Duration: 6-8 min

---

**✏️ PROJECT: Build your product discovery machine** (due Thu 5/21)
*Confirmed as-is from course plan.*

---

## 💬 OFFICE HOUR (between Live 1 and Live 2)
**WED 5/20 8:00 AM (GMT+10)**
*Confirmed as-is from course plan.*

---

## 🗓️ LIVE SESSION 2: Turn business opportunities into an on-brand product
**FRI 5/22 7:30 AM (GMT+10)**
*Structure confirmed as-is from course plan. No lesson detail needed.*

---

## MODULE 2: THE AI-NATIVE BUILD LOOP

You have a validated EIM hypothesis. This module is where you turn it into something real. You'll write the spec that drives every build decision, connect your design system so output looks like your brand, and run the build loop that keeps everything on track. By the end: a working, on-brand prototype.

---

### MODULE 2 — Topic 1: Write a product spec that AI can build from

**Reasoning for split into 2 lessons:** PRD content and CLAUDE.md content are genuinely different documents with different jobs. Combining them risks students conflating the two. Each deserves its own lesson so the distinction is unambiguous before the build starts.

**Lessons in this topic:** 2

**Lesson 1: Write a PRD That Claude Can Actually Build From**
*Simon*

- What it is: Framework walkthrough for writing a PRD from an EIM hypothesis.
- What it covers:
  - The course PRD format is the recommended structure — built to align directly with EIM. Students with an existing org format can keep theirs, but whatever format they use must include the EIM story: evidence of the problem, impact of solving it, mechanism being built. References prd-format.md as the reusable template.
  - What goes in a PRD: problem statement (from Evidence), hypothesis (from Mechanism), success metrics (from Impact), scope, user stories, guardrails, and what's explicitly not in scope.
  - What stays out: implementation details, tool preferences, visual direction. Those belong in CLAUDE.md and the design system file.
  - User stories as acceptance criteria: "These become your testing checklist in the build loop."
  - Walk through the Company A PRD live, section by section.
  - "If the PRD is vague, the prototype is vague. The work you do here determines the quality of everything Claude builds."
- Learning goal: "After this lesson, you can write a complete PRD from your EIM hypothesis with all required sections, and you know what content belongs in a PRD versus what doesn't."
- Duration: 7-8 min

**Lesson 2: CLAUDE.md — The Document That Governs How Claude Behaves**
*Simon*

- What it is: Walkthrough explaining what CLAUDE.md is, what goes in it, and how it works alongside the PRD.
- What it covers:
  - The PRD vs CLAUDE.md distinction made concrete: "The PRD says what we're building and why. CLAUDE.md says how Claude should behave while building it. Two documents, two jobs, never confused."
  - What goes in CLAUDE.md: project context, how to work (formatting rules, when to ask vs proceed, how to communicate changes), and hard rules (what never to do without permission).
  - Walk through the Company A CLAUDE.md alongside its PRD. Show them working as a pair.
  - What happens without a CLAUDE.md: Claude defaults to its training data. Fine for generic builds. Not fine when building on-brand with a specific scope.
- Learning goal: "After this lesson, you can write a CLAUDE.md that governs Claude's behaviour during the build, and you understand how it works in tandem with your PRD."
- Duration: 6-7 min

---

### MODULE 2 — Topic 2: *(Vacant — previously "Three Decisions Claude Can't Make For You", content moved to M1 T4)*

---

### MODULE 2 — Topic 3: Make AI design on-brand, not generic

**Reasoning for split into one lesson per path + design judgment lesson:** Each path is a different setup workflow with its own steps. A student using Path 4 (website extraction) shouldn't have to read through Figma MCP setup. The design judgment lesson is distinct from all four paths — it covers directing AI toward an intended visual outcome, which is a creative skill no path lesson addresses.

**Lessons in this topic:** 5

**Lesson 1: Path 1 — Load Your Design System as a Markdown File (Core Path)**
*Jac*

- What it is: Step-by-step setup walkthrough for the core on-brand path. Works for all students regardless of tools.
- What it covers:
  - Why generic AI output happens: Claude defaults to its training data when it doesn't know your brand. The fix is loading your brand before you build.
  - How to create a design system markdown file: what to include (colors, typography, spacing, component names, brand voice), what format works, how to structure it so Claude reads it correctly.
  - Load the DS markdown file into your project folder. VS Code file tree check immediately after.
  - Verify Claude knows your brand: the checkpoint prompt. "What are my brand colors? Describe my typography system." If Claude answers correctly from your file, you're ready.
  - Success indicator: "Claude described your brand accurately from your markdown file. You're ready to build."
- Learning goal: "After this lesson, you can create a design system markdown file, load it into Claude Code, and verify Claude knows your brand before building."
- Duration: 7-8 min

**Lesson 2: Path 2 — Extract Real Tokens from Figma with Figma MCP**
*Jac*

- What it is: Step-by-step setup walkthrough for designers who have an existing Figma design system.
- What it covers:
  - What Figma MCP does: extracts real design tokens (colors, type scales, spacing) directly from your Figma file into a format Claude can read.
  - Honest tradeoffs upfront: more precise token data, but higher setup friction and higher token consumption per session.
  - Step-by-step: connect Figma MCP, point it at your Figma DS file, run the extraction, check the output in your project folder.
  - VS Code file tree check after extraction. Verify the tokens landed where expected.
  - Success indicator: "Your design tokens are in your project folder and Claude can reference them by name."
- Learning goal: "After this lesson, you can connect Figma MCP to your design system and extract real design tokens into your Claude Code project."
- Duration: 7-8 min

**Lesson 3: Path 3 — Use Claude Design to Auto-Apply Your Brand**
*Jac*

- What it is: Step-by-step setup walkthrough for designers, PMs, and founders who want the fastest brand setup with visual exploration built in.
- What it covers:
  - What Claude Design does: reads your codebase and design files, builds your design system automatically, and applies your brand during prototyping.
  - Honest tradeoffs: fastest setup, best for visual exploration. Currently in research preview, so behaviour may vary.
  - Step-by-step: open Claude Design, connect your project, upload or reference your design files, let it build your DS.
  - The visual exploration advantage: "This is the closest thing to your Figma canvas inside an AI tool. You can see screens, not just code."
  - Success indicator: "Claude Design rendered a screen that matches your brand. You didn't set up tokens manually."
- Learning goal: "After this lesson, you can connect Claude Design to your project and confirm it's auto-applying your brand to prototyped screens."
- Duration: 7-8 min

**Lesson 4: Path 4 — Extract Your Brand from Your Website (No Figma Required)**
*Jac*

- What it is: Step-by-step setup walkthrough for students who don't have Figma or a formal design system.
- What it covers:
  - What website extraction does: points Claude at your live website URL and extracts brand signals (dominant colors, typography, layout patterns) into a working DS reference.
  - Honest tradeoffs: no Figma required, fast to set up, less precise than token extraction. A strong starting point, not a final design system.
  - Step-by-step: the extraction prompt, how to review the output, how to fill gaps manually where the extraction was imprecise.
  - "This is your 80% solution in 20% of the time. Use it to start. Refine it as you build."
  - Success indicator: "Claude produced a brand reference document from your URL that captures your core visual language."
- Learning goal: "After this lesson, you can extract brand signals from your website into a Claude-readable design system reference, with no Figma account needed."
- Duration: 6-7 min

**Lesson 5: Directing AI Toward Your Unique Design Ideas**
*Jac*

- What it is: Concept and practice lesson on how to feed design inspiration into AI and direct it toward a specific visual outcome rather than accepting its first response.
- What it covers:
  - How to collect and organise inspiration: the tools Jac uses (Pinterest, Mobbin, screenshots), how she turns visual references into written direction Claude can act on.
  - Feeding inspiration into AI: how to describe visual qualities in language Claude responds to. Not "make it look like Apple." Instead: specific qualities (restraint, white space, typographic hierarchy) named in words.
  - When to diverge: early in the design direction phase, before anything is locked. Give Claude three different directions and see what lands. This is the exploration phase.
  - When to converge: once a direction is chosen, lock the visual language in the DS file and stop exploring. Every build decision from here follows that direction.
  - "If it looks like anyone could have made it, it's not done. Directing AI toward your intended outcome is the design skill. The tool is just fast."
- Learning goal: "After this lesson, you can feed visual inspiration into Claude as written direction, know when to diverge versus converge, and produce on-brand output that reflects your design judgment rather than Claude's defaults."
- Duration: 7-8 min

---

### MODULE 2 — Topic 4: The AI-native build loop

**Note on revision:** Reframed from a workflow overview into a mindset shift about iteration and evaluation. Students have already watched the end-to-end workflow in Module 1 and Live Session 2. What they need here is the mental model that building with AI is non-linear, that evaluation is an active skill at each loop, and that "done" in a feedback loop is different from "done" in a traditional handoff process.

**Lessons in this topic:** 2

**Lesson 1: It's a Loop, Not a Line: The Mindset Shift That Changes How You Build**
*Jac*

- What it is: Concept explainer reframing the build workflow from a linear process to a feedback loop.
- What it covers:
  - The core mindset shift: traditional design workflows move in one direction (brief, design, review, ship). AI-native workflows loop. "Generate something, evaluate it, loop back. That's not inefficiency. That's how you get to quality."
  - The Generate → Evaluate → Verify → Lock → Save → Confirm rhythm introduced as a named pattern. What each step means and why the sequence matters.
  - "Spec drives everything": when output and expectations disagree, the first question is always "does the spec need updating, or does the build need correcting?"
  - Spec mutations are announced, not silent: "If Claude suggests a change to your PRD or CLAUDE.md, that's a decision you make consciously. Not a background update."
- Learning goal: "After this lesson, you understand why AI-native building is a feedback loop rather than a linear process, and you can name and describe each step of the Generate → Evaluate → Verify → Lock → Save → Confirm rhythm."
- Duration: 6-7 min

**Lesson 2: Evaluating Output and Running Claude Audits Claude**
*Jac*

- What it is: Hands-on walkthrough of how to evaluate build output at each loop iteration, including the Claude audits Claude verification pattern.
- What it covers:
  - What "evaluate" means at each loop: check in browser (does it render?), verify against DS (does it match the brand?), check against PRD user stories (does it do what the spec said?).
  - Claude audits Claude introduced as a named pattern: "Claude checks its output against your spec. You check the visuals. Together you're the QA team."
  - What to do when the loop reveals a problem: determine whether the issue is in the build or the spec. Update the right document. Run the loop again.
  - VS Code file tree check as part of every loop: "After every file generation, glance at the sidebar. Confirm the file landed where you expect."
  - "The loop doesn't stop when something looks good. It stops when it passes all three checks: browser, DS, and spec."
- Learning goal: "After this lesson, you can run a full evaluation loop on a built component, use Claude audits Claude to verify spec compliance, and know which document to update when the loop reveals a problem."
- Duration: 7-8 min

---

### MODULE 2 — Topic 5: GitHub: Save Your Work and Track What Changed

**Lessons in this topic:** 1

**Lesson 1: GitHub for Builders: What, Why, and How**
*Jac*

- What it is: Concept and setup walkthrough for GitHub, framed for designers and PMs with no prior git experience.
- What it covers:
  - What GitHub is: "It's version control for your project. Think of it like naming Figma frames with dates and descriptions, except it captures the entire project state, not just one screen."
  - Why it matters in an AI-native workflow: "Claude Code makes changes fast. GitHub means you can always go back to the last version that worked. Without it, you're building on sand."
  - The three things you'll actually do: commit (save a named version), push (sync it to the cloud), pull (get the latest version when working across devices).
  - Step-by-step: create a GitHub repo for your velocity-projects folder, make your first commit, push it. Show the repo in the browser.
  - Success indicator: "Your project appears in your GitHub repo with your first commit message. You have a URL."
- Learning goal: "After this lesson, you can commit and push your project to GitHub, understand what a commit does, and recover a previous version if a build goes wrong."
- Duration: 7-8 min

---

**✏️ PROJECT: Build an AI-native, on-brand prototype** (due Sun 5/24)
*Confirmed as-is from course plan.*

---

## 💬 OFFICE HOUR (between Live 2 and Live 3)
**SAT 5/23 8:00 AM (GMT+10)**
*Confirmed as-is from course plan.*

---

## 🗓️ LIVE SESSION 3: Connect what you built to why it matters
**MON 5/25 7:30 AM (GMT+10)**
*Structure confirmed as-is from course plan. No lesson detail needed.*

---

## MODULE 3: CONNECT YOUR DECISIONS TO BUSINESS OUTCOMES

You built a working prototype. Now you connect it to business reality. This module covers the framing that makes an initiative feel inevitable, the language that lands in an executive meeting, and the skill system that makes everything you've built reusable on any project at any company.

---

### MODULE 3 — Topic 1: Why this, why now

**Lessons in this topic:** 1

**Lesson 1: The "Why This, Why Now" Frame That Gets Initiatives Funded**
*Jac*

- What it is: Framework walkthrough with a fill-in template applied to Company A and then to student context.
- What it covers:
  - Why the framing matters: "Initiatives don't fail because the product is bad. They fail because the timing argument is missing or the cost of inaction is invisible to the people making the decision."
  - "Why this" = the mechanism is real, specific, and costly right now. "Why now" = the window is closing, the data is fresh, the gap is measurable today.
  - The template: "[Company] is losing [$X] because [mechanism]. We can address this with [solution] that costs [investment] and returns [impact]. The data window is [timeframe]." Walk through Company A version live.
  - Students write their own "why this, why now" using their Company B EIM hypothesis. Guided practice within the lesson.
- Learning goal: "After this lesson, you can write a 'why this, why now' statement for your own prototype using the template and your EIM hypothesis."
- Duration: 6-8 min

---

### MODULE 3 — Topic 2: Speak the language that gets initiatives funded

**Lessons in this topic:** 1

**Lesson 1: Translating Product Solutions Into Executive Language**
*Jac*

- What it is: Translation framework with before/after examples for each pattern.
- What it covers:
  - Why design language loses rooms: "User friction," "design consistency," "better UX" describe experiences, not outcomes. Executives make decisions about outcomes.
  - Three translation patterns with worked examples:
    - The cost of doing nothing: "Continuing without this costs [$X] per quarter in [metric]."
    - The return on doing this: "This initiative returns [$X] within [timeframe] by improving [metric]."
    - The risk of doing something else: "Investing in [alternative] instead means leaving [specific gap] unaddressed while [competitive pressure builds]."
  - Before/after translation pairs on screen: "user friction" → "conversion drop-off at [step], costing [X] customers per month." "Design consistency" → "brand trust that reduces churn by [X]." "Better UX" → "reduced support costs of [$X] annually."
  - "The translation isn't spin. It's the same reality described in a language that maps to how decisions get made."
- Learning goal: "After this lesson, you can translate three design observations from your prototype into executive-ready business language using the three patterns."
- Duration: 6-8 min

---

### MODULE 3 — Topic 3: Create AI skills that encode your expertise

**Lessons in this topic:** 1

**Lesson 1: Build Your First Skill File (And Run It)**
*Jac*

- What it is: Hands-on build walkthrough for creating a skill file from a workflow students have already repeated.
- What it covers:
  - What a skill file is and why it exists: "Every time you direct Claude through the same multi-step process, you're doing manual work that a skill file can do for you. The trigger is repetition."
  - Anatomy of a skill .md file: role and context, step-by-step instructions, output format, guardrails. Walk through a real example built from a workflow used earlier in the course.
  - Students create their own skill from a repeated workflow. Step-by-step build, VS Code file tree check after.
  - Run the skill. Verify Claude followed the process without needing step-by-step direction.
  - Success indicator: "You created a skill. You ran it. Claude followed your process without you directing every step."
  - "Skills get commoditised. Your judgment about when to run them, on what data, toward what goal doesn't. That stays with you."
- Learning goal: "After this lesson, you can write a skill .md file for a repeated workflow, run it in Claude Code, and verify it produces consistent output."
- Duration: 7-8 min

---

### MODULE 3 — Topic 4: Combine skills into a system that compounds

**Lessons in this topic:** 1

**Lesson 1: From Skills to a System (How the Layers Start Compounding)**
*Jac*

- What it is: Concept explainer with a visual map of how skills, context files, and CLAUDE.md connect into a system.
- What it covers:
  - Why a single skill is not the end goal: "A skill alone tells Claude what to do. A skill connected to your design system, your EIM analysis, and your CLAUDE.md tells Claude who you are, what you're building, and how to work. That's a system."
  - The compounding structure shown visually: skills + context files + CLAUDE.md = a system that gets more capable as layers are added.
  - "A great skill file doesn't just tell Claude what to build. It tells Claude what questions to ask first." Walk through an example.
  - The Company A to Company B transfer as the compounding demonstration: "Company A taught you the workflow. Company B is where it compounds. Same system, your data, your product, your outcomes."
  - Students map their own skill and context layer connections. VS Code file tree check: all files in place.
- Learning goal: "After this lesson, you can describe how your skills, context files, and CLAUDE.md connect as a system, and identify which layer is missing or weak in your own project."
- Duration: 6-7 min

---

**✏️ PROJECT: Connect your prototype to business outcomes** (due Thu 5/28)
*Confirmed as-is from course plan.*

---

## MODULE 4: PRESENT A BUSINESS CASE THAT GETS FUNDED

Your prototype is built. Your narrative is grounded in EIM. This module gives it the structure that lands in a boardroom, turns it into a polished presentation, and sets you up to take this work back to your organisation after Demo Day.

---

### MODULE 4 — Topic 1: Structure a winning business case

**Reasoning for split into 2 lessons:** The business case structure is conceptual (what goes where and why). The template walkthrough is applied practice (students populating it with their own EIM data). Separating them prevents cognitive overload and lets the template lesson stand alone as a reference students return to.

**Lessons in this topic:** 2

**Lesson 1: The Business Case Structure (Your EIM Already Built Most of It)**
*Jac*

- What it is: Framework walkthrough mapping EIM content to the business case structure.
- What it covers:
  - The complete business case structure: Executive summary, Problem (from Evidence), Opportunity (from Impact), Solution (from Mechanism + Prototype), Investment required, Expected return, Timeline, Risk and mitigation.
  - The product narrative as the opening frame: "We found [evidence]. It's worth [impact]. The root cause is [mechanism]. Here's the prototype that addresses it." This is the EIM story in business case language.
  - How EIM maps to each business case section, shown side by side. "You already have this content. This lesson gives it the structure that lands in a boardroom."
- Learning goal: "After this lesson, you can describe the complete business case structure and explain which EIM content maps to each section."
- Duration: 6-7 min

**Lesson 2: Populate the Template With Your Own EIM Data**
*Jac*

- What it is: Guided template walkthrough where students build their own business case document.
- What it covers:
  - The fill-in template introduced section by section. Walk through Company A version live.
  - Common places students get stuck: how to write an executive summary in two sentences, how to frame investment when the cost is time not money, how to make the risk section honest without undermining the case.
  - Students populate their own template using Company B EIM data during or immediately after the lesson.
  - Success indicator: "You have a complete business case document. Every section is filled in with your own data. Read it aloud. If you'd fund it, it's ready."
- Learning goal: "After this lesson, you have a complete business case document populated with your Company B EIM data, structured and ready to present."
- Duration: 7-8 min

---

### MODULE 4 — Topic 2: Taking your work back to your organisation

**Lessons in this topic:** 1

**Lesson 1: Taking Your Work Back to Your Organisation**
*Simon*

- What it is: Short closing frame lesson. One question, one emphasis shift. Prepares students to present their work to real stakeholders after Demo Day.
- What it covers:
  - Before presenting to any real stakeholder, ask one question: "What is this person optimising for?" — speed and learning, impact on a metric they own, or risk reduction.
  - The product narrative from M4 T1 is the opening sentence. Reorder it to lead with what the audience optimises for. Evidence, impact, and mechanism are all still there — the emphasis shifts, not the content.
  - "The EIM framework gave you the evidence, the impact estimate, and the mechanism. Your judgment about which part to lead with — that's what makes the presentation land."
  - Framed explicitly as post-Demo-Day: "When you take this back to your company, here's the one question to ask before you walk in."
- Learning goal: "After this lesson, you can adapt your business case opening for any stakeholder by identifying what they're optimising for and leading with that."
- Duration: 4-5 min

---

### MODULE 4 — Topic 3: Generate an on-brand presentation with Claude Design

**Lessons in this topic:** 1

**Lesson 1: From EIM Narrative to Demo Day Presentation in Claude Design**
*Jac*

- What it is: Screen-recorded walkthrough building a complete presentation from the EIM narrative.
- What it covers:
  - Feed EIM narrative and business case into Claude Design. Brand context already loaded from Module 2.
  - Refine messaging and structure through conversation: what to ask Claude to sharpen, what to keep, what to cut.
  - Visual consistency check: does it look like your company made it or like a generic AI deck? Apply the same DS fidelity check from Module 2, now to slides.
  - Export in shareable format ready for Demo Day.
  - Success indicator: "Your presentation looks like your company made it, not like AI made it."
- Learning goal: "After this lesson, you can generate your Demo Day presentation from your EIM narrative in Claude Design and verify it matches your brand."
- Duration: 7-8 min

---

### MODULE 4 — Topic 4: *(Vacant — "Deploy to Netlify" removed. Students demo from HTML file or Figma link on Demo Day. Netlify documented in README as post-course option for sharing prototypes with stakeholders.)*

---

### MODULE 4 — Topic 5: Influence with C.L.E.A.R framework
*Jac*

**This lesson already exists. No new content needed. Slot into the Module 4 sequence as-is.**

---

**✏️ PROJECT: Your Capstone** (submit before Demo Day)
*Confirmed as-is from course plan.*

---

## 💬 OFFICE HOUR (between Live 3 and Demo Day)
**WED 5/27 8:00 AM (GMT+10)**
*Confirmed as-is from course plan.*

---

## 👥 PEER REVIEW (before Demo Day)
*Confirmed as-is from course plan.*

---

## 🗓️ LIVE SESSION 4: Where AI product building is going
**FRI 5/29 8:00 AM (GMT+10)**
*Structure confirmed as-is from course plan. No lesson detail needed.*

---

## 🗓️ LIVE SESSION 5: AI Product Showcase (Demo Day)
**SAT 5/30 8:00 AM (GMT+10)**
*Structure confirmed as-is from course plan. No lesson detail needed.*

---

## SUMMARY TABLE

| Module | Topics | Total Lessons | Estimated Duration |
|---|---|---|---|
| Pre-course | 4 | 5 | 28-37 min |
| Module 1 | 5 | 6 | 38-49 min |
| Module 2 | 4 active + 1 vacant | 10 | 62-75 min |
| Module 3 | 4 | 4 | 25-31 min |
| Module 4 | 3 active + 1 vacant + 1 existing | 5 (inc. existing C.L.E.A.R) | 24-30 min |
| **Total** | **20 active** | **30 + existing C.L.E.A.R** | **~177-222 min async (~3 hrs)** |

---

## FLAGS FOR JAC

**1. M2 T2 slot is vacant.** "Three Decisions Claude Can't Make For You" was cut — content absorbed into M1 T4. The slot can be left vacant (Module 2 is still the heaviest module) or filled with new content if something is missing.

**2. M4 T4 slot is vacant.** Netlify deploy removed. Students demo from HTML file or Figma link. Documented in README as a post-course option. If you feel a "what comes after Demo Day" logistics lesson belongs here, this is the slot.

**3. M2 T3 is still 5 lessons.** Recommend confirming: are all four paths required viewing, or should students pick the one that applies (with the design judgment lesson as the required watch)?

**4. "Finder check" references in Jac's lessons.** All Simon scripts updated to "VS Code file tree check." Jac's lessons (M1 T5, M2 T3 L1–L4, M3 T3, M3 T4) still reference "Finder check" in some places — update when scripting those lessons.

**5. C.L.E.A.R marked as existing.** Confirm it's ready to slot in at M4 T5 and that the position is right.
