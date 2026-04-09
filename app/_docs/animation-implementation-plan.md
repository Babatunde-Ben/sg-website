# Animation Implementation Plan — Stephanie George Website

## Background

The website is a Next.js 16 project using Tailwind CSS 4, with `motion` (Framer Motion v12.38) already installed. It has 5 pages (Home, About, Gallery, Podcast, Contact), plus shared Navbar and Footer components. Currently, there is zero animation beyond basic CSS `transition-*` hover effects on a few elements.

The goal is to add a cohesive, elegant animation system that makes the site feel premium and alive — without altering any existing spacing, sizing, alignment, or layout.

> **⚠️ CRITICAL**: The pixel-perfect UI must remain completely unchanged at rest. Every animation resolves to the exact same final CSS values the components have today.

---

## Enhancements Beyond the Original Spec

These are additions from developer discretion to elevate the experience:

1. **Animated stat counter** — Numbers count up from 0 on first view instead of appearing statically
2. **Smooth separator reveal** — `<Separator>` components grow from center outward (`scaleX: 0 → 1`)
3. **SVG decoration fade** — Decorative SVGs (holla, steph, with-love) fade in with slight delay after hero images
4. **Subtle pencil float** — The `HeroPencil` decoration gets an extremely subtle floating bob (4s infinite, ±4px)
5. **Progressive gallery reveal** — Gallery images stagger by row instead of all at once
6. **Polished mobile menu** — Nav items stagger in with fade+slide when the Sheet opens

---

## Phase 1: Motion Design System (Foundation)

### New Files

#### `lib/motion.ts`
Central animation variants and transition presets:

```typescript
// Variants
fadeInUp:         { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }
fadeIn:           { hidden: { opacity: 0 }, visible: { opacity: 1 } }
scaleIn:          { hidden: { opacity: 0, scale: 0.985 }, visible: { opacity: 1, scale: 1 } }
staggerContainer: { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
staggerItem:      // same as fadeInUp
hoverLift:        { y: -4, transition: { duration: 0.25 } }

// Transitions
default:  { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
quick:    { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }
slow:     { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }

// Viewport
viewportOnce: { once: true, amount: 0.2 }

// Reduced motion overrides
// All translate/scale values collapse to opacity-only when prefers-reduced-motion is active
```

#### `components/motion/` — Reusable Wrappers.

| Component | Purpose |
|---|---|
| `FadeInUp.tsx` | Fade + translate-y reveal |
| `FadeIn.tsx` | Opacity-only reveal |
| `ScaleIn.tsx` | Subtle scale + opacity reveal (for images) |
| `StaggerContainer.tsx` | Orchestrates `staggerChildren` |
| `StaggerItem.tsx` | Child of StaggerContainer |
| `SectionReveal.tsx` | Full section fade-up on viewport entry |
| `ImageReveal.tsx` | Image wrapper with optional hover zoom |
| `AnimatedCounter.tsx` | Number count-up animation |
| `index.ts` | Barrel export |

---

## Phase 2: Home Page

| Component | Animation |
|---|---|
| `HeroSection` | 3 stacked images → `ScaleIn` with delay offsets. SVGs → `FadeIn` with delay. Pencil → subtle float |
| `IntroSection` | `SectionReveal` parent. Heading → paragraph → buttons staggered |
| `StatsSection` | Counter animation (`AnimatedCounter`). Staggered stat blocks |
| `GallerySneakPeek` | Images → `ScaleIn` staggered. SVG → `FadeIn` with delay. Hover zoom on md+ |
| `DepthSection` | Heading → `FadeInUp`. Grid items → stagger |
| `ServicesSection` | Heading → `FadeInUp`. Cards → stagger. Image hover zoom. |
| `TestimonialsSection` | Left column → `FadeInUp`. Cards → stagger. |

---

## Phase 3: About Page

