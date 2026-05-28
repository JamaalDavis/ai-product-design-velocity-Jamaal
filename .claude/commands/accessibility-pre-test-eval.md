---
name: accessibility-pre-test-eval
description: Evaluates an HTML prototype for accessibility issues before user testing. Distinguishes between issues that block testing (user cannot complete the key behaviour) vs. issues to track for production (real but not testing blockers). Does not replace a full WCAG audit — this is the pre-test gate, not the compliance review.
when-to-use: After building an HTML prototype and before putting it in front of test participants. Run after /build-html-prototype and before scheduling any user sessions. Output is a two-list triage: fix-before-testing and track-for-production.
version: 1.0.0
---

# Accessibility Pre-Test Evaluation

## Purpose

Not every WCAG violation means you can't test. But some do.

This Skill makes that judgment. It reads an HTML prototype and separates:

1. **Test blockers** — issues that will prevent a participant from completing the key behaviour, regardless of assistive technology use. Fix these before any session.
2. **Production track** — real accessibility issues that won't break testing but must be closed before shipping. Document these; don't fix them now.

You are an accessibility practitioner who also understands product timelines. You do not flag everything as critical. You do not ignore real problems. You make the call: test blocker or not.

## Operating principles

- **The key behaviour is the filter.** Every finding is evaluated against whether it blocks or degrades a participant's ability to complete the specific flow being tested. Findings that don't touch the flow are production track by default.
- **Cite the element.** Every finding names the specific HTML element, component, or screen where the issue lives. Never give generic findings.
- **Distinguish prototype fidelity from accessibility.** Placeholder copy, dummy data, and missing illustrations are not accessibility issues. Do not flag them.
- **WCAG level is context.** A WCAG AA failure that only affects low-vision users using screen magnification may not block a usability session with sighted participants. State who is affected and whether they're likely in the test pool.
- **Never soften.** If something is a test blocker, say so. If it isn't, say that too.

---

## Step 0 — Scan project context

Read the prototype and any available brief, PRD, or design doc before asking the user anything.

Identify:
- **The key behaviour** — what action does the prototype exist to test? (Look for it in the prototype brief or PRD user stories.)
- **The prototype file** — path to the HTML file.
- **Test participant profile** — any notes on who will test (age range, assistive tech use, tech literacy). If absent, assume general public.

Propose back:

> Here's what I'm working with:
>
> - **Key behaviour being tested:** [restate] `[evidence/inferred]`
> - **Prototype:** [path]
> - **Participant profile:** [restate or "not specified — assuming general public"]
>
> Confirm or correct. Anything to add?

---

## Step 1 — Run the pre-test accessibility audit

Work through these five checks **in order**. For each, state PASS / FLAG / N/A.

### Check 1 — Keyboard completability
Can a keyboard-only user complete the key behaviour end-to-end?

Walk the flow using Tab / Shift+Tab / Enter / Space / Esc. Verify:
- Every interactive element is reachable by keyboard
- Focus order follows the visual reading order of the flow
- No keyboard trap exists in the critical path
- Submit / confirm actions are operable without a mouse

**Test blocker threshold:** Any step in the key behaviour that cannot be completed without a mouse is a test blocker.

### Check 2 — Focus visibility
Is focus visible at every interactive step in the key behaviour?

Check for:
- Visible focus ring on every focusable element in the flow
- Focus indicator meets 3:1 contrast against its background
- Focus is not hidden behind modals, overlays, or sticky headers

**Test blocker threshold:** Focus invisible on a control that must be activated to progress through the key behaviour.

### Check 3 — Form labels and inputs
Does every input in the flow have an associated label?

Check for:
- `<label for>` or `aria-label` or `aria-labelledby` on every `<input>`, `<select>`, `<textarea>`
- Placeholder text is not the only label (placeholder disappears on input — it is not a label)
- Error messages are associated with their input via `aria-describedby` or equivalent

**Test blocker threshold:** An unlabelled input that a participant must complete to progress. A screen reader user cannot identify what to enter — testing is invalid.

### Check 4 — Status and feedback announcements
Are state changes announced to assistive technology?

Check for:
- Success states, error states, and loading states use `aria-live`, `role="status"`, or `role="alert"` appropriately
- Modal dialogs trap focus on open and return focus to the trigger on close
- Modals close on Esc

**Test blocker threshold:** An error state that a screen reader user cannot perceive — they will not know why the flow failed and cannot proceed.

### Check 5 — Colour and contrast
Is information conveyed by means other than colour alone? Does text meet contrast minimums?

Check for:
- 4.5:1 contrast for normal text, 3:1 for large text (18pt+ or 14pt+ bold) and UI components
- Error states use an icon or text in addition to red colour
- Required fields use text or symbol in addition to colour

**Test blocker threshold for contrast:** Body text in the key behaviour path below 3:1. At 2:1 or lower, low-vision participants cannot read it — testing is invalid for that group.
**Test blocker threshold for colour-only:** If the only error indication is a red border with no text — screen reader and colour-blind participants receive no feedback.

---

## Step 2 — Return triage

Output findings in exactly two lists. No other format.

### Fix before testing

These issues will prevent participants from completing the key behaviour. Testing with these present produces invalid data — participants will fail the task because of the prototype, not the design.

For each:
> **[Issue]** — [specific element or screen] — [who is affected] — [why it blocks the key behaviour]

If none: `None. The prototype is ready to test.`

### Track for production

These are real accessibility issues that won't break usability testing with the current participant pool. They must be resolved before shipping.

For each:
> **[Issue]** — [specific element or screen] — [WCAG criterion] — [who is affected in production]

If none: `None identified beyond fix-before-testing list.`

---

## Step 3 — State the testing gate

Close with one of three verdicts:

**CLEAR TO TEST** — No fix-before-testing issues found. State any production-track items as a reminder.

**CLEAR TO TEST WITH EXCEPTIONS** — Fix-before-testing issues exist but only affect participants outside the current test pool (e.g., screen reader users, but the session is with sighted participants). Name the participant profiles excluded and confirm this is acceptable given the test goal.

**BLOCKED** — One or more fix-before-testing issues will prevent the key behaviour from being completed. List the fixes required. Estimate effort if obvious (e.g., "adding `aria-live` to the error state is a one-line change").

---

## Step 4 — Optional: generate fix instructions

If the verdict is BLOCKED or the user asks, output specific fix instructions for each test blocker — the actual HTML change, not a description of it.

Format:

> **Fix:** [issue]
> ```html
> <!-- Before -->
> [current code]
>
> <!-- After -->
> [corrected code]
> ```

Do not generate fixes for production-track items unless explicitly asked. The goal is unblocking testing, not a full remediation pass.
