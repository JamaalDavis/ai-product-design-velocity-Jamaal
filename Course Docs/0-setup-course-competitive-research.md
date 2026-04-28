# Competitive Research Notes
## Claude Code for Designers — Rupa's Course vs Ours
*Documented: April 3, 2026 | Jac Ding + Claude*
*Last updated: April 3, 2026 — outstanding questions updated*

---

## Our Course Positioning

**Name:** AI Product & Design Velocity
**Instructors:** Jacalin Ding + Simon Hilton
**UVP:** Minimal tools. Max impact.
**Target student:** Designers, PMs, and founders overwhelmed by tools who want to build real things grounded in evidence and business outcomes
**Core framework:** EIM (Evidence, Impact, Mechanism) — Simon's IP
**Core tool:** Claude Code (via Claude Desktop app — no Terminal required)
**Price:** $1,299
**Dates:** May 17–30, 2026 (2 weeks, 4 live sessions + 1 bonus)
**Structure:** Company A = instructor demo | Company B = student capstone
**Delivery:** Live cohort on Maven

---

## Jac as Student Persona

*Jac went through Rupa's course as a complete Terminal newbie. Her reactions, frustrations, and insights are the most direct signal available for designing our pre-course experience. Treat every observation below as primary research.*

**Who Jac represents:**
- 18 years design leadership experience
- Zero Terminal experience
- High standards — notices AI-generated content immediately
- ADHD tendencies — walls of text cause her to disengage
- Learns by doing, not reading
- Gets anxious when she can't tell if something is working
- Wants to feel in control, not dependent on tech she doesn't understand

**Key quotes from the session:**

> "I have no idea if it's running, frozen, or thinking. How do I know?"

> "I didn't even read this lesson. It looked too overwhelming."

> "I always have a fear that I didn't do everything and halfway through the course I'd hit a wall."

> "Chatting to terminal is mentally draining."

> "Teach only what's relevant to the task at hand. Everything else is noise. Unless it's funny."

> "I want students to feel capable and superpowered. They are in control. Almost self-guided."

> "If I don't have to teach students to use Terminal, I'd rather not."

**What Jac needed that she didn't get:**
- A clear picture of the end state before any setup began
- "You're done when you see X" success confirmations at every step
- One path — no choices, no optional branches mid-lesson
- Emotional reassurance that confusion is normal
- Short videos over long text, always
- Light mode (dark mode screenshots are inaccessible to her)

---

## Our Course Design Principles

1. **Emotional arc first.** Every lesson moves students from anxious → capable → excited. If content doesn't serve that arc, cut it.
2. **Just-in-time learning.** Teach only what's needed for the current task. Everything else is noise.
3. **Students feel superpowered.** They direct. Claude builds. They stay in control.
4. **Confidence through small wins.** First lesson gives a win before asking for effort.
5. **Copy-paste prompts as scaffolding.** Students learn by doing in their own Claude interface.
6. **No Terminal unless absolutely necessary.** Use Claude Desktop app Code tab instead. Terminal = optional video only.
7. **One path, no detours.** Pick an approach and commit. Don't teach two ways to do the same thing.
8. **Show the end state first.** Students need to see what they'll build before they care about how.
9. **Success indicators are explicit.** After every step: "You're done when you see X."
10. **VS Code and GitHub are optional infrastructure.** Introduce only when directly needed. Never upfront.

**The student mental model we're designing for:**
*"I'm the creative director. Claude is my builder. I stay in control."*

---

## Key Differentiator vs Rupa's Course

| | Rupa's Course | Our Course |
|---|---|---|
| **Interface** | Terminal (CLI) | Claude Desktop App |
| **Setup friction** | High — Brew, gh CLI, auth flows | Low — download app, select folder |
| **Pedagogy** | Understand first, then do | Do first, understand as needed |
| **Content style** | AI-produced walls of text | Short videos + copy-paste prompts |
| **Emotional design** | Anxiety-inducing | Confidence-building |
| **Tool philosophy** | Many tools explained upfront | One tool, introduced when relevant |
| **Student type** | Comfortable with tech | Overwhelmed by tools |
| **VS Code** | Recommended from lesson 1 | Introduced only if needed |
| **GitHub** | Required in Week 1 setup | Deferred — introduced when needed |
| **Terminal** | Core throughout | Optional explainer video only |

**Biggest differentiator:** She teaches Terminal. We teach the Claude Desktop app. Same outcome. Completely different experience. Our students may never need to touch Terminal.

---

## Lesson-by-Lesson Analysis — Rupa's Course

### Pre-Course / Lesson 1 — Project Intro
**What she does:** Downloads project brief, no context on why
**What works:** Central project concept (Clean Shopper) gives learners something to build toward
**What's missing:**
- No "why this project?" rationale
- No preview of end state — no excitement, no trailer moment
- Download is just a link with no preview
- "You can build your own project" creates decision fatigue before they've started

