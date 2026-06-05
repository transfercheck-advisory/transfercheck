@echo off
title TransferChek - Data Ingestion Crawler
echo ==================================================
echo   TransferChek - Automatic Data Ingestion
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

echo [*] Starting automated crawler using bundled node runtime...
call "C:\Users\user\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" crawler.js all
echo.
echo ==================================================
echo [SUCCESS] Database Crawler Run Completed!
echo ==================================================
echo.
pause
