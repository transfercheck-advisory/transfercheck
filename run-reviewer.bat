@echo off
title TransferChek - AI Data Auto-Reviewer
echo ==================================================
echo   TransferChek - AI Data Auto-Reviewer
echo ==================================================
echo.
echo [*] Checking for .env configuration file...
if not exist .env (
    echo [!] WARNING: .env file is missing!
    echo Please create a .env file and write:
    echo GEMINI_API_KEY=your_actual_api_key
    echo.
    pause
    exit /b
)

echo [*] Starting AI Automated Reviewer...
call "C:\Users\user\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" auto-reviewer.js
echo.
echo ==================================================
echo [SUCCESS] Database Auto-Review Completed!
echo ==================================================
echo.
pause
