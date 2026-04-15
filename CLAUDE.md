# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

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
python -m uvicorn server:app --reload --port 8000    # Development server
pytest                                              # Run tests (if present)
black .                                              # Format code
isort .                                              # Sort imports
flake8 .                                             # Lint code
mypy .                                               # Type checking
```

## Architecture Overview

This is a full-stack Learning Management System (LMS) with:

- **Frontend**: React 19 SPA using Create React App + CRACO configuration override
- **Backend**: FastAPI with MongoDB (Motor async driver)  
- **Routing**: React Router v7 for client-side routing
- **3D Graphics**: Three.js with GLTFLoader on the home page only
- **UI Components**: TailwindCSS + shadcn/ui components (built on Radix UI primitives)

### Key Architectural Quirks

**CRACO Configuration**: 
- Frontend uses `@craco/craco` for custom webpack configuration
- Custom config in `frontend/craco.config.js`
- Includes optional health check plugin (disabled by default)
- Previously used `@emergentbase/visual-edits` for hot-module reload (currently commented out in craco.config.js lines 85-98)

**UI Components**:
- shadcn/ui components in `frontend/src/components/ui/*.jsx` are **hand-written**, not auto-generated
- Built using Radix UI primitives directly
- Do not attempt to regenerate or update via shadcn CLI — maintain manually

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
│   │   ├── pages/        # Route page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utility functions
│   ├── craco.config.js   # CRACO webpack configuration
│   └── package.json
├── backend/            # FastAPI + MongoDB
│   ├── server.py        # Main FastAPI application
│   └── requirements.txt
├── docs/               # Documentation
│   ├── README.md        # Detailed setup guide
│   ├── AGENTS.md        # AI agent instructions
│   └── test_results.md  # Test execution reports
├── tests/              # Test files and fixtures
│   ├── unit/           # Unit tests
│   ├── integration/    # Integration tests
│   ├── fixtures/       # Test data and fixtures
│   └── reports/        # Test execution reports
├── scripts/            # Utility and automation scripts
├── deployment/         # Deployment configurations
│   ├── docker/         # Docker configurations
│   └── k8s/            # Kubernetes manifests
├── archive/            # Archived files and backups
│   └── backups/        # Database and file backups
├── logs/               # Application logs
├── temp/               # Temporary files
├── memory/             # Claude Code memory system
├── skills/             # Custom skill definitions
├── .github/            # GitHub configurations
├── README.md           # Project overview
├── CLAUDE.md           # This file - Claude Code guidelines
└── .gitignore          # Git ignore patterns
```

### Frontend Entry Points
- `src/index.js` → `src/App.js` → pages in `src/pages/`
- Main router configured in `App.js` with the following routes:
  - `/` — HomePage (with Three.js 3D scene)
  - `/courses` — CoursesPage
  - `/courses/:id` — CourseDetailPage  
  - `/blog` — BlogPage
  - `/blog/:slug` — BlogDetailPage
  - `/contact` — ContactPage
  - `/meiporul-ar` — MeiporulPage (AR features)
  - `/login` — LoginPage
  - `/get-started` — GetStartedPage

### Backend Structure
- Single-file application: `server.py`
- FastAPI app with `/api` prefix for all routes
- MongoDB connection via Motor (async driver)
- Example models: `StatusCheck`, `StatusCheckCreate`

### Component Organization
- `src/components/` — Shared components (Navbar, Footer, SplashScreen)
- `src/components/ui/` — shadcn/ui components (hand-written Radix primitives)
- `src/pages/` — Page components for routes
- `src/hooks/` — Custom React hooks
- `src/lib/utils.js` — Utility functions (includes `cn()` for className merging)

## Testing

- Frontend: Jest tests via `yarn test` (standard CRA setup)
- Backend: pytest if needed (no dedicated test script in requirements.txt)
- No test files currently present in the codebase

## Build Configuration

The frontend uses several non-standard configurations:
1. **CRACO** — Custom webpack config override
2. **Path aliases** — `@` maps to `src` directory (configured in craco.config.js)
3. **Visual Edits** — Previously integrated for dev-time hot reload (currently disabled)
4. **Health Check** — Optional webpack health monitoring (disabled by default)

When modifying frontend build configuration, always edit `craco.config.js`, not webpack config directly.
