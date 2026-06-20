@echo off
echo ==================================================
echo   TransferChek - Database Audit Runner
echo ==================================================
echo.
echo [*] Starting Data Quality Audit...
call node audit-database.js
echo.
echo ==================================================
echo [SUCCESS] Audit Completed!
echo ==================================================
