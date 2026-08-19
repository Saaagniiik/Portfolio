@echo off
title Push Sagnik's Portfolio to GitHub
echo ====================================================
echo Pushing latest fixes to https://github.com/Saaagniiik/Portfolio.git
echo ====================================================
echo.

echo [1/4] Staging all updated files...
git add .

echo [2/4] Committing fix...
git commit -m "Fix: Resolve favicon SVG URI malformed issue for Vercel build"

echo [3/4] Ensuring branch is main...
git branch -M main

echo [4/4] Pushing to GitHub...
git push -u origin main

echo.
if %ERRORLEVEL% equ 0 (
    echo [SUCCESS] Latest code successfully pushed to GitHub!
    echo Vercel will automatically re-deploy your website now.
    echo Check your repository: https://github.com/Saaagniiik/Portfolio
) else (
    echo [NOTE] If you were prompted for credentials, please sign in or check your git permissions.
)
pause
