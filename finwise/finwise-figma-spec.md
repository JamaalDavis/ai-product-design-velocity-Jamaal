# FinWise — Figma Design Spec
*Extracted from Figma file: JshRHiNqlhVk3ixF4cIrgK*
*Date: 2026-05-20*
*Screens sampled: Home (7342:2818), Analysis-Visual (7136:2057), Login (7020:3634), Profile (7020:3844), End Session modal (7113:3115)*
*Tool: /figma-make-spec*

---

## 2a. Brand Identity

- **Brand personality:** Clean, modern, financially aspirational. Warm greens signal growth and calm trust rather than corporate severity.
- **Brand tone:** Friendly and informal. Greeting copy ("Hi, Welcome Back", "Good Morning") positions the app as a personal companion, not a banking dashboard.
- **Logo / wordmark:** "FinWise" wordmark present in the app header. Not extracted as a separate asset — appears as styled text.
- **Iconography style:** Custom filled icons in a 57×53px rounded-square container (Light Green background). Bottom-nav icons are outlined strokes. Mixed outlined + filled depending on context.
- **Illustration / imagery:** No illustration system observed. Decorative curved shapes (large rounded rectangles) divide the hero zone (Main Green) from the content zone (Background Green).
- **Motion philosophy:** *Inferred* — subtle. The period-selector toggle (pill slider) and tab-based navigation suggest smooth slide transitions. No expressive animation tokens visible in static file.

---

## 2b. Colour System

| Role | Hex | Named Token | Usage |
|---|---|---|---|
| Background (screen) | `#F1FFF3` | `Background Green White and Letters` | Main content zone background, card surfaces |
| Hero / header | `#00D09E` | `Main Green` | Screen header zone (top ~180px), primary CTA fill, active tab indicator |
| Surface elevated | `#DFF7E2` | `Light Green` | Cards, input field fill, bottom nav background, notification bell, inactive pill tabs |
| Text primary | `#093030` | `Letters and Icons` | All primary labels, headings, icon fills |
| Text dark header | `#0E3E3E` | `Dark Mode Green bar` | Header-zone text, modal titles, cancel button text, chart axis labels |
| Text on hero | `#FFFFFF` | `Font 2` | White text on Main Green hero sections, status bar elements |
| Accent / expense | `#0068FF` | `Ocean Blue Button` | Expense amounts (red-equivalent semantic), chart fill arcs, timestamp accents, links |
| Accent / chart light | `#6DB6FE` | `Light Blue button` | Chart bars, secondary donut rings, dashed grid lines |
| Link / CTA secondary | `#3299FF` | `Blue Button` | "Sign Up" and inline link text |
| Text body (dark) | `#052224` | `Background dark mode and letters` | Darkest body text in some transaction contexts |
| Modal background | `#FFFFFF` | — | Dialog card surface |
| Modal body text | `#363130` | — | Warm-dark body text inside modals |
| Progress bg | `#F1FFF3` | Same as background | Progress bar track (appears as light ring) |

**No dedicated error/warning/success semantic colours observed.** Expenses use `#0068FF` (blue) rather than red — FinWise does not use red to denote negative numbers.

---

## 2c. Typography System

Two font families in use: **Poppins** (primary — headings, labels, amounts) and **League Spartan** (secondary — subtext, body, status bar).

| Role | Font Family | Size | Weight | Line Height | Notes |
|---|---|---|---|---|---|
| Hero heading (Welcome) | Poppins | 30px | SemiBold 600 | 22px | Login screen title |
| Display / balance amount | Poppins | 24px | Bold 700 | — | $7,783.00 total balance |
| Display / expense amount | Poppins | 24px | SemiBold 600 | — | `-$1,187.40` total expense |
| Screen title (`Titlle`) | Poppins | 20px | SemiBold 600 | 22px | "Analysis", "Profile", modal titles |
| Section heading / name | Poppins | 20px | Bold 700 | — | "John Smith" on profile |
| Subtitle / list label | Poppins | 15px | Medium 500 | — | Transaction names, nav labels, input field labels |
| Toggle tab label | Poppins | 15px | Regular 400 | — | Daily / Weekly / Monthly |
| Body / paragraph | Poppins | 15px | Regular 400 | — | "30% of your expenses, looks good." |
| Caption / meta label | Poppins | 12px | Regular 400 | — | "Total Balance", "Total Expense", category meta |
| Timestamp / accent small | Poppins | 12px | SemiBold 600 | — | "18:27 - April 30", "30%" label on bar |
| Subtext / secondary body | League Spartan | 14px | Regular 400 | — | "Good Morning" greeting, chart axis labels |
| Link / forgot password | League Spartan | 14px | SemiBold 600 | — | "Forgot Password?" |
| Footer / "or sign up with" | League Spartan | 13px | Light 300 | 15px | Divider text, social auth label |
| Status bar time | League Spartan | 13px | Medium 500 | — | "16:04" |
| Category/goal italic amount | Poppins | 13px | Medium Italic 500 | — | Goal amount "$20,000.00" (italic) |
| Modal body | League Spartan | 17px | Regular 400 | — | "Are you sure you want to log out?" |
| Password field dots | Poppins | 12px | Regular 400 | 14px | Letter-spacing: 70% |

