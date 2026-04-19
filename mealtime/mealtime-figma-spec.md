# Mealtime — Figma Design Spec
*Extracted from Figma file: `NypBOpkRnIWy9Vrh2cpjGm`*
*Date: 2026-04-20*
*Screens sampled: Meal Plan (`414:7658`), Welcome Slide 1 (`406:464`), Select Diet (`406:3259`), Upgrade (`432:2982`), Settings (`431:2699`)*
*Tool: /figma-make-spec*

---

## 2a. Brand Identity

**Personality:** Warm, fresh, food-forward. The visual language feels like a well-lit health food café — generous whitespace, creamy backgrounds, appetising orange accents. Not clinical or austere.

**Tone:** Informal and encouraging. Headlines are bold and punchy ("Pick your diet", "Your personalized meal plan"). Body copy is concise and friendly.

**Logo:** Not visible as a standalone lockup in sampled screens. The wordmark/logo treatment was not captured in this sample — appears to live on a splash or marketing screen.

**Illustration style:** Freepik-sourced flat vector illustrations with a pastel palette (used on onboarding welcome slides). Characters are friendly and diverse. Food imagery uses real photography inside rounded cards on content screens.

**Iconography:** Line icons on inactive nav tabs; filled icons on active tab. Icon size: 24×24px throughout. Style is clean, single-weight outline.

**Motion philosophy (inferred):** Functional and minimal — no expressive animation visible in static frames. Bottom sheets and modals likely use spring-in transitions (standard iOS behaviour). *Assumption — not confirmed from static data.*

---

## 2b. Colour System

| Role | Token name | Hex | Usage |
|---|---|---|---|
| **Background** | Primary/0 | `#FFFAF5` | All standard screen backgrounds |
| **Surface elevated** | Grey/0 | `#FFFFFF` | Cards, modals, bottom nav, input fields |
| **Primary CTA** | Primary/500 | `#F58700` | Buttons, active nav icon/label, active progress |
| **Primary tint** | Primary/100 | `#FFE4C2` | Selected option bg, upgrade promo card bg |
| **Secondary bg** | Secondary/100 | `#D9F2E3` | Upgrade/paywall screen background, Pro badge bg |
| **Secondary mid** | Secondary/300 | `#8DD8AA` | (Observed in token list; minor usage) |
| **Secondary action** | Secondary/400 | `#40BF72` | Secondary badge border (Pro badge outline) |
| **Secondary active** | Secondary/500 | `#33995B` | Progress bar active, FREE plan badge bg |
| **Secondary dark** | Secondary/700 | `#1A4D2E` | Pro label text on green badge |
| **Text primary** | Grey/900 | `#1A1A1A` | All headings, body text, button text |
| **Text secondary** | Grey/600 | `#666666` | Captions, subtext, metadata |
| **Text mid** | Grey/500 | `#999999` | Mid-weight secondary labels |
| **Inactive nav** | Grey/300 | `#B3B3B3` | Inactive bottom nav icons and labels |
| **Border unselected** | Grey/200 | `#CCCCCC` | Option button borders (unselected), card borders |
| **Border divider** | Grey/100 | `#E6E6E6` | Progress bar inactive, settings row dividers, avatar ring |

---

## 2c. Typography System

**Font family:** **DM Sans** — available on Google Fonts. Loaded via `fontVariationSettings: "'opsz' 14"` across all text nodes.

> ⚠️ **Important:** The design system document in this repo incorrectly states the font is "Inter". The Figma source uses **DM Sans** throughout — confirmed across all 5 sampled screens.

| Role | Family | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|---|
| **Display / H2** | DM Sans | 32px | Bold (700) | 1.2 | -1.6px |
| **H3** | DM Sans | 24px | Bold (700) | 1.2 | 0 |
| **Body 1 Regular (B1/Regular)** | DM Sans | 18px | Regular (400) | 1.4 | 0 |
| **Body 1 Bold (B1/Bold)** | DM Sans | 18px | Bold (700) | 1.4 | 0 |
| **Body 2 Bold (B2/Bold)** | DM Sans | 16px | Bold (700) | 1.4 | 0 |
| **Label / nav** | DM Sans | 12px | Medium (500) | 1.4 | 0 |

