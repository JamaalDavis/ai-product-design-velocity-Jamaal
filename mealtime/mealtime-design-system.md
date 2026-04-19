# Mealtime — Design System Reference

> This document describes Mealtime's visual design language, component conventions, and UI patterns as they appear in the Figma source (Recipe App UI Kit — Community Copy). Use it when building prototypes or implementing designs to ensure consistency with the established product aesthetic.

---

## Brand Personality

Mealtime's visual identity is **warm, appetising, and effortless**. The UI should feel like a well-lit kitchen — clean surfaces, natural tones, generous breathing room. Every screen should make food look good and planning feel easy.

---

## Colour Palette

| Role | Description | Usage |
|---|---|---|
| **Primary** | Warm amber / saffron | CTAs, active states, selected meal slots, progress indicators |
| **Secondary** | Soft coral / tomato | Accent highlights, category badges (dinner), notification dots |
| **Surface / Background** | Off-white, warm cream | Screen backgrounds, card surfaces |
| **Surface Elevated** | Pure white | Modal sheets, input fields, focused cards |
| **Text Primary** | Deep charcoal (#1A1A2E or similar) | Headings, recipe titles, primary labels |
| **Text Secondary** | Medium grey | Captions, metadata, timestamps, supporting copy |
| **Success** | Muted sage green | Completion states, cooked-meal confirmation, checkmarks |
| **Destructive** | Warm red | Delete actions, error states |

---

## Typography

| Style | Usage |
|---|---|
| **Display / Hero** | Recipe titles on detail screens, onboarding headlines |
| **Heading 1** | Screen titles (Meal Plan, Groceries, Favorites) |
| **Heading 2** | Section headers, card titles |
| **Body** | Recipe descriptions, instruction steps, list items |
| **Caption** | Metadata (cook time, servings, calories), timestamps |
| **Label** | Button text, tab labels, tag chips |

Font family: a clean sans-serif (Inter or similar geometric sans). Weights: Regular (400), Medium (500), Semi Bold (600).

---

## Core Components

### Recipe Card
The primary content unit. Contains:
- Full-bleed food photography (top)
- Recipe title (Heading 2)
- Metadata row: cook time · servings · difficulty badge
- Favourite (heart) icon, top-right
- Dietary tags (vegan, keto, etc.) as small coloured chips

Used in: recipe browse, meal plan slots, favorites, collections.

### Meal Plan Calendar
Weekly grid view with 5 meal slots per day (breakfast, lunch, dinner, snack, dessert). Each slot shows:
- Meal category icon + label
- Recipe card thumbnail (if planned) or a dashed "Add meal" placeholder
- Swipe-right to mark as cooked (triggers confetti micro-animation)

### Grocery List Item
Checkbox + ingredient name + quantity. Grouped by category (Produce, Dairy, Protein, Pantry). Checked items cross out and sink to the bottom. Syncs live across Family plan members.

### Taste Profile Card
During onboarding: full-screen recipe photo with a gradient overlay. Swipe right = like, swipe left = skip. Progress bar at top (1–10). Used to infer dietary preferences and cuisine affinity.

### Bottom Navigation
Five tabs: **Home** (meal plan) · **Discover** (recipe browse) · **Groceries** · **Favorites** · **Profile**. Active tab highlighted in Primary amber. Icon + label.

### Status Bar
iOS/Android system status bar. Light content (white icons) on dark/coloured headers; dark content (black icons) on light surfaces.

### Upgrade / Paywall Sheet
Modal bottom sheet. Contains:
- Feature illustration (food photography)
- Short benefit headline (2–3 words)
- 3-bullet feature list
- Primary CTA: "Start Free Trial" or "Upgrade to Premium"
- Secondary link: "Restore Purchases"
- Dismiss affordance (X icon, top-right)

---

## Screen Inventory (from Figma)

| Screen | Description |
|---|---|
| Sign Up | Email + password entry, T&Cs checkbox, social sign-in option |
| Login | Email + password, "Forgot Password?" link, social sign-in |
| Reset Password | Email entry → 4-digit verification code → new password → success confirmation |
| Onboarding | Multi-step: taste profile swipe cards, permissions, notifications opt-in |
| Meal Plan (Home) | Weekly calendar with recipe slots, quick-add CTA |
| Meal Details | Full recipe view: hero image, ingredient list, step-by-step instructions, macros |
| Groceries | Categorised grocery list, sync button (premium), share icon |
| Favorites | Grid of saved recipes; "Create Collection" prompt when empty |
| Settings | Account, notifications, dietary preferences, subscription management |
| Upgrade | Paywall sheet (see component above) |
| Account Menu | Profile photo, name, plan badge; links to Settings, Help, Sign Out |

---

## Motion & Interaction

- **Swipe to cook:** meal plan items slide right with a green check animation
- **Drag to plan:** recipes drag from browse into meal plan slots with a shadow lift
- **Taste profile swipe:** Tinder-style card swipe with like/skip overlay icon
- **Sheet transitions:** bottom sheets spring up (spring curve, ~300ms)
- **Tab transitions:** crossfade, no slide (maintains spatial clarity)

---

## Figma Source

**File:** Recipe App UI Kit — Community Copy
**URL:** `https://www.figma.com/design/NypBOpkRnIWy9Vrh2cpjGm/Recipe-App-UI-Kit--Community---Copy-`
**Page:** 📺Screens (all app screens on a single canvas)
**Sections:** Auth (Sign Up, Login, Reset Password), Onboarding, Meal Plan, Meal Details, Groceries, Favorites, Settings, Upgrade
