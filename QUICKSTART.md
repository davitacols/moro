# Quick Start Guide

Get the Morolake Cares Initiatives website running in 3 simple steps.

## 🚀 3-Step Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

That's it! Your website is now running locally.

## 📋 Common Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Package Management
npm install          # Install dependencies
npm update           # Update dependencies
```

## 🔧 Troubleshooting

### Port Already in Use
If port 3000 is busy, Next.js will automatically use the next available port (3001, 3002, etc.).

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check for TypeScript errors
npm run lint
```

## 🚀 Pre-Launch Checklist

- [ ] Update contact information in Footer component
- [ ] Replace placeholder images with real photos
- [ ] Test donation link functionality
- [ ] Verify all navigation links work
- [ ] Test responsive design on mobile devices
- [ ] Run `npm run build` to check for errors
- [ ] Test website on different browsers

## 📱 Mobile Testing

Test the website on various screen sizes:
- Mobile: 375px width
- Tablet: 768px width  
- Desktop: 1024px+ width

## 🌐 Ready to Deploy?

See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment instructions.

---

**Need help? Check the full [README.md](./README.md) for detailed information.**