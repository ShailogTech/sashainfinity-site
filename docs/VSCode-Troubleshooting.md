# VSCode Co-Workspace Troubleshooting Guide

## 🔧 Quick Fix for Common Issues

### Issue 1: Tasks Not Showing Up

**Problem:** When you press F1 and type "Tasks: Run Task", you don't see the emoji-labeled tasks.

**Solution:**

1. **Make sure you opened the workspace file (not just the folder)**
   ```bash
   # Close current folder
   File → Close Folder

   # Open the workspace file
   File → Open Workspace → Select: sashainfinity-emergent.code-workspace
   ```

2. **Reload VSCode**
   ```bash
   # Press: Ctrl+Shift+P
   # Type: "Reload Window"
   # Press: Enter
   ```

3. **Check if .vscode folder exists**
   ```bash
   # You should see:
   .vscode/
   ├── launch.json
   ├── settings.json
   ├── tasks.json
   └── extensions.json
   ```

### Issue 2: Live Share Not Working

**Problem:** Ctrl+Shift+L doesn't open Live Share.

**Solution:**

1. **Install Live Share Extension**
   ```bash
   # Press: Ctrl+Shift+X (Extensions sidebar)
   # Search: "Live Share"
   # Install: "Visual Studio Live Share"
   ```

2. **Sign in to Live Share**
   ```bash
   # Click Live Share icon in sidebar (or press: Ctrl+Shift+L)
   # Click "Sign in" if prompted
   # Use your Microsoft or GitHub account
   ```

3. **Alternative way to open Live Share**
   ```bash
   # Click the Live Share icon in the left sidebar
   # It looks like two people heads
   ```

### Issue 3: Tasks Fail to Run

**Problem:** Tasks show up but fail when executed.

**Solution:**

1. **Test if the commands work manually first**
   ```bash
   # Open terminal (Ctrl+`)
   # Test frontend:
   cd frontend
   yarn start

   # Test backend:
   cd backend
   python -m uvicorn server:app --reload --port 8000
   ```

2. **Check if dependencies are installed**
   ```bash
   # Frontend dependencies:
   cd frontend
   yarn install

   # Backend dependencies:
   cd backend
   pip install -r requirements.txt
   ```

3. **Check Python interpreter**
   ```bash
   # Press: Ctrl+Shift+P
   # Type: "Python: Select Interpreter"
   # Choose your Python interpreter
   ```

## 🚀 Manual Start Method (If Tasks Don't Work)

### Method 1: Using Integrated Terminal

**Start Frontend:**
```bash
# Press: Ctrl+` (opens integrated terminal)
# Type:
cd frontend
yarn start

# Frontend will start on http://localhost:3000
```

**Start Backend:**
```bash
# Press: Ctrl+Shift+` (opens new terminal)
# Type:
cd backend
python -m uvicorn server:app --reload --port 8000

# Backend will start on http://localhost:8000/api
```

### Method 2: Using External Terminal

**Frontend (Terminal 1):**
```bash
cd C:/Users/dvshr/OneDrive/Documents/DEVESH/sashainfinity_emergent/frontend
yarn start
```

**Backend (Terminal 2):**
```bash
cd C:/Users/dvshr/OneDrive/Documents/DEVESH/sashainfinity_emergent/backend
python -m uvicorn server:app --reload --port 8000
```

## 🔍 Debugging VSCode Issues

### Check Workspace File

1. **Verify workspace is loaded:**
   ```bash
   # Look at the title bar of VSCode
   # It should say: "SashaInfinity Emergent"
   # NOT just "sashainfinity_emergent"
   ```

2. **Check workspace settings:**
   ```bash
   # Press: Ctrl+, (opens settings)
   # Make sure you're in "Workspace" tab (not "User")
   ```

### Verify Tasks Configuration

1. **Open tasks.json**
   ```bash
   # You can find it in: .vscode/tasks.json
   # It should contain tasks with emoji labels
   ```

2. **Test task manually**
   ```bash
   # Press: Ctrl+Shift+P
   # Type: "Tasks: Run Test Task"
   # Select: "🧪 Frontend: Run Tests"
   ```

## 💡 Live Share Alternative Methods

### If Ctrl+Shift+L Doesn't Work:

**Method 1: Use Command Palette**
```bash
# Press: Ctrl+Shift+P
# Type: "Live Share: Start Collaboration Session"
# Press: Enter
```

**Method 2: Use Sidebar Icon**
```bash
# Look for the Live Share icon in the left sidebar
# It looks like two people/profiles
# Click on it
# Then click "Start Collaboration Session"
```

**Method 3: Check if Extension is Installed**
```bash
# Press: Ctrl+Shift+X
# Search: "Live Share"
# If not installed:
#   - Click "Visual Studio Live Share" by Microsoft
#   - Click "Install"
```

## 🎯 Step-by-Step Setup

### First Time Setup:

1. **Open VSCode**
   ```bash
   # Double-click the workspace file:
   sashainfinity-emergent.code-workspace
   ```

2. **Install Recommended Extensions**
   ```bash
   # A popup will appear: "Recommended Extensions"
   # Click: "Install All"
   # If popup doesn't appear:
   #   Press: Ctrl+Shift+X
   #   Click "Extensions" dropdown
   #   Select "Recommended"
   #   Install all suggested extensions
   ```

3. **Install Dependencies**
   ```bash
   # Frontend dependencies:
   cd frontend
   yarn install

   # Backend dependencies:
   cd backend
   pip install -r requirements.txt
   ```

4. **Test Tasks**
   ```bash
   # Press: Ctrl+Shift+P
   # Type: "Tasks: Run Task"
   # You should see tasks with emoji labels
   # Try: "🎨 Frontend: Start Dev Server"
   ```

5. **Test Debugging**
   ```bash
   # Press: F5
   # Select: "🎨 Frontend: Chrome (localhost:3000)"
   # This should launch Chrome with debug enabled
   ```

## 🆘 Still Having Issues?

### Reset Everything:

1. **Close VSCode completely**

2. **Delete workspace settings**
   ```bash
   # Remove (but backup first!):
   .vscode/
   sashainfinity-emergent.code-workspace
   ```

3. **Start fresh**
   ```bash
   # Open VSCode
   # File → Open Folder
   # Select: sashainfinity_emergent
   # VSCode will create new .vscode folder
   ```

### Use Alternative Method:

**Simplest Approach (No Tasks Needed):**

1. **Open project folder in VSCode**
   ```bash
   File → Open Folder → Select: sashainfinity_emergent
   ```

2. **Open integrated terminal**
   ```bash
   Press: Ctrl+`
   ```

3. **Start servers manually**
   ```bash
   # Split terminal (Ctrl+Shift+5)

   # Terminal 1 - Frontend:
   cd frontend
   yarn start

   # Terminal 2 - Backend:
   cd backend
   python -m uvicorn server:app --reload --port 8000
   ```

4. **For Live Share:**
   ```bash
   # Install Live Share extension
   # Press: Ctrl+Shift+P
   # Type: "Live Share: Start Collaboration Session"
   ```

This approach gives you the same functionality without relying on VSCode tasks!

---

**Need more help?** The manual terminal method always works and gives you full control over your development environment.
