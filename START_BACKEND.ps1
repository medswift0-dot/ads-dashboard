# Start Backend Server
$env:Path = "C:\Program Files\nodejs;$($env:Path)"

cd "$PSScriptRoot\backend"
Write-Host "Starting Performance Hub Backend..." -ForegroundColor Green
Write-Host "Server will run on: http://localhost:5000" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop" -ForegroundColor Yellow
Write-Host ""

npm start
