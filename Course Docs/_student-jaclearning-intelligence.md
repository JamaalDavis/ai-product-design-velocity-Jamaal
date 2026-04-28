# 3 — Student Persona Intelligence
## AI Product & Design Velocity
**Sources:** Jac's personal learning journey + Rupa's cohort (Office Hours 1 + 2 + Design Context Module + Live Session 2 + Feature Development Module + Live Session 3)
**Last updated:** April 2026 — updated with signals from Feature Development module (Browse Grid, Search, Authentication) and Live Session 3
**Compiled by:** Jac Ding + Claude

---

## HOW TO USE THIS DOC

This is not a marketing persona. It is a learning design persona built from observed behaviour across multiple sources: Jac's direct experience going through Rupa's course as a student, real student signals from Rupa's cohort across office hours sessions, and new signals from the Design Context module, Live Session 2, the Feature Development module, and Live Session 3.

Every design decision for AI Product & Design Velocity should be pressure-tested against this doc. If a lesson, instruction, checklist, or live session format doesn't serve the person described here, reconsider it.

Update this doc after every new student signal — from Rupa's course, from our own cohort once live, or from Jac's ongoing research.

---

## SIGNAL SOURCE 1: JAC'S PERSONAL LEARNING JOURNEY

*Jac went through Rupa's course as a complete Terminal newbie. Her reactions, frustrations, and insights are treated as primary research. She is not an edge case — she is the median student we are designing for.*

### Who Jac is

- 18 years design leadership experience
- Zero Terminal experience before this course
- High standards — notices AI-generated content immediately and disengages
- ADHD tendencies — walls of text cause her to shut down before starting
- Learns by doing, not reading
- Gets anxious when she can't tell if something is working
- Wants to feel in control, not dependent on technology she doesn't understand
- Runs multiple businesses — time is her scarcest resource

### What Jac felt going in

- Excited about building with AI, but wary of the technical setup
- Confident in her design and strategic thinking, less confident in anything terminal-adjacent
- Aware she was a "newbie" in this space and watching for signals that the course respected that

### Where Jac hit friction

- Got stuck multiple times in setup before touching the actual project
- Hit hidden dependencies (Homebrew, GitHub CLI) that weren't flagged upfront
- Dark mode screenshots were inaccessible to her
- Long text lessons caused her to disengage before reading a word
- No success indicators meant she never knew if she'd done it right
- Terminal felt "mentally draining" — not because it was hard, but because it gave no feedback she could trust

**NEW — from Design Context module:**
- VS Code introduced without context three separate times across the module — each time caused the same confusion and disorientation
- File location anxiety: after Claude Code generated files, Jac had no idea where they landed. Had to search by filename to find them. Her project folder had been moved to an unexpected location by a previous Claude Code instruction — two similar folder names in different locations, no way to tell which was active
- "What is this step and why are we doing it?" — asked before every action. Needed the overview before the instruction every time without exception
- Technical code reading (tailwind.config.js verification) produced immediate disengagement: "I don't know what right looks like in code"
- The brand interview skill produced the strongest delight moment in the module — felt like a real branding session, not a technical exercise
- Cross-session verification test was the clearest success moment: fresh session, Claude described entire brand system accurately without prompting. Binary. Unambiguous. "You're done when Claude can describe your design system."

**NEW — from Feature Development module:**
- The mock project problem: "I feel like I'm just vibing or is it supposed to align with the design system because this is a mock project and I have no idea what the design system should look like." Without a real reference point, design review becomes meaningless. Students are checking Claude's output against Claude's own spec.
- The copy-paste without comprehension plateau: completed the .env credentials setup correctly, got the right output, and had no idea what she'd done or whether she could repeat it. Completion without comprehension is its own failure mode — success indicators can't catch it because everything worked.
- The "could Claude just teach me this?" question: "If I don't do this course, and build something from scratch with Claude, wouldn't Claude become the teacher?" This is the honest question underneath every lesson that gives steps without mental models.
- The autonomous shift: partway through the authentication lesson, Jac stopped following lesson prompts and started directing Claude herself. Simplified the commit prompts. Claude filled in the rest correctly. She named this as a confidence shift: "I feel good and even started to be more decisive."

### What Jac needed that she didn't get

- A clear picture of the end state before any setup began
- "You're done when you see X" success confirmations at every step
- One path — no choices, no optional branches mid-lesson
- Emotional reassurance that confusion is normal and expected
- Short videos over long text, always
- Light mode screenshots throughout
- A reason to care about the project before being asked to set it up

**NEW — from Design Context module:**
- The overview before every multi-step lesson: what we're building, why it matters, the steps in order — before any instruction
- File location shown in two places simultaneously: Finder AND Claude Code. Text confirmation alone is not enough
- Technical verification replaced with "Claude audits Claude" — students check visuals, not code
- Context — tool relationship explained as a triangle (Claude Code builds, VS Code reads, browser shows) before any tool is introduced
- Commit explained as version naming, not technical process — connects to something designers already do in Figma

**NEW — from Feature Development module:**
- Mental models before credentials. One sentence before every technical concept: "Your .env file is your keychain. It stays on your machine. It never goes to GitHub." Then the prompt. Students need to know what they just did, not just that it worked.
- Real stakes for design review. When the project is a mock, review is meaningless. Students need to be reviewing Claude's output against something they actually care about — their own brand, their own data, their own design system.
- A named moment when the scaffolding drops. The autonomous shift (stopping following prompts, starting directing) needs to be engineered, not left to friction and repetition to produce.

### Jac's direct quotes

> "I have no idea if it's running, frozen, or thinking. How do I know?"

> "I didn't even read this lesson. It looked too overwhelming."

> "I always have a fear that I didn't do everything and halfway through the course I'd hit a wall."

> "Chatting to terminal is mentally draining."

