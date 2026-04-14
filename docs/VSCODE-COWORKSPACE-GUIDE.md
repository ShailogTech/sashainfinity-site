# VSCode Co-Workspace Setup Guide

## 🎯 What is a Co-Workspace?

A **co-workspace** allows multiple developers to work together in real-time within VSCode using **Live Share** functionality. This setup enables:

- **Real-time code collaboration** - Multiple people editing simultaneously
- **Shared debugging sessions** - Debug together with shared breakpoints
- **Audio/video communication** - Built-in voice chat while coding
- **Terminal sharing** - Help each other with command-line issues
- **Server sharing** - Share localhost development servers

## 🚀 Quick Start

### 1. Open the Workspace
```bash
# Option 1: From command line
code sashainfinity-emergent.code-workspace

# Option 2: From VSCode
File → Open Workspace → Select sashainfinity-emergent.code-workspace
```

### 2. Install Recommended Extensions
After opening the workspace, VSCode will prompt you to install recommended extensions. Install them all for the best experience.

**Essential Extensions:**
- **Live Share** - Real-time collaboration
- **ESLint** - JavaScript/React linting
- **Prettier** - Code formatting
- **Python** - Backend development
- **Tailwind CSS IntelliSense** - CSS autocompletion
- **GitLens** - Git superpowers

### 3. Start Development Servers
```bash
# Option 1: Use VSCode Tasks (Recommended)
Press F1 → Tasks: Run Task → Select task:

- "🔥 Full Stack: Start All" (Starts both frontend & backend)
- "🎨 Frontend: Start Dev Server" (Frontend only - localhost:3000)
- "⚙️ Backend: Start Server" (Backend only - localhost:8000)

# Option 2: Use Debug Panel
Press F5 → Select configuration:
- "🔥 Full Stack: Frontend + Backend"
```

## 👥 Collaboration Features

### Starting a Collaboration Session

**Host (Person who shares):**
1. Click the **Live Share** icon in the sidebar (or press `Ctrl+Shift+L`)
2. Click **"Start Collaboration Session"**
3. Choose **"Start Session"** for local collaboration or **"Join Online"** for remote

**Guest (Person who joins):**
1. Open VSCode and ensure **Live Share** is installed
2. Click **"Join Collaboration Session"** in Live Share panel
3. Enter the **link code** provided by the host

### Real-time Collaboration Features

#### **1. Shared Editing**
- Multiple developers can edit the same file simultaneously
- Each person has their own cursor color
- See edits in real-time as they happen

#### **2. Shared Debugging**
```javascript
// Host sets a breakpoint, guests can see it!
function debugExample() {
  const x = 10;  // Set breakpoint here
  console.log(x);
}
```

#### **3. Terminal Sharing**
- Share terminal for troubleshooting
- Guests can request terminal access
- Useful for helping with git issues, server errors, etc.

#### **4. Server Sharing**
```bash
# When host runs frontend on localhost:3000
# Guests can access it via shared port forwarding
# No need to expose ports publicly!
```

#### **5. Audio/Video Chat**
- Built-in voice communication
- Screen sharing capabilities
- No external tools needed

## 🔧 Development Workflow

### Daily Development Routine

**1. Morning Setup:**
```bash
# Open workspace
code sashainfinity-emergent.code-workspace

# Start servers (F1 → Tasks)
"🔥 Full Stack: Start All"

# Check endpoints:
# Frontend: http://localhost:3000
# Backend: http://localhost:8000/api
```

**2. Collaborative Coding:**
```bash
# Start Live Share session
Ctrl+Shift+L → "Start Collaboration Session"

# Share with team members via:
- Link code (for local team)
- Live Share URL (for remote team)
```

**3. Code Quality:**
```bash
# Format on save is enabled
# But you can manually format:
F1 → "🎨 Frontend: Format Files"  # or "✨ Backend: Format Code"

# Run tests:
F1 → Tasks → "🧪 Frontend: Run Tests"
F1 → Tasks → "🧪 Backend: Run Tests"
```

