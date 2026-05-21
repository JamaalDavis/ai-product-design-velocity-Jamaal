# FinWise Design System

> Extracted from the FinWise Mobile App UI/UX Kit (Figma community file).  
> Follows the [design.md](https://github.com/google-labs-code/design.md) schema.  
> Values marked `[inferred]` are derived from observed patterns. Values marked `[not found]` were not present in the source file.

---

## Metadata

| Field | Value |
|---|---|
| Product | FinWise — Budget Tracker & Personal Finance App |
| Platform | Mobile (iOS, Android) |
| Frame size | 430 × 932 px (iPhone 14 / 15 standard) |
| Modes | Light mode, Dark mode |
| Figma source | `IpQ9FJ0U7jBq9NPbGaqJdk` |

---

## 1. Colour Tokens

### 1.1 Full Palette

| Token name | Hex | RGB | Role |
|---|---|---|---|
| `color.green.caribbean` | `#00D09E` | rgb(0, 208, 158) | Primary brand / CTA fill |
| `color.green.light` | `#DFF7E2` | rgb(223, 247, 226) | Surface / bottom nav background |
| `color.green.honeydew` | `#F1FFF3` | rgb(241, 255, 243) | Page background (light mode) |
| `color.green.cyprus` | `#0E3E3E` | rgb(14, 62, 62) | Section headers / prominent text |
| `color.green.letters` | `#093030` | rgb(9, 48, 48) | Body text / icons (light mode) |
| `color.green.fence` | `#052224` | rgb(5, 34, 36) | Dark mode background surface |
| `color.green.void` | `#031314` | rgb(3, 19, 20) | Dark mode deepest background |
| `color.blue.light` | `#6DB6FE` | rgb(109, 182, 254) | Income indicator / secondary accent |
| `color.blue.vivid` | `#3299FF` | rgb(50, 153, 255) | Expense indicator / blue CTA |
| `color.blue.ocean` | `#0068FF` | rgb(0, 104, 255) | Blue CTA (high-emphasis variant) |
| `color.white` | `#FFFFFF` | rgb(255, 255, 255) | Card backgrounds / modal surfaces |
| `color.text.muted` | `[inferred] ~#7A9E9E` | — | Placeholder / disabled text |
| `color.error` | `[not found]` | — | No explicit error red in palette |
| `color.success` | `#00D09E` | — | Reuses primary green for success states |

### 1.2 Semantic Colour Mapping

| Semantic role | Light mode token | Dark mode token |
|---|---|---|
| `background.page` | `color.green.honeydew` `#F1FFF3` | `color.green.void` `#031314` |
| `background.surface` | `color.white` `#FFFFFF` | `color.green.fence` `#052224` |
| `background.surface.raised` | `color.green.light` `#DFF7E2` | `color.green.cyprus` `#0E3E3E` |
| `color.primary` | `color.green.caribbean` `#00D09E` | `color.green.caribbean` `#00D09E` |
| `color.on-primary` | `color.green.letters` `#093030` | `color.green.letters` `#093030` |
| `color.text.primary` | `color.green.letters` `#093030` | `color.white` `#FFFFFF` |
| `color.text.heading` | `color.green.cyprus` `#0E3E3E` | `color.green.caribbean` `#00D09E` |
| `color.text.placeholder` | `[inferred] #7A9E9E` | `[inferred] #2A5050` |
| `color.icon.default` | `color.green.letters` `#093030` | `color.white` `#FFFFFF` |
| `color.icon.active` | `color.green.caribbean` `#00D09E` | `color.green.caribbean` `#00D09E` |
| `color.income` | `color.blue.light` `#6DB6FE` | `color.blue.light` `#6DB6FE` |
| `color.expense` | `color.blue.vivid` `#3299FF` | `color.blue.vivid` `#3299FF` |
| `color.nav.background` | `color.green.light` `#DFF7E2` | `color.green.cyprus` `#0E3E3E` |
| `color.header.background` | `color.green.caribbean` `#00D09E` | `color.green.caribbean` `#00D09E` |

### 1.3 Icon Colour System

Category icon tiles use a two-state system:

| State | Background | Icon colour |
|---|---|---|
| Default | `#6DB6FE` (Light Blue) | White |
| Pressed / Active | `#3299FF` (Vivid Blue) | White |

Navigation bar icons:

| State | Icon colour | Background |
|---|---|---|
| Default | `#093030` (Letters) | Transparent |
| Active | `#FFFFFF` White | `#00D09E` Caribbean Green circle |

---

## 2. Typography

### 2.1 Font Families

| Family | Role | Weights available |
|---|---|---|
| **Poppins** | Titles, subtitles, UI labels | Thin (100), Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700) |
| **League Spartan** | Body subtext, supporting copy | Regular (400) |
| **Inter** | Design system labels only (not in app UI) | Bold (700) |