> "Teach only what's relevant to the task at hand. Everything else is noise. Unless it's funny."

> "I want students to feel capable and superpowered. They are in control. Almost self-guided."

> "If I don't have to teach students to use Terminal, I'd rather not."

> "This is exactly the moment where students will quit. They did everything right and hit a wall through no fault of their own."

**NEW — from Design Context module:**

> "These explanations still sound blurrrhhh to me." (on abstract three-file explanation without a real example)

> "I don't know what right looks like in code." (on manual token file verification)

> "I actually don't know how to find this folder." (on file location after Claude Code generated files)

> "It's like reading a manual instruction without showing me where things are and how to interact with it."

> "People buy a camera, always skip the manual, go straight to YouTube. I can't do this to my students."

> "I want to show students where they are after [Claude Code creates folders]."

> "This is a good delight moment." (on opening design-system.html in browser for the first time)

> "I can't be concrete about this output because it's not from an existing product." (on demo project verification)

**NEW — from Feature Development module:**

> "I feel like I'm just following the lesson copy and paste each step without concrete understanding of why I'm doing it." (on the .env credentials setup)

> "These are if you know it you know how to prompt situations. At my stage, I don't know it, and I would never know what to prompt." (on credentials setup prompts)

> "I have no idea if they're right or wrong." (on Claude's credentials setup output)

> "The goal isn't to successfully build this project. It's to learn how to do it myself without instruction. This — I don't feel confident about." (on the first real build module)

> "If I don't do this course, and build something from scratch with Claude, wouldn't Claude become the teacher and guide me through it?" (the honest competitive question)

> "I feel good and even started to be more decisive about what to change and direct CC instead of following the lesson. I think that's the type of autonomous shift that's good for student." (the confidence breakthrough)

### Jac's delight moments

- Discovering the Claude Desktop app Code tab eliminates Terminal entirely — "This changes everything"
- The 3-column checklist format (What to check / How to check / You're done when you see) — immediate relief
- Any moment where the output was immediate and visible — doing beats reading, every time

**NEW — from Design Context module:**
- Opening design-system.html in browser after the brand interview — immediate, familiar action, output exceeded expectation
- Cross-session verification: fresh session, Claude described entire token system accurately without prompting
- "Claude audits Claude" pattern — relief at not having to read code, Claude found real errors and fixed them
- GitHub repo showing "JacWingdingski and claude" as contributors — the director and builder relationship made visible

**NEW — from Feature Development module:**
- The autonomous shift moment — stopping following prompts and starting directing. Named it herself as a confidence signal.
- Simplified commit prompts working correctly — Claude understood intent without exact instructions. "CC picked up exactly what file it should update based on what we just did."
- The concept click for authentication: "I can direct Claude Code to do everything. When it's stuck, it will ask me to authenticate or update a setting so it can do its job." Clean, confident, correct mental model — arrived at independently.

---

## SIGNAL SOURCE 2: OTHER STUDENTS (RUPA'S COHORT)

*Signals clustered by theme. Patterns across multiple students carry more weight than individual observations.*

---

### WHO THEY ARE

**Roles represented:**
- Senior and lead designers (Product, Brand)
- Product managers
- Founders and consultants
- At least one student who self-identified as "a product person trying to learn design"

**Companies represented:**
- Google, Meta, DoorDash, LinkedIn, Atlassian, Yelp, MYOB
- Startup environments, consulting practices, solopreneurs

**Technical starting point:**
- Most had zero Terminal experience before the course
- A few had used GitHub before in a professional context
- Almost none had set up a developer environment from scratch
- One student (Michael) was already ahead — building a Supabase database by Week 1 Office Hours
- Most were closer to Jac: high craft skills, low technical infrastructure confidence

**What they're juggling:**
- Full-time jobs at recognisable companies
- Multiple students mentioned fitting the course around work meetings
- At least one student was travelling mid-course (airport attendance)
- Time pressure was constant — every minute of setup friction cost them course time they didn't have

**NEW — from Live Session 2:**
- Students are also processing an identity shift, not just a skills upgrade. The questions they asked about Figma's future, role evolution, and career titles reveal that learning Claude Code feels like renegotiating who they are professionally.
- Several students are learning not for themselves but to bring it back to their team. Karolina's question about moving her org away from Figma is representative of this — the course is a stepping stone to team transformation.

**NEW — from Live Session 3:**
- Students are actively building skills and capabilities outside the written course, often ahead of where Rupa teaches them. Michael built a heuristic evaluation skill. Shannon built a scheduled industry signals skill. Beth discovered the given-when-then spec format through working with Claude directly. The most motivated students are outpacing the curriculum.
- The generative UI conversation reveals that students are being asked to solve these problems at work right now, not just theoretically. Briana's Shopify example came from a live workplace conversation. Beth's given-when-then format came from a real project. The course is playing catch-up with what their companies are already expecting of them.

---

### WHAT THEY FEEL BEFORE THE COURSE

**Hopes:**
- Build something real with AI, not just talk about it
- Understand how to use these tools without becoming a developer
- Get comfortable enough to work alongside engineers without feeling lost
- Find a system they can keep using after the course ends

**Fears:**
- Setting up incorrectly and hitting a wall mid-course with no way to self-diagnose
- Falling behind and not being able to catch up
- Looking stupid in front of peers or instructors
- Spending money on a course and not finishing it

**NEW — from Live Session 2:**
- Fear of becoming irrelevant — Figma as professional identity. Letting go of it isn't just a tool switch. Several students expressed this directly or through their questions.
- Fear of being left behind by engineering. "Engineering ships 50% faster. Design is the bottleneck." This landed heavily. Students feel pressure from above and below simultaneously.
- Fear of losing visual exploration. Amanda's question: "For me, it's very hard to do visual exploration in coding tools. It's too harsh." This is the honest fear most designers have but don't articulate.

**NEW — from Live Session 3:**
- Fear that the skills they're building won't differentiate them. Michael's question: "How proprietary do we keep these skills so we can continue to differentiate ourselves?" Students who build powerful AI capabilities immediately worry about commoditisation — of their output, and eventually of themselves.
- Recognition of the gap between AI's capability and actual product quality. When Rupa said "why do our products still suck?" students didn't push back. They recognised it. This is the gap our course lives in — between what AI can do and what actually gets shipped.

**What "success" looks like to them:**
- Finishing setup and knowing it worked — before they've built anything
- Getting a visible output they're proud of in the first session
- Being able to explain what they built to a colleague or stakeholder
- Leaving with something they'll actually use next week

**NEW — from Live Session 2:**
- Being able to bring it back to their team — not just use it themselves
- Understanding where they fit in the new world — the career question underneath the tactical one
- "I finally understand where this is going and I'm excited" — Karolina's moment of clarity is the success state students are looking for

**NEW — from Live Session 3:**
- Being able to repeat it on a new project without the lesson open. Not just "I completed this" but "I could do this again."
- Building something powerful enough that they worry about keeping it proprietary. Michael's heuristic evaluation skill crossing that threshold is the success signal for the Ahead-of-the-Curve student.
- Arriving at the autonomous shift — the moment where they stop following prompts and start directing. This is a milestone worth naming and celebrating.

---

### HOW THEY BEHAVE WHEN STUCK

**First instinct:**
- Ask Claude (the students who figured this out early moved fastest)
- Search for the error message in a new tab
- Re-read the instructions and try again in exactly the same way
- Give up quietly and fall behind without flagging it

**Emotional response to being stuck:**
- Immediate self-blame — "I must have done something wrong"
- Anxiety that it will get worse before it gets better
- Reluctance to ask for help publicly in front of peers
- Relief when told the problem was structural, not their fault

**How long before they disengage:**
- Jac: immediate — if a lesson looked overwhelming before she started, she didn't start
- Others: 20-45 minutes of troubleshooting before visibly losing confidence
- Kelly: spent 45+ minutes on Homebrew and GitHub CLI before getting unblocked
- Chun: spent time across both sessions on the same auth loop

**What gets them unstuck fastest:**
- A short video showing the happy path (Kyle: "The videos solved all my problems")
- A direct analogy that makes the concept click
- Being told the problem wasn't their fault — the anxiety releases immediately
- Asking Claude directly with a screenshot of the error

**NEW — from Design Context module:**
- "What is this step and why are we doing it?" asked before every action — overview before instruction is non-negotiable, not optional
- Technical verification (reading code) produced immediate disengagement — not confusion, disengagement. Students don't attempt what they can't see themselves doing.
- "Claude audits Claude" produced immediate relief — the moment students realise Claude can check its own work, the anxiety about not understanding code disappears
- File location anxiety is a recurring blocker, not a one-time event. Happens every time files are generated without a Finder check.

**NEW — from Feature Development module:**
- Completion without comprehension is its own stuck state. Students who complete steps correctly but don't understand why are stuck in a way that success indicators can't surface. The test is: "Could you do this again on a new project without opening this lesson?"
- The autonomous shift is the unstuck signal at module level. When students stop following prompts and start directing, they've crossed a threshold. Before that moment, they're following. After it, they're directing. Everything between is friction looking for that crossing.

---

### WHAT TRIGGERS DISENGAGEMENT

**Content that loses them:**
- Walls of text with no visual breaks
- Lessons that look long before they've read a word
- Instructions that reference tools they haven't heard of yet
- "You could also try..." — optionality mid-lesson causes paralysis
- Lessons that switch platforms without explaining why

**Moments that make them feel stupid:**
- Getting a different output than the lesson said they should get — and not knowing if that's normal
- Hitting a "command not found" error after following instructions exactly
- Being asked to read code to verify something they don't understand
- Discovering files exist but not knowing where they are or how to find them

**NEW — from Design Context module:**
- Abstract technical explanations without real project examples — Jac's reaction to the three-file explanation: "still sounds blurrrhhh"
- VS Code appearing without introduction — happened three times, produced the same disorientation each time
- Being asked to manually verify code output — "I don't know what right looks like in code"
- Finding out their project folder was in an unexpected location — produced significant anxiety and a feeling of lost control

**NEW — from Feature Development module:**
- Completing steps correctly and having no idea what was just accomplished. The credentials setup produced this: "I have no idea if they're right or wrong." Everything worked. Nothing was understood.
- Being asked to do design review on output that has no external ground truth. When the spec is Claude's and the output is Claude's, the review step has no stakes and no anchor.
- Lessons that give steps but no mental model for when to use them on a different project. "These are if you know it you know how to prompt situations."

**Instruction styles that cause anxiety:**
- "Less than 30 to complete" — 30 what? Sentence unfinished.
- Happy path in video, every edge case in text — forces students to read to know if they're at risk
- No success indicator — students can't confirm they're done
- Instructions that assume prior knowledge without naming it

---

### WHAT CREATES CONFIDENCE AND MOMENTUM

**Moments that generate "I can do this":**
- Completing setup and seeing a clear success state — even before building anything
- Getting an output, even an imperfect one, in the first 15 minutes of building
- A good analogy that makes a complex concept click instantly
- Being told explicitly that their confusion is normal, expected, and not a sign of failure
- Watching the instructor make a mistake and recover — normalises imperfection

**NEW — from Design Context module:**
- The brand interview: felt like a real branding session. Students' expertise was validated, not bypassed. They directed. Claude produced. Immediate confidence.
- Opening the HTML design system in a browser — delight moment. Familiar action (double-click, opens in browser), output exceeded expectation.
- "Claude audits Claude" result: real errors found and fixed without students reading code. Relief that their professional judgment (visual review) is the right check, not code literacy.
- Cross-session verification: Claude accurately describing the design system in a fresh session without prompting. Binary, unambiguous, no room for doubt. "You're done."
- GitHub showing both names as contributors — "JacWingdingski and claude." The director and builder relationship made visible and real.
- Commit as version naming — "I've been doing this in Figma for years" — the moment students realise they already understand the concept

**NEW — from Live Session 2:**
- Michael: "What you're doing in 48 hours, I've been thinking about for 2 years." The wow moment is speed + quality, not just one or the other.
- Karolina: "Something clicked in me. I understand where this is going and I'm excited." The identity shift moment — from confusion to clarity about what the new world looks like.
- The Photoshop layers analogy for context layering — students quoted it back immediately. Visual, familiar, instantly transferable.

**NEW — from Feature Development module:**
- The autonomous shift: stopping following prompts and starting directing. Jac named it herself as a confidence signal. This is the module-level "you're done when you see X" — except what students see is their own changed behaviour, not an output on screen.
- Simplified prompts working correctly: "CC picked up exactly what file it should update based on what we just did." The moment students realise Claude can infer intent from context — they stop feeling like they need to describe everything perfectly.
- The authentication mental model click: "I can direct Claude Code to do everything. When it's stuck, it will ask me to authenticate or update a setting so it can do its job." Clean, correct, arrived at independently. This is the model we want every student to carry out of Session 2.

---

### WHAT THEY ACTUALLY NEED VS WHAT THEY THINK THEY NEED

| What they ask for | What actually helps |
|---|---|
| More explanation of the tools | A single analogy that makes the relationship between tools click |
| More time in office hours | A short video sent afterwards |
| Confirmation that they did it right | An explicit success indicator built into the lesson |
| To understand why before they do | To do first, then understand — doing creates the question |
| Optionality ("can I use Terminal instead?") | One clear path with no alternatives presented |
| A peer group for support | A structured Slack channel with pinned common fixes |
| To be unblocked individually | A self-serve troubleshooting resource they can use at 11pm |

**NEW — from Design Context module:**

| What they ask for | What actually helps |
|---|---|
| Technical explanation of the three files | One real example from their own project (Clean Shopper / Company B) |
| To verify code output manually | "Claude audits Claude" — Claude checks code, they check visuals |
| To know where files are | Finder check after every file generation — show it, don't describe it |
| To understand VS Code | "Open this file" — one task, one sentence explaining why, right now |
| To understand commits | "It's like naming a Figma version. This is the cleaner way." |

**NEW — from Feature Development module:**

| What they ask for | What actually helps |
|---|---|
| Steps for the credentials setup | One sentence explaining what each thing is before they create it |
| Confirmation that their output is correct | "Could you do this on a new project without opening this lesson?" |
| Design review guidance | A real reference point they care about (their own brand, their own data) |
| More prompts to follow | A moment where the scaffold drops and they direct themselves |

---

### DIRECT QUOTES FROM RUPA'S COHORT

**On not knowing if setup worked:**
> "How do I know if the setup worked properly?" — Yasmine (had done everything correctly)

**On following instructions and getting the wrong output:**
> "In the instructions, it says, 'do you now notice how the gap section is a lot bigger than the last one?' I go, it's not, it's smaller. So now I'm completely lost." — Kyle

**On feeling like they were doing it wrong when they weren't:**
> "I felt like I was hacking the system versus following the system." — Kyle

**On platform confusion:**
> "Sometimes it'll say, hey, we're doing this in Terminal, just to check. But then other times it doesn't say anything about switching. It just shows an instruction to put a code in, and then the very next image you see is a different platform." — Kyle

**On the emotional cost of being stuck:**
> "This is exactly the moment where students will quit." — Jac (observing another student's moment of friction)

**On analogies that worked:**
> "I'll be a Claude expert in no time." — Kyle, after hearing the girlfriends analogy

**On videos vs text:**
> "The videos solved all my problems." — Kyle

**On discovering the compounding effect:**
> "I can already see how you're laying the foundation that will be incredibly powerful for us as strategic thinkers." — Michael

**On using Claude to self-rescue:**
> "I took a screenshot, gave it to Claude, and it worked at the end." — Lina

**On work account blockers:**
> "My administrator basically disabled Cowork for me. I was like, man! But I've spent 50 hours doing it." — Chun

**NEW — from Live Session 2:**

> "What I've been thinking about for 2 years, I basically built in 48 hours." — Michael

> "I'm too lazy for Figma at this point. I just cannot do this thing manually over and over again." — Karolina

> "Something clicked in me. I understand where this is going and I'm super excited." — Karolina

> "For me, it's very hard to do visual exploration in coding tools. It's too harsh." — Amanda

**NEW — from Live Session 3:**

> "How proprietary do we keep these skills so that we can continue to differentiate ourselves based on skills and our contributions of those skills, rather than this skill is now accessible to anybody and therefore disposable?" — Michael (on building the heuristic evaluation skill)

> "In this age of AI, where you see such powerful models already existing, why do our products suck?" — Rupa (students didn't push back — they recognised it)

> "Design being thought partners, rather than just decorators. That is a fight designers have been fighting for decades." — Pamela (via Rupa's recap)

> "I want to capture that user insight and that inherent tribal knowledge, and make it accessible to everyone, so they're all building off of those ICPs, their pain points, their jobs to be done. That is influence. That is compounding effect." — Rupa (on Shannon's skill)

> "The more you get comfortable with thinking about yourself as a system-level thinker or a system-level designer, and what are the different components that go into your system, the faster you'll be able to adopt this shift." — Rupa

> "Your role will not be so much about taking 33 years of interaction design principles and guarding it. It'll be more about what do you believe for your company in the context of your audience and the jobs they're trying to do." — Rupa (to Michael)

---

## SIGNAL SOURCE 3: LEARNING HIGHLIGHTS

*Moments where real learning happened — in Rupa's course and in observation. These are the patterns to engineer into our course deliberately.*

**The analogy click**
Learning happened fastest when a single analogy made a complex concept snap into place. The window analogy (LLM context), the girlfriends analogy (file separation), the Figma folder analogy (project structure), the Photoshop layers analogy (context layering) — students quoted these back immediately. The learning wasn't in the explanation. It was in the moment of recognition.

**The first visible output**
Michael built a working database in Week 1. He was ahead of everyone and didn't need troubleshooting. His learning accelerated because he had something working. Visible output creates momentum. Nothing else does.

**The "it's not your fault" moment**
Every time Rupa told a student that the error wasn't theirs — the hidden dependency, the non-deterministic output, the Terminal session needing to close — the student's posture visibly changed. Anxiety released. Learning resumed. The reassurance was as valuable as the fix.

**Asking Claude to fix Claude**
Students who discovered they could screenshot an error and give it to Claude moved fastest. Lina, Michael, and Kyle all named this as a breakthrough. They stopped feeling like they were hacking and started feeling like they were using the tool correctly.

**The compounding moment**
Michael named it explicitly. Once skills started stacking — prompt library informed the skill, skill informed the project context, project context informed the build — the value felt exponential. He got there himself. Rupa didn't engineer it. We can.

**NEW — from Design Context module:**

**The real example click**
Abstract technical explanations produced disengagement. The same concept explained with a real example from the student's own project produced immediate understanding. "Still sounds blurrrhhh" vs "yes this is much better." The trigger is always the same: swap abstract for concrete, swap generic for theirs.

**The "Claude audits Claude" relief**
The moment students realise Claude can check its own output — and they don't need to read code to verify it — produces immediate emotional relief. It reframes the entire relationship with technical output. You're not dependent on code literacy. You're in charge of asking Claude to check its own work.

**The Finder ritual**
Showing files in Finder immediately after Claude Code generates them lands harder than any text confirmation. Students see with their own eyes that something exists in the real world. Binary. Unambiguous. "It's there." This is as important as the success indicator.

**The brand interview as professional mirror**
The design system generator skill produced delight not just because of the output — but because the questions felt like real professional work. Students' expertise was validated. They directed. Claude produced. The brand interview is the first moment in the module where students felt like creative directors, not students following instructions.

**The identity clarity moment**
Karolina's "something clicked" moment in Live Session 2 is the learning highlight of the live session. Not a technical concept clicking — an identity concept. "I understand where this is going and I'm excited." This is the moment the course stops feeling like a skill upgrade and starts feeling like a career repositioning. Engineer this deliberately.

**NEW — from Feature Development module:**

**The autonomous shift**
Jac stopped following lesson prompts and started directing Claude herself partway through the authentication lesson. She named it as a confidence signal. This is the module-level learning highlight — not a concept that clicked, not an output that delighted, but a behaviour that changed. The student went from follower to director. This is the moment the course is building toward. Engineer it deliberately: create a moment where the scaffold drops and students have to direct themselves.

**The mental model click for authentication**
"I can direct Claude Code to do everything. When it's stuck, it will ask me to authenticate or update a setting so it can do its job." Clean, correct, arrived at independently. This is the director mental model in its simplest form. Jac got there through doing, not through being told. That's the right sequence.

**Student-generated insights outpacing the curriculum (Live Session 3)**
Michael's heuristic evaluation skill. Beth's given-when-then spec format. Shannon's scheduled industry signals skill. Briana's Shopify generative UI example. All produced by students in the live session — none in the written curriculum. The pattern is consistent: motivated students who engage deeply with the tools discover better patterns than the course teaches. Our course should engineer these discovery moments and capture them, not leave them to chance.

---

## SIGNAL SOURCE 4: DELIGHT MOMENTS

*Moments of genuine excitement, surprise, or joy. These are what students tell other people about.*

**"I built something I didn't think I could build"**
The highest-value delight moment. Any time a student produces an output that exceeds their own expectation, they become ambassadors for the course. Michael's database. Chun's Claude Code recreation of her Cowork environment. These weren't in the curriculum — they were students running ahead.

**The analogy that makes everyone laugh**
Rupa's girlfriend analogy got an immediate group response. Kyle said "I'll be a Claude expert in no time." The laughter is the learning. Analogies that are a little irreverent stick harder than clean ones.

**"The video fixed it in 60 seconds"**
Kyle thanked Rupa specifically for the supplementary videos. The delight wasn't in the content — it was in the contrast. He'd been stuck for hours. A short video unblocked him instantly. The relief was disproportionate to the effort on Rupa's side.

**Discovering Claude can fix itself**
The moment students realised they could paste an error into Claude and get a fix — without knowing what the error meant — was consistently a delight. It reframes the whole relationship with the tool. You're not dependent on understanding. You're in charge of asking.

**Peer exchange moments**
Jenny and Anna organically wanted to form a group around design systems. Michael shared that going back to Claude and using the tools on themselves was how he got unstuck — and other students immediately recognised the pattern. Shared discovery is more delightful than solo discovery.

**NEW — from Design Context module:**

**Opening the HTML design system in a browser**
Familiar action (double-click, opens in browser). Output exceeds expectation. A complete, polished, on-brand design system rendered in minutes from a 15-minute conversation. The delight is in the disproportionate return: small effort, large output, looks professional.

**The cross-session verification test**
Fresh session. No prompting. Claude describes the entire design system accurately — colors, typography, spacing, even connecting back to brand direction from the interview. Binary success indicator. No room for doubt. Students feel it before they understand it.

**Both names on GitHub**
"JacWingdingski and claude" listed as contributors. The director and builder relationship made visible in a real tool. Students see their name next to Claude's. They directed. Claude built. Both credited. This is worth engineering into every session end.

**NEW — from Live Session 2:**

**Michael's 48-hour moment**
"What I've been thinking about for 2 years, I basically built in 48 hours." This is the highest-stakes delight moment in the cohort. Not just "I built something" — "I built the thing I thought was impossible." Engineer this for every student by Session 2.

**Karolina's clarity moment**
Not a build output — an identity output. "Something clicked. I understand where this is going and I'm excited." The delight of finally seeing the map. This is what happens when students stop feeling overwhelmed by the new world and start feeling positioned for it.

**NEW — from Feature Development module:**

**The autonomous shift as delight**
Jac named the moment she stopped following prompts and started directing as a positive signal. "I feel good and even started to be more decisive." The delight is not in an output — it's in a changed relationship with the tool. Students who reach this moment feel capable in a way no success indicator can produce. It's the real graduation moment of the module.

**Michael's heuristic evaluation skill**
Built a skill that encapsulates 33 years of interaction design knowledge. His immediate reaction was delight followed immediately by existential worry. Both responses are real. The delight is in the power of what he built. The worry is in what it might mean for his role. Both belong in the course.

---

## SIGNAL SOURCE 5: CHALLENGES

*Recurring challenges that appear across multiple students. These are design problems, not student problems.*

**Challenge 1: Not knowing what "done" looks like**
The most pervasive challenge across all students. Without explicit success indicators, students who completed setup correctly still felt uncertain. This is a content design failure, not a student failure.

**Challenge 2: Non-deterministic output misread as personal failure**
Every student who got output that didn't match the lesson assumed they did something wrong. Without a named explanation upfront, this produces shame and stalls momentum. It happened to multiple students independently.

**Challenge 3: Hidden dependencies that block at the worst moment**
Students who hit Homebrew, GitHub CLI, or IT firewall blocks did so after investing significant time and effort. The block felt like a punishment for compliance. They followed the instructions and still hit a wall. This destroys trust in the course.

**Challenge 4: Platform switching without signposting**
Kyle's clearest articulation: lessons moved between Terminal, VS Code, and Claude without explaining why or signalling the switch. Students couldn't tell if they were in the right place.

**Challenge 5: Best mental models only delivered verbally**
Everything students needed to navigate the course confidently — the window analogy, the assumptions principle, the skill trigger rule, non-determinism — was delivered in unplanned verbal moments. Students who missed those sessions never got them.

**Challenge 6: Work account complexity**
Chun lost Cowork access entirely due to company policy. Yasmine had IT restrictions on GitHub. Kelly's corporate proxy blocked Claude Code authentication. These are invisible blockers that no amount of technical skill can fix — they require pre-course guidance and a backup plan.

**Challenge 7: Skill sprawl with no system**
Even Rupa admitted she hasn't solved this. Students who get excited about skills start building them without a naming convention, without a system, without a way to find them later. This will happen to our students too, and faster.

**NEW — from Design Context module:**

**Challenge 8: File location amnesia**
Every time Claude Code generates files, students lose track of where they landed. This is structural, not a one-time event. Without a Finder check ritual after every file generation, students discover they're working in the wrong folder, with outdated files, or can't find what Claude built. The anxiety compounds — each new file generation adds another unknown location.

**Challenge 9: Technical verification as a blocker**
When a lesson asks students to verify output by reading code, designers disengage. Not because they're incapable — because they have no mental model for what correct code looks like. This is a course design failure. Verification should always be either visual (browser) or delegated (Claude audits Claude).

**Challenge 10: Abstract explanations before real examples**
The three-file explanation (Tailwind, CSS, JavaScript) produced "still sounds blurrrhhh" until replaced with a real Clean Shopper example. Abstract definition first = disengagement. Real project example first = immediate understanding. The sequence matters as much as the content.

**Challenge 11: Identity anxiety underneath technical anxiety**
Live Session 2 revealed that students are processing something deeper than "I don't understand this tool." They're renegotiating their professional identity. Questions about Figma's future, role evolution, and career titles are proxies for "am I still relevant?" This anxiety shows up as technical questions but needs an identity-level answer.

**Challenge 12: The visual exploration gap**
Amanda named it: Claude Code is not a canvas. The messy, iterative, "let me just try this" phase of design has no equivalent in a coding tool. This is a genuine gap — not a training problem, not a tool configuration problem. Students who rely on visual exploration to think will feel this acutely.

**NEW — from Feature Development module:**

**Challenge 13: Completion without comprehension**
Students can complete every step correctly and still have no understanding of what they built or why. The credentials setup is the clearest example: .env file created, gitignore confirmed, Supabase client working — and Jac had no idea what any of it was. Success indicators can't catch this failure mode because everything worked. The check is different: "Could you do this again on a new project without opening this lesson?"

**Challenge 14: The mock project verification problem**
When the spec is Claude's and the output is Claude's, design review has no external ground truth. Students are checking Claude's work against Claude's own brief. Without a real reference point — a design system they care about, a brand they know — the review step is meaningless and students feel it. Our Company B structure solves this directly.

**Challenge 15: Steps without mental models**
Lessons that give prompts without explaining what the prompts create produce students who can follow the course but can't transfer the learning. "If you know it you know how to prompt" is the student's articulation of this. They know they're missing something — they just can't name what.

**Challenge 16: Skills-as-portfolio anxiety**
Students who build powerful AI capabilities immediately worry about commoditisation and differentiation. Michael's question after building the heuristic evaluation skill: "How proprietary do we keep these skills?" This is a new anxiety that no course has addressed yet. The answer our course should give: your skill file is not the value. Your judgment about when and how to apply it is. That's not in the file.

---

## SIGNAL SOURCE 6: STUDENT ARCHETYPES

*Distinct student types that emerge across sessions. Each has a different anxiety and a different success state.*

**The Ahead-of-the-Curve Student (Michael)**
Already building. Already excited. The risk is they outpace the course and stop finding value. The opportunity: they become the compounding effect example — the student whose skills stack on each other and who discovers exponential value. Engineer a path for them to run ahead without leaving others behind.

**NEW from Live Session 3:** Michael built a heuristic evaluation skill that encapsulated 33 years of interaction design knowledge. His immediate second reaction was skills-as-portfolio anxiety: "How proprietary do we keep these?" The Ahead-of-the-Curve student needs an answer to the differentiation question, not just the building question.

**The Team Transformer (Karolina)**
Learning for her team, not just herself. Her success state is "I can bring this back and move my org forward." She needs the course to give her not just skills but a transformation narrative — a way to explain what she learned and why it matters to people who weren't there. Our reusable prompt library and workflow files serve this directly.

**The Pragmatist (Maha)**
Time-poor, looking for shortcuts that don't sacrifice quality. Open source design systems as a shortcut question is representative. She wants the 80% solution that takes 20% of the effort. Needs to feel like she's not wasting time on perfectionism. The brand interview in 30 minutes is designed for her.

**The Visual Explorer (Amanda)**
The honest voice. Asks the question others are afraid to ask. Worried about losing the canvas — the messy visual thinking phase. Her anxiety is legitimate and unsolved. For our course: acknowledge it directly rather than ignore it. "This is the one thing Claude Code doesn't replace. Here's what we do instead."

**The Systems Thinker (Beth)**
Two steps ahead. Asking about infrastructure, context windows, tool survival. She's evaluating whether to commit at an org level. Needs the answer to scale — not just personal use. Our course serves her through the reusable system design and the "build workflows your team can use" framing.

**NEW from Live Session 3:** Beth discovered the given-when-then spec format through working with Claude directly — not through the course. She arrived at a behaviour spec that is AI-readable and engineer-readable before Rupa taught either concept. The Systems Thinker doesn't just use the tools — they improve them.

**The Identity Questioner (Shelda, Mahdieh)**
Career question underneath every technical question. "What title do I get?" "Where does my role go?" "Am I still relevant?" These students need the identity-level answer, not just the tactical one. Our course positioning — "designers who can defend what gets built and why will be fine" — is the answer. Make it explicit.

**NEW — The Workplace Proxy (Briana, Shannon)**
Learning to solve problems their companies are already asking them to solve. Briana is in live conversations at work about generative UI and nobody knows how to execute. Shannon built a monthly skill to track industry signals because her company needs it. These students aren't just learning — they're piloting. The course's value to them is not just skill acquisition but solution-finding for problems that are already live at work.

---

## DESIGN IMPLICATIONS

### Pre-course design
- Show the finished output before anything else. Make them want it.
- Deliver the AI Behaviour Primer before setup — five things to know before they touch a tool
- Three-column setup checklist: What to check / How to check / You're done when you see
- One sentence on work account and IT considerations
- No Terminal. No optional paths. One route, clearly signed.

**NEW from Design Context module:**
- Address the identity question in the pre-course welcome: "If you're wondering where designers fit in the new world — this course answers that question. Not just how to use AI tools. What to use them for, and how to defend those decisions."
- State the folder location rule before anything starts: "Create a folder called velocity-projects on your Desktop. Everything lives there. You choose the location. Claude never does."

**NEW from Feature Development module:**
- Add "could you repeat this on a new project without opening this lesson?" as the comprehension check for every setup lesson. Not just success indicators — transfer indicators.
- Address the skills-as-portfolio anxiety in pre-course materials: "The skill file is not the value. Your judgment about when and how to apply it is. That's not in the file — it's in you."

### Async lesson design
- Video first, always. Text is reference, not instruction.
- Happy path only in video. Never split happy path and edge cases across media.
- One action per screen. One success indicator per step.
- Analogies that are spatial, visual, or use design mental models students already have.
- "You're done when you see X" — every single step.

**NEW from Design Context module:**
- Every lesson with multiple steps opens with the lesson opening template: what we're building (one sentence), why it matters (one sentence), the steps named and numbered (one sentence each). Then first instruction.
- Real project examples before abstract explanations. Always Company B before theory.
- Technical concepts get an everyday equivalent before an explanation. Commits = Figma version naming. Tokens = design system variables. Context layering = Photoshop layers.
- Every tool introduction gets one bridging sentence: "We're opening VS Code now because [specific reason for this specific task]."
- Finder check after every file generation. 20 seconds. Show where things landed before moving on.
- Verification is always visual (browser) or delegated (Claude audits Claude). Never "read this code."

**NEW from Feature Development module:**
- One sentence of mental model before every technical concept. "Your .env file is your keychain. It stays on your machine. It never goes to GitHub." Then the prompt. Students know what they just did.
- Include a transfer check at the end of every setup lesson: "If you started a new project tomorrow, what would you do first? Why?" Not a quiz — a prompt for reflection.
- Every spec is locked before the build starts. If Claude suggests a change to a skill file, that's a named step with a named review — not a silent update.

### Live session design
- Show the complete end state before students build. They need to know what done looks like.
- Normalise mistakes and non-determinism in the first 10 minutes of Session 1.
- Name the "hacking is the skill" principle explicitly and early.
- Two instructors means two unblocking paths — Simon on product and technical, Jac on workflow and communication.

**NEW from Live Session 2:**
- Live sessions run BEFORE students do the async work, not after. Conceptual frame first, tactical execution second.
- Address the identity question directly in Session 1: "If you're wondering where designers fit — the answer is: the person who decides what to build and can defend it. That's this course."
- Acknowledge the visual exploration gap honestly: "Claude Code is not a canvas. Here's what we do for visual exploration instead." Don't pretend the gap doesn't exist.
- Seed Q&A questions in advance via Slack. The best questions from live sessions come from students who've had time to process their real anxieties — not improvised in the moment.

**NEW from Live Session 3:**
- Engineer the autonomous shift moment deliberately. In Session 2, after the first build block, remove the scaffold: "Build the next component yourself. You know the rhythm. Go." Debrief after. Name what just happened.
- When something breaks live, stop and diagnose it out loud. This is the teaching moment, not the interruption. Students learn more from a real debugging moment than a flawless demo.
- The "specs always win" principle should be stated as a named rule in Session 1 and reinforced in every session — not stated verbally in a live session halfway through the course.
- Address the skills-as-portfolio anxiety when it surfaces. Have a ready answer: "Your skill file is not the value. Your judgment is."

### Support structures
- Slack channel for setup issues with pinned common fixes — self-serve before office hours
- WhatsApp or peer channel for design system exchange (students will form this anyway — structure it early)
- Office hours with both Jac and Simon — not group troubleshooting, but live build sessions with support available

**NEW from Live Session 2:**
- Add a "Team Transformer" channel in Slack — for students like Karolina who are learning to bring this back to their org. Separate from individual student support.
- Acknowledge the six archetypes in the community setup: "You might be here for yourself, or to transform your team, or to understand where your career is going. All of those are right."

**NEW from Live Session 3:**
- Add a "Workplace Proxy" channel or thread — for students like Briana and Shannon who are actively solving live workplace problems. A place to share what they built, what they discovered, what they're taking back. Structured peer learning, not just individual support.

### Copy and messaging decisions
- "No Terminal required" needs to be prominent — not buried in FAQ
- Success indicators should feel reassuring, not just functional — they answer "am I ready?" not just "did it work?"
- Every analogy should work for all three personas: designers, PMs, founders

**NEW from Live Session 2:**
- Address the identity anxiety in landing page copy: "If everyone can build, what matters is deciding what to build — and defending why. That's what this course teaches."
- The Figma question: acknowledge it directly rather than avoiding it. "You don't need to abandon Figma. But you do need to know what comes next."

**NEW from Live Session 3:**
- EIM as the answer to "why do our products still suck?" Name it that way in positioning. "The reason AI products fail isn't the building. It's the evidence, the impact sizing, and the mechanism diagnosis that nobody did before the building started."
- The skills-as-portfolio anxiety needs a positioning response: "Your skill file is not the value. Your judgment about when and how to apply it is. That's what this course builds."

### What this means for our differentiator
Our target student is not someone who is comfortable with tech and wants to go faster. They are someone who is overwhelmed by tools and wants to build something real without the environment becoming the obstacle. Every design decision — one tool, one path, explicit success indicators, analogies over instructions — serves this person directly.

**NEW from Live Session 2:**
The target student is also processing an identity shift. They're not just learning Claude Code — they're figuring out what kind of professional they want to be in the new world. Our course answers both questions: the tactical (how to build with AI) and the strategic (what to build, why it matters, how to defend it). This is the differentiator Rupa's course doesn't address.

**NEW from Feature Development module:**
The target student also needs to know they can repeat what they learned on a new project without the lesson open. Completion is not enough. Transfer is the bar. Our Company B structure (students' own data, their own design system, their own business goals) is the transfer test built into the course architecture.

---

## OPEN QUESTIONS

1. What percentage of our enrolled students will be on managed devices? If more than 30%, the IT guidance needs to be a standalone pre-course lesson, not a FAQ entry.

2. Do we structure the peer exchange (WhatsApp / Slack) before Session 1, or let it form organically and then formalise it? Rupa's students formed it themselves — we could accelerate that.

3. How do we engineer the compounding moment deliberately? Michael discovered it himself. Our Company A → Company B structure creates the conditions. Do we name it explicitly or let students feel it?

4. What is our answer for students whose work account loses access mid-course (like Chun)? Do we have a backup path documented in pre-course materials?

**NEW from Live Session 2:**
5. How do we address the visual exploration gap honestly without undermining confidence in the course? Amanda's question is real. Claude Code is not a canvas. Do we name this in the pre-course materials or handle it in Session 1?

6. Do we create a specific path for the "Team Transformer" archetype (Karolina)? Students learning to bring this back to their org have different success metrics than individual learners.

7. The identity question is coming in every cohort. Do we answer it explicitly in the landing page, the welcome video, or Session 1? Or all three?

8. What's our answer to the Figma question? Every cohort will ask it. We need a clear, honest, non-dismissive position that acknowledges the grief and points toward the opportunity.

**NEW from Feature Development module:**
9. How do we build a transfer check into every lesson? The test isn't "did you complete the steps" — it's "could you repeat this on a new project without opening this lesson?" What does that look like in practice?

10. What's our answer to the skills-as-portfolio anxiety? Students who build powerful prompt libraries and workflow files will worry about giving away their competitive advantage. We need a clear, honest, non-dismissive response ready for Session 1.

11. Do we evaluate Beth's given-when-then spec format for our async spec-writing lesson? It maps cleanly to EIM mechanism writing. Flag for Simon to review before Session 3 design is finalised.

12. How do we structure the Workplace Proxy archetype's experience? Students like Briana and Shannon are solving live workplace problems through the course. Do they need a dedicated channel, a showcase format, or just acknowledgement in community setup?

---

*Last updated: April 2026 — updated with signals from Feature Development module (Browse Grid, Search, Authentication) and Live Session 3*
*Next update: After Week 4 (Design Integration and Deployment) reviewed, or after our own Cohort 1 launches*
*Companion docs: 0-setup-course-competitive-research.md | 2-officehour-evaluation.md | 7-feature-development-module-insights.md*