### Debugging Together

**Frontend Debugging:**
1. Set breakpoints in React components
2. Press `F5` → "🚀 Frontend: Chrome (localhost:3000)"
3. Guests can see breakpoints and variables
4. Step through code together

**Backend Debugging:**
1. Set breakpoints in FastAPI routes
2. Press `F5` → "⚡ Backend: FastAPI (port 8000)"
3. Make API calls to trigger breakpoints
4. Inspect variables and database queries

## 🎯 Project Structure in Workspace

```
├── frontend/           # React 19 Application
│   ├── src/           # Source code
│   ├── public/        # Static assets
│   └── package.json   # Dependencies
├── backend/           # FastAPI Application
│   ├── server.py      # Main application
│   └── requirements.txt # Python dependencies
├── docs/              # Documentation
├── tests/             # Test files
└── .vscode/          # Workspace configurations
    ├── settings.json    # Workspace settings
    ├── launch.json      # Debug configurations
    ├── tasks.json       # Task configurations
    └── extensions.json  # Recommended extensions
```

## 🔥 Hotkeys & Shortcuts

### Essential Shortcuts
- **`F5`** - Start debugging
- **`Ctrl+Shift+L`** - Open Live Share panel
- **`F1`** then **"Tasks: Run Task"** - Run development tasks
- **`Ctrl+P`** - Quick file open
- **`Ctrl+Shift+P`** - Command palette

### Workspace-Specific Shortcuts
- **`Ctrl+Shift+D`** - Open debug panel
- **`Ctrl+Shift+T`** - Run tests
- **`Ctrl+Shift+F`** - Format document
- **`Ctrl+`** - Toggle terminal

## 🌐 Remote Collaboration

### For Remote Team Members

**Host (with running servers):**
1. Start Live Share session
2. Copy the **Live Share URL**
3. Share via Slack/Email/Teams

**Guest (remote):**
1. Click the Live Share URL
2. VSCode opens automatically
3. Joins the collaboration session
4. Can access **localhost:3000** and **localhost:8000** via port forwarding

### Benefits for Remote Teams
- No need to expose development servers publicly
- Share localhost with team members securely
- Real-time collaboration as if sitting together
- Reduced setup time for new team members

## 🛠️ Troubleshooting

### Common Issues

**1. Live Share not connecting:**
```bash
# Check firewall settings
# Ensure both host and guest have Live Share installed
# Try using link code instead of URL
```

**2. Port forwarding not working:**
```bash
# Host should verify servers are running
# Check if ports 3000 and 8000 are accessible
# Try accessing via guest's localhost
```

**3. Extensions not loading:**
```bash
# Reload VSCode: Ctrl+Shift+P → "Reload Window"
# Manually install missing extensions from extensions.json
```

**4. Workspace settings not applying:**
```bash
# Ensure you open the .code-workspace file
# Not just the folder
# File → Open Workspace → Select .code-workspace file
```

## 📱 Mobile Collaboration

Live Share also works with **VS Code for iOS/Android**:
- Join sessions from mobile devices
- View code and make edits
- Participate in voice chat
- Great for quick reviews while traveling

## 🔒 Security Best Practices

1. **Use read-only sessions** for code reviews
2. **Limit terminal access** to trusted collaborators
3. **End sessions** when not in use
4. **Use link codes** instead of URLs for local teams
5. **Be careful** with shared credentials in terminals

## 🎓 Learning Resources

- [Live Share Documentation](https://docs.microsoft.com/en-us/visualstudio/liveshare/)
- [VS Code Debugging](https://code.visualstudio.com/docs/editor/debugging)
- [React Debugging](https://react.dev/learn/react-developer-tools)
- [FastAPI Debugging](https://fastapi.tiangolo.com/tutorial/debugging/)

---

**Setup complete!** Your workspace is ready for collaborative development.

**Next Steps:**
1. Open the workspace file
2. Install recommended extensions
3. Start the development servers
4. Invite team members to collaborate!

**Need help?** Check `docs/` directory or ask in the Live Share session!