No italic usage observed in sampled screens. Button text uses B1/Bold (`#1A1A1A`) — not white — on the amber CTA.

---

## 2d. Spacing & Sizing

| Property | Value |
|---|---|
| **Screen dimensions** | 430 × 932px |
| **Horizontal screen padding** | 16px (left and right edge to content) |
| **CTA button width** | 397px (full width minus ~16.5px each side) |
| **CTA button height** | 57px |
| **CTA button border-radius** | 16px |
| **CTA button padding** | 24px horizontal, 16px vertical |
| **Option button height** | ~57px (same as CTA) |
| **Option button border-radius** | 16px |
| **Card border-radius** | 20px |
| **Card shadow (meal card)** | `0px 14px 44px 0px rgba(79,94,85,0.2)` |
| **Bottom nav height** | 86px total (incl. 27px home indicator area) |
| **Bottom nav shadow** | `0px -10px 16px 0px rgba(67,61,55,0.06)` |
| **Bottom nav tab gap** | 50px between tab centres |
| **Icon size** | 24×24px |
| **Avatar size** | 90px (settings screen) |
| **Progress bar height** | 12px |
| **Progress bar border-radius** | 30px |
| **Gap between option buttons** | 14px |
| **Upgrade card padding** | 24px |
| **Bottom sheet padding** | 36px top, 40px bottom, 28px sides |
| **Status bar height** | 54px |
| **Home indicator height** | 21–27px |

---

## 2e. Design System Architecture

**Maturity:** Component library in active use. Components are named instances (StatusBar, Button, Meal Card, Container/nav) with consistent reuse across screens.

**Atomic structure observed:** Foundations (colour tokens, type scale) → Components (Button, Meal Card, Bottom Nav, Status Bar) → Screen templates. No explicit Figma Variables/tokens panel data returned (community file may restrict access), but named styles are consistently applied.

**Naming conventions:** PascalCase for component names (`StatusBar`, `Meal Card`, `Button`). Descriptive semantic names used.

**Variant strategy:** Button component appears to be a single component with fill toggled contextually rather than explicit variants — the same frame ID `406:396` is reused as an instance across all screens.

**Token consistency:** High. Colour tokens (`Primary/500`, `Grey/900`, etc.) appear applied consistently across all 5 screens via named styles.

---

## 2f. Component Patterns

### Primary CTA Button
- Width: 397px (full-width with 16.5px margins)
- Height: 57px
- Background: `#F58700`
- Border-radius: 16px
- Padding: 16px vertical / 24px horizontal
- Font: DM Sans Bold, 18px, `#1A1A1A` (charcoal — not white)
- `overflow: clip`
- No icon variant observed in primary context
- Disabled state: not captured in sampled screens — *assume reduced opacity or grey fill*

### Option / Selection Buttons (onboarding)
- Width: 397px (same as CTA)
- Height: ~57px
- **Unselected:** Background `#FFFFFF`, border `1px solid #CCCCCC`, radius 16px
- **Selected:** Background `#FFE4C2`, border `1px solid #F58700`, radius 16px
- Font: DM Sans Bold, 18px, `#1A1A1A`
- No checkbox or icon — colour change is the only selection indicator

### Cards (Meal Card)
- Background: `#FFFFFF`
- Border: `~1.4px solid #CCCCCC`
- Border-radius: 20px
- Shadow: `0px 14px 44px 0px rgba(79,94,85,0.2)`
- Content: food photo (fills card, rounded 20px), title below (DM Sans Bold)
- Pro badge: green pill overlay on photo, top-right

