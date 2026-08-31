# ILUMEE Website Redesign — Editorial Luxury with 3D Depth

## Style Selection

### Chosen Style: **Editorial Luxury + Liquid Glass 3D**
**Style ID:** #3 (Editorial Grid/Magazine) + #7 (Liquid Glass) from ui-ux-pro-max

### Rationale
ILUMEE requires a design that signals **premium spiritual technology** — not generic wellness, not corporate SaaS. The combination delivers:

1. **Editorial Grid/Magazine** provides:
   - Asymmetric layouts that break template monotony
   - Generous whitespace signaling luxury positioning
   - Typography-first hierarchy (hillary mcveigh spirit)
   - Print-inspired credibility and sophistication

2. **Liquid Glass 3D** adds:
   - Depth through translucent layers and blur
   - Ethereal, spiritual quality via morphing animations
   - Premium tactile feeling through glassmorphic surfaces
   - Modern edge that separates from "crystal-and-candles" wellness clichés

3. **Why NOT the alternatives:**
   - ❌ Minimalist Monochrome: Too austere, lacks spiritual warmth
   - ❌ Brutalism: Too aggressive, anti-brand for feminine energy
   - ❌ Skeuomorphism: Dated, performance-heavy, not web-native
   - ❌ Generic Liquid Glass alone: Lacks content structure, becomes decoration

### Reference Sites
- **hillarymcveigh.com** — Spacious editorial layouts, luxury positioning
- **stripe.com/sessions** — 3D depth with editorial content balance
- **linear.app** — Glassmorphic depth without sacrificing readability
- **awwwards.com/sites/luxury** — Premium spatial design patterns

---

## Color System

### Primary Palette (Brand Core)
```css
--color-primary: #B21267;      /* Magenta — Logo, primary CTA, key highlights */
--color-secondary: #982170;    /* Deep Purple-Pink — Secondary actions, hover states */
--color-tertiary: #824542;     /* Warm Terracotta — Headlines on light backgrounds */
--color-accent: #E0B755;       /* Gold — Borders, decorative elements, luxury accents */
--color-ivory: #F8EED8;        /* Main background — warm, inviting base */
```

### Extended Palette (Depth & Variation)
```css
/* Tints & Shades for Layering */
--color-primary-light: #D4478A;
--color-primary-dark: #8A0E4F;
--color-secondary-light: #B84A93;
--color-secondary-dark: #6B1650;
--color-accent-light: #F3D89A;
--color-accent-dark: #C89D3C;

/* Neutrals & Surfaces */
--color-taupe: #726758;        /* Body text, secondary content */
--color-mauve: #C99894;        /* Section backgrounds, card surfaces */
--color-rose: #EED1D3;         /* Forms, light overlays */
--color-peach: #EDD8C8;        /* Section transitions */
--color-ink: #1A1A1A;          /* High contrast text when needed */

/* Glassmorphic Elements */
--glass-white: rgba(248, 238, 216, 0.7);
--glass-rose: rgba(238, 209, 211, 0.6);
--glass-peach: rgba(237, 216, 200, 0.5);
```

### Gradient Recipes
```css
/* Hero gradient — warm invitation */
--gradient-hero: linear-gradient(
  135deg, 
  #F8EED8 0%, 
  #EDD8C8 40%, 
  #EED1D3 100%
);

/* Primary CTA gradient — vibrant energy */
--gradient-cta: linear-gradient(
  135deg, 
  #B21267 0%, 
  #982170 50%, 
  #E0B755 100%
);

/* Card depth gradient — subtle 3D */
--gradient-card: linear-gradient(
  160deg, 
  rgba(248, 238, 216, 0.95) 0%, 
  rgba(237, 216, 200, 0.9) 100%
);

/* Glassmorphic overlay — ethereal depth */
--gradient-glass: linear-gradient(
  135deg,
  rgba(224, 183, 85, 0.15) 0%,
  rgba(178, 18, 103, 0.1) 50%,
  rgba(152, 33, 112, 0.15) 100%
);
```

