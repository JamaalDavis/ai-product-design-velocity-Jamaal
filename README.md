# Skills: AI-Powered Product Workflow

Three skills that take you from raw data to a validated, buildable product intervention. They are designed to run in sequence but can be used independently.

---

## The workflow at a glance

```
Raw data (CSV, JSON, etc.)
        ↓
/eim-product-analyst     ← analyse data, generate EIM hypotheses
        ↓
      PAUSE              ← you validate the findings against what you know
        ↓
/hypothesis-to-prd       ← turn one hypothesis into a PRD and/or prototype brief
        ↓
      PAUSE              ← you confirm E/I/M extraction, set ambition level, review PRD draft
        ↓
   Output files          ← PRD.md, Prototype Brief.md
        ↓
        ├── Figma Make   ← paste the build prompt into Figma Make
        │
        └── /build-html-prototype  ← or build a clickable HTML file right here
```

---

## Skill 1: `/eim-product-analyst`

**What it does:** Analyses product, customer, or usage data and produces a set of EIM hypotheses — each grounded in evidence from the data, quantified by business impact, and paired with a specific intervention.

**When to use it:** You have data files and want to know where to focus. You don't need to frame the question — just drop the data and ask for signals.

**Trigger phrases:**
- "Analyse my data"
- "What's driving churn?"
- "Find expansion opportunities"
- "Run EIM on this"
- "Where should we focus?"

**What it needs:**
- One or more data files (CSV, JSON, TSV, Parquet)
- Optional: a product context document (any `.md` or `.txt` describing the product)
- Optional: a data dictionary

**What it produces:**
- 3–5 EIM hypotheses ranked by confidence × impact
- A "What We Ruled Out" section explaining discarded signals
- Recommended next steps

**Where it pauses for you:**
1. After generating hypothesis titles — before writing the full report, it checks the findings against your qualitative knowledge

---

## Skill 2: `/hypothesis-to-prd`

**What it does:** Takes a single EIM hypothesis and produces a PRD, a Prototype Brief, or both — depending on what you ask for.

**When to use it:** After `/eim-product-analyst`, or any time you have a hypothesis (from any source) and want to move it toward execution or customer testing.

**Trigger phrases:**
- "Turn this into a PRD"
- "Write a PRD for H2"
- "Build a prototype brief"
- "Make this ready for the team"
- "What would we actually build?"

**What it needs:**
- An EIM hypothesis — either from a file, pasted inline, or referenced by number (e.g. "H2")
- Optional: Figma file URLs or design references (used to ground the PRD in existing components)

**What it produces:**
- **PRD** (`[product]-prd-[hypothesis].md`) — problem statement, hypothesis, success metrics, scope, user stories, functional requirements, analytics instrumentation, open questions
- **Prototype Brief** (`[product]-prototype-[hypothesis].md`) — TL;DR, what to test, what to build, fidelity recommendation, build prompt (paste into Claude Code / Figma Make / Lovable), obvious objections, customer conversation guide

**Where it pauses for you:**
1. At the start — asks whether you want a PRD, Prototype Brief, or both
2. After parsing the hypothesis — confirms the E/I/M extraction before writing anything
3. Before writing Success Metrics — presents baselines and asks for your ambition level (Cautious / Meaningful / Transformative / Custom)
4. After the PRD draft — review and correct before the Prototype Brief is produced

---

## Skill 3: `/build-html-prototype`

**What it does:** Takes a Prototype Brief (or a hypothesis with enough context) and builds a single self-contained HTML file — clickable, browser-ready, no dependencies, no Figma required.

**When to use it:** You have a Prototype Brief and want something you can open immediately in a browser and put in front of a customer. Faster than Figma for simple flows, and easier to iterate on in real time during a session.

**Trigger phrases:**
- "Build the prototype"
- "Make it clickable"
- "Build me an HTML version"
- "I want something I can click through"
- "Generate the HTML"

**What it needs:**
- A Prototype Brief file — or a build prompt pasted inline
- Optional: a branding folder with colour tokens or fonts

**What it produces:**
- A single `.html` file saved alongside the Prototype Brief
- All CSS and JS embedded — open it in any browser, share it as a file, no server needed

**Where it pauses for you:**
1. After reading the brief — confirms the screen plan and interactions before writing any code
2. After delivery — offers an iteration loop for copy, layout, or interaction changes

**When to use Figma Make instead:**
If you need high-fidelity mobile frames, device mockups, or output that lives in your design system — use the build prompt from the Prototype Brief in Figma Make. Use this skill when you want something fast and browser-native that you can tweak in plain text.

---

## End-to-end example

```
You:  /eim-product-analyst
      [drops fitbody_churn.csv]

AI:   Analyses data → presents 4 hypothesis titles for your review
      PAUSE: "Do these align with what you're hearing from customers?"

You:  "Yes — H2 and H3 look right. H1 feels like noise, skip it."

AI:   Writes full EIM report with H2, H3, H4
      Saves to: fitbody/fitbody-eim-report.md

---

You:  /hypothesis-to-prd
      "Use H2 from fitbody/fitbody-eim-report.md"

AI:   "Do you want PRD, Prototype Brief, or both?"

You:  "Both"

AI:   Reads H2, extracts E/I/M
      PAUSE: "Here's what I extracted — does this look right?"

You:  "Yes, proceed"

AI:   Presents baselines, asks ambition level
      PAUSE: "Cautious / Meaningful / Transformative / Custom?"

You:  "Meaningful"

AI:   Writes PRD draft
      PAUSE: "Review the PRD — any corrections before I write the brief?"

You:  "Looks good, proceed"

AI:   Writes Prototype Brief
      Saves to: fitbody/fitbody-prd-h2-[slug].md
                fitbody/fitbody-prototype-h2-[slug].md

---

You:  /build-html-prototype
      "Use fitbody/fitbody-prototype-h2-[slug].md"

AI:   Reads the brief, plans the screens
      PAUSE: "Here are the 3 screens and interactions I'm planning — does this look right?"

You:  "Yes, build it"

AI:   Builds the HTML file
      Saves to: fitbody/fitbody-prototype-h2-[slug].html
      "Open it in a browser. 3 screens, all interactions wired. Let me know what to change."
```

---

## Tips

**Running just the prototype brief:** If you already have a PRD or a clear hypothesis and just need something to test with customers, choose option B at the first pause. The skill skips straight to the brief.

**Pointing to a specific hypothesis:** Say "H2" or quote the title. If you don't specify, the skill lists the available hypotheses and asks you to choose.

**Using Figma files:** If you have Figma URLs in the conversation or linked from a product context doc, the skill will pull design context before writing the PRD. This makes the functional requirements significantly more accurate.

**Saving outputs:** All files are saved to the same directory as your source EIM report. If there's no source file, they're saved to the current working directory.

**Building the HTML prototype without a brief:** You can skip straight to `/build-html-prototype` and paste a hypothesis or describe the screens you want. The skill will infer the structure and confirm it with you before building.
