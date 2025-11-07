# Givand Logo Guide

## Logo Files

Your Givand logo has been created with multiple variations for different use cases:

### 📁 Available Logo Files

#### 1. **logo.svg** (200x60px)
- **Use for**: Website header, email signatures, documents
- **Format**: Horizontal layout with icon + text
- Contains: Logo icon + "GIVAND" + "IMPORT & EXPORT"

#### 2. **logo-horizontal.svg** (280x80px)
- **Use for**: Headers, banners, presentations
- **Format**: Extended horizontal layout
- Contains: Logo icon + "GIVAND" + "IMPORT & EXPORT CO., LTD."

#### 3. **logo-icon.svg** (48x48px)
- **Use for**: Social media profile pictures, app icons, favicons
- **Format**: Square icon only
- Contains: Just the building blocks + G letter symbol

#### 4. **favicon.svg** (64x64px)
- **Use for**: Browser tab icon
- **Format**: Square with background
- Automatically used in the website

## Logo Design Concept

### Visual Elements

1. **Building Blocks Pattern**
   - Represents building materials and construction
   - Geometric blocks symbolize strength and structure
   - Blue gradient represents trust and professionalism

2. **Letter "G"**
   - Central "G" for Givand
   - Integrated into the building blocks design
   - White color for contrast and clarity

3. **Color Scheme**
   - Primary Blue (#0ea5e9): Modern, trustworthy
   - Dark Blue (#0369a1): Professional, stable
   - Sky Blue (#38bdf8): Fresh, accessible
   - Gradient effect adds depth and dimension

### Typography

- **Font**: Arial (sans-serif) - Clean and professional
- **GIVAND**: Bold, prominent company name
- **IMPORT & EXPORT**: Lighter weight, descriptive tagline

## Usage Guidelines

### ✅ Do:
- Use the logo on white or light backgrounds for best visibility
- Maintain aspect ratio when resizing
- Use SVG format for web (scalable and crisp)
- Ensure adequate spacing around the logo

### ❌ Don't:
- Don't distort or stretch the logo
- Don't change the colors
- Don't add effects or shadows
- Don't use on busy backgrounds without a container

## Where the Logo is Used

Currently integrated in:

1. **Website Header** (`src/components/Header.tsx`)
   - Uses: `logo-icon.svg`
   - Displays on every page

2. **Website Footer** (`src/components/Footer.tsx`)
   - Uses: `logo-icon.svg`
   - Displays on every page

3. **Browser Tab** (`index.html`)
   - Uses: `favicon.svg`
   - Shows when website is bookmarked

## Exporting for Print or Other Uses

If you need the logo in other formats (PNG, JPG, PDF):

### Online Conversion (Easy)
1. Visit: https://cloudconvert.com/svg-to-png
2. Upload the SVG file you need
3. Convert to desired format (PNG, JPG, PDF)
4. Download and use

### Recommended Export Sizes
- **Social Media Profile**: 512x512px (use logo-icon.svg)
- **Business Card**: 300 DPI, actual size needed
- **Letterhead**: 300 DPI, 2-3 inches wide
- **Large Banner**: SVG preferred (infinitely scalable)

## Files Location

```
public/
├── logo.svg              # Standard horizontal logo
├── logo-horizontal.svg   # Extended horizontal logo
├── logo-icon.svg        # Icon/symbol only
└── favicon.svg          # Browser favicon
```

## Need Changes?

All logo files are in SVG format, which means they're:
- ✅ Scalable to any size without quality loss
- ✅ Editable in vector graphics software (Adobe Illustrator, Inkscape, Figma)
- ✅ Small file size for fast web loading
- ✅ Perfect for both screen and print

---

**Created for**: Ningbo Givand Import and Export Co., Ltd.
**Date**: November 2025
**Format**: SVG (Scalable Vector Graphics)
