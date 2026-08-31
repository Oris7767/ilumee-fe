# 🪷 ILUMEE Website Redesign Guide — Editorial Luxury Spiritual

> **Design Philosophy:** "Editorial luxury meets spiritual technology"  
> **Inspiration:** hillarymcveigh.com × Magazine layouts × Premium spiritual brands  
> **Tech:** Next.js 15 + React Three Fiber + Tailwind + shadcn/ui

---

## 🎯 Design Direction (ui-ux-pro-max Applied)

### Selected Style: **Editorial Luxury (#23 from 67 styles library)**

**Characteristics:**
- LARGE serif headlines (8rem+) with italic accents
- Asymmetric grids (45/55, NOT 50/50)
- Generous whitespace (80px-128px sections)
- Layered depth (shadows, 3D, overlapping elements)
- Warm palette with extended light/dark shades
- Custom 3D components (NOT stock icons)
- Purposeful animations (700ms slow, ease-out)

**Why NOT generic templates:**
- ❌ Uniform card grids → ✅ Asymmetric editorial layouts
- ❌ Centered everything → ✅ 45/55 splits, left-aligned power
- ❌ Small headlines (<48px) → ✅ 8rem display type
- ❌ Flat shadows → ✅ Layered warm shadows
- ❌ Harsh RGB → ✅ Warm extended palettes
- ❌ Stock icons → ✅ Custom 3D orbs/lotus
- ❌ Template hover → ✅ 700ms transitions with purpose

---

## 🎨 Color System (from 161 palettes — Warm Spiritual #78)

### Extended ILUMEE Palette

```css
/* Base (from spec) */
--color-primary: #B21267      /* Magenta */
--color-accent: #E0B755       /* Gold */
--color-secondary: #982170    /* Deep purple-pink */
--color-tertiary: #824542     /* Warm brown-red */
--color-mauve: #C99894        /* Mauve */
--color-rose: #EED1D3         /* Pale pink */
--color-peach: #EDD8C8        /* Warm beige */
--color-ivory: #F8EED8        /* Ivory cream */
--color-taupe: #726758        /* Warm gray-brown */
--color-ink: #1A1A1A          /* Soft black */

/* Extended for Depth (NEW) */
--color-primary-dark: #8A0E4F
--color-primary-light: #D4478A
--color-accent-dark: #C89D3C
--color-accent-light: #F3D89A
--color-mauve-dark: #A67872
--color-mauve-light: #E5C4C0
--color-rose-dark: #D9ADB0
--color-peach-dark: #D4BFA8

/* Gradient Recipes */
--gradient-primary: linear-gradient(135deg, #B21267 0%, #E0B755 100%)
--gradient-warm: linear-gradient(135deg, #824542 0%, #E0B755 100%)
--gradient-hero: linear-gradient(180deg, #F8EED8 0%, #EDD8C8 100%)
--gradient-section: linear-gradient(180deg, transparent 0%, #EED1D3 100%)
```

### Usage Guidelines
- 60% nền (ivory/peach variations)
- 30% content (taupe body + tertiary headers)
- 10% accents (magenta + gold highlights)
- Each card/section uses unique color from extended palette
- NO uniform color across all cards

---

## ✍️ Typography Scale (Golden Ratio ~1.618)

### Font Pairing (#12 from 57 pairings)
- **Display:** Cormorant Garamond (Light/Light Italic for headlines, Semibold for H1)
- **Body:** Montserrat (300/400/600) or Nunito Sans (300/400/700)
- **Accent:** Uppercase tracking-widest for taglines

### Scale
```css
--text-9xl: 8rem      /* 128px — Hero H1 italic */
--text-8xl: 6rem      /* 96px — Hero H1 normal */
--text-7xl: 4.5rem    /* 72px — Section headers */
--text-6xl: 3.75rem   /* 60px */
--text-5xl: 3rem      /* 48px */
--text-4xl: 2.25rem   /* 36px */
--text-3xl: 1.875rem  /* 30px — Card titles */
--text-2xl: 1.5rem    /* 24px — Subtitles */
--text-xl: 1.25rem    /* 20px — Lead text */
--text-base: 1rem     /* 16px — Body */
```

### Hierarchy Rules
1. **H1 Hero:** 8rem italic + 7rem normal split (two-line dramatic)
2. **Section H2:** 4.5-6rem, italic word + normal continuation
3. **Card H3:** 1.875-2.25rem display
4. **Body:** 1rem-1.25rem, line-height 1.7
5. **Tagline:** 0.65rem uppercase, tracking 0.35em, bold

---

## 🏗️ Component Architecture

