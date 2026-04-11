# Clearpath — Product Context Statement

> This document is provided to AI models analysing Clearpath product data. It gives the model the product context needed to interpret data signals as product problems, not just data problems. Read this before analysing any Clearpath dataset.

---

## What Clearpath Is

Clearpath is a compliance training and certification management platform built for HR and legal teams at mid-market companies in regulated industries. It lets non-technical HR managers build training courses, assign them to employees, automate completion reminders, track certification expiry, and generate audit-ready compliance reports — without relying on IT.

**The core job-to-be-done:** ensure every employee has completed required compliance training on time, so the company can demonstrate compliance to regulators, auditors, and insurers.

---

## Who It's For

**Primary user:** an HR manager, compliance officer, or legal operations lead at a company between 50–2,000 employees operating in a regulated industry (financial services, healthcare, legal, construction, professional services). They are not a developer. They understand policy and process deeply but often lack technical support.

**Typical buying trigger:** a failed compliance audit, a regulatory fine, or the departure of a compliance-focused employee who previously managed training manually in spreadsheets.

---

## The Four Core Training Types

| Training Type | What it does | Who manages it |
|---|---|---|
| `compliance` | Mandatory regulatory training (AML, WHS, privacy, financial services obligations) | Compliance officer, Legal |
| `onboarding` | Role-specific training for new employees covering policies, systems, and culture | HR |
| `safety` | Workplace health and safety training including incident reporting procedures | HR, Operations |
| `skills` | Optional professional development and upskilling courses | HR, Team leads |

---

## Pricing Tiers

| Tier | Employees tracked | Course library | Key gates |
|---|---|---|---|
| `starter` | Up to 100 | Up to 10 courses | No automation, no audit report export, no HRIS sync |
| `pro` | Up to 1,000 | Unlimited | Full automation, PDF audit reports, HRIS sync (1 system) |
| `enterprise` | Unlimited | Unlimited + custom branding | SSO, multi-HRIS, API access, SLA |

A `blocked` event in the feature_events table means a user attempted to use a feature gated above their current plan tier.

---

## What a Healthy, Retained Account Looks Like

A retained account at month 3+ typically has **all** of the following:

- Running at least **2 different training types** (not just one mandatory compliance course)
- Connected **HRIS integration** (keeps employee lists in sync automatically)
- **Course completion rate above 80%** (courses_completed / courses_assigned in monthly_snapshots)
- **Multiple active managers** (not just the admin)

Accounts that only run `compliance` training, have no HRIS sync, and are managed solely by one admin are the **highest churn risk** regardless of plan tier. These accounts often churn after their first audit cycle ends.

---

## What Good Onboarding Looks Like

Clearpath's onboarding has 5 steps. Accounts that complete all 5 within 21 days activate at 4x the rate of those who don't.

| Step | Description |
|---|---|
| `publish_first_course` | Admin publishes their first training course |
| `assign_first_team` | Admin assigns a course to at least one team or department |
| `configure_reminders` | Admin sets up at least one automated reminder rule |
| `sync_employee_directory` | Account connects to an HRIS or imports an employee CSV |
| `generate_first_report` | Admin generates a compliance completion report |

The most commonly skipped step is `sync_employee_directory`. Skipping it is the **single strongest predictor of 90-day churn** — without a synced directory, employee lists go stale and completion data becomes unreliable, causing managers to lose trust in the platform.

---

## Known Friction Points

- **Audit season creates false retention.** Accounts spike in usage in the 4–6 weeks before a known audit date, then drop off sharply afterwards. Month-over-month trends must account for this cycle to avoid misreading decay as normal.
- **`compliance` training has the highest setup complexity** (regulatory requirements differ by jurisdiction) but produces the highest long-term retention of any training type. Accounts that build and run `compliance` courses rarely churn.
- **Billing support tickets before an audit are a strong churn signal.** Accounts that open a billing ticket within 30 days of their account creation date churn at 2.5x the rate of those who raise product or integration tickets. This reflects plan misalignment at point of sale — the buyer expected a price they didn't get.
- **HRIS sync is the strongest single retention predictor.** Accounts with a connected HRIS integration have dramatically lower churn regardless of other usage patterns. Each additional integrated system (HRIS, SSO, Slack notifications) increases switching cost significantly.
- **Overdue certifications predict escalation or churn.** Accounts with more than 20% of certifications overdue in two consecutive months either escalate their engagement (panic before an audit) or quietly churn. The direction depends on whether they've completed onboarding.

---

## How to Use This Document

When analysing Clearpath data, use this context to:

1. **Interpret behavioural signals as product signals** — don't just describe what the data shows, explain what it means for the product and the compliance manager's job-to-be-done
2. **Propose interventions that are specific** — reference actual features, training types, onboarding steps, and plan tiers when suggesting mechanisms
3. **Segment before concluding** — aggregate patterns in Clearpath data frequently mask segment-specific effects. Always check whether a signal holds across verticals, company sizes, and acquisition channels before drawing conclusions
4. **Account for audit seasonality** — month-over-month drops in usage are not always churn signals; check whether the account recently completed an audit cycle before diagnosing decay
5. **Distinguish engagement from compliance outcomes** — high login activity does not always indicate successful compliance. Look for course completion rates and certification currency as the true value indicators
