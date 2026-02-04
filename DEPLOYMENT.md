# Deployment Guide

Deploy your Morolake Cares Initiatives website to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Method 1: GitHub Integration (Recommended)
1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to main branch triggers automatic deployment
   - Preview deployments for pull requests

### Method 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

## 🌐 Netlify

### Method 1: Drag & Drop
1. **Build the project**
   ```bash
   npm run build
   npm run export  # If using static export
   ```

2. **Deploy**
   - Visit [netlify.com](https://netlify.com)
   - Drag the `out` folder to Netlify

### Method 2: Git Integration
1. **Connect Repository**
   - New site from Git
   - Choose your repository
   - Build command: `npm run build`
   - Publish directory: `.next`

## ☁️ AWS Amplify

1. **Connect Repository**
   - Visit AWS Amplify Console
   - Connect your GitHub repository

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

## 🌊 DigitalOcean App Platform

1. **Create App**
   - Visit DigitalOcean App Platform
   - Create new app from GitHub

2. **Configuration**
   - Build command: `npm run build`
   - Run command: `npm start`
   - Environment: Node.js

## 🔧 Environment Variables

If you add environment variables, configure them in your deployment platform:

### Vercel
```bash
# Add via Vercel dashboard or CLI
vercel env add VARIABLE_NAME
```

### Netlify
```bash
# Add in Site Settings > Environment Variables
```

## 🌍 Custom Domain Setup

### Vercel
1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS records as shown

### Netlify
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Update DNS records

### DNS Configuration
```
Type: CNAME
Name: www
Value: your-site.vercel.app (or netlify.app)

Type: A
Name: @
Value: [Platform IP addresses]
```

## 📊 Performance Optimization

### Before Deployment
```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer

# Check for unused dependencies
npx depcheck

# Optimize images
# Use next/image component (already implemented)
```

### After Deployment
- Test with Google PageSpeed Insights
- Monitor Core Web Vitals
- Set up analytics (Google Analytics, etc.)

## 🔍 Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All navigation links work
- [ ] Donation link redirects properly
- [ ] Contact information is accurate
- [ ] Images load and display correctly
- [ ] Mobile responsiveness works
- [ ] Forms submit successfully (if any)
- [ ] Social media links work
- [ ] SSL certificate is active
- [ ] Custom domain configured (if applicable)

## 🚨 Troubleshooting

### Build Failures
```bash
# Check for TypeScript errors
npm run lint

# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Image Loading Issues
- Ensure image domains are configured in `next.config.js`
- Check image URLs are accessible
- Verify image formats are supported

### Deployment Timeouts
- Check build logs for errors
- Ensure dependencies are properly listed in package.json
- Consider optimizing build process

## 📈 Monitoring & Analytics

### Google Analytics
Add to `app/layout.tsx`:
```typescript
// Add Google Analytics tracking code
```

### Performance Monitoring
- Vercel Analytics (built-in)
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      # Add deployment steps
```

## 💡 Tips for Success

1. **Test Locally First**
   ```bash
   npm run build
   npm start
   ```

2. **Use Environment Variables**
   - Never commit sensitive data
   - Use platform-specific env var management

3. **Monitor Performance**
   - Set up alerts for downtime
   - Monitor Core Web Vitals
   - Regular performance audits

4. **Keep Dependencies Updated**
   ```bash
   npm audit
   npm update
   ```

---

**Your website is now live! 🎉**

For ongoing maintenance and updates, refer to the [README.md](./README.md) for development instructions.