# LinkUp.com B2B Industrial Marketplace

## Tone
Professional, authoritative, trustworthy. Industrial utility with premium polish. Data-forward, no unnecessary decoration.

## Visual Direction
Clean information hierarchy with deliberate color coding. Blue (primary) for authority and CTAs. Green (secondary) for approval, success, and secondary actions. Dark navy sidebar anchors the entire interface with visual weight and navigation clarity.

## Color Palette (OKLCH)
| Use                | Token            | L    | C     | H   | Visual          |
|--------------------|------------------|------|-------|-----|-----------------|
| Primary CTA        | primary          | 0.50 | 0.15  | 260 | Industrial blue |
| Secondary / Status | secondary        | 0.55 | 0.15  | 160 | Approval green  |
| Sidebar / Nav      | sidebar          | 0.12 | 0     | 0   | Dark navy       |
| Background         | background       | 0.98 | 0     | 0   | Off-white       |
| Card Surface       | card             | 0.96 | 0     | 0   | Light grey      |
| Border             | border           | 0.88 | 0     | 0   | Subtle divider  |

## Typography
- **Display Font**: General Sans (geometric, industrial, strong weight for headings)
- **Body Font**: DM Sans (neutral, readable at all sizes, 14–16px body)
- **Mono Font**: JetBrains Mono (data tables, timestamps, precision values)

## Structural Zones
| Zone             | Background          | Treatment                        |
|------------------|---------------------|----------------------------------|
| Header           | background (0.98)   | border-bottom in border color    |
| Sidebar Nav      | sidebar (0.12)      | text-sidebar-foreground (0.95)   |
| Main Content     | background (0.98)   | card surfaces at 0.96, grid-based|
| Dashboard Cards  | card (0.96)         | subtle border, shadow-xs         |
| Footer           | muted (0.92)        | border-top in border color       |

## Component Patterns
- **Buttons**: Primary (blue, solid), Secondary (green, outlined), Ghost (text-only)
- **Cards**: Subtle border, consistent padding (1rem), no drop shadow — reliance on border and background contrast
- **Data Tables**: Mono font for values, alternating row backgrounds using muted/card colors
- **Forms**: Multi-step with progress indicator, condensed spacing for density
- **Navigation**: Sidebar with icon + label, active state using primary color highlight

## Spacing & Rhythm
Tight vertical rhythm for dashboards (8px, 16px, 24px, 32px grid). Breathing room in marketing sections (32px, 48px). 16px gutter for card padding.

## Shape Language
- **Border-radius**: 0.625rem (8px) — functional, not decorative
- **No rounded corners on data tables** — sharp edges for precision
- **Cards and modals**: 8px radius

## Motion
Smooth 0.3s cubic-bezier(0.4, 0, 0.2, 1) for all state transitions. No bounce animations. Refined, purposeful motion only.

## Signature Detail
**Sidebar-driven layout**: Dark navy sidebar (0.12 lightness) anchors the entire interface. Text remains high-contrast white (0.95). Primary and secondary action colors appear as highlights within sidebar navigation, reinforcing information hierarchy.

## Differentiation
Strict adherence to two-color action model (blue primary, green secondary). No tertiary or decorative colors. Chart palette limited to 5 strategic colors for dashboard consistency. Industrial aesthetic through precise typography hierarchy and data visualization clarity.

## Constraints
- No vibrant gradients or glassmorphism effects
- No animation longer than 0.3s
- Maximum 3 font weights per font family
- Colors resolve via CSS custom properties only — no inline hex or RGB
- Chart colors map to consistent semantic roles across all dashboards

## Dark Mode
Sidebar remains 0.12 (unchanged). Main background shifts to 0.14, cards to 0.18. Primary blue becomes 0.70 (lighter blue for readability). Secondary green becomes 0.65. Text foreground to 0.93 (light grey). Same motion and shape language.

## Responsive
Mobile-first approach. Sidebar converts to hamburger menu at `sm:` breakpoint. Dashboard grid adjusts from 1 column (mobile) → 2 columns (tablet) → 3+ columns (desktop).
