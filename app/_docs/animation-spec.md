# Stephanie George Website Animation Spec

## Objective

Add modern, smooth Framer Motion animations across the website without changing the existing UI, spacing, sizing, alignment, or layout structure.

## Non-Negotiables

- Do not alter the pixel-perfect UI.
- Do not change spacing, font sizes, component sizing, or layout positions.
- Do not introduce animation that causes layout shift.
- Do not add flashy, bouncy, or overly playful motion.
- Keep the visual tone elegant, editorial, calm, and premium.
- All motion must feel intentional and subtle.
- Prefer opacity, translateY, slight scale, and stagger.
- Avoid rotation, elastic bounce, exaggerated parallax, and large transforms.
- Respect `prefers-reduced-motion`.

## Motion Principles

### Global motion style

- Use soft fade and upward reveal as the default.
- Use short-to-medium durations.
- Use smooth easing.
- Use very small movement distances.

### Preferred defaults

- **Fade up reveal**
  - initial: `opacity: 0, y: 24`
  - animate: `opacity: 1, y: 0`

- **Soft image reveal**
  - initial: `opacity: 0, scale: 0.985`
  - animate: `opacity: 1, scale: 1`

- **Hover lift for cards**
  - hover: `y: -4`

- **Button tap**
  - tap: `scale: 0.98`

### Timing

- Standard reveal duration: `0.5s` to `0.8s`
- Stagger gap: `0.08s` to `0.14s`
- Hover transitions: `0.2s` to `0.3s`

### Viewport behavior

- Most sections should animate once on first view.
- Use `viewport={{ once: true, amount: 0.2 }}` as the baseline.
- Do not replay large section animations repeatedly on scroll back.

## Reusable Motion Primitives

Create reusable motion wrappers and use them consistently across the site.

### Required wrappers

- `FadeInUp`
- `FadeIn`
- `ScaleIn`
- `StaggerContainer`
- `StaggerItem`
- `HoverLiftCard`
- `ImageReveal`
- `SectionReveal`

### Rules

- Use wrappers instead of scattering raw `motion.div` logic everywhere.
- Keep animation variants in one shared file, for example:
  - `lib/motion.ts`
  - or `components/animations/variants.ts`

## Accessibility

- Support reduced motion with `useReducedMotion()`.
- When reduced motion is enabled:
  - remove translate and scale effects
  - keep only minimal opacity transitions or no motion
- Motion must never block readability or interaction.
- Forms, links, and buttons must remain fast and responsive.

---

# Page-by-Page Animation Direction

## 1. Home Page

### Header / Navbar

- Keep navbar stable.
- Add only subtle link hover feedback.
- If mobile menu opens, use a short fade and slide-down transition.
- Do not animate the entire navbar on page load.

### Hero Section

**Animate like this:**

- Stagger the hero content in this order:
  1. headline
  2. paragraph
  3. CTA buttons
- Reveal hero images with slight fade and scale-in.
- If hero images are layered, animate each with very small delay offsets.
- Optional: apply extremely subtle floating motion to decorative hero images only if it does not move them out of their exact layout positions.

**Do not:**

- slide content long distances
- use dramatic parallax
- use blur pop-in effects

### Stats Section

**Animate like this:**

- Fade up each stat block with a stagger.
- Animate number count-up on first view.
- Keep the labels static after reveal.

### Gallery Preview Section

**Animate like this:**

- Reveal each image with subtle opacity and scale.
- Stagger left and right images slightly.
- Add a very soft hover zoom on desktop only if images are interactive.

### “You are looking for depth” Section

**Animate like this:**

- Fade up heading first.
- Fade up body and bullet-style points with small stagger.
- Keep movement small and clean.

### “How We Can Work Together” Cards

**Animate like this:**

- Reveal the section heading first.
- Stagger the service cards.
- Each card can have:
  - fade-up on enter
  - slight hover lift
  - very subtle image zoom on hover
- CTA text or arrows can shift by `2px` to `4px` on hover.

**Important:**

- Do not change card dimensions.
- Do not scale the full card enough to affect layout.

### Testimonials / “From the Room”

**Animate like this:**

- Fade the whole section in.
- Stagger testimonial cards or blocks.
- Keep motion restrained to support reading.

### Newsletter / “Words for the Journey”

**Animate like this:**

- Fade up the section once.
- Add subtle focus transitions on form inputs using existing UI styles.
- Button hover can use tiny scale or elevation.

### Final CTA / Contact Strip

**Animate like this:**

- Fade up the title and body.
- Fade in contact details slightly after.

---

## 2. About Page

### Hero / Intro (“A little backstory”)

- Fade up the image.
- Fade up the heading and paragraphs in staggered order.
- Keep this section calm and editorial.

### “What sets me apart”

- Fade up heading.
- Stagger each supporting line or point.
- Keep transitions light since the section is text-heavy.

### “What I Do”

**Animate like this:**

- Reveal text and image as two coordinated halves.
- If layout alternates image/text, animate from the same fade-up pattern rather than opposing slide-ins.
- CTA button can use subtle hover scale and lift.

### “Signature topics”

**Animate like this:**

- Stagger cards on reveal.
- Use hover lift and slight image emphasis.
- Keep card motion uniform across all three.

### Testimonials / “From the Room”