**Letter-spacing:** Only notable instance is password dots at 70% tracking. All other text appears at default spacing.
**Italic usage:** One instance — goal amounts displayed in Medium Italic (savings target numbers).
**Colour overrides:** Expense/negative amounts always `#0068FF` (Ocean Blue), even in body text.

---

## 2d. Spacing & Sizing

| Token | Value | Source |
|---|---|---|
| Screen dimensions | 430 × 932px | iPhone 14 Pro Max (home, login, profile); Analysis screen is 430 × 1118px (scrollable) |
| Screen border radius | 40px | All full-screen frames |
| Horizontal margin (content) | 37–38px | Input fields, icon rows, all major content blocks |
| Hero zone height | ~180–290px | Green header band, varies by screen (Login: 187px, Profile: 176px) |
| Content card radius | 31px | Inner rounded-rectangle that floats over hero |
| Input field height | 41px | Both email and password inputs on Login |
| Input field border radius | 18px | Login input rectangles |
| Input field fill | Light Green `#DFF7E2` | |
| Primary button height | 45px | CTA buttons across Login and modal |
| Primary button border radius | 30px | "Group 54" wrapper visible in instances |
| Primary button width | 207–218px | Centered, not full-width |
| Toggle switcher height | 60px | Period selector (Daily / Weekly / Monthly) |
| Toggle switcher width | 358px | Full content width (430 - 2×36) |
| Toggle switcher radius | 22px | Container |
| Active pill radius | 19px | Active period tab |
| Inactive pill radius | 10px | Inactive period tab |
| Active pill height | 50px | Larger than inactive (visual weight) |
| Inactive pill height | 31px | |
| Bottom nav height | ~108px | y:824 in 932px screen |
| Bottom nav radius | 70px 70px 0px 0px | Top corners only |
| Bottom nav background | Light Green `#DFF7E2` | |
| Bottom nav gap between tabs | 43px | |
| Bottom nav padding | 36px 60px 41px | Top / horizontal / bottom |
| Category icon container | 57 × 53px | |
| Notification bell | 30 × 30px | Border radius 25.71px (essentially circular) |
| Progress bar height | 27px | Savings progress bar |
| Progress bar radius | 13.5px | Pill shape |
| Savings ring outer diameter | 107.71px | Concentric ellipses |
| Settings list row gap | 34px | Vertical gap between profile menu rows |
| Settings list row icon gap | 13px | Gap between icon and label in list rows |
| Bar chart bar width | 6px | Analysis bar chart |
| Bar chart bar gap | 23px | |
| Modal width | 339px | End session dialog |
| Modal height | 300px | End session dialog |
| Modal background radius | 20px | Dialog card |

---

## 2e. Design System Architecture

- **Maturity:** Early component library. Named Figma component sets are present (Bottom Navigation, Log in button states, Period switcher, Icon-Notification, nav tab icons), but layout and spacing are handled with absolute positioning in most frames, not auto-layout stacks throughout.
- **Atomic structure observed:** Icons (atoms) → Button instances (molecules) → Screen frames (templates). No evidence of a full token → component → pattern → template hierarchy.
- **Naming conventions:** Section screens use a numeric hierarchy (9.5.0, 9.5.1, etc.). Component sets use descriptive names. Some inconsistency: one style is named "Titlle" (double-L typo) — replicate exactly to match.
- **Variant strategy:** Figma variant components confirmed for: Log in button (Activate / Inactive), Period switcher (Switch-2, Switch-4), Eye-Pass (Eye-Off), Bottom nav tabs (Home-On/Off, Analysis-On/Off, etc.).
- **Token consistency:** Named colour tokens are used consistently across all five sampled screens. Typography style references are consistent. Spacing uses hardcoded absolute values rather than token references.

---

## 2f. Component Patterns