### 2.2 Type Scale

| Token | Family | Weight | Size | Line height | Letter spacing | Case | Usage |
|---|---|---|---|---|---|---|---|
| `type.title` | Poppins | SemiBold (600) | 20px | 22px | 0% | Title Case | Screen titles, card headings |
| `type.subtitle` | Poppins | Medium (500) | 15px | Auto | 0% | Title Case | Section subtitles, card sub-labels |
| `type.paragraph` | Poppins | Light (300) | 13px | 15px | 0% | Sentence | Body copy, descriptions |
| `type.subtext` | League Spartan | Regular (400) | 14px | Auto | 0% | Sentence | Supporting text, metadata |
| `type.label.large` | Poppins | SemiBold (600) | `[inferred]` 16px | Auto | 0% | Sentence | Button labels |
| `type.label.small` | Poppins | Medium (500) | `[inferred]` 12px | Auto | 0% | Sentence | Tags, chips, nav labels |
| `type.amount` | Poppins | Bold (700) | `[inferred]` 24–32px | Auto | 0% | — | Financial figures ($7,783.00) |
| `type.caption` | Poppins | Light (300) | `[inferred]` 11px | Auto | 0% | — | Timestamps, helper text |

### 2.3 Usage Notes

- Poppins is the **primary typeface** across all UI. League Spartan appears only in supporting/secondary text.
- Financial amounts (`$7,783.00`, `$4,120.00`) use a larger Bold weight to create visual hierarchy.
- Heading colour in light mode: `#0E3E3E` (Cyprus). In dark mode: `#00D09E` (Caribbean Green).
- Body text colour: `#093030` (light mode) / `#FFFFFF` (dark mode).

---

## 3. Spacing

### 3.1 Spacing Scale

Base unit: **1px**. Observed spacing values follow a loose 8px grid.

| Token | Value | Usage |
|---|---|---|
| `spacing.2xs` | 4px | `[inferred]` — tight internal gaps |
| `spacing.xs` | 8px | `[inferred]` — icon-to-label gap |
| `spacing.sm` | 13px | Icon-label gap (profile menu items) |
| `spacing.md` | 16px | `[inferred]` — standard padding unit |
| `spacing.lg` | 24px | `[inferred]` — section spacing |
| `spacing.xl` | 34px | Gap between profile menu rows |
| `spacing.2xl` | 43px | Gap between bottom nav tab icons |
| `spacing.3xl` | 60px | Bottom nav left/right padding |

### 3.2 Component Padding Conventions

| Component | Padding |
|---|---|
| Bottom navigation bar | T: 36px, B: 41px, L/R: 60px |
| Primary button | `[inferred]` ~12px top/bottom, auto left/right |
| Category icon button | `[inferred]` ~14px all sides |
| Toggle / pill selector | T/B: 6px, L: 31px, R: 29px |
| Screen content area | `[inferred]` L/R: 20–24px |
| Modal / dialog | `[inferred]` ~24px all sides |

---

## 4. Layout

### 4.1 Grid & Frame

| Property | Value |
|---|---|
| Canvas frame | 430 × 932 px |
| Frame corner radius | 40px |
| Content area width | ~390px (430 − 40px L/R margin) `[inferred]` |
| Columns | `[not found]` — no explicit grid columns defined |
| Gutters | `[inferred]` ~20px |
| Max content width | 390px |
| Breakpoints | Mobile only — no responsive breakpoints |

### 4.2 Screen Anatomy

```
┌─────────────────────────────────┐  ← 40px corner radius
│  Header / Status bar area       │  bg: #00D09E (Caribbean Green)
├─────────────────────────────────┤
│                                 │
│  Content area                   │  bg: #F1FFF3 (Honeydew) light
│  L/R padding: ~20px             │  bg: #031314 (Void) dark
│                                 │
├─────────────────────────────────┤
│  Bottom Navigation Bar  108px   │  bg: #DFF7E2 light / #0E3E3E dark
└─────────────────────────────────┘
```

