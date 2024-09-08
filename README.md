File Structure

/project-root
  ├── /dist                # All compiled and production-ready files
  │   ├── /assets          # CSS, images, and JavaScript files
  │   │   ├── /css         # Compiled CSS
  │   │   │   └── output.css
  │   │   ├── /js          # JavaScript files
  │   │   │   └── main.js
  │   │   └── /img         # Images
  │   │       └── logo.png
  │   ├── index.html       # Home page
  │   ├── about.html       # About page
  │   ├── contact.html     # Contact page
  ├── /styles              # Source files for styles
  │   └── custom.css
  │   └── tailwind.css
  ├── /scripts             # Source files for JavaScript
  │   └── dropdown.js
  ├── netlify.toml         # Netlify configuration (optional but recommended)
  └── package.json         # Your npm package details

SiteMap Generator

Ensure to update the sitemap script before build so all pages can be captured for SEO 