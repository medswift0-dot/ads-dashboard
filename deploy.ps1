# 🚀 Ads Dashboard Production Deployment Script (Windows)
# Run: powershell -ExecutionPolicy Bypass -File deploy.ps1

Write-Host "🚀 Starting Ads Dashboard Deployment..." -ForegroundColor Green
Write-Host ""

# Check if Railway CLI is installed
Write-Host "📋 Checking Railway CLI..." -ForegroundColor Cyan
try {
    $railway = Get-Command railway -ErrorAction Stop
    Write-Host "✅ Railway CLI found" -ForegroundColor Green
} catch {
    Write-Host "❌ Railway CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g @railway/cli
}

# Check if Vercel CLI is installed
Write-Host "📋 Checking Vercel CLI..." -ForegroundColor Cyan
try {
    $vercel = Get-Command vercel -ErrorAction Stop
    Write-Host "✅ Vercel CLI found" -ForegroundColor Green
} catch {
    Write-Host "❌ Vercel CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g vercel
}

# Check git status
Write-Host ""
Write-Host "📋 Checking git status..." -ForegroundColor Cyan
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "❌ Uncommitted changes detected!" -ForegroundColor Red
    Write-Host "Please commit your changes first:" -ForegroundColor Yellow
    Write-Host "  git add -A" -ForegroundColor Gray
    Write-Host "  git commit -m 'Production deployment'" -ForegroundColor Gray
    Write-Host "  git push origin main" -ForegroundColor Gray
    exit 1
}

# Deploy Backend to Railway
Write-Host ""
Write-Host "🚀 Deploying Backend to Railway..." -ForegroundColor Green
Set-Location backend

if (-not (Test-Path ".git")) {
    Write-Host "Initializing Railway..." -ForegroundColor Cyan
    railway init
}

Write-Host "Uploading to Railway..." -ForegroundColor Cyan
railway up --detach

Write-Host "✅ Backend deployed to Railway!" -ForegroundColor Green
Write-Host "📌 Save your backend URL from Railway dashboard" -ForegroundColor Yellow

# Deploy Frontend to Vercel
Write-Host ""
Write-Host "🚀 Deploying Frontend to Vercel..." -ForegroundColor Green
Set-Location ../frontend

Write-Host "Connecting to Vercel..." -ForegroundColor Cyan
vercel --prod

Write-Host "✅ Frontend deployed to Vercel!" -ForegroundColor Green

Write-Host ""
Write-Host "🎉 Deployment Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Get your backend URL from Railway dashboard"
Write-Host "2. Add it to Vercel environment variables (VITE_API_URL)"
Write-Host "3. Redeploy frontend on Vercel"
Write-Host "4. Visit your frontend URL to verify everything works"
Write-Host ""
Write-Host "✅ Your dashboard is now LIVE in production!" -ForegroundColor Green
Write-Host ""
Write-Host "Questions? Check DEPLOY_TO_RAILWAY.md for detailed instructions" -ForegroundColor Gray
