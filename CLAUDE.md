# Portfolio website: build brief

I'm Vishek Masalia, an M.S.E. Robotics student at Johns Hopkins University. We are building my personal portfolio website to show what I can BUILD as a robotics/mechanical engineer. Priority order: PROJECTS > VISUAL EVIDENCE > ENGINEERING PROCESS > TECHNICAL DETAILS > EXPERIENCE/EDUCATION > RESUME.

## Source of truth
- content/site-profile.md: profile, education, skills, experience, achievements, contact
- content/projects-index.md: FINAL tiering (featured / secondary / brief). Follow it exactly.
- content/projects/*.md: one file per project
- content/links.txt: videos, reports, publication
Do NOT invent, embellish, or infer any experience, technology, number, result, or achievement. If a content file says "NOT IN SOURCES" or leaves something unresolved, omit it from the site or leave a clearly visible TODO comment in the code. Never fill gaps with plausible text. Copy numbers and units exactly as written.

## Honesty rules for display
- In-progress projects (LeRobot SO-101, APLC) get a visible status label ("In progress" / "Concept"). Keep "Done so far" and "Planned" visibly separate. Planned work never appears as a result.
- Where my role on a team project is stated in the content files, use that wording. Don't upgrade it.
- No skill bars, percentages, or proficiency claims. Skills are grouped as the resume groups them.
- Only show links that exist. I have no GitHub, so no GitHub link or icon anywhere. Contact = email + LinkedIn only.
- Respect every "Public-sharing flags" section in the project files. Do not link or publish any document or image flagged as sensitive or unconfirmed. Do not publish the Clarifeye contract book.

## Tech constraints
- Plain HTML, CSS, and vanilla JavaScript. No framework, no build step, no npm dependencies. It must work as static files on GitHub Pages.
- All file paths lowercase with hyphens. Use relative paths so it works from a repo subfolder or a custom domain.
- Shared styles in one CSS file (design tokens as CSS variables), shared JS in one file. Shared header and footer markup must stay identical across pages.
- Images: use <picture>/<img> with width and height attributes (no layout shift), loading="lazy" except the hero, and descriptive alt text. Flag any image under ~1200 px wide that is used large.
- YouTube videos: use a click-to-load facade (thumbnail plus play button that swaps in the iframe) so pages stay fast. Portrait Shorts need a portrait-aware container.
- Headshot: use a clean placeholder in a single easy-to-swap spot. No stock photos anywhere.
- Accessible: semantic HTML, keyboard-navigable menu, visible focus states, sufficient contrast, respects prefers-reduced-motion.
- Include page titles, meta descriptions, and Open Graph tags.

## Design direction
Precise, engineered, intentional. Think robotics lab, hardware startup, aerospace documentation, technical product pages.
- Strong typography, efficient information density, subtle grid/technical elements (thin rules, figure labels like "FIG. 01", spec-sheet style captions)
- One restrained accent color on a neutral base. Flat colors.
- AVOID: gradients, glassmorphism, glow effects, floating blobs, stock robot imagery, 3D gimmicks, oversized type that sacrifices information, scroll-jacking, animating everything
- Animations: subtle only (card hover, gentle image reveal on scroll, smooth nav transitions, page entrance). Must support the content.
- Responsive: excellent on desktop, laptop, tablet, mobile. Desktop uses large imagery and asymmetric layouts. Mobile keeps hierarchy and doesn't become endlessly long. Clean mobile menu.

## Site structure
Nav: [Vishek Masalia] Projects, About, Resume, Contact, with a prominent Resume button, persistent on all pages.
Homepage: compact hero (title, short statement from the content files, [View Projects] [Download Resume], one-line technical summary using real skills) > Featured projects (large visual cards: PROJECT 01, title, tags, 1-2 sentences, image/video, View Project) > Engineering areas (categories derived from my actual content; no proficiency levels) > About (concise, placeholder photo) > Education/Experience timeline (visually secondary) > Resume CTA ("Interested in the full background?") > Contact ("Let's build something.").
Project pages: engineering case studies. Hero, overview, objective, approach (only relevant subsections), system/design, implementation (equations, diagrams, photos where they exist), results (large stat callouts only for documented numbers), engineering challenges, takeaways, links. Weave images into the narrative beside the text instead of one gallery at the bottom. Include only the sections that the content file actually supports. Depth should match the tier in projects-index.md: featured = full case study, secondary = shorter page, brief = card or short entry.