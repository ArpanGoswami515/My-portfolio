# Deployment Guide for Arpan Goswami's Portfolio

## Pre-Deployment Checklist

### 1. Update URLs
Before deploying, update all placeholder URLs in the following files:
- [ ] `index.html` - Replace `https://arpangoswami.com/` with your actual domain
- [ ] `sitemap.xml` - Update all URLs with your domain
- [ ] `robots.txt` - Update sitemap URL

### 2. Add Favicon
Create and add favicon files (you can use https://realfavicongenerator.net/):
- [ ] `favicon.ico`
- [ ] `apple-touch-icon.png` (180x180)
- [ ] `favicon-32x32.png`
- [ ] `favicon-16x16.png`

### 3. Optimize Images
- [ ] Compress `resources/me.jpg` (use TinyPNG or similar)
- [ ] Consider adding WebP versions for better performance

### 4. Test Locally
- [ ] Open `index.html` in multiple browsers
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Verify all external links work

## Deployment Options

### Option 1: GitHub Pages (FREE)
**Best for: Quick deployment, free hosting**

1. Create a new repository named `arpangoswami515.github.io`
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select branch: `main`, folder: `/ (root)`
5. Save and wait 2-3 minutes
6. Your site will be live at `https://arpangoswami515.github.io`

**Custom Domain:**
- Add a file named `CNAME` with your domain: `arpangoswami.com`
- Configure DNS records at your domain registrar

### Option 2: Netlify (FREE)
**Best for: Automatic deployments, custom domain, HTTPS**

1. Sign up at https://netlify.com
2. Click "Add new site" > "Deploy manually"
3. Drag and drop your portfolio folder
4. Site will be live instantly at a netlify.app subdomain
5. Add custom domain in Site settings

**Or via Git:**
- Push to GitHub
- Connect Netlify to your repository
- Automatic deployments on every push

### Option 3: Vercel (FREE)
**Best for: Next.js optimization, edge functions**

1. Sign up at https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Deploy (automatic)
5. Add custom domain in project settings

### Option 4: Traditional Hosting (Paid)
**Best for: Full control, existing hosting plan**

**Popular Hosts:**
- Hostinger (₹99/month)
- Bluehost (₹199/month)
- SiteGround (₹299/month)

**Steps:**
1. Purchase hosting and domain
2. Access cPanel or FTP
3. Upload all files to `public_html` folder
4. Enable SSL certificate
5. Site will be live at your domain

## Post-Deployment Tasks

### 1. Add Analytics
**Google Analytics:**
```html
<!-- Add before </head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Submit to Search Engines
- [ ] Google Search Console: https://search.google.com/search-console
- [ ] Bing Webmaster Tools: https://www.bing.com/webmasters
- [ ] Submit sitemap.xml

### 3. Test SEO
- [ ] Google PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- [ ] Rich Results Test: https://search.google.com/test/rich-results

### 4. Social Media Preview
Test how your site looks when shared:
- [ ] Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- [ ] Twitter Card Validator: https://cards-dev.twitter.com/validator
- [ ] LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

### 5. Security
- [ ] Enable HTTPS/SSL
- [ ] Add security headers
- [ ] Test with SSL Labs: https://www.ssllabs.com/ssltest/

### 6. Performance
- [ ] Enable GZIP compression
- [ ] Minify CSS/JS (optional)
- [ ] Set up CDN (optional)
- [ ] Enable browser caching

## Recommended: GitHub Pages Setup

**Step-by-step for beginners:**

```bash
# 1. Initialize git (if not already)
cd "e:\Business\portfolio website"
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial portfolio deployment"

# 4. Create repository on GitHub named: arpangoswami515.github.io

# 5. Add remote and push
git remote add origin https://github.com/ArpanGoswami515/arpangoswami515.github.io.git
git branch -M main
git push -u origin main

# 6. Wait 2-3 minutes, then visit: https://arpangoswami515.github.io
```

## Custom Domain Setup (GitHub Pages)

1. Buy domain from Namecheap, GoDaddy, or Google Domains
2. Add DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: arpangoswami515.github.io
   ```
3. Add `CNAME` file to repository with your domain
4. Enable HTTPS in GitHub Pages settings

## Maintenance

- Update projects regularly
- Keep dependencies updated
- Monitor analytics
- Respond to contact form submissions
- Backup your site monthly

## Need Help?

- GitHub Pages Docs: https://docs.github.com/pages
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs

---

**Your portfolio is ready to go live! Choose a deployment option and follow the steps above.**
