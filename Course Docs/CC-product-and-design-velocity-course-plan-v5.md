# CC Product and Design Velocity Course Plan v5
## Final structure
**Date:** April 19, 2026
**Status:** Structure finalised. Pending lesson detail pass (what it is, what it covers, learning goal per topic).
**Changes from v4.1:** See CHANGELOG at end of document

---

## HOW THIS PLAN IS STRUCTURED

Topics are the student-facing units. Each topic can contain one or more bite-sized lesson videos. This allows modular course building and prevents any single lesson from getting too long.

Topic naming principle: speak to what audiences want, reframe to avoid revealing proprietary teaching methods to competitors.

Lesson detail (what it is, what it covers, learning goal) will be added in the next pass after structure is confirmed.

---

## COMPANY CONTEXT

| | Company A (Instructor demo) | Company B (Student capstone) |
|---|---|---|
| Product | Recipe app | Travel product (TBD) |
| Purpose | All live demos and walkthroughs use this | Students apply everything they learn here |
| Design system | Provided by instructors | Provided in Figma so students can test DS fidelity |
| Data | Instructor-prepared dataset | Students bring their own or use provided dataset |

---

## PRE-COURSE

### Topics:

**Topic 1: What you'll build and how this course works**  JAC
- What you'll build by Demo Day (show finished Company A outputs: discovery machine, prototype, EIM write-up, presentation)
- The 5-session arc and what each week looks like
- Company A (watch us build) vs Company B (you build) structure
- **The mindset frame:** "You're not here to become developers. You're here to become the person who finds the right problem, builds a credible solution, and defends every decision. The building happens through AI. The thinking happens through you."
- How to get help: Maven portal, office hours, async support
- Time commitment expectations (5-8 hrs/week)

**Topic 2: How AI reads what you give it** JAC
- The AI Behaviour Primer (3-4 min). Primes the mental model before students touch any tool
- Claude has no memory between sessions. Every session starts blank. The quality of your context = the quality of your output
- The contractor analogy: "Every morning, no memory of yesterday. The quality of your briefing packet is the quality of your experience."
- Non-determinism normalised: "Your output won't look exactly like mine. That's expected, not a sign of failure."
- Context layering: "More context = better output. You'll build these layers throughout the course."
- Session memory vs persistent context: what disappears, what survives, how to make it survive

**Topic 3: Set up your AI building environment** JAC
- Claude Desktop app install, Code tab, select folder
- **Claude product orientation (90-second visual):** "Chat = conversation. Cowork = working with documents. Code = building things in project folders. Design = visual exploration and prototyping. We primarily use Code in this course."
- Folder location rule: "Create a folder called velocity-projects on your Desktop. Everything lives there. You choose the location. Claude never does."
- Success indicator: "Claude responded to your first prompt in your project folder. You're ready."

**Topic 4: The EIM Framework** SIMON 
- What Evidence, Impact, and Mechanism mean
- Why EIM exists: 95% of AI products fail because nobody answered these three questions before building
- One quick example showing E, I, and M applied to a real product decision
- "In Live Session 1, you'll watch us run this on real company data. Arrive knowing these three words."

**📋 Reflect: Goals** (due Mon 5/18)

### ✅ Achievement: "My tools work. Claude responded. I know what EIM stands for. I know how AI reads context. I'm ready."

---

## WEEK 1

---

## 🗓️ LIVE SESSION 1: Build your product discovery machine
**MON 5/18 7:30 AM (GMT+10)**

### What Live 1 covers:
- **(10 min) Frame the room.** Simon sets the identity: strategist + builder. Why "what to build" matters more than "how to build." Why EIM solves this. "The person who decides what to build and can defend it. That's this course."
- **(35 min) Show: Simon runs EIM on Company A (recipe app).** Full demo. Discovery machine ingests company data + market signals and produces the EIM output (hypotheses with evidence, dollar-value impact, specific mechanisms). **Simon also demos the EIM-to-PRD conversion live** so students see the full pipeline including where human judgment gets added
- **(35 min) Do: Students run the same workflow on Company A data.** Guided first run. Same data, same workflow Simon just demoed. Students see it produce results in their own Claude Code environment
- **(10 min) Preview the async work:** what to do between now and Live 2

