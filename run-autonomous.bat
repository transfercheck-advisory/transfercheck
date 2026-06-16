@echo off
cd /d "c:\Users\user\OneDrive\바탕 화면\transfer app"
echo Starting Autonomous Developer Engine... >> autonomous-run.log
node autonomous-developer.js >> autonomous-run.log 2>&1
echo Autonomous Developer Run Completed. >> autonomous-run.log
