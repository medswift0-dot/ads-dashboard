# Start Frontend Dev Server
$env:Path = "C:\Program Files\nodejs;$($env:Path)"

cd "$PSScriptRoot\frontend"
Write-Host "Starting Performance Hub Frontend..." -ForegroundColor Green
Write-Host "Dashboard will open at: http://localhost:5173" -ForegroundColor Cyan
Write-Host "Make sure backend is running on port 5000" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop" -ForegroundColor Yellow
Write-Host ""

npm run dev
