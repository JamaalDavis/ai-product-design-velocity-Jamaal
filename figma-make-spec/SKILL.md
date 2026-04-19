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