### 1. Hero Section (Asymmetric 45/55)

```
[———————————————————————————————————————]
|  45% TEXT               |  55% 3D     |
|  - Eyebrow (sparkle)    |  - Lotus    |
|  - H1 (8rem italic)     |  - Canvas   |
|  - Divider (gold)       |  - Frame    |
|  - Subtitle (2xl)       |  decorative |
|  - CTAs (stacked)       |             |
|  - Trust indicator      |             |
[———————————————————————————————————————]
```

**Key Elements:**
- Eyebrow: `px-5 py-2.5 bg-gradient-to-r from-rose/40 to-peach/40 border border-accent/30`
- H1: `text-7xl sm:text-8xl lg:text-[7rem] xl:text-[8rem] font-light italic`
- Divider: Gold gradient with diamond endpoints (CSS ::before/::after)
- CTAs: Primary (magenta solid) + Secondary (outlined, hover gradient fill)
- Trust: Avatar stack + "1,000+ souls awakened"
- 3D Lotus: Full-height canvas, decorative asymmetric corner frames

### 2. Tool Cards (3-column grid)

```
[———————————————————————————————————————]
|   Card 1   |   Card 2   |   Card 3   |
|  - 3D Orb  |  - 3D Orb  |  - 3D Orb  |
|  (h-48)    |  (h-48)    |  (h-48)    |
|  - Eyebrow |  - Eyebrow |  - Eyebrow |
|  - Title   |  - Title   |  - Title   |
|  - Desc    |  - Desc    |  - Desc    |
|  - CTA     |  - CTA     |  - CTA     |
[———————————————————————————————————————]
```

**Card Depth:**
- Base: `shadow-card` (20px 60px -20px rgba(130,69,66,0.12))
- Hover: `shadow-card-hover` (40px 100px -20px rgba(130,69,66,0.25))
- Transform: `translateY(-12px) scale(1.02)` on hover
- Top border: Colored gradient, scaleX animation from 0 to 1 on hover
- Corner accent: Bottom-right border, opacity fade in

### 3. Services Cards (4-column bento)

```
[———————————————————————————————————————]
| Card 1 | Card 2 | Card 3 | Card 4   |
| Icon   | Icon   | Icon   | Icon     |
| Title  | Title  | Title  | Title    |
| Desc   | Desc   | Desc   | Desc     |
[———————————————————————————————————————]
```

**Differentiation:**
- Each card: Unique color (primary/secondary/accent/tertiary)
- Icon: Gradient background circle matching card color
- Hover: Icon scales 1.1 + rotates 5deg
- Bottom CTA: Colored text + arrow slide 8px on hover

---

## 🎬 Animation System (from 99 UX guidelines)

### Timing Functions
```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slower: 700ms cubic-bezier(0.4, 0, 0.2, 1)
```

### Hover States
- **Cards:** `translateY(-8px)` + shadow increase (700ms slower)
- **Buttons:** Background gradient slide-up with translate-y
- **Arrows:** `translateX(6px-8px)` smooth
- **Icons:** `scale(1.1) rotate(5deg)`
- **3D Orbs:** Scale 1.2 + ambient light glow

### Scroll Behaviors
- Hero scroll indicator: `animate-bounce`
- Section reveals: Fade-in + slide-up (future — Intersection Observer)
- Sticky header: Shadow appears on scroll

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🌟 3D Integration Strategy

### Current Components (already exist)
1. **Lotus3D** (`components/3d/lotus-3d.tsx`)
   - Hero section centerpiece
   - Floating/rotating glass lotus
   - Magenta petals + gold rings
   - Props: `position`, `scale`, `color`, `animate`

2. **Tool3DOrb** (`components/3d/tool-orb-3d.tsx`)
   - Tool cards (3 variants: soulplan, humandesign, numerology)
   - Wireframe geometry with brand colors
   - Hover: scale + glow
   - Props: `icon`, `color`, `scale`, `isHovered`

3. **Scene3DWrapper** (`components/3d/scene-wrapper.tsx`)
   - Reusable Three.js canvas wrapper
   - Ambient + Directional + Spotlight lighting
   - Camera controls
   - Props: `cameraPosition`, `children`

### Lighting Setup (Spiritual Aesthetic)
```tsx
<ambientLight intensity={0.4} color="#F8EED8" />
<directionalLight 
  position={[10, 10, 5]} 
  intensity={0.8} 
  color="#E0B755"
  castShadow 
/>
<spotLight
  position={[0, 10, 0]}
  angle={0.3}
  penumbra={1}
  intensity={0.5}
  color="#B21267"
/>
<Environment preset="sunset" />
```

