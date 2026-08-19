@echo off
title Sagnik Majumder - Portfolio Dev Server
echo ====================================================
echo Starting Sagnik Majumder's Portfolio Dev Server...
echo ====================================================
echo.

if not exist node_modules (
    echo [INFO] Installing project dependencies...
    call npm install
    echo.
)

echo [INFO] Launching Vite development server...
call npm run dev
pause
