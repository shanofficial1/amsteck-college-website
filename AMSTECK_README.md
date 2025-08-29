# Amsteck College Website

A responsive, accessible single-page college website built with React, TypeScript, and Tailwind CSS. Features modern design, smooth animations, and production-ready components for easy MERN stack integration.

## Features

✅ **Responsive Design** - Mobile-first approach with tablet and desktop breakpoints  
✅ **Accessibility** - Semantic HTML, ARIA attributes, keyboard navigation  
✅ **Modern Animations** - Smooth, hardware-accelerated CSS transforms  
✅ **Auto-rotating Carousel** - Accessible hero carousel with pause controls  
✅ **Component Architecture** - Modular, reusable React components  
✅ **SEO Optimized** - Proper meta tags, semantic structure  
✅ **Design System** - Consistent colors, typography, and spacing  

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx              # Sticky navigation with mobile menu
│   ├── HeroCarousel.tsx         # Auto-rotating hero carousel
│   ├── AboutSection.tsx         # About with mission/vision cards
│   ├── StatsSection.tsx         # College statistics grid
│   ├── PrincipalMessage.tsx     # Principal message section
│   ├── HighlightsGrid.tsx       # Facilities highlight cards
│   ├── EventsGrid.tsx           # Events and activities grid
│   ├── RecognitionGrid.tsx      # Accreditations and awards
│   ├── ToppersScroller.tsx      # Infinite scrolling toppers
│   ├── Footer.tsx               # Comprehensive footer
│   └── Home.tsx                 # Main page component
├── assets/                      # Generated images (see Asset Requirements)
└── pages/
    └── Index.tsx                # Entry point
```

## Design System

The website uses a professional academic color palette:

- **Primary**: Deep Academic Blue (#1e40af variants)
- **Secondary**: Success Green (#059669 variants) 
- **Accent**: Warm Gold (#eab308 variants)
- **Gradients**: Primary to secondary transitions
- **Typography**: Inter font family
- **Shadows**: Soft, layered shadows for depth

## Asset Requirements

Place the following assets in `src/assets/` directory:

### Required Images
```
src/assets/
├── carousel1.jpg       # Campus exterior/students (1920x1080)
├── carousel2.jpg       # Library interior (1920x1080)  
├── carousel3.jpg       # Computer lab (1920x1080)
├── about.jpg          # Campus/students (800x600)
├── principal.jpg      # Principal portrait (512x512)
├── president.jpg      # President portrait (512x512)
├── footer-bg.jpg      # Footer background
└── recognition1-8.png # Accreditation logos (8 files)
```

### Optional Assets
```
public/assets/
├── logo.svg           # College logo
├── AMSTECK.png        # College emblem
└── toppers/           # Student photos
    ├── aiswarya.jpg
    ├── raj.jpg
    └── [additional student photos]
```

## Component Features

### Navbar
- Sticky positioning with backdrop blur
- Mobile hamburger menu with accessibility
- Smooth scroll links
- Logo with hover effects

### Hero Carousel  
- Auto-advance every 5 seconds
- Keyboard pause/resume (spacebar)
- Respects `prefers-reduced-motion`
- Screen reader friendly
- Smooth fade transitions

### Statistics Section
- Animated counters (when in view)
- Icon-based visual hierarchy
- Responsive grid layout

### Events Grid
- Category-based color coding
- Featured event highlighting
- Lazy-loaded images
- Detailed event metadata

### Toppers Scroller
- Infinite CSS marquee animation
- Pause on hover
- Accessible alternative text
- Responsive card design

## Quick Setup

1. **Install dependencies**
```bash
npm install
```

2. **Add required images** to `src/assets/` (see Asset Requirements)

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## Customization

### Colors
Edit `src/index.css` CSS variables:
```css
:root {
  --primary: 213 84% 25%;      /* Adjust hue/saturation/lightness */
  --secondary: 142 76% 36%;    /* Green accent */
  --accent: 45 93% 58%;        /* Gold highlights */
}
```

### Content
Replace placeholder content in component files:
- Update college name, addresses, phone numbers
- Replace event data in `EventsGrid.tsx`
- Update topper information in `ToppersScroller.tsx`
- Modify mission/vision statements in `AboutSection.tsx`

### Animations
Adjust animation timing in `src/index.css`:
```css
.animate-marquee {
  animation: marquee 20s linear infinite;  /* Adjust speed */
}
```

## MERN Stack Integration

The website is designed for easy backend integration:

1. **API Ready** - Replace static data with API calls
2. **Component Structure** - Each section is a separate component
3. **TypeScript** - Type-safe data structures
4. **Modern React** - Hooks-based, functional components

### Example API Integration
```tsx
// EventsGrid.tsx
const [events, setEvents] = useState([]);

useEffect(() => {
  fetch('/api/events')
    .then(res => res.json())
    .then(setEvents);
}, []);
```

## Accessibility Features

- **Semantic HTML** - Proper heading hierarchy, landmarks
- **ARIA Labels** - Screen reader descriptions
- **Keyboard Navigation** - Tab order, focus management  
- **Color Contrast** - WCAG AA compliant color ratios
- **Alternative Text** - Descriptive image alt attributes
- **Reduced Motion** - Respects user motion preferences

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- **Lazy Loading** - Images load when needed
- **CSS Animations** - Hardware accelerated transforms
- **Tree Shaking** - Only used Lucide icons included
- **Responsive Images** - Optimized for different screen sizes

## License

Educational/Academic use. Customize freely for your institution.

---

**Need Help?** This website is production-ready but can be customized further. Update content, add more sections, or integrate with your existing systems as needed.