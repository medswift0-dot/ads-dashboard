#!/bin/bash

# 🚀 Ads Dashboard Production Deployment Script
# This script deploys the dashboard to Railway (backend) and Vercel (frontend)

set -e

echo "🚀 Starting Ads Dashboard Deployment..."
echo ""

# Check if user is logged in to Railway
echo "📋 Checking Railway CLI..."
if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI not found. Installing..."
    npm install -g @railway/cli
fi

# Check if user is logged in to Vercel
echo "📋 Checking Vercel CLI..."
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Ensure code is committed
echo ""
echo "📋 Checking git status..."
if [[ -n $(git status -s) ]]; then
    echo "❌ Uncommitted changes detected!"
    echo "Please commit your changes first:"
    echo "  git add -A"
    echo "  git commit -m 'Production deployment'"
    echo "  git push origin main"
    exit 1
fi

# Deploy Backend to Railway
echo ""
echo "🚀 Deploying Backend to Railway..."
cd backend

if [ ! -d ".git" ]; then
    echo "Initializing Railway..."
    railway init
fi

railway up --detach

echo "✅ Backend deployed to Railway!"
echo "Get your backend URL from Railway dashboard"

# Deploy Frontend to Vercel
echo ""
echo "🚀 Deploying Frontend to Vercel..."
cd ../frontend

vercel --prod

echo "✅ Frontend deployed to Vercel!"

echo ""
echo "🎉 Deployment Complete!"
echo ""
echo "📝 Next Steps:"
echo "1. Get your backend URL from Railway dashboard"
echo "2. Add it to Vercel environment variables (VITE_API_URL)"
echo "3. Redeploy frontend on Vercel"
echo "4. Visit your frontend URL to verify everything works"
echo ""
echo "✅ Your dashboard is now LIVE in production!"
