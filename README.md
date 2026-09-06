# 📊 Ads Audit Dashboard

A production-ready dashboard for analyzing Google Ads and Meta Ads performance with AI-powered optimization recommendations using Claude API.

## ✨ Features

- **Real-time Data**: Pull live metrics from Google Ads and Meta Ads APIs
- **Combined Analytics**: View performance across both platforms side-by-side
- **AI Recommendations**: Automatic suggestions for budget optimization, campaign improvements, and revenue growth
- **Campaign Analysis**: Detailed breakdown of each campaign's performance
- **KPI Tracking**: Monitor ROAS, CPA, CTR, and other critical metrics
- **Alert System**: Get warnings about inefficient campaigns and wasteful spending
- **Responsive UI**: Clean, modern dashboard that works on desktop and mobile

## 🚀 Quick Start (5 minutes)

### Prerequisites
- Node.js 16+ and npm/yarn
- Google Ads account (for API access)
- Meta Business account (for Ad account access)
- Anthropic Claude API key (from console.anthropic.com)

### Installation

1. **Clone and navigate to project**
   ```bash
   cd ads-dashboard
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your API keys
   npm run dev
   ```
   Backend runs on `http://localhost:5000`

3. **Setup Frontend (in new terminal)**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Frontend runs on `http://localhost:3000`

4. **Open Dashboard**
   - Visit: `http://localhost:3000`
   - You'll see mock data to explore the UI

## 🔧 API Integration Setup

### Getting Google Ads API Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable "Google Ads API"
4. Create OAuth 2.0 credentials (Desktop application)
5. Download credentials.json
6. Extract and add to `.env`:
   - `GOOGLE_ADS_DEVELOPER_TOKEN`
   - `GOOGLE_ADS_CLIENT_ID`
   - `GOOGLE_ADS_CLIENT_SECRET`
   - `GOOGLE_ADS_CUSTOMER_ID` (your Ad account ID)
   - `GOOGLE_ADS_REFRESH_TOKEN`

### Getting Meta Ads API Credentials

1. Go to [Meta Business Platform](https://business.facebook.com)
2. Navigate to Settings > Business Settings > Accounts
3. Find your Ad Account ID
4. Create an App or use existing one
5. Generate a long-lived access token
6. Add to `.env`:
   - `META_ACCESS_TOKEN`
   - `META_AD_ACCOUNT_ID`

### Getting Anthropic Claude API Key

1. Visit [Anthropic Console](https://console.anthropic.com)
2. Create account/login
3. Go to API Keys
4. Create new key
5. Add to `.env`: `ANTHROPIC_API_KEY`

## 📁 Project Structure

```
ads-dashboard/
├── backend/                 # Node.js Express server
│   ├── server.js           # Main API server
│   ├── package.json        # Dependencies
│   └── .env.example        # Example environment variables
│
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Overview.jsx
│   │   │   ├── GoogleAdsDashboard.jsx
│   │   │   ├── MetaAdsDashboard.jsx
│   │   │   ├── RecommendationsDashboard.jsx
│   │   │   ├── MetricCard.jsx
│   │   │   └── CampaignsTable.jsx
│   │   ├── App.jsx         # Main app component
│   │   ├── index.css       # Global styles
│   │   └── main.jsx        # Entry point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md

```

## 🎯 Usage

### Dashboard Views

1. **📈 Overview** - Combined performance from Google & Meta Ads
2. **🔍 Google Ads** - Detailed Google Ads campaigns, KPIs, recommendations
3. **📘 Meta Ads** - Detailed Meta/Facebook Ads performance
4. **🤖 AI Recommendations** - Claude-powered actionable insights

### Dashboard Features

**Metrics Displayed:**
- Total Spend
- Impressions & CTR
- Conversions & CPA
- ROAS (Return on Ad Spend)
- Campaign Performance Table

**Recommendations Include:**
- Budget allocation strategy
- Campaign efficiency issues
- Quick wins (high-impact, low-effort changes)
- Long-term strategic improvements
- Predicted revenue impact

## 🤖 How AI Recommendations Work

The dashboard uses Claude API to analyze your ad performance data and generate:

1. **Budget Optimization** - Where to shift spending for better ROAS
2. **Campaign Analysis** - Efficiency issues and solutions
3. **Revenue Predictions** - Expected lift from recommended changes
4. **Quick Wins** - Immediate actions you can take
5. **Strategic Improvements** - Long-term optimization strategy

The AI learns from your industry, historical performance, and competitive benchmarks to give personalized recommendations.

## 🚀 Deployment

### Deploy to Railway (Recommended)

**Backend:**
```bash
cd backend
railway link
railway up
```

**Frontend:**
```bash
cd frontend
npm run build
# Deploy to Vercel: `vercel deploy --prod`
```

### Environment Variables (Production)

Set these in your deployment platform:
- `ANTHROPIC_API_KEY`
- `GOOGLE_ADS_*` (all Google Ads credentials)
- `META_ACCESS_TOKEN`
- `META_AD_ACCOUNT_ID`
- `NODE_ENV=production`

## 📊 Mock Data

The dashboard includes mock data for testing. This allows you to explore the UI and features without setting up API credentials first.

To use real data:
1. Add API credentials to `.env`
2. Uncomment real API calls in `backend/server.js`
3. Comment out mock data functions

## 🔐 Security Best Practices

- ✅ Never commit `.env` files
- ✅ Use environment variables for all secrets
- ✅ Rotate API tokens regularly
- ✅ Use HTTPS in production
- ✅ Implement rate limiting on backend
- ✅ Add authentication/authorization layer
- ✅ Validate and sanitize all inputs

## 📈 Next Steps

### Phase 2 Enhancements:
- [ ] Competitor Analysis Dashboard
- [ ] Email Automation Integration
- [ ] SMS Campaign Management
- [ ] Advanced Analytics & Forecasting
- [ ] Audience Segmentation
- [ ] A/B Testing Framework
- [ ] Team Collaboration Features

### Integration Roadmap:
- [ ] Pinterest Ads API
- [ ] LinkedIn Campaign Manager
- [ ] TikTok Ads Manager
- [ ] YouTube Ads API
- [ ] Microsoft Advertising

## 🐛 Troubleshooting

**Dashboard won't load?**
- Ensure backend is running on port 5000
- Check browser console for errors
- Clear browser cache

**API errors?**
- Verify all API credentials in `.env`
- Check API rate limits
- Ensure API keys have proper permissions

**No data showing?**
- Check that mock data is enabled (default)
- Verify backend is responding to `/api/google-ads` and `/api/meta-ads`
- Check Claude API key is valid

## 📞 Support

For issues or questions:
1. Check this README
2. Review error logs in browser console
3. Check backend server logs
4. Verify API credentials and permissions

## 📄 License

MIT - Feel free to use, modify, and deploy

## 🎯 Success Metrics

After deployment, track:
- Time saved on ads analysis
- Budget optimization improvements (%)
- ROAS increase
- CPA reduction
- Revenue growth from recommendations

---

**Built with:** React, Node.js, Claude API, Express
**Last Updated:** 2025