**Jac's reaction:** Noticed immediately there was no reason to care about the project yet.

**For our course:** Project reveal should feel like a trailer. Show the finished thing. Make them want it before anything else.

---

### Pre-Course / Lesson 2 — Environment Setup
**What she does:** Install Node.js, Git, GitHub, Claude Code via Terminal
**What works:** Analogy of lamp/electricity for Node.js is actually good (but buried in 400 words)
**What's missing:**
- No "here's what success looks like" screenshot per step
- Happy path only in video, text covers every edge case = anxiety
- "Less than 30 to complete" — 30 what? Sentence unfinished
- No visual breaks — impossible for ADHD learners
- Terminal is deeply unfamiliar for creative audiences

**Jac's reaction:** Got stuck multiple times before even starting to build. "The instructions are too long, not easy for ADHD visual learners. Clearly AI produced. Lack of excitement. Lack of reasoning for why these tools. Tools overload without connection to each other."

**Three terminal states Jac needed explained:**
- Spinning = thinking/loading → wait
- "Running…" = executing → don't touch anything
- New `>` prompt = done, your turn

**For our course:** Each step = one Loom video (happy path only, 60 seconds max) + 3 bullet points. Success indicator after every step.

---

### Pre-Course / Lesson 3 — Claude's Product Ecosystem
**What she does:** 2,500-word explanation of Claude Chat, Claude Code, Claude in Chrome, Cowork
**What works:** Decision framework is clear — "Chat for thinking, Code for building"
**What's missing:**
- $500M ARR stat feels like a pitch, not teaching
- Cowork and Chrome are distractions — students don't need them yet
- Subscription info belongs pre-enrolment, not lesson 3
- No visuals — a simple table would replace 800 words

**Jac's reaction:** Didn't read it. Too overwhelming.

**The whole lesson in 3 lines:**
- Claude Code = your builder (you talk, it builds)
- VS Code = your window into the project *(may not even be needed for our course)*
- GitHub = your auto-save in the cloud

**For our course:** 60-second video, 3 slides. Done.

---

### Week 1 / Lesson 1 — Project Directory Structure
**What she does:** Explains folder structure, naming conventions, GitHub concepts
**What works:** Quick reference table (what goes where) is excellent — that's the whole lesson in one image
**What's missing:**
- Pure reading lesson with no action
- All front-loaded knowledge that could be delivered just-in-time

**For our course:** Skip as standalone lesson. Show folder structure in context when students first build.

---

### Week 1 / Lesson 2 — Setting Up the Clean Shopper Project
**What she does:** Manual Terminal setup → delete it → redo with Claude Code
**What works:** "Delete and rebuild" exercise is clever — shows contrast viscerally
**Problems:**
- Hidden dependency: GitHub CLI marked "optional" but required here
- Brew not installed = students hit wall through no fault of their own
- Dark mode screenshots inaccessible
- Every Terminal prompt = unreadable wall of green text
- Teaches Terminal AND Claude Code for same task — contradicts UVP

**Hidden dependencies Jac hit in sequence:**
1. GitHub CLI (gh) — not pre-installed on Mac
2. Homebrew (brew) — not pre-installed on Mac
3. GitHub auth flow — browser + terminal dance
4. File not found in Downloads (folder name different from expected)

**Total time lost:** ~45 minutes on infrastructure before touching the actual project.

**Jac's reaction:** "This is exactly the moment where students will quit. They did everything right and hit a wall through no fault of their own."

**For our course:**
- Claude Desktop app → Code tab → Select folder → describe what to build → done
- GitHub deferred until students actually need to deploy something
- No Terminal. Full stop.

---

### Pre-Course / Final Lesson — Pre-Course Checklist
**What she does:** Checklist of environment and project setup items before Session 1
**What works:** Concept is right — a checklist before first live session is genuinely useful
**What's missing:**
- No success indicators — "gh auth status confirms authentication" means nothing to a newcomer
- Students don't know what correct output looks like, can't self-verify
- Creates anxiety rather than reassurance

**Jac's reaction:** "I always have a fear that I didn't do everything and halfway through the course I'd hit a wall."

**For our course — checklist format:**

| What to check | How to check | You're done when you see |
|---|---|---|
| Claude Desktop installed | Open the app | "Welcome back [name]" |
| Code tab working | Click Code tab | "Select folder" button visible |
| Project folder connected | Click Select folder | Your project name at top |

Three columns. No Terminal commands. Explicit success state for every item.

---

## The "Claude Desktop App" Discovery

**This changes everything for our course.**

The Claude Desktop app has a Code tab with a "Select folder" button. Students can:
1. Open Claude Desktop
2. Click Code tab
3. Click Select folder → point to project folder
4. Type what they want in plain English
5. Watch it build

No Terminal. No Homebrew. No GitHub CLI. No auth flows.

