# AGENTS.md - SashaInfinity Emergent

## Dev Commands

```bash
# Frontend (CRACO/CRA, not Vite)
cd frontend && yarn start      # Dev server at localhost:3000
cd frontend && yarn build    # Production build
cd frontend && yarn test    # Jest tests

# Backend (FastAPI)
cd backend && python -m uvicorn server:app --reload --port 8000
```

Note: Uses **yarn** (see `packageManager` in package.json), not npm.

## Architecture

- **Frontend**: React 19 SPA via Create React App + CRACO config override
- **Backend**: FastAPI + MongoDB (Motor async driver)
- **Routing**: React Router v7 (client-side)
- **3D**: Three.js + GLTFLoader on home page only
- **Styling**: TailwindCSS + shadcn/ui components (Radix primitives, manually maintained)

## Key Quirks

- **CRACO**: Uses `@craco/craco` (not standard CRA). Custom config in `craco.config.js`.
- **Visual Edits**: `@emergentbase/visual-edits` injects hot-module-reload in dev mode (line 85-98 in craco.config.js). Requires network access to `assets.emergent.sh`.
- **UI Components**: shadcn/ui components NOT auto-generated — hand-written in `src/components/ui/*.jsx` using Radix primitives.
- **Backend .env**: Requires `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS` in `backend/.env`.

## Testing

Frontend tests via `yarn test`. No dedicated test script for backend (uses pytest directly if needed).

## Entry Points

- Frontend: `src/index.js` → `src/App.js` → pages in `src/pages/`
- Backend: `server.py` exports FastAPI app with `/api` prefix routes