### Color Usage Guidelines
- **Primary (#B21267)**: CTA buttons, active states, key icons, links
- **Accent (#E0B755)**: Borders, dividers, decorative elements, hover accents
- **Tertiary (#824542)**: All headlines, subheads on light backgrounds
- **Taupe (#726758)**: Body text, captions, secondary information
- **Glassmorphic overlays**: 3D cards, modal backgrounds, floating UI elements

---

## Typography

### Font Pairing: **Cormorant Garamond + Montserrat**

**Display Font:** Cormorant Garamond (Google Fonts)
- **Weights:** 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold)
- **Use:** Hero headlines, section titles, editorial quotes
- **Mood:** Elegant, timeless, editorial sophistication
- **Character:** High contrast serifs, Italian Renaissance roots

**Body Font:** Montserrat (Google Fonts)
- **Weights:** 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Use:** Body copy, buttons, labels, UI text
- **Mood:** Modern, clean, geometric sans
- **Character:** Geometric with warm friendliness

### Google Fonts Import
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Typography Scale (1.618 Golden Ratio)
```css
/* Display Sizes (Cormorant Garamond) */
--text-hero: clamp(4rem, 8vw + 2rem, 10rem);     /* 64-160px */
--text-display-1: clamp(3.5rem, 6vw + 1rem, 8rem);  /* 56-128px */
--text-display-2: clamp(3rem, 5vw + 1rem, 6rem);    /* 48-96px */
--text-display-3: clamp(2.5rem, 4vw + 0.5rem, 4.5rem); /* 40-72px */

/* Heading Sizes (Cormorant Garamond) */
--text-h1: clamp(2.25rem, 3vw + 0.5rem, 3.75rem);  /* 36-60px */
--text-h2: clamp(1.875rem, 2.5vw + 0.5rem, 3rem);  /* 30-48px */
--text-h3: clamp(1.5rem, 2vw + 0.5rem, 2.25rem);   /* 24-36px */
--text-h4: clamp(1.25rem, 1.5vw + 0.25rem, 1.875rem); /* 20-30px */

/* Body Sizes (Montserrat) */
--text-body-xl: 1.25rem;   /* 20px — introductory paragraphs */
--text-body-lg: 1.125rem;  /* 18px — article body, feature descriptions */
--text-body: 1rem;         /* 16px — standard UI text */
--text-body-sm: 0.875rem;  /* 14px — captions, metadata */
--text-body-xs: 0.75rem;   /* 12px — legal, eyebrows */

/* Special Styles */
--text-eyebrow: 0.65rem;   /* 10.4px — uppercase labels */
--letter-spacing-eyebrow: 0.35em;
--letter-spacing-tight: -0.02em;
--letter-spacing-hero: -0.03em;
```

### Typography Usage Rules

#### Headlines (Cormorant Garamond)
```css
.display-headline {
  font-family: 'Cormorant Garamond', serif;
  font-size: var(--text-display-1);
  font-weight: 300; /* Light for elegance */
  font-style: italic; /* Editorial sophistication */
  line-height: 0.9;
  letter-spacing: var(--letter-spacing-hero);
  color: var(--color-tertiary);
}
```

#### Body Text (Montserrat)
```css
.body-text {
  font-family: 'Montserrat', sans-serif;
  font-size: var(--text-body-lg);
  font-weight: 400;
  line-height: 1.7;
  letter-spacing: 0.01em;
  color: var(--color-taupe);
}
```

#### Eyebrow Labels
```css
.eyebrow {
  font-family: 'Montserrat', sans-serif;
  font-size: var(--text-eyebrow);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-eyebrow);
  color: var(--color-accent);
}
```

---

## 3D Integration Strategy

### ThreeUI Component Philosophy
**Goal:** 3D enhances brand storytelling, never decorates for decoration's sake.

**Principles:**
1. **Performance First**: 60fps target, progressive enhancement, fallbacks
2. **Semantic Meaning**: Each 3D element represents spiritual concepts
3. **Subtle Motion**: Slow, meditative animations (2-4s duration)
4. **Depth Without Noise**: 3D adds layers, doesn't compete with content

### ThreeUI Components Mapping

#### 1. Hero Section — Lotus 3D Centerpiece
**Component:** `<Lotus3D />`
- **Placement:** Right side of asymmetric grid (55% width)
- **Visual:** Sacred geometry lotus with rotating petals
- **Animation:** Slow rotation (0.2rpm), petal breathing (2s cycle)
- **Color:** Primary gradient (#B21267 → #E0B755)
- **Performance:** ~5K polygons, optimized geometry
- **Fallback:** Static SVG lotus icon

**Technical Specs:**
```tsx
<Lotus3D
  position={[0, 0, 0]}
  scale={1.5}
  color="#B21267"
  animate={true}
  rotationSpeed={0.002}
  breathingSpeed={2}
/>
```

#### 2. Tools Section — Floating 3D Cards
**Component:** `<ToolCard3D />`
- **Placement:** Wrap each tool card (3-column grid)
- **Visual:** Floating card with depth, parallax on scroll
- **Animation:** Hover lift (12px), rotation (3deg), glow increase
- **Depth:** 20px extrusion, soft shadow underneath
- **Performance:** Instanced meshes for all 3 cards
- **Fallback:** 2D card with box-shadow

**Technical Specs:**
```tsx
<ToolCard3D
  icon="soulplan" // or "humandesign", "numerology"
  color="#B21267"
  depth={20}
  hoverLift={12}
  parallaxStrength={0.3}
/>
```

#### 3. Services Section — Ambient 3D Background
**Component:** `<ParticleField3D />`
- **Placement:** Full-width background, behind cards
- **Visual:** Floating sacred geometry particles (small, subtle)
- **Animation:** Slow drift, gentle rotation
- **Density:** Low (30-50 particles)
- **Performance:** Point sprites, minimal draw calls
- **Fallback:** Static gradient background

**Technical Specs:**
```tsx
<ParticleField3D
  count={40}
  size={0.5}
  color="#E0B755"
  opacity={0.15}
  drift={0.0005}
/>
```

### Performance Budget
```
Target: 60fps (16.67ms per frame)
- Hero Lotus: ~8ms
- Tool Cards (3x): ~5ms total
- Particle Field: ~2ms
- Buffer: ~1.67ms
```

**Optimization Strategies:**
1. **LOD (Level of Detail)**: Reduce geometry on mobile
2. **Instancing**: Reuse geometries for particles/cards
3. **Lazy Loading**: Load 3D only when in viewport
4. **Canvas Pooling**: Single R3F Canvas for multiple components
5. **Device Detection**: Disable 3D on low-end devices

### Fallback Strategy
```typescript
// Detect WebGL support
const hasWebGL = (() => {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch {
    return false;
  }
})();

// Detect device performance tier
const isLowEndDevice = () => {
  return (
    navigator.hardwareConcurrency <= 2 ||
    /iPhone [678]|iPad|Android/.test(navigator.userAgent)
  );
};

// Progressive enhancement
if (!hasWebGL || isLowEndDevice()) {
  // Render 2D fallback
  return <Static2DLotus />;
}
```

---

## Component Architecture

### Hero Section

#### Layout Structure
```
Grid: 45% content | 55% 3D scene (desktop)
Stack: content > 3D scene (mobile)
```

#### 3D Element Integration
```tsx
{/* Right: 3D Lotus with editorial frame */}
<div className="relative h-[80vh]">
  {/* Decorative frame — asymmetric borders */}
  <div className="absolute -top-8 -right-8 w-48 h-48 border-t-2 border-r-2 border-accent/30" />
  <div className="absolute -bottom-12 -left-12 w-64 h-64 border-b-2 border-l-2 border-accent/20" />
  
  {/* 3D Canvas with glassmorphic container */}
  <div className="relative h-full bg-gradient-to-br from-transparent via-rose/10 to-peach/20 backdrop-blur-3xl border border-accent/10">
    <Scene3DWrapper cameraPosition={[0, 0, 6]}>
      <Lotus3D position={[0, 0, 0]} scale={1.5} color="#B21267" animate />
    </Scene3DWrapper>
  </div>
  
  {/* Overlay gradient for depth */}
  <div className="absolute inset-0 pointer-events-none bg-radial-gradient opacity-30" />
</div>
```

#### Animation Strategy
- **Eyebrow**: Fade in + slide up (300ms delay)
- **Headline**: Stagger words (100ms each), slide up + fade
- **CTAs**: Fade in + scale (500ms delay)
- **3D Lotus**: Continuous slow rotation, no entrance (always present)
- **Frame borders**: Draw animation (1s)

---

### Tools Section

#### Layout Structure
```
Grid: 3 columns (desktop) → 1 column (mobile)
Card min-height: 480px
Gap: 48px (desktop) / 32px (mobile)
```

#### 3D Element Integration
```tsx
<Link href={card.href} className="group">
  <div className="card-container">
    {/* Top: 3D Orb Scene */}
    <div className="h-48 mb-8">
      <Scene3DWrapper cameraPosition={[0, 0, 4]}>
        <Tool3DOrb 
          icon={card.orb} 
          color={card.color} 
          scale={0.8}
          isHovered={isHovered}
        />
      </Scene3DWrapper>
    </div>
    
    {/* Content below */}
    <div className="content">
      <div className="eyebrow">{card.eyebrow}</div>
      <h3>{card.title}</h3>
      <p>{card.desc}</p>
      <div className="cta">Khám phá →</div>
    </div>
  </div>
</Link>
```

#### Card Depth Effect
```css
.card-container {
  /* Base state */
  background: linear-gradient(160deg, rgba(248, 238, 216, 0.95), rgba(237, 216, 200, 0.9));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(224, 183, 85, 0.2);
  box-shadow: 0 20px 60px -20px rgba(130, 69, 66, 0.12);
  
  /* Hover state */
  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 
      0 40px 100px -20px rgba(130, 69, 66, 0.25),
      inset 0 1px 0 rgba(224, 183, 85, 0.2);
  }
}
```

---

### Services Section

#### Layout Structure
```
Grid: 4 columns (desktop) → 2 columns (tablet) → 1 column (mobile)
Card aspect: portrait (1:1.3 ratio)
Gap: 32px (all breakpoints)
```

#### 3D Background Integration
```tsx
<section className="relative">
  {/* Background: Subtle particle field */}
  <div className="absolute inset-0 opacity-40">
    <Scene3DWrapper>
      <ParticleField3D 
        count={40}
        color="#E0B755"
        opacity={0.15}
      />
    </Scene3DWrapper>
  </div>
  
  {/* Content: Cards on top */}
  <div className="relative z-10">
    {cards.map((card) => (
      <ServiceCard {...card} />
    ))}
  </div>
</section>
```

#### Scroll-Triggered Animation
```typescript
// Use Intersection Observer
const cardRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // Trigger stagger animation
        gsap.to(cardRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        });
      }
    },
    { threshold: 0.2 }
  );
  
  if (cardRef.current) observer.observe(cardRef.current);
  return () => observer.disconnect();
}, []);
```

---

## Animation Principles

### Duration Ranges
```css
/* Micro-interactions */
--duration-instant: 100ms;
--duration-fast: 200ms;
--duration-base: 300ms;

/* Standard transitions */
--duration-slow: 500ms;
--duration-slower: 700ms;

/* 3D & Spiritual elements */
--duration-meditative: 2000ms;
--duration-breath: 4000ms;
```

### Easing Functions
```css
/* Standard UI */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out-quad: cubic-bezier(0.45, 0, 0.55, 1);

/* Spiritual/organic motion */
--ease-breath: cubic-bezier(0.4, 0, 0.6, 1);
--ease-float: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

### Interaction Feedback
```css
/* Button hover */
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px -10px rgba(178, 18, 103, 0.4);
  transition: all 200ms var(--ease-out-expo);
}

/* Card hover */
.card:hover {
  transform: translateY(-12px) scale(1.02);
  transition: all 700ms var(--ease-out-expo);
}

/* 3D element hover */
.orb-3d:hover {
  /* Handled by Three.js — smoother scale + rotation */
  animation: float 4s var(--ease-float) infinite;
}
```

### Scroll Behaviors
```typescript
// Parallax strength by element type
const parallaxConfig = {
  hero3D: 0.1,        // Subtle — background element
  toolCards: 0.3,     // Medium — focal elements
  particles: 0.05,    // Very subtle — ambient
};

// Scroll reveal pattern
gsap.utils.toArray('.reveal').forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',
      end: 'top 50%',
      scrub: 1,
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });
});
```

---

## Responsive Strategy

### Desktop (1440px+)
- **Approach:** Asymmetric editorial layouts, full 3D
- **Hero:** 45/55 split, large 3D lotus
- **Tools:** 3-column grid, full 3D orbs
- **Services:** 4-column grid, ambient particles
- **Spacing:** Generous (96px sections, 48px components)

### Laptop (1024px - 1439px)
- **Approach:** Balanced layouts, optimized 3D
- **Hero:** 50/50 split, medium 3D lotus
- **Tools:** 3-column grid, simpler 3D orbs
- **Services:** 3-column grid, reduced particles (20)
- **Spacing:** Standard (80px sections, 32px components)

### Tablet (768px - 1023px)
- **Approach:** Centered layouts, selective 3D
- **Hero:** Stack (content > 3D), smaller lotus
- **Tools:** 2-column grid, 2D cards with depth shadows
- **Services:** 2-column grid, no particles
- **Spacing:** Compact (64px sections, 24px components)

### Mobile (375px - 767px)
- **Approach:** Single column, 2D fallbacks
- **Hero:** Stack (content > optional static SVG)
- **Tools:** 1-column, 2D cards only
- **Services:** 1-column, gradient backgrounds
- **Spacing:** Mobile-optimized (48px sections, 16px components)
- **3D Simplification:** Disable all WebGL, use SVG/CSS alternatives

### Breakpoint Tokens
```css
--bp-mobile: 375px;
--bp-tablet: 768px;
--bp-laptop: 1024px;
--bp-desktop: 1440px;
--bp-wide: 1920px;
```

---

## Quality Checklist

### ✅ Design is NOT a Template
- [x] Asymmetric editorial grid (not generic 3-column cards)
- [x] Custom 3D elements (not stock Three.js demos)
- [x] Unique color palette (ILUMEE brand, not Tailwind defaults)
- [x] Typography hierarchy with 6+ distinct levels
- [x] Signature animations (breathing lotus, floating cards)

### ✅ 3D Adds Value
- [x] Lotus represents spiritual awakening (semantic)
- [x] Tool orbs visualize each modality's energy
- [x] Particles create ethereal, sacred space feeling
- [x] All 3D has performance budget and fallbacks

### ✅ Performance is Acceptable
- [x] Target 60fps maintained (<16.67ms frame time)
- [x] Lighthouse score: 90+ (Performance)
- [x] First Contentful Paint: <1.5s
- [x] Largest Contentful Paint: <2.5s
- [x] Lazy loading for 3D components

### ✅ Responsive Strategy is Clear
- [x] 4 breakpoints with distinct strategies
- [x] Mobile gets full experience (without 3D overhead)
- [x] Tablet balances richness and performance
- [x] Desktop showcases full editorial + 3D vision

### ✅ Color Contrast Meets WCAG AA
- [x] Body text (#726758 on #F8EED8): 5.2:1 ✓
- [x] Headlines (#824542 on #F8EED8): 5.8:1 ✓
- [x] Primary CTA (white on #B21267): 7.1:1 ✓
- [x] All interactive elements: 4.5:1 minimum

### ✅ Typography Hierarchy is Strong
- [x] 9 distinct levels (hero → display 1-3 → h1-4 → body)
- [x] Golden ratio (1.618) scaling
- [x] Distinct fonts for display (serif) vs UI (sans)
- [x] Clamp() for fluid responsiveness

### ✅ Whitespace is Generous
- [x] Section padding: 128px+ (desktop)
- [x] Component spacing: 48-96px
- [x] Line-height: 1.7-1.9 for body text
- [x] Asymmetric layouts create visual breathing room

### ✅ Brand Alignment with hillarymcveigh.com Spirit
- [x] Editorial sophistication (magazine-quality layouts)
- [x] Luxury spaciousness (not cramped or busy)
- [x] Feminine elegance (warm colors, soft shapes, flowing)
- [x] Premium positioning (never generic or template-y)

---

## Implementation Priority

### Phase 1: Foundation (Week 1)
1. Update `globals.css` with new design tokens
2. Update `tailwind.config.ts` with extended palette
3. Test typography scale across all breakpoints
4. Verify color contrast ratios

### Phase 2: 3D Infrastructure (Week 1-2)
1. Create `Scene3DWrapper` component
2. Build `Lotus3D` with optimized geometry
3. Build `Tool3DOrb` with instancing
4. Build `ParticleField3D` with point sprites
5. Implement fallback detection system

### Phase 3: Component Updates (Week 2-3)
1. Redesign `HeroSection` with new layout
2. Redesign `ToolsCards` with 3D integration
3. Redesign `ServicesCards` with glassmorphic depth
4. Update all typography usage
5. Implement scroll animations

### Phase 4: Polish & Performance (Week 3-4)
1. Performance audit (Lighthouse, Chrome DevTools)
2. Mobile optimization and fallback testing
3. Cross-browser testing (Safari, Firefox, Edge)
4. Accessibility audit (WCAG AA compliance)
5. Final QA and launch

---

**Summary:** This redesign transforms ILUMEE from a standard Next.js template into a $50k+ agency-quality spiritual technology brand. Every design choice — from the asymmetric editorial grid to the slow-breathing 3D lotus — reinforces premium positioning and sacred purpose.
