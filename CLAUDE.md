# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Quick Start (Recommended)
```bash
# Double-click this script to start both frontend and backend
scripts/start-dev.bat
```

### Frontend (React + CRACO)
```bash
cd frontend
yarn start              # Development server at localhost:3000
yarn build              # Production build
yarn test               # Run Jest tests
```

**Important**: Uses `yarn` as the package manager (configured in `packageManager` field of package.json). Uses CRACO (`@craco/craco`) instead of standard Create React App scripts.

### Backend (FastAPI + MongoDB)
```bash
cd backend
python -m uvicorn server:app --reload --port 8000    # Development server at localhost:8000
pytest                                              # Run tests
black .                                              # Format code
isort .                                              # Sort imports
flake8 .                                             # Lint code
mypy .                                               # Type checking
```

## Architecture Overview

This is a full-stack Learning Management System (LMS) with:

- **Frontend**: React 19 SPA using Create React App + CRACO configuration override
- **Backend**: FastAPI with MongoDB (Motor async driver)
- **Routing**: React Router v7 with nested admin routes
- **3D Graphics**: Three.js with GLTFLoader on the home page
- **UI Components**: TailwindCSS + shadcn/ui components (hand-written Radix UI primitives)
- **Animation**: Framer Motion, GSAP, Lenis for smooth scrolling

### Key Architectural Quirks

**CRACO Configuration**:
- Custom webpack config in `frontend/craco.config.js`
- Path alias: `@` maps to `src` directory
- Optional health check plugin (disabled by default, enable via `ENABLE_HEALTH_CHECK=true`)
- Previously used `@emergentbase/visual-edits` (currently commented out in craco.config.js lines 85-98)

**UI Components**:
- shadcn/ui components in `frontend/src/components/ui/*.jsx` are **hand-written**, not auto-generated
- Built using Radix UI primitives directly
- Do not attempt to regenerate or update via shadcn CLI — maintain manually
- Full component library available: accordion, alert, dialog, dropdown-menu, form, etc.

**Environment Variables**:
Backend requires `backend/.env` with:
- `MONGO_URL` — MongoDB connection string
- `DB_NAME` — Database name
- `CORS_ORIGINS` — Comma-separated list of allowed origins (defaults to `*`)

## Project Structure

```
sashainfinity_emergent/
├── frontend/           # React 19 SPA with CRACO
│   ├── src/
│   │   ├── components/   # Shared components and UI components
│   │   ├── pages/        # Route page components (including admin/)
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utility functions
│   ├── craco.config.js   # CRACO webpack configuration
│   └── package.json
├── backend/            # FastAPI + MongoDB
│   ├── server.py        # Main FastAPI application
│   └── requirements.txt
├── docs/               # Documentation (QUICK-START, AGENTS, etc.)
├── tests/              # Test files and fixtures
│   ├── unit/           # Unit tests
│   ├── integration/    # Integration tests
│   ├── fixtures/       # Test data
│   └── reports/        # Test reports
├── scripts/            # Utility scripts (start-dev.bat)
├── deployment/         # Deployment configurations
│   ├── docker/         # Docker configs
│   └── k8s/            # Kubernetes manifests
├── archive/            # Archived files and backups
│   └── backups/        # Database and file backups
├── logs/               # Application logs
├── memory/             # Claude Code memory system
├── skills/             # Custom skill definitions
├── .github/            # GitHub configurations
├── README.md           # Project overview
├── CLAUDE.md           # This file - Claude Code guidelines
└── .gitignore          # Git ignore patterns
```

### Frontend Entry Points
- `src/index.js` → `src/App.js` → pages in `src/pages/`
- Main router configured in `App.js` with nested admin routes
- **Public Routes**:
  - `/` — HomePage (with Three.js 3D scene, GLTFLoader for Sasha character)
  - `/courses` — CoursesPage
  - `/courses/:id` — CourseDetailPage
  - `/blog` — BlogPage
  - `/blog/:slug` — BlogDetailPage
  - `/contact` — ContactPage
  - `/meiporul-ar` — MeiporulPage (AR features)
  - `/login` — LoginPage
  - `/get-started` — GetStartedPage
- **Admin Routes** (nested under `/admin`):
  - `/admin` — AdminDashboard
  - `/admin/courses` — AdminCourses
  - `/admin/users` — AdminUsers
  - `/admin/blog` — AdminPlaceholder
  - `/admin/analytics` — AdminPlaceholder
  - `/admin/settings` — AdminSettings

### Backend Structure
- Single-file application: `server.py`
- FastAPI app with `/api` prefix for all routes (via APIRouter)
- MongoDB connection via Motor (async driver)
- **API Endpoints**:
  - `GET/POST /api/status` — Status check endpoints
  - `GET /api/admin/dashboard` — Dashboard stats (mock data)
  - `GET/POST/DELETE /api/admin/users` — User management (mock data)
  - `GET/POST/PUT/DELETE /api/admin/courses` — Course management (mock data)
- **Note**: Admin endpoints currently return mock data; database operations are commented out

### Component Organization
- `src/components/` — Shared components
  - `Navbar`, `Footer`, `SplashScreen` (app initialization)
  - `RoamingMascot` (animated character on non-home pages)
  - `BubbleMenu` (navigation menu component)
  - `ScrollStack` (scroll animation component)
  - `AdminSidebar` (admin navigation)
- `src/components/ui/` — Full shadcn/ui component library (hand-written)
- `src/pages/` — Page components for routes
- `src/pages/admin/` — Admin panel pages
- `src/hooks/` — Custom React hooks
- `src/lib/utils.js` — Utility functions (includes `cn()` for className merging)

### Special Features
- **SplashScreen**: Animated intro shown on app load, fades out to reveal main content
- **RoamingMascot**: Sasha character animation that appears on non-auth, non-admin pages
- **Three.js**: 3D character rendering on home page using GLTFLoader (Sasha-Character.glb, Sasha-Walking.glb)
- **Admin Panel**: Nested routing with sidebar navigation, mock data for dashboard/stats

## Testing

- Frontend: Jest tests via `yarn test` (standard CRA setup)
- Backend: pytest (included in requirements.txt)
- No test files currently present in the codebase

## Build Configuration

The frontend uses several non-standard configurations:
1. **CRACO** — Custom webpack config override
2. **Path aliases** — `@` maps to `src` directory
3. **Health Check** — Optional webpack health monitoring (enable via `ENABLE_HEALTH_CHECK=true`)
4. **Visual Edits** — Previously integrated (currently disabled)

When modifying frontend build configuration, always edit `craco.config.js`, not webpack config directly.
