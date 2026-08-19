@echo off
title Push Sagnik's Portfolio to GitHub
echo ====================================================
echo Pushing Portfolio Updates to GitHub...
echo ====================================================
echo.

if not exist public (
    mkdir public
)

echo [1/5] Setting up profile picture in public folder...
if exist "%USERPROFILE%\.gemini\antigravity\brain\ca953885-b7cd-492f-bb5b-031045fe9a04\.user_uploaded\media_1787164448372.png" (
    copy /Y "%USERPROFILE%\.gemini\antigravity\brain\ca953885-b7cd-492f-bb5b-031045fe9a04\.user_uploaded\media_1787164448372.png" "%~dp0public\profile.png" >nul 2>&1
    echo [OK] Profile image updated.
)

echo [2/5] Staging all files...
git add .

echo [3/5] Committing changes...
git commit -m "Add profile picture avatar and update portfolio UI"

echo [4/5] Ensuring branch is main...
git branch -M main

echo [5/5] Pushing to GitHub...
git push -u origin main

echo.
if %ERRORLEVEL% equ 0 (
    echo [SUCCESS] Latest code with profile picture successfully pushed to GitHub!
    echo Vercel will automatically re-deploy your website now.
    echo Check your repository: https://github.com/Saaagniiik/Portfolio
) else (
    echo [NOTE] If you were prompted for credentials, please sign in or check your git permissions.
)
pause