### Bottom Navigation
- 4 tabs: **Meal Plan · Groceries · Favorites · Settings**
- ⚠️ **4 tabs, not 5** — confirmed across all screens (home, settings)
- Container height: 86px (59px nav area + 27px home indicator)
- Background: `#FFFFFF`
- Shadow: `0px -10px 16px 0px rgba(67,61,55,0.06)`
- Gap between tab centres: 50px
- **Active:** icon `#F58700`, label `#F58700`, DM Sans Medium 12px, filled icon variant
- **Inactive:** icon `#B3B3B3`, label `#B3B3B3`, DM Sans Medium 12px, outline icon variant
- Icons: 24×24px

### Progress Indicator (onboarding steps)
- Style: **horizontal pill segments** — full width, 5 segments with 6px gap
- Active segment: `#33995B` (green)
- Inactive segment: `#E6E6E6` (light grey)
- Height: 12px, border-radius: 30px
- Positioned between status bar and screen title

### Progress Dots (onboarding welcome slides)
- Style: 3 circular dots in a row
- Active: `#F58700` (orange)
- Inactive: `#CCCCCC` (grey)
- Small size (approx 8px diameter), horizontal layout

### Modals / Bottom Sheets (Upgrade)
- Background: `#FFFFFF`
- Top border-radius: 20px
- Shadow: `0px -10px 16px 0px rgba(67,61,55,0.06)` (same as bottom nav)
- Drag handle: dots / logo image (not a standard handle pill)
- Padding: 36px top, 40px bottom, 28px sides
- Dismiss: × icon top-right, also × icon at top-left of full screen
- Contains: logo mark, pricing headline, primary CTA button, "Restore Purchases" underlined text link

### Upgrade Promo Card (in-app, Settings)
- Background: `#FFE4C2` (primary tint)
- Border-radius: 20px
- Padding: 24px
- Contains: H3 headline, B1/Regular body, full-width amber CTA button

### Badges / Pills
- **FREE badge:** `#33995B` background, white text, DM Sans Bold 16px, rounded pill (30px), border `4px solid #FFFAF5` (creates halo separation)
- **Pro badge (on card):** `#D9F2E3` background, `#1A4D2E` text "Pro", `+` icon in white circle with shadow

### Settings List Rows
- Background: transparent on `#FFFAF5`
- Row height: ~65px
- Separator: 1px line (full width minus 16px padding)
- Left icon: 24×24, `#B3B3B3`
- Label: DM Sans Bold, 18px, `#1A1A1A`
- Right chevron: 24×24, rotated -90° for right-pointing

---

## 2g. Interaction & Motion

- **Navigation model:** Tab-based with bottom nav (4 tabs). Onboarding is a linear stack (back arrow top-left, "Skip" text link for exit).
- **Onboarding flow:** Welcome slides (paginated, dot indicator) → preference selection screens (diet, allergies, servings etc., pill progress bar) → app home.
- **Transitions (inferred):** Standard iOS push/pop for onboarding stack. Upgrade screen appears to be a full-screen modal overlay (not a partial sheet) given the full background colour change. *Assumption.*
- **Selection feedback:** Instant colour change on option buttons (selected = amber tint + amber border, unselected = white + grey border). No animation specified.
- **"Skip" affordance:** Plain text link, DM Sans Medium, 18px, `#1A1A1A`, centred below primary CTA. No border, no background.

---

## 2h. Screen Inventory

| Screen | Node ID | Description | Key patterns present |
|---|---|---|---|
| Meal Plan (empty) | `414:7658` | Home screen before any meal plan is created — empty state with CTA | Bottom nav (active: Meal Plan), H2 headline, B1 body, full-width CTA button |
| Welcome Slide 1 | `406:464` | First onboarding slide with Freepik illustration | Illustration, 3 progress dots, H2 headline, B1 body, CTA button, Skip link |
| Select Diet | `406:3259` | Onboarding preference screen — diet selection | 5-segment pill progress bar, H2 headline, 8 option buttons (2 selected), CTA button |
| Upgrade (paywall) | `432:2982` | Full-screen paywall with mint-green background | Mint bg, Meal Card with Pro badge, bottom sheet with pricing, CTA, Restore link |
| Settings | `431:2699` | Account settings with upgrade promo | Bottom nav (active: Settings), H2 page title, avatar + email, upgrade promo card, list rows |

