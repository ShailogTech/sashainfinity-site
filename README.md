# SashaInfinity Emergent - Learning Management System

A modern, full-stack Learning Management System built with React 19, FastAPI, and MongoDB.

## Quick Start

```bash
# Frontend (React + CRACO)
cd frontend
yarn install
yarn start              # Dev server at localhost:3000

# Backend (FastAPI + MongoDB)
cd backend
pip install -r requirements.txt
python -m uvicorn server:app --reload --port 8000
```

## Project Structure

```
sashainfinity_emergent/
├── frontend/           # React 19 SPA with CRACO
├── backend/            # FastAPI + MongoDB
├── docs/              # Documentation
├── tests/             # Test files
├── scripts/           # Utility scripts
├── deployment/        # Docker & K8s configs
└── archive/           # Backups and archived files
```

## Documentation

- [Setup Guide](docs/README.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Development Guidelines](CLAUDE.md)
- [Agent Instructions](docs/AGENTS.md)

## Requirements

- Node.js 18+ (frontend)
- Python 3.10+ (backend)
- MongoDB 6.0+
- Yarn package manager

## License

Copyright © 2024 SashaInfinity. All rights reserved.
