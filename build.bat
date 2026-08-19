@echo off
title Build Sagnik's Portfolio
echo ====================================================
echo Building Sagnik Majumder's Portfolio for Production...
echo ====================================================
echo.

if not exist node_modules (
    echo [INFO] Installing project dependencies...
    call npm install
    echo.
)

echo [INFO] Creating production build in dist/ folder...
call npm run build
echo.
echo [SUCCESS] Build complete! Check the dist/ folder.
pause