---

## 5. Border Radius

| Token | Value | Used on |
|---|---|---|
| `radius.pill` | 30px | Primary & ghost buttons |
| `radius.pill.full` | 100px | Menu switch / toggle pill selectors |
| `radius.card` | 20px | Modal dialogs, cards |
| `radius.tile` | 22px | Category icon tiles, chip filters |
| `radius.screen` | 40px | Screen frame container |
| `radius.sm` | `[inferred]` 8px | Input fields, dropdowns |
| `radius.circle` | 50% | Avatar, loading animation circles |

---

## 6. Elevation & Shadow

| Token | Value | Usage |
|---|---|---|
| `shadow.card` | `[not found]` | No shadow styles defined in file |
| `shadow.modal` | `[inferred]` subtle drop shadow | Modals appear to float above dim overlay |
| `shadow.nav` | `[inferred]` top border or subtle shadow | Bottom nav separator |

---

## 7. Components

### 7.1 Button

#### Variants

| Variant | Fill | Border | Text colour | Border radius | Height |
|---|---|---|---|---|---|
| Primary | `#00D09E` Caribbean Green | None | `#093030` | 30px | 45px |
| Secondary / Ghost | `#DFF7E2` Light Green | None | `#0E3E3E` | 30px | 45px |
| Outlined | Transparent | 1px `#00D09E` | `#00D09E` | 30px | `[inferred]` 45px |
| Destructive | `#00D09E` (same style) | None | `#093030` | 30px | 45px |

#### Dark mode

| Variant | Fill | Text colour |
|---|---|---|
| Primary | `#00D09E` | `#093030` |
| Secondary / Ghost | `#0E3E3E` | `#FFFFFF` |
| Outlined | Transparent | `#00D09E` |

#### States

| State | Visual change |
|---|---|
| Default | As specified above |
| Pressed | `[inferred]` slight opacity reduction or darker fill |
| Disabled | `[inferred]` reduced opacity (~40%) |

#### Usage notes
- All buttons use fully rounded pill shape (radius 30px).
- Primary is always the main CTA; secondary is used for cancel/dismiss.
- Button width is typically full-width within its container or fixed ~218px for modals.
- Label uses Poppins SemiBold, ~16px, sentence case.

---

### 7.2 Navigation Bar (Bottom Tab Bar)

#### Anatomy

```
┌──────────────────────────────────────────────────────┐  h: 108px
│  [Home]  [Analysis]  [Transactions]  [Category]  [Profile]  │
└──────────────────────────────────────────────────────┘
  pad L/R: 60px   pad T: 36px   pad B: 41px   gap: 43px
```

#### Tabs

| Tab | Icon | Label |
|---|---|---|
| Home | House outline | Home |
| Analysis | Magnifying glass / chart | Analysis |
| Transactions | Double arrows | Transactions |
| Category | Stacked layers | Category |
| Profile | Person outline | Profile |

#### States

| State | Icon | Background |
|---|---|---|
| Default | `#093030` outline | Transparent |
| Active | `#FFFFFF` on `#00D09E` circle | Circle badge behind icon |

#### Colours

| Mode | Background | Active accent |
|---|---|---|
| Light | `#DFF7E2` Light Green | `#00D09E` Caribbean Green |
| Dark | `#0E3E3E` Cyprus | `#00D09E` Caribbean Green |

---

### 7.3 Input Field

#### Variants

| Variant | Description |
|---|---|
| Text input | Single-line, placeholder text |
| Password | Single-line + eye icon (show/hide toggle) |
| Phone | Prefix (`+ 123`) + number field |
| Date | Formatted `DD / MM / YYY` placeholder |
| Dropdown | Label + chevron; expands to list below |
| Textarea | Multi-line, taller height |

#### Specs

| Property | Light mode | Dark mode |
|---|---|---|
| Background | `#DFF7E2` or `#F1FFF3` | `#0E3E3E` or `#052224` |
| Border | None visible (no stroke) `[inferred]` | None visible |
| Border radius | `[inferred]` ~8–12px | Same |
| Text colour | `#093030` | `#FFFFFF` |
| Placeholder colour | `[inferred]` ~`#7A9E9E` | `[inferred]` ~`#2A5050` |
| Height | `[inferred]` ~45px single-line | Same |
| Padding | `[inferred]` ~12px horizontal | Same |

