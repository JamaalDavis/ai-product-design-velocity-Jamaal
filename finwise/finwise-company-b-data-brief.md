# FinWise — Company B Data Brief
**For:** Simon Hilton
**Purpose:** Build the Company B project folder for AI Product & Design Velocity (May 2026 cohort)
**Tool:** Claude Code via Claude Desktop App
**Format:** All files in Markdown (.md)

---

## What students need from this folder

Students run the EIM discovery machine on FinWise data. The data needs to surface real tensions, point toward genuine product opportunities, and leave the solutions for students to find. Do not telegraph answers. Provide direction and signal.

---

## Folder structure

```
finwise-company-b/
├── CLAUDE.md
├── company-context.md
├── customer-voice.md
├── product-usage-data.md
├── churn-and-retention.md
└── market-and-competitive-context.md
```

Five files total. Tight for token efficiency. Each file is one clean signal type.

---

## File 1: CLAUDE.md

This is the briefing packet Claude reads at the start of every session. Keep it short and directive.

**Contents:**
- What FinWise is (2 sentences)
- What the discovery machine is being asked to do (find EIM hypotheses from the data files)
- Which files are in the folder and what each contains
- Output format instruction: structure findings as EIM hypotheses (Evidence, Impact, Mechanism)
- Reminder: surface opportunities, not solutions

---

## File 2: company-context.md

**Purpose:** Give Claude the business frame so EIM hypotheses connect to real goals.

**Contents to include:**

Company overview: FinWise is a US-based personal finance app. Founded 2021, Austin TX. Series A ($14M, 2024). 62 employees. 380K registered users. Freemium model — free tier plus FinWise Pro at $9.99/month.

Strategic goals (include all four with metrics):
- Reach 1M registered users by end of 2026
- Improve month-2 retention from 31% to 50% by Q4 2026
- Increase free-to-Pro conversion from 4.2% to 8% by end of 2026
- Reduce "where did my money go" support tickets (currently 40% of all tickets)

Target user: Americans aged 25-40. Earns enough to care about money, not enough to afford a financial advisor. Financially anxious. Wants to do better but struggles with consistency.

Revenue context: Every 1% improvement in Pro conversion = approximately $380K ARR at current user volume.

---

## File 3: customer-voice.md

**Purpose:** Qualitative signal. Real friction, real language, real emotional texture. Students use this as Evidence in EIM.

**Format suggestion:** Mix of direct quotes and short summaries. Simon decides whether to present as synthetic user interviews, app store review excerpts, or support ticket summaries. All should feel authentic.

**Signal areas to cover — write data for each:**

### Day-to-day tracking friction
- Transactions landing in wrong categories
- Manual recategorisation eating time
- "Other" category becoming a dumping ground
- Confusion when synced accounts show duplicate or delayed transactions

### Spending habits and awareness gap
- Users know they overspend but don't know what to do with that information
- The app shows the number. It doesn't show what to do next.
- Comparison anxiety: "Am I spending more than other people like me?"
- No sense of whether their spending pattern is normal or alarming

### Savings and financial goals
- Users who set goals have dramatically higher retention — but goal adoption is only 12%
- Goals feel abstract. No feedback loop showing progress in real terms.
- "I set a goal and then forgot it existed"
- Milestone moments missing: no celebration when habits improve, no nudge when they slip

### Financial freedom and future vision
- Users want to know what financial freedom looks like for them specifically
- "How long until I could take 3 months off?" type questions — not answered anywhere in the app
- Retirement feels too far away to motivate. Near-term milestones (pay off card, save for trip) matter more.
- No personalised roadmap from current state to a meaningful goal

### Family and shared finances
- Couples and families managing money together have no shared view
- "My partner and I use different apps and argue about whose numbers are right"
- Parents tracking kids' spending have no tools within the app
- Shared budgets and household categories not supported
- Single-user model creates friction for the majority of users who share finances with someone

### Investment tracking
- Users with brokerage accounts, 401(k), crypto, or real estate want a single view
- FinWise shows bank and credit card data. Investment accounts are invisible.
- "My net worth calculation is completely wrong because it doesn't include my 401(k)"
- Users leave to check investments in separate apps, breaking the habit loop
- No connection between spending decisions and investment goals

### Emotional relationship with money
- Shame when the app shows overspending. Users avoid opening it.
- No positive reinforcement for good months
- Notification fatigue: alerts feel accusatory, not helpful
- "I know I should look but I'm scared of what I'll see"
- Users want encouragement, not just data

---

## File 4: product-usage-data.md

**Purpose:** Quantitative signal. Behavioural data that shows where the product is working and where it's breaking down. Students use this as Evidence and to size Impact in EIM.

**Format suggestion:** Mix of summary metrics, feature-level stats, and behavioural patterns. Simon decides on structure. Synthetic data is fine as long as it's internally consistent.

