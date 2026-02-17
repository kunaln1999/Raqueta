# Raqueta Cafetería | Design & Development Guidelines

This document outlines the core architectural and design standards for the Raqueta Cafetería web project. Adhering to these guidelines ensures a consistent, premium, and luxury experience across all pages.

---

## 1. Visual Identity & Theme

The project follows a **Luxury Minimalism** aesthetic, characterized by generous whitespace, refined typography, and a strict "No Animation" policy.

### Color Palette (CSS Variables)
Always use the predefined CSS variables in `styles.css` for color consistency:

- **Primary Green (`--primary-green`)**: `#1a3c34` - The dominant color for backgrounds, headers, and footer.
- **Subtle Pink (`--accent-pink`)**: `#f8d7da` - Used only for highlights, accents, and thin borders.
- **Off-White (`--bg-off-white`)**: `#faf9f6` - The default background for light sections to provide soft contrast.
- **Text White (`--text-white`)**: `#ffffff` - Used on dark green backgrounds.
- **Text Dark (`--text-dark`)**: `#1a3c34` - Primary text color for light sections.

### Typography
- **Logos & Branding**: 'Satisfy' (Cursive).
- **Headings (H1-H4)**: 'Playfair Display' (Serif, Weight 700).
- **Body & Navigation**: 'Inter' (Sans-serif).

---

## 2. Global Component: `.btn-submit`

To maintain a unified user experience, **every** form submission button must use the `.btn-submit` class. This ensures consistent sizing, colors, and premium feel.

### Usage Guidelines:
- **Background**: `var(--primary-green)`
- **Text Color**: `var(--text-white)`
- **Font Weight**: `600` (Semi-bold)
- **Size**: `1rem` font with `16px` padding.
- **Logic**: All buttons with this class are automatically handled by the global `script.js` form listener.

```html
<!-- Proper usage in any form -->
<button type="submit" class="btn btn-submit">Action Text</button>
```

---

## 3. Core File Aspects

### Modular Architecture
The project uses a modular approach for the Header and Footer to avoid code duplication:
- **`header.js`**: Contains the `initHeader()` function. It dynamically detects the current page to apply the `.active` class to the contact link.
- **`footer.js`**: Contains the `initFooter()` function with standardized brand tagline and quick links.
- **`script.js`**: The central orchestrator. It imports and initializes components and handles global form logic.

### Layout Constraints
- **Maximum Border Radius**: **12px** anywhere on the site. No fully rounded pills or sharp corners.
- **Container Width**: Max **1200px**, centered.
- **No Animations**: No transitions, fades, or hover movements. This maintains a "solid" and prestigious feel.

---

## 4. Brand Specifics & Contact Information

### Official Address
- **Location**: 123 Luxury Lane, Metropolis, IL, USA.
- **Pinpoint**: The embedded map in `contact.html` is centered on Metropolis, IL.

### Contact Details
- **Email**: `hello@raqueta.com` (Press: `media@raqueta.com`)
- **Phone**: `+1 (555) 0123 4567`
- **Hours**:
    - **Mon-Thu**: 7 AM - 9 PM
    - **Fri-Sat**: 8 AM - 11 PM
    - **Sun**: 8 AM - 8 PM

---

## 5. Adding New Images
All images should be saved in the `/images` directory as `.webp` for performance.
- Use **Moody Lighting** and **Food Photography** style.
- Preferred themes: Marble textures, brass accents, deep green fabrics, and high-detail coffee extractions.