#### Active / focus state
- Active input shows a `#00D09E` green toggle indicator (seen on Date field).
- No visible focus ring observed; likely relies on native platform behaviour `[inferred]`.

#### Password eye toggle
- Icons: open eye (visible) / closed eye (hidden)
- Colour: `#093030` or `[inferred]` muted teal

---

### 7.4 Dropdown

#### States

| State | Appearance |
|---|---|
| Collapsed | Label row + chevron pointing down; background `#DFF7E2` |
| Expanded | Chevron rotates up; list of options appears below in `#DFF7E2` container |

#### List items (light mode)

- Background: `#DFF7E2` / `#F1FFF3`
- Text: `#093030` Poppins Regular
- Selected item: `#00D09E` fill, white or dark text

#### Dark mode equivalent

- Collapsed bg: `#0E3E3E`
- Expanded list bg: `#0E3E3E` / `#052224`

#### Options seen in file

Food, Transport, Groceries, Rent, Gifts, Medicine, Entertainment, Saving

---

### 7.5 Category Icon Button (Tile)

#### Specs

| Property | Value |
|---|---|
| Size | ~57 × 53px |
| Border radius | 22px |
| Default fill | `#6DB6FE` Light Blue |
| Pressed/active fill | `#3299FF` Vivid Blue |
| Icon colour | White |
| Icon style | Line / outline |

#### Categories

Primary: Food, Transport, Groceries, Rent, Gifts, Medicine, Entertainment, Saving, + (Add new)  
Secondary: Travel, House/Home, Car, Wedding

---

### 7.6 Pill / Chip Filter Button

Used for time period filters (Daily / Weekly / Monthly / Year) and tab selectors.

| Property | Value |
|---|---|
| Border radius | 22px |
| Height | ~40–61px (varies by context) |
| Default fill | `#DFF7E2` Light Green |
| Active fill | `#00D09E` Caribbean Green |
| Text colour (default) | `#093030` |
| Text colour (active) | `#093030` or white |
| Padding | T/B: 6px, L: 31px, R: 29px |
| Gap between chips | `[inferred]` ~8px |

---

### 7.7 Card

Used for summary panels (balance, income/expense summary, goal tracking).

| Property | Light mode | Dark mode |
|---|---|---|
| Background | `#FFFFFF` or `#DFF7E2` | `#0E3E3E` or `#052224` |
| Border radius | 20px | 20px |
| Shadow | `[not found]` | `[not found]` |
| Padding | `[inferred]` ~16–20px | Same |

#### Income / Expense summary card variant

- Has a coloured icon tile (Income: `#6DB6FE`; Expense: `#3299FF`) in top-left
- Amount in Poppins Bold, large
- Label in Poppins Light, small
- Two-card layout side-by-side

---

### 7.8 Modal / Dialog

| Property | Value |
|---|---|
| Width | ~339px |
| Height | ~300px (content-driven) |
| Background | `#FFFFFF` |
| Border radius | 20px |
| Title style | `type.title` — Poppins SemiBold 20px, `#0E3E3E` |
| Body text | Poppins Regular ~13–14px, muted |
| Button layout | Stack vertical: Primary CTA → Ghost/Cancel |
| Overlay | `[inferred]` semi-transparent dark scrim |

---

### 7.9 Accordion

| Property | Value |
|---|---|
| Question text | Poppins Medium ~14px, `#093030` |
| Chevron | Down (collapsed) / Up (expanded) |
| Answer text | Poppins Light ~13px, `#093030` |
| Background | `#DFF7E2` or `#F1FFF3` |
| Border radius | `[inferred]` ~8px |
| Divider | `[inferred]` 1px `#052224` or none |

---

### 7.10 Toggle Switch

| State | Background | Knob colour |
|---|---|---|
| Off | `[inferred]` `#DFF7E2` | White |
| On | `#00D09E` Caribbean Green | White |

---

### 7.11 Checkbox & Radio

| Type | Default | Pressed/Selected |
|---|---|---|
| Checkbox | Outline square, transparent fill | `#00D09E` fill + white tick |
| Radio | Outline circle, transparent fill | `#00D09E` fill + white dot |
| Notification bell | Outline | `#00D09E` filled |

---

### 7.12 Avatar

