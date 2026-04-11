---
name: eim-product-analyst
description: >
  Use this skill whenever the user wants to analyse product data, customer data, or usage data
  to generate product hypotheses, identify churn signals, find expansion opportunities, or
  understand what's driving retention or growth. Triggers include: "analyse my data", "find
  signals in this data", "what's driving churn", "where should we focus", "generate hypotheses",
  "what does the data say", "find expansion opportunities", "analyse these CSVs", "run EIM on
  this", or any time the user drops data files and wants product insights from them. Also use
  when the user wants to apply the EIM (Evidence → Impact → Mechanism) framework to any dataset.
  Do not wait for the user to say "EIM" explicitly — if they have data and want product insights,
  use this skill.
---

# EIM Product Analyst

A skill for turning raw product, customer, or usage data into structured product hypotheses
using the EIM (Evidence → Impact → Mechanism) framework.

The output is not a data analysis report. It is a set of actionable hypotheses — each one
grounded in evidence from the data, quantified by business impact, and paired with a specific
intervention the product team can act on.

---

## Step 0 — Orient before touching data

Before writing any code, do these three things in order:

**1. Discover what files are present**

```bash
ls -lh *.csv *.json *.parquet *.xlsx *.tsv 2>/dev/null || echo "No data files found"
```

Do not assume file names, column names, or table structure. Discover them.

**2. Look for a product context document**

Search for any file that looks like a product description, context statement, or README:

```bash
ls *.md *.txt 2>/dev/null
```

If one exists, read it in full before touching the data. It tells you how to interpret signals
as product problems rather than data problems. If none exists, proceed — but note to the user
that hypotheses will be less specific without product context.

**3. Look for a data dictionary**

Search for any file named `dictionary`, `schema`, `data_dict`, or similar. If found, read it.
It tells you what columns mean and what values are valid. Without it, infer from column names
and value distributions — but be explicit about your assumptions.

---

## Step 1 — Understand the data shape

For each file discovered, run a quick structural inspection:

```python
import pandas as pd
import glob

files = glob.glob("*.csv") + glob.glob("*.tsv") + glob.glob("*.json")
for f in files:
    df = pd.read_csv(f) if f.endswith(('.csv', '.tsv')) else pd.read_json(f)
    print(f"\n── {f} ──────────────────────")
    print(f"Rows: {len(df):,}  |  Cols: {len(df.columns)}")
    print(df.dtypes.to_string())
    print(df.head(3).to_string())
```

**Ask yourself before proceeding:**
- What is the grain of each table? (one row = one what?)
- Which columns look like outcome labels? (churned, converted, cancelled, upgraded, etc.)
- Which columns look like behavioural signals? (counts, dates, flags, categories)
- How do the tables join? (look for shared ID columns)
- What is the time range of the data?

Do not generate hypotheses yet. Just understand the shape.

---

## Step 2 — Identify outcome variables

Find the columns that represent business outcomes. These become the dependent variables
for all analysis. Common patterns:

```python
# Look for boolean/binary columns that suggest outcomes
for col in df.columns:
    if df[col].dtype == bool or df[col].nunique() <= 2:
        print(col, df[col].value_counts().to_dict())

# Look for date columns that imply events (churn_date, cancelled_at, upgraded_at)
date_cols = [c for c in df.columns if any(x in c.lower() for x in
             ['churn', 'cancel', 'upgrade', 'convert', 'renew', 'expire'])]
```

If no explicit outcome column exists, look for one that can be constructed:
- Is there a `status` column with values like `active / churned / cancelled`?
- Is there a date column where null = still active, not-null = churned?
- Can you join to another table to get outcomes?

Be explicit with the user if outcomes are ambiguous or need constructing.

---

## Step 3 — Segment before concluding

**This is the most important analytical discipline.**

Aggregate patterns lie. A 20% churn rate across all accounts is meaningless until you know
whether it is 8% in one segment and 45% in another.

Always slice by every available categorical dimension before forming a hypothesis:

```python
# Template: churn rate by segment
for col in categorical_cols:
    result = df.groupby(col)['outcome_col'].agg(['mean', 'count'])
    result.columns = ['outcome_rate', 'n']
    result = result[result['n'] >= 20]   # minimum sample filter
    result = result.sort_values('outcome_rate', ascending=False)
    print(f"\n── by {col} ──")
    print(result.to_string())
```

Minimum sample sizes before trusting a segment finding: **n ≥ 30** for rates, **n ≥ 50** for
multi-variable interaction effects.

Flag any segment effect that shows **>1.5x difference** from the population base rate.
These are your candidate signals.

---

## Step 4 — Test interaction effects

The strongest signals are usually **intersections**, not single-variable findings.

For each promising single-variable signal, test whether it interacts with other dimensions:

```python
# Template: two-variable interaction
result = df.groupby(['segment_a', 'segment_b'])['outcome_col'].agg(['mean', 'count'])
result.columns = ['outcome_rate', 'n']
result = result[result['n'] >= 20].sort_values('outcome_rate', ascending=False)
```