---

## MODULE 1: BUILD YOUR PRODUCT DISCOVERY MACHINE
**Async after Live Session 1**

### Topics:

**Topic 1: What strong product opportunities look like** SIMON
- Show the EIM output sample. Walk through a hypothesis in detail: specific evidence, dollar-value impact, actionable mechanism
- Strong vs weak: side-by-side comparison
- "This is what you're building toward. Your discovery machine will produce output like this."

**Topic 2: Find the signals that matter in your data** Simon
- What kind of data goes into the discovery machine: company metrics, user behaviour, support tickets, market research, competitive signals
- How to structure data so Claude can analyse it effectively
- **Token as currency (2-min sidebar):** "Think of tokens as your AI budget."
- The difference between raw data and structured signals. What Claude finds vs what requires your judgment

**Topic 3: Build your discovery workflow step by step** SIMON 
- Set up and run the discovery workflow using Company A data (reinforcing Live 1, now at their own pace)
- **Markdown files:** "Simple text format that both you and Claude can read."
- **Context layering (show in Finder):** CLAUDE.md, data files, skill files. Show in Finder AND in Claude Code simultaneously
- **Finder check after every file generation.** 20 seconds. Non-negotiable
- Success indicator: "Your discovery machine produced an EIM output from Company A data."

**Topic 4: Choose the right opportunity and make it defensible** SIMON
- How to evaluate the EIM output: which hypotheses are strong, which are weak, and why
- Selecting the winning hypothesis: evidence strength, impact size, mechanism clarity
- Shaping the hypothesis into a product direction statement
- The human judgment layer: Claude surfaced the signals. You decide which one matters

**Topic 5: Prepare your company data for opportunity discovery**  JAC
- How to prepare your Company B materials: business goals, company data, product context
- **The "imperfect data" example:** Show a real messy submission. It worked. Here's the EIM output it produced
- For students without a design system: we provide a DS in Figma AND a Design System Generate skill
- Minimum: three data files, a one-paragraph business goal, and your design system in any format

**✏️ PROJECT: Build your product discovery machine** (due Thu 5/21)
- Run discovery workflow on Company B data
- Deliverable: working discovery machine + selected EIM hypothesis
- Success indicator: "Your machine produced hypotheses for YOUR company. You selected one and can explain why in two sentences."
- Transfer check: "If you started a discovery workflow for a different company tomorrow, what would you do first?"

---

## 💬 OFFICE HOUR (between Live 1 and Live 2)
**WED 5/20 8:00 AM (GMT+10)**

- Troubleshoot discovery machine issues
- Help students stuck on Company B data setup
- Q&A on EIM: "Is my hypothesis strong enough?"
- Common edge cases addressed and pinned on Maven portal
- Both instructors available

---

### 📦 Student Outcomes after Module 1:
- Working discovery machine that runs on any company's data
- Selected EIM hypothesis with evidence, impact, and mechanism
- Product direction statement: what to build, who it serves, why it matters
- Company B data prepared and loaded

### 🎉 Achievement: "I built a discovery machine that finds opportunities in my company's data."

---

## 🗓️ LIVE SESSION 2: Go from opportunity to an on-brand product
**FRI 5/22 7:30 AM (GMT+10)**

### What Live 2 covers:
- **(10 min) PRD walkthrough.** Show the PRD sample. "Your EIM becomes your PRD. The spec drives everything Claude builds from here."
- **(15 min) Show: Simon builds from PRD to prototype on Company A (recipe app).** Full workflow live: PRD → prompt Claude Code → component appears → check in browser → verify against DS → refine. Jac critiques DS fidelity in real time
- **(10 min) Show: Claude Design synced to design system.** Demonstrate how Claude Design reads the codebase/design files and auto-applies brand
- **(10 min) Show: Jac demos unpacking opportunities into design direction.** How to take an EIM hypothesis and feed design direction to Claude. How to ideate with intent. How to avoid AI slop: "If it looks like anyone could have made it, it's not done."
- **(15 min) Introduce the tool triangle.** "Claude Code builds. VS Code is where you read what it built. Browser is where you see it." Students open VS Code for the first time WITH a reason
- **(30 min) Students build.** First block: guided. Second block: scaffold removed. "Build the next component yourself. You know the rhythm. Go." Engineered autonomous shift moment
- **Named step: DS Fidelity Check.** Claude audits Claude. Students check visuals

