# FinWise — Figma Design Spec
*Extracted from Figma file: JshRHiNqlhVk3ixF4cIrgK*
*Date: 2026-05-24*
*Screens sampled: 1-A-Launch (7020:3572), 4-A-Home (7033:352), 3.0-A-Login (7020:3634), 9-A-Home-Bottom-Navigation (7342:2818)*
*Tool: /figma-make-spec*

---

## 2a. Brand Identity

- **Personality:** Clean, aspirational, modern fintech. Warm and approachable without being playful. Confidence-forward.
- **Tone:** Aspirational yet accessible. "Retire earlier. Spend smarter." — motivational, not corporate.
- **Logo:** "FinWise" wordmark in Poppins SemiBold. Paired with a stylised chart/graph SVG icon in dark teal (`#0E3E3E` stroke) on the primary green background.
- **Iconography:** Filled category icons with a soft rounded style (Food, Groceries, Rent, Transport, etc.). Circular icon containers with light teal fill.
- **Illustration style:** None observed. UI is data-first with progress bars and charts.
- **Motion:** Assumed functional and subtle. *Assumption.*

---

## 2b. Colour System

| Role | Hex | Usage |
|---|---|---|
| Background (light) | `#F1FFF3` | Screen background, base layer |
| Surface / card | `#DFF7E2` | Input fields, card fills, notification badge, switch bg |
| Primary CTA / brand | `#00D09E` | Buttons, active tab indicator, main screen fill, progress bar |
| Blue accent | `#0068FF` | Expense amounts, link highlights |
| Blue mid | `#3299FF` | Sign-up link highlight |
| Blue light | `#6DB6FE` | Light blue UI accents |
| Text primary | `#052224` | Body text on light backgrounds, dark headings |
| Text secondary / icons | `#093030` | Labels, icon fills, secondary text |
| Dark surface | `#0E3E3E` | Dark mode green bar, inactive button text |
| Dark bg (dark mode) | `#052224` | Dark mode screen background |
| White | `#FFFFFF` | Text on primary green, status bar text |

---

## 2c. Typography System

| Role | Font family | Size | Weight | Line height |
|---|---|---|---|---|
| Display / hero | Poppins | 52px | SemiBold 600 | 57px |
| Heading 1 | Poppins | 30px | SemiBold 600 | 22px |
| Heading 2 | Poppins | 20px | SemiBold 600 | 22px |
| Subtitle / card title | Poppins | 15px | Medium 500 | auto |
| Body | League Spartan | 14px | Regular 400 | auto |
| Paragraph / caption | League Spartan | 13px | Light 300 | 15px |
| Label (tab, badge) | Poppins | 12px | Regular 400 | auto |
| Amount / balance | Poppins | 24px | Bold 700 | auto |
| Input placeholder | Poppins | 16px | Regular 400 | 14px |

**Notes:** Title case used across most heading/label styles. League Spartan for body copy. Both fonts on Google Fonts.

---

## 2d. Spacing & Sizing

| Property | Value |
|---|---|
| Screen dimensions | 430 × 932px |
| Screen border radius | 40px |
| Horizontal screen padding | 37–38px |
| Input field dimensions | 356 × 41px |
| Input border radius | 18px |
| Input fill | `#DFF7E2` |
| CTA button dimensions | 207 × 45px |
| CTA button radius | ~30px |
| Switch outer radius | 22px |
| Notification badge radius | 25.71px |
| Bottom nav padding | 36px/60px/41px |
| Bottom nav gap | 43px |
| Bottom nav radius | 70px 70px 0 0 |
| Icon container size | 57 × 53px |

---

## 2e. Design System Architecture

- **Maturity:** Established component library with named variants
- **Naming:** Screen numbering system (e.g. "9.4.3 - A - Groceries")
- **Token usage:** Named colour tokens consistently applied (`Main Green`, `Light Green`, `Letters and Icons`, `Font 2`)
- **Variants:** Button (Activate/Inactive), Bottom Nav tabs (On/Off), Eye-Pass, Switch-2 (Daily/Weekly/Monthly)

---

## 2f. Component Patterns

### Primary CTA Button
- 207px wide × 45px tall, ~30px radius
- Active: `#00D09E` fill, `#FFFFFF` text (Poppins SemiBold 20px)
- Inactive: `#DFF7E2` fill, `#0E3E3E` text

### Input Fields
- 356 × 41px, 18px radius, `#DFF7E2` fill
- Label: Poppins Medium 15px `#093030`
- Placeholder: Poppins Regular 16px `#093030` at 45% opacity

### Bottom Navigation
- 5 tabs: Home, Analysis, Transactions, Category, Profile
- `#DFF7E2` fill, 70px 70px 0 0 radius
- Active: `#00D09E`, Inactive: dark teal

### Segment Switch (Period Selector)
- 3 options: Daily | Weekly | Monthly
- Outer: `#DFF7E2`, 22px radius, 358×60px
- Active pill: `#00D09E`, 95×50px, 19px radius

### Progress Bars
- Track: `#DFF7E2`, 27px height, 13.5px radius
- Fill: `#00D09E`

---

## 2g. Interaction & Motion

- **Navigation:** Bottom tab bar (5 tabs)
- **Period selector:** Horizontal segment switch
- **Transitions:** Standard push navigation assumed

---

## 2h. Screen Inventory

| Screen | Node ID | Description | Key patterns |
|---|---|---|---|
| 1-A-Launch | 7020:3572 | Splash / brand screen | Logo, primary green fill |
| 4-A-Home | 7033:352 | Main dashboard | Balance, progress bar, transaction list |
| 3.0-A-Login | 7020:3634 | Login / sign up | Inputs, social login, fingerprint |
| 9-A-Home-Bottom-Nav | 7342:2818 | Home + bottom nav | Full home + nav pattern |

**Downloaded screenshots:**
- `finwise/screenshots/home-screen.png` (860×1864px @2x)
- `finwise/screenshots/home-nav.png` (860×1864px @2x)
- `finwise/screenshots/launch-screen.png` (860×1864px @2x)

---

## 2i. Engineering Notes

- **Mobile app:** 430px fixed frame in Figma
- **Landing page:** Desktop-first responsive web (1440px → 375px)
- **Fonts:** Poppins + League Spartan via Google Fonts
- **Phone mockup:** Use `home-screen.png` in CSS frame with 40px border radius + floating overlay cards

---

## 2j. Open Questions & Risks

1. Landing page sections (Features, Pricing) must be inferred — no dedicated frames in Figma
2. Floating cards in hero are custom HTML, not Figma components
3. Pricing tiers: placeholder — no pricing screen in file
4. Dark mode variant exists in Figma; landing page is light mode only

---

## Build Notes

1. **Fonts:** Poppins (headings, CTAs) + League Spartan (body) from Google Fonts
2. **Background:** `#F1FFF3` — pale mint green, NOT white
3. **Primary green:** `#00D09E` — CTAs, active states, accent text
4. **Dark text:** `#052224` — deep dark teal, NOT pure black
5. **Phone mockup:** `screenshots/home-screen.png` in CSS phone frame, 40px radius, floating overlay cards on top
6. **Bottom nav inside mockup:** `#DFF7E2` background with 70px 70px 0 0 radius