**Signal areas to cover — write data for each:**

### Activation and setup
- % of new users who complete account setup vs link a second account
- Drop-off point in onboarding flow
- Time-to-first-meaningful-action (first categorised transaction, first goal set)
- % of users who see the Analysis view in week one

### Feature adoption rates
- Savings goal feature: 12% adoption (core Pro feature)
- Category customisation: low adoption despite high support requests about categories
- Analysis and charts view: 55% exit within 20 seconds
- Notification engagement: open rate dropped from 41% to 18% over 6 months
- Manual transaction entry vs synced: ratio and completion rate

### Session behaviour
- Average sessions per week by user cohort (new, 30-day, 90-day)
- Average session length
- Most common entry point (which screen users land on)
- Most common exit point
- Features used in sessions that lead to return visits vs sessions that don't

### Pro feature usage
- Which Pro features are used most and least
- Pro users' session frequency vs free users
- Time from Pro upgrade to first Pro feature use
- Which feature drives the most Pro upgrades (the conversion trigger)

### Investment and net worth tracking
- % of users who attempt to manually enter investment data
- Search terms used inside the app that return no results (signals unmet needs)
- External links clicked from within the app (signals what users go elsewhere for)

---

## File 5: churn-and-retention.md

**Purpose:** Retention and churn signal. The most business-critical data in the folder. Students use this to size Impact in EIM.

**Format suggestion:** Cohort-style summary with key correlations. Simon decides on structure.

**Signal areas to cover — write data for each:**

### Retention overview
- Month-2 retention: 31% (board target: 50% by Q4 2026)
- Month-3 retention for users who survived month 2
- Average time from install to deletion: 23 days
- Retention curve shape: where the steepest drop-off occurs

### Churn correlations (the signal-rich area)
- Users who never set a savings goal: 3.4x higher churn vs those who did
- Users who link only one account vs two or more accounts
- Users who customise at least one category vs those who don't
- Users who open the app 3+ times in week one vs those who open it once
- Users who receive a "you're under budget" moment in week two vs those who don't
- Notification engagement: churned users' notification patterns in final 2 weeks before deletion

### Pro cancellation reasons
- Reason 1: "I wasn't using it enough to justify the cost"
- Reason 2: "It didn't help me actually change anything"
- Reason 3 (add a third — Simon's call on what fits the data story)
- Time from Pro upgrade to cancellation: distribution
- % of cancellations who downgrade to free vs delete entirely

### Re-engagement data
- % of churned users who reinstall within 90 days
- What event typically triggers reinstallation (new year, tax season, financial stress event)
- Retention rate of reinstalled users vs first-time users

### Cohort signals to include
- Mint refugee cohort (acquired Q1 2024): how do they retain vs organic installs?
- Users acquired via paid vs organic: retention difference
- iOS vs Android retention difference (if meaningful)

---

## File 6 (optional): market-and-competitive-context.md

**Purpose:** External context for students who want to situate their EIM hypothesis in the market. Keeps the discovery machine grounded in competitive reality.

**Contents:**
- Mint shutdown and the gap it left (22M displaced users)
- YNAB positioning and price point ($109/year, methodology-heavy)
- Copilot positioning (iOS only, design-led, $13/month)
- Credit Karma's conflicted model
- Banks' native app limitations (single institution, no cross-account intelligence)
- The unowned space: emotional layer of money management, shared finances, investment aggregation
- Macro context: financial anxiety among 25-40 Americans, cost of living pressure, distrust of financial institutions

---

## EIM direction for instructors (not shown to students)

The data above surfaces four to five genuine opportunity spaces. Students should discover these through the machine, not be told about them. The spaces the data points toward:

1. The habit loop is broken at week two. Something happens (or doesn't happen) between day 7 and day 14 that determines whether a user stays.
2. Shared finances is completely unaddressed. A large percentage of the target demographic manages money with a partner.
3. Investment data is invisible. Users with any investment accounts have an incomplete financial picture, which undermines trust in the app's core promise.
4. The emotional layer is missing. The app is a mirror that shows bad news. It doesn't coach, encourage, or reduce shame.
5. Goal adoption is 12% despite being the single strongest predictor of retention. Something about the goal-setting experience is broken.

None of these should appear in the data files as named opportunities. They should emerge from the signal.

---

## Notes for Simon

- All files in Markdown (.md)
- Keep each file under 800 words for token efficiency
- Synthetic data is fine — internal consistency matters more than statistical precision
- Customer quotes should feel human, not like survey responses
- Numbers should be directionally true to a real Series A fintech at this stage
- Leave whitespace in the data — gaps and unanswered questions are features, not bugs
- The CLAUDE.md should reference all four data files by name so Claude loads context correctly