---

## MODULE 2: THE AI-NATIVE BUILD LOOP
**Async after Live Session 2**

### Topics:

**Topic 1: Write a product spec that AI can build from** SIMON
- How to take raw EIM output and translate it into a structured product spec
- **What goes in a PRD:** Problem statement (from Evidence), hypothesis (from Mechanism), success metrics (from Impact), scope, user stories, guardrails, rules, what's NOT in scope
- **What stays out:** Implementation details, tool preferences, visual direction
- The PRD becomes the .md spec file that Claude builds from
- **PRD vs CLAUDE.md (two documents, two jobs):** "The PRD says what we're building and why. CLAUDE.md says how Claude should behave while building it."
- User stories as acceptance criteria: "These become your testing checklist later."
- "If the PRD is vague, the prototype is vague."

**Topic 2: The judgment calls that separate AI products from noise** SIMON
- **Call 1: Which signal is real vs noise.** AI surfaces five hypotheses. You pick one
- **Call 2: Setting the business target.** AI sizes the opportunity. You decide how aggressive
- **Call 3: How to set constraints and guardrails.** AI would build everything. You constrain it
- "Claude surfaced the signals. You made the decisions that turned them into a product direction. That's the skill nobody automates."

**Topic 3: Make AI design on-brand, not generic** JAC
- Four paths to on-brand output, matched to your tools and role
- **Path 1: Design system markdown file** (core). Load your DS into Claude Code as a .md file
- **Path 2: Figma MCP extraction** (designers with existing Figma DS). Pros: extracts real tokens. Cons: setup friction, token consumption
- **Path 3: Claude Design** (designers, PMs, founders). Reads your codebase and design files, builds your DS automatically. Pros: fastest setup, auto-applies brand, visual exploration. Cons: research preview
- **Path 4: Website extraction** (no Figma or DS). Point Claude at your website URL. Pros: no Figma required. Cons: less precise
- All paths end at the same checkpoint: "Claude knows your brand."

**Topic 4: The AI-native build loop** JAC
- The full build workflow: PRD → prompt → build → check in browser → verify against DS → refine → commit
- **The build rhythm named:** "Generate → Evaluate → Verify → Lock → Save → Confirm." Six steps. Every session
- **Source of truth:** "The spec drives everything."
- **Feedback loops not linear flows:** "It's a loop, not a line."
- **Claude audits Claude (named callout):** "Claude checks its output against your spec. You check the visuals. Together, you're the QA team."
- **Spec mutations are announced, not silent:** "Claude doesn't rewrite your brief without you deciding."

**Topic 5: Claude Code and VS Code (optional)** JAC
- What each one shows you and when each is most useful
- "If you like seeing the whole project laid out, VS Code. If you prefer the conversation, Claude Code."

**✏️ PROJECT: Build an AI-native, on-brand prototype** (due Sun 5/24)
- Deliverable: working on-brand prototype built from PRD, DS fidelity verified
- Students should have: prototype running in browser, verified against design system, at least 2 screens/components built
- Success indicator: "Your prototype looks like it belongs in your product. A colleague wouldn't know AI built it."
- Transfer check: "If you started a new project tomorrow, what files would you create first? What would go in your PRD? What would go in your CLAUDE.md?"

---

## 💬 OFFICE HOUR (between Live 2 and Live 3)
**SAT 5/23 8:00 AM (GMT+10)**

- Troubleshoot build issues and DS connection problems
- Help students refine prototypes
- Both instructors available

---