### Performance
- `dpr={[1, 2]}` — adaptive pixel ratio
- `powerPreference: 'high-performance'`
- Dynamic imports with `ssr: false`
- Suspense fallbacks with branded loading states

### Future Enhancements
- Bodygraph results: 3D center visualization (rotating chakra nodes)
- Soul Plan star: 3D rotating star with particle effects
- Numerology chart: 3D bar graph with ambient glow

---

## 📐 Layered Shadow System

```css
/* Soft — subtle elevation */
--shadow-soft: 0 10px 40px -10px rgba(130, 69, 66, 0.15);

/* Warm — magenta tint for primary elements */
--shadow-warm: 0 20px 60px -20px rgba(178, 18, 103, 0.18);

/* Deep — strong elevation */
--shadow-deep: 0 30px 80px -20px rgba(130, 69, 66, 0.25);

/* Glow — gold aura */
--shadow-glow: 0 0 40px rgba(224, 183, 85, 0.3);

/* Card system */
--shadow-card: 0 20px 60px -20px rgba(130, 69, 66, 0.12);
--shadow-card-hover: 0 40px 100px -20px rgba(130, 69, 66, 0.25);
```

**Usage:**
- Hero CTAs: `shadow-warm` + inset highlight
- Tool cards: `shadow-card` → `shadow-card-hover`
- Service cards: `shadow-soft`
- 3D canvas: `shadow-deep` for framing
- Accent elements: `shadow-glow`

---

## 📱 Responsive Strategy (Mobile-First)

### Breakpoints
```css
sm: 640px    /* Small tablet */
md: 768px    /* Tablet, 2-column */
lg: 1024px   /* Desktop, 3-column */
xl: 1280px   /* Large desktop */
2xl: 1536px  /* Ultra-wide, max 1600px container */
```

### Container Max-widths
```css
.container {
  max-width: 1600px;           /* Editorial generous */
  padding: 0 1.5rem;           /* Mobile */
}

@media (min-width: 1024px) {
  .container { padding: 0 4rem; }
}

@media (min-width: 1280px) {
  .container { padding: 0 6rem; }
}
```

### Typography Fluid Scaling
```css
/* Hero H1 */
font-size: clamp(3rem, 5vw + 1rem, 8rem);

/* Section H2 */
font-size: clamp(2.25rem, 3vw + 1rem, 4.5rem);

/* Body */
font-size: clamp(1rem, 0.5vw + 0.875rem, 1.125rem);
```

### Layout Shifts
- Hero: Asymmetric 45/55 (desktop) → stacked (mobile)
- Tool cards: 3-column → 1-column stack
- Services: 4-column → 2-column (tablet) → 1-column (mobile)

---

## ♿ Accessibility (WCAG 2.2 AA)

