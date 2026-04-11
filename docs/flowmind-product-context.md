# Flowmind — Product Context Statement

> This document is provided to AI models analysing Flowmind product data. It gives the model the product context needed to interpret data signals as product problems, not just data problems. Read this before analysing any Flowmind dataset.

---

## What Flowmind Is

Flowmind is a workflow automation tool built for operations teams inside mid-market companies. It lets non-technical users build, manage, and monitor multi-step workflows that route approvals, sync data between tools, trigger notifications, and generate scheduled reports — without writing code.

**The core job-to-be-done:** eliminate the manual coordination work that lives in email threads, Slack messages, and spreadsheets between the tools a business already uses.

---

## Who It's For

**Primary user:** an ops manager, team lead, or department head (Finance, HR, RevOps, Customer Success) at a company between 20–500 employees. They are not a developer. They understand process deeply but rely on an IT or RevOps colleague to connect tools.

**Typical buying trigger:** a failed implementation of something more complex (Workato, Zapier Enterprise) or outgrowing a simpler point solution.

---

## The Four Core Workflow Types

| Workflow Type | What it does | Who builds it |
|---|---|---|
| `approval_routing` | Routes requests (expenses, contracts, leave) through a defined approver chain with escalation logic | Ops, Finance, HR |
| `data_sync` | Keeps records consistent across two or more connected tools (CRM ↔ billing, HRIS ↔ directory) | RevOps, IT |
| `notification_trigger` | Fires alerts into Slack, email, or SMS when a condition is met in a connected tool | Any team lead |
| `scheduled_report` | Pulls data from connected sources and delivers a formatted summary on a schedule | Managers, Analysts |

---

## Pricing Tiers

| Tier | Seats | Integrations | Workflow runs/month | Key gates |
|---|---|---|---|---|
| `starter` | Up to 3 | Up to 2 | 1,000 | No approval chains, no error retry |
| `pro` | Up to 15 | Up to 10 | 25,000 | Full feature access |
| `enterprise` | Unlimited | Unlimited | Unlimited | SSO, audit logs, SLAs |

A `blocked` event in the feature_events table means a user attempted to use a feature gated above their current plan tier.

---

## What a Healthy, Retained Account Looks Like

A retained account at month 3+ typically has **all** of the following:

- Running at least **2 different workflow types**
- Connected **3 or more integrations**
- **Multiple active members** (not just the admin)
- A workflow error rate below **5%**

Accounts that built only `scheduled_report` workflows, with a single integration, used only by the account admin, are the **highest churn risk** regardless of plan tier.

---

## What Good Onboarding Looks Like

Flowmind's onboarding has 5 steps. Accounts that complete all 5 within 14 days activate at 3x the rate of those who don't.

| Step | Description |
|---|---|
| `create_first_workflow` | User creates their first workflow in the builder |
| `connect_first_integration` | User connects their first external tool |
| `connect_second_integration` | User connects a second external tool |
| `invite_team_member` | Admin invites at least one other user |
| `run_first_workflow` | A workflow is executed successfully for the first time |

The most commonly skipped step is `connect_second_integration`. Skipping it is the **single strongest predictor of 90-day churn**.

---

## Known Friction Points

- **First workflow errors are high-stakes.** Users who hit an error on their first workflow and do not resolve it within 48 hours rarely build a second. This is a critical drop-off point.
- **`data_sync` workflows have the highest setup complexity** but produce the highest long-term retention of any workflow type. Users who succeed with `data_sync` almost never churn.
- **Billing support tickets in month 1 are a strong churn signal.** Accounts that raise a billing-related ticket in their first month churn at 2x the rate of those who raise a product or integration ticket. This reflects misaligned expectations at point of sale, not product failure.
- **`integration_count` is the strongest single retention predictor.** Each additional connected integration increases switching cost significantly. Accounts with 3+ integrations churn at a fraction of the rate of single-integration accounts.

---

## How to Use This Document

When analysing Flowmind data, use this context to:

1. **Interpret behavioural signals as product signals** — don't just describe what the data shows, explain what it means for the product and the user's job-to-be-done
2. **Propose interventions that are specific** — reference actual features, workflow types, onboarding steps, and plan tiers when suggesting mechanisms
3. **Segment before concluding** — aggregate patterns in Flowmind data frequently mask segment-specific effects. Always check whether a signal holds across verticals, company sizes, and acquisition channels before drawing conclusions
4. **Distinguish engagement from value** — high feature usage does not always indicate high value. Look for usage patterns that correlate with retention and expansion outcomes, not just activity volume