| Property | Value |
|---|---|
| Shape | Circle |
| Sizes observed | ~117px (large profile) |
| Border | `[inferred]` 2px `#00D09E` ring on active state |
| Fallback | Initials on `#DFF7E2` background `[inferred]` |

---

### 7.13 App Logo

| Variant | Background | Icon | Wordmark |
|---|---|---|---|
| Primary (dark) | `#00D09E` rounded square | White bar chart with upward arrow | "FinWise" white Poppins Bold |
| Secondary (light) | `#DFF7E2` rounded square | `#00D09E` bar chart with arrow | "FinWise" `#00D09E` Poppins Bold |

---

### 7.14 Loading Animation

Used for async actions (login, data save):

| Step | Visual |
|---|---|
| Loading 1 | Single dot |
| Loading 2 | Two dots |
| Loading 3 | Three dots |
| Success | Checkmark circle (`#FFFFFF` on `#00D09E`) |
| Error | X circle (`#FFFFFF` on `#00D09E`) |

Container: Caribbean Green `#00D09E` rounded rectangle.

---

### 7.15 Charts & Data Visualisation

#### Bar chart (Income & Expenses)

| Property | Value |
|---|---|
| Bars | Poppins `[inferred]` — green bars |
| X-axis labels | Day abbreviations (Mon–Sun) |
| Y-axis labels | Dollar values |
| Accent colour | `#00D09E` or `#3299FF` |

#### Donut / Pie chart

| Property | Value |
|---|---|
| Segments | Blue (`#3299FF`) for primary, lighter for others |
| Labels | Percentage inside or beside segment |
| Legend | Colour dot + label below chart |

#### Progress bar (Budget tracking)

| Property | Value |
|---|---|
| Track | `#DFF7E2` Light Green |
| Fill | `#00D09E` Caribbean Green |
| Height | `[inferred]` ~8px |
| Label | Percentage text beside bar |

#### Circular progress (Goal tracking)

- Donut ring: `#00D09E` on `#DFF7E2`
- Category icon centred inside
- Percentage label below

---

### 7.16 Calendar

| Property | Value |
|---|---|
| Header | Month + Year dropdowns |
| Day labels | Mon–Sun abbreviated |
| Selected date | `#00D09E` filled circle |
| Today | `[inferred]` outlined circle |
| Other dates | Plain text `#093030` |
| Background | `#F1FFF3` or `#DFF7E2` |

---

### 7.17 Fingerprint / Biometric

| Property | Value |
|---|---|
| Icon | Fingerprint line illustration |
| Background | `#DFF7E2` circle |
| Size | ~120px |
| Colour | `#00D09E` |

---

## 8. Icon System

### 8.1 Navigation Icons

Line/outline style. 5 icons only: Home, Analysis, Transactions, Category, Profile.

| Icon | Size | Style |
|---|---|---|
| Home | ~25 × 31px | Outline |
| Analysis | ~31 × 30px | Outline |
| Transactions | ~33 × 25px | Outline (double arrows) |
| Category | ~27 × 23px | Outline (stacked) |
| Profile | ~22 × 27px | Outline (person) |

### 8.2 Category Icons

Contained inside square tiles (border-radius 22px). Line style on coloured backgrounds.

Primary set: Food (cutlery), Transport (bus), Groceries (bag), Charity (hand with coin), Gift (box), Medicine (pill), Tag/Discount, Savings (stack), Add (+)

Secondary set: Travel (plane), House, Car, Wedding (rings)

### 8.3 Functional / UI Icons

| Icon | Usage |
|---|---|
| Eye open / closed | Password show/hide |
| Chevron down / up | Dropdown, accordion toggle |
| Check circle | Success state |
| X circle | Error state |
| Calendar | Date picker trigger |
| Fingerprint | Biometric auth |
| Toggle switch | On/off preference |
| Checkbox (square) | Multi-select |
| Radio (circle) | Single-select |
| Bell | Notification |
| Lock | Security / password |
| Arrow up-right | Income indicator |
| Arrow down-right | Expense indicator |

---

## 9. Light Mode vs Dark Mode

### 9.1 Colour Swaps