Look for interactions where:
- The effect is **stronger in one segment than another** (Signal #1 pattern)
- The effect **disappears when you add a third variable** (confound — be careful)
- Two weak signals **compound** into a strong combined signal

---

## Step 5 — Validate against red herrings

High usage ≠ high value. Before including a signal in a hypothesis, validate it:

```python
# Template: does this behavioural signal actually predict the outcome?
signal_heavy = df[df['feature_usage'] >= df['feature_usage'].quantile(0.75)]
signal_light = df[df['feature_usage'] <= df['feature_usage'].quantile(0.25)]

print("Heavy users outcome rate:", signal_heavy['outcome_col'].mean())
print("Light users outcome rate:", signal_light['outcome_col'].mean())
print("Ratio:", signal_heavy['outcome_col'].mean() / signal_light['outcome_col'].mean())
```

A signal is only worth including in a hypothesis if:
1. The outcome rate difference is **>1.5x**
2. The sample size on both sides is **n ≥ 30**
3. The effect **holds when you control for one other variable** (not just raw correlation)

---

## Step 6 — Construct EIM hypotheses

For each validated signal, write a structured EIM hypothesis. Each one has exactly three parts.

Read `references/eim-format.md` for the full format spec and worked examples.

**The three parts:**

**E — Evidence**
What does the data actually show? Be specific. Include the metric, the segment, the magnitude,
and the sample size. No hand-waving.

*Bad:* "Users who don't complete onboarding churn more."
*Good:* "Accounts in the small (20–50 employee) segment that skipped the `connect_second_integration`
onboarding step churned at 40.7% within 90 days, vs 11.1% for those who completed it (n=412 / n=289,
3.7x difference)."

**I — Impact**
What is the business opportunity if this is addressed? Quantify it. Use the data you have —
account count × churn rate × contract value is usually enough for a rough estimate.

*Bad:* "Reducing churn here could be significant."
*Good:* "412 at-risk small accounts × 40.7% churn rate × average ACV of $3,200 = ~$536K ARR at
risk annually. Even a 25% reduction in churn for this segment = ~$134K ARR retained."

**M — Mechanism**
What specific intervention in the product (or adjacent to it) would address this? Name the
feature, the surface, the trigger, and the user. Not a strategy — a thing someone could build.

*Bad:* "Improve the onboarding experience for small accounts."
*Good:* "Trigger an in-app prompt on day 3 for accounts with <2 integrations connected, surfaced
to the admin role only, offering a guided 'connect your second tool' wizard with pre-built templates
for the top 5 integration pairs. Test with a 50/50 holdout."

---

## Step 7 — Output format

Produce a clean markdown output with this structure:

```
# EIM Hypothesis Report
**Dataset:** [file names used]
**Analysis date:** [today]
**Outcome variable:** [what you're predicting]

---

## Hypothesis 1: [Short descriptive title]

**Evidence**
[2–4 sentences. Specific numbers, segments, sample sizes.]

**Impact**
[2–3 sentences. Quantified ARR / revenue / account count at stake.]

**Mechanism**
[2–4 sentences. Specific intervention. Surface, trigger, user, test approach.]

---

## Hypothesis 2: [Title]
...

---

## What We Ruled Out
[Brief list of signals that looked promising but didn't hold up on validation.
Explain why each was ruled out. This teaches the reader what not to act on.]

---

## Recommended Next Steps
[Rank the hypotheses by confidence × impact. Suggest which to run first and why.]
```

Aim for **3–5 hypotheses** per analysis. More than 5 dilutes focus. Fewer than 3 suggests
the analysis wasn't deep enough.

---

## Step 8 — Sense-check before delivering

Before outputting, ask yourself:

- [ ] Is every Evidence claim traceable to a specific query I ran?
- [ ] Does every Impact estimate show its working (the multiplication)?
- [ ] Is every Mechanism specific enough that a PM could write a brief from it?
- [ ] Did I validate each signal against the outcome variable (not just assume correlation)?
- [ ] Did I segment before concluding (no aggregate-only findings)?
- [ ] Did I include a "What We Ruled Out" section?

If any box is unchecked, go back.

---

## Common Pitfalls to Avoid

**Describing the data instead of interpreting it**
The output is hypotheses, not a data summary. "40% of accounts are on the starter tier" is
not a hypothesis. "Starter accounts in the finance vertical upgrade at 3x the rate of other
verticals when they hit a feature block" is a hypothesis.

**Aggregate findings without segment validation**
Always slice. The most important signal in the dataset may only exist in one segment.

**Missing the mechanism**
"Improve onboarding" is not a mechanism. A mechanism names a surface, a trigger, a user role,
and a testable intervention. Push yourself to be specific.

**Ignoring sample size**
A 60% churn rate in a segment of n=12 is noise. Always show n. Always apply the n≥30 filter.

**Confusing activity with value**
High-frequency usage of a feature that has no correlation with retention is a red herring.
Validate every usage signal against an outcome before including it.
