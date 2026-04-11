---
title: Setup Analysis Environment
description: Set up Python environment for data analysis (run once)
---

## Welcome

**Display this message to the user before proceeding with any setup steps:**

---

**Welcome to AI-Powered PM**

This demo highlights how Cursor can be used to **speed up discovery cycles** — going from raw data to actionable insights, PRDs, and prototypes in a fraction of the usual time.

**Benefits:**
- Accurate, reproducible data analysis (Python + pandas)
- PRDs grounded in real findings, not assumptions
- Design mockups generated from requirements
- Backlog items (Jira) created automatically

**About this demo:**
This demo assumes a known problem and uses a fixed dataset — **churn of FitBody gym subscribers** (`data/fitbody_churn.csv`). The workflow identifies which features drive retention and recommends interventions.

The master prompts can be adapted for other problems. Ask your agent to help you customize them for your use case.

---

**What happens next:**
I'll now set up a Python environment so you can run a fresh analysis on the FitBody churn data. This takes about 30 seconds and only needs to happen once.

---

**After displaying the welcome message above, proceed to the setup steps below.**

## Task

Set up the Python virtual environment for data analysis. This only needs to be run **once** after cloning the repository.

## Prerequisites Check

Before starting, confirm:
- Python 3.10+ is installed and available (try `python3 --version` or `python --version`)
- You have the AI-Powered PM repository open in Cursor

If Python is not found, the user needs to install Python first (no admin required for user-level Python installations).

## Setup Steps

### Step 1: Create Virtual Environment

Check if a `venv/` folder already exists in the project root.

**If venv/ does NOT exist:**

- On Mac/Linux:
  ```bash
  python3 -m venv venv
  ```
- On Windows:
  ```bash
  python -m venv venv
  ```

**If venv/ already exists:** Skip to Step 2.

### Step 2: Install Dependencies

Install the required packages using pip from the venv:

- On Mac/Linux:
  ```bash
  ./venv/bin/pip install -r requirements.txt
  ```
- On Windows:
  ```bash
  .\venv\Scripts\pip install -r requirements.txt
  ```

This installs: pandas, matplotlib, seaborn, numpy, openpyxl (for Excel support).

### Step 3: Verify Installation

Run a quick check to confirm packages are installed:

- On Mac/Linux:
  ```bash
  ./venv/bin/python -c "import pandas; import matplotlib; print('Setup successful!')"
  ```
- On Windows:
  ```bash
  .\venv\Scripts\python -c "import pandas; import matplotlib; print('Setup successful!')"
  ```

### Step 4: Confirm to User

After successful setup, display this message:

```
✅ Setup complete!

Your analysis environment is ready. The venv/ folder has been created with all required packages.

---

## Available Slash Commands

### /aipoweredpm — Full Workflow (Recommended)
Runs the complete AI-Powered PM workflow from data analysis through to Jira cards.

**Usage:** `/aipoweredpm` or `/aipoweredpm @path/to/external-analysis.md`

**Options when running:**
- **Analysis method:** Choose between using the existing script (fast, consistent) or AI-generated analysis (demonstrates AI capability)
- **External analysis:** Optionally provide your own analysis file to validate instead of generating fresh

**Steps included:**
1. Data analysis (churn patterns, retention signals)
2. Code & design context review
3. PM validation checkpoint
4. PRD creation (saved to output/)
5. Design mockups (HTML)
6. Figma Make prompt generation
7. Jira Epic & Stories (optional)

---

### /analysedata — Data Analysis Only
Runs just the data analysis step without the full workflow.

**Usage:** `/analysedata`

**Options when running:**
- **Option A:** Use existing script — Fast, consistent results using `data/analyze_churn.py`
- **Option B:** AI-generated analysis — Agent writes analysis code from scratch

**Outputs:**
- `data/CHURN_ANALYSIS_SUMMARY.md` — Executive summary with tables
- `data/churn_analysis.png` — Visualization dashboard

---

### /publishprd — Publish PRD to Confluence
Publishes a completed PRD to Confluence (requires Atlassian MCP configured).

**Usage:** `/publishprd @output/your-prd.md https://confluence-parent-page-url`

**Required arguments:**
1. PRD file path (e.g., `@output/invoice-engagement-prd.md`)
2. Confluence parent page URL (where the PRD will be published as a child page)

---

### /setup — This Command
Sets up the Python environment (you just ran this).

---

## Quick Start

Ready to go? Try: `/aipoweredpm`

This will guide you through the full workflow with checkpoints at each stage.
```

## Error Handling

**If Python is not found:**
```
❌ Python not found.

Please install Python 3.10 or later:
- Mac: Download from python.org or use Homebrew (brew install python)
- Windows: Download from python.org (user install doesn't require admin)

After installing, run /setup again.
```

**If pip install fails:**
```
❌ Package installation failed.

Try these steps:
1. Delete the venv/ folder: rm -rf venv (Mac/Linux) or rmdir /s venv (Windows)
2. Run /setup again

If it still fails, check your internet connection and try again.
```

## Notes

- This setup does **not** require admin rights — venv and pip install are local to this project folder.
- The `venv/` folder is excluded from git via `.gitignore`.
- Each user creates their own venv; it's not shared via the repository.
- On Windows, you may see "Scripts" instead of "bin" in paths — this is normal.