**Our setup becomes:**
1. Download Claude Desktop app ✅
2. Click Code tab ✅
3. Click Select folder ✅
4. Start building ✅

10-minute setup vs her 2-hour obstacle course.

**Note on VS Code:** Still unclear whether students need it at all. Don't include in setup. Introduce only if a specific lesson requires it — and only then with one sentence explaining why, right now, for this task.

---

## Our Course Structure — AI Product & Design Velocity

### Confirmed structure (from landing page):
- **2 weeks**, May 17–30
- **4 live sessions** + 1 bonus fireside
- **Company A** = instructor demo dataset
- **Company B** = student capstone dataset
- **End state:** Working discovery system + on-brand prototype + defended product narrative + full prompt library

### What Company B includes (student capstone):
- Business goals and strategic direction
- Company data
- Design system
- Students work with this throughout Week 1 and 2

### Async content (from landing page — 1–2 hrs/week):
- Full lesson breakdown in AIProductVelocity_landing-page-v4-live.md
- 15 lessons across 4 modules
- Covers EIM framework, discovery, PRD, prototyping, narrative, deployment prep

### Deployment decision:
- **Not confirmed** — may cap at "testable prototype" stage
- Deploy as bonus lesson if included
- Decision criteria: what generates the most wow moment for students?

### Tool stack (confirmed minimal):
- **Claude Code** via Claude Desktop app — primary build tool
- **Figma MCP** — design system connection
- That's it. No Terminal required for core curriculum.

### Week structure hypothesis:

**Pre-Course (Emotional outcome: excited and ready)**
- Video 1: "Here's what you'll build" — show finished Company A output, make them want it
- Video 2: Setup in 10 minutes — Claude Desktop app only, Jac's voice, light mode
- Checklist: 3-column format with explicit success indicators, no Terminal commands

**Week 1: Discovery + Build (Sessions 1–2)**
- EIM framework introduction — why evidence matters before building
- Build discovery system with Company A data (instructor demo)
- Students run same system on Company B (their capstone)
- Shape product direction + connect to design system via Figma MCP
- Prototype begins

**Week 2: Narrative + Defense (Sessions 3–4)**
- Structure product narrative connected to business outcomes
- Defend decisions live — get challenged before the real room
- Assemble final presentation
- Showcase / Demo Day

---

## Our Landing Page — Strengths and Flags

### Strengths:
- EIM framework is real IP — proprietary, defensible, backed by Simon's books
- "95% of AI products fail" stat does heavy lifting immediately
- "Who this is NOT for" section is confident and filters well
- Prompt library + workflow files as a kept artifact is compelling
- Two instructors = design communication credibility + technical product credibility

### Flags to fix before launch:
- FAQ says "willingness to open VS Code" — may not be needed. Revisit this line.
- Duplicate refund policy question in FAQ
- Course dates inconsistency: Week 1 header says May 18 but Session 1 is May 17
- Guest speaker still listed as "Industry Leader" placeholder
- No testimonials section yet
- "No coding required" should be more prominent — currently buried in FAQ

---

## What Rupa Does Well (Give Credit)

- Clean Shopper as central project is solid pedagogical design
- "Delete it, rebuild with Claude Code" contrast exercise is genuinely smart
- Quick reference table (what goes where) is excellent
- Warning about exiting Claude Code before verifying is well explained
- Some analogies land when you find them (lamp/electricity, streaming app login)

---

## Content Style Notes

**Her content:**
- AI-produced walls of text
- No visual breaks
- Happy path in video, edge cases in text = anxiety split
- Dark mode screenshots — inaccessible
- Screenshots too small to read

**Our content:**
- Short Loom videos for anything procedural (60–90 seconds, happy path only, light mode)
- Copy-paste prompts students use in their own Claude interface
- Explicit "you're done when you see X" after every step
- One action per screen
- Terminal = optional video only, clearly labelled

---

## All Questions — Resolved

| Question | Answer |
|---|---|
| Course length | 2 weeks confirmed |
| Hero project | Company A (demo) + Company B (student capstone) |
| Price | $1,299 |
| Live vs async | Live cohort on Maven, sessions recorded |
| GitHub | Defer — introduce when needed, possibly bonus only |
| Terminal | Optional video only — not core curriculum |
| VS Code | Unknown — don't include in setup, add only if a lesson requires it |
| Deployment | Undecided — testable prototype as end state, deploy as potential bonus |
| Company B contents | Biz goals, strategic direction, data, design system |
| Async content detail | Full lesson list in landing page md file |
| Figma MCP workflow | Figma MCP + Claude Code — no Terminal needed |
| Wow moment | TBC — live URL vs working browser prototype |
| GitHub needed? | TBC — depends on deployment decision |

---

*Last updated: April 3, 2026*
*Next session: Continue through Rupa's remaining Week 1 lessons. Start fresh chat, paste this doc to reload context.*
*Reference file: AIProductVelocity_landing-page-v4-live.md for full async lesson breakdown*
