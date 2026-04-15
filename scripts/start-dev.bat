@echo off
REM SashaInfinity Emergent - Development Server Starter
REM This script starts both frontend and backend servers

echo ========================================
echo SashaInfinity Emergent - Dev Environment
echo ========================================
echo.

REM Check if running as administrator
net session >nul 2>&1
if %errorLevel% == 0 (
    echo Running with administrator privileges
) else (
    echo Running without administrator privileges
)

echo.
echo Starting development servers...
echo.

REM Start Backend
echo [1/2] Starting Backend (FastAPI) on port 8000...
start "SashaInfinity Backend" cmd /k "cd /d "%~dp0..\backend" && python -m uvicorn server:app --reload --port 8000"

REM Wait a moment for backend to start
timeout /t 3 /nobreak >nul

REM Start Frontend
echo [2/2] Starting Frontend (React) on port 3000...
start "SashaInfinity Frontend" cmd /k "cd /d "%~dp0..\frontend" && yarn start"

echo.
echo ========================================
echo Servers started successfully!
echo ========================================
echo.
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:8000/api
echo.
echo Press any key to open the frontend in your browser...
pause >nul

REM Open browser
start http://localhost:3000

echo.
echo To stop servers, close the command windows that opened.
echo.
echo For Live Share collaboration:
echo 1. Open VSCode
echo 2. Press Ctrl+Shift+P
echo 3. Type "Live Share: Start Collaboration Session"
echo 4. Share the link with your team
echo.

pause