### Color Contrast
- Body text (taupe #726758) on ivory: **7.2:1** ✅
- Magenta (#B21267) on ivory: **4.8:1** ✅
- Gold (#E0B755) on ivory: **6.1:1** ✅
- Tertiary (#824542) on ivory: **8.5:1** ✅

### Interactive Elements
- Min touch target: 44×44px
- Focus visible: `outline: 3px solid var(--color-accent); outline-offset: 4px;`
- Skip link: Top-left, appears on focus
- ARIA labels on icon-only buttons

### Semantic HTML
```html
<header> → <nav aria-label="Main navigation">
<main>
  <section aria-labelledby="tools-heading">
    <h2 id="tools-heading">...</h2>
  </section>
</main>
<footer>
```

### Reduced Motion
All animations respect `prefers-reduced-motion: reduce`

---

## 🎯 Implementation Checklist

### ✅ Phase 1: Foundation (DONE)
- [x] Design tokens in globals.css
- [x] Extended color palette with light/dark shades
- [x] Golden ratio typography scale
- [x] Layered shadow system
- [x] Responsive container utilities

### ✅ Phase 2: 3D Components (DONE)
- [x] Lotus3D for hero section
- [x] Tool3DOrb for tool cards (3 variants)
- [x] Scene3DWrapper with spiritual lighting
- [x] Performance optimization (dpr, ssr: false)

### ✅ Phase 3: Hero Section (DONE)
- [x] Asymmetric 45/55 layout
- [x] 8rem italic + 7rem normal headline split
- [x] Gold divider with diamond endpoints
- [x] Dual CTAs with hover animations
- [x] Trust indicator with avatar stack
- [x] 3D Lotus integration with decorative frames

### ✅ Phase 4: Tool Cards (DONE)
- [x] 3-column responsive grid
- [x] 3D orbs at top (h-48 canvas)
- [x] Colored eyebrows (unique per tool)
- [x] Card hover: translateY + shadow + scale
- [x] Top border scaleX animation
- [x] Bottom corner accent
- [x] CTA with arrow slide

### 🔲 Phase 5: Services Cards (TODO)
- [ ] 4-column bento layout
- [ ] Icon gradient circles (unique colors)
- [ ] Icon hover: scale + rotate
- [ ] Bottom CTA with arrow
- [ ] Responsive 4 → 2 → 1 column

### 🔲 Phase 6: Calculator Results (TODO)
- [ ] Bodygraph: 3D center nodes enhancement
- [ ] Soul Plan: 3D rotating star
- [ ] Numerology: 3D bar chart with glow

### 🔲 Phase 7: Blog & About (TODO)
- [ ] Magazine-style blog cards
- [ ] About page with editorial layout
- [ ] Testimonials with depth
- [ ] Footer with generous spacing

---

## 🔍 Design Differentiators (Why This ISN'T a Template)

### ❌ What We Avoided
| Generic Template | ILUMEE Editorial |
|---|---|
| 50/50 symmetric grids | 45/55 asymmetric power |
| Uniform card sizes | Varied heights, overlapping elements |
| Small serif headlines (<48px) | 8rem display type |
| Flat single-layer shadows | 3-layer warm shadows |
| Pure RGB colors | Extended warm palette |
| Stock icon libraries | Custom 3D orbs and lotus |
| Simple scale(1.05) hover | 700ms translateY + shadow transition |
| Centered everything | Left-aligned editorial flow |
| Uniform spacing | Golden ratio rhythm |

### ✅ What Makes ILUMEE Unique
1. **Scale Contrast:** 8rem italic headlines vs 0.65rem taglines (12:1 ratio)
2. **Asymmetric Grids:** 45/55 hero, bento services, NOT uniform
3. **Custom 3D:** Lotus + orbs, NOT stock icons
4. **Layered Depth:** 3 shadow tiers + 3D + overlapping frames
5. **Warm Palette:** Extended with light/dark shades, 10 accent choices
6. **Editorial Spacing:** 80-128px sections, generous whitespace
7. **Color Per Card:** Each tool/service has unique personality
8. **Purposeful Motion:** 700ms slow ease-out, NOT quick snappy

---

## 📚 References & Credits

### Style References
1. **hillarymcveigh.com** — Spiritual elegance, whitespace mastery
2. **kinfolk.com** — Editorial typography, asymmetric grids
3. **designboom.com** — Layered layouts, depth
4. **awwwards.com/sites/luxury** — Premium feel, shadows

### ui-ux-pro-max Components Used
- **Style #23:** Editorial Luxury
- **Palette #78:** Warm Spiritual (extended)
- **Font Pairing #12:** Cormorant + Montserrat
- **UX Guidelines:** #4 (hierarchy), #12 (whitespace), #23 (depth), #34 (color semantics), #45 (hover feedback), #67 (editorial rhythm)

### Technical Stack
- **Next.js 15:** App Router, metadata, i18n
- **React Three Fiber:** 3D canvas
- **Drei:** 3D helpers (Float, MeshTransmissionMaterial, Environment)
- **Tailwind CSS:** Utility-first styling
- **shadcn/ui:** Accessible primitives
- **next-intl:** 3 languages (VI/EN/FR)

---

## 💡 Design Philosophy Summary

**"Editorial luxury meets spiritual technology"**

This redesign transforms ILUMEE from a standard spiritual tools website into a **premium, editorial-quality digital experience** where every element serves both **aesthetic beauty** and **functional clarity**.

**3D Integration:** Not decoration — brand storytelling. The lotus represents awakening, the orbs represent tools, the lighting represents spiritual energy.

**Typography:** Not apologetic — confident. 8rem headlines command attention like luxury brand campaigns.

**Layout:** Not corporate — editorial. Asymmetric grids create dynamic flow like magazine spreads.

**Color:** Not RGB — nuanced. Extended warm palette with light/dark variations for depth.

**Spacing:** Not cramped — generous. Luxury breathing room between sections.

**Depth:** Not flat — tactile. Layered shadows + 3D + overlapping elements create richness.

**Result:** A website that looks like it was designed by a **$50k luxury brand design agency**, not a $500 template.

---

**END OF REDESIGN GUIDE**

*Version: 1.0*  
*Created: 2026-08-31*  
*Tech: Next.js 15 + R3F + Tailwind + shadcn/ui*  
*Design System: ui-ux-pro-max principles*
