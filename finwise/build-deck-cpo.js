// build-deck-cpo.js
// Builds the CPO / Product Leadership launch brief for FinWise H2: Goal Activation.
// 6-slide Strategist deck — business signal, mechanism, experiment, status, ask.
// Usage: node build-deck-cpo.js

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const sleep = ms => new Promise(r => setTimeout(r, ms));

// ─── 1. Screenshot capture ────────────────────────────────────────────────────

async function captureScreenshots() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 500, height: 960, deviceScaleFactor: 2 });

    const url = 'file://' + path.resolve(__dirname, 'finwise-prototype-h2-goal-activation.html');
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 25000 });
    await sleep(2500);

    const snap = async () => {
      const el = await page.$('.phone-frame');
      return 'data:image/png;base64,' + await el.screenshot({ encoding: 'base64' });
    };

    await page.evaluate(() => window.startScenario('A'));
    await sleep(400);
    const home = await snap();

    await page.evaluate(() => window.navSpending());
    await sleep(400);
    const s1top = await snap();

    await page.evaluate(() => {
      document.querySelector('.phone-frame').scrollTop = 9999;
    });
    await sleep(350);
    const s1 = await snap();

    await page.evaluate(() => window.go('screen-2'));
    await sleep(400);
    const s2 = await snap();

    await page.evaluate(() => window.activateGoal());
    await sleep(500);
    const s3 = await snap();

    await page.evaluate(() => window.go('screen-4'));
    await sleep(400);
    const s4 = await snap();

    return { home, s1top, s1, s2, s3, s4 };

  } finally {
    await browser.close();
  }
}

// ─── 2. Deck builder ─────────────────────────────────────────────────────────

