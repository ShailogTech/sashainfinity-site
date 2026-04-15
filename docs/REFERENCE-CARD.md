# 🎯 SashaInfinity Emergent - Quick Reference Card

## 🚀 Start Development (Choose One)

### Method 1: Automatic (Recommended)
```
Double-click: scripts/start-dev.bat
```

### Method 2: Manual (Most Reliable)
```bash
# Terminal 1:
cd backend
python -m uvicorn server:app --reload --port 8000

# Terminal 2:
cd frontend
yarn start
```

## 👥 Start Collaboration

### Live Share (3 Methods)
```bash
# Method 1: Sidebar
Click the 👥 icon → "Start Collaboration Session"

# Method 2: Command Palette
Ctrl+Shift+P → "Live Share: Start Collaboration Session"

# Method 3: Keyboard (if enabled)
Ctrl+Shift+L
```

## 🔗 Important URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000/api
- **API Docs**: http://localhost:8000/docs (when server is running)

## 📁 Project Structure

```
sashainfinity_emergent/
├── frontend/          # React app (port 3000)
├── backend/           # FastAPI app (port 8000)
├── docs/              # Documentation
├── scripts/           # Utility scripts
└── .vscode/          # VSCode configurations
```

## ⌨️ Common Commands

### Frontend
```bash
cd frontend
yarn start            # Start development server
yarn build            # Build for production
yarn test             # Run tests
```

### Backend
```bash
cd backend
python -m uvicorn server:app --reload --port 8000
pytest                # Run tests
black .               # Format code
```

## 🛠️ VSCode Shortcuts

- `Ctrl+`` - Open terminal
- `Ctrl+Shift+5` - Split terminal
- `Ctrl+Shift+P` - Command palette
- `F5` - Start debugging
- `Ctrl+Shift+X` - Extensions

## 🆘 Quick Fixes

### Port already in use?
```bash
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Dependencies missing?
```bash
# Frontend:
cd frontend && yarn install

# Backend:
cd backend && pip install -r requirements.txt
```

### Live Share not working?
1. Install extension: `Ctrl+Shift+X` → "Live Share"
2. Sign in with Microsoft/GitHub account
3. Use command palette instead of keyboard shortcut

## 📚 Documentation

- **Quick Start**: `docs/QUICK-START.md`
- **Troubleshooting**: `docs/VSCode-Troubleshooting.md`
- **Co-workspace Guide**: `docs/VSCODE-COWORKSPACE-GUIDE.md`
- **Project Docs**: `CLAUDE.md`

## ✅ Pre-Development Checklist

- [ ] Dependencies installed (`yarn install`, `pip install -r requirements.txt`)
- [ ] Backend `.env` file configured
- [ ] MongoDB running (if needed)
- [ ] VSCode workspace opened
- [ ] Live Share extension installed (for collaboration)

---

**Keep this file open while developing!**
