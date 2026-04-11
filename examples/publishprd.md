---
title: AI-Powered PM: Publish PRDs (Ready to Run)
authors: 
  - Thiago De Siqueira: thiago.desiqueira@mybo.com
  - Simon Coker: simon.coker@myob.com
---

> **Purpose:** Ready to run prompts to publish PRD to confluence
>
> **Last Updated:** January 2026

---

## Table of Contents

0. [Step 0: Check Arguments](#step-0-check-arguments)
1. [Step 1: Locate PRD](#step-1-locate-prd)
2. [Step 2: Validate Confluence access and Parent Page](#step-2-validate-confluence-access-and-parent-page)
3. [Step 3: Publish PRD](#step-3-publish-prd)


---

## Step 0: Check Arguments

- This prompt requires two argument:
- PRD document: link to local file containing the prd document to be published
- Confluence Parent Page document: URL link to confluence parent page.

### Help Me

```
#Help
This command requires the local PRD file to be published and the confluence parent page

##Usage:
/publishprd @link_to_prd_file www.url.com

##Example:
/publishprd @prd.md https://myobconfluence.atlassian.net/wiki/spaces/AIPWRPM/pages/11341529415/Templates+Examples
Please provide all arguments to proceed
```

> 🛑 STOP HERE  
**Before proceeding, if two arguments are not provided show user help me:**

---

## Step 1: Locate PRD

- Look for a linked file in the prompt with PRD in name or a description


### Prompt 1: Locate PRD Prompt

```
## Task
- Review the provided prd file 

## Inputs
- **User provided PRD: Link to PRD file in the prompt

## Validation Steps
1. Confirm the file exists

## Output
1. **Validation summary** - Explain to user on prompt which file you will publish
```
---

## Step 2: Validate Confluence access and Parent Page

- Confirm Confluence MCP is connected and you have access to publish documents in the given parent page.

### Prompt 2: Validate Confluence access and Parent Page

```
## Task
- Review the provided url to the confluence parent page
- Read the confluence parent page using the confluence MCP tool

## Inputs
- **Confluence Parent Page:** Link to Confluence parent page provided by the user

```

---

## Step 3: Publish PRD under parent page

### Prompt 3: Publish PRD under Confluence parent page

```
## Task
- Review the provided URL to the Confluence parent page

## Inputs
- **Confluence Parent Page:** Link to Confluence parent page provided by the user
- **PRD:** PRD file provided by the user
```

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

### Content Accuracy
When generating documents from templates or specifications:
1. **Copy verbatim content exactly as written** - do not "clean up", rephrase, or modify text that is explicitly provided
2. **Preserve all details** including jokes, nicknames, or unusual phrasing - these may be intentional
3. **When in doubt, keep the original wording** rather than making it "better"

---