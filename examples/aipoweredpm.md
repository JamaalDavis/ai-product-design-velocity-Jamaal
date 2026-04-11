---
title: AI-Powered PM: End to End Prompt (Ready to Run)
authors: 
  - Thiago De Siqueira: thiago.desiqueira@mybo.com
  - Simon Coker: simon.coker@myob.com
---

> **Purpose:** Ready to run prompts to run through the full AI-Powered PM workflow from data analysis to Prototyping and Jira cards
>
> **Data Source:** `data/fitbody_churn.csv`
>
> **Last Updated:** January 2026

---

## Table of Contents

0. [Step 0: Check for arguments](#step-0-check-arguments)
1. [Step 1: Generate Analysis](#step-1-generate-analysis)
2. [Step 2: Design Context](#step-2-design-context)
3. [Step 3: PRD Creation](#step-3-prd-creation)
4. [Step 4: Design Generation](#step-4-design-generation)
5. [Step 5: Jira Card Creation (Optional)](#step-5-jira-card-creation-optional)
6. [Resources](#resources)
7. [Critical Instructions for Tool Operations](#critical-instructions-for-tool-operations)

---

## Step 0: Check Arguments

- This prompt requires one argument:
- External analysis: link to file containing the external analysis 

### Help Me

```
#Help
This command requires an external analysis file.

##Usage:
/aipoweredpm @link to analysis file

##Example:
/aipoweredpm @data/analysis.md
Please provide a link to your external analysis file to proceed with the AI-Powered PM workflow.
```

> 🛑 STOP HERE  
**Before proceeding, if arguments are not provided show user help me:**

---

## Step 1: Generate Analysis

**Use this if:** You have external analysis to validate, or need to generate fresh analysis from the data.

> **Prerequisites:** Run `/setup` first if you haven't already. This creates the Python environment needed for analysis.

### Prompt 1.1: Initial Data Analysis / Validate External Analysis

> **First, ask the user:**
> "How would you like to perform the data analysis?
> - **Option A: Use existing script** — Run `data/analyze_churn.py` for fast, consistent results
> - **Option B: AI-generated analysis** — I'll write the analysis code from scratch (demonstrates full AI capability)
> - **Option C: Validate external analysis** — If you've provided an analysis file, I'll validate it
> 
> Which do you prefer?"

---

#### Option A: Use Existing Script

```
## Task
Run the churn analysis script to generate accurate statistics and visualizations.

### Step 1: Verify Environment
Check that the Python environment exists:
- Look for `venv/` folder in the project root
- If it doesn't exist, tell the user to run `/setup` first

### Step 2: Run the Analysis Script
Execute the analysis script using the project's Python environment:

**Mac/Linux:**
./venv/bin/python data/analyze_churn.py

**Windows:**
.\venv\Scripts\python data/analyze_churn.py

### Step 3: Review Outputs
After the script completes, read and summarize:
- `data/CHURN_ANALYSIS_SUMMARY.md` - Full analysis report
- `data/churn_analysis.png` - Visualization dashboard

## Data Source
- **File:** data/fitbody_churn.csv
- **Analysis script:** data/analyze_churn.py
```

---

#### Option B: AI-Generated Analysis

```
## Task
Analyze the Solo subscriber data to identify churn patterns and retention opportunities. Write your own analysis — do not use the existing script.

### Step 1: Verify Environment
Check that the Python environment exists:
- Look for `venv/` folder in the project root
- If it doesn't exist, tell the user to run `/setup` first

### Step 2: Load and Explore the Data
Read `data/fitbody_churn.csv` and:
1. Understand the data structure (columns, types, sample values)
2. Identify the subscription status column
3. Examine unique status values to understand what indicates churn vs retention
4. Do NOT hardcode churn definitions — discover them from the data

### Step 3: Write and Run Analysis
Create a Python script that:
1. Calculates overall churn rate
2. Analyzes feature adoption (columns like CREATED_INVOICE, CONNECTED_BANK_FEED, etc.)
3. Compares churn rates between users who adopted features vs those who didn't
4. Identifies "zero engagement" users (no features used)
5. Generates a visualization (matplotlib/seaborn)
6. Saves outputs to `data/CHURN_ANALYSIS_SUMMARY.md` and `data/churn_analysis.png`

## Data Source
- **File:** data/fitbody_churn.csv
```

---

#### Option C: Validate External Analysis

```
## Task
Validate user-provided analysis against the source data.

If the user provided an external analysis file (@data/analysis.md or similar):
1. Read the provided analysis
2. Validate key statistics against `data/fitbody_churn.csv` if available
3. Summarize key findings and flag any concerns

## Data Source
- **File:** data/fitbody_churn.csv
```

---

**After completing any option, present:**
1. Overall churn rate and total users
2. Zero engagement statistics
3. Top retention signals (features that reduce churn)
4. Recommended interventions

### Prompt 1.2: Analysis-Driven Context Review

```
## Task
Review Solo codebase and design patterns based on the data analysis findings from Step 1.1.

## Inputs
- **Data Analysis:** data/CHURN_ANALYSIS_SUMMARY.md
- **Branding (design tokens, components):** branding/
- **Design Files:** [Solo Design File 1](#solo-design-file-1), [Solo Design File 2](#solo-design-file-2), [Solo Design File 3](#solo-design-file-3)

## Analysis Questions
Based on the findings in the analysis summary:
1. **Key features identified** - Review the implementation of features flagged as "STRONG" retention signals in the analysis
2. **User drop-off points** - Identify code locations related to zero-engagement patterns mentioned in the analysis
3. **Intervention opportunities** - Find existing implementation of the recommended interventions from the analysis
4. **Success states** - Locate where users achieve the engagement milestones identified in the analysis
5. **Analytics infrastructure** - Review what event tracking exists for the key metrics in the analysis
6. **A/B testing setup** - Check if Split.io or other experimentation tools are configured for the identified intervention points

## Design Review
- **User Journey Gaps** - Where do the identified drop-off points appear in the design?
- **Intervention UX Patterns** - What existing design patterns could be leveraged for the recommended interventions?
- **Success State Design** - How are the engagement milestones currently designed?
- **Onboarding Enhancement** - What design improvements could address zero-engagement issues?

## Focus Areas
Specifically focus on:
- Features identified as strongest retention signals in the analysis
- User journey points where zero-engagement occurs
- Existing intervention points that could address the opportunity areas identified

## Output
Summarise findings in a table:

| Feature/Analysis Finding | Code Location | Design Location | Reusable Components | Analytics Events | Intervention Potential |
|--------------------------|---------------|-----------------|---------------------|------------------|------------------------|

Then answer: **Based on the analysis findings, where are the most promising intervention points across code and design?**
```

### Prompt 1.3: PM Analysis Validation & Iteration

```
## Task
As the PM, review and validate the comprehensive analysis from Steps 1.1 and 1.2. Identify any gaps, additional questions, or refinements needed before proceeding to design and PRD creation.

## Inputs
- **Data Analysis:** data/CHURN_ANALYSIS_SUMMARY.md
- **Context Analysis:** From Step 1.2 output

## Validation Steps
1. Confirm the key statistics match expectations (total users, churn rate, etc.)
2. Verify the feature adoption percentages align with business understanding
3. Assess whether the strongest retention signals make business sense
4. Evaluate if the recommended interventions are feasible and valuable
5. Check if there are additional patterns or segments worth exploring
6. Validate that the technical and design opportunities are realistic

## PM Value-Add Questions
Consider:
- Do these findings align with recent user feedback or support tickets?
- Are there business constraints not captured in the data?
- Should we prioritize certain user segments over others?
- Are there competitive considerations or market trends to factor in?
- Does this analysis suggest we need different success metrics?

> 🛑 STOP HERE  
**Iteration Point - Ask me:**
"Reviewing the comprehensive analysis from Steps 1.1 and 1.2, do you want to:
1. Proceed with the current findings to design and PRD creation?
2. Request additional data analysis (specify what)?
3. Adjust the analysis scope or assumptions?
4. Add specific business context or constraints?

**Business Validation:**
- Do the strongest signals align with your experience?
- Are there intervention opportunities we should prioritize?
- Should we consider different user segments or timeframes?
- Are there technical or business constraints I should consider?"

## Output
Document any additional context, constraints, or priorities identified during PM review.
```

---

## Step 2: Design Context

> 🛑 STOP HERE  
**Before proceeding, ask me:**
- Confirm the design files to be used for reference
- Ask if there are any additional design considerations or constraints

### Prompt 2: Review Design Context

```
## Task
Review design files and patterns informed by the comprehensive analysis from Step 1.

## Inputs
- **Comprehensive Analysis:** From Step 1
- **PM Validation:** From Step 1.3
- **Design Files:** [Solo Design File 1](#solo-design-file-1), [Solo Design File 2](#solo-design-file-2), [Solo Design File 3](#solo-design-file-3)

## Analysis Focus
Building on Step 1.2's findings, focus on:
- Design patterns that support the identified intervention opportunities
- Current UX flows for the key engagement milestones
- Visual design elements that could enhance user activation
- Consistency with existing Solo design language

## Output
Summarise design context and recommendations in preparation for PRD creation:

| Design Element | Current Implementation | Analysis Insights | Recommended Enhancements |
|----------------|------------------------|-------------------|--------------------------|

Then answer: **How can the current design patterns best support the intervention opportunities identified in the analysis?**
```

---

## Step 3: PRD Creation

### Prompt 3: Create the Product Requirements Document

```
## Role
You are a Senior Product Manager creating a comprehensive, data-driven PRD that incorporates validated analysis, technical feasibility, design context, and PM priorities. The PRD must be readable by anybody in the business and will be used to guide feature development to release.

## Task
Create a complete PRD based on the comprehensive analysis and PM validation from previous steps.

## Inputs
- **Comprehensive Analysis:** From Step 1
- **PM Validation:** From Step 1.3
- **Design Context:** From Step 2
- **PRD Template:** [PRD Template](#prd-template)

## PRD Parameters

### Document Ownership

> 🛑 STOP HERE  
> **Before creating the PRD, ask the user:**
> "I need a few details for the PRD ownership section:
> 1. **Your name** (you'll be listed as the PM/Driver)
> 2. **Approver name** (who will sign off on this PRD?)
> 3. **Contributors** (optional — anyone else who contributed?)
> 4. **Teams to inform** (optional — which teams should receive updates?)"

Once the user provides these details, add this ownership section prominently at the top of the PRD, below the title:

| Role | Name | Responsibility |
|------|------|----------------|
| **Driver** | [User's name] | PM and document owner |
| **Approver** | [Approver name] | Final sign-off authority |
| **Contributors** | [Contributors if provided, otherwise "—"] | Input and review |
| **Informed** | [Teams if provided, otherwise "—"] | Status updates |

*This PRD was generated using the AI-Powered PM workflow developed by Simon Coker & Thiago De Siqueira.*

### Problem & Opportunity
- **Problem:** [From analysis data and PM validation]
- **Opportunity:** [Quantified from analysis findings, validated by PM]
- **Key Data Points:** [Pull from CHURN_ANALYSIS_SUMMARY.md and PM insights]

### Strategy & Scope

> 🛑 STOP HERE  
**Before proceeding, ask me:**
"The comprehensive analysis identified [X, Y, Z] as the strongest retention signals. Which intervention(s) should this PRD focus on?
- **Option A:** Single intervention - [highest signal feature]
- **Option B:** Two-phase intervention - [top 2 features in sequence]
- **Option C:** Comprehensive - [multiple interventions based on analysis]
- **Option D:** Something else (please specify)"

### Targets
Derive baseline values from the analysis output (data/CHURN_ANALYSIS_SUMMARY.md).

> 🛑 STOP HERE  
**Before setting targets, ask me:**
"Based on the validated analysis, here are the current baselines:
- [Primary metric]: [baseline from analysis]
- [Secondary metric]: [baseline from analysis]

What target ambition level do you want?
- **Conservative:** 10% relative improvement (lower risk, higher confidence)
- **Moderate:** 20% relative improvement (balanced risk/reward)
- **Ambitious:** 30%+ relative improvement (stretch goal, may need iteration)
- **Custom:** Specify your own targets"

> 🛑 STOP HERE  
**Before creating the PRD, ask me:**
"Based on the chosen intervention, what should we name this PRD file?
- Suggested name: [primary-intervention]-engagement-prd.md (e.g., 'invoice-engagement-prd.md', 'bank-connect-engagement-prd.md')
- Or specify your preferred filename:"

### Implementation Details
- **Technical Approach:** [Based on code analysis from Step 1.2]
- **Design Patterns:** [Based on design analysis from Step 2]
- **Testing Strategy:** [Include A/B testing setup identified in code review]

## Output Format
1. Complete PRD in markdown following the template structure
2. Fill in ALL sections (mark truly unknown items as "TBD - [who needs to answer]")
3. User stories in "As a... I want... So that..." format
4. Acceptance criteria in "Given... When... Then..." format
5. Ensure hypothesis is falsifiable with clear success/failure criteria

## Quality Checklist
Before presenting the PRD, verify:
- [ ] TL;DR is readable in 30 seconds
- [ ] All targets have current baseline AND target values
- [ ] Scope clearly states what's IN and what's OUT
- [ ] User stories cover all stated requirements
- [ ] Risks have mitigations, not just descriptions
- [ ] Technical approach references actual Solo components

> 🛑 STOP HERE  
**Iteration Point - Ask me:**
"PRD draft complete. Before proceeding to design:
- Any scope adjustments based on the detailed requirements?
- Should we validate technical assumptions with engineering?
- Are the success metrics and timelines realistic?"

Save the PRD to: output/[user-specified-filename]
```

---

## Step 4: Design Generation

### Prompt 4: Create Design Mockups

```
## Role
You are a Product Designer creating high-fidelity mockups informed by comprehensive analysis, PM validation, and validated PRD. These will be presented to stakeholders, used by engineering, and tested with users during value or usability testing.

## Task
Create interactive design mockups for the validated PRD scope.

## Inputs
- **PRD:** output/[user-specified-filename]
- **Design Context:** From Step 2
- **Analysis Insights:** From Step 1
- **PM Priorities:** From Step 1.3
- **Branding (tokens, Logo, assets):** branding/ — use for on-brand prototype styling
- **Design reference 1:** [Solo Design File 1](#solo-design-file-1)
- **Design reference 2:** [Solo Design File 2](#solo-design-file-2)
- **Design reference 3:** [Solo Design File 3](#solo-design-file-3)
- **Figma Make prompt template:** [Figma Make Prompt Template](#figma-make-prompt-template)

## Screens to Create as User Journeys
Create screens based on the user stories and scope defined in the PRD.

For each intervention phase in the PRD scope:
1. **Prompt/Intervention Screen** - The main UI for that intervention
2. **Success State** - What happens after user completes the action
3. **User Journey Flow** - Visual diagram showing the overall flow for stakeholders

## Design Requirements
Create screens that address the specific engagement gaps identified in the analysis and validated by PM:
- [Pull specific intervention points from data analysis]
- [Leverage existing design patterns from Step 2]
- [Consider PM priorities from Step 1.3]
- [Incorporate technical constraints from Step 1.2]

### Screen Requirements (per intervention)
- **When shown:** Derive from PRD functional requirements
- **Purpose:** Derive from PRD user stories
- **Elements:**
  - Headline: Suggest options based on the user goal
  - Primary CTA: The main action from the PRD scope
  - Secondary/Tertiary: Alternative paths or dismiss options
  - Always include a "Skip" or "Maybe later" option

## Design Specifications
- **Platform:** Mobile app (iOS)
- **Dimensions:** iPhone 14 Pro - 393x852px
- **Theme:** Light mode
- **Branding:** Use `branding/` design tokens and components for on-brand prototypes (see branding/README.md). MYOB purple (#6e2bd4), white backgrounds, McQueen/Inter fonts.

## Interactive Elements Required
- Primary CTA buttons should navigate between screens
- "Skip" and "Maybe later" should navigate to a "Home" placeholder
- Add hover/active states for buttons

> 🛑 STOP HERE  
**Iteration Point - Ask me:**
"Design concepts ready for review:
- Do these designs effectively address the engagement barriers identified?
- Should we iterate on any specific user flows?
- Are there brand or UX consistency concerns?"

## Output Requirements
1. **Figma Make Prompt:** Self-contained markdown version of the prompt using the template.

Save designs to: output/[strategy-name]-mockups.html
```

---

## Step 5: Jira Card Creation (Optional)

**Use this if:** You want to create Jira cards (Epic + Stories) from the completed PRD.

### Prompt 5: Create Epic and Stories from PRD

```
## Role
You are a Product Manager creating Jira cards to track implementation of the PRD.

## Task
Create a Jira Epic and child Stories based on the completed PRD's functional requirements.

## Inputs
- **PRD:** output/[user-specified-filename]
- **Jira Project:** AIPM

## Card Structure

**Epic:**
- Summary: [PRD Title]
- Description: Problem statement + Opportunity from PRD
- Labels: `ai-powered-pm`

**Stories (one per functional requirement):**
- Summary: [Requirement name]
- Description: Full requirement description from PRD
- Acceptance Criteria: Derived from requirement details
- Priority: Map from PRD priority (High → Highest, Medium → High, Low → Medium)
- Parent: Link to Epic

> 🛑 STOP HERE  
**Before creating cards, ask me:**
"Ready to create Jira cards in project AIPM:
- 1 Epic: [PRD title]
- [X] Stories based on functional requirements

Should I proceed? Any requirements to exclude or group differently?"

**After creating cards, provide:**
- Links to all created cards
- Summary of what was created
```

---

## Resources

### [Solo Design file 1](https://www.figma.com/design/JSKk4lYa5lFnbHJKytkHKZ/Solo-Money-Onboarding?node-id=114-17674&t=JntxekZW7YTUGXGU-1)
### [Solo Design file 2](https://www.figma.com/design/gfASv8EDc1iiAz0gDl5P69/App-set-up?node-id=0-1&t=ta2zISPPZXsFTHVN-1)
### [Solo Design file 3](https://www.figma.com/design/r7sSQfavEgyBWeBIDe3Jib/Home--Hubs---More?node-id=44-8152&t=MsoLOl0SkbML2EtD-1)
### [PRD Template](https://myobconfluence.atlassian.net/wiki/spaces/AIPWRPM/pages/11342086554/PRD+Template) 
### [Figma Make Prompt Template](https://myobconfluence.atlassian.net/wiki/spaces/AIPWRPM/pages/11348279358/Figma+Make+Prompt+Template) 


## Quick Reference: Key IDs calling MCPs

| Item | ID/Key |
|------|--------|
| **Confluence space** | `AIPWRPM` |
| **Jira project** | `AIPM` |
| **Jira board** | `11626` |
| **Slack channel** | `C0A7N23HLUA` (#tmp-ai-powered-pm) |

---

## Critical Instructions for Tool Operations

### Confluence Operations
When publishing or updating Confluence pages (using whatever Confluence MCP tool is available):
1. **Always read the existing page first** before updating - content may have changed
2. **Always provide all required parameters** when calling the update tool:
   - Page ID (required)
   - Full page body/content in storage format (required for content updates)
   - User approval flag if required by the tool
3. **Never call update operations with empty or missing parameters** - this will cause the operation to hang or fail
4. **For updates, rebuild the full body** - don't attempt partial updates; fetch current content, modify it, then send the complete body back

### Jira Operations
When creating Jira cards (using whatever Jira MCP tool is available):
1. **Always confirm with the user** before creating cards
2. **Provide all required fields** - summary, description, project key
3. **Link Stories to their parent Epic** after creation

### Content Accuracy
When generating documents from templates or specifications:
1. **Copy verbatim content exactly as written** - do not "clean up", rephrase, or modify text that is explicitly provided
2. **Preserve all details** including jokes, nicknames, or unusual phrasing - these may be intentional
3. **When in doubt, keep the original wording** rather than making it "better"

---
