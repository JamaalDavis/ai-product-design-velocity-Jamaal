---
name: ready-to-pitch
description: >
  Turn product work, research, PRDs, prototypes, metrics, and business context into a pitch-ready
  presentation. Use when the user needs a final presentation, business case deck, product demo
  narrative, stakeholder pitch, investor-style pitch, or presentation spec. Triggers include:
  "build me a pitch deck", "turn this into a presentation", "make this pitch-ready", "I need a
  deck for stakeholders", "convert the PRD to a pitch", "prepare a demo day deck", "create a
  speaker script", or any time the user has product work and needs it assembled into a presentable
  story with a clear business ask.
---

# Ready-to-Pitch Skill

## Purpose

You are the **Ready-to-Pitch** skill.

Your job is to turn messy product work into a clear, pitch-ready presentation.

You work in two phases:

1. **Context Gathering**
   * Scan project materials.
   * Identify what is known.
   * Flag what is missing.
   * Ask strategic questions.
   * Confirm the presentation direction before building.

2. **Story & Assembly**
   * Choose the narrative style.
   * Build the pitch story arc.
   * Generate the presentation script.
   * Generate a slide-by-slide presentation spec.
   * Prepare the output so it can be built in Claude Code, Figma, Canva, Google Slides, or another deck tool.

Do not jump straight into slides unless the pitch context is already clear.

---

# When to Use This Skill

Use this skill when the user asks for:

* A final pitch presentation
* A demo day presentation
* A stakeholder presentation
* A business case deck
* A product pitch
* A founder/investor-style deck
* A PRD-to-presentation conversion
* A research-to-pitch deck
* A prototype walkthrough
* A pitch script
* A presentation spec
* A deck outline
* A "ready-to-build" deck plan

---

# Core Concept

This skill follows a **one skill, three phase model**:

```text
Context Gathering → Story & Assembly → HTML Deck Build
```

The goal is to produce a presentation that is:

* Clear
* Strategic
* Evidence-based
* Easy to present
* Build-ready (spec + actual HTML file)
* On brand
* Accessible
* Connected to a specific business ask

Phase C (HTML Deck Build) fires automatically after Phase B when the project has a clickable HTML prototype. It captures real prototype screenshots using Puppeteer, builds a self-contained 1280×720 HTML pitch deck with an animated demo slide, and serves it locally for immediate preview. If no prototype exists, Phase C produces the spec only.

---

# Phase A: Context Gathering

## Step 1: Scan the Project

Look for any available project files, such as:

* PRD
* Product brief
* Research notes
* Discovery report
* User interviews
* Data analysis
* Metrics
* Market research
* Competitor analysis
* Prototype
* Design mockups
* Design system
* Brand guide
* Business model
* Revenue model
* Roadmap
* Existing deck
* Demo script
* Stakeholder notes

If the user has not provided files, ask for the minimum context needed.

---

## Step 2: Extract What Is Already Known

Summarize the project using this structure:

```md
## What I already know

- Product / project:
- Target user:
- Target customer or buyer:
- Audience for the pitch:
- Core opportunity:
- User problem:
- Business problem:
- Current solution:
- Proposed solution:
- Prototype/demo status:
- Key evidence:
- Key metric:
- Cost of inaction:
- Main risk:
- Business ask:
- Brand direction:
```

Do not invent information. If something is missing, label it clearly as missing.

---

## Step 3: Flag Missing Context

Use this format:

```md
## What is missing

- Missing audience context:
- Missing decision needed:
- Missing proof point:
- Missing metric:
- Missing prototype detail:
- Missing business model detail:
- Missing objection:
- Missing brand requirement:
- Missing accessibility requirement:
- Missing next step:
```

---

## Step 4: Ask Strategic Questions

Ask only the questions needed to complete the pitch. Do not ask a long list unless the project is truly unclear.

Prioritize questions in this order:

### Audience

* Who are you presenting to?
* Are they executives, product leaders, designers, engineers, funders, investors, community stakeholders, or a mixed room?
* What does this audience care about most?

