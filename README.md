# Sweet Crumbs Bakery Website

**Student project:** Neol Baloyi  
**Module:** WEDE5020 Web Development (Introduction)  
**Year:** 2026

## Project overview
Sweet Crumbs Bakery is a responsive multi-page bakery website designed to provide clear product information, services, a gallery, contact details and an enquiry workflow.

## Pages
- `index.html` - Home and call-to-action
- `about.html` - Story, mission and values
- `products.html` - Product/menu catalogue
- `services.html` - Bakery services
- `gallery.html` - Visual gallery
- `enquiry.html` - Validated enquiry form
- `contact.html` - Contact and business details

## Technical implementation
- Semantic HTML5: header, nav, main, section, article, figure, footer
- External stylesheet: `css/style.css`, structured by section and commented
- External JavaScript: `js/script.js`, commented rule-by-rule
- Original SVG imagery: hero illustration, 13 card icons and 6 gallery
  images in `assets/`, all responsive (`max-width: 100%`, `object-fit`)
- Responsive layouts using CSS Grid, Flexbox and two media query breakpoints
  (800px, 520px), plus an accessible mobile navigation toggle
- Pseudo-class states throughout: `:hover`, `:focus-visible`, `:active`,
  `:nth-child()`, `:first-child`, `:not(:last-child)`, `:invalid`
- Accessible labels, skip link, current-page navigation and live validation
  feedback
- Client-side required-field and email validation
- Consistent navigation and footer across all pages
- Sources cited in `REFERENCES.md`
- Part 1 feedback traceability in `FEEDBACK_MATRIX.md`
- Final pre-submission checks in `SUBMISSION_CHECKLIST.md`

## Folder structure
```text
SweetCrumbsBakery/
├── index.html
├── about.html
├── products.html
├── services.html
├── gallery.html
├── enquiry.html
├── contact.html
├── README.md
├── CHANGELOG.md
├── REFERENCES.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── hero-cake.svg
    ├── icons/
    │   └── (13 card icons used across Home, Products and Services)
    └── gallery/
        └── (6 illustrated gallery images)
```

## How to run
Open `index.html` in a modern browser. No server or build process is required.

## Testing checklist
1. Open every navigation link.
2. Resize the browser to desktop and mobile widths.
3. Submit the enquiry form empty to test validation.
4. Enter an invalid email to test error handling.
5. Submit valid details and confirm the success message appears.
6. Check keyboard navigation and the skip link.

## Academic alignment
The project is structured to support the WEDE5020 rubric areas for semantic HTML, sufficient content, navigation, comments, responsive presentation, project organisation and GitHub documentation.

## Real image sources
The website uses real bakery photographs from Wikimedia Commons. The selected Unsplash photographs were published before 5 June 2017 under the Creative Commons CC0 1.0 dedication, as documented on their Wikimedia Commons file pages.

Sources used: 
- The Bakery (Unsplash), Rhett Noonan: https://commons.wikimedia.org/wiki/File:The_Bakery_(Unsplash).jpg
- Chocolate Cake (Unsplash), Toa Heftiba: https://commons.wikimedia.org/wiki/File:Chocolate_Cake_(Unsplash).jpg
- Gourmet Cupcakes (Unsplash), Clem Onojeghuo: https://commons.wikimedia.org/wiki/File:Gourmet_Cupcakes_(Unsplash).jpg
- Bread at a Bakery (Unsplash), Roman Kraft: https://commons.wikimedia.org/wiki/File:Bread_at_a_Bakery_(Unsplash).jpg
- Artisan Loaves of Bread (Unsplash), Drew Coffman: https://commons.wikimedia.org/wiki/File:Artisan_Loaves_of_Bread_(Unsplash).jpg
