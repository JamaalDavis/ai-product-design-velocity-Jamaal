---
name: build-html-prototype
description: >
  Use this skill when the user wants to build a clickable HTML prototype from a Prototype Brief
  or hypothesis. Triggers include: "build the prototype", "make it clickable", "build me an HTML
  version", "I want something I can click through", "generate the HTML", or any time the user has
  a Prototype Brief and wants a working artefact they can open in a browser without using Figma.
  Can work from a Prototype Brief file, a pasted build prompt, or directly from a hypothesis if
  no brief exists yet.
---

# Build HTML Prototype

This skill takes a Prototype Brief (or a hypothesis with enough context) and produces a single
self-contained HTML file — embedded CSS and vanilla JS, no dependencies, opens directly in a browser.

The output is a lo-fi to mid-fi clickable prototype for customer testing sessions. It is not
production code. It should be fast to build, fast to change, and disposable once the hypothesis
is validated or killed.

---

## Step 0 — Locate the source material

**If the user has provided a Prototype Brief file:**
Read it in full. The key sections are:
- **What the Prototype Must Show** — these become your screens
- **What the Prototype Does NOT Need to Do** — hard constraints, respect them exactly
- **Build Prompt** — if present, use it as the primary spec. It was written to be self-contained.

**If the user has provided a hypothesis but no brief:**
Extract the Mechanism section. Infer: the key screen(s), the user and their state, the
intervention the user sees, and the outcome or confirmation state. Ask the user to confirm
your interpretation before building.

**If the user has pasted a build prompt inline:**
Use it directly. Do not ask clarifying questions — the build prompt was written to be
self-contained.

**Also look for:**
- A design system file in the company folder — look for any file named `*design-system*`
  or `*design*` in the same folder as the Prototype Brief or EIM report. If found, read it
  and use the CSS block it contains as the prototype's stylesheet instead of the defaults below.
- A branding folder (`branding/`, `brand/`, `tokens/`) — use any colours, fonts, or logo
  assets to style the prototype on-brand
- Existing screenshots or design references linked in the brief

---

## Step 1 — Plan the screens before writing any code

List the screens you intend to build and the click interactions that connect them. Present
this to the user as a simple map:

```
Screen 1: [Name] — [one line description]
  → Click "[element]" → Screen 2

Screen 2: [Name] — [one line description]
  → Click "[element]" → Screen 3

Screen 3: [Name] — [one line description]
  → Click "[element]" → Screen 1 (updated state)
```

Ask:

> "Here's what I'm planning to build. Does this match what you need, or are there screens
> missing or interactions that should work differently?"

Do not write any code until confirmed.

---

## Step 2 — Build the HTML file

### Structure rules

- **Single file.** All CSS in a `<style>` block in `<head>`. All JS in a `<script>` block
  before `</body>`. No external dependencies, no CDN links, no imports.
- **Screen switching via JS.** Each screen is a `<div class="screen" id="screen-N">`.
  Only the active screen has `display: block`. JS shows/hides screens on click.
- **Desktop only** unless the brief specifies mobile. Default: full browser window, 1280px minimum.
- **No error states, loading states, or edge cases** unless explicitly in "What the Prototype
  Must Show".

### Visual style defaults

If no branding is available, use this baseline:
- Background: `#ffffff`
- Sidebar / panels: `#f8f9fa`
- Borders: `#e5e7eb`
- Primary action colour: `#2563eb`
- Font: `Inter, -apple-system, BlinkMacSystemFont, sans-serif`
- Border radius: `8px` for cards, `6px` for buttons
- Base font size: `14px`

If branding assets exist, override these with the actual tokens.

### Content rules

- Use the **exact copy** from the build prompt or prototype brief — do not paraphrase or
  improve it. The copy is part of what is being tested.
- Use fixed placeholder values for all data (counts, names, dates). Never leave blanks.
- If the brief specifies placeholder names or numbers, use them exactly.

### Interaction rules

- Every clickable element must do something. If a nav item is out of scope, keep it
  visually present with a no-op handler — never a dead click with no feedback.
- State changes (e.g. counter going from 2 to 3 after an action) must be handled in JS,
  not by duplicating screens with slightly different content.
- Navigation elements (sidebar, back links, breadcrumbs) should work where the brief
  requires it, and be present but inert elsewhere.

---

## Step 3 — Save and confirm

Save the file to the same directory as the Prototype Brief. Naming convention:

`[product-slug]-prototype-[hypothesis-slug].html`

Example: `flowmind-prototype-h2-revops-integration-milestone.html`

If no source file location is clear, save to the current working directory.

After saving, tell the user:
- The file path
- How many screens it contains
- Which interactions are wired
- Anything left intentionally non-functional and why

---

## Step 4 — Offer a quick iteration loop

After delivering, ask:

> "Open it in a browser and tell me what needs changing. Common things to adjust:
> - Copy or placeholder data
> - A screen that's missing or needs a different state
> - An interaction that doesn't behave as expected
> - Visual style — colour, spacing, layout
>
> Describe what you want and I'll update the file."

Treat feedback as targeted edits to the existing file — do not rewrite from scratch unless
the screen structure has fundamentally changed.

---

## Quality checklist before delivering

- [ ] Does every screen from "What the Prototype Must Show" exist?
- [ ] Are all click interactions from the screen plan wired up?
- [ ] Does the file open in a browser with no console errors?
- [ ] Is the copy taken verbatim from the brief, not paraphrased?
- [ ] Are all placeholder values filled in — no empty brackets or lorem ipsum?
- [ ] Are items from "What the Prototype Does NOT Need to Do" absent from the build?
- [ ] Is the file fully self-contained — no external URLs, no missing assets?

---

## Common mistakes to avoid

**Building too much**
The brief lists what to leave out for a reason. Extra screens, realistic-looking data,
and visual polish add time without adding signal. If it's not in "What the Prototype Must
Show", don't build it.

**Rewriting the copy**
The specific wording on banners, CTAs, and confirmation messages are hypotheses in themselves.
Improving the copy means testing different assumptions than intended.

**Dead-end clicks**
Every tappable element should go somewhere. A non-functional nav item with a no-op handler
is fine. A primary CTA that does nothing will break the customer session.

**Over-engineering the JS**
State management for a 4-screen prototype does not need a framework. A handful of
`getElementById` calls and `classList` toggles is the right level of complexity.
