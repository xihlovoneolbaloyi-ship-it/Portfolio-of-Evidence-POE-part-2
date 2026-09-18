# Website Project Proposal B — Sweet Crumbs Bakery (Final)

**Student:** Neol Baloyi  
**Module:** WEDE5020 Web Development (Introduction)  
**Date:** September 2026

> **Two proposals note:**  
> - **Proposal A** (initial concept) is documented in `PROPOSAL_A_CONCEPT.md`.  
> - **Proposal B** (this document) is the expanded, final proposal that was implemented.

---

## 1. Goals and objectives


**Primary goal:** Create a clear, professional multi-page website that introduces a fictional Johannesburg bakery and allows potential customers to explore products, services and submit enquiries.

**Objectives:**

1. Communicate brand identity (warm, local, celebration-focused).
2. Present a practical product menu with indicative pricing.
3. Explain custom and catering services.
4. Provide a visual gallery of bakery products.
5. Collect structured enquiries via a validated form.
6. Deliver an accessible, responsive experience across desktop, tablet and mobile.
7. Demonstrate introductory web-development skills: semantic HTML5, organised CSS, basic JavaScript and proper project documentation.

## 2. Current analysis

Many small bakeries rely on social media alone. A simple brochure-style website gives customers a stable place to:

- See what the bakery offers without scrolling through posts.
- Find contact details and opening hours quickly.
- Submit an enquiry that captures the information the bakery needs (date, type of order, message).

Competitor sites often suffer from unclear navigation, missing mobile support or forms that do not validate. This project prioritises clear structure, mobile usability and client-side validation.

## 3. Proposed website features and functionality

| Feature | Description |
|---------|-------------|
| Home page | Hero message, three value propositions, calls-to-action |
| About page | Story, mission and values |
| Products page | Six product categories with short descriptions and prices |
| Services page | Custom cakes, catering, event orders, gift boxes + ordering process |
| Gallery page | Six illustrated product scenes with captions |
| Enquiry page | Form with name, email, enquiry type, optional date, message; client-side validation and success feedback |
| Contact page | Address, hours, email, phone and guidance for customers |
| Navigation | Consistent header + footer links on every page; mobile toggle |
| Accessibility | Skip link, ARIA attributes, focus styles, reduced-motion support |

## 4. Design aesthetic

- **Palette:** Warm brown (`#6b3e2e`), cream (`#fff8ee`), peach (`#f7d7c4`), gold (`#d99a3d`), dark ink (`#2f211c`).
- **Typography:** Poppins for headings, Open Sans for body text (Google Fonts).
- **Style:** Soft rounded cards, gentle shadows, clean spacing. Feels approachable and bakery-like without excessive decoration.
- **Imagery:** Original SVG icons and gallery illustrations so the project remains fully self-contained and free of broken external links.

## 5. Wireframes / information architecture (textual)

```
Home
 ├── Hero + CTAs
 ├── Why choose us (3 cards)
 └── Band → Services

About
 ├── Story
 └── Mission & values (3 cards)

Products
 └── 6 product cards (cake, cupcake, bread, cookie, pastry, gift)

Services
 ├── 4 service cards
 └── How ordering works

Gallery
 └── 6 figures with captions

Enquiry
 └── Validated form

Contact
 ├── Details card
 └── Guidance card
```

All pages share the same header (brand + nav) and footer (explore links + contact summary).

## 6. Technical requirements

- HTML5 with semantic landmarks.
- External CSS file using custom properties (design tokens), Flexbox, Grid and media queries.
- External JavaScript for mobile menu and form validation only (no frameworks).
- Local SVG assets only.
- Works when opened directly in a browser (no server required).
- Target modern browsers; progressive enhancement for older ones.

## 7. Timeline (indicative)

| Phase | Activity | Target |
|-------|----------|--------|
| 1 | Proposal, structure and content outline | Early September 2026 |
| 2 | HTML pages and basic CSS layout | Mid September 2026 |
| 3 | Styling, responsive behaviour, form validation | Mid–late September 2026 |
| 4 | Assets, documentation, testing and refinements | 16–18 September 2026 |
| 5 | Final packaging and submission | 18 September 2026 |

## 8. Budget outline (student project)

This is an academic project. No commercial hosting or paid assets are required.

| Item | Estimated cost |
|------|----------------|
| Domain / hosting | R0 (local files / free student hosting if used) |
| Fonts | R0 (Google Fonts) |
| Images / icons | R0 (original SVGs) |
| Tools | R0 (code editor, browser) |
| **Total** | **R0** |

If the site were later published commercially, typical low-cost shared hosting and a domain would be in the region of R100–R300 per year.

## 9. Sitemap (text representation)

```
index.html (Home)
about.html (About)
products.html (Products)
services.html (Services)
gallery.html (Gallery)
enquiry.html (Enquiry)
contact.html (Contact)
```

All pages are reachable from the primary navigation and from the footer “Explore” links.

## 10. File and folder structure

See the README.md “Folder structure” section for the final organised layout used in this submission.
