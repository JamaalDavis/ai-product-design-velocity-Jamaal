// build-deck.js
// Captures prototype screenshots with Puppeteer, then builds a 1280x720
// self-contained HTML pitch deck with animated demo slides.
// Usage: node build-deck.js

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
    // 430px matches the prototype's .phone-frame width; dpr=2 for retina sharpness
    await page.setViewport({ width: 500, height: 960, deviceScaleFactor: 2 });

    const url = 'file://' + path.resolve(__dirname, 'finwise-prototype-h2-goal-activation.html');
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 25000 });
    await sleep(2500); // wait for Google Fonts

    const snap = async () => {
      const el = await page.$('.phone-frame');
      return 'data:image/png;base64,' + await el.screenshot({ encoding: 'base64' });
    };

    // Home screen
    await page.evaluate(() => window.startScenario('A'));
    await sleep(400);
    const home = await snap();

    // Spending summary — top (categories visible)
    await page.evaluate(() => window.navSpending());
    await sleep(400);
    const s1top = await snap();

    // Spending summary — scrolled to show goal card
    await page.evaluate(() => {
      document.querySelector('.phone-frame').scrollTop = 9999;
    });
    await sleep(350);
    const s1 = await snap();

    // Adjust amount screen
    await page.evaluate(() => window.go('screen-2'));
    await sleep(400);
    const s2 = await snap();

    // Success state (goal activated)
    await page.evaluate(() => window.activateGoal());
    await sleep(500);
    const s3 = await snap();

    // Goal progress screen
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
  // Embed all screenshots as a single JSON object — avoids duplicating base64 data
  const shotsJson = JSON.stringify(shots);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>FinWise — The Goal Activation Opportunity</title>
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

/* ── Stage ── */
.stage-wrap {
  position: relative;
  transform-origin: top center;
}
.deck {
  width: 1280px;
  height: 720px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 24px 80px rgba(0,0,0,0.6);
}

/* ── Slides ── */
.slide {
  width: 1280px;
  height: 720px;
  background: #fff;
  position: absolute;
  inset: 0;
  display: none;
  overflow: hidden;
}
.slide.active { display: block; }

/* ── Brand ── */
:root {
  --blue: #2563EB;
  --blue-d: #1D4ED8;
  --blue-lt: #EFF6FF;
  --blue-bdr: #BFDBFE;
  --text: #111827;
  --sub: #6B7280;
  --green: #16A34A;
  --amber: #D97706;
  --bg: #F9FAFB;
  --border: #E5E7EB;
}