function buildDeck(shots) {
  const shotsJson = JSON.stringify(shots);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>FinWise H2 Goal Activation — Launch Brief (Product Leadership)</title>
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: #0c1020;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
.bar { position: absolute; left: 0; top: 0; bottom: 0; width: 7px; background: #2563EB; }

/* Content padding — 76px left clears the bar + breathing room */
.pad { padding: 44px 68px 48px 80px; height: 100%; display: flex; flex-direction: column; }

/* Badge chip */
.badge {
  display: inline-block;
  align-self: flex-start;
  font-size: 10px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.1em;
  color: #2563EB; background: #EFF6FF;
  border: 1px solid #BFDBFE;
  padding: 3px 11px; border-radius: 20px; margin-bottom: 14px;
}

/* Typography */
.h1  { font-size: 52px; font-weight: 800; color: #111827; line-height: 1.1; }
.h2  { font-size: 36px; font-weight: 700; color: #111827; line-height: 1.2; }
.sub { font-size: 18px; color: #6B7280; line-height: 1.5; margin-top: 8px; }
.sub-sm { font-size: 14px; color: #6B7280; line-height: 1.5; }
.label     { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #6B7280; }
.label-blu { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #2563EB; }
.blue  { color: #2563EB; }
.green { color: #16A34A; }
.muted { color: #9CA3AF; }

/* Phone images */
.pimg { display: block; width: auto; border-radius: 8px; }

/* Animated demo phone */
#demo-phone { transition: opacity 0.25s ease; }

/* Stat block */
.stat-num { font-size: 52px; font-weight: 800; color: #2563EB; line-height: 1; }
.stat-label { font-size: 14px; color: #6B7280; line-height: 1.4; max-width: 200px; margin-top: 4px; }

/* Callout box */
.callout {
  background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 10px;
  padding: 14px 18px;
}
.callout-body { font-size: 14px; color: #111827; line-height: 1.6; }
.callout-em { font-weight: 700; }

/* Info chips row */
.chip {
  display: inline-block;
  background: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 8px;
  padding: 7px 14px;
}
.chip-lbl { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.09em; color: #9CA3AF; }
.chip-val { font-size: 13px; font-weight: 600; color: #111827; margin-top: 2px; }

/* Status table */
.status-tbl { width: 100%; border-collapse: collapse; font-size: 13px; }
.status-tbl th { background: #F9FAFB; padding: 6px 12px; text-align: left; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: #6B7280; border-bottom: 1px solid #E5E7EB; }
.status-tbl td { padding: 7px 12px; color: #374151; border-bottom: 1px solid #F3F4F6; vertical-align: top; line-height: 1.4; }
.status-tbl tr:last-child td { border-bottom: none; }
.done { color: #16A34A; font-weight: 700; }
.todo { color: #D97706; font-weight: 700; }

/* Scenario table */
.scen-tbl { width: 100%; border-collapse: collapse; font-size: 13px; }
.scen-tbl th { background: #F9FAFB; padding: 7px 12px; text-align: left; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: #6B7280; border-bottom: 1px solid #E5E7EB; }
.scen-tbl td { padding: 8px 12px; color: #374151; border-bottom: 1px solid #F3F4F6; vertical-align: middle; }
.scen-tbl tr:last-child td { border-bottom: none; }
.arrup { font-size: 13px; font-weight: 700; color: #16A34A; }

/* Ask items */
.ask-item { display: flex; align-items: flex-start; gap: 14px; padding: 12px 16px; background: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 10px; }
.ask-num { width: 28px; height: 28px; border-radius: 50%; background: #2563EB; color: #fff; font-size: 13px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.ask-title { font-size: 14px; font-weight: 700; color: #111827; }
.ask-body  { font-size: 12px; color: #6B7280; margin-top: 2px; line-height: 1.4; }

/* Metric chain */
.chain-row { display: flex; align-items: center; gap: 8px; }
.chain-pill { background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 6px; padding: 4px 10px; font-size: 12px; font-weight: 600; color: #1D4ED8; white-space: nowrap; }
.chain-arr  { font-size: 14px; color: #93C5FD; flex-shrink: 0; }

/* Timeline bar */
.timeline { display: flex; align-items: center; gap: 0; }
.tm-node { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.tm-dot { width: 12px; height: 12px; border-radius: 50%; background: #2563EB; flex-shrink: 0; }
.tm-dot-now { background: #16A34A; width: 14px; height: 14px; }
.tm-line { height: 2px; background: #BFDBFE; flex: 1; min-width: 50px; }
.tm-lbl { font-size: 10px; font-weight: 700; color: #374151; text-align: center; max-width: 90px; }
.tm-sub { font-size: 9px; color: #9CA3AF; text-align: center; }

/* Three-outcome columns for slide 4 */
.out-col { flex: 1; padding: 12px 14px; border-radius: 10px; display: flex; flex-direction: column; gap: 6px; }
.out-confirm { background: #F0FDF4; border: 1px solid #BBF7D0; }
.out-partial  { background: #FFFBEB; border: 1px solid #FDE68A; }
.out-none     { background: #FEF2F2; border: 1px solid #FECACA; }
.out-icon  { font-size: 18px; }
.out-title { font-size: 13px; font-weight: 700; color: #111827; }
.out-body  { font-size: 12px; color: #374151; line-height: 1.5; }
.out-act   { font-size: 12px; font-weight: 700; color: #2563EB; margin-top: 4px; }

/* Nav bar */
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
<div class="deck" role="main" aria-label="FinWise H2 Goal Activation — Launch Brief for Product Leadership">

<!-- ═══════════════════════════════════════════════════════════════
     SLIDE 1 — Title / Cover
════════════════════════════════════════════════════════════════ -->
<div class="slide active" id="slide-1" role="region" aria-label="Slide 1: Title">
  <div class="bar" aria-hidden="true"></div>
  <div class="pad" style="justify-content:center; gap:0;">
    <!-- Logo mark -->
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:28px;">
      <div style="width:32px; height:32px; background:#2563EB; border-radius:8px; display:flex; align-items:center; justify-content:center;" aria-hidden="true">
        <span style="color:#fff; font-weight:800; font-size:16px;">F</span>
      </div>
      <span style="font-size:18px; font-weight:700; color:#111827;">FinWise</span>
    </div>
    <div class="badge">H2 — Launch Brief</div>
    <div class="h1" style="max-width:820px; margin-bottom:16px;">
      FinWise H2 Goal Activation:<br>Launch Brief
    </div>
    <div class="sub" style="max-width:680px; font-size:19px; margin-bottom:36px;">
      What we're launching, what 90 days will prove,<br>and what we need from product leadership.
    </div>
    <div style="display:flex; gap:16px; flex-wrap:wrap;">
      <div class="chip">
        <div class="chip-lbl">Audience</div>
        <div class="chip-val">Product Leadership / CPO</div>
      </div>
      <div class="chip">
        <div class="chip-lbl">Status</div>
        <div class="chip-val">Build starting now</div>
      </div>
      <div class="chip">
        <div class="chip-lbl">Experiment</div>
        <div class="chip-val">Q3 2026 · 90-day holdout</div>
      </div>
      <div class="chip">
        <div class="chip-lbl">ARR Upside</div>
        <div class="chip-val">$760K – $1.3M</div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     SLIDE 2 — The Business Signal
════════════════════════════════════════════════════════════════ -->
<div class="slide" id="slide-2" role="region" aria-label="Slide 2: The Business Signal">
  <div class="bar" aria-hidden="true"></div>
  <div class="pad">
    <div class="badge">Open</div>
    <div class="h2" style="max-width:860px;">The upgrade path runs entirely through goal-setting. 81% of users never reach it.</div>
    <div class="sub" style="margin-bottom:16px;">Three numbers tell the whole story.</div>

    <div style="display:flex; gap:32px; flex:1; align-items:flex-start; margin-top:4px;">

      <!-- Left: 3 stats -->
      <div style="display:flex; flex-direction:column; gap:20px; flex-shrink:0; min-width:260px;">
        <div>
          <div class="stat-num">308K</div>
          <div class="stat-label">accounts that have never set a savings goal — 81% of the user base</div>
        </div>
        <div>
          <div class="stat-num">2.6×</div>
          <div class="stat-label">churn difference — goal-setters at 14.4%, non-goal-setters at 37.5%</div>
        </div>
        <div>
          <div class="stat-num">98.7%</div>
          <div class="stat-label">of all upgrade events came from accounts that previously hit the savings goal paywall</div>
        </div>
      </div>

      <!-- Divider -->
      <div style="width:1px; background:#E5E7EB; align-self:stretch; flex-shrink:0;"></div>

      <!-- Right: metric chain + key line -->
      <div style="flex:1; display:flex; flex-direction:column; gap:14px; justify-content:center;">
        <div class="label-blu" style="margin-bottom:4px;">Why the gap is a revenue problem</div>

        <div style="display:flex; flex-direction:column; gap:6px;">
          <div class="chain-row"><div class="chain-pill">81% never set a goal</div></div>
          <div style="padding-left:16px; display:flex; align-items:center; gap:6px;">
            <span class="chain-arr">↓</span>
            <span style="font-size:12px; color:#6B7280;">never hit the savings_goal paywall</span>
          </div>
          <div class="chain-row" style="padding-left:0;"><div class="chain-pill">Never see the upgrade prompt</div></div>
          <div style="padding-left:16px; display:flex; align-items:center; gap:6px;">
            <span class="chain-arr">↓</span>
            <span style="font-size:12px; color:#6B7280;">never convert to Pro</span>
          </div>
          <div class="chain-row"><div class="chain-pill" style="background:#FEF2F2; border-color:#FECACA; color:#DC2626;">$380K ARR missed per 1pp conversion</div></div>
        </div>

        <div style="margin-top:8px; background:#111827; border-radius:10px; padding:12px 16px;">
          <div style="font-size:14px; font-weight:700; color:#fff; line-height:1.5;">
            "Our revenue model depends on goal activation.<br>Most users never get there — and we know exactly where the gap is."
          </div>
        </div>

        <div style="display:flex; gap:10px; margin-top:4px;">
          <div style="flex:1; background:#F0FDF4; border:1px solid #BBF7D0; border-radius:8px; padding:8px 12px; text-align:center;">
            <div style="font-size:11px; color:#16A34A; font-weight:700; text-transform:uppercase; letter-spacing:0.08em;">Current scale</div>
            <div style="font-size:13px; color:#111827; font-weight:600; margin-top:2px;">~$63K/month excess churn</div>
          </div>
          <div style="flex:1; background:#FEF2F2; border:1px solid #FECACA; border-radius:8px; padding:8px 12px; text-align:center;">
            <div style="font-size:11px; color:#DC2626; font-weight:700; text-transform:uppercase; letter-spacing:0.08em;">At 1M users (2026 target)</div>
            <div style="font-size:13px; color:#111827; font-weight:600; margin-top:2px;">~$166K/month excess churn</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     SLIDE 3 — What We're Launching
════════════════════════════════════════════════════════════════ -->
<div class="slide" id="slide-3" role="region" aria-label="Slide 3: What we are launching — the auto-drafted goal">
  <div class="bar" aria-hidden="true"></div>
  <div class="pad">
    <div class="badge">The Plan</div>
    <div class="h2" style="max-width:820px;">One card. One tap. Zero decisions.</div>
    <div class="sub" style="margin-bottom:16px;">Surfaced exactly when users are looking at their own data for the first time.</div>

    <div style="display:flex; gap:32px; flex:1; align-items:flex-start; margin-top:4px;">

      <!-- Left: mechanism + principle -->
      <div style="flex:1.2; display:flex; flex-direction:column; gap:14px;">

        <div style="display:flex; flex-direction:column; gap:10px;">
          <div style="display:flex; gap:12px; align-items:flex-start; padding:10px 14px; background:#F9FAFB; border:1px solid #E5E7EB; border-radius:8px;">
            <div style="width:28px; height:28px; background:#2563EB; border-radius:6px; display:flex; align-items:center; justify-content:center; flex-shrink:0;" aria-hidden="true">
              <span style="color:#fff; font-size:12px; font-weight:700;">1</span>
            </div>
            <div>
              <div style="font-size:14px; font-weight:700; color:#111827;">Category — pre-selected</div>
              <div style="font-size:13px; color:#6B7280; margin-top:2px;">User's top spending category from their actual transaction data (e.g., Dining)</div>
            </div>
          </div>
          <div style="display:flex; gap:12px; align-items:flex-start; padding:10px 14px; background:#F9FAFB; border:1px solid #E5E7EB; border-radius:8px;">
            <div style="width:28px; height:28px; background:#2563EB; border-radius:6px; display:flex; align-items:center; justify-content:center; flex-shrink:0;" aria-hidden="true">
              <span style="color:#fff; font-size:12px; font-weight:700;">2</span>
            </div>
            <div>
              <div style="font-size:14px; font-weight:700; color:#111827;">Amount — pre-calculated</div>
              <div style="font-size:13px; color:#6B7280; margin-top:2px;">10% below actual 30-day spend in that category, rounded to the nearest dollar (e.g., $306 from $340)</div>
            </div>
          </div>
          <div style="display:flex; gap:12px; align-items:flex-start; padding:10px 14px; background:#F9FAFB; border:1px solid #E5E7EB; border-radius:8px;">
            <div style="width:28px; height:28px; background:#2563EB; border-radius:6px; display:flex; align-items:center; justify-content:center; flex-shrink:0;" aria-hidden="true">
              <span style="color:#fff; font-size:12px; font-weight:700;">3</span>
            </div>
            <div>
              <div style="font-size:14px; font-weight:700; color:#111827;">Three actions on the card</div>
              <div style="font-size:13px; color:#6B7280; margin-top:2px;">Activate goal (primary) · Adjust amount (secondary) · Not now (escape)</div>
            </div>
          </div>
        </div>

        <div style="padding:12px 16px; background:#1E40AF; border-radius:10px;">
          <div style="font-size:14px; color:#fff; line-height:1.6; font-style:italic;">
            "The auto-draft doesn't make the decision for the user.<br>It removes the blank-state decision. Control is preserved."
          </div>
        </div>

        <div style="display:flex; gap:8px; align-items:center;">
          <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:6px; padding:5px 10px; font-size:12px; color:#16A34A; font-weight:700;">✓ Prototype built</div>
          <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:6px; padding:5px 10px; font-size:12px; color:#16A34A; font-weight:700;">✓ WCAG 2.1 AA cleared</div>
          <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:6px; padding:5px 10px; font-size:12px; color:#16A34A; font-weight:700;">✓ 9/9 issues closed</div>
        </div>

      </div>

      <!-- Right: animated phone demo -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:8px; flex-shrink:0;">
        <div class="label-blu">Live flow — 4 screens</div>
        <img id="demo-phone"
             alt="Animated prototype cycling through: spending summary with auto-draft card showing Dining goal of $306, adjust amount screen with stepper, goal set success state, and goal progress screen."
             style="height:430px; width:auto; opacity:0; transition:opacity 0.25s;" />
        <div class="sub-sm" style="text-align:center;">Auto-cycling · 2.5s per screen</div>
      </div>

    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     SLIDE 4 — The 90-Day Experiment
════════════════════════════════════════════════════════════════ -->
<div class="slide" id="slide-4" role="region" aria-label="Slide 4: The 90-day experiment">
  <div class="bar" aria-hidden="true"></div>
  <div class="pad">
    <div class="badge">The Experiment</div>
    <div class="h2" style="max-width:900px;">A 50/50 holdout. A clean signal within the quarter. $760K–$1.3M ARR if confirmed.</div>
    <div class="sub" style="margin-bottom:14px;">Every outcome is actionable. We'll know which one we're in before Q4.</div>

    <div style="display:flex; gap:28px; flex:1; align-items:flex-start; margin-top:4px;">

      <!-- Left: experiment design -->
      <div style="flex:1; display:flex; flex-direction:column; gap:12px;">
        <div class="callout">
          <div class="label-blu" style="margin-bottom:8px;">Experiment Design</div>
          <div style="display:flex; flex-direction:column; gap:6px;">
            <div style="display:flex; gap:8px; align-items:center;">
              <span style="width:8px; height:8px; border-radius:50%; background:#2563EB; flex-shrink:0;" aria-hidden="true"></span>
              <span class="callout-body">50/50 holdout, stable assignment at account creation</span>
            </div>
            <div style="display:flex; gap:8px; align-items:center;">
              <span style="width:8px; height:8px; border-radius:50%; background:#2563EB; flex-shrink:0;" aria-hidden="true"></span>
              <span class="callout-body">New accounts with ≥5 transactions and ≥7 days of linked history</span>
            </div>
            <div style="display:flex; gap:8px; align-items:flex-start;">
              <span style="width:8px; height:8px; border-radius:50%; background:#2563EB; flex-shrink:0; margin-top:4px;" aria-hidden="true"></span>
              <span class="callout-body"><strong>Primary metric:</strong> <code style="background:#DBEAFE; padding:1px 5px; border-radius:3px; font-size:12px;">set_first_goal</code> completion — <strong>Baseline 18.9% → Target 35%</strong></span>
            </div>
            <div style="display:flex; gap:8px; align-items:center;">
              <span style="width:8px; height:8px; border-radius:50%; background:#16A34A; flex-shrink:0;" aria-hidden="true"></span>
              <span class="callout-body"><strong style="color:#16A34A;">Early signal readable at 30 days</strong> (~220 accounts per arm)</span>
            </div>
            <div style="display:flex; gap:8px; align-items:center;">
              <span style="width:8px; height:8px; border-radius:50%; background:#2563EB; flex-shrink:0;" aria-hidden="true"></span>
              <span class="callout-body">Full outcome window: 90 days (upgrade rate + churn rate)</span>
            </div>
          </div>
        </div>

        <!-- Three outcomes -->
        <div style="display:flex; gap:10px;">
          <div class="out-col out-confirm">
            <div style="display:flex; align-items:center; gap:6px;">
              <span class="out-icon" aria-label="Confirmed">✓</span>
              <span class="out-title">Lift confirmed</span>
            </div>
            <div class="out-body">Decision cost was the barrier.</div>
            <div class="out-act">→ Scale and refine</div>
          </div>
          <div class="out-col out-partial">
            <div style="display:flex; align-items:center; gap:6px;">
              <span class="out-icon" aria-label="Partial">~</span>
              <span class="out-title">Partial lift</span>
            </div>
            <div class="out-body">Concept works; algorithm to tune.</div>
            <div class="out-act">→ Refine the draft</div>
          </div>
          <div class="out-col out-none">
            <div style="display:flex; align-items:center; gap:6px;">
              <span class="out-icon" aria-label="No lift">✗</span>
              <span class="out-title">No lift</span>
            </div>
            <div class="out-body">Barrier isn't decision cost — pivot.</div>
            <div class="out-act">→ Revisit mechanism</div>
          </div>
        </div>

      </div>

      <!-- Divider -->
      <div style="width:1px; background:#E5E7EB; align-self:stretch; flex-shrink:0;"></div>

      <!-- Right: scenario table + phone -->
      <div style="flex:1; display:flex; flex-direction:column; gap:14px; align-items:center;">
        <div style="width:100%;">
          <div class="label-blu" style="margin-bottom:8px;">ARR Scenarios</div>
          <table class="scen-tbl" aria-label="ARR impact scenarios">
            <thead>
              <tr>
                <th>Scenario</th>
                <th>What it requires</th>
                <th>ARR Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="font-weight:700; color:#111827;">Conservative</td>
                <td>2pp Pro conversion lift</td>
                <td class="arrup">+$760K ARR</td>
              </tr>
              <tr>
                <td style="font-weight:700; color:#111827;">Moderate</td>
                <td>20% of non-goal-setters activated</td>
                <td class="arrup">+$1.3M ARR</td>
              </tr>
              <tr>
                <td style="font-weight:700; color:#111827;">Guardrail</td>
                <td>Churn 37.5% → 28%</td>
                <td style="font-size:13px; font-weight:700; color:#2563EB;">Retained Pro value</td>
              </tr>
            </tbody>
          </table>
        </div>
        <img data-shot="s1"
             class="pimg"
             alt="Screen 1: Spending summary scrolled to show auto-draft goal card with Dining category, $306 suggested target, Activate goal button."
             style="height:280px;" />
        <div class="sub-sm" style="text-align:center; font-size:12px;">The auto-draft card on Screen 1</div>
      </div>

    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     SLIDE 5 — Status & Timeline
════════════════════════════════════════════════════════════════ -->
<div class="slide" id="slide-5" role="region" aria-label="Slide 5: Status and timeline — what is done and what comes next">
  <div class="bar" aria-hidden="true"></div>
  <div class="pad">
    <div class="badge">Status</div>
    <div class="h2">Past the concept stage. Build starting now.</div>
    <div class="sub" style="margin-bottom:16px;">Everything in the left column is complete. What's left is engineering execution and 90 days of user behavior.</div>

    <div style="display:flex; gap:28px; flex:1; align-items:flex-start; margin-top:4px;">

      <!-- Left: status table -->
      <div style="flex:1.3;">
        <table class="status-tbl" aria-label="Project status: done vs in progress">
          <thead>
            <tr>
              <th>Already done</th>
              <th>Still in progress</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="done">✓</span> Prototype built — 5 screens, clickable</td>
              <td><span class="todo">○</span> Engineering scoping (Week 1–2)</td>
            </tr>
            <tr>
              <td><span class="done">✓</span> Accessibility-cleared (WCAG 2.1 AA)</td>
              <td><span class="todo">○</span> Feature flag configuration</td>
            </tr>
            <tr>
              <td><span class="done">✓</span> Product evaluation: 9/9 issues closed</td>
              <td><span class="todo">○</span> Analytics instrumentation confirmed</td>
            </tr>
            <tr>
              <td><span class="done">✓</span> PRD with full functional requirements</td>
              <td><span class="todo">○</span> Experiment live (Week 6–8)</td>
            </tr>
            <tr>
              <td><span class="done">✓</span> Experiment spec + 6 analytics events defined</td>
              <td><span class="todo">○</span> 30-day check-in (early signal read)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Right: timeline + phone -->
      <div style="flex:1; display:flex; flex-direction:column; gap:16px; align-items:center;">

        <div style="width:100%;">
          <div class="label-blu" style="margin-bottom:12px;">Q3 2026 Timeline</div>

          <!-- Timeline nodes -->
          <div style="display:flex; align-items:flex-start; gap:0; width:100%;">

            <div class="tm-node" style="flex-shrink:0;">
              <div class="tm-dot tm-dot-now" aria-label="Current"></div>
              <div class="tm-lbl" style="color:#16A34A; font-weight:800;">NOW</div>
              <div class="tm-sub">Brief &amp;<br>scoping</div>
            </div>

            <div class="tm-line" style="margin-top:6px;"></div>

            <div class="tm-node" style="flex-shrink:0;">
              <div class="tm-dot"></div>
              <div class="tm-lbl">Wk 1–2</div>
              <div class="tm-sub">Eng<br>scoping</div>
            </div>

            <div class="tm-line" style="margin-top:6px;"></div>

            <div class="tm-node" style="flex-shrink:0;">
              <div class="tm-dot"></div>
              <div class="tm-lbl">Wk 6–8</div>
              <div class="tm-sub">Experiment<br>live</div>
            </div>

            <div class="tm-line" style="margin-top:6px;"></div>

            <div class="tm-node" style="flex-shrink:0;">
              <div class="tm-dot" style="background:#D97706;"></div>
              <div class="tm-lbl" style="color:#D97706;">+30d</div>
              <div class="tm-sub">Early<br>signal</div>
            </div>

            <div class="tm-line" style="margin-top:6px;"></div>

            <div class="tm-node" style="flex-shrink:0;">
              <div class="tm-dot"></div>
              <div class="tm-lbl">+90d</div>
              <div class="tm-sub">Full<br>outcome</div>
            </div>

            <div class="tm-line" style="margin-top:6px;"></div>

            <div class="tm-node" style="flex-shrink:0;">
              <div class="tm-dot" style="background:#7C3AED;"></div>
              <div class="tm-lbl" style="color:#7C3AED;">Q4</div>
              <div class="tm-sub">Board<br>update</div>
            </div>

          </div>
        </div>

        <!-- Phone image -->
        <img data-shot="s3"
             class="pimg"
             alt="Goal set success screen showing green checkmark, 'Goal set!' heading, 'See my goal' button, and a 10-second undo option below."
             style="height:250px;" />
        <div class="sub-sm" style="font-size:12px; text-align:center;">What a successful activation looks like</div>

      </div>

    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     SLIDE 6 — What We Need from Product Leadership
════════════════════════════════════════════════════════════════ -->
<div class="slide" id="slide-6" role="region" aria-label="Slide 6: What we need from product leadership">
  <div class="bar" aria-hidden="true"></div>
  <div class="pad">
    <div class="badge">The Ask</div>
    <div class="h2">Four things that make this experiment succeed.</div>
    <div class="sub" style="margin-bottom:18px;">Not budget, not approval — the specific ways product leadership protects the signal quality.</div>

    <div style="display:flex; gap:28px; flex:1; align-items:flex-start; margin-top:4px;">

      <!-- Left: 4 ask items -->
      <div style="flex:1.4; display:flex; flex-direction:column; gap:10px;">
        <div class="ask-item">
          <div class="ask-num" aria-label="Action 1">1</div>
          <div>
            <div class="ask-title">Protect the engineering time</div>
            <div class="ask-body">6–8 weeks on a single mechanism. The biggest experiment risk is mid-sprint reprioritization. Guard the focus. <span style="color:#6B7280; font-style:italic;">Owner: CPO + Eng leadership</span></div>
          </div>
        </div>
        <div class="ask-item">
          <div class="ask-num" aria-label="Action 2">2</div>
          <div>
            <div class="ask-title">Join the 30-day check-in</div>
            <div class="ask-body">The early signal at 30 days is the first real-world read of the mechanism. Leadership presence turns a data review into a decision point. <span style="color:#6B7280; font-style:italic;">Owner: CPO + Data + Product</span></div>
          </div>
        </div>
        <div class="ask-item">
          <div class="ask-num" aria-label="Action 3">3</div>
          <div>
            <div class="ask-title">Be ready to communicate the launch</div>
            <div class="ask-body">CS, support, and sales will have questions when this ships. We'll draft the brief — it needs to come from product leadership, not an engineering email. <span style="color:#6B7280; font-style:italic;">Owner: CPO</span></div>
          </div>
        </div>
        <div class="ask-item">
          <div class="ask-num" aria-label="Action 4">4</div>
          <div>
            <div class="ask-title">Set Q3 expectations with stakeholders</div>
            <div class="ask-body">H2 is the primary Q3 product investment. Other roadmap items are deprioritized. Stakeholders expecting those items should hear that from product leadership. <span style="color:#6B7280; font-style:italic;">Owner: CPO</span></div>
          </div>
        </div>
      </div>

      <!-- Right: phone + closing -->
      <div style="flex:1; display:flex; flex-direction:column; gap:14px; align-items:center;">
        <img data-shot="s4"
             class="pimg"
             alt="Goal progress screen: Dining Spending Goal showing $0 of $306 limit with empty progress bar ready to fill as transactions sync."
             style="height:290px;" />
        <div style="width:100%; background:#111827; border-radius:10px; padding:16px 18px;">
          <div style="font-size:15px; font-weight:700; color:#fff; line-height:1.6; text-align:center;">
            "The data is clear. The prototype is built.<br>The experiment is ready to run.<br>We need product leadership in the room when it matters."
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

</div><!-- /deck -->
</div><!-- /stage-wrap -->

<!-- Navigation bar -->
<nav class="nav-bar" aria-label="Slide navigation">
  <button class="nav-btn" onclick="prevSlide()" aria-label="Previous slide">&#8249;</button>
  <div id="dots" role="tablist" aria-label="Slide list"></div>
  <span id="slide-lbl" aria-live="polite" aria-atomic="true">1 / 6</span>
  <button class="nav-btn" onclick="nextSlide()" aria-label="Next slide">&#8250;</button>
</nav>

<script>
const SHOTS = ${shotsJson};

// Populate all phone images from SHOTS
document.querySelectorAll('[data-shot]').forEach(function(el) {
  var key = el.dataset.shot;
  if (SHOTS[key]) el.src = SHOTS[key];
});

// Animated demo phone — slide 3 — cycles s1, s2, s3, s4
var demoEl = document.getElementById('demo-phone');
var demoSeq = ['s1', 's2', 's3', 's4'];
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
    btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    btn.dataset.idx = i;
    btn.onclick = function() { show(parseInt(this.dataset.idx)); };
    c.appendChild(btn);
  }
}

function show(n) {
  slides[cur].classList.remove('active');
  var prevDot = document.querySelectorAll('.dot')[cur];
  prevDot.classList.remove('on');
  prevDot.setAttribute('aria-selected', 'false');
  cur = (n + total) % total;
  slides[cur].classList.add('active');
  var nextDot = document.querySelectorAll('.dot')[cur];
  nextDot.classList.add('on');
  nextDot.setAttribute('aria-selected', 'true');
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

// ─── 3. Main ──────────────────────────────────────────────────────────────────

async function main() {
  console.log('Capturing prototype screenshots...');
  const shots = await captureScreenshots();
  console.log('Screenshots captured: ' + Object.keys(shots).join(', '));

  console.log('Building CPO / Product Leadership pitch deck...');
  const html = buildDeck(shots);

  const outPath = path.join(__dirname, 'finwise-pitch-h2-goal-activation-cpo.html');
  fs.writeFileSync(outPath, html, 'utf8');

  const kb = Math.round(html.length / 1024);
  console.log('Done: finwise-pitch-h2-goal-activation-cpo.html (' + kb + ' KB)');
}

main().catch(function(err) {
  console.error('Build failed:', err.message);
  process.exit(1);
});
