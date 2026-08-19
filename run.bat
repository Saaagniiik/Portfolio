@echo off
title Sagnik Majumder - Portfolio Dev Server
echo ====================================================
echo Starting Sagnik Majumder's Portfolio Dev Server...
echo ====================================================
echo.

if not exist public (
    mkdir public
)

if exist "%USERPROFILE%\.gemini\antigravity\brain\ca953885-b7cd-492f-bb5b-031045fe9a04\.user_uploaded\media_1787164448372.png" (
    copy /Y "%USERPROFILE%\.gemini\antigravity\brain\ca953885-b7cd-492f-bb5b-031045fe9a04\.user_uploaded\media_1787164448372.png" "%~dp0public\profile.png" >nul 2>&1
)

if not exist node_modules (
    echo [INFO] Installing project dependencies...
    call npm install
    echo.
)

echo [INFO] Launching Vite development server...
call npm run dev
pause