/* ── Navigation ── */
.nav-bar {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 14px;
  background: rgba(12,16,32,0.75);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 10px 20px;
  border-radius: 40px;
  color: #fff;
  z-index: 200;
  user-select: none;
}
.nav-btn {
  width: 34px; height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.3);
  background: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.15s;
}
.nav-btn:hover { background: rgba(255,255,255,0.15); }
.nav-btn:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
.dots { display: flex; gap: 7px; align-items: center; }
.dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: rgba(255,255,255,0.25);
  border: none; cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  padding: 0;
}
.dot.on { background: #fff; transform: scale(1.3); }
.slide-lbl { font-size: 12px; color: rgba(255,255,255,0.5); min-width: 38px; text-align: center; }

/* ── Left accent bar ── */
.bar {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 7px;
  background: var(--blue);
}

/* ── Slide inner content padding ── */
.pad {
  padding: 46px 68px 48px 76px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* ── Badge chip ── */
.badge {
  display: inline-block;
  align-self: flex-start;
  font-size: 10px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.1em;
  color: var(--blue);
  background: var(--blue-lt);
  border: 1px solid var(--blue-bdr);
  padding: 3px 11px;
  border-radius: 20px;
  margin-bottom: 12px;
}

/* ── Headlines ── */
.h1 { font-size: 34px; font-weight: 800; color: var(--text); line-height: 1.2; margin-bottom: 8px; }
.h1.sm { font-size: 28px; }
.sub { font-size: 15px; color: var(--sub); line-height: 1.5; margin-bottom: 20px; }

/* ── Two-column layouts ── */
.cols { display: grid; flex: 1; align-items: start; gap: 36px; }
.c55 { grid-template-columns: 1fr 1fr; }
.c64 { grid-template-columns: 1.5fr 1fr; }
.c46 { grid-template-columns: 1fr 1.5fr; }

/* ── Big stat ── */
.stats { display: flex; flex-direction: column; gap: 18px; }
.stat-val { font-size: 52px; font-weight: 800; color: var(--blue); line-height: 1; }
.stat-lbl { font-size: 11px; color: var(--sub); text-transform: uppercase;
             letter-spacing: 0.07em; margin-top: 4px; max-width: 180px; line-height: 1.4; }

/* ── Funnel ── */
.funnel { display: flex; flex-direction: column; gap: 0; }
.frow { display: flex; align-items: center; gap: 10px; }
.fpct { font-size: 20px; font-weight: 700; color: var(--blue); min-width: 58px; text-align: right; }
.fpct.gap { color: var(--amber); }
.fbar {
  height: 34px; border-radius: 6px; background: var(--blue-lt);
  display: flex; align-items: center; padding-left: 12px;
  font-size: 12px; font-weight: 600; color: var(--text); white-space: nowrap;
}
.fbar.gapbar { background: #FEF9C3; border: 1px dashed #F59E0B; }
.farrow { font-size: 18px; color: var(--sub); padding-left: 68px; }
.gap-pill {
  font-size: 10px; font-weight: 700; color: #92400E;
  background: #FEF3C7; border: 1px solid #F59E0B;
  padding: 3px 9px; border-radius: 20px; margin-left: 8px; white-space: nowrap;
}

/* ── Data table ── */
.dtable { width: 100%; border-collapse: collapse; }
.dtable th {
  font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--sub); padding: 9px 14px; border-bottom: 2px solid var(--border); text-align: left;
}
.dtable th.bh { color: var(--blue); background: var(--blue-lt); }
.dtable td { padding: 13px 14px; border-bottom: 1px solid #F3F4F6; font-size: 15px; color: var(--text); }
.dtable td.mn { font-size: 13px; color: var(--sub); font-weight: 500; }
.dtable td.bv { font-size: 22px; font-weight: 700; color: var(--blue); }
.dtable td.gv { font-size: 22px; font-weight: 700; color: var(--sub); }
.dtable td.dv { font-size: 28px; font-weight: 800; color: var(--text); }
.dtable td.gv2 { font-size: 14px; color: var(--green); font-weight: 700; }
.src { font-size: 10px; color: #9CA3AF; margin-top: 6px; }

/* ── Quote block ── */
.quote {
  font-size: 14px; font-weight: 600; color: var(--blue);
  background: var(--blue-lt); border-left: 4px solid var(--blue);
  padding: 11px 18px; border-radius: 0 8px 8px 0; margin-top: 14px; line-height: 1.6;
}
.quote.dark { background: var(--blue); color: #fff; border: none; border-radius: 8px; padding: 14px 22px; }
.quote.white { background: #fff; border: 1.5px solid var(--blue-bdr); color: var(--text); font-weight: 400; font-size: 13px; border-left: 4px solid var(--blue); }

/* ── Bullet items ── */
.bullets { display: flex; flex-direction: column; gap: 14px; }
.bitem { display: flex; gap: 12px; align-items: flex-start; }
.bdot {
  width: 26px; height: 26px; flex-shrink: 0;
  background: var(--blue); color: #fff; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 700; margin-top: 2px;
}
.btext { font-size: 14px; color: var(--text); line-height: 1.5; }
.btext strong { color: var(--blue-d); }
.btext .bsub { display: block; font-size: 12px; color: var(--sub); margin-top: 2px; }

/* ── Phone mockup ── */
.phone-wrap { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.phone-num {
  width: 22px; height: 22px; background: var(--blue); color: #fff;
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 700; flex-shrink: 0;
}
.pimg {
  border-radius: 20px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.1);
  display: block;
}
.pcap { font-size: 11px; color: var(--sub); text-align: center; max-width: 150px; line-height: 1.4; }

/* ── Demo phone ── */
#demo-phone {
  border-radius: 22px;
  box-shadow: 0 12px 48px rgba(0,0,0,0.25), 0 4px 12px rgba(0,0,0,0.12);
  display: block;
  transition: opacity 0.25s ease;
}

/* ── Mechanism table ── */
.mtable { width: 100%; border-collapse: collapse; }
.mtable td { padding: 13px 16px; border-bottom: 1px solid #F3F4F6; vertical-align: middle; }
.mtable tr:last-child td { border-bottom: none; }
.mtable tr.hl td { background: var(--blue-lt); }
.mframe { font-weight: 700; color: var(--text); font-size: 14px; width: 200px; }
.mevid { font-size: 13px; color: var(--sub); line-height: 1.5; }
.mverdict { text-align: center; font-size: 22px; font-weight: 800; width: 52px; }
.mno { color: #D1D5DB; }
.myes { color: var(--blue); }

/* ── Cost chain ── */
.costbox {
  background: var(--bg); border-radius: 12px; padding: 18px 22px;
  display: flex; flex-direction: column; gap: 7px;
}
.cline { font-size: 13px; color: var(--text); display: flex; gap: 8px; align-items: flex-start; }
.carr { color: var(--sub); flex-shrink: 0; }
.cfinal { font-size: 17px; font-weight: 700; color: var(--blue); border-top: 1px solid var(--border); padding-top: 10px; margin-top: 4px; }

/* ── Metric chain ── */
.mchain { display: flex; align-items: center; flex-wrap: wrap; gap: 0; margin-bottom: 16px; }
.mci {
  background: var(--blue-lt); border: 1px solid var(--blue-bdr); border-radius: 7px;
  padding: 7px 12px; font-size: 11px; font-weight: 600; color: var(--blue);
  text-align: center; line-height: 1.3;
}
.mcar { font-size: 16px; color: var(--blue); margin: 0 6px; flex-shrink: 0; }

/* ── Scenario table ── */
.stable { width: 100%; border-collapse: collapse; }
.stable th {
  font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--sub); padding: 7px 12px; border-bottom: 2px solid var(--border); text-align: left;
}
.stable td { padding: 10px 12px; font-size: 13px; color: var(--text); border-bottom: 1px solid #F3F4F6; }
.stable tr.hl td { background: #F0FDF4; }
.aval { font-weight: 700; color: var(--green); }

/* ── Ask card ── */
.askcard {
  background: var(--blue-lt); border: 1.5px solid var(--blue-bdr);
  border-radius: 12px; padding: 20px 24px;
}
.askcard h3 {
  font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.09em;
  color: var(--blue); margin-bottom: 14px;
}
.aitem { display: flex; gap: 10px; align-items: flex-start; margin-bottom: 10px; font-size: 13px; color: var(--text); line-height: 1.5; }
.ack { color: var(--blue); font-weight: 700; font-size: 15px; flex-shrink: 0; margin-top: 1px; }

/* ── Timeline ── */
.timeline { display: flex; flex-direction: column; gap: 0; }
.titem { display: flex; gap: 14px; align-items: flex-start; }
.ttrack { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
.tdot { width: 12px; height: 12px; background: var(--blue); border-radius: 50%; flex-shrink: 0; }
.tline { width: 2px; background: var(--blue-bdr); flex: 1; min-height: 22px; }
.tcontent { padding-bottom: 14px; }
.tlbl { font-size: 13px; font-weight: 600; color: var(--text); }
.tsub { font-size: 11px; color: var(--sub); margin-top: 2px; }

/* ── Closing ── */
.closing {
  font-size: 17px; font-weight: 700; color: var(--text);
  text-align: center; background: var(--blue-lt); border-radius: 10px;
  padding: 14px 24px; margin-top: 14px;
}

/* ── Slide number ── */
.snum {
  position: absolute; bottom: 16px; right: 24px;
  font-size: 10px; color: #D1D5DB; font-weight: 600;
}

/* ─────────────────────────────────────────
   SLIDE 1 — COVER
   ───────────────────────────────────────── */
.cover { display: flex; height: 100%; }
.cover-l {
  width: 400px; flex-shrink: 0;
  background: var(--blue); display: flex; flex-direction: column;
  justify-content: center; padding: 56px 44px;
}
.clogo { font-size: 30px; font-weight: 800; color: #fff; letter-spacing: -0.5px; margin-bottom: 14px; }
.ctag { font-size: 14px; color: rgba(255,255,255,0.65); line-height: 1.7; }
.cover-r {
  flex: 1; display: flex; flex-direction: column;
  justify-content: center; padding: 56px 56px 56px 60px; position: relative;
}
.carr-num { font-size: 100px; font-weight: 800; color: var(--blue); line-height: 1; letter-spacing: -4px; }
.carr-sub { font-size: 22px; color: var(--sub); font-weight: 500; margin-bottom: 20px; }
.cdivider { width: 44px; height: 4px; background: var(--blue); border-radius: 2px; margin-bottom: 20px; }
.ctitle { font-size: 28px; font-weight: 700; color: var(--text); line-height: 1.25; margin-bottom: 10px; }
.csub { font-size: 15px; color: var(--sub); line-height: 1.6; }
.cfoot {
  position: absolute; bottom: 28px; left: 60px; right: 56px;
  font-size: 11px; color: #9CA3AF; border-top: 1px solid var(--border); padding-top: 14px;
}
</style>
</head>
<body>

<div class="stage-wrap" id="stage">
<div class="deck" role="main" aria-label="FinWise Goal Activation Pitch Deck">

  <!-- ═══════════════════ SLIDE 1 — COVER ═══════════════════ -->
  <div class="slide active" id="sl1" aria-label="Slide 1: Cover">
    <div class="cover">
      <div class="cover-l">
        <div class="clogo">FinWise</div>
        <div class="ctag">Helping everyday Americans understand and control their money — one insight at a time.</div>
      </div>
      <div class="cover-r">
        <div class="carr-num">$1.3M</div>
        <div class="carr-sub">ARR opportunity — already in our data</div>
        <div class="cdivider"></div>
        <div class="ctitle">The Goal Activation<br>Opportunity</div>
        <div class="csub">How removing one decision converts 308,000<br>passive users into active goal-holders.</div>
        <div class="cfoot">H2 — Goal Activation &nbsp;·&nbsp; Board Presentation &nbsp;·&nbsp; Q3 2026</div>
      </div>
    </div>
  </div>

  <!-- ═══════════════════ SLIDE 2 — THE PROBLEM ═══════════════════ -->
  <div class="slide" id="sl2" aria-label="Slide 2: The Problem at Scale">
    <div class="bar"></div>
    <div class="pad">
      <div class="badge">The Problem</div>
      <div class="h1">81% of our users never reach the moment<br>that predicts whether they'll stay or pay.</div>
      <div class="sub">At 380,000 users, that's 308,000 accounts that have never set a savings goal.</div>

      <div class="cols c55" style="flex:1;">
        <div class="stats">
          <div>
            <div class="stat-val">308K</div>
            <div class="stat-lbl">accounts at current scale have never set a savings goal</div>
          </div>
          <div>
            <div class="stat-val">18.9%</div>
            <div class="stat-lbl"><code>set_first_goal</code> completion — the lowest step in onboarding</div>
          </div>
          <div>
            <div class="stat-val">63%</div>
            <div class="stat-lbl">users who viewed their spending data but left without a goal</div>
          </div>
        </div>

        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--sub);margin-bottom:14px;">Onboarding funnel</div>
          <div class="funnel">
            <div class="frow">
              <div class="fpct">100%</div>
              <div class="fbar" style="width:320px;">Connect account</div>
            </div>
            <div class="farrow">↓</div>
            <div class="frow">
              <div class="fpct">73.4%</div>
              <div class="fbar" style="width:250px;">View first transactions</div>
            </div>
            <div class="farrow">↓</div>
            <div class="frow">
              <div class="fpct">51.6%</div>
              <div class="fbar" style="width:185px;">View spending summary</div>
            </div>
            <div class="farrow">↓</div>
            <div class="frow" style="align-items:center;">
              <div class="fpct gap">18.9%</div>
              <div class="fbar gapbar" style="width:72px;">Set first goal</div>
              <div class="gap-pill">▲ 32.7pp — largest drop in funnel</div>
            </div>
          </div>
        </div>
      </div>

      <div class="quote">"The product shows users where their money went. It doesn't show them what to do about it."</div>
    </div>
    <div class="snum">2 / 10</div>
  </div>

  <!-- ═══════════════════ SLIDE 3 — THE SIGNAL ═══════════════════ -->
  <div class="slide" id="sl3" aria-label="Slide 3: The Data Signal">
    <div class="bar"></div>
    <div class="pad">
      <div class="badge">The Evidence</div>
      <div class="h1">Goal-setting is the single strongest predictor<br>of whether a user stays and pays.</div>
      <div class="sub">The data is unambiguous across three measures — n=1,800 accounts, EIM analysis, 2026-03-01</div>

      <div style="flex:1;display:flex;flex-direction:column;justify-content:center;">
        <table class="dtable">
          <thead>
            <tr>
              <th>Metric</th>
              <th class="bh">Goal-setters</th>
              <th>Non-goal-setters</th>
              <th>Difference</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="mn">90-day churn rate</td>
              <td class="bv">14.4%</td>
              <td class="gv">37.5%</td>
              <td class="dv">2.6×</td>
            </tr>
            <tr>
              <td class="mn">Free → Pro upgrade rate</td>
              <td class="bv">14.5%</td>
              <td class="gv">5.4%</td>
              <td class="dv">2.7×</td>
            </tr>
            <tr>
              <td class="mn">Share of all upgrade events</td>
              <td class="bv" style="font-size:28px;font-weight:800;">98.7%</td>
              <td class="gv">1.3%</td>
              <td class="dv" style="font-size:18px;color:var(--sub);">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="quote dark">98.7% of every upgrade event FinWise has ever recorded came from accounts that hit the savings goal paywall. The upgrade path runs entirely through goal-setting.</div>
    </div>
    <div class="snum">3 / 10</div>
  </div>

  <!-- ═══════════════════ SLIDE 4 — WHERE IT BREAKS DOWN ═══════════════════ -->
  <div class="slide" id="sl4" aria-label="Slide 4: Where the Funnel Breaks">
    <div class="bar"></div>
    <div class="pad">
      <div class="badge">The Failure Point</div>
      <div class="h1">Users see their data. Then they leave — not because they<br>don't want a goal, but because deciding feels hard in the moment.</div>

      <div class="cols c55" style="flex:1;margin-top:10px;">
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--sub);margin-bottom:14px;">The gap</div>
          <div style="display:flex;align-items:center;gap:18px;margin-bottom:16px;">
            <div style="text-align:center;">
              <div style="font-size:38px;font-weight:800;color:var(--blue);">51.6%</div>
              <div style="font-size:11px;color:var(--sub);margin-top:4px;">reach spending summary</div>
            </div>
            <div style="font-size:32px;color:var(--amber);font-weight:700;">→</div>
            <div style="text-align:center;">
              <div style="font-size:38px;font-weight:800;color:var(--amber);">18.9%</div>
              <div style="font-size:11px;color:var(--sub);margin-top:4px;">set first goal</div>
            </div>
          </div>
          <div style="background:#FEF9C3;border:1px solid #F59E0B;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
            <div style="font-size:26px;font-weight:800;color:#92400E;">32.7pp drop</div>
            <div style="font-size:12px;color:#78350F;margin-top:3px;">largest single gap in the funnel</div>
          </div>
          <div class="quote" style="font-size:13px;">Users at that moment are in <strong>processing mode</strong>, not decision mode. The product treats them as if they've already decided.</div>
        </div>

        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--sub);margin-bottom:14px;">What blank-state goal creation demands</div>
          <div class="bullets">
            <div class="bitem">
              <div class="bdot">1</div>
              <div class="btext"><strong>Choose a spending category</strong><span class="bsub">From scratch, with no guidance</span></div>
            </div>
            <div class="bitem">
              <div class="bdot">2</div>
              <div class="btext"><strong>Choose a target amount</strong><span class="bsub">A number they have no benchmark for</span></div>
            </div>
            <div class="bitem">
              <div class="bdot">3</div>
              <div class="btext"><strong>Commit</strong><span class="bsub">Immediately after processing their full financial picture for the first time</span></div>
            </div>
          </div>
          <div style="margin-top:18px;font-size:13px;color:var(--sub);line-height:1.7;font-style:italic;">This is a friction problem.<br>Friction problems have friction solutions.</div>
        </div>
      </div>
    </div>
    <div class="snum">4 / 10</div>
  </div>

  <!-- ═══════════════════ SLIDE 5 — THE SOLUTION ═══════════════════ -->
  <div class="slide" id="sl5" aria-label="Slide 5: The Solution">
    <div class="bar"></div>
    <div class="pad">
      <div class="badge">The Solution</div>
      <div class="h1">One card. One tap. Zero decisions.</div>
      <div class="sub">Immediately after viewing their spending summary, users see a goal already drafted from their own data.</div>

      <div class="cols c64" style="flex:1;align-items:center;">
        <div>
          <div class="bullets" style="margin-bottom:22px;">
            <div class="bitem">
              <div class="bdot" style="font-size:14px;">📂</div>
              <div class="btext"><strong>Category pre-selected</strong><span class="bsub">User's #1 spending category by 30-day total (e.g., Dining)</span></div>
            </div>
            <div class="bitem">
              <div class="bdot" style="font-size:14px;">💰</div>
              <div class="btext"><strong>Amount pre-calculated</strong><span class="bsub">10% below actual spend, rounded to nearest dollar ($340 → $306)</span></div>
            </div>
            <div class="bitem">
              <div class="bdot" style="font-size:14px;">✓</div>
              <div class="btext"><strong>Three options: Activate · Adjust · Not now</strong><span class="bsub">Control is preserved — the decision is removed, not the choice</span></div>
            </div>
          </div>
          <div class="quote white">"The auto-draft doesn't take control from the user. It removes the blank-state decision. The user still adjusts and owns the goal — they just don't have to invent it."</div>
        </div>

        <div style="display:flex;justify-content:center;align-items:center;height:100%;">
          <img data-shot="s1" class="pimg" alt="Screen 1: Spending summary with auto-drafted goal card showing Dining category $340 spend with $306 suggested target and Activate goal button" style="height:530px;width:auto;" />
        </div>
      </div>
    </div>
    <div class="snum">5 / 10</div>
  </div>

  <!-- ═══════════════════ SLIDE 6 — HOW IT WORKS (DEMO) ═══════════════════ -->
  <div class="slide" id="sl6" aria-label="Slide 6: The Demo — How It Works">
    <div class="bar"></div>
    <div class="pad" style="padding-bottom:28px;">
      <div class="badge">The Demo</div>
      <div class="h1">From spending summary to active goal in under 10 seconds.</div>

      <div style="display:flex;gap:28px;flex:1;align-items:center;margin-top:8px;">

        <!-- Animated cycling phone -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:10px;flex-shrink:0;">
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:var(--blue);background:var(--blue-lt);padding:3px 10px;border-radius:20px;">Live flow</div>
          <img id="demo-phone"
               alt="Demo cycling automatically through all 4 prototype screens: spending summary, adjust amount, goal set, goal progress"
               style="height:410px;width:auto;border-radius:22px;box-shadow:0 12px 40px rgba(0,0,0,0.22);opacity:0;transition:opacity 0.25s;" />
          <div style="font-size:10px;color:var(--sub);text-align:center;">Auto-cycling · 2.5s per screen</div>
        </div>

        <!-- Arrow -->
        <div style="font-size:28px;color:var(--blue-bdr);flex-shrink:0;">→</div>

        <!-- Four static phones -->
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:18px;flex:1;align-items:center;">
          <div class="phone-wrap">
            <div class="phone-num">1</div>
            <img data-shot="s1" class="pimg" alt="Screen 1: Spending summary with goal card" style="height:310px;width:auto;" />
            <div class="pcap">Spending summary + goal card</div>
          </div>
          <div class="phone-wrap">
            <div class="phone-num">2</div>
            <img data-shot="s2" class="pimg" alt="Screen 2: Adjust amount inline with stepper" style="height:310px;width:auto;" />
            <div class="pcap">Adjust amount inline — no new screen</div>
          </div>
          <div class="phone-wrap">
            <div class="phone-num">3</div>
            <img data-shot="s3" class="pimg" alt="Screen 3: Goal set success state with undo option" style="height:310px;width:auto;" />
            <div class="pcap">Goal set! + 10-second undo</div>
          </div>
          <div class="phone-wrap">
            <div class="phone-num">4</div>
            <img data-shot="s4" class="pimg" alt="Screen 4: Goal progress screen with progress bar" style="height:310px;width:auto;" />
            <div class="pcap">Immediate goal progress view</div>
          </div>
        </div>
      </div>

      <div style="font-size:11px;color:var(--sub);text-align:right;margin-top:8px;">Prototype built, clickable, and evaluated · 9 design and accessibility findings identified and closed · Ready for user testing</div>
    </div>
    <div class="snum">6 / 10</div>
  </div>

  <!-- ═══════════════════ SLIDE 7 — THE MECHANISM ═══════════════════ -->
  <div class="slide" id="sl7" aria-label="Slide 7: The Mechanism">
    <div class="bar"></div>
    <div class="pad">
      <div class="badge">The Mechanism</div>
      <div class="h1">The barrier is decision cost —<br>not motivation, not discovery, not trust.</div>

      <div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:18px;">
        <table class="mtable">
          <tbody>
            <tr>
              <td class="mframe">Motivation problem?</td>
              <td class="mevid">Users connected their bank. They sat through onboarding. They opened the spending summary and looked at their own financial data.</td>
              <td class="mverdict"><span class="mno">✗</span></td>
            </tr>
            <tr>
              <td class="mframe">Discovery problem?</td>
              <td class="mevid">The spending summary is reached by 51.6% of accounts. They're already there. The next step is right in front of them.</td>
              <td class="mverdict"><span class="mno">✗</span></td>
            </tr>
            <tr class="hl">
              <td class="mframe">Decision cost problem?</td>
              <td class="mevid">Blank-state goal creation demands 3 simultaneous decisions from users who just processed their full financial picture for the first time. They're in processing mode, not decision mode.</td>
              <td class="mverdict"><span class="myes">✓</span></td>
            </tr>
          </tbody>
        </table>

        <div class="quote dark" style="text-align:center;font-size:15px;">
          The auto-draft reduces the decision from 3 to 0. &nbsp;The user confirms a suggestion. &nbsp;The product does the deciding.
        </div>
      </div>
    </div>
    <div class="snum">7 / 10</div>
  </div>

  <!-- ═══════════════════ SLIDE 8 — WHY NOW ═══════════════════ -->
  <div class="slide" id="sl8" aria-label="Slide 8: Cost of Inaction">
    <div class="bar"></div>
    <div class="pad">
      <div class="badge">Cost of Inaction</div>
      <div class="h1 sm">Every month without this feature costs approximately<br>$63,000 in excess Pro account churn.</div>

      <div class="cols c55" style="flex:1;margin-top:14px;align-items:start;">
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--sub);margin-bottom:12px;">The math</div>
          <div class="costbox">
            <div class="cline">308,000 non-goal-setters at current scale</div>
            <div class="cline"><span class="carr">→</span>37.5% churn rate vs 14.4% for goal-setters</div>
            <div class="cline"><span class="carr">→</span>23.1pp excess = ~71,000 accounts churning in excess annually</div>
            <div class="cline"><span class="carr">→</span>At 37.5% Pro rate: ~26,600 Pro accounts at excess churn risk</div>
            <div class="cline"><span class="carr">→</span>At $119.88 ARR/Pro account: ~$3.2M ARR at excess risk annually</div>
            <div class="cfinal">≈ $63,000/month in excess Pro churn (current scale)<br><span style="font-size:13px;color:var(--sub);font-weight:400;">≈ $166,000/month at 1M users (2026 target)</span></div>
          </div>
        </div>

        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--sub);margin-bottom:12px;">Three urgency factors</div>
          <div class="bullets">
            <div class="bitem">
              <div class="bdot">1</div>
              <div class="btext"><strong>User base is growing to 1M by end of 2026</strong><span class="bsub">At that scale the same gap costs $166K/month in excess churn</span></div>
            </div>
            <div class="bitem">
              <div class="bdot">2</div>
              <div class="btext"><strong>Experiment infrastructure already spec'd</strong><span class="bsub">Feature flag, holdout assignment, and analytics events fully defined. Lead time is engineering only.</span></div>
            </div>
            <div class="bitem">
              <div class="bdot">3</div>
              <div class="btext"><strong>Competitors don't start from blank state</strong><span class="bsub">Copilot, YNAB, and Rocket Money all have guided or default goal-setting flows</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="snum">8 / 10</div>
  </div>

  <!-- ═══════════════════ SLIDE 9 — BUSINESS CASE ═══════════════════ -->
  <div class="slide" id="sl9" aria-label="Slide 9: Business Case">
    <div class="bar"></div>
    <div class="pad">
      <div class="badge">Business Case</div>
      <div class="h1 sm">A conservative 2pp Pro conversion lift = $760K ARR.<br>The data supports expecting more.</div>

      <div style="margin-top:14px;">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:var(--sub);margin-bottom:8px;">Metric chain</div>
        <div class="mchain">
          <div class="mci">81.1%<br>non-activation</div>
          <div class="mcar">→</div>
          <div class="mci">Missed<br>goal-setting</div>
          <div class="mcar">→</div>
          <div class="mci">Missed<br>paywall hit</div>
          <div class="mcar">→</div>
          <div class="mci">Missed<br>upgrade trigger</div>
          <div class="mcar">→</div>
          <div class="mci">$380K ARR<br>per 1pp Pro conversion</div>
        </div>
      </div>

      <div class="cols c55" style="flex:1;margin-top:10px;align-items:start;">
        <div>
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:var(--sub);margin-bottom:8px;">ARR scenarios</div>
          <table class="stable">
            <thead><tr><th>Scenario</th><th>Assumption</th><th>ARR impact</th></tr></thead>
            <tbody>
              <tr>
                <td>Conservative</td>
                <td>2pp Pro conversion lift</td>
                <td class="aval">+$760K</td>
              </tr>
              <tr class="hl">
                <td><strong>Moderate</strong></td>
                <td>20% of non-goal-setters activated; upgrade rate approaches goal-setter baseline (14.5%)</td>
                <td class="aval" style="font-size:17px;">+$1.3M</td>
              </tr>
              <tr>
                <td>Churn only</td>
                <td>90-day churn drops 37.5% → 28%</td>
                <td class="aval">Compounding Pro retention</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:var(--sub);margin-bottom:8px;">Success metrics</div>
          <table class="stable">
            <thead><tr><th>Metric</th><th>Baseline</th><th>Target</th><th>Window</th></tr></thead>
            <tbody>
              <tr>
                <td><code style="font-size:11px;">set_first_goal</code></td>
                <td>18.9%</td>
                <td class="aval">35%</td>
                <td>90 days</td>
              </tr>
              <tr>
                <td>Pro conversion</td>
                <td>4.2%</td>
                <td class="aval">8.0%</td>
                <td>End 2026</td>
              </tr>
              <tr>
                <td>90-day churn</td>
                <td>37.5%</td>
                <td class="aval">28%</td>
                <td>6 months</td>
              </tr>
            </tbody>
          </table>
          <div style="margin-top:12px;font-size:11px;color:var(--sub);line-height:1.6;">
            Guardrails: <code>goal_draft_dismissed</code> rate ≤70% &nbsp;·&nbsp; Abandoned rate ≤60% &nbsp;·&nbsp; Session exit time unchanged
          </div>
        </div>
      </div>
    </div>
    <div class="snum">9 / 10</div>
  </div>

  <!-- ═══════════════════ SLIDE 10 — THE ASK ═══════════════════ -->
  <div class="slide" id="sl10" aria-label="Slide 10: The Ask">
    <div class="bar"></div>
    <div class="pad">
      <div class="badge">The Ask</div>
      <div class="h1 sm">Approve H2 Goal Activation as the primary<br>Q3 2026 product investment.</div>

      <div class="cols c55" style="flex:1;margin-top:14px;align-items:start;">
        <div>
          <div class="askcard">
            <h3>What we're asking for</h3>
            <div class="aitem"><span class="ack">✓</span><span>Approve <strong>6–8 weeks of engineering time</strong> to build the auto-draft card and 50/50 holdout experiment infrastructure</span></div>
            <div class="aitem"><span class="ack">✓</span><span>Prioritize <strong>H2 above competing Q3 roadmap items</strong></span></div>
            <div class="aitem" style="margin-bottom:0;"><span class="ack">✓</span><span>Approve the <strong>50/50 holdout experiment</strong> on new accounts with stable assignment</span></div>
          </div>
          <div style="margin-top:14px;font-size:12px;color:var(--sub);line-height:1.7;padding:0 4px;">
            <strong style="color:var(--text);">Downside, bounded:</strong> If the experiment doesn't move the metric, we've spent 6–8 weeks of engineering and learned something important.<br><br>
            <strong style="color:var(--text);">Upside, real:</strong> $760K–$1.3M ARR confirmed within the quarter.
          </div>
        </div>

        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--sub);margin-bottom:14px;">Timeline</div>
          <div class="timeline">
            <div class="titem">
              <div class="ttrack"><div class="tdot"></div><div class="tline"></div></div>
              <div class="tcontent"><div class="tlbl">Board approval</div><div class="tsub">Today</div></div>
            </div>
            <div class="titem">
              <div class="ttrack"><div class="tdot"></div><div class="tline"></div></div>
              <div class="tcontent"><div class="tlbl">Engineering scoping complete</div><div class="tsub">Week 1–2 post-approval</div></div>
            </div>
            <div class="titem">
              <div class="ttrack"><div class="tdot"></div><div class="tline"></div></div>
              <div class="tcontent"><div class="tlbl">Experiment live (50/50 holdout)</div><div class="tsub">Week 6–8 post-approval</div></div>
            </div>
            <div class="titem">
              <div class="ttrack"><div class="tdot"></div><div class="tline"></div></div>
              <div class="tcontent"><div class="tlbl">90-day read</div><div class="tsub">Q4 2026</div></div>
            </div>
            <div class="titem">
              <div class="ttrack"><div class="tdot"></div></div>
              <div class="tcontent"><div class="tlbl">Board results update</div><div class="tsub">Q4 2026 board meeting</div></div>
            </div>
          </div>
          <div style="margin-top:14px;background:var(--bg);border-radius:8px;padding:12px 16px;font-size:11px;color:var(--sub);line-height:1.7;">
            <strong style="color:var(--text);">Success criteria:</strong> <code>set_first_goal</code> completion increases by ≥8pp in the treatment cohort within 30 days, and 90-day upgrade rate improves by ≥1pp vs. control.
          </div>
        </div>
      </div>

      <div class="closing">The data is clear. &nbsp; The prototype is built. &nbsp; The experiment is ready to run.</div>
    </div>
    <div class="snum">10 / 10</div>
  </div>

</div><!-- /deck -->
</div><!-- /stage-wrap -->

<!-- Navigation -->
<nav class="nav-bar" aria-label="Slide navigation">
  <button class="nav-btn" id="prev-btn" onclick="prevSlide()" aria-label="Previous slide">‹</button>
  <div class="dots" id="dots" role="tablist" aria-label="Slide indicators"></div>
  <span class="slide-lbl" id="slide-lbl" aria-live="polite">1 / 10</span>
  <button class="nav-btn" id="next-btn" onclick="nextSlide()" aria-label="Next slide">›</button>
</nav>

<script>
// ── Screenshot data (injected by build script) ──
const SHOTS = ${shotsJson};

// ── Populate all phone images ──
document.querySelectorAll('[data-shot]').forEach(function(el) {
  var key = el.dataset.shot;
  if (SHOTS[key]) el.src = SHOTS[key];
});

// ── Demo phone animation ──
var demoEl = document.getElementById('demo-phone');
var demoSeq = ['s1', 's2', 's3', 's4'];
var demoIdx = 0;

if (demoEl && SHOTS.s1) {
  demoEl.src = SHOTS.s1;
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

// ── Slide deck logic ──
var slides = document.querySelectorAll('.slide');
var cur = 0;
var total = slides.length;

function buildDots() {
  var container = document.getElementById('dots');
  for (var i = 0; i < total; i++) {
    var btn = document.createElement('button');
    btn.className = 'dot' + (i === 0 ? ' on' : '');
    btn.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    btn.dataset.idx = i;
    btn.onclick = function() { show(parseInt(this.dataset.idx)); };
    container.appendChild(btn);
  }
}

function show(n) {
  slides[cur].classList.remove('active');
  document.querySelectorAll('.dot')[cur].classList.remove('on');
  document.querySelectorAll('.dot')[cur].setAttribute('aria-selected', 'false');
  cur = (n + total) % total;
  slides[cur].classList.add('active');
  document.querySelectorAll('.dot')[cur].classList.add('on');
  document.querySelectorAll('.dot')[cur].setAttribute('aria-selected', 'true');
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

// ── Scale deck to fill viewport ──
function scaleDeck() {
  var scaleX = window.innerWidth / 1280;
  var scaleY = (window.innerHeight - 70) / 720;
  var s = Math.min(scaleX, scaleY, 1.2);
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

// ─── 3. Main ─────────────────────────────────────────────────────────────────

async function main() {
  console.log('Capturing prototype screenshots...');
  const shots = await captureScreenshots();
  console.log('  home, s1top, s1 (scrolled), s2, s3, s4 — captured');

  console.log('Building pitch deck...');
  const html = buildDeck(shots);

  const outPath = path.join(__dirname, 'finwise-pitch-deck.html');
  fs.writeFileSync(outPath, html, 'utf8');

  const kb = Math.round(html.length / 1024);
  console.log('Done: finwise-pitch-deck.html (' + kb + ' KB)');
}

main().catch(function(err) {
  console.error('Build failed:', err.message);
  process.exit(1);
});