### Decision

* What decision should the audience make after the presentation?
* Are you asking for funding, approval, partnership, product investment, research approval, pilot launch, roadmap priority, or something else?

### Proof

* What is the strongest evidence that this problem matters?
* Do you have user research, analytics, revenue data, support tickets, cost data, accessibility findings, market data, or qualitative stories?

### Timing

* Why does this need to happen now?
* What happens if the team does nothing?

### Objection

* What is the biggest pushback expected in the room?
* Examples:
  * "Why now?"
  * "Why not later?"
  * "What is the ROI?"
  * "Do users really need this?"
  * "Is this just accessibility compliance?"
  * "What will this cost?"
  * "Who will maintain it?"

### Prototype

* Is there a prototype?
* Is it clickable, visual-only, coded, or conceptual?
* What part of the prototype should be demonstrated?

### Brand

* What brand should the deck follow?
* Are there required colors, logos, typography, layouts, or design system rules?
* Should the tone feel executive, bold, educational, community-centered, technical, polished, or scrappy?

---

## Step 5: Confirm the Pitch Context

Before building the deck, create a short playback:

```md
## Pitch Context Confirmation

I am going to build this as:

- Audience:
- Goal of the pitch:
- Decision needed:
- Narrative style:
- Slide count:
- Main story arc:
- Main proof point:
- Biggest objection to address:
- Prototype/demo role:
- Brand direction:
- Output format:
```

If anything important is unclear, ask for clarification before moving to Phase B.

---

# Phase B: Story & Assembly

## Step 1: Choose the Narrative Style

Choose one primary narrative style and, if useful, one secondary style.

### Visionary

Use when the pitch needs to paint a future state.

Best for: funders, movement-building, public innovation, social impact, futurecasting, big product bets.

Tone: future-facing, motivational, expansive, possibility-driven.

### Strategist

Use when the pitch needs to persuade decision-makers through structure and logic.

Best for: product leaders, executives, roadmap decisions, business cases, investment decisions.

Tone: clear, analytical, evidence-led, structured.

### Teacher

Use when the audience needs help understanding the idea.

Best for: mixed audiences, cross-functional teams, complex products, new concepts, technical or unfamiliar ideas.

Tone: clear, simple, explanatory, step-by-step.

### Realist

Use when the room may be skeptical.

Best for: budget conversations, risk discussions, accessibility debt, operational pain, compliance concerns, systems change.

Tone: practical, grounded, direct, evidence-based.

For inclusive design, accessibility, and systems-change work, default to:

```text
Strategist + Realist
```

Unless the user is building a movement-facing or future-facing pitch, then use:

```text
Visionary + Strategist
```

---

# The 5-Part Pitch Story Arc

Every presentation should follow this structure:

```text
Open → The Plan → Why Now → The Unpack → The Ask
```

## 1. Open

Purpose: establish the validated opportunity, explain what is at stake, make the audience care quickly.

This section answers:
* What problem are we solving?
* Who is affected?
* Why does this matter?
* What is the cost of ignoring it?
* Why should this audience care?

Output includes: strong opening line, clear problem statement, user or market signal, business relevance point.

## 2. The Plan

Purpose: explain the proposed fix, connect the product idea to the investment needed, show how the solution works at a high level.

This section answers:
* What are we building?
* Who is it for?
* How does it solve the problem?
* What makes it different?
* What investment or support does it need?

Output includes: product summary, core features or service components, user benefit, business benefit, build or rollout approach.

## 3. Why Now

Purpose: create urgency, explain the timing, show the risk of delay.

This section answers:
* Why does this need to happen now?
* What is changing in the market, organization, community, policy, technology, or user behavior?
* What happens if we wait?
* What cost, risk, or opportunity grows over time?

Output includes: cost of inaction, timing evidence, market or organizational pressure, risk of delay, urgency statement.

## 4. The Unpack

Purpose: prove the idea, walk through the prototype or demo, connect evidence to outcomes.

This section answers:
* How does the solution work?
* What does the user experience look like?
* What is the metric chain?
* What proof do we have?
* What changes because this exists?

