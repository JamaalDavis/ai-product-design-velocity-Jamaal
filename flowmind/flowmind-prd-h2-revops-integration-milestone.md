# PRD: Integration Milestone Banner — Pro RevOps Upgrade Nudge

**Hypothesis source:** flowmind/flowmind-eim-report.md — Hypothesis 2
**Author:** generated
**Date:** 2026-04-09
**Status:** Draft

---

## Problem Statement

RevOps teams on Flowmind's Pro tier are power users — they build `data_sync` and `notification_trigger` workflows across multiple tools, and they understand the value of connecting more of their stack. But at 2–3 integrations, they hit a natural stopping point: the workflows they've built are working, nothing is visibly broken, and there's no prompt in the product to show them what connecting the next tool would unlock. They don't know that RevOps teams like theirs typically run 4–6 integrations, and they have no visibility into which tools those peers connect next. The result is that 62 accounts sit in a configuration that is productive enough to stay, but not deeply embedded enough to trigger the expansion they would otherwise make. The value is there; the signal isn't.

---

## Hypothesis

**We believe** surfacing a persistent integration milestone banner in the main Flowmind dashboard for Pro RevOps accounts with 2–3 integrations — showing peer benchmarks and a filtered integration catalogue — **will** increase `integration_count` from 2–3 to 4+ within 90 days for a meaningful share of the near-threshold pool  
**because** Pro RevOps accounts that cross 4 integrations upgrade to Enterprise at 70.8% (n=48), vs 4.8% for those stuck at 2–3 (n=62) — a 14.8x difference within the same vertical and plan tier.  
**We'll know it worked when** at least 30% of the 62 target accounts reach `integration_count ≥ 4` within 90 days of banner launch, and `upgraded_90d` for this segment exceeds the prior-period baseline by at least 10 percentage points.

---

## Success Metrics

| Metric | Type | Baseline | Target | Measurement window |
|---|---|---|---|---|
| % of target accounts reaching `integration_count ≥ 4` | Primary | ~0% organic in 90 days (4.8% upgrade rate implies near-zero integration growth) | 30% | 90 days |
| `upgraded_90d` rate for Pro RevOps 2–3 integration accounts | Secondary | 4.8% (n=62) | ≥15% | 90 days |
| Support tickets from target accounts | Guardrail | [current baseline for Pro RevOps segment] | Must not increase | 90 days |

---

## Scope

### In Scope
- Persistent banner displayed in the main Flowmind dashboard (the primary post-login screen)
- Banner trigger: account `plan_tier = pro` AND `vertical = revops` AND `integration_count` between 2 and 3 (inclusive)
- Banner content: current integration count, peer benchmark ("RevOps teams like yours typically connect 4–6 tools"), and CTA to view the filtered integration catalogue
- Integration catalogue filtered view: shows only the top 5 integrations most commonly connected by Pro RevOps accounts with 4+ integrations (derived from platform data — `data_sync` and `notification_trigger` workflow pairs dominate; catalogue should surface accordingly)
- Banner visible to admin and member roles (not viewer)
- Banner is persistent — it does not have a dismiss/close control
- Banner suppression: removed automatically when `integration_count` reaches 4
- Analytics instrumentation for all banner interactions and integration additions in the target segment

### Out of Scope
- Changes to the integration catalogue itself — the existing catalogue is used, filtered by a query param
- Any email or outbound notification version of this nudge (in-product only in v1)
- Personalisation of the peer benchmark copy per account (static copy in v1)
- A/B testing banner copy variants (single copy, measured against prior-period baseline)
- Targeting any other vertical or plan tier — this intervention is RevOps Pro only

### Assumptions and Dependencies
- `vertical` is a stored account attribute accessible at runtime (set at signup or by sales)
- `integration_count` is a real-time account attribute available to the frontend
- The integration catalogue supports URL-based filtering to pre-select a subset of integrations
- Prior-period baseline data (90 days before launch) for the Pro RevOps 2–3 integration segment is accessible for comparison — no holdout group is used given the small pool (n=62)

---

## User Stories

**Story 1: Admin sees the milestone banner on the dashboard**
As a Pro RevOps admin with 2 integrations connected, I want to see how my integration setup compares to similar teams, so that I understand whether I'm getting as much out of Flowmind as I could.

**Acceptance criteria:**
- [ ] Banner appears on the main dashboard for accounts where `plan_tier = pro`, `vertical = revops`, and `integration_count` is 2 or 3
- [ ] Banner displays the account's current integration count dynamically (e.g. "You're at 2")
- [ ] Banner displays the peer benchmark copy ("RevOps teams like yours typically connect 4–6 tools")
- [ ] Banner is not shown to viewer role users
- [ ] Banner is not shown to accounts with `integration_count < 2` or `integration_count ≥ 4`

**Story 2: User clicks through to the filtered integration catalogue**
As a Pro RevOps admin who wants to know what to connect next, I want to see integrations that teams like mine commonly use, so that I don't have to scroll through the full catalogue to find relevant options.

**Acceptance criteria:**
- [ ] Clicking the banner CTA opens the integration catalogue filtered to the top 5 integrations for Pro RevOps 4+ accounts
- [ ] The filtered view is clearly labelled (e.g. "Popular with RevOps teams")
- [ ] The user can navigate from the filtered view to the full catalogue without losing context
- [ ] An analytics event fires on CTA click with `account_id`, `integration_count_at_click`, and `role`

**Story 3: Banner disappears once threshold is crossed**
As a Pro RevOps admin who has just connected a fourth integration, I want the milestone banner to be gone, so that the dashboard reflects my current state and doesn't show me a nudge I no longer need.

