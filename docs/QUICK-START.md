# 🚀 Quick Start Guide - SashaInfinity Emergent

## Method 1: Automatic Start (Recommended - Works 100%)

### Step 1: Double-click the starter script
```
📁 scripts/start-dev.bat
```
This will automatically:
- ✅ Start Backend on http://localhost:8000/api
- ✅ Start Frontend on http://localhost:3000
- ✅ Open your browser to the application

### Step 2: Wait for servers to start
- You'll see two command windows open
- Wait for "Compiled successfully!" message
- Frontend will open automatically in Chrome

### Step 3: Open VSCode for development
```bash
# Just open the project folder in VSCode
File → Open Folder → Select: sashainfinity_emergent
```

**That's it!** Your development environment is running.

---

## Method 2: Manual Start (Most Reliable)

### Open 2 terminals and run:

**Terminal 1 - Backend:**
```bash
cd backend
python -m uvicorn server:app --reload --port 8000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
yarn start
```

Then open http://localhost:3000 in your browser.

---

## 👥 How to Collaborate (Live Share)

### Step 1: Install Live Share Extension
1. Open VSCode
2. Press `Ctrl+Shift+X` (Extensions)
3. Search for "Live Share"
4. Install "Visual Studio Live Share" by Microsoft

### Step 2: Start Collaboration Session
**Option A (Easy):**
```bash
# Look for the Live Share icon in the left sidebar
# It looks like two people 👥
# Click it → "Start Collaboration Session"
```

**Option B (Command Palette):**
```bash
# Press: Ctrl+Shift+P
# Type: "Live Share: Start Collaboration Session"
# Press: Enter
```

**Option C (Keyboard Shortcut - if configured):**
```bash
# Press: Ctrl+Shift+L
# (Only works if Live Share is installed)
```

### Step 3: Invite Team Members
1. Click "Copy Link" or get the "Link Code"
2. Share with your team via Slack/Email/Teams
3. Team members click the link to join

### What Your Team Can Do:
- ✅ Edit code together in real-time
- ✅ See each other's cursors
- ✅ Share debugging sessions
- ✅ Access your localhost:3000 and localhost:8000
- ✅ Use terminal sharing for help
- ✅ Built-in voice chat

---

## 🔧 If VSCode Tasks Don't Work

**Don't worry!** You don't need VSCode tasks to develop this project.

### Just use terminals instead:

**Inside VSCode:**
1. Press `Ctrl+`` (backtick) to open terminal
2. Split terminal: `Ctrl+Shift+5`
3. Run each server in its own terminal

**Or use external terminals:**
- Open 2 Command Prompt windows
- Run backend in one, frontend in the other

**The development experience is the same!**

---

## 📝 Development Tips

### While Developing:
1. **Hot reload is enabled** - Changes appear automatically
2. **Debugging** - Use browser DevTools (F12) for frontend
3. **API testing** - Backend API runs on http://localhost:8000/api
4. **Database** - MongoDB connection configured in backend/.env

### Common Commands:
```bash
# Frontend
cd frontend
yarn start          # Start dev server
yarn build          # Build for production
yarn test           # Run tests

# Backend
cd backend
python -m uvicorn server:app --reload --port 8000   # Start server
pytest              # Run tests
black .             # Format code
```

---

## 🆘 Troubleshooting

### "Python command not found"
```bash
# Make sure Python is installed
python --version

# Install Python from: https://python.org
```

### "Yarn command not found"
```bash
# Make sure Yarn is installed
yarn --version

# Install Yarn: npm install -g yarn
```

### "Port already in use"
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Kill process on port 8000 (Windows)
netstat -ano | findstr :8000
taskkill /PID <PID> /F
```

### Live Share not connecting
```bash
# Make sure:
# 1. Live Share extension is installed
# 2. You're signed in with Microsoft/GitHub account
# 3. Both host and guest have Live Share installed
# 4. Try using link code instead of URL
```

---

## ✅ Check Your Setup

**Before starting development, verify:**

1. ✅ Backend dependencies installed (`cd backend && pip install -r requirements.txt`)
2. ✅ Frontend dependencies installed (`cd frontend && yarn install`)
3. ✅ MongoDB is running (if using MongoDB)
4. ✅ Backend .env file exists with required variables

**What should be in backend/.env:**
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=sashainfinity_db
CORS_ORIGINS=http://localhost:3000,http://localhost:8000
```

---

## 🎯 You're Ready!

**Your development workflow:**
1. Double-click `scripts/start-dev.bat` (starts servers)
2. Open http://localhost:3000 (see your app)
3. Open VSCode (write code)
4. Start Live Share (collaborate with team)

**That's everything you need to develop!**

---

**Still stuck?** Check the detailed troubleshooting guide:
📖 `docs/VSCode-Troubleshooting.md`