Output includes: prototype walkthrough, demo flow, evidence chain, metric chain, before/after comparison, user value, business value.

## 5. The Ask

Purpose: make the next step obvious, tell the room exactly what decision is needed.

This section answers:
* What do you need from the audience?
* What should happen next?
* Who owns the next step?
* What timeline is being proposed?
* What does success look like?

Output includes: clear ask, specific next step, resource request, timeline, owner, success criteria.

---

# Metric Chain

Every pitch should include a metric chain. Use this structure:

```text
Barrier → User behavior → Business impact → Proposed change → Expected outcome
```

Examples:

```text
Accessibility barrier → onboarding abandonment → fewer activated users → inclusive redesign → higher completion rate

Confusing content → more support tickets → higher operating cost → plain-language redesign → fewer tickets and faster task completion

Excluded user segment → lower adoption → missed revenue opportunity → inclusive product expansion → new growth channel
```

Do not invent numbers. If metrics are missing, write:

```text
Metric needed:
Assumption:
Recommended validation method:
```

---

# Recommended Slide Counts

Use the smallest number of slides that can carry the decision.

## 5 Slides — Demo day / short pitch / strong presenter / simple story

1. Open
2. The Plan
3. Why Now
4. The Unpack
5. The Ask

## 7 Slides — Balanced stakeholder deck / product or design review / cross-functional audience

1. Title
2. Open
3. User Problem
4. The Plan
5. Why Now
6. The Unpack
7. The Ask

## 8 Slides — Default. Use when the deck needs room for one proof slide, one prototype/demo slide, and one business case slide.

1. Title / Final Dotted Line
2. Validated Opportunity
3. User + System Problem
4. The Plan
5. Why Now / Cost of Inaction
6. Prototype / Demo Unpack
7. Business Case / Metric Chain
8. The Ask / Next Step

## 9–10 Slides — Deck must stand alone without the presenter, or there is more evidence to explain.

Do not exceed 20 slides unless the user explicitly asks. Default to **8 slides**.

---

# Phase C: HTML Deck Build

Phase C fires after Phase B when the project contains a clickable HTML prototype (`[company]-prototype-*.html`). It builds a self-contained pitch deck as a real HTML file — no Canva, no Slides — with live prototype screenshots and an animated demo slide.

---

## Step 1: Check Prerequisites

```bash
node --version   # Node.js v18+ required
```

If Node.js is not available, skip Phase C and deliver the Canva AI prompt from the spec instead.

---

## Step 2: Discover Prototype Screen Structure

Read the prototype HTML to identify screen IDs and navigation functions before writing any capture code.

```bash
grep -n 'id="screen-' [company]-prototype-*.html
grep -n 'function go\|function start\|function nav\|function activate' [company]-prototype-*.html
```

Look for:
- Screen container IDs: `id="screen-1"`, `id="screen-2"`, etc.
- Navigation functions the prototype exposes on `window`: `go()`, `startScenario()`, plus any product-specific functions like `navSpending()`, `activateGoal()`
- Whether any screens require scrolling to reveal content (check for `overflow-y: auto` + `min-height` on screen containers)
- The CSS selector for the phone frame element (typically `.phone-frame`)

---

## Step 3: Install Puppeteer

Install in the company subfolder, not the repo root:

```bash
cd [company]/
npm init -y
npm install puppeteer
```

Immediately add to `.gitignore` at the repo root:

```
[company]/node_modules/
[company]/package.json
[company]/package-lock.json
```

---

## Step 4: Write `build-deck.js`

Write `[company]/build-deck.js`. The script has two responsibilities: **capture** and **build**.

### Capture function