### 📦 Student Outcomes after Module 2:
- On-brand prototype built from PRD using Claude Code
- PRD and CLAUDE.md as two connected source-of-truth documents
- Design system connected and verified
- Understanding of the build loop: Generate → Evaluate → Verify → Lock → Save → Confirm
- "Claude audits Claude" as a repeatable verification pattern

### 🎉 Achievement: "I designed and built something that looks like it belongs in my product."

---

## WEEK 2

---

## 🗓️ LIVE SESSION 3: Connect what you built to why it matters
**MON 5/25 7:30 AM (GMT+10)**

Simon and Jac defend their own Company A projects to model the process. Students review their own outputs against business goals.

### What Live 3 covers:
- **(15 min) How to decide what's worth shipping.** Connect your solution to company goals, strategic position, and competitive landscape. "Not everything you can build should be built. Here's how to filter."
- **(20 min) Show: Simon and Jac defend Company A.** Both instructors present and defend their projects. Simon presents a deliberately weak version first, Jac challenges it. Then the strong version. Students see the difference
- **(10 min) The story arc that makes it land.** "We found [evidence]. It's worth [impact]. The root cause is [mechanism]. Here's the prototype that addresses it."
- **(35 min) Students review their own outputs.** Guided self-assessment: map prototype back to EIM, company goals, and competitive landscape. Peer discussion in small groups
- **(10 min) What makes a business case get funded.** Connects to Module 3 async
- **Skills commoditisation anxiety addressed:** "Your skill file is not the moat. Your EIM is the moat."

---

## MODULE 3: CONNECT YOUR DECISIONS TO BUSINESS OUTCOMES
**Async opens after Live Session 3. Students self-pace through Week 2.**

NOTE: Module 3 AND Module 4 content opens together after Live 3. Office hour on Wednesday and guest fireside on Friday provide support throughout this window.

### Topics:

**Topic 1: Why this, why now** SIMON
- How to frame a product initiative so it feels inevitable, not optional
- "Why this" = the mechanism is real, specific, and costly. "Why now" = the window is closing, the data is fresh, the gap exists today
- Template: "[Company] is losing [$X] because [mechanism]. We can address this with [solution] that costs [investment] and returns [impact]. The data window is [timeframe]."
- Practice: students write their "why this, why now" for their own prototype

**Topic 2: Speak the language that gets initiatives funded** JAC
- Translate design/product language to executive language: "user friction" → "conversion drop-off," "design consistency" → "brand trust that drives retention," "better UX" → "reduced support costs"
- Three language patterns: the cost of doing nothing, the return on doing this, the risk of doing something else

**Topic 3: Create AI skills that encode your expertise** JAC
- What a skill file is and why it matters
- When to create a skill: the trigger is repetition
- How to create a skill: anatomy of a skill .md file
- Students create skills from workflows they've been repeating
- Success indicator: "You created a skill. You ran it. Claude followed your process without you directing every step."
- "Skills get commoditised. Your judgment about when and how to apply them doesn't."

**Topic 4: Combine skills into a system that compounds** JAC
- "A skill alone is useful. A skill connected to your design system, your EIM analysis, and your project context is powerful."
- Skills + context files + CLAUDE.md = a system, not a single instruction
- "A great skill file doesn't just tell Claude what to build. It tells Claude what questions to ask first."
- The compounding moment named: "Company A taught you the workflow. Company B is where it compounds."

**✏️ PROJECT: Connect your prototype to business outcomes** (due Thu 5/28)
- Deliverable: refined prototype + EIM narrative connecting it to business outcomes
- Students should have: product narrative, "why this why now" statement, language translated for stakeholder consumption
- Success indicator: "You can explain in 3 minutes what you built, why it matters, what it's worth, and why now."
- Transfer check: "If your VP asked you to justify this initiative in a meeting tomorrow, what would you say first?"

---

## MODULE 4: PRESENT A BUSINESS CASE THAT GETS FUNDED
**Async opens after Live Session 3 (same window as Module 3)**

### Topics:

