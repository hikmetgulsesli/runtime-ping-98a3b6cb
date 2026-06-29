---
name: Technical Operations Interface
colors:
  surface: '#fcf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fcf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45464d'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#fcf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  headline-lg:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  gutter: 1rem
  margin-mobile: 1rem
  margin-desktop: 1.5rem
---

## Brand & Style

This design system is engineered for **Runtime Ping**, a high-density utility platform for technical operations. The brand personality is rooted in precision, reliability, and "Calm Product UI" principles. It prioritizes clarity over decoration, reducing cognitive load for engineers monitoring complex systems.

The aesthetic follows a **Modern Corporate** approach with a lean toward **Minimalism**. It utilizes a neutral-heavy palette to ensure that when color is used (for status indicators or alerts), it carries maximum intentionality and urgency. The interface is modular, resembling a professional dashboard where every pixel serves a functional purpose.

Key characteristics:
- **Low-distraction:** Minimized use of shadows and gradients.
- **High-density:** Compact layouts that maximize information visibility.
- **Utility-first:** Interactive elements are clearly defined by state changes rather than stylistic flourishes.

## Colors

The color strategy for this design system is strictly functional. The palette is dominated by "Slate" and "Gray" scales to create a quiet backdrop for live data.

- **Primary & Neutrals:** Slate-900 is used for primary actions and core branding. Gray-50 and White define the depth of the interface, separating navigation from content.
- **Status Indicators:** Success, Warning, and Error colors are high-chroma to ensure they stand out instantly against the muted background.
- **Interactive States:** Use subtle shifts in gray (e.g., Gray-100 for hover) rather than color changes to maintain a "calm" environment.

## Typography

Typography is the primary tool for hierarchy in this design system. We use a tri-font approach:
- **Geist:** For headers and structural labels, providing a technical, sharp appearance.
- **Inter:** For all body text, data tables, and forms, chosen for its exceptional legibility at small sizes.
- **JetBrains Mono:** Reserved for system logs, IP addresses, timestamps, and status codes to ensure character distinction (e.g., 0 vs O).

Size scales are intentionally conservative to support high information density. Mobile views should maintain font sizes but increase touch target padding.

## Layout & Spacing

This design system utilizes a **Fluid Grid** with a strict 4px baseline. 

- **Layout Structure:** A standard 12-column grid for main content areas, with a fixed-width sidebar (240px) for primary navigation.
- **Density:** Components use "Compact" spacing (8px–12px internal padding) to ensure more data is visible above the fold.
- **Responsiveness:** On mobile, sidebars collapse into a drawer, and multi-column data tables should transition into card-based list views or horizontal-scroll containers.

## Elevation & Depth

Depth is communicated through **Low-contrast outlines** and **Tonal layers** rather than shadows. This minimizes visual noise.

- **Level 0 (Background):** Gray-50. Used for the main application canvas.
- **Level 1 (Surface):** White. Used for cards, table rows, and panels. All surfaces at this level must have a 1px border in `#E2E8F0`.
- **Level 2 (Overlays):** Used for tooltips and dropdowns. These may utilize a very soft, diffused shadow (10% opacity) to provide slight separation from the surface level.
- **Active State:** A subtle "inset" appearance or a 2px primary-colored left border is used to indicate active navigation or selected table rows.

## Shapes

The shape language is "Soft" (4px radius) to maintain a professional, systematic feel. 

- **Standard Elements:** Buttons, input fields, and cards use `rounded-md` (4px).
- **Status Tags:** Use a slightly higher radius (`rounded-lg` or 8px) to distinguish them from interactive buttons.
- **Data Visualization:** Bars in charts or uptime monitors should have 2px rounded corners to remain clean but avoid looking "sharp."

## Components

### Buttons
- **Primary:** Solid Slate-900 with White text.
- **Secondary:** White background with 1px Slate-200 border.
- **Destructive:** Solid Red-600 for critical actions.
- **Size:** High-density height (32px for standard, 28px for small).

### Status Chips
- Small, uppercase labels with a light tinted background and high-contrast text. 
- *Success:* Emerald-50 background (20% opacity) / Emerald-700 text.
- *Warning:* Amber-50 background / Amber-700 text.

### Data Tables
- Header row uses Gray-100 background with `label-caps` typography.
- Rows use 1px bottom border only.
- Hover state on rows: Gray-50 background change.

### Input Fields
- Subtle 1px border. Focus state uses a 2px Slate-900 border (no outer glow).
- Monospaced font for inputs containing technical data (e.g., API keys, Cron expressions).

### Cards
- White background, 1px border. No shadows. Use for grouping related metrics or environment details.