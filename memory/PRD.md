# SashaInfinity UI Rebuild - PRD

## Original Problem Statement
Rebuild the UI for SashaInfinity website. All pages (Courses, Blog, Contact, Meiporul AR, Login, Get Started) need to be client-side routed within a React SPA. Keep the splash screen, Home page, and About section untouched from the original index.html. Remove all external redirections to sashainfinity.com/*. 3D model only on home page. Use same color scheme.

## Iteration 2 Requirements
- Make all buttons & elements workable (Enroll → course detail, Read More → blog detail, Start Module → course detail)
- Login page redesigned to match signup page quality with bigger logo
- Mobile UI improved to be as good as desktop

## Architecture
- **Stack**: React SPA (no backend needed)
- **Routing**: React Router v7 (client-side) - 9 routes total
- **3D Model**: Three.js + GLTFLoader (Sasha-Character.glb)
- **Styling**: Custom CSS with CSS variables matching original color scheme

## Routes
- `/` - Home (splash + hero + 3D model + all sections)
- `/courses` - All courses with filters
- `/courses/:id` - Course detail page
- `/blog` - Blog listing with search
- `/blog/:slug` - Blog detail page
- `/contact` - Contact form + info + map
- `/meiporul-ar` - AR features showcase
- `/login` - Login form (UI only)
- `/get-started` - Registration form (UI only)

## What's Been Implemented

### Iteration 1 (Jan 13, 2026)
- [x] Splash screen with animated text, counter, decorative elements
- [x] Home page with 3D Sasha character model (Three.js)
- [x] All original sections (hero, stats, scroll stack, about, categories, card swap, testimonials, team, CTA, blog preview, partners, newsletter)
- [x] Courses page with category/level filters
- [x] Blog page with search
- [x] Contact page with form + map
- [x] Meiporul AR page with features, steps, courses
- [x] Login page (UI only)
- [x] Get Started / Registration page (UI only)
- [x] Responsive navigation with hamburger menu
- [x] Footer with internal links

### Iteration 2 (Jan 13, 2026)
- [x] Course detail page (/courses/:id) with full content: hero, price card, buy now, curriculum, what you'll learn, requirements, more courses
- [x] Blog detail page (/blog/:slug) with article content + related articles sidebar
- [x] All course cards link to course detail pages
- [x] All blog cards link to blog detail pages
- [x] Blog preview on home page links to specific articles
- [x] Meiporul AR "Start Module" buttons link to courses
- [x] Login page redesigned with branding panel (features list + stats) matching signup page
- [x] Bigger logo on auth pages (52px)
- [x] Mobile branded header for auth pages (logo + tagline)
- [x] Mobile UI improvements across all pages
- [x] Splash screen optimized (faster loading)

## Testing Results
- Iteration 1: Frontend 95% pass
- Iteration 2: Navigation 100%, Mobile 100%, Auth UI 100%, Frontend 95%

## Prioritized Backlog
### P1 (High)
- [ ] Optimize 3D model size (compress .glb)
- [ ] Backend integration for real auth

### P2 (Medium)
- [ ] Infinite Grid Menu (WebGL) from original
- [ ] Lenis smooth scrolling
- [ ] GSAP scroll stack pinning animation
- [ ] Custom cursor effect

### Future
- [ ] Payment integration for course purchases
- [ ] Student dashboard
- [ ] Course video player
- [ ] Blog CMS integration
