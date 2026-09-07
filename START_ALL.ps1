# Start Both Backend and Frontend in New Windows
$env:Path = "C:\Program Files\nodejs;$($env:Path)"

$ScriptDir = "$PSScriptRoot"

Write-Host "🚀 Performance Hub Dashboard - Starting..." -ForegroundColor Green
Write-Host ""

# Start Backend in new window
Write-Host "Starting Backend..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-File", "$ScriptDir\START_BACKEND.ps1"

# Wait a moment for backend to start
Start-Sleep -Seconds 3

# Start Frontend in new window
Write-Host "Starting Frontend..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-File", "$ScriptDir\START_FRONTEND.ps1"

Write-Host ""
Write-Host "✅ Both servers started!" -ForegroundColor Green
Write-Host "📊 Dashboard: http://localhost:5173" -ForegroundColor Yellow
Write-Host "🔧 API Backend: http://localhost:5000" -ForegroundColor Yellow
Write-Host ""
Write-Host "Note: Two PowerShell windows should have opened automatically." -ForegroundColor Gray
