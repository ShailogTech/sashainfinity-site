# SashaInfinity UI Rebuild - PRD

## Original Problem Statement
Rebuild the UI for SashaInfinity website. All pages (Courses, Blog, Contact, Meiporul AR, Login, Get Started) need to be client-side routed within a React SPA. Keep the splash screen, Home page, and About section untouched from the original index.html. Remove all external redirections to sashainfinity.com/*. 3D model only on home page. Use same color scheme.

## Architecture
- **Stack**: React SPA (no backend needed)
- **Routing**: React Router v7 (client-side)
- **3D Model**: Three.js + GLTFLoader (Sasha-Character.glb)
- **Animations**: CSS animations, GSAP-style transitions
- **Styling**: Custom CSS with CSS variables matching original color scheme

## User Personas
- **Students**: Looking for AR/VR enhanced math education courses
- **Parents**: Researching education options for children in Tier 2/3 cities
- **Instructors**: Interested in teaching on the platform

## Core Requirements (Static)
1. Splash screen with SASHA INFINITY animated text + counter
2. Home page with 3D model, hero, stats, scroll stack, about, categories, testimonials, team, CTA, blog preview
3. Courses page with real course data and filters
4. Blog page with search and article listing
5. Contact page with form, map, and contact info
6. Meiporul AR showcase page
7. Login and Get Started (Registration) auth UI pages
8. All navigation is internal (no sashainfinity.com redirects)
9. Orange (#f4911a) / Dark Blue (#082A5E) color scheme

## What's Been Implemented (Jan 13, 2026)
- [x] Splash screen with animated text, counter, decorative elements
- [x] Home page with 3D Sasha character model (Three.js)
- [x] Hero section with text parallax on scroll
- [x] Stats bar with scroll velocity
- [x] Scroll stack cards section
- [x] About section with morphing text
- [x] Categories section
- [x] Card swap section with auto-cycling
- [x] Testimonials slider
- [x] Team section
- [x] CTA section
- [x] Blog preview section
- [x] Partners section
- [x] Newsletter section
- [x] Courses page with category/level filters
- [x] Blog page with search
- [x] Contact page with form + map
- [x] Meiporul AR page with features, steps, courses
- [x] Login page (UI only)
- [x] Get Started / Registration page (UI only)
- [x] Responsive navigation with hamburger menu
- [x] Footer with internal links
- [x] Background particles animation
- [x] Scroll-to-top button

## Testing Results
- Frontend: 95% pass (all functionality works)
- Performance note: 3D model (4.2MB) takes time to load

## Prioritized Backlog
### P0 (Critical) - DONE
- All pages built and routed

### P1 (High)
- [ ] Optimize 3D model size (compress .glb)
- [ ] Add progressive loading for 3D model

### P2 (Medium)
- [ ] Infinite Grid Menu (WebGL) from original
- [ ] Lenis smooth scrolling integration
- [ ] GSAP scroll stack pinning animation
- [ ] Custom cursor effect on desktop

### Future / Backlog
- [ ] Backend integration for auth (login/register)
- [ ] Backend integration for course enrollment
- [ ] Blog content detail pages
- [ ] Course detail pages with video player
- [ ] Payment integration for course purchases
- [ ] Student dashboard