- Use the same testimonial animation style as the homepage.
- Keep cross-page consistency.

### “Let’s create something meaningful”

- Fade in title, copy, and button in sequence.
- Keep the button responsive and minimal.

### Newsletter and Final CTA

- Reuse the same motion pattern from the homepage.

---

## 3. Gallery Page

### Page Intro

- Fade up heading and body text.
- Keep it simple.

### Gallery Grid

**Best approach:**

- Use staggered reveal by row or by small batches.
- Each image should use:
  - opacity from `0` to `1`
  - scale from `0.985` to `1`
- On hover:
  - tiny image zoom
  - optional slight shadow increase if already present in UI

**Important performance rule:**

- Do not animate all images heavily at once.
- Prefer lightweight `whileInView` reveals.
- Keep transitions efficient.

**Do not:**

- rotate images
- apply large hover transforms
- use masonry reshuffle effects
- use lightbox-like animation unless a lightbox already exists

### Newsletter and Final CTA

- Reuse the same motion pattern as other pages for consistency.

---

## 4. Podcast Page

### Hero Section

**Animate like this:**

- Use the same motion language as the homepage hero.
- Stagger:
  1. heading
  2. supporting copy
  3. primary CTA
- Reveal image assets with soft scale and fade.

### “You will feel at home here if”

**Animate like this:**

- Fade up heading.
- Stagger each line of supporting text.
- Keep it readable and warm.

### “Available On” Platform Blocks

**Animate like this:**

- Stagger platform items with a small delay.
- Add subtle hover feedback if the cards or links are clickable.
- Keep icons and labels stable.

### “Recent Episodes”

**Animate like this:**

- Reveal section heading first.
- Stagger episode cards or entries.
- Add hover lift to each episode row or card.
- CTA link like “Listen” can have a soft underline or x-axis nudge.

### “From the Listeners”

- Use the same testimonial motion as other testimonial sections.

### Story Submission Form

**Animate like this:**

- Fade up section once.
- Inputs should not slide around.
- Use subtle focus and submit button interactions only.
- Keep form behavior fast and stable.

### Newsletter and Final CTA

- Reuse the same site-wide motion pattern.

---

## 5. Contact Page

### Intro Section

- Fade up heading and supporting copy.
- Reveal accompanying image with slight scale-in.

### Contact Info Block

**Animate like this:**

- Stagger each contact item lightly.
- Social icons or links can use small hover motion.
- Keep the section grounded and professional.

### Inquiry Form

**Animate like this:**

- Fade up the form container once.
- Add micro-interactions only:
  - input focus transitions
  - button hover/tap
- No large motion inside forms.

### Newsletter and Final CTA

- Use the same shared motion pattern as other pages.

---

# Site-Wide Shared Motion Rules

## Section reveals

- Every major section should reveal once.
- Use one shared reveal pattern across all pages for consistency.

## Cards

- Cards may lift slightly on hover.
- Maximum hover lift should stay subtle.
- Never enlarge enough to break alignment.

## Buttons

- Buttons can use:
  - very small scale-down on tap
  - tiny lift or shadow emphasis on hover

## Images

- Prefer:
  - soft reveal
  - tiny hover zoom
- Avoid:
  - aggressive pan
  - spin
  - large mask animations

## Text

- Headings and paragraph groups should use staggered fade-up.
- Keep text motion fast enough that users can start reading immediately.

## Forms

- Keep form motion minimal.
- Prioritize responsiveness and trust.

## Mobile

- Reduce animation intensity on smaller screens.
- Keep timings slightly shorter on mobile.
- Avoid stacked delays that make mobile feel slow.

---

# Implementation Guidance

## Framer Motion Setup

Use Framer Motion for:

- section entry
- staggered content
- hover states
- micro-interactions

Do not use it for layout-changing animation unless absolutely necessary.

## Suggested structure

### `lib/motion.ts`

Store:

- variants
- transition presets
- reduced motion fallbacks

### Example presets

- `fadeInUp`
- `fadeIn`
- `scaleIn`
- `staggerContainer`
- `staggerItem`
- `hoverLift`

### Section wrapper pattern

Create a reusable `SectionReveal` component and apply it to each major section.

### Card wrapper pattern

Create a reusable `AnimatedCard` wrapper for:

- service cards
- testimonial cards
- episode cards
- platform items

---

# Motion Consistency Map

## Use the same pattern for:

- newsletter sections across all pages
- final CTA sections across all pages
- testimonial sections across all pages
- hero sections on home and podcast
- card-based sections on home, about, and podcast

This keeps the experience cohesive.

---

# Things to Avoid

- No page-transition spectacle.
- No full-screen wipe transitions.
- No bouncing cards.
- No delayed text that feels slow to read.
- No animation that changes measured layout.
- No overlapping motion styles from section to section.
- No random one-off effects.

---

# Success Criteria

The animation work is successful if:

- the UI looks exactly the same at rest
- the site feels more premium and alive
- motion improves rhythm and focus
- users notice polish, not effects
- all sections feel part of one motion system
- performance remains smooth

# Final Instruction for the Codebase

Implement animation as a restrained system, not decoration. Preserve the current design exactly. Use Framer Motion to add smooth opacity, slight upward reveal, subtle stagger, light hover lift, and gentle image emphasis. Keep everything elegant, modern, and consistent across all pages.