### Primary CTA Button ("Log in")
- **Width:** 207px (centered in 430px screen) — not full-width
- **Height:** 45px
- **Border radius:** 30px
- **Active state:** Filled background (transparent fill in Figma instance; appears as Main Green `#00D09E` from context), text `Letters and Icons #093030`, style: Poppins SemiBold 600, 20px, centered
- **Inactive / secondary state:** Transparent/Light Green background, text `Dark Mode Green bar #0E3E3E`, same typography
- **Usage in modal:** Same component reused with 218px width, stacked vertically (primary at y:145, secondary at y:201, separated by 56px)

### Period Selector Toggle (Daily / Weekly / Monthly)
- **Container:** 358 × 60px, border radius 22px, background Light Green `#DFF7E2`, padding 6px 14px, gap 24px between pills
- **Active pill:** 95 × 50px, border radius 19px, fill Main Green `#00D09E`
- **Inactive pill:** 95 × 31px, border radius 10px or 19px, fill Light Green `#DFF7E2`
- **Label:** Poppins Regular 400, 15px, centred, color `#052224`
- **Switch-4 variant** (Analysis) has 4 options: Daily / Weekly / Monthly / Year

### Input Fields (Login)
- **Height:** 41px
- **Border radius:** 18px
- **Fill:** Light Green `#DFF7E2`
- **Placeholder:** Poppins Regular 400, 16px, opacity 45%, colour `#093030`
- **Password mask:** Poppins Regular 400, 12px, letter-spacing 70%, opacity 45%, colour `#0E3E3E`
- **Label above field:** Poppins Medium 500, 15px (Subtitle style), colour `#093030`
- **Eye toggle icon:** Positioned at right of password field (24.14 × 9px icon), component Eye-Pass with Eye-Off variant
- **No visible focus ring** in static design — *assumed* to use a border or shadow in interactive state

### Bottom Navigation
- **5 tabs:** Home, Analysis, Transactions, Category, Profile
- **Container:** Floats at bottom, border radius 70px 70px 0px 0px, fill Light Green `#DFF7E2`
- **Padding:** 36px top / 60px horizontal / 41px bottom
- **Tab gap:** 43px between icon hitboxes
- **Active icon:** "On" variant (filled icon, green tint — `Main Green #00D09E`)
- **Inactive icon:** "Off" variant (outlined icon, subdued fill)
- **No visible text labels** on bottom nav tabs in the sampled screens — icon-only

### Savings Ring / Donut Chart
- **Structure:** Two concentric ellipses (outer 107.71 × 107.71px, inner arc ~52 × 68px)
- **Track colour:** `#F1FFF3` (Background Green White and Letters) — stroke weight ~3.5px
- **Fill arc colour:** `#0068FF` (Ocean Blue Button) — stroke weight ~4.9–5px
- **Two rings visible** on the Analysis screen (Travel and Car goals side by side)
- **Label:** Percentage inside ring ("30%", "50%") in Poppins SemiBold 600, 20px, white text on coloured pill background

### Bar Chart (Analysis)
- **Bar width:** 6px each
- **Gap:** 23px between bars
- **Grouped:** Two bars per day (income + expense in different colours)
- **Colours:** `#00D09E` Main Green for income, `#6DB6FE` Light Blue for expenses (*inferred from fill assignments*)
- **Grid:** Dashed horizontal lines, `#6DB6FE` Light Blue, 0.5px, stroke dashes 2+2
- **Axis baseline:** `#0E3E3E` Dark Mode Green, 1px solid
- **Y-axis labels:** 1k / 5k / 10k / 15k in League Spartan Regular 14px, `#6DB6FE`
- **X-axis labels:** Mon–Sun in League Spartan Regular 14px, `#0E3E3E`

### Category Icon Row (Transactions)
- **Container:** 57 × 53px rectangle (not a circle), no explicit border radius on container
- **Icon centred** within container with ~15px padding
- **Multiple category icons:** Salary, Groceries, Rent, Food, Car (each a distinct SVG component)

### Profile Menu List Rows
- **Layout:** Row with `icon (57×53px) → label (Subtitle style)`, gap 13px between icon and text
- **Vertical gap:** 34px between rows
- **Icon uses fill_C0FQKJ** (transparent/empty fill — icon inherits its own colour)
- **Labels:** Poppins Medium 500, 15px, colour `#093030`
- **Rows:** Edit Profile, Security, Setting, Help, Logout

### Modal / Dialog (End Session)
- **Size:** 339 × 300px
- **Background:** White `#FFFFFF`
- **Border radius:** 20px
- **Title:** Poppins Bold 700, 20px, colour `#0E3E3E` ("end session")
- **Body text:** League Spartan Regular 400, 17px, colour `#363130`
- **Button pair:** Stacked vertically; Primary ("yes, end session") at y:145, Secondary ("cancel") at y:201; each 218 × 45px, centred
- **Overlay backdrop colour:** Not set in the modal frame itself — *assumed* semi-transparent dark overlay behind (standard modal pattern)
- **No drag handle** (this is a centred dialog, not a bottom sheet)

