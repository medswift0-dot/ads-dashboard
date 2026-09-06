# ⚡ Quick Start Guide

Get your Ads Dashboard up and running in **5 minutes**.

## Prerequisites

Make sure you have these installed:

1. **Node.js 16+** - Download from [nodejs.org](https://nodejs.org)
   ```bash
   node --version  # Should be v16.0.0 or higher
   npm --version   # Should come with Node
   ```

2. **Git** - Download from [git-scm.com](https://git-scm.com)

3. **Code Editor** - VS Code recommended from [code.visualstudio.com](https://code.visualstudio.com)

## Step 1: Setup Backend (2 minutes)

```bash
cd backend
npm install
cp .env.example .env
```

For now, your `.env` will have empty values. That's fine—mock data works without them.

### Optional: Add API Keys
Edit `backend/.env` and add:
```
ANTHROPIC_API_KEY=sk-ant-xxxxx  (from console.anthropic.com)
GOOGLE_ADS_CUSTOMER_ID=xxxxx    (from your Google Ads account)
META_ACCESS_TOKEN=xxxxx         (from your Meta Business account)
```

### Start Backend Server
```bash
npm run dev
```

You should see:
```
🚀 Ads Dashboard Backend running on port 5000
📊 GET /api/google-ads - Google Ads data
📊 GET /api/meta-ads - Meta Ads data
🤖 POST /api/analyze - Get AI recommendations
```

**✅ Backend is running at: http://localhost:5000**

## Step 2: Setup Frontend (2 minutes)

**Open a NEW terminal window** and run:

```bash
cd frontend
npm install
npm run dev
```

You should see:
```
Local:        http://localhost:3000
```

**✅ Frontend is running at: http://localhost:3000**

## Step 3: Open Dashboard (1 minute)

Open your browser to: **http://localhost:3000**

You should see:
- 📊 Dashboard loading with mock data
- 4 tabs: Overview, Google Ads, Meta Ads, AI Recommendations
- Sample campaigns and KPI cards
- AI-powered optimization suggestions

## 🎉 You're Done!

Congratulations! Your Ads Dashboard is running locally.

### What You Can Do Now:

1. **Explore the Dashboard**
   - Switch between tabs
   - See mock Google Ads campaigns
   - See mock Meta Ads campaigns
   - Read AI recommendations

2. **Test the AI Recommendations**
   - Click "Refresh" button
   - It fetches data and generates recommendations
   - Click the "🤖 AI Recommendations" tab to see full analysis

3. **Modify Mock Data** (Optional)
   - Edit `backend/server.js`
   - Change `mockGoogleAdsData` or `mockMetaAdsData`
   - Restart backend with `npm run dev`
   - Refresh browser to see changes

## 📱 Next Steps

### Connect Real Data (30 minutes)

1. **Get Google Ads API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create project and enable "Google Ads API"
   - Create OAuth 2.0 credentials
   - Add to `.env`

2. **Get Meta API Key:**
   - Go to [Meta Business Manager](https://business.facebook.com)
   - Create app or use existing one
   - Generate access token
   - Add to `.env`

3. **Get Claude API Key:**
   - Go to [Anthropic Console](https://console.anthropic.com)
   - Create account/login
   - Generate API key
   - Add to `.env`

4. **Replace Mock Data:**
   - In `backend/server.js`, replace mock API with real ones
   - See commented code for examples

### Deploy to Production (45 minutes)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for:
- Deploy to Railway (easiest, $5/mo)
- Deploy to Heroku (alternative, $7/mo)
- Deploy to Vercel (frontend)

## 🐛 Troubleshooting

### "npm: command not found"
- Install Node.js from nodejs.org
- Restart terminal after installation
- Run `npm --version` to verify

### "Cannot find module 'express'"
- Make sure you ran `npm install` in backend folder
- Don't skip the install step!

### Dashboard won't load (blank page)
- Check backend is running on port 5000
- Open browser console (F12)
- Check for errors
- Restart both frontend and backend

### "Port 3000 already in use"
- Another app is using port 3000
- Change port: edit `frontend/vite.config.js`
- Change `port: 3000` to `port: 3001`

### "Port 5000 already in use"
- Change port in `backend/server.js`
- Change `PORT = 5000` to `PORT = 5001`
- Update frontend proxy in `frontend/vite.config.js`

## 📚 File Structure

```
ads-dashboard/
├── backend/
│   ├── server.js          ← Main API server
│   ├── package.json       ← Backend dependencies
│   └── .env               ← Your API keys (edit this!)
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx        ← Main dashboard component
│   │   ├── components/    ← Dashboard views
│   │   └── index.css      ← Styling
│   ├── package.json       ← Frontend dependencies
│   └── vite.config.js     ← Frontend config
│
├── README.md              ← Full documentation
├── DEPLOYMENT.md          ← How to deploy
└── API.md                 ← API reference
```

## 🎯 Success Checklist

- [x] Node.js installed
- [x] Backend running on localhost:5000
- [x] Frontend running on localhost:3000
- [x] Dashboard loads with mock data
- [x] All 4 tabs work
- [x] AI recommendations generate

If all boxes are checked, **you're production-ready!**

## 📞 Need Help?

1. Check README.md for detailed docs
2. Check API.md for API reference
3. Review error messages in browser console (F12)
4. Check backend logs for errors
5. Try restarting both frontend and backend

---

**Estimated Time: 5-10 minutes**
**Next: Deploy to production in 30 minutes**

Let's ship it! 🚀