```javascript
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function captureScreenshots() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  try {
    const page = await browser.newPage();
    // Match the prototype's phone frame width; dpr=2 for retina sharpness
    await page.setViewport({ width: 500, height: 960, deviceScaleFactor: 2 });

    const url = 'file://' + path.resolve(__dirname, '[prototype-filename].html');
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 25000 });
    await sleep(2500); // wait for web fonts

    const snap = async () => {
      const el = await page.$('.phone-frame'); // adjust to match prototype
      return 'data:image/png;base64,' + await el.screenshot({ encoding: 'base64' });
    };

    // Navigate to each key screen using the prototype's own JS functions
    await page.evaluate(() => window.startScenario('A')); await sleep(400);
    const home = await snap();

    await page.evaluate(() => window.navSpending()); await sleep(400);
    const s1top = await snap();

    // Scroll to reveal off-screen content (e.g. a card below the fold)
    await page.evaluate(() => {
      document.querySelector('.phone-frame').scrollTop = 9999;
    });
    await sleep(350);
    const s1 = await snap();

    await page.evaluate(() => window.go('screen-2')); await sleep(400);
    const s2 = await snap();

    await page.evaluate(() => window.activateGoal()); await sleep(500);
    const s3 = await snap();

    await page.evaluate(() => window.go('screen-4')); await sleep(400);
    const s4 = await snap();

    return { home, s1top, s1, s2, s3, s4 };
  } finally {
    await browser.close();
  }
}
```

**Capture rules:**
- Always wait 300–500ms after triggering a screen change before snapping — let CSS transitions and re-renders complete
- Wait 2–2.5 seconds after page load for web fonts
- Screenshot the phone frame element specifically, not the full page
- Use `deviceScaleFactor: 2` for sharp images at any display size
- Name screenshots by their role (`home`, `s1`, `s2`, `s3`, `s4`) — not by screen number — so the build function can reference them semantically

### Build function

