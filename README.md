# Givand Website

Official website for Ningbo Givand Import and Export Co., Ltd.

## About

This is a modern, responsive React website built with Vite, TypeScript, TailwindCSS, and Framer Motion. The website showcases Givand's building materials wholesale and export services from China.

## Features

- ⚡ Fast and responsive design with Vite
- 🎨 Modern UI with TailwindCSS
- ✨ Smooth animations with Framer Motion
- 📱 Mobile-first responsive design
- 🔍 SEO optimized with meta tags and keywords
- 🌐 Ready for international clients

## Local Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Cloudflare Pages

### Method 1: GitHub Integration (Recommended)

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/givand-website.git
   git push -u origin main
   ```

2. **Login to Cloudflare**
   - Go to https://dash.cloudflare.com/
   - Login with: sunlibo@yahoo.com

3. **Create a new Pages project**
   - Navigate to "Workers & Pages" in the sidebar
   - Click "Create application"
   - Select "Pages" tab
   - Click "Connect to Git"

4. **Connect GitHub repository**
   - Authorize Cloudflare to access your GitHub account
   - Select the `givand-website` repository

5. **Configure build settings**
   - **Project name**: `givand-website` (or `givand`)
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave as default)

6. **Deploy**
   - Click "Save and Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be available at: `https://givand-website.pages.dev`

7. **Set up custom domain (Optional)**
   - In your Pages project, go to "Custom domains"
   - Click "Set up a custom domain"
   - Enter `givand.com`
   - Follow DNS configuration instructions
   - Add the CNAME record to your domain's DNS settings

### Method 2: Direct Upload via Wrangler CLI

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```
   - Use account: sunlibo@yahoo.com

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Deploy to Cloudflare Pages**
   ```bash
   wrangler pages deploy dist --project-name=givand-website
   ```

### Method 3: Direct Upload via Dashboard

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Create ZIP file**
   ```bash
   cd dist
   zip -r ../givand-website.zip .
   cd ..
   ```

3. **Upload via Cloudflare Dashboard**
   - Login to https://dash.cloudflare.com/ with sunlibo@yahoo.com
   - Go to "Workers & Pages"
   - Click "Create application" → "Pages" → "Upload assets"
   - Name your project: `givand-website`
   - Upload the `givand-website.zip` file
   - Click "Deploy site"

## Custom Domain Setup

To use `givand.com` instead of `*.pages.dev`:

1. **In Cloudflare Dashboard**
   - Go to your Pages project
   - Click "Custom domains"
   - Add `givand.com` and `www.givand.com`

2. **DNS Configuration**
   - Go to Cloudflare DNS settings for givand.com
   - Add CNAME record:
     - Name: `@` or `www`
     - Target: `givand-website.pages.dev`
     - Proxy status: Proxied (orange cloud)

## SEO Keywords

The website is optimized for the following keywords:
- Building materials China
- Wholesale building materials
- Bulk purchase China
- Import export China
- Loading service China
- Shipment service
- Ningbo trading company
- Construction materials supplier
- China sourcing
- Building supplies wholesale

## Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Language**: TypeScript
- **Styling**: TailwindCSS 3
- **Animations**: Framer Motion 10
- **Deployment**: Cloudflare Pages

## Project Structure

```
givand-website/
├── public/             # Static assets
│   └── favicon.svg
├── src/
│   ├── components/     # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx        # Main app component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── index.html         # HTML template
├── package.json       # Dependencies
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind configuration
└── tsconfig.json      # TypeScript configuration
```

## Contact Information

**Company**: Ningbo Givand Import and Export Co., Ltd.
**Address**: Xiqiaotou, Miaoshan Village, Cicheng Town, Jiangbei District, Ningbo City, Zhejiang, China 315034
**Email**: info@givand.com
**Website**: https://givand.com

## License

© 2025 Ningbo Givand Import and Export Co., Ltd. All rights reserved.
