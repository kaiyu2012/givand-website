# Quick Deployment Guide for Cloudflare Pages

## Step-by-Step Instructions

### Prerequisites
- Cloudflare account: sunlibo@yahoo.com
- GitHub account (for automatic deployments)

---

## ⚡ Quick Deploy (5 minutes)

### Option A: Using GitHub (Recommended for automatic updates)

1. **Create GitHub repository and push code**
   ```bash
   # If you haven't already, create a new repository on GitHub
   # Then run these commands:

   git add .
   git commit -m "Initial Givand website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/givand-website.git
   git push -u origin main
   ```

2. **Deploy via Cloudflare Dashboard**
   - Login: https://dash.cloudflare.com/ (sunlibo@yahoo.com)
   - Click "Workers & Pages" in sidebar
   - Click "Create application" → "Pages" → "Connect to Git"
   - Select your GitHub repository
   - Configure build:
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Click "Save and Deploy"
   - Done! Your site will be live at `https://your-project.pages.dev`

### Option B: Direct Upload (No GitHub needed)

1. **Build the website**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Cloudflare**
   ```bash
   # Install Wrangler (Cloudflare CLI)
   npm install -g wrangler

   # Login to Cloudflare
   wrangler login
   # Use account: sunlibo@yahoo.com

   # Deploy
   wrangler pages deploy dist --project-name=givand
   ```

3. **Done!** Your site is now live.

---

## 🌐 Custom Domain Setup (givand.com)

### If your domain is already on Cloudflare:

1. In your Pages project dashboard:
   - Click "Custom domains"
   - Click "Set up a custom domain"
   - Enter: `givand.com`
   - Click "Continue"
   - Cloudflare will automatically configure DNS

2. Add www subdomain (optional):
   - Add another custom domain: `www.givand.com`
   - Cloudflare will handle the rest

### If your domain is NOT on Cloudflare yet:

1. **Transfer nameservers to Cloudflare**
   - Add `givand.com` to your Cloudflare account
   - Cloudflare will provide nameservers (e.g., `ns1.cloudflare.com`)
   - Update nameservers at your domain registrar
   - Wait for propagation (usually 24-48 hours)

2. **Then follow the steps above** to add custom domain

---

## 🔄 Automatic Deployments

If you used GitHub integration (Option A):
- Every push to `main` branch automatically triggers a new deployment
- No manual steps needed after initial setup
- Build logs available in Cloudflare dashboard

---

## ✅ Verify Deployment

After deployment, check:
- [ ] Website loads at the Cloudflare URL
- [ ] All sections display correctly (Home, Services, About, Contact)
- [ ] Mobile responsive design works
- [ ] Contact form opens email client
- [ ] All animations work smoothly
- [ ] SEO meta tags are present (view page source)

---

## 📝 Important Notes

1. **Build Time**: First build takes 1-2 minutes
2. **SSL Certificate**: Automatically provided by Cloudflare (HTTPS enabled)
3. **Global CDN**: Your site is automatically distributed globally
4. **Analytics**: Available in Cloudflare Pages dashboard
5. **Environment Variables**: Can be set in Pages settings if needed later

---

## 🆘 Troubleshooting

**Build fails?**
- Check build logs in Cloudflare dashboard
- Ensure Node.js version is 18 or higher in build settings

**Custom domain not working?**
- DNS propagation can take up to 48 hours
- Check DNS settings in Cloudflare dashboard
- Ensure nameservers are correctly configured

**Need help?**
- Cloudflare Docs: https://developers.cloudflare.com/pages/
- Support: Cloudflare dashboard → Support

---

## 🚀 Next Steps After Deployment

1. **Test the website thoroughly**
2. **Set up custom domain** (if not done already)
3. **Configure Web Analytics** in Cloudflare
4. **Enable email forwarding** for sunlibo@givand.com
5. **Submit sitemap** to Google Search Console
6. **Add to business directories** (Google Business, etc.)

---

**Deploy Account**: sunlibo@yahoo.com
**Recommended Project Name**: `givand` or `givand-website`
**Production URL**: Will be assigned after deployment