| Component | Animation |
|---|---|
| `HeroNotebookSection` | Book image → `ScaleIn` |
| `BackstorySection` | `SectionReveal`. Heading + paragraphs staggered |
| `WhatSetsMeApartSection` | Heading → `FadeInUp`. Checklist → stagger |
| `WhatIDoSection` | Both sections use `FadeInUp` (no opposing slide-ins). Images → `ScaleIn` |
| `SignatureTopicsSection` | Cards → stagger. Image hover zoom |
| `FromTheRoomTestimonialsSection` | Same pattern as Home testimonials |
| `CTASection` | `SectionReveal`. Title → copy → button staggered |

---

## Phase 4: Gallery Page

| Component | Animation |
|---|---|
| Intro section | Heading + paragraph → `FadeInUp` |
| Gallery grid | **Opacity-only** reveals (no extra transforms on collage items). Staggered by row |

> **Note**: Gallery items have complex existing CSS transforms (rotate, translate, scale). Only opacity animation is applied to avoid visual conflicts.

---

## Phase 5: Podcast Page

| Component | Animation |
|---|---|
| `PodcastHeroSection` | Same pattern as Home hero |
| `PodcastIntroSection` | `SectionReveal`. Text staggered. Image → `ScaleIn` |
| `WhyListenSection` | Heading → `FadeInUp`. Reason items → stagger |
| `AvailableOnSection` | Platform cards → stagger + hover lift |
| `RecentEpisodesSection` | Heading → `FadeInUp`. Episode cards → stagger + hover lift |
| `FromTheListenersSection` | Same testimonial pattern |
| `StoryFormSection` | `SectionReveal`. No animation on form fields (stable/trustworthy) |

---

## Phase 6: Contact Page

| Component | Animation |
|---|---|
| Header | Heading + paragraph → `FadeInUp`. Image → `ScaleIn` |
| Contact info | Items → stagger. Social icons → hover lift |
| Form | Container → `FadeIn`. No field animation. Button → `whileTap` |

---

## Phase 7: Shared Components

| Component | Animation |
|---|---|
| `Navbar` | No load animation. Subtle hover feedback on links. Mobile menu items stagger in |
| `FeedbackCard` | `whileHover={{ y: -4 }}` lift. Entry handled by parent StaggerItem |
| `Footer` | "Words for the Journey" → `SectionReveal`. Form → `FadeInUp`. CTA → `FadeInUp` |

---

## Accessibility

- All wrappers check `useReducedMotion()` and collapse to opacity-only or no-motion
- Forms, links, and buttons remain immediately responsive
- No animation blocks interaction or delays readability
- Text motion is fast enough to start reading within 0.3s
- Mobile animation intensity is reduced (shorter durations, less stagger)

---

## File Impact

| Category | New | Modified |
|:---|:---:|:---:|
| Motion System | 10 | 0 |
| Home Page | 0 | 7 |
| About Page | 0 | 7 |
| Gallery Page | 0 | 1 |
| Podcast Page | 0 | 7 |
| Contact Page | 0 | 1 |
| Shared | 0 | 3 |
| **Total** | **10** | **26** |

---

## Execution Order

1. Build `lib/motion.ts` (all variants, transitions, viewport config)
2. Build all `components/motion/` wrapper components
3. Apply to Home page components (highest traffic page first)
4. Apply to About page
5. Apply to Podcast page
6. Apply to Gallery page (lightest touch)
7. Apply to Contact page
8. Update shared components (Navbar, Footer, FeedbackCard)
9. Full build + lint verification
10. Browser walkthrough of every page

---

## Verification

1. `pnpm build` — clean TypeScript compilation
2. `pnpm lint` — no ESLint issues
3. Browser walkthrough of each page to verify scroll-triggered animations
4. Reduced motion test (`prefers-reduced-motion: reduce`)
5. Mobile viewport test (375px)
6. Confirm resting state matches pre-animation UI exactly
