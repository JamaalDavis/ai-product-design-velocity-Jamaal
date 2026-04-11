# AI-Powered PM: Master Prompt

> **Authors:** Simon Coker & Thiago De Siqueira
>
> **Purpose:** The master prompt for the AI-Powered PM workflow — from data analysis to PRDs, prototypes, and Jira cards
>
> **Data Source:** `data/fitbody_churn.csv`
>
> **Last Updated:** January 2026

---

## Table of Contents

1. [Step 1: Generate Analysis](#step-1-generate-analysis)
2. [Step 2: Design Context](#step-2-design-context)
3. [Step 3: PRD Creation](#step-3-prd-creation)
4. [Step 4: Design Generation](#step-4-design-generation)
   - 4.2: Figma Make Prompt
6. [Resources](#resources)

---

## ⚠️ Execution Rules (READ FIRST)

This workflow runs in **distinct steps with mandatory pauses**. You MUST:

1. **Execute ONE step at a time** - Complete the current step fully before considering the next
2. **STOP at every checkpoint** - When you see "⏸️ STOP", wait for user input before continuing
3. **Never skip ahead** - Even if you know what comes next, wait to be told "proceed" or "continue"
4. **Ask, don't assume** - At iteration points, ask the questions and wait for answers

If the user says "run the workflow" or similar, start with Step 1.1 only and stop at the first checkpoint.

---

## Step 1: Generate Analysis

**Use this if:** You need to do the data analysis yourself.

> **Prerequisites:** Run `/setup` first if you haven't already. This creates the Python environment needed for analysis.

### Prompt 1.1: Initial Data Analysis

#### AI-Generated Analysis

```
## Task
Analyze the FitBody subscriber data to identify churn patterns and retention opportunities. Write your own analysis — do not use the existing script.

## Step 1: Verify Environment
Check that the Python environment exists:
- Look for `venv/` folder in the project root
- If it doesn't exist, tell the user to run `/setup` first

## Step 2: Load and Explore the Data
Read `data/fitbody_churn.csv` and:
1. Understand the data structure (columns, types, sample values)
2. Identify the subscription status column
3. Examine unique status values to understand what indicates churn vs retention
4. Do NOT hardcode churn definitions — discover them from the data

## Step 3: Write and Run Analysis
Create a Python script that:
1. Calculates overall churn rate
2. Analyzes feature adoption (columns like CREATED_INVOICE, CONNECTED_BANK_FEED, etc.)
3. Compares churn rates between users who adopted features vs those who didn't
4. Identifies "zero engagement" users (no features used)
5. Create retention curves by month of go live and evaluate 30-day retention.
6. Create retention curves by number of feature used and evaluate 30-day retention.
7. Create retention curves by features and evaluate 30-day retention.
8. Generates a visualization (matplotlib/seaborn) for all analsysis 
9. Saves outputs to `data/CHURN_ANALYSIS_SUMMARY.md` and `data/churn_analysis.png`

## Step 4: Present Findings
Present the key findings to the user:
1. Overall churn rate and how you determined it
2. Zero engagement statistics
3. Top retention signals (features that reduce churn)
4. Recommended interventions

## Data Source
- **File:** data/fitbody_churn.csv
```

---

⏸️ **STOP - Review Data Analysis**

The data analysis is complete. Before proceeding to design context review:

📊 **Review these outputs:**
- `data/CHURN_ANALYSIS_SUMMARY.md` - Key findings and statistics
- `data/churn_analysis.png` - Visualization of churn patterns

❓ **Questions to consider:**
- Do the churn rates and feature adoption numbers look reasonable?
- Are there any obvious data quality concerns (missing data, outliers)?
- Do the "strongest retention signals" make intuitive sense?

✅ **When ready:** Say "proceed to 1.2" or ask questions about the analysis.

---

### Prompt 1.2: Analysis-Driven Context Review

Task
Review FitBody codebase and design patterns based on the data analysis findings from Step 1.1.

Inputs
Data Analysis: data/CHURN_ANALYSIS_SUMMARY.md
Design Files: FitBody Design File 1, FitBody Design File 2, FitBody Design File 3

Analysis Questions
Based on the findings in the analysis summary:
Key features identified - Review the implementation of features flagged as "STRONG" retention signals in the analysis
User drop-off points - Identify code locations related to zero-engagement patterns mentioned in the analysis
Intervention opportunities - Find existing implementation of the recommended interventions from the analysis
Success states - Locate where users achieve the engagement milestones identified in the analysis
Analytics infrastructure - Review what event tracking exists for the key metrics in the analysis
A/B testing setup - Check if Split.io or other experimentation tools are configured for the identified intervention points

User Journey Gaps - Where do the identified drop-off points appear in the design?
Intervention UX Patterns - What existing design patterns could be leveraged for the recommended interventions?
Success State Design - How are the engagement milestones currently designed?
Onboarding Enhancement - What design improvements could address zero-engagement issues?

Focus Areas
Specifically focus on:
Features identified as strongest retention signals in the analysis
User journey points where zero-engagement occurs
Existing intervention points that could address the opportunity areas identified
Output
Summarise findings in a table:
Feature/Analysis Finding	Code Location	Design Location	Reusable Components	Analytics Events	Intervention Potential
Then answer: Based on the analysis findings, where are the most promising intervention points across code and design?

---

⏸️ **STOP - Review Context Analysis**

Design context has been gathered. Before validation:

📋 **Review the findings:**
- Which existing features/flows were identified as intervention points?
- What design patterns and components are available to reuse?
- What analytics events already exist?

❓ **Questions to consider:**
- Does the technical assessment match your understanding of the codebase?
- Are there features or flows the agent missed that are relevant?
- Any known technical debt or constraints to flag?

✅ **When ready:** Say "proceed to 1.3" or provide additional context.

---

### Step 1.3: PM Analysis Validation & Iteration

Task
As the PM, review and validate the comprehensive analysis from Steps 1.1 and 1.2. Identify any gaps, additional questions, or refinements needed before proceeding to design and PRD creation.

Inputs
Data Analysis: data/CHURN_ANALYSIS_SUMMARY.md
Context Analysis: From Step 1.2 output

Validation Steps
Confirm the key statistics match expectations (total users, churn rate, etc.)
Verify the feature adoption percentages align with business understanding
Assess whether the strongest retention signals make business sense
Evaluate if the recommended interventions are feasible and valuable
Check if there are additional patterns or segments worth exploring
Validate that the technical and design opportunities are realistic

PM Value-Add Questions
Consider:
Do these findings align with recent user feedback or support tickets?
Are there business constraints not captured in the data?
Should we prioritize certain user segments over others?
Are there competitive considerations or market trends to factor in?
Does this analysis suggest we need different success metrics?

Iteration Point - Ask me:
"Reviewing the comprehensive analysis from Steps 1.1 and 1.2, do you want to:
Proceed with the current findings to design and PRD creation?
Request additional data analysis (specify what)?
Adjust the analysis scope or assumptions?
Add specific business context or constraints?
Business Validation:
Do the strongest signals align with your experience?
Are there intervention opportunities we should prioritize?
Should we consider different user segments or timeframes?
Are there technical or business constraints I should consider?"

Output
Document any additional context, constraints, or priorities identified during PM review.

---

⏸️ **Your Turn — Key Decision Point**

**This is the key validation checkpoint.** The agent has presented findings - now you need to provide direction.

📊 **You should have reviewed:**
- Data analysis findings (churn patterns, feature impact)
- Design context (intervention points, reusable components)

❓ **Answer these questions:**
1. Do the strongest retention signals align with your experience and user feedback?
2. Which intervention(s) should we prioritize? (The agent suggested options)
3. Are there user segments we should focus on or exclude?
4. Any business constraints, competitive factors, or recent learnings to consider?
5. What's your appetite for scope - focused MVP or comprehensive?

✅ **Respond with your decisions** before proceeding to Step 2.

---

## Step 2: Design Context

**Before proceeding, ask me:**
- Confirm the design files to be used for reference
- Ask if there are any additional design considerations or constraints

Task
Review design files and patterns informed by the comprehensive analysis from Step 1.

Inputs
Comprehensive Analysis: From Step 1
PM Validation: From Step 1.3
Design Files: FitBody Design File 1, FitBody Design File 2, FitBody Design File 3, FitBody Design File 4
Figma Spec Prompt: Figma Spec Prompt

Use these local references for understanding existing design patterns, spacing, typography, and component structures when creating mockups.

Analysis Focus
Building on Step 1.2's findings, focus on:
Design patterns that support the identified intervention opportunities
Current UX flows for the key engagement milestones
Visual design elements that could enhance user activation
Consistency with existing FitBody design language


Analysis
```
# Task: Generate a Product & Engineering Specification from a Figma File (Using Figma MCP Tools)

## Role
You are acting as a **Senior Product Designer + Staff Frontend Engineer** working together.  
Your goal is to convert a Figma design into a **clear, implementation-ready product + engineering specification**, using the Figma MCP tools to extract structured design context, covering:
- Design Overview
- Commponent Inventory
- Screen-by-Screen Specification
- Interaction & Behavior Specification
- Design Tokens
- Accessibility Requirements
- Brand identity
- Design system foundations
- UI components
- Interaction behavior
- Engineering constraints

## Tooling
You have access to the **Figma Model Context Protocol (MCP)** tools.  
Use these tools explicitly when needed to extract structured data from the Figma design. Available tools include (but are not limited to):  
- `get_screenshot`: Allows the agent to take a screenshot of your selection
- `get_design_context` — design context, layout, structure, and component details :contentReference[oaicite:1]{index=1}  
- `get_variable_defs` — design tokens and styles (colors, typography, spacing) :contentReference[oaicite:2]{index=2}  
- `get_metadata` — basic layer and structure metadata :contentReference[oaicite:3]{index=3}  
- `get_figjam` — FigJam diagram metadata (if applicable) :contentReference[oaicite:4]{index=4}  
- `create_design_system_rules` — (optional) generate design system rule files :contentReference[oaicite:5]{index=5}  

Whenever appropriate, call the tool explicitly in the prompt or ensure your instruction triggers it.

## Input
- **Figma file URL:** {{PASTE_FIGMA_URL_HERE}}

---

## Tasks

### 1. Design Overview
- Summarize the overall purpose of the design
- Identify primary user goals
- List top-level pages, screens, or flows

---

## 2. Brand Identity
Document:
- Brand personality (e.g. serious, playful, enterprise, consumer)
- Brand tone (formal / informal)
- Logo usage (presence, placement, clear space if inferable)
- Iconography style (outlined, filled, mixed)
- Illustration or imagery style (if present)
- Motion philosophy (subtle / expressive / functional)

Flag assumptions explicitly.

---

## 3. Colour System
Extract and normalize:
- Brand / primary colors
- Secondary and accent colors
- Semantic colors:
  - Success
  - Warning
  - Error
  - Info
- Neutral scale
- Background vs surface colors
- Text color hierarchy

Output:
- Token name
- Hex / RGB value
- Intended usage
- Contrast intent (if inferable)

---

## 4. Typography System
Document:
- Font families
- Font weights
- Text styles (H1–H6, body, caption, label)
- Line heights
- Letter spacing
- Usage rules (display vs functional text)

---

## 5. Design System Architecture
Describe:
- Design system maturity:
  - Ad-hoc
  - Component library
  - Full system
- Atomic structure:
  - Foundations
  - Components
  - Patterns
  - Templates
- Naming conventions
- Variant strategy
- Token usage consistency

---

## 6. Interaction & Motion
Document:
- Navigation rules
- Click / tap behavior
- Transitions and animations
- Motion timing and easing (if visible)

---

### 7. Screen-by-Screen Specification
For each major screen or frame:
- Provide:
  - Screen name
  - User intent
  - Layout structure (containers, auto-layout, grid)
  - Components and variants
  - Static copy and dynamic fields

---

### 8. Component Inventory
- Create a list of reusable components
For each component:
- Name
- Description
- Props / inputs
- States and actions
- Reusability notes

---

### 9. Interaction & Behavior Specification
Based on design context and interaction mapping:
- Navigation and flow structure
- Click / tap interactions
- Form validation
- Transitions and animations

---

### 10. Accessibility Requirements
From design context:
- Contrast expectations
- Focus states
- Keyboard navigation
- ARIA roles where needed

---

### 11. Engineering Notes
Determine and document:
- Target platform:
  - Web
  - Mobile web
  - Native mobile app (iOS / Android)
  - Desktop app
- Responsiveness model:
  - Fixed
  - Responsive
  - Adaptive
- Input assumptions:
  - Mouse / keyboard
  - Touch
  - Hybrid
- Frontend framework assumptions (if inferable)
- Component boundaries
- Responsiveness expectations
- Performance considerations

---

### Open Questions & Risks
- Ambiguities in the design
- Missing states
- Areas needing clarification

---

## Output Requirements
- Use **clear Markdown**
- Include headings and tables where helpful
- Do **not** invent UI not present in the Figma file
- Use explicit MCP tool calls where appropriate
- Clearly flag assumptions or gaps


## Constraints
- Only use information available via the **Figma MCP**
- If something is unclear, flag it — do not guess

```

Output
Summarise design context and recommendations in preparation for PRD creation:
Design Element	Current Implementation	Analysis Insights	Recommended Enhancements
Then answer: How can the current design patterns best support the intervention opportunities identified in the analysis?

---

⏸️ **STOP - Confirm Design Context**

Design context is gathered. Before PRD creation:

🎨 **Confirm:**
- Are the referenced Figma files correct for this initiative?
- Any additional design constraints or brand guidelines to consider?
- Are there recent design decisions that should influence this work?

✅ **When ready:** Say "proceed to PRD" or provide design guidance.

---

## Step 3: PRD Creation

### Prompt 3.1: Create the Product Requirements Document

Role
You are a Senior Product Manager creating a comprehensive, data-driven PRD that incorporates validated analysis, technical feasibility, design context, and PM priorities.

Task
Create a complete PRD based on the comprehensive analysis and PM validation from previous steps.

Inputs
Comprehensive Analysis: From Step 1
PM Validation: From Step 1.3
Design Context: From Step 2
PRD Template: PRD Template

PRD Parameters

### Document Ownership

> **Before creating the PRD, ask the user:**
> "I need a few details for the PRD ownership section:
> 1. **Your name** (you'll be listed as the PM/Driver)
> 2. **Approver name** (who will sign off on this PRD?)
> 3. **Contributors** (optional — anyone else who contributed?)
> 4. **Teams to inform** (optional — which teams should receive updates?)"

Once the user provides these details, create the ownership table:

```
| Role | Name | Responsibility |
|------|------|----------------|
| **Driver** | [User's name] | PM and document owner |
| **Approver** | [Approver name] | Final sign-off authority |
| **Contributors** | [Contributors if provided, otherwise "—"] | Input and review |
| **Informed** | [Teams if provided, otherwise "—"] | Status updates |

*This PRD was generated using the AI-Powered PM workflow developed by Simon Coker & Thiago De Siqueira.*
```

Problem & Opportunity
Problem: [From analysis data and PM validation]
Opportunity: [Quantified from analysis findings, validated by PM]
Key Data Points: [Pull from CHURN_ANALYSIS_SUMMARY.md and PM insights]

Strategy & Scope
Before proceeding, ask me:
"The comprehensive analysis identified [X, Y, Z] as the strongest retention signals. Which intervention(s) should this PRD focus on?
Option A: Single intervention - [highest signal feature]
Option B: Two-phase intervention - [top 2 features in sequence]
Option C: Comprehensive - [multiple interventions based on analysis]
Option D: Something else (please specify)"

---

⏸️ **STOP - Strategy & Targets Decision**

Choose your intervention strategy and targets.

🎯 **You need to decide:**
1. **Strategy:** Which option (A/B/C/D) aligns with your priorities?
2. **Targets:** What ambition level? (Conservative/Moderate/Ambitious/Custom)
3. **Filename:** What should we name this PRD?

💡 **Consider:**
- Conservative targets are easier to hit but may underwhelm stakeholders
- Ambitious targets show confidence in the data but need iteration room
- The strategy choice affects scope and timeline

✅ **Provide your choices** before the PRD is generated.

---

Targets
Derive baseline values from the analysis output (data/CHURN_ANALYSIS_SUMMARY.md).

Before setting targets, ask me:
"Based on the validated analysis, here are the current baselines:
[Primary metric]: [baseline from analysis]
[Secondary metric]: [baseline from analysis]
What target ambition level do you want?
Conservative: 10% relative improvement (lower risk, higher confidence)
Moderate: 20% relative improvement (balanced risk/reward)
Ambitious: 30%+ relative improvement (stretch goal, may need iteration)
Custom: Specify your own targets"

Before creating the PRD, ask me:
"Based on the chosen intervention, what should we name this PRD file?
Suggested name: [primary-intervention]-engagement-prd.md (e.g., 'invoice-engagement-prd.md', 'bank-connect-engagement-prd.md')
Or specify your preferred filename:"

Implementation Details
Design Patterns: [Based on design analysis from Step 2]
Testing Strategy: [Include A/B testing setup identified in code review]

Iteration Point - Ask me:
"PRD draft complete. Before proceeding to design:
Any scope adjustments based on the detailed requirements?
Should we validate technical assumptions with engineering?
Are the success metrics and timelines realistic?"

Save the PRD to: output/[user-specified-filename]

---

⏸️ **STOP - Review PRD Draft**

The PRD is drafted. Review before design work begins.

📄 **Review the PRD at:** `output/[your-chosen-filename].md`

❓ **Check these sections:**
- Does the Problem & Opportunity accurately reflect the analysis?
- Are the Goals and Non-Goals correctly scoped?
- Do the Success Metrics have realistic baselines and targets?
- Are the Functional Requirements complete and prioritized correctly?
- Any risks or open questions missing?

🔄 **Options:**
- Request changes to specific sections
- Validate technical assumptions with engineering first
- Publish to Confluence now (say "publish to Confluence")
- Proceed to design

✅ **When ready:** Say "proceed to design" or request changes.

---

## Step 4: Design Generation

---

### Prompt 4: Generate Figma Make Prompt

Role
You are a Product Designer preparing a comprehensive prompt for Figma Make to generate high-fidelity, interactive prototypes.

Task
Create a detailed Figma Make prompt that will generate production-quality mockups with device frames, clickable navigation, and interaction states.

Inputs
- PRD: output/[user-specified-filename]
- Design Context: From Step 2
- Figma Make Prompt Template: [Figma Make Prompt Template](https://myobconfluence.atlassian.net/wiki/spaces/AIPWRPM/pages/11348279358/Figma+Make+Prompt+Template)

Prompt Requirements
Using the template as a guide, generate a prompt that includes:

1. **Context & References**
   - Link to PRD
   - Links to FitBody design files for style reference
   - Brand guidelines (colors, typography, spacing)

2. **Presentation Requirements**
   - Device frame: iPhone 14 Pro (Space Black)
   - Include iOS status bar and home indicator
   - All screens wrapped in device frames

3. **Screen Specifications**
   - For each screen in the PRD, include:
     - Screen name and purpose
     - Detailed element descriptions
     - Interactive elements with tap targets
     - States needed (default, pressed, completed, etc.)
   - **Include complete feature flows**, not just entry points:
     - If PRD mentions "Connect Bank" → include Bank Selection, Login, Success screens
     - If PRD mentions "Create Invoice" → include Invoice Form (with tutorial), Success, Sent screens
     - User should be able to tap through the entire experience

4. **Prototype Navigation**
   - Define all screen-to-screen connections
   - Specify tap targets and destinations
   - Include Smart Animate transitions
   - Set prototype starting point

5. **Interaction States**
   - Default state for all elements
   - Pressed/hover state (90% opacity or 0.98 scale)
   - Disabled states where applicable
   - Success/completion states

6. **Flow Diagram**
   - ASCII or text representation of navigation flow
   - Show all paths through the prototype

Before generating, ask me:
"Ready to generate the Figma Make prompt. Any specific:
- Screens to prioritize or exclude?
- Interaction patterns to emphasize?
- Additional flows beyond the core PRD scope?"

Save prompt to: output/[strategy-name]-figma-make-prompt.md

---

⏸️ **STOP - Figma Make Prompt Ready**

The Figma Make prompt is generated.

📄 **Review the prompt at:** `output/[strategy-name]-figma-make-prompt.md`

🚀 **Next steps:**
1. Copy the prompt to Figma Make
2. Generate the high-fidelity prototype
3. Iterate as needed in Figma
4. Export final designs and update the Confluence PRD

✅ **Design workflow complete!** You can now:
- **Proceed to Step 5** to create Jira cards (say "proceed to Jira cards")
- Skip Jira and share the PRD and designs with stakeholders
- Schedule engineering review

---

## Resources

### Figma Design Files (External)
- [Design file 1](https://www.figma.com/design/K7yHEEXskrn5cRZUisNGOI/Fitness-App-UI-Kit-for-Gym-Workout-App-Fitness-Tracker-Mobile-App-Gym-Fitness-Mobile-App-UI-Kit--Community-?node-id=3196-6591&t=zJeikvEF490EIoOw-1) — FitBody Onboarding
- [Design file 2](https://www.figma.com/design/K7yHEEXskrn5cRZUisNGOI/Fitness-App-UI-Kit-for-Gym-Workout-App-Fitness-Tracker-Mobile-App-Gym-Fitness-Mobile-App-UI-Kit--Community-?node-id=3027-2839&t=zJeikvEF490EIoOw-1) — FitBody Create Workout Plan Beginner / Intermediate / Advanced
- [Design file 3](https://www.figma.com/design/K7yHEEXskrn5cRZUisNGOI/Fitness-App-UI-Kit-for-Gym-Workout-App-Fitness-Tracker-Mobile-App-Gym-Fitness-Mobile-App-UI-Kit--Community-?node-id=3178-4145&t=zJeikvEF490EIoOw-1) — Fitbody complete workout design
- [Design file 4](https://www.figma.com/design/K7yHEEXskrn5cRZUisNGOI/Fitness-App-UI-Kit-for-Gym-Workout-App-Fitness-Tracker-Mobile-App-Gym-Fitness-Mobile-App-UI-Kit--Community-?node-id=3095-46&t=zJeikvEF490EIoOw-1) — FitBody meal plans


### Templates
- [Figma Spec Prompt](`templates/figma-spec.md`)

- [PRD Template](`templates/prd.md`) 
- [Figma Make Prompt Template](https://myobconfluence.atlassian.net/wiki/spaces/AIPWRPM/pages/11348279358/Figma+Make+Prompt+Template) 

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
2. **Preserve all details** including nicknames, or unusual phrasing - these may be intentional
3. **When in doubt, keep the original wording or ask** rather than making it "better"

---