### Transaction List Row
- **Separator:** Single-pixel horizontal lines (`#F1FFF3` / `#00D09E` stroke) rather than card borders
- **Row anatomy:** Icon (57×53px) | Category label (Subtitle 15px) / Sub-label (Paragraph 13px) / Timestamp (12px SemiBold) | Amount (Subtitle 15px, blue for expense)
- **Amount colour:** Expense amounts in `#0068FF` Ocean Blue (not red)

---

## 2g. Interaction & Motion

- **Navigation model:** Tab-based primary navigation (5 tabs, bottom nav). Within each tab, stack-based push navigation (back arrow "bring back" component visible on all sub-screens).
- **Period selector:** Sliding pill within the toggle container — user taps a period label and the green pill moves to it.
- **Social auth:** Facebook and Google icon buttons visible on Login (below divider line).
- **Fingerprint auth:** "Use fingerprint to access" link visible on Login screen (Poppins SemiBold 600, 14px, `#0E3E3E`), linked in blue (`#0068FF`).
- **Modal trigger:** Logout → End session modal (centered dialog, not bottom sheet).
- **Transitions:** *Inferred* — clean slide left for stack push, fade for modal overlay. No explicit animation data in static file.

---

## 2h. Screen Inventory

| Screen | Node ID | Description | Key patterns present |
|---|---|---|---|
| 1 - A - Launch | 7020:3572 | Splash / launch screen | Hero colour, wordmark |
| 1 - B - Launch | 7038:218 | Launch variant | |
| 2 - A - Onboarding | 7020:3632 | Onboarding slide A | |
| 2 - B - Onboarding | 7038:225 | Onboarding slide B | |
| 3.0 - A - Login | 7020:3634 | Login / sign-up | Tab switcher (Log In / Sign Up), input fields, social auth (Facebook, Google), fingerprint link |
| 3.0 - A - Create Account | 7175:4492 | Create account | |
| 3.1 - A - Login (Forgot Password) | 7038:569 | Forgot password | |
| 3.2 - A - Security Pin | 7038:609 | PIN entry | |
| 7 - A - Quick Analysis | 7020:3688 | Analysis overlay / drawer | Bottom sheet pattern |
| 8 - A - Transaction | 7033:2595 | Transaction list | List rows, date grouping |
| 9 - A - Home | 7342:2818 | Main dashboard | Balance hero, ring/donut chart, income vs expense summary, transaction rows, period toggle, bottom nav |
| 9.2.1 - A - Daily | 7033:781 | Daily analysis view | |
| 9.2.1 - A - VisualDaily | 7136:2057 | Chart analysis | Bar chart, dual donut rings, period toggle (4 options), search + calendar toolbar |
| 9.4.x - Categories | 7114:1546+ | Category detail + add expense | Multiple variants per category |
| 9.4.9 - A/B - New Categories | 7230:3123 / 7230:3246 | Create category | |
| 9.5.0 - A - Profile | 7020:3844 | User profile | Avatar circle, list menu rows, dark header band |
| 9.5.1 - A - Edit Profile | 7068:949 | Edit profile form | |
| 9.5.2 - A - Security | 7068:998 | Security settings | |
| 9.5.2 - B/C - Change Pin | 7193:4534 / 7193:4596 | Change PIN + success | |
| 9.5.2 - D/E/F - Fingerprint | 7136:2232+ | Fingerprint setup flow | |
| 9.5.3 - A - Settings | 7064:2241 | App settings | |
| 9.5.3 - B - Notification Settings | 7136:3345 | Notification prefs | |
| 9.5.3 - E/F - Delete Account | 7136:3391 / 7187:4131 | Delete account | Destructive confirmation |
| 9.5.4.1 - A/B - Help Center | 7045:489 / 7073:1294 | Help + FAQ | |
| 9.5.4.2 - A/B - Online Support | 7073:2979 / 7113:2528 | Live chat / support | |
| 9.5.5 - A/B - Log Out | 7113:2955 / 7113:3349 | Logout flow | Modal trigger |
| End session (modal) | 7113:3115 | Logout confirm dialog | Centred dialog, two-button pattern, white card on overlay |
| Delete account (modal) | 7187:4023 | Delete account confirm | |
| New Category (sheet) | 7230:3110 | Add category bottom sheet | |

---

## 2i. Engineering Notes

