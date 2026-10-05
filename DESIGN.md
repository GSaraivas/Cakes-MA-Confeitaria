---
name: Artisanal Elegance
colors:
  surface: '#fff8f4'
  surface-dim: '#e4d8cd'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e6'
  surface-container: '#f9ece1'
  surface-container-high: '#f3e6db'
  surface-container-highest: '#ede0d6'
  on-surface: '#211a14'
  on-surface-variant: '#494740'
  inverse-surface: '#362f28'
  inverse-on-surface: '#fceee4'
  outline: '#7a776f'
  outline-variant: '#cbc6bd'
  surface-tint: '#605e5a'
  primary: '#605e5a'
  on-primary: '#ffffff'
  primary-container: '#f8f3ee'
  on-primary-container: '#716f6b'
  inverse-primary: '#cac6c1'
  secondary: '#78574c'
  on-secondary: '#ffffff'
  secondary-container: '#fdd0c3'
  on-secondary-container: '#79574d'
  tertiary: '#7f5526'
  on-tertiary: '#ffffff'
  tertiary-container: '#fff1e7'
  on-tertiary-container: '#926635'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e6e2dd'
  primary-fixed-dim: '#cac6c1'
  on-primary-fixed: '#1d1b19'
  on-primary-fixed-variant: '#484643'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#e8bdb0'
  on-secondary-fixed: '#2d150d'
  on-secondary-fixed-variant: '#5e3f36'
  tertiary-fixed: '#ffdcbc'
  tertiary-fixed-dim: '#f3bc83'
  on-tertiary-fixed: '#2c1700'
  on-tertiary-fixed-variant: '#643e11'
  background: '#fff8f4'
  on-background: '#211a14'
  surface-variant: '#ede0d6'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The brand personality is sophisticated and exclusive, mirroring the precision of high-end confectionery. The design system prioritizes an editorial, artisanal aesthetic that targets a premium audience seeking quality and craftsmanship. 

The style is a blend of **Minimalism** and **Glassmorphism**, emphasizing generous whitespace to let high-resolution photography of the products act as the primary visual driver. The emotional response should be one of indulgence, calm, and trust, achieved through a "quiet luxury" approach—avoiding unnecessary ornamentation in favor of perfect proportions and subtle tactile effects.

## Colors
The palette is rooted in the organic tones of pastry arts. 
- **Creme (#F8F3EE)** serves as the primary surface color, providing a softer, more premium alternative to pure white for large sections.
- **Chocolate (#4A2E25)** is used for primary typography and high-contrast UI elements to ensure legibility and authority.
- **Caramel (#B78652)** acts as the accent color for call-to-actions, links, and highlights, evoking warmth and sweetness.
- **Warm Gray (#8B8178)** is utilized for secondary text, borders, and subtle UI metadata.
- **White (#FFFFFF)** is reserved for card interiors and high-impact background transitions to maintain a crisp, clean feel.

## Typography
The typographic scale relies on the high-contrast pairing of a classic serif and a functional sans-serif. 
- **Playfair Display** is used for all headlines to convey elegance and heritage. Track headlines slightly tighter at larger sizes for a more "designed" editorial look.
- **Inter** provides a modern, neutral counterpoint for body copy and functional labels, ensuring high readability and a contemporary feel.
- Use **Label-MD** for small navigation items and "Overlines" (category tags above headlines) in uppercase with increased letter spacing to enhance the premium feel.

## Layout & Spacing
This design system employs a **Fixed Grid** philosophy for desktop (centered 12-column) and a **Fluid Grid** for mobile devices. 

- **Generous Gaps:** Section vertical spacing is intentionally large (120px+) to create an "Apple-inspired" rhythm where each product or message feels distinct and significant.
- **Margins:** Large horizontal margins on desktop create a focused reading experience.
- **Breakpoints:**
  - Mobile: < 768px (4 columns, 20px margins)
  - Tablet: 768px - 1024px (8 columns, 40px margins)
  - Desktop: > 1024px (12 columns, 1280px max-width)

## Elevation & Depth
Depth is created through a mix of **Tonal Layers** and **Glassmorphism**.
- **Surface Layering:** Use the Creme (#F8F3EE) background as the base. White (#FFFFFF) cards sit on top of this with an extremely subtle, diffused shadow (0px 4px 20px, 4% opacity Chocolate).
- **Glassmorphism:** The primary header must use a `backdrop-filter: blur(20px)` with a semi-transparent White (80% opacity) background. This ensures content is readable as it scrolls underneath while maintaining a sense of space.
- **Interactive Depth:** On hover, cards and buttons should transition smoothly to a slightly more pronounced shadow and a 1-2% scale increase to provide tactile feedback.

## Shapes
The shape language is **Rounded**, using 0.5rem (8px) as the base radius. This strikes a balance between the sharpness of high-end luxury and the soft, inviting nature of confectionery. 
- **Standard UI (Buttons, Inputs):** 8px corner radius.
- **Large Components (Cards, Containers):** 16px (1rem) corner radius.
- **Media (Images):** Consistent 16px radius to match container shapes.

## Components
- **Buttons:** Primary buttons use a Chocolate background with White text. Secondary buttons use a Caramel border with Caramel text. Transitions should be slow (300ms) and ease-out.
- **Cards:** Product cards should feature a full-bleed image at the top, followed by a padded section for Playfair headlines. The background is pure White to contrast against the Creme page background.
- **Navigation:** A fixed top bar with the glassmorphism effect. Navigation links use Inter Label-MD styles with a subtle Caramel underline appearing on hover.
- **Inputs:** Minimalist design with a 1px border in Warm Gray. On focus, the border transitions to Caramel with a soft outer glow.
- **Hero Sections:** High-impact layouts featuring a 50/50 split of editorial photography and Display-LG typography. Use an "entrance animation" where text fades in and slides up slightly.
- **Chips/Badges:** Small, pill-shaped tags used for "New" or "Best Seller," using the Caramel color with 10% opacity for the background and 100% opacity for the text.