**Topic 1: Structure a winning business case** JAC
- The complete business case structure: Executive summary → Problem (Evidence) → Opportunity (Impact) → Solution (Mechanism + Prototype) → Investment required → Expected return → Timeline → Risk and mitigation
- Includes product narrative as part of the structure: "We found [evidence]. It's worth [impact]. The root cause is [mechanism]. Here's the prototype that addresses it."
- How EIM maps to business case sections. Students already have the content. This topic gives it STRUCTURE
- Template provided: fill-in-the-blanks business case populated with their own EIM data

**Topic 2: Adapt your business case for your company's growth stage** SIMON
- How to validate and position the same product idea depending on company context
- **Startup:** Speed and learning velocity. "We'll learn X by shipping this." Investors want market signal
- **Growth stage:** Unit economics and scalability. "This moves [metric] by [amount] at [cost]." Leadership wants impact sizing
- **Enterprise:** Risk mitigation and alignment. "This reduces [cost/risk] across [scope] with [evidence from pilot]." Executives want de-risked bets
- "The same product idea gets pitched three different ways depending on who's listening."

**Topic 3: Generate an on-brand presentation with Claude Design** JAC
- Feed EIM narrative + business case into Claude Design. Brand already loaded from onboarding
- Refine messaging, structure, and visual consistency through conversation
- Export as shareable format for Demo Day
- Success indicator: "Your presentation looks like your company made it, not like AI made it."

**Topic 4: Deploy your prototype to a live URL** SIMON
- Get your prototype to a live URL via Netlify (zero-config, no Git required)
- Step-by-step deployment walkthrough
- Success indicator: "You have a URL. It works. Share it."

**Topic 5: Influence with C.L.E.A.R framework** JAC (existing lesson)
- Advanced communication framework for stakeholder influence
- "When you're back at work and pitching to your VP, this is how you structure the conversation."