- **Target platform:** Mobile web or native mobile (430 × 932px — iPhone 14 Pro Max). No desktop/tablet breakpoints observed.
- **Responsiveness model:** Fixed-width mobile. No responsive or fluid layout patterns visible in the static frames.
- **Input model:** Touch. All interactive targets use generous sizing (45px button height, 41px inputs, 57×53px icon tap targets).
- **Font availability:**
  - **Poppins** — available on [Google Fonts](https://fonts.google.com/specimen/Poppins). Import all weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold). Also requires Medium Italic.
  - **League Spartan** — available on [Google Fonts](https://fonts.google.com/specimen/League+Spartan). Import weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold).
- **Scrollable screens:** The Analysis screen (7136:2057) is 430 × 1118px — 186px taller than the viewport. Implement with `overflow-y: scroll` and ensure bottom nav is fixed.
- **Component boundaries:**
  - Bottom Navigation: self-contained, fixed position, renders on all main tab screens
  - Period Toggle: self-contained, reusable in both Home and Analysis
  - Transaction Row: self-contained list item
  - Modal/Dialog: self-contained overlay layer
  - Category Icon: self-contained with icon SVG + container background
- **No red in the design.** Expenses / negative values use `#0068FF` (blue). Do not introduce red for expense states — it breaks brand intention.
- **"Titlle" style name has a double-L typo.** This is the canonical name in Figma — reference it consistently but note it's a typo in the source file.
- **Savings progress bar uses an overlay technique:** Two rectangles (full-width dark pill + shorter light pill overlaid right-aligned) create a filled progress bar. Use a single `progress` element with CSS instead.
- **Screenshots captured:** `finwise/screenshots/finwise-home.png`, `finwise-login.png`, `finwise-modal-logout.png`

---

## 2j. Open Questions & Risks

1. **No red semantic colour.** Expenses use blue (`#0068FF`). Is this intentional for the prototype? If the team expects red for negative values, this needs a design decision before build. *Default assumption: follow the Figma — use blue for expenses.*

2. **Missing empty state designs.** No empty state screens (zero transactions, no goals set) were found in the sampled screens. *Default assumption: show a light placeholder card with a "Get started" CTA using the standard card component.*

3. **Bottom nav tab labels.** The nav bar component uses icon-only tabs in the sampled screens. Some mockups in similar apps label tabs. Confirm whether labels appear below icons. *Default assumption: icon-only based on what's visible.*

4. **Input focus state.** No focused input frame was observed. The focus ring / border change for inputs is undefined. *Default assumption: add a `2px solid #00D09E` border on focus.*

5. **Overlay backdrop for modals.** The End Session modal frame has no backdrop — it is positioned as a standalone frame. *Default assumption: `rgba(5, 34, 36, 0.6)` dark semi-transparent backdrop (using `Background dark mode` `#052224` base).*

6. **"bring back" back-arrow icon.** Used consistently as a back-navigation component (19 × 16px). Exact SVG path not extracted. May need to source from Figma directly or substitute with a standard chevron-left icon.

7. **Analysis screen bar chart uses two bars per day** (income + expense side-by-side). The exact colour assignment (which bar is income, which is expense) should be verified against the full-resolution screenshot.

8. **Login button width inconsistency.** The primary CTA on Login is 207px centred (not full-width). On the modal it is 218px centred. Prototype builders should match per-screen, not standardise to one width.

---

## Build Notes

The 5 most important things for any prototype builder to know:

1. **Two Google Fonts required:** Import Poppins (weights 300, 400, 500, 600, 700 + Medium Italic) and League Spartan (weights 300, 400, 500, 600). Both are free on Google Fonts.

2. **Background is `#F1FFF3` — warm mint, not white.** The main content zone is this pale green. Using `#FFFFFF` or `#F5F5F5` will look wrong immediately.

3. **Expenses are blue, not red.** Amount values like `-$100.00` use `#0068FF` (Ocean Blue). Do not apply red/danger colour to negative numbers.

4. **The hero zone is Main Green `#00D09E` and covers the top ~180–290px of each screen.** A large rounded rectangle (border-radius 70px 70px 0 0) in `#F1FFF3` floats over it, creating the two-zone layout. This is the core visual pattern — get this right first.

5. **Bottom nav is fixed, icon-only, 5 tabs, Light Green background.** It sits at the bottom with generous top-padding (36px) and curved top corners (border-radius 70px 70px 0 0). The active tab icon uses `#00D09E` Main Green fill; inactive icons are subdued.

---

*Spec auto-discovered by `/build-html-prototype` and `/figma-prototype-builder`. Run either skill without re-providing the Figma URL.*