```javascript
function buildDeck(shots) {
  // Store all screenshots once as a JSON object.
  // All <img data-shot="key"> elements get their src populated by JS.
  const shotsJson = JSON.stringify(shots);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>[Product] — [Pitch Title]</title>
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: #0c1020;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  overflow: hidden;
}

.stage-wrap { position: relative; transform-origin: top center; }
.deck { width: 1280px; height: 720px; position: relative; overflow: hidden; box-shadow: 0 24px 80px rgba(0,0,0,0.6); }

.slide { width: 1280px; height: 720px; background: #fff; position: absolute; inset: 0; display: none; overflow: hidden; }
.slide.active { display: block; }

/* Left accent bar */
.bar { position: absolute; left: 0; top: 0; bottom: 0; width: 7px; background: [brand-blue]; }

/* Content padding — accent bar on left means left padding = 76px (7px bar + 69px space) */
.pad { padding: 46px 68px 48px 76px; height: 100%; display: flex; flex-direction: column; }

/* Badge chip — MUST have align-self: flex-start to prevent flex-column stretch */
.badge {
  display: inline-block;
  align-self: flex-start;
  font-size: 10px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.1em;
  color: [brand-blue]; background: [brand-blue-light];
  border: 1px solid [brand-blue-border];
  padding: 3px 11px; border-radius: 20px; margin-bottom: 12px;
}

/* Phone image: populated by JS via data-shot attribute */
[data-shot] { display: block; }

/* Animated demo phone */
#demo-phone { transition: opacity 0.25s ease; }

/* Navigation bar */
.nav-bar {
  position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
  display: flex; align-items: center; gap: 14px;
  background: rgba(12,16,32,0.75); backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 10px 20px; border-radius: 40px; color: #fff; z-index: 200;
}
.nav-btn {
  width: 34px; height: 34px; border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.3); background: none; color: #fff;
  font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center;
}
.nav-btn:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,0.25); border: none; cursor: pointer; }
.dot.on { background: #fff; transform: scale(1.3); }
</style>
</head>
<body>

<div class="stage-wrap" id="stage">
<div class="deck">
  <!-- SLIDES HERE — one .slide div per slide, first gets class="slide active" -->
  <!-- Use data-shot="s1" etc. on <img> elements — JS populates src from SHOTS -->
  <!-- Animated demo phone: <img id="demo-phone" alt="cycling description" style="opacity:0;" /> -->
</div>
</div>

<nav class="nav-bar" aria-label="Slide navigation">
  <button class="nav-btn" onclick="prevSlide()" aria-label="Previous slide">‹</button>
  <div id="dots" role="tablist"></div>
  <span id="slide-lbl" aria-live="polite">1 / 10</span>
  <button class="nav-btn" onclick="nextSlide()" aria-label="Next slide">›</button>
</nav>

<script>
const SHOTS = ${shotsJson};

// Populate all phone images from SHOTS
document.querySelectorAll('[data-shot]').forEach(function(el) {
  var key = el.dataset.shot;
  if (SHOTS[key]) el.src = SHOTS[key];
});

// Animated demo phone — crossfade cycle through key screens
var demoEl = document.getElementById('demo-phone');
var demoSeq = ['s1', 's2', 's3', 's4']; // adjust to match captured screens
var demoIdx = 0;
if (demoEl && SHOTS[demoSeq[0]]) {
  demoEl.src = SHOTS[demoSeq[0]];
  demoEl.style.opacity = '1';
  setInterval(function() {
    demoEl.style.opacity = '0';
    setTimeout(function() {
      demoIdx = (demoIdx + 1) % demoSeq.length;
      demoEl.src = SHOTS[demoSeq[demoIdx]];
      demoEl.style.opacity = '1';
    }, 280);
  }, 2800);
}

// Slide navigation
var slides = document.querySelectorAll('.slide');
var cur = 0;
var total = slides.length;

function buildDots() {
  var c = document.getElementById('dots');
  for (var i = 0; i < total; i++) {
    var btn = document.createElement('button');
    btn.className = 'dot' + (i === 0 ? ' on' : '');
    btn.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    btn.setAttribute('role', 'tab');
    btn.dataset.idx = i;
    btn.onclick = function() { show(parseInt(this.dataset.idx)); };
    c.appendChild(btn);
  }
}

function show(n) {
  slides[cur].classList.remove('active');
  document.querySelectorAll('.dot')[cur].classList.remove('on');
  cur = (n + total) % total;
  slides[cur].classList.add('active');
  document.querySelectorAll('.dot')[cur].classList.add('on');
  document.getElementById('slide-lbl').textContent = (cur + 1) + ' / ' + total;
}

function nextSlide() { show(cur + 1); }
function prevSlide() { show(cur - 1); }

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
    e.preventDefault(); nextSlide();
  }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault(); prevSlide();
  }
});

// Scale deck to fill viewport — subtract 70px for nav bar
function scaleDeck() {
  var s = Math.min(window.innerWidth / 1280, (window.innerHeight - 70) / 720);
  var wrap = document.getElementById('stage');
  wrap.style.transform = 'scale(' + s + ')';
  wrap.style.width = '1280px';
  wrap.style.height = '720px';
}
window.addEventListener('resize', scaleDeck);
scaleDeck();
buildDots();
</script>
</body>
</html>`;
}

async function main() {
  console.log('Capturing prototype screenshots...');
  const shots = await captureScreenshots();
  console.log('Building pitch deck...');
  const html = buildDeck(shots);
  const outPath = path.join(__dirname, '[company]-pitch-[h#]-[slug].html');
  fs.writeFileSync(outPath, html, 'utf8');
  console.log('Done: ' + Math.round(html.length / 1024) + ' KB');
}

