@echo off
title Push Sagnik's Portfolio to GitHub
echo ====================================================
echo Pushing Portfolio to https://github.com/Saaagniiik/Portfolio.git
echo ====================================================
echo.

echo [1/5] Initializing Git repository...
git init

echo [2/5] Staging files...
git add .

echo [3/5] Committing changes...
git commit -m "Initial commit: Modern React + Tailwind CSS Portfolio for Sagnik Majumder"

echo [4/5] Setting main branch and remote origin...
git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/Saaagniiik/Portfolio.git

echo [5/5] Pushing to GitHub...
git push -u origin main

echo.
if %ERRORLEVEL% equ 0 (
    echo [SUCCESS] Portfolio successfully pushed to GitHub!
    echo Check your repository at: https://github.com/Saaagniiik/Portfolio
) else (
    echo [NOTE] If you were prompted for credentials, please sign in or use your GitHub Personal Access Token.
)
pause
