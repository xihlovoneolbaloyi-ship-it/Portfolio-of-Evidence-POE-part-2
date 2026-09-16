# Changelog

## 2026-09-16 - 1.2.0
- Added an accessible mobile navigation toggle to all seven pages using `aria-expanded` and `aria-controls`.
- Added keyboard-focus styling to the navigation toggle and a visually hidden screen-reader label.
- Added reduced-motion support for users who prefer less animation.
- Added `FEEDBACK_MATRIX.md` to explicitly trace Part 1 feedback to Part 2 changes.
- Added `SUBMISSION_CHECKLIST.md` with final technical, documentation and manual testing checks.
- Updated the README to document the mobile navigation and feedback-traceability files.


## 2026-09-16 - 1.1.0
Response to feedback that the site used emoji as placeholder imagery, had thin
pseudo-class coverage, and was missing a references list and readable/commented
source files.
- Replaced every emoji placeholder (hero art, 15 card icons, 6 gallery figures)
  with real, original SVG images under `assets/`, each using proper `<img>`
  markup, explicit `width`/`height`, and appropriate `alt` text (empty for
  decorative icons, descriptive for gallery content).
- Added responsive image rules to `css/style.css` (`max-width: 100%`,
  `object-fit: cover` on gallery figures) so all imagery scales correctly at
  every breakpoint.
- Reformatted `css/style.css` from a single minified line into a structured,
  commented stylesheet organised by section.
- Extended pseudo-class usage: `:focus-visible` and `:active` on links,
  buttons and form fields; `:nth-child()` and `:first-child` on card grids;
  `:not(:last-child)` on list items; `:invalid` on form inputs (previously
  only `:hover` and `:focus` were used).
- Rewrote `js/script.js` with section-by-section inline comments explaining
  each validation rule.
- Added `REFERENCES.md` citing Google Fonts, MDN, and WCAG sources used.
- Corrected the folder structure in `README.md` to match the project
  (added `assets/icons/`, `assets/gallery/`; removed the unused empty
  `assets/` placeholder).

## 2026-09-02 - 1.0.0
- Rebuilt the site into a consistent seven-page bakery experience.
- Added semantic HTML5 structure and accessible navigation.
- Added responsive CSS for desktop, tablet and mobile layouts.
- Expanded content across Home, About, Products, Services, Gallery and Contact pages.
- Replaced the placeholder gallery with accessible visual content.
- Added a complete enquiry form with required-field, email and message validation.
- Added success feedback after valid form submission.
- Added README documentation and testing checklist.
- Added descriptive JavaScript and CSS comments.

- Replaced decorative bakery SVG imagery with real bakery photographs from Wikimedia Commons/Unsplash.
- Added responsive photo styling for product, service and gallery cards.
- Added image-source and licensing documentation to README.
