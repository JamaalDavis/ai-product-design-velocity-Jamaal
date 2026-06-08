// build-deck-design.js
// Builds the Design/UX team pitch for FinWise H2: Goal Activation.
// Reuses the same prototype screenshots as build-deck.js (same 6 captures).
// Usage: node build-deck-design.js

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
<title>FinWise — Goal Activation: From Design to Experiment</title>
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

/* Content padding */
.pad { padding: 44px 68px 46px 80px; height: 100%; display: flex; flex-direction: column; }

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
.h1 { font-size: 52px; font-weight: 800; color: #111827; line-height: 1.1; }
.h2 { font-size: 36px; font-weight: 700; color: #111827; line-height: 1.2; }
.h3 { font-size: 26px; font-weight: 700; color: #111827; line-height: 1.3; }
.sub { font-size: 18px; color: #6B7280; line-height: 1.5; margin-top: 10px; }
.sub-sm { font-size: 16px; color: #6B7280; line-height: 1.5; }
.label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #6B7280; }
.label-blue { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #2563EB; }
.blue { color: #2563EB; }
.green { color: #16A34A; }
.red { color: #DC2626; }
.muted { color: #9CA3AF; }

/* Phone images */
.pimg { display: block; width: auto; border-radius: 8px; }

/* Animated demo phone */
#demo-phone { transition: opacity 0.25s ease; }

/* Divider */
.divider { width: 100%; height: 1px; background: #E5E7EB; margin: 12px 0; }

/* Stat block */
.stat-block { display: flex; flex-direction: column; gap: 4px; }
.stat-num { font-size: 48px; font-weight: 800; color: #2563EB; line-height: 1; }
.stat-num-grn { font-size: 48px; font-weight: 800; color: #16A34A; line-height: 1; }
.stat-label { font-size: 15px; color: #6B7280; line-height: 1.4; max-width: 200px; }

/* Callout box */
.callout {
  background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 10px;
  padding: 16px 20px; margin: 10px 0;
}
.callout-body { font-size: 15px; color: #111827; line-height: 1.6; }
.callout-em { font-weight: 700; }

/* Outcome columns */
.outcome-col {
  flex: 1; padding: 16px 18px; border-radius: 10px;
  display: flex; flex-direction: column; gap: 8px;
}
.outcome-confirm { background: #F0FDF4; border: 1px solid #BBF7D0; }
.outcome-partial { background: #FFFBEB; border: 1px solid #FDE68A; }
.outcome-none { background: #FEF2F2; border: 1px solid #FECACA; }
.outcome-icon { font-size: 22px; }
.outcome-title { font-size: 15px; font-weight: 700; color: #111827; }
.outcome-range { font-size: 13px; font-weight: 700; color: #6B7280; }
.outcome-body { font-size: 13px; color: #374151; line-height: 1.5; }
.outcome-action { font-size: 13px; font-weight: 700; color: #2563EB; margin-top: 4px; }

/* Journey rows */
.journey-row {
  display: flex; align-items: center; gap: 12px;
  padding: 10px 14px; border-radius: 8px;
}
.journey-row.done { background: #F0FDF4; }
.journey-row.gap { background: #FEF2F2; border: 1px solid #FECACA; }
.journey-check { font-size: 18px; }
.journey-label { font-size: 15px; color: #111827; font-weight: 500; }
.journey-sub { font-size: 13px; color: #6B7280; }
.journey-pct { font-size: 14px; font-weight: 700; color: #16A34A; margin-left: auto; }
.journey-pct-red { font-size: 14px; font-weight: 700; color: #DC2626; margin-left: auto; }

/* Decision table rows */
.dtrow { display: flex; gap: 0; border-bottom: 1px solid #F3F4F6; }
.dtrow:last-child { border-bottom: none; }
.dtcell { padding: 8px 10px; font-size: 13px; color: #374151; line-height: 1.4; }
.dthead { background: #F9FAFB; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #6B7280; }
.dtcell-wide { flex: 2; }
.dtcell-med { flex: 1.5; }
.dtcell-sm { flex: 1; }

/* Guardrail row */
.grow { display: flex; gap: 0; border-bottom: 1px solid #F3F4F6; }
.grow:last-child { border-bottom: none; }
.gcell { padding: 8px 10px; font-size: 13px; color: #374151; line-height: 1.4; }
.ghead { background: #F9FAFB; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #6B7280; }
.gcell-w { flex: 2; }
.gcell-n { flex: 1; }

/* Ask checklist */
.ask-item {
  display: flex; align-items: flex-start; gap: 14px;
  padding: 12px 16px; background: #F9FAFB; border: 1px solid #E5E7EB;
  border-radius: 10px;
}
.ask-num {
  width: 28px; height: 28px; border-radius: 50%;
  background: #2563EB; color: #fff; font-size: 13px; font-weight: 700;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.ask-title { font-size: 15px; font-weight: 700; color: #111827; }
.ask-body { font-size: 13px; color: #6B7280; margin-top: 2px; line-height: 1.4; }

/* Status table */
.status-tbl { width: 100%; border-collapse: collapse; font-size: 13px; }
.status-tbl th { background: #F9FAFB; padding: 7px 12px; text-align: left; font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; color: #6B7280; border-bottom: 1px solid #E5E7EB; }
.status-tbl td { padding: 7px 12px; color: #374151; border-bottom: 1px solid #F3F4F6; vertical-align: top; }
.status-tbl tr:last-child td { border-bottom: none; }
.check-done { color: #16A34A; font-weight: 700; }
.check-need { color: #D97706; font-weight: 700; }

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
<div class="deck" role="main" aria-label="FinWise Goal Activation — Design &amp; UX Team Presentation">

<!-- ═══════════════════════════════════════════════════════════════
     SLIDE 1 — Title / Cover
════════════════════════════════════════════════════════════════ -->
<div class="slide active" id="slide-1" role="region" aria-label="Slide 1: Title">
  <div class="bar" aria-hidden="true"></div>
  <div class="pad" style="justify-content:center; gap:0;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:28px;">
      <div style="width:32px; height:32px; background:#2563EB; border-radius:8px; display:flex; align-items:center; justify-content:center;">
        <span style="color:#fff; font-weight:800; font-size:16px;">F</span>
      </div>
      <span style="font-size:18px; font-weight:700; color:#111827;">FinWise</span>
    </div>
    <div class="badge">H2 — Design Readout</div>
    <div class="h1" style="font-size:58px; max-width:760px; margin-bottom:18px;">
      Goal Activation:<br>From Design to Experiment
    </div>
    <div class="sub" style="max-width:600px; font-size:20px;">
      H2 Prototype Readout — the auto-drafted goal,<br>and what 90 days will teach us.
    </div>
    <div style="margin-top:48px; display:flex; gap:24px;">
      <div style="background:#EFF6FF; border:1px solid #BFDBFE; border-radius:8px; padding:10px 18px;">
        <div class="label-blue">Audience</div>
        <div style="font-size:14px; font-weight:600; color:#111827; margin-top:3px;">Design &amp; UX Team</div>
      </div>
      <div style="background:#EFF6FF; border:1px solid #BFDBFE; border-radius:8px; padding:10px 18px;">
        <div class="label-blue">Decision Needed</div>
        <div style="font-size:14px; font-weight:600; color:#111827; margin-top:3px;">Run the 90-day experiment</div>
      </div>
      <div style="background:#EFF6FF; border:1px solid #BFDBFE; border-radius:8px; padding:10px 18px;">
        <div class="label-blue">Date</div>
        <div style="font-size:14px; font-weight:600; color:#111827; margin-top:3px;">May 2026</div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     SLIDE 2 — The User's Moment
════════════════════════════════════════════════════════════════ -->
<div class="slide" id="slide-2" role="region" aria-label="Slide 2: The User's Moment">
  <div class="bar" aria-hidden="true"></div>
  <div class="pad">
    <div class="badge">Open</div>
    <div class="h2" style="max-width:800px;">A user sees their own money for the first time. Then they leave.</div>
    <div class="sub" style="margin-bottom:18px;">That's not a discovery problem. It's an action problem.</div>
    <div style="display:flex; gap:32px; flex:1; align-items:flex-start; margin-top:4px;">

      <!-- Left: Journey -->
      <div style="flex:1.2; display:flex; flex-direction:column; gap:8px;">
        <div class="journey-row done" role="listitem">
          <span class="journey-check" aria-label="Completed">✓</span>
          <div>
            <div class="journey-label">Connect account</div>
            <div class="journey-sub">"I linked my bank"</div>
          </div>
          <span class="journey-pct">100%</span>
        </div>
        <div class="journey-row done" role="listitem">
          <span class="journey-check" aria-label="Completed">✓</span>
          <div>
            <div class="journey-label">View first transactions</div>
            <div class="journey-sub">"I can see my spending"</div>
          </div>
          <span class="journey-pct">73.4%</span>
        </div>
        <div class="journey-row done" role="listitem">
          <span class="journey-check" aria-label="Completed">✓</span>
          <div>
            <div class="journey-label">View spending summary</div>
            <div class="journey-sub">"I see where my money went"</div>
          </div>
          <span class="journey-pct">51.6%</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px; padding:0 14px;">
          <div style="width:2px; height:20px; background:#FECACA; margin-left:8px;"></div>
          <span style="font-size:13px; font-weight:700; color:#DC2626;">32.7pp drop — largest gap in onboarding</span>
        </div>
        <div class="journey-row gap" role="listitem">
          <span class="journey-check" aria-label="Gap" style="color:#DC2626;">✗</span>
          <div>
            <div class="journey-label">Set first goal</div>
            <div class="journey-sub">"I... don't know where to start"</div>
          </div>
          <span class="journey-pct-red">18.9%</span>
        </div>
        <div class="callout" style="margin-top:8px;">
          <div class="callout-body"><span class="callout-em">63% of users who reach the spending summary never set a goal.</span> They found the data. The barrier is what happens next.</div>
        </div>
      </div>

      <!-- Right: Phone showing spending summary -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:8px; flex-shrink:0;">
        <div class="label-blue">The moment users leave</div>
        <img data-shot="s1top" class="pimg" alt="Spending summary screen showing category breakdown: Dining $340, Groceries $220, Transport $180, Entertainment $95. User is looking at their data for the first time." style="height:380px;" />
        <div class="sub-sm" style="text-align:center;">51.6% of users reach here.<br>63% leave without acting.</div>
      </div>

    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     SLIDE 3 — The Design Problem
════════════════════════════════════════════════════════════════ -->
<div class="slide" id="slide-3" role="region" aria-label="Slide 3: The Design Problem">
  <div class="bar" aria-hidden="true"></div>
  <div class="pad">
    <div class="badge">The Problem</div>
    <div class="h2" style="max-width:800px;">The current UX asks for a decision at exactly the wrong moment.</div>
    <div class="sub" style="margin-bottom:20px;">Users just processed their financial picture. We immediately ask them to choose, commit, and start from scratch.</div>

    <div style="display:flex; gap:24px; align-items:center;" style="margin-bottom:0;">

      <!-- Left column -->
      <div style="flex:1; background:#F0FDF4; border:1px solid #BBF7D0; border-radius:12px; padding:20px 22px;">
        <div class="label" style="color:#16A34A; margin-bottom:12px;">What the user just did</div>
        <div style="display:flex; flex-direction:column; gap:10px;">
          <div style="display:flex; gap:10px; align-items:flex-start;">
            <span style="color:#16A34A; font-size:16px; flex-shrink:0;">●</span>
            <span style="font-size:14px; color:#111827;">Saw their first spending breakdown by category</span>
          </div>
          <div style="display:flex; gap:10px; align-items:flex-start;">
            <span style="color:#16A34A; font-size:16px; flex-shrink:0;">●</span>
            <span style="font-size:14px; color:#111827;">Identified where their money goes each month</span>
          </div>
          <div style="display:flex; gap:10px; align-items:flex-start;">
            <span style="color:#16A34A; font-size:16px; flex-shrink:0;">●</span>
            <span style="font-size:14px; color:#111827;">Had their first honest look at their spending habits</span>
          </div>
          <div style="display:flex; gap:10px; align-items:flex-start;">
            <span style="color:#16A34A; font-size:16px; flex-shrink:0;">●</span>
            <span style="font-size:14px; color:#111827;">Is processing — high cognitive load, emotionally loaded moment</span>
          </div>
        </div>
      </div>

      <!-- Center arrow -->
      <div style="font-size:32px; color:#D1D5DB; flex-shrink:0;">→</div>

      <!-- Right column -->
      <div style="flex:1; background:#FEF2F2; border:1px solid #FECACA; border-radius:12px; padding:20px 22px;">
        <div class="label" style="color:#DC2626; margin-bottom:12px;">What we ask them to do next</div>
        <div style="display:flex; flex-direction:column; gap:10px;">
          <div style="display:flex; gap:10px; align-items:flex-start;">
            <span style="color:#DC2626; font-size:16px; flex-shrink:0;">●</span>
            <span style="font-size:14px; color:#111827;">Navigate to goal creation</span>
          </div>
          <div style="display:flex; gap:10px; align-items:flex-start;">
            <span style="color:#DC2626; font-size:16px; flex-shrink:0;">●</span>
            <span style="font-size:14px; color:#111827;">Choose a spending category — from scratch</span>
          </div>
          <div style="display:flex; gap:10px; align-items:flex-start;">
            <span style="color:#DC2626; font-size:16px; flex-shrink:0;">●</span>
            <span style="font-size:14px; color:#111827;">Choose a monthly limit — with no reference point</span>
          </div>
          <div style="display:flex; gap:10px; align-items:flex-start;">
            <span style="color:#DC2626; font-size:16px; flex-shrink:0;">●</span>
            <span style="font-size:14px; color:#111827;">Commit — on a blank-state screen, right now</span>
          </div>
        </div>
      </div>

    </div>

    <div style="margin-top:8px; background:#1E40AF; border-radius:10px; padding:10px 20px; text-align:center;">
      <span style="font-size:14px; font-weight:700; color:#fff;">The gap isn't intent. It's decision cost. Users don't leave because they don't want a goal — they leave because we make them decide before they're ready.</span>
    </div>

  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     SLIDE 4 — The Design Hypothesis
════════════════════════════════════════════════════════════════ -->
<div class="slide" id="slide-4" role="region" aria-label="Slide 4: The Design Hypothesis">
  <div class="bar" aria-hidden="true"></div>
  <div class="pad">
    <div class="badge">The Design Hypothesis</div>
    <div class="h2" style="max-width:820px;">If we remove the decision, more users will activate.</div>
    <div class="sub" style="margin-bottom:20px;">The data they need is already in front of them — we just have to use it.</div>

    <div style="display:flex; gap:28px; flex:1; align-items:flex-start; margin-top:4px;">

      <!-- Left: hypothesis + mechanism -->
      <div style="flex:1.3; display:flex; flex-direction:column; gap:16px;">

        <div class="callout">
          <div style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:#2563EB; margin-bottom:8px;">Hypothesis</div>
          <div class="callout-body">
            <span class="callout-em">We believe</span> surfacing a pre-populated savings goal immediately after the spending summary — removing the decision of what to set — <span class="callout-em">will increase <code style="background:#DBEAFE; padding:1px 4px; border-radius:3px; font-size:14px;">set_first_goal</code> completion from 18.9% to 35%.</span>
          </div>
          <div style="margin-top:8px; font-size:14px; color:#6B7280; font-style:italic;">Because the barrier is decision cost, not intent.</div>
        </div>

        <div style="display:flex; gap:14px;">
          <div style="flex:1; background:#F9FAFB; border:1px solid #E5E7EB; border-radius:10px; padding:14px; text-align:center;">
            <div class="label-blue" style="margin-bottom:6px;">Category</div>
            <div style="font-size:14px; font-weight:700; color:#111827; margin-bottom:4px;">Pre-selected</div>
            <div style="font-size:13px; color:#6B7280;">Top spending category from their actual data</div>
          </div>
          <div style="flex:1; background:#F9FAFB; border:1px solid #E5E7EB; border-radius:10px; padding:14px; text-align:center;">
            <div class="label-blue" style="margin-bottom:6px;">Amount</div>
            <div style="font-size:15px; font-weight:700; color:#111827; margin-bottom:4px;">Pre-calculated</div>
            <div style="font-size:13px; color:#6B7280;">10% below their 30-day spend in that category</div>
          </div>
          <div style="flex:1; background:#F9FAFB; border:1px solid #E5E7EB; border-radius:10px; padding:14px; text-align:center;">
            <div class="label-blue" style="margin-bottom:6px;">Action</div>
            <div style="font-size:15px; font-weight:700; color:#111827; margin-bottom:4px;">One tap</div>
            <div style="font-size:13px; color:#6B7280;">No separate screen, no confirmation flow</div>
          </div>
        </div>

        <div style="padding:14px 18px; background:#F9FAFB; border-left:3px solid #2563EB; border-radius:0 8px 8px 0;">
          <div style="font-size:14px; color:#374151; line-height:1.6; font-style:italic;">
            "We're not making the decision for them. We're making it easy enough to make."
          </div>
        </div>

        <div style="font-size:14px; color:#6B7280; line-height:1.5;">
          The key framing is <strong style="color:#111827;">optionality, not automation.</strong> Users can adjust the amount, dismiss the card, or ignore it entirely. The bet is that most users shown a reasonable default — based on their own data — will say "that looks right" and activate, rather than starting from scratch.
        </div>

      </div>

      <!-- Right: Phone showing the card -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:8px; flex-shrink:0;">
        <div class="label-blue">The auto-draft card</div>
        <img data-shot="s1" class="pimg" alt="Spending summary scrolled to show the auto-draft goal card: 'You spent $340 on Dining last month. Suggested limit: $306/month.' with Activate goal button, Adjust amount and Not now options." style="height:410px;" />
      </div>

    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     SLIDE 5 — The Prototype
════════════════════════════════════════════════════════════════ -->
<div class="slide" id="slide-5" role="region" aria-label="Slide 5: The Prototype — five screens, one flow">
  <div class="bar" aria-hidden="true"></div>
  <div class="pad">
    <div class="badge">The Prototype</div>
    <div class="h2">We built it. Here's what we're testing.</div>
    <div class="sub" style="margin-bottom:10px;">Five screens. One complete activation path. Built, evaluated, and accessibility-cleared.</div>

    <div style="display:flex; gap:20px; align-items:flex-start; flex:1; margin-top:6px;">

      <!-- Animated demo phone -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:8px; flex-shrink:0;">
        <div class="label-blue">Live flow</div>
        <img id="demo-phone" alt="Animated prototype cycling through: spending summary with auto-draft card, adjust amount screen, goal set success state, and goal progress screen." style="height:390px; width:auto; opacity:0; transition:opacity 0.25s;" />
        <div class="sub-sm" style="text-align:center;">Auto-cycling · 2.5s per screen</div>
      </div>

      <div style="font-size:28px; color:#BFDBFE; flex-shrink:0; align-self:center;">→</div>

      <!-- Four static screens with captions -->
      <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:12px; flex:1; align-items:start;">

        <div style="display:flex; flex-direction:column; align-items:center; gap:6px; text-align:center;">
          <div style="background:#2563EB; color:#fff; font-size:10px; font-weight:700; width:20px; height:20px; border-radius:50%; display:flex; align-items:center; justify-content:center;">1</div>
          <img data-shot="s1" class="pimg" alt="Screen 1: Spending summary with auto-draft card showing suggested Dining goal of $306/month, with Activate goal button." style="height:270px;" />
          <div style="font-size:11px; font-weight:700; color:#111827;">Spending + Card</div>
          <div style="font-size:12px; color:#6B7280; line-height:1.4;">Does the card get noticed? Does the framing feel right?</div>
        </div>

        <div style="display:flex; flex-direction:column; align-items:center; gap:6px; text-align:center;">
          <div style="background:#2563EB; color:#fff; font-size:10px; font-weight:700; width:20px; height:20px; border-radius:50%; display:flex; align-items:center; justify-content:center;">2</div>
          <img data-shot="s2" class="pimg" alt="Screen 2: Adjust amount screen with stepper controls, showing Dining spending goal with amount adjustable via minus and plus buttons." style="height:270px;" />
          <div style="font-size:13px; font-weight:700; color:#111827;">Adjust Amount</div>
          <div style="font-size:12px; color:#6B7280; line-height:1.4;">Will users adjust? Does inline editing feel natural?</div>
        </div>

        <div style="display:flex; flex-direction:column; align-items:center; gap:6px; text-align:center;">
          <div style="background:#2563EB; color:#fff; font-size:10px; font-weight:700; width:20px; height:20px; border-radius:50%; display:flex; align-items:center; justify-content:center;">3</div>
          <img data-shot="s3" class="pimg" alt="Screen 3: Goal set success state with green checkmark, 'Goal set!' heading, and See my goal button. 10-second undo option visible." style="height:270px;" />
          <div style="font-size:13px; font-weight:700; color:#111827;">Goal Set!</div>
          <div style="font-size:12px; color:#6B7280; line-height:1.4;">Does success feel real? Does reversibility reduce anxiety?</div>
        </div>

        <div style="display:flex; flex-direction:column; align-items:center; gap:6px; text-align:center;">
          <div style="background:#2563EB; color:#fff; font-size:10px; font-weight:700; width:20px; height:20px; border-radius:50%; display:flex; align-items:center; justify-content:center;">4</div>
          <img data-shot="s4" class="pimg" alt="Screen 4: Goal progress screen showing Dining Spending Goal, $0 of $306 limit, with empty progress bar ready to fill as transactions sync." style="height:270px;" />
          <div style="font-size:13px; font-weight:700; color:#111827;">Goal Progress</div>
          <div style="font-size:12px; color:#6B7280; line-height:1.4;">Does the progress screen reinforce the decision to activate?</div>
        </div>

      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     SLIDE 6 — Design Decisions (Journey Map)
════════════════════════════════════════════════════════════════ -->
<div class="slide" id="slide-6" role="region" aria-label="Slide 6: Design Decisions — nine issues found, nine closed">
  <div class="bar" aria-hidden="true"></div>
  <div class="pad" style="padding-bottom:36px;">
    <div class="badge">Design Decisions</div>
    <div style="display:flex; align-items:center; gap:16px; margin-bottom:4px;">
      <div class="h2" style="font-size:32px;">Nine issues. Nine closed.</div>
      <div style="font-size:13px; color:#16A34A; font-weight:700; background:#F0FDF4; border:1px solid #BBF7D0; padding:3px 12px; border-radius:20px; flex-shrink:0;">All closed in V2</div>
    </div>
    <div class="sub" style="font-size:16px; margin-bottom:12px;">Each fix is mapped to the screen where the issue lived.</div>

    <!-- Journey Map: 4 columns, one per screen -->
    <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:12px; flex:1; align-items:stretch;">

      <!-- ── Column 1: Screen 1 — Spending + Card (5 issues) ── -->
      <div style="display:flex; flex-direction:column; border:1px solid #BFDBFE; border-radius:12px; overflow:hidden;">
        <div style="background:#EFF6FF; padding:8px 12px; display:flex; align-items:center; gap:8px;">
          <div style="width:22px; height:22px; background:#2563EB; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; color:#fff; flex-shrink:0;">1</div>
          <div>
            <div style="font-size:11px; font-weight:700; color:#2563EB; text-transform:uppercase; letter-spacing:0.07em;">Spending + Card</div>
            <div style="font-size:10px; color:#6B7280;">The trigger moment</div>
          </div>
        </div>
        <div style="display:flex; justify-content:center; background:#F8FBFF; padding:8px 0; border-bottom:1px solid #BFDBFE;">
          <img data-shot="s1" class="pimg" alt="Screen 1: Spending summary with auto-draft goal card" style="height:120px; width:auto; border-radius:6px;" />
        </div>
        <div style="background:#FEF2F2; padding:8px 12px; border-bottom:1px solid #FECACA; flex:1;">
          <div style="font-size:10px; font-weight:700; color:#DC2626; text-transform:uppercase; letter-spacing:0.07em; margin-bottom:5px;">Issues (5)</div>
          <div style="font-size:12px; color:#374151; line-height:1.6;">
            "Adjust" was a text link, equal to "Not now"<br>
            No scroll hint — card hidden on short screens<br>
            "Limit" framing felt punitive<br>
            No reversibility signal after activation<br>
            Missing keyboard handlers on interactive spans
          </div>
        </div>
        <div style="background:#F0FDF4; padding:8px 12px;">
          <div style="font-size:10px; font-weight:700; color:#16A34A; text-transform:uppercase; letter-spacing:0.07em; margin-bottom:5px;">Fixed</div>
          <div style="font-size:12px; color:#374151; line-height:1.6;">
            → Promoted to full secondary button<br>
            → Added scroll chevron indicator<br>
            → Replaced with "target" throughout<br>
            → "Adjust or delete anytime" added<br>
            → Keydown Enter/Space handlers added
          </div>
        </div>
      </div>

      <!-- ── Column 2: Screen 2 — Adjust Amount (1 issue) ── -->
      <div style="display:flex; flex-direction:column; border:1px solid #BFDBFE; border-radius:12px; overflow:hidden;">
        <div style="background:#EFF6FF; padding:8px 12px; display:flex; align-items:center; gap:8px;">
          <div style="width:22px; height:22px; background:#2563EB; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; color:#fff; flex-shrink:0;">2</div>
          <div>
            <div style="font-size:11px; font-weight:700; color:#2563EB; text-transform:uppercase; letter-spacing:0.07em;">Adjust Amount</div>
            <div style="font-size:10px; color:#6B7280;">Ownership without friction</div>
          </div>
        </div>
        <div style="display:flex; justify-content:center; background:#F8FBFF; padding:8px 0; border-bottom:1px solid #BFDBFE;">
          <img data-shot="s2" class="pimg" alt="Screen 2: Adjust amount screen with stepper" style="height:120px; width:auto; border-radius:6px;" />
        </div>
        <div style="background:#FEF2F2; padding:8px 12px; border-bottom:1px solid #FECACA; flex:1;">
          <div style="font-size:10px; font-weight:700; color:#DC2626; text-transform:uppercase; letter-spacing:0.07em; margin-bottom:5px;">Issue (1)</div>
          <div style="font-size:12px; color:#374151; line-height:1.6;">
            Dual input — stepper <em>and</em> text field with no floor validation. Ambiguous and easy to break.
          </div>
        </div>
        <div style="background:#F0FDF4; padding:8px 12px;">
          <div style="font-size:10px; font-weight:700; color:#16A34A; text-transform:uppercase; letter-spacing:0.07em; margin-bottom:5px;">Fixed</div>
          <div style="font-size:12px; color:#374151; line-height:1.6;">
            → Single stepper with $10 floor and inline feedback when minimum is reached
          </div>
        </div>
      </div>

      <!-- ── Column 3: Screen 3 — Goal Set! (1 issue) ── -->
      <div style="display:flex; flex-direction:column; border:1px solid #BFDBFE; border-radius:12px; overflow:hidden;">
        <div style="background:#EFF6FF; padding:8px 12px; display:flex; align-items:center; gap:8px;">
          <div style="width:22px; height:22px; background:#2563EB; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; color:#fff; flex-shrink:0;">3</div>
          <div>
            <div style="font-size:11px; font-weight:700; color:#2563EB; text-transform:uppercase; letter-spacing:0.07em;">Goal Set!</div>
            <div style="font-size:10px; color:#6B7280;">The commitment moment</div>
          </div>
        </div>
        <div style="display:flex; justify-content:center; background:#F8FBFF; padding:8px 0; border-bottom:1px solid #BFDBFE;">
          <img data-shot="s3" class="pimg" alt="Screen 3: Goal set success state" style="height:120px; width:auto; border-radius:6px;" />
        </div>
        <div style="background:#FEF2F2; padding:8px 12px; border-bottom:1px solid #FECACA; flex:1;">
          <div style="font-size:10px; font-weight:700; color:#DC2626; text-transform:uppercase; letter-spacing:0.07em; margin-bottom:5px;">Issue (1)</div>
          <div style="font-size:12px; color:#374151; line-height:1.6;">
            No undo option after activation. User has committed with no visible recovery path — post-activation commitment cost left unaddressed.
          </div>
        </div>
        <div style="background:#F0FDF4; padding:8px 12px;">
          <div style="font-size:10px; font-weight:700; color:#16A34A; text-transform:uppercase; letter-spacing:0.07em; margin-bottom:5px;">Fixed</div>
          <div style="font-size:12px; color:#374151; line-height:1.6;">
            → 10-second timed undo — lowers commitment cost and surfaces undo-rate data for future iteration
          </div>
        </div>
      </div>

      <!-- ── Column 4: Screen 4 — Progress (2 issues) ── -->
      <div style="display:flex; flex-direction:column; border:1px solid #BFDBFE; border-radius:12px; overflow:hidden;">
        <div style="background:#EFF6FF; padding:8px 12px; display:flex; align-items:center; gap:8px;">
          <div style="width:22px; height:22px; background:#2563EB; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; color:#fff; flex-shrink:0;">4</div>
          <div>
            <div style="font-size:11px; font-weight:700; color:#2563EB; text-transform:uppercase; letter-spacing:0.07em;">Goal Progress</div>
            <div style="font-size:10px; color:#6B7280;">The reward screen</div>
          </div>
        </div>
        <div style="display:flex; justify-content:center; background:#F8FBFF; padding:8px 0; border-bottom:1px solid #BFDBFE;">
          <img data-shot="s4" class="pimg" alt="Screen 4: Goal progress screen" style="height:120px; width:auto; border-radius:6px;" />
        </div>
        <div style="background:#FEF2F2; padding:8px 12px; border-bottom:1px solid #FECACA; flex:1;">
          <div style="font-size:10px; font-weight:700; color:#DC2626; text-transform:uppercase; letter-spacing:0.07em; margin-bottom:5px;">Issues (2)</div>
          <div style="font-size:12px; color:#374151; line-height:1.6;">
            Backward-looking copy: "You haven't spent anything yet" undermines the goal-holder identity<br><br>
            Redundant % labels alongside progress bar add cognitive noise at the reward moment
          </div>
        </div>
        <div style="background:#F0FDF4; padding:8px 12px;">
          <div style="font-size:10px; font-weight:700; color:#16A34A; text-transform:uppercase; letter-spacing:0.07em; margin-bottom:5px;">Fixed</div>
          <div style="font-size:12px; color:#374151; line-height:1.6;">
            → Forward-looking: "Your spending will appear here as you use your card"<br><br>
            → % labels removed — progress bar alone carries the visual
          </div>
        </div>
      </div>

    </div><!-- /journey map grid -->
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     SLIDE 7 — What 90 Days Will Tell Us
════════════════════════════════════════════════════════════════ -->
<div class="slide" id="slide-7" role="region" aria-label="Slide 7: What 90 days will tell us">
  <div class="bar" aria-hidden="true"></div>
  <div class="pad">
    <div class="badge">The Experiment</div>
    <div class="h2">Three outcomes. Each one tells us something actionable.</div>
    <div class="sub" style="margin-bottom:16px;">90 days. One clean test. No ambiguous results.</div>

    <!-- Primary metric bar -->
    <div style="background:#EFF6FF; border:1px solid #BFDBFE; border-radius:10px; padding:12px 20px; margin-bottom:16px; display:flex; align-items:center; gap:32px;">
      <div>
        <div class="label-blue" style="margin-bottom:4px;">Primary Metric</div>
        <div style="font-size:15px; font-weight:700; color:#111827;"><code style="background:#DBEAFE; padding:2px 6px; border-radius:4px; font-size:13px;">set_first_goal</code> completion rate within 7 days of spending summary</div>
      </div>
      <div style="display:flex; align-items:center; gap:16px; flex-shrink:0;">
        <div style="text-align:center;">
          <div style="font-size:28px; font-weight:800; color:#6B7280;">18.9%</div>
          <div class="label" style="margin-top:2px;">Baseline</div>
        </div>
        <div style="font-size:24px; color:#BFDBFE;">→</div>
        <div style="text-align:center;">
          <div style="font-size:28px; font-weight:800; color:#2563EB;">35%</div>
          <div class="label" style="margin-top:2px;">Target</div>
        </div>
        <div style="background:#EFF6FF; border:1px solid #BFDBFE; border-radius:8px; padding:6px 12px; text-align:center;">
          <div style="font-size:11px; color:#6B7280;">Early signal readable</div>
          <div style="font-size:13px; font-weight:700; color:#2563EB;">at 30 days</div>
        </div>
      </div>
    </div>

    <!-- Three outcome columns -->
    <div style="display:flex; gap:14px; margin-bottom:14px;">
      <div class="outcome-col outcome-confirm">
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="outcome-icon" aria-label="Success">✓</span>
          <span class="outcome-title">Lift confirmed</span>
        </div>
        <div class="outcome-range">More than 8pp improvement</div>
        <div class="outcome-body">Decision cost is the barrier. The auto-draft mechanism works as hypothesised.</div>
        <div class="outcome-action">→ Scale the mechanism. Refine the algorithm. Build re-engagement layer.</div>
      </div>
      <div class="outcome-col outcome-partial">
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="outcome-icon" aria-label="Partial">~</span>
          <span class="outcome-title">Partial lift</span>
        </div>
        <div class="outcome-range">4–8pp improvement</div>
        <div class="outcome-body">Concept works, but draft content may be off. Check <code style="font-size:12px; background:#FEF3C7; padding:1px 3px; border-radius:2px;">goal_draft_adjusted</code> rate.</div>
        <div class="outcome-action">→ Refine the 10%-below algorithm. Improve suggested amount precision.</div>
      </div>
      <div class="outcome-col outcome-none">
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="outcome-icon" aria-label="No lift">✗</span>
          <span class="outcome-title">No lift</span>
        </div>
        <div class="outcome-range">Less than 4pp improvement</div>
        <div class="outcome-body">The barrier isn't the decision — it may be trust, motivation, or timing.</div>
        <div class="outcome-action">→ Revisit Option A (inline prompt) or Option C (summary redesign).</div>
      </div>
    </div>

    <!-- Guardrails -->
    <div style="border:1px solid #E5E7EB; border-radius:10px; overflow:hidden;">
      <div class="grow">
        <div class="gcell ghead gcell-w">Guardrail metric</div>
        <div class="gcell ghead gcell-n">Threshold</div>
        <div class="gcell ghead" style="flex:2;">What it tells us about the design</div>
      </div>
      <div class="grow">
        <div class="gcell gcell-w"><code style="font-size:11px; background:#F3F4F6; padding:1px 4px; border-radius:2px;">goal_draft_dismissed</code> rate</div>
        <div class="gcell gcell-n" style="font-weight:700; color:#111827;">≤ 70%</div>
        <div class="gcell" style="flex:2;">If >70%: card framing or timing is wrong — re-examine the hook copy and card position</div>
      </div>
      <div class="grow">
        <div class="gcell gcell-w"><code style="font-size:11px; background:#F3F4F6; padding:1px 4px; border-radius:2px;">savings_goal: abandoned</code> rate</div>
        <div class="gcell gcell-n" style="font-weight:700; color:#111827;">≤ 60%</div>
        <div class="gcell" style="flex:2;">If >60%: suggested amount algorithm needs work — goals aren't sticking</div>
      </div>
      <div class="grow" style="border-bottom:none;">
        <div class="gcell gcell-w">Session exit time after summary</div>
        <div class="gcell gcell-n" style="font-weight:700; color:#111827;">No increase</div>
        <div class="gcell" style="flex:2;">If slower: the card is adding friction to the summary — review load timing and card weight</div>
      </div>
    </div>

  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     SLIDE 8 — The Ask
════════════════════════════════════════════════════════════════ -->
<div class="slide" id="slide-8" role="region" aria-label="Slide 8: The Ask — run the experiment">
  <div class="bar" aria-hidden="true"></div>
  <div class="pad">
    <div class="badge">The Ask</div>
    <div class="h2">Run the experiment. 90 days. One clean test.</div>
    <div class="sub" style="margin-bottom:18px;">The prototype is ready. The instrumentation is specified. We need four things from this team.</div>

    <div style="display:flex; gap:28px; flex:1; align-items:flex-start;">

      <!-- Left: 4 ask items -->
      <div style="flex:1.4; display:flex; flex-direction:column; gap:10px;">
        <div class="ask-item">
          <div class="ask-num" aria-label="Action 1">1</div>
          <div>
            <div class="ask-title">Confirm analytics instrumentation</div>
            <div class="ask-body">6 events specified in the PRD. Engineering + Data: review and confirm implementation plan. (<code style="font-size:10px;">goal_draft_shown</code>, <code style="font-size:10px;">goal_draft_activated</code>, <code style="font-size:10px;">goal_draft_adjusted</code>, <code style="font-size:10px;">goal_draft_dismissed</code>, <code style="font-size:10px;">goal_created</code>, <code style="font-size:10px;">goal_still_active_30d</code>)</div>
          </div>
        </div>
        <div class="ask-item">
          <div class="ask-num" aria-label="Action 2">2</div>
          <div>
            <div class="ask-title">Approve feature flag configuration</div>
            <div class="ask-body">50/50 holdout, stable assignment at account creation. Engineering: confirm feature flag setup and cohort exclusions (&lt;5 transactions or &lt;7 days of history).</div>
          </div>
        </div>
        <div class="ask-item">
          <div class="ask-num" aria-label="Action 3">3</div>
          <div>
            <div class="ask-title">Schedule the 30-day check-in</div>
            <div class="ask-body">Early signal read at 30 days. Data + Product + Design: calendar it now, before build starts. ~220 accounts per arm for significance at 80% power.</div>
          </div>
        </div>
        <div class="ask-item">
          <div class="ask-num" aria-label="Action 4">4</div>
          <div>
            <div class="ask-title">Design × Engineering alignment session</div>
            <div class="ask-body">Walk through the V2 prototype together. Confirm all nine closed issues are reflected in the build spec. Book for next week.</div>
          </div>
        </div>
      </div>

      <!-- Right: status + phone -->
      <div style="flex:1; display:flex; flex-direction:column; gap:12px; align-items:center;">
        <table class="status-tbl" style="width:100%;">
          <thead>
            <tr>
              <th>Already done</th>
              <th>Still needed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="check-done">✓</span> Prototype built (5 screens, clickable)</td>
              <td><span class="check-need">○</span> Analytics implementation confirmed</td>
            </tr>
            <tr>
              <td><span class="check-done">✓</span> Accessibility-cleared (WCAG 2.1 AA)</td>
              <td><span class="check-need">○</span> Feature flag configuration approved</td>
            </tr>
            <tr>
              <td><span class="check-done">✓</span> V2 evaluation fixes applied (9/9 closed)</td>
              <td><span class="check-need">○</span> 30-day check-in scheduled</td>
            </tr>
            <tr>
              <td><span class="check-done">✓</span> PRD with full functional requirements</td>
              <td><span class="check-need">○</span> Design × Eng alignment session booked</td>
            </tr>
          </tbody>
        </table>
        <img data-shot="s4" class="pimg" alt="Goal progress screen: Dining Spending Goal showing $0 of $306 limit with empty progress bar. This is what a successful activation looks like." style="height:280px;" />
        <div class="sub-sm" style="text-align:center;">What a successful activation looks like.</div>
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
  <span id="slide-lbl" aria-live="polite" aria-atomic="true">1 / 8</span>
  <button class="nav-btn" onclick="nextSlide()" aria-label="Next slide">&#8250;</button>
</nav>

<script>
// ── Populate all phone images from SHOTS ──────────────────────────────────────
const SHOTS = ${shotsJson};

document.querySelectorAll('[data-shot]').forEach(function(el) {
  var key = el.dataset.shot;
  if (SHOTS[key]) el.src = SHOTS[key];
});

// ── Animated demo phone — slide 5 ────────────────────────────────────────────
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

// ── Slide navigation ─────────────────────────────────────────────────────────
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

// ── Scale deck to fill viewport ───────────────────────────────────────────────
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

  console.log('Building Design/UX team pitch deck...');
  const html = buildDeck(shots);

  const outPath = path.join(__dirname, 'finwise-pitch-h2-goal-activation-design.html');
  fs.writeFileSync(outPath, html, 'utf8');

  const kb = Math.round(html.length / 1024);
  console.log('Done: finwise-pitch-h2-goal-activation-design.html (' + kb + ' KB)');
}

main().catch(function(err) {
  console.error('Build failed:', err.message);
  process.exit(1);
});