| Element | Light mode | Dark mode |
|---|---|---|
| Page background | `#F1FFF3` Honeydew | `#031314` Void |
| Surface (cards, modals) | `#FFFFFF` White | `#052224` Fence Green |
| Elevated surface (nav, chips) | `#DFF7E2` Light Green | `#0E3E3E` Cyprus |
| Primary brand accent | `#00D09E` (same) | `#00D09E` (same) |
| Heading text | `#0E3E3E` Cyprus | `#00D09E` Caribbean Green |
| Body text | `#093030` Letters | `#FFFFFF` White |
| Icon default | `#093030` Letters | `#FFFFFF` White |
| Input field bg | `#DFF7E2` | `#0E3E3E` |

### 9.2 Key rules

- Caribbean Green `#00D09E` is **invariant** — used identically in both modes.
- Headers / nav bars use the same Caribbean Green fill in both modes.
- In dark mode, heading labels switch to Caribbean Green instead of Cyprus.
- Category icon tiles keep the same Blue tones in both modes.

---

## 10. Usage Guidelines

### 10.1 Colour

**Do:**
- Use `#00D09E` Caribbean Green for all primary CTAs and branded headers.
- Use `#DFF7E2` Light Green for surfaces, chips, and secondary containers.
- Use `#093030` for all body text in light mode — never pure black.
- Use blue tones (`#6DB6FE`, `#3299FF`) exclusively for income/expense data — not for generic UI actions.

**Don't:**
- Don't use Ocean Blue `#0068FF` for anything other than an alternative blue CTA button.
- Don't introduce colours outside the defined palette.
- Don't use red for errors — there is no error red in this palette; use contextual messaging instead `[inferred guidance]`.
- Don't use white text on Light Green `#DFF7E2` backgrounds — contrast is insufficient.

### 10.2 Typography

**Do:**
- Use Poppins SemiBold for titles and button labels.
- Use Poppins Light for body/paragraph text.
- Use League Spartan only for secondary/supporting subtext.
- Apply Title Case to titles and subtitles (as per text style definitions).

**Don't:**
- Don't mix Poppins and League Spartan in the same line or label.
- Don't use weights lighter than Light (300) for small text (readability).
- Don't use all-caps except where the design explicitly shows it.

### 10.3 Buttons

**Do:**
- Always pair a primary button with a ghost/secondary button for cancel/dismiss actions.
- Keep button labels concise — 1–3 words.
- Use full-width buttons in modals and forms.

**Don't:**
- Don't use more than one primary button per screen section.
- Don't use the blue CTA buttons for generic actions — reserve for income/expense contexts.

### 10.4 Spacing & Layout

**Do:**
- Respect the 43px gap between navigation tab icons.
- Apply consistent 20px L/R page margins to content areas.
- Use 34px vertical gap between major menu/list groups.

**Don't:**
- Don't crowd cards or input fields — allow breathing room (minimum 13px gap between elements).

### 10.5 Imagery & Avatars

**Do:**
- Crop avatars to circles.
- Use the App Logo in both dark-bg and light-bg variants as appropriate.
- Use the FinWise bar-chart-with-arrow as the canonical logo mark.

**Don't:**
- Don't recolour the logo icon — it is always white or `#00D09E` depending on background.

### 10.6 Dark Mode

**Do:**
- Swap surfaces and backgrounds as defined in section 9.
- Keep all Caribbean Green accents at full saturation — do not tint or mute.
- Switch heading text from Cyprus `#0E3E3E` to Caribbean Green `#00D09E` in dark mode.

**Don't:**
- Don't use Honeydew `#F1FFF3` as a surface in dark mode.
- Don't apply pure white `#FFFFFF` as a background in dark mode.

---

## Appendix: Confirmed Hex Values (from Figma source)

| Name in Figma | Hex |
|---|---|
| Main Green | `#00D09E` |
| Light Green | `#DFF7E2` |
| Background Green White and Letters | `#F1FFF3` |
| Dark Mode Green Bar | `#0E3E3E` |
| Letters and Icons | `#093030` |
| Background dark mode and letters | `#052224` |
| Dark mode Green Black | `#031314` |
| Light Blue button | `#6DB6FE` |
| Blue Button | `#3299FF` |
| Ocean Blue Button | `#0068FF` |

| Name in Figma (typography) | Family | Style | Size | Line height |
|---|---|---|---|---|
| Titlle (sic) | Poppins | SemiBold | 20px | 22px |
| Subtitle | Poppins | Medium | 15px | Auto |
| Paragraph | Poppins | Light | 13px | 15px |
| Subtext | League Spartan | Regular | 14px | Auto |
