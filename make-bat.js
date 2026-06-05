const fs = require('fs');
const path = require('path');

const nodePath = `C:\\Users\\user\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\bin\\node.exe`;

// 1. Crawler Batch File
const crawlerContent = `@echo off\r
title TransferChek - Data Ingestion Crawler\r
echo ==================================================\r
echo   TransferChek - Automatic Data Ingestion\r
echo ==================================================\r
echo.\r
echo [*] Checking for .env configuration file...\r
if not exist .env (\r
    echo [!] WARNING: .env file is missing!\r
    echo Please create a .env file and write:\r
    echo GEMINI_API_KEY=your_actual_api_key\r
    echo.\r
    pause\r
    exit /b\r
)\r
\r
echo [*] Starting automated crawler using bundled node runtime...\r
call "${nodePath}" crawler.js all\r
echo.\r
echo ==================================================\r
echo [SUCCESS] Database Crawler Run Completed!\r
echo ==================================================\r
echo.\r
pause\r
`;

// 2. Reviewer Batch File
const reviewerContent = `@echo off\r
title TransferChek - AI Data Auto-Reviewer\r
echo ==================================================\r
echo   TransferChek - AI Data Auto-Reviewer\r
echo ==================================================\r
echo.\r
echo [*] Checking for .env configuration file...\r
if not exist .env (\r
    echo [!] WARNING: .env file is missing!\r
    echo Please create a .env file and write:\r
    echo GEMINI_API_KEY=your_actual_api_key\r
    echo.\r
    pause\r
    exit /b\r
)\r
\r
echo [*] Starting AI Automated Reviewer...\r
call "${nodePath}" auto-reviewer.js\r
echo.\r
echo ==================================================\r
echo [SUCCESS] Database Auto-Review Completed!\r
echo ==================================================\r
echo.\r
pause\r
`;

fs.writeFileSync(path.join(__dirname, 'run-crawler.bat'), crawlerContent, 'ascii');
fs.writeFileSync(path.join(__dirname, 'run-reviewer.bat'), reviewerContent, 'ascii');
console.log('run-crawler.bat and run-reviewer.bat have been successfully written in ASCII.');
