---
title: Analyse Data
description: Run churn analysis on subscriber data
---

## Data Analysis

**Use this if:** You need to generate fresh analysis from the subscriber data.

> **Prerequisites:** Run `/setup` first if you haven't already. This creates the Python environment needed for analysis.

---

> **First, ask the user:**
> "How would you like to perform the data analysis?
> - **Option A: Use existing script** — Run `data/analyze_churn.py` for fast, consistent results
> - **Option B: AI-generated analysis** — I'll write the analysis code from scratch (demonstrates full AI capability)
> 
> Which do you prefer?"

---

### Option A: Use Existing Script

#### Step 1: Verify Environment

Check that the Python environment exists:
- Look for `venv/` folder in the project root
- If it doesn't exist, tell the user: "Please run `/setup` first to create the analysis environment."

#### Step 2: Run the Analysis Script

Execute the analysis script using the project's Python environment:

**Mac/Linux:**
```bash
./venv/bin/python data/analyze_churn.py
```

**Windows:**
```bash
.\venv\Scripts\python data/analyze_churn.py
```

#### Step 3: Review Outputs

After the script completes successfully, read and summarize the outputs:

1. **Read the summary:** `data/CHURN_ANALYSIS_SUMMARY.md`
2. **Confirm the chart exists:** `data/churn_analysis.png`

---

### Option B: AI-Generated Analysis

#### Step 1: Verify Environment

Check that the Python environment exists:
- Look for `venv/` folder in the project root
- If it doesn't exist, tell the user: "Please run `/setup` first to create the analysis environment."

#### Step 2: Load and Explore the Data

Read `data/fitbody_churn.csv` and:
1. Understand the data structure (columns, types, sample values)
2. Identify the subscription status column
3. Examine unique status values to understand what indicates churn vs retention
4. Do NOT hardcode churn definitions — discover them from the data

#### Step 3: Write and Run Analysis

Create a Python script that:
1. Calculates overall churn rate
2. Analyzes feature adoption (e.g. WORKOUT_PLAN, MEAL_PLAN, INVITED_PERSONAL_TRAINER in the demo file)
3. Compares churn rates between users who adopted features vs those who didn't
4. Identifies "zero engagement" users (no features used)
5. Generates a visualization (matplotlib/seaborn)
6. Saves outputs to `data/CHURN_ANALYSIS_SUMMARY.md` and `data/churn_analysis.png`

---

### Present Findings (Both Options)

Present the key findings to the user:
- Overall churn rate and total users
- Zero engagement statistics (how many users, their churn rate vs engaged users)
- Top retention signals (features that reduce churn most)
- The "magic number" of features for retention
- Recommended interventions

### Data Source

- **Input:** `data/fitbody_churn.csv`
- **Script (Option A):** `data/analyze_churn.py`
- **Outputs:**
  - `data/CHURN_ANALYSIS_SUMMARY.md` - Full analysis report with tables
  - `data/churn_analysis.png` - Visualization dashboard

### Error Handling

**If venv/ doesn't exist:**
```
The analysis environment hasn't been set up yet.
Please run /setup first, then try /analysedata again.
```

**If the script fails:**
- Show the error message
- Suggest checking that requirements are installed: `./venv/bin/pip install -r requirements.txt`
