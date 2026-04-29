# AI Product & Design Velocity — Course Project

This is the working repo for the AI Product & Design Velocity course. It contains two instructor demo companies (Mealtime and FinWise), a set of reusable skills, and the folder structure students follow throughout the course.

## What this repo contains

| Folder | What it is |
|---|---|
| `mealtime/` | Company A demo (instructor) — recipe app. Full dataset: accounts, users, feature events, monthly snapshots, onboarding. EIM report, PRD, and prototype included. |
| `finwise/` | Company A demo (instructor) — personal finance app. Full dataset: same structure as Mealtime. Input files only — EIM report and PRD generated live in class. |
| `skills/` | Six reusable workflow skills. Install globally via: ask Claude Code to install all skills from the `/skills/` folder. |
| `README.md` | Full skills documentation and workflow guide. Come back to this any time you need to understand what a skill does or how the workflow connects. |

## The workflow

```
/eim-context → /eim-product-analyst → PAUSE (you) → /hypothesis-to-prd → PAUSE (you) → /build-html-prototype or /figma-prototype-builder
```

The pauses are where you do the work. The skills handle the process. Your judgment about which signals matter and which direction to take — that's yours.

## How to work in this project

- When Claude generates a file, check the VS Code file tree (left sidebar). Five seconds. Confirm it landed where you expect.
- If output looks wrong, check the spec before checking the build. The question is always: does the PRD need updating, or does the build need correcting?
- Skills are installed globally — they work in any project, not just this one.

## Rules

- Do not modify files in `mealtime/data/` or `finwise/data/` — these are the source datasets. Re-run `generate_data.py` if you need a fresh copy.
- Do not modify skill files in `skills/` directly — the installed copies in `~/.claude/skills/` are what Claude Code runs. Edit the source here and reinstall to update.
- Ask before making changes that affect multiple files at once.