**✏️ PROJECT: Your Capstone** (submit before Demo Day)
- Final deliverable: complete capstone package (prototype + EIM + business case + presentation)
- **Final prep checklist (binary):**
  - Working prototype (deployed or local) ☐
  - EIM write-up with evidence, impact, mechanism ☐
  - Business case presentation ☐
  - Live demo ready (tested on the device you'll present from) ☐
  - "Why this, why now" in one sentence ☐
  - "How I'd deploy this at my company" in one sentence ☐
- Transfer check: "Everything you built runs on skill files and context layers. If you started a new project at a new company Monday morning, what would you bring with you?"

---

## 💬 OFFICE HOUR (between Live 3 and Demo Day)
**WED 5/27 8:00 AM (GMT+10)**

- Help students refine narratives and business cases
- Troubleshoot deployment issues
- Both instructors available

---

## 💬 PEER REVIEW (before Demo Day)

- Students pair up on Maven portal and run through each other's presentations
- Structured feedback: "What was clear? Where did you lose me? What question would a skeptic ask?"
- Self-serve, asynchronous

---

### 📦 Student Outcomes after Modules 3+4:
- "Why this, why now" statement with evidence and impact numbers
- Stakeholder-ready language
- Custom AI skills built for their own workflows
- Skills compounding into a reusable system
- Structured business case document with product narrative
- Business case adapted for their company's growth stage
- On-brand presentation generated with Claude Design
- Deployed prototype at a live URL
- Rehearsed Demo Day delivery
- Complete capstone package

### 🎉 Achievement: "My business case is ready. I'd present this at work tomorrow."

---

## 🗓️ LIVE SESSION 4: Where AI product building is going
**FRI 5/29 8:00 AM (GMT+10)**

Fireside with guest practitioner + industry direction discussion.

### What Live 4 covers:
- **Fireside format.** Guest practitioner shares how they shipped an AI product: what worked, what broke, what they'd do differently
- Simon and Jac ask the questions students are thinking: "How did you defend this to your leadership team?" "What surprised you?" "What would you do differently?"
- **Industry direction discussion:** Where AI product building is heading. What skills will matter in 12 months. How the role of designers, PMs, and founders is evolving. Conversation between all three (Simon, Jac, guest)
- Q&A with students
- No new instructional content. Inspiration + validation + forward-looking perspective before Demo Day

*Guest speaker: TBC*

---

## 🗓️ LIVE SESSION 5: AI Product Showcase (Demo Day)
**SAT 5/30 8:00 AM (GMT+10)**

### What Demo Day covers:
- **(10 min) What you've accomplished.** Simon and Jac walk through what students built across 2 weeks: discovery machine, product spec, on-brand prototype, business case, defense under pressure. Name the milestones: "You found a real opportunity. You built a product from it. You connected it to business outcomes. You defended it. That's a quarter of product work in two weeks."
- Simon frames the room: "You're presenting to your product team, not your instructor"
- Each student: 5-6 minutes. Structure:
  1. EIM hypothesis (what you found and why it matters)
  2. Prototype demo (live, working, on-brand)
  3. Business case narrative (the evidence, the impact, the ask)
  4. "How I'd deploy this at my company" (30-second post-course preview)
- **Presentation slides are optional.** The thinking and the artifact matter more than the deck
- Simon and Jac give specific, honest observations after each presentation
- **(10 min) Testimonials.** Capture student reflections on camera/audio: "What changed for you?" "What would you tell someone considering this course?" "What are you taking back to work Monday?" Collected for future cohort marketing with student permission
- Closing: skill library hand-off, gifts (Simon's AI bot, books), community access, what comes next

---

### 📦 Student Outcomes after Demo Day:
- Demo Day recording for portfolio
- Complete skill .md library (reusable on any project)
- Portfolio case study
- Community access + lifetime session recordings
- Free cohort retake

### 🎉 Achievement: "I just did in 2 weeks what takes most teams a quarter."

---

## 📋 Reflect: Wrap-up (sends Sun 5/31)

---

## POST-COURSE SKILL LIBRARY

Materials students keep permanently. Not course content. No cognitive load during the 2 weeks:

| Resource | Type | Purpose |
|---|---|---|
| Complete prompt + workflow library | Skill .md files | Every workflow used in the course, documented and reusable |
| Design System Generate skill | Skill .md file | For students who need to create a DS from brand guidelines |
| Working With Your Engineering Team | 1-page reference | Branching, PRs, two-direction handoff model |
| What Comes After This Course | Reference doc | Deployment paths, Git basics, career leverage, adapting skill library |
| Skills Management Guide | 1-page reference | How to organise and maintain skills as they grow |
| Token Efficiency Reference | 1-page reference | Context window management, cost awareness, structuring files |
| The Designer's New Role (optional) | Lightning session or async recording (10 min) | Identity shift: maker to director, what design leadership looks like |

---

## TOPIC COUNT SUMMARY

| Section | Topics | Projects | Live | Office Hours |
|---|---|---|---|---|
| Pre-course | 4 | 0 | — | — |
| Module 1 | 5 | 1 | Live 1 | 1 |
| Module 2 | 4 + 1 optional | 1 | Live 2 | 1 |
| Module 3 | 4 | 1 | Live 3 | — |
| Module 4 | 5 | 1 (capstone) | Live 4 (fireside) | 1 + Peer review |
| Showcase | — | — | Live 5 | — |
| **Total** | **22 + 1 optional** | **4 projects** | **5 sessions** | **3 + peer review** |

---

## FULL COURSE SEQUENCE (reading order)

```
PRE-COURSE
  T1  What you'll build and how this course works
  T2  How AI reads what you give it
  T3  Set up your AI building environment
  T4  The EIM Framework
  📋  Reflect: Goals

WEEK 1
  🗓️  LIVE 1: Build your product discovery machine
  T1  What strong product opportunities look like
  T2  Find the signals that matter in your data
  T3  Build your discovery workflow step by step
  T4  Choose the right opportunity and make it defensible
  T5  Prepare your company data for the build
  ✏️  PROJECT: Build your product discovery machine
  💬  OFFICE HOUR
  🎉  "I built a discovery machine that finds opportunities."

  🗓️  LIVE 2: Go from opportunity to an on-brand product
  T1  Write a product spec that AI can build from
  T2  The judgment calls that separate AI products from noise
  T3  Make AI design on-brand, not generic
  T4  The AI-native build loop
  T5  Claude Code and VS Code (optional)
  ✏️  PROJECT: Build an AI-native, on-brand prototype
  💬  OFFICE HOUR
  🎉  "I designed and built something on-brand."

WEEK 2 (Modules 3+4 open together, self-paced)
  🗓️  LIVE 3: Connect what you built to why it matters
  T1  Why this, why now
  T2  Speak the language that gets initiatives funded
  T3  Create AI skills that encode your expertise
  T4  Combine skills into a system that compounds
  ✏️  PROJECT: Connect your prototype to business outcomes

  T1  Structure a winning business case
  T2  Adapt your business case for your growth stage
  T3  Generate an on-brand presentation with Claude Design
  T4  Deploy your prototype to a live URL
  T5  Influence with C.L.E.A.R framework
  ✏️  PROJECT: Your Capstone (includes final prep checklist)

  💬  OFFICE HOUR
  👥  PEER REVIEW
  🎉  "My business case is ready for work tomorrow."

  🗓️  LIVE 4: Where AI product building is going
  🗓️  LIVE 5: AI Product Showcase (Demo Day)
  🎉  "I just did in 2 weeks what takes most teams a quarter."
  📋  Reflect: Wrap-up
```

---

## DESIGN PRINCIPLES

1. **Just-in-time learning.** Students learn something only when they're about to use it
2. **Confidence-first.** Every session leaves students feeling more capable than when they arrived
3. **One path, no detours.** Optionality creates paralysis. Prescription creates momentum
4. **Show end state first.** Students see the finished product before they build
5. **Explicit success indicators.** Binary pass/fail. No ambiguity
6. **Transfer checks at every project.** "Could you repeat this without the lesson open?"

---

## NAMED PATTERNS (referenced throughout)

| Pattern | What it is | Introduced |
|---|---|---|
| Context layering | More context = better output. Layers build through the course | Pre-course T2 |
| Generate → Evaluate → Verify → Lock → Save → Confirm | The build rhythm. Six steps, every session | M2 T4 |
| Claude audits Claude | Claude checks its output against your spec. You check visuals | M2 T4 / Live 2 |
| Finder check | Show where files landed after every generation. 20 seconds | M1 T3 |
| Spec drives everything | When output and expectations disagree, update the spec | M2 T4 |
| The autonomous shift | Scaffold drops, students direct without instructions | Live 2 |
| PRD + CLAUDE.md | Two documents, two jobs. PRD = what and why. CLAUDE.md = how Claude behaves | M2 T1 |

---

## CHANGELOG: v4.1 → v5

| Change | Rationale |
|---|---|
| Skills creation (M2 T5) moved to M3 T3 | Students have more build repetition by M3. Skills pair naturally with skill composition |
| Skills split into two visible topics: M3 T3 (create) + M3 T4 (compound) | Each has distinct student value. "Create" saves time. "Compound" multiplies impact. Both deserve own line |
| M3 T1 (product narrative) moved to M4 T1 | Product narrative folded into "Structure a winning business case." One topic covers both content and structure |
| M3 "Why this, why now" and "Speak the language" kept as separate topics | Each has distinct, visible student value. Merging would hide value |
| Deploy moved from M3 bonus to M4 T4 (required) | Deploy is a required skill, not a bonus |
| Generate presentation moved from M4 optional to M4 T3 (required) | Presentation generation is a required skill |
| C.L.E.A.R framework moved from bonus to M4 T5 (required) | All M4 topics now required. Rich module with high perceived value |
| Final prep checklist removed as standalone topic | Now a text checklist inside the capstone project brief |
| M2 reduced from 5+1 optional to 4+1 optional | Skills creation moved to M3 where students have more context |
| Topic count rebalanced: M2(4+1), M3(4), M4(5) | Even distribution. Every module looks full and rich |

---

*Next step: Add lesson detail to each topic (what it is, what it covers, learning goal, estimated duration). Then update landing page topic count.*