**Acceptance criteria:**
- [ ] Banner is suppressed immediately (on next page load) once `integration_count` reaches 4
- [ ] Banner does not reappear if the user later disconnects an integration and drops back to 3
- [ ] A `milestone_reached` analytics event fires when suppression is triggered

**Story 4: Member role sees the banner and can explore the catalogue**
As a Pro RevOps member (non-admin), I want to see the integration milestone so that I can bring the suggestion to my admin, even if I can't connect integrations myself.

**Acceptance criteria:**
- [ ] Banner is visible to member role users, not just admins
- [ ] The CTA copy for member role acknowledges they may need admin action (e.g. "See what to ask your admin to connect next") — *Should*
- [ ] Clicking the CTA for a member role opens the same filtered catalogue view

**Story 5: Banner does not appear for non-RevOps or non-Pro accounts**
As a product team, we want the banner to be precisely targeted to avoid showing it to accounts where the signal does not apply.

**Acceptance criteria:**
- [ ] Banner does not appear for accounts where `vertical ≠ revops`
- [ ] Banner does not appear for accounts where `plan_tier ≠ pro`
- [ ] Banner does not appear for enterprise accounts even if they were previously pro and have `vertical = revops`

---

## Functional Requirements

### Trigger Logic
- **FR-01:** Banner renders when `plan_tier = pro` AND `vertical = revops` AND `integration_count IN (2, 3)` — *Must*
- **FR-02:** Banner is suppressed (and not re-shown) once `integration_count ≥ 4` — *Must*
- **FR-03:** Banner is hidden for viewer role; visible for admin and member roles — *Must*
- **FR-04:** Trigger conditions are evaluated on each page load, not cached at session start — *Must*

### UI / Surface
- **FR-05:** Banner appears in the primary dashboard, above the workflow list and below the top navigation — *Must*
- **FR-06:** Banner displays dynamic integration count pulled from account state — *Must*
- **FR-07:** Banner copy: "RevOps teams like yours typically connect 4–6 tools — you're at [X]. See what they connect next." — *Must*
- **FR-08:** Banner includes a single CTA button: "See popular integrations" — *Must*
- **FR-09:** Banner has no close/dismiss button — *Must*
- **FR-10:** CTA for member role users shows alternate copy: "See what to ask your admin to connect" — *Should*

### Integration Catalogue Filter
- **FR-11:** CTA opens the integration catalogue with a pre-applied filter showing the top 5 integrations by connection frequency among Pro RevOps accounts with `integration_count ≥ 4` — *Must*
- **FR-12:** Filtered catalogue view displays a visible label identifying the filter context ("Popular with RevOps teams") — *Should*
- **FR-13:** A "View all integrations" link is available within the filtered view — *Should*
- **FR-14:** The top-5 integration list is derived from platform data and must be refreshable without a code deploy (i.e. stored in config, not hardcoded) — *Should*

### Analytics Instrumentation
- **FR-15:** `banner_shown` event fires on each render — *Must*
- **FR-16:** `banner_cta_clicked` event fires on CTA click — *Must*
- **FR-17:** `integration_added` event fires when any integration is connected (existing event — confirm it includes `account_id` and timestamp) — *Must*
- **FR-18:** `milestone_reached` event fires when `integration_count` transitions to 4 for accounts in the target segment — *Must*

---

## Analytics Instrumentation

| Event name | When it fires | Key properties |
|---|---|---|
| `banner_shown` | Banner renders on dashboard | `account_id`, `integration_count`, `role`, `days_since_account_creation` |
| `banner_cta_clicked` | User clicks the CTA | `account_id`, `integration_count_at_click`, `role` |
| `integration_added` | Any integration successfully connected | `account_id`, `integration_name`, `integration_count_after`, `days_since_banner_first_shown` |
| `milestone_reached` | `integration_count` transitions to ≥ 4 for a target-segment account | `account_id`, `days_since_banner_first_shown`, `integrations_added_since_banner` |
| `upgraded_90d` | Account upgrades from Pro to Enterprise | `account_id`, `vertical`, `integration_count_at_upgrade` (existing event — confirm properties) |

---

## Open Questions

1. **How is `vertical` set?** Is it captured at signup, set by sales in the CRM, or inferred from usage? If it can be null or incorrect, how does that affect targeting accuracy?
   Owner: Sales / Data | Default: use whatever is stored in `accounts.vertical`; accept some targeting noise in v1

2. **What is the top-5 integration list for Pro RevOps 4+ accounts?** This needs to be computed from the feature_events data before build begins. Who owns the query and where does the output live?
   Owner: Data / Product | Default: block FR-11 until this is resolved — it is a Must requirement

3. **Does the integration catalogue support URL-based filter params today?** If not, this is an engineering dependency that may affect scope.
   Owner: Engineering | Default: if not supported, the CTA opens the full catalogue with a visible "RevOps popular" section surfaced at the top as an alternative

4. **What is the comparison baseline methodology?** Since n=62 is too small for a holdout, we are using the prior 90-day period for the same segment. Who owns producing that baseline report, and when?
   Owner: Data / Analytics | Default: pull `upgraded_90d` and `integration_count` change for Pro RevOps 2–3 accounts from the 90 days before launch date

5. **What happens when an account changes vertical?** If a RevOps account is re-categorised mid-intervention, should the banner be removed?
   Owner: Product | Default: banner follows the account attribute in real time; if vertical changes, banner disappears on next load
