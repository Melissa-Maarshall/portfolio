# Design Brainstorm – Melissa Maarschalkerweerd Web CV

## Context
Senior Marketing Operations & Commercial Marketing Leader. 10+ years experience. Targeting recruiters and freelance clients. Needs to convey authority, precision, commercial acumen, and strategic thinking.

---

<response>
<probability>0.07</probability>
<idea>

**Design Movement:** Corporate Brutalism meets Editorial Precision

**Core Principles:**
1. Structural confidence — bold typographic hierarchy with deliberate asymmetry
2. Data-forward storytelling — key metrics and impact numbers rendered as visual anchors
3. Monochromatic restraint punctuated by a single warm accent (gold/amber)
4. Newspaper-editorial grid with intentional column breaks

**Color Philosophy:**
Deep charcoal (#1a1a1a) base with off-white (#f5f0e8) paper texture. Single accent: warm amber (#c9922a). Conveys gravitas and editorial authority — the palette of a Financial Times or Bloomberg profile, not a generic LinkedIn export.

**Layout Paradigm:**
Asymmetric editorial grid. Hero section is a full-bleed dark band with name in oversized display type (left-aligned, 80px+). Content flows in a 3-column newspaper grid with deliberate white-space gutters. Timeline rendered as a horizontal scrolling rail on desktop.

**Signature Elements:**
- Large ruled horizontal dividers (1px amber lines)
- Metric callouts in oversized numerals (R3–4M, 10+, 9 years) styled as pull-quotes
- Monogram "MM" mark in top-left corner as a personal brand logo

**Interaction Philosophy:**
Scroll-triggered section reveals. Hover on experience cards lifts them with a subtle shadow. Metric counters animate up on scroll-into-view.

**Animation:**
Staggered fade-up on section entry (60ms delay between items). Counter animations for key stats. Smooth horizontal scroll for timeline.

**Typography System:**
- Display: Playfair Display (bold, 700) for name and section headers
- Body: Source Serif 4 (400/600) for descriptions
- Accent: DM Mono (400) for dates, labels, and metric callouts

</idea>
</response>

<response>
<probability>0.06</probability>
<idea>

**Design Movement:** Swiss International Typographic Style (Modernist Corporate)

**Core Principles:**
1. Grid discipline — strict 12-column layout with mathematical spacing
2. Typography as the primary visual element — no decorative imagery
3. Information hierarchy through scale and weight alone
4. Negative space as a premium signal

**Color Philosophy:**
Pure white (#ffffff) with deep navy (#1e3a5f) and a single electric teal accent (#0891b2). Clean, clinical, trustworthy. The palette of McKinsey or BCG — signals strategic consulting credibility.

**Layout Paradigm:**
Strict vertical rhythm. Fixed left sidebar (280px) for contact, skills, and navigation. Main content area scrolls independently. Each section is a clearly delineated block with consistent top-margin rhythm (64px between sections).

**Signature Elements:**
- Thin vertical rule separating sidebar from main content
- Competency bars rendered as precise horizontal progress indicators
- Section labels in small-caps tracking (letter-spacing: 0.15em)

**Interaction Philosophy:**
Sidebar navigation highlights active section on scroll (IntersectionObserver). Smooth scroll to sections. Print-optimised stylesheet included.

**Animation:**
Minimal — only section fade-in on first scroll. No distracting motion. Respects reduced-motion preferences.

**Typography System:**
- Display: Sora (800) for name
- Headers: Sora (600) for section titles
- Body: Lato (400/700) for content
- Labels: Sora (500, small-caps) for metadata

</idea>
</response>

<response>
<probability>0.08</probability>
<idea>

**Design Movement:** Contemporary Executive Brand — Dark Teal Prestige

**Core Principles:**
1. Executive presence — dark, rich colour palette that signals seniority and confidence
2. Strategic whitespace — generous padding creates a premium, unhurried reading experience
3. Metric-led storytelling — key numbers (R3–4M budget, 10+ years, 9 years at ADreach) are visual anchors
4. Horizontal section architecture — full-width bands alternate between dark and light for visual rhythm

**Color Philosophy:**
Deep navy-teal (#1e3d4f) as the dominant background for hero and accent sections. Warm off-white (#f8f6f2) for content sections. Gold accent (#b8860b / #d4a843) for highlights, borders, and CTAs. This palette mirrors the LinkedIn CV's existing dark sidebar — creating visual continuity between the web CV and her existing materials.

**Layout Paradigm:**
Full-width horizontal band architecture. Hero: full-bleed dark teal with name and title. Stats bar: dark band with 3 key metrics. Experience: light alternating cards. Skills: dark band with tag cloud. Education: light section. Contact: dark footer. No traditional sidebar — content flows edge-to-edge with internal max-width containers.

**Signature Elements:**
- Thin gold horizontal rule beneath section headings
- Impact metric cards (3 stats in hero area: "10+ Years", "R3–4M Budget", "AMASA Award")
- Subtle diagonal clip-path transitions between dark and light sections

**Interaction Philosophy:**
Scroll-triggered animations. Sticky navigation bar appears after scrolling past hero. Smooth section transitions. Download CV button in hero.

**Animation:**
Hero text slides in from left on load. Stats count up on scroll-into-view. Section cards fade up with stagger. Navigation bar fades in on scroll.

**Typography System:**
- Display: Cormorant Garamond (700) for name — elegant, authoritative
- Headers: Raleway (700) for section titles
- Body: Nunito Sans (400/600) for readable body text
- Accent: Raleway (500, uppercase, tracked) for labels and metadata

</idea>
</response>

---

## Selected Design: Contemporary Executive Brand — Dark Teal Prestige

Chosen for its visual continuity with Melissa's existing CV materials, its executive authority, and its metric-led storytelling approach that immediately communicates commercial impact to recruiters.