main().catch(function(err) { console.error('Build failed:', err.message); process.exit(1); });
```

---

## Step 5: Run the Build Script

```bash
cd [company]/
node build-deck.js
```

Expected output:
```
Capturing prototype screenshots...
Building pitch deck...
Done: [company]-pitch-[h#]-[slug].html ([N] KB)
```

A typical deck with 5–6 prototype screenshots runs 600–900 KB.

---

## Step 6: Verify — Screenshot Every Slide

Before reporting completion, take a quick preview screenshot of each slide using Puppeteer:

```javascript
const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
await page.goto('file://' + path.resolve('[company]', '[output].html'), { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 2000));

for (let i = 0; i < slideCount; i++) {
  await page.screenshot({ path: 'preview-slide-' + (i + 1) + '.png' });
  if (i < slideCount - 1) {
    await page.keyboard.press('ArrowRight');
    await new Promise(r => setTimeout(r, 400));
  }
}
await browser.close();
```

Read each preview image with the Read tool. Check:
- Badge chips are pill-shaped, not full-width (if full-width, add `align-self: flex-start` to `.badge`)
- Phone mockups show actual prototype content, not blank images
- Closing lines on the last slide are not hidden behind the nav bar
- All data tables and stat numbers are readable

Delete preview files after verification: `rm preview-slide-*.png`

---

## Step 7: Serve Locally for Preview

Start a local HTTP server so the deck can be opened in a browser:

```bash
node -e "
const http = require('http');
const fs = require('fs');
const path = require('path');
http.createServer((req, res) => {
  fs.readFile(path.join('[company]', '[output].html'), (err, data) => {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}).listen(4321, () => console.log('ready'));
" &
```

Tell the user: **http://localhost:4321** — use ← → arrow keys or the dot indicators to navigate.

---

## Phase C: HTML Deck Design Reference

### Dimensions and stage
- Slide: **1280 × 720px** (Google Slides 16:9 widescreen)
- Stage background: **#0c1020** — dark, makes white slides pop in presentation mode
- Drop shadow on deck: `box-shadow: 0 24px 80px rgba(0,0,0,0.6)`

### CSS patterns that must be correct
| Pattern | Why it matters |
|---|---|
| `.badge { align-self: flex-start; }` | Prevents badge chip from stretching full-width in a flex column container |
| `.slide { position: absolute; inset: 0; display: none; }` | All slides stack in the same space; only `.active` is shown |
| `padding: 46px 68px 48px 76px` on `.pad` | 76px left accounts for the 7px accent bar; 48px bottom clears the nav bar at scaled sizes |
| `transform-origin: top center` on `#stage` | Scale from top so the deck stays anchored to the viewport top |
| Scale formula: `Math.min(innerWidth / 1280, (innerHeight - 70) / 720)` | The `- 70` reserves space for the fixed nav bar |

### Phone mockup HTML pattern
```html
<!-- Static phone — src populated by JS -->
<img data-shot="s1"
     class="pimg"
     alt="Screen 1: [full description of what the screen shows]"
     style="height:310px; width:auto;"
/>

<!-- Animated demo phone — starts opacity:0, JS sets src + fades in -->
<img id="demo-phone"
     alt="Demo cycling through [N] screens automatically: [describe each state]"
     style="height:410px; width:auto; opacity:0; transition:opacity 0.25s;"
/>
```

### Animated demo slide layout
```html
<div style="display:flex; gap:28px; align-items:center; flex:1; margin-top:8px;">

  <!-- Left: live cycling phone with label -->
  <div style="display:flex; flex-direction:column; align-items:center; gap:10px; flex-shrink:0;">
    <div style="font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:0.09em; color:[brand-blue];">Live flow</div>
    <img id="demo-phone" alt="[cycling description]" style="height:410px;width:auto;opacity:0;transition:opacity 0.25s;" />
    <div style="font-size:10px; color:[text-secondary]; text-align:center;">Auto-cycling · 2.5s per screen</div>
  </div>

  <!-- Separator -->
  <div style="font-size:28px; color:[brand-blue-border]; flex-shrink:0;">→</div>

  <!-- Right: 4 static phones in a grid -->
  <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:18px; flex:1; align-items:center;">
    <!-- one .phone-wrap per screen -->
    <div class="phone-wrap">
      <div class="phone-num">1</div>
      <img data-shot="s1" class="pimg" alt="Screen 1: [description]" style="height:310px;width:auto;" />
      <div class="pcap">[caption]</div>
    </div>
    <!-- repeat for 2, 3, 4 -->
  </div>

</div>
```

### Phase C fallback — no prototype available
If there is no HTML prototype in the project:
- Skip Puppeteer entirely
- Build the HTML deck with CSS-only phone outlines as placeholders
- Add a note on the demo slide: "Prototype screenshots will be embedded when `/build-html-prototype` runs"
- Deliver the Canva AI prompt from the spec instead of a live deck

---

# Presentation Output Format

When building the presentation spec, use this format:

```md
# Presentation Spec

## Deck Metadata

- Title:
- Subtitle:
- Audience:
- Goal:
- Decision needed:
- Slide count:
- Narrative style:
- Tone:
- Format:
- Tool:
- Brand requirements:
- Accessibility requirements:

## Story Arc

1. Open:
2. The Plan:
3. Why Now:
4. The Unpack:
5. The Ask:

## Slide-by-Slide Blueprint

### Slide [N]: [Title]

- Story role:
- Headline:
- Subheadline:
- Visual direction:
- Content blocks:
- Speaker notes:
- Accessibility notes:
```

Repeat the slide block for each slide.

---

# Speaker Script Format

Generate a speaker script using this format:

```md
# Speaker Script

## Slide [N]: [Title]

**Purpose:**
Explain the role of this slide.

**Speaker notes:**
Write the talking points in natural spoken language.

**Key line:**
One memorable sentence the presenter should land.
```

Keep speaker notes clear and conversational. Do not make them sound like corporate filler.

---

# Brand Requirements

Always identify or ask for:

* Logo
* Primary colors
* Secondary colors
* Typography
* Visual style
* Layout style
* Icon style
* Illustration style
* Photography style
* Required disclaimers
* Accessibility requirements
* Alt text needs
* Motion or transition preferences
* CTA style

If brand guidance is missing, create a practical default brand direction.

For inclusive design, accessibility, social impact, or community-centered work, default to:

* Clear hierarchy
* High contrast
* Plain language
* Large readable type
* Simple layouts
* Low clutter
* Human-centered visuals
* Systems diagrams where helpful
* Strong but not alarmist framing
* Avoid decorative-only meaning
* Avoid inspiration-porn framing
* Avoid blaming users for system barriers

---

# Inclusive Design and Power-Aware Framing

When the pitch is about inclusive design, accessibility, disability, race, equity, public services, social impact, or marginalized communities, apply these rules:

## Do

* Name the system barrier.
* Explain who is excluded and how.
* Connect inclusion to business, service, or operational value.
* Use plain language.
* Respect lived experience.
* Separate user behavior from system failure.
* Show the cost of exclusion.
* Show the value of repair.
* Include accessibility notes.

## Do Not

* Frame people as "vulnerable" without context.
* Treat accessibility as only compliance.
* Use pity-based language.
* Use inspiration-porn framing.
* Blame users for workarounds.
* Overpromise ROI without evidence.
* Use vague equity language with no operational meaning.
* Hide the business ask behind moral language.

---

# Quality Checklist

Before finalizing, check:

## Strategy

* Does the audience know why this matters?
* Is the business ask clear?
* Is the decision needed specific?
* Does the pitch address the strongest objection?
* Is the urgency real and evidence-based?

## Story

* Does the open create stakes?
* Does the plan explain the fix?
* Does "why now" explain urgency?
* Does the unpack prove the solution?
* Does the ask name the next step?

## Evidence

* Are claims backed by research, data, examples, or labeled assumptions?
* Are missing metrics clearly marked?
* Is the metric chain logical?
* Is the cost of inaction specific?

## Presentation

* Does each slide have one job?
* Do headlines carry the story?
* Are speaker notes useful?
* Is the visual direction specific enough to build?
* Is the deck accessible?

## Inclusion

* Does the deck avoid extractive framing?
* Does it name barriers instead of blaming users?
* Does it connect inclusive design to value?
* Does it include accessibility guidance?

---

# Final Response Structure

When the user asks you to build the pitch, return:

```md
# Ready-to-Pitch Output

## 1. Context Summary

## 2. Missing Context

## 3. Strategic Questions

## 4. Confirmed Story Arc

## 5. Presentation Spec
   Saved to: [company]-pitch-[h#]-[slug].md

## 6. Speaker Script

## 7. HTML Deck (Phase C)
   Saved to: [company]-pitch-[h#]-[slug].html
   File size: [N] KB
   Screens captured: [list]
   Animated demo: Slide [N] — cycles [screen list] every 2.8s
   Preview: http://localhost:4321

## 8. Build Checklist

## 9. Git Commit Suggestion
```

If the project has no HTML prototype, omit section 7 and deliver the Canva AI prompt from the spec instead.

If context is incomplete, do not generate the full deck yet. Instead return:

```md
# Ready-to-Pitch Context Check

## What I already know

## What is missing

## Strategic questions I need answered before building the deck
```

---

# Build Checklist

```md
## Build Checklist

### Phase A — Context
- [ ] Confirm audience
- [ ] Confirm decision needed
- [ ] Confirm slide count
- [ ] Confirm brand direction
- [ ] Confirm strongest proof point
- [ ] Confirm biggest objection

### Phase B — Story & Spec
- [ ] Build slide structure
- [ ] Add speaker notes
- [ ] Add visual direction
- [ ] Add accessibility notes
- [ ] Review for clarity
- [ ] Review for inclusion and power dynamics
- [ ] Test with skeptical audience lens
- [ ] Save [company]-pitch-[h#]-[slug].md

### Phase C — HTML Deck (if prototype available)
- [ ] Grep prototype for screen IDs and navigation functions
- [ ] Install Puppeteer in [company]/ subfolder
- [ ] Add node_modules / package.json / package-lock.json to .gitignore
- [ ] Write build-deck.js with capture + build functions
- [ ] Run node build-deck.js — confirm screenshots captured and deck built
- [ ] Screenshot all slides with Puppeteer to verify layout
- [ ] Check: badge chips are pill-shaped (not full-width) — add align-self: flex-start if needed
- [ ] Check: phone mockups show real prototype content
- [ ] Check: closing lines on final slide not hidden behind nav bar
- [ ] Delete preview-slide-*.png files
- [ ] Start local server on port 4321
- [ ] Confirm deck opens at http://localhost:4321
- [ ] Save [company]-pitch-[h#]-[slug].html

### Final
- [ ] Commit to git
```

---

# Git Workflow

Recommend this workflow:

```bash
git checkout -b ready-to-pitch/[project-name]

# Stage the spec, HTML deck, and build script — not node_modules
git add [company]/[company]-pitch-[h#]-[slug].md
git add [company]/[company]-pitch-[h#]-[slug].html
git add [company]/build-deck.js
git add .gitignore

git commit -m "Add ready-to-pitch presentation spec and HTML deck for [project-name]"
```

The `build-deck.js` script is committed so the deck can be regenerated if the prototype changes. `node_modules/`, `package.json`, and `package-lock.json` stay out of git via `.gitignore`.

---

# Important Behavior Rules

* Do not invent metrics.
* Do not fake certainty.
* Do not skip the business ask.
* Do not bury the user problem under features.
* Do not create generic pitch fluff.
* Do not over-ask questions.
* Do not make the presentation only about aesthetics.
* Do not make accessibility sound like charity.
* Do not ignore power dynamics.
* Do not proceed to full deck assembly if the core decision is unclear.
* Always connect the pitch to a decision, an audience, and a next step.

**Phase C specific:**
* Always grep the prototype for screen IDs and nav functions before writing capture code — never guess function names.
* Always screenshot every slide after building the deck and read the images before reporting completion.
* If badge chips render full-width, add `align-self: flex-start` to `.badge` and rebuild — do not ship a broken layout.
* Never store `data:image/png;base64,...` strings twice in the HTML — use a single `SHOTS` JSON object and populate `<img>` elements via JS.
* The animated demo phone uses JS `setInterval` + opacity crossfade — not a real GIF file. This gives smoother transitions and no color degradation.
* Always add `node_modules/`, `package.json`, `package-lock.json` to `.gitignore` before committing anything.
* Commit `build-deck.js` so the deck can be regenerated when the prototype changes.
