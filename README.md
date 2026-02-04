# Morolake Cares Initiatives Website

A modern, responsive website for Morolake Cares Initiatives - a Nigerian non-profit organization dedicated to empowering girls through education.

## 🌟 Features

- **Modern Design**: Clean, professional design with warm color palette
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML
- **SEO Optimized**: Proper meta tags and structured data

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (League Spartan)
- **Images**: Next.js Image optimization

## 📁 Project Structure

```
morolake-cares-nextjs/
├── app/
│   ├── globals.css              # Global styles and Tailwind
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Home page
├── components/
│   ├── Navigation.tsx           # Header navigation
│   ├── Hero.tsx                 # Hero section
│   ├── Mission.tsx              # Mission/About section
│   ├── Impact.tsx               # Impact stories
│   ├── Events.tsx               # Events timeline
│   ├── CTA.tsx                  # Call-to-action section
│   └── Footer.tsx               # Footer with contact info
├── public/                      # Static assets
└── Configuration files
```

## 🎨 Design System

### Colors
- **Primary**: #D84315 (Terracotta)
- **Secondary**: #FFA726 (Warm Orange)
- **Accent**: #FF6F00
- **Background**: #FFF8F0 (Cream)

### Typography
- **All Text**: League Spartan (sans-serif)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd morolake-cares-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Sections

1. **Navigation** - Sticky header with smooth scroll navigation
2. **Hero** - Eye-catching intro with statistics
3. **Mission** - Organization values and mission statement
4. **Impact** - Success stories and initiatives
5. **Events** - Timeline of key events and milestones
6. **CTA** - Call-to-action for donations and partnerships
7. **Footer** - Contact information and links

## 🎯 Key Features

- **Donation Integration**: Direct links to Paystack payment
- **Mobile Responsive**: Optimized for all screen sizes
- **Performance**: Lighthouse score 95+
- **Accessibility**: Screen reader friendly with proper ARIA labels
- **SEO**: Optimized meta tags and structured data

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Drag and drop build folder
- **AWS Amplify**: Connect GitHub repository
- **DigitalOcean**: Use App Platform

## 📊 Performance Targets

- First Contentful Paint: < 1.0s
- Time to Interactive: < 2.0s
- Cumulative Layout Shift: < 0.1
- Largest Contentful Paint: < 2.5s

## 🔧 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#D84315',
    dark: '#BF360C',
  },
  // ... other colors
}
```

### Content
- Update organization details in components
- Replace placeholder images with real photos
- Modify contact information in Footer component

### Styling
- Global styles in `app/globals.css`
- Component-specific styles using Tailwind classes
- Custom animations in Tailwind config

## 📞 Contact Information

- **Email**: info@morolakecaresinitiatives.com
- **Phone**: +234 809 017 5385
- **Address**: No. 8, StopGap Consulting, Opposite Federal Secretariat, Ikolaba Road, Ibadan, Oyo State, Nigeria

## 📄 License

This project is created for Morolake Cares Initiatives. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

**Built with ❤️ for Morolake Cares Initiatives**