Additional screens in file (not sampled): Sign Up, Login, Reset Password, Meal Details, Ingredients, Instructions, Timer, Shopping List, Favorites, Account Menu, and more.

---

## 2i. Engineering Notes

- **Target platform:** Native mobile — iOS primary (status bar: 54px, home indicator: 21–27px). Frame is 430×932px, consistent with iPhone 14/15 Pro size.
- **Responsiveness:** Fixed-width layout at 430px. Not responsive — designed for a specific device class.
- **Input model:** Touch / tap only. No hover states observed.
- **Font:** DM Sans — **available on Google Fonts**. Import as: `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap')`. Use `font-variation-settings: 'opsz' 14` to match the exact optical sizing used in the design.
- **Component boundaries:** Button is a self-contained reusable component (same ID `406:396` reused as instance). Bottom nav is a standalone component. Status bar is a shared component. Meal Card is reusable.
- **Image handling:** Food photography used inside cards (real images, not placeholders). Illustration assets are from Freepik (check licensing before production use). All non-photography UI is pure CSS/SVG.
- **Icons:** Custom icon set (fork-knife, basket/groceries, heart, settings gear, chevron, arrow). All are SVG vectors — no icon font.
- **Performance:** Illustration-heavy onboarding screens (multiple Freepik SVG groups) may affect load time if not optimised. Photography cards should use lazy loading and `object-cover`.

---

## 2j. Open Questions & Risks

1. **Font licensing:** DM Sans is free via Google Fonts. Confirm no custom modified version is being used (the Figma file uses `fontVariationSettings: "'opsz' 14"` — standard variable font axis).

2. **Meal Plan (populated) state not captured:** The sampled Meal Plan screen shows the empty state (no plan created). The populated weekly calendar view (with recipe slots filled in) was not sampled — the exact card structure, meal category labels, and swipe interactions are not confirmed from the Figma source. *The prototype builder should reference the HTML prototype or re-read node `414:7658` variants for this state.*

3. **5-tab vs 4-tab nav:** This Figma file shows **4 tabs** (Meal Plan, Groceries, Favorites, Settings). The existing design system document in this repo describes 5 tabs. The Figma source is authoritative — use 4 tabs.

4. **Upgrade screen background:** The Upgrade screen uniquely uses `#D9F2E3` (mint green) as its full-screen background rather than the standard `#FFFAF5` cream. This is an intentional divergence — not a mistake.

5. **Pro badge dimensions inconsistent:** The Pro badge on the Meal Card appears to use scaled/fractional sizing (`16.376px`, `10.918px` padding) — this is likely an artefact of the Figma component being scaled. In implementation, use rounded values (16px font, 10–11px padding).

6. **Back arrow vs. cancel X:** Onboarding screens use a back arrow (←) top-left. The Upgrade modal uses an X icon top-left (and also top-right of the bottom sheet). Both are 24×24px SVG icons, not the same component.

---

## Build Notes

The 5 most important things for a prototype builder to know:

1. **Font is DM Sans, not Inter.** Import from Google Fonts with `wght@400;500;700`. Apply `font-variation-settings: 'opsz' 14` to all text to match the design exactly.

2. **Background is `#FFFAF5` (warm cream), not white and not `#FAFAF7`.** Cards and the bottom nav use pure `#FFFFFF`. Never use plain white as the screen background.

3. **Bottom nav has 4 tabs: Meal Plan · Groceries · Favorites · Settings.** Not 5. The active tab uses `#F58700` for both icon and label; inactive uses `#B3B3B3`.

4. **CTA button text is charcoal (`#1A1A1A`), not white.** The amber background (`#F58700`) is paired with dark text — this is deliberate and consistent across all screens.

5. **Onboarding progress indicator is a segmented pill bar (green/grey), not dots.** The welcome slides use orange/grey circular dots. Once past the welcome slides, the preference screens switch to a 5-segment full-width pill bar with green active state (`#33995B`).
