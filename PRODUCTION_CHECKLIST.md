# ✅ Production Deployment Checklist

Follow this checklist to deploy your dashboard to production.

---

## Pre-Deployment (5 min)

- [ ] All code is committed to git
- [ ] No uncommitted changes (`git status` shows clean)
- [ ] `.env` file is in `.gitignore` (secrets never committed)
- [ ] Read `DEPLOY_TO_RAILWAY.md`
- [ ] Created Railway account at railway.app

---

## Deploy Backend (5 min)

### GitHub Push
- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Repository is public or Railway has access

### Railway Setup
- [ ] Logged into Railway dashboard
- [ ] Created new project
- [ ] Connected GitHub repo
- [ ] Selected backend as root (or entire repo)
- [ ] Railway started build
- [ ] Build completed successfully
- [ ] Got public backend URL

### Environment Variables
- [ ] Added `PORT=5000`
- [ ] Added `NODE_ENV=production`
- [ ] Added `ANTHROPIC_API_KEY` (optional, mock data works without it)
- [ ] Saved variables
- [ ] Backend redeployed
- [ ] Tested backend URL in browser (should return JSON)

**Backend URL:** `https://ads-dashboard-prod-xxxx.railway.app`

---

## Deploy Frontend (5 min)

### Vercel Setup (Recommended)
- [ ] Signed up at vercel.com
- [ ] Connected GitHub account
- [ ] Imported ads-dashboard repository
- [ ] Selected `/frontend` as root directory
- [ ] Vercel started build
- [ ] Build completed successfully
- [ ] Got public frontend URL

### Alternative: Railway Frontend
- [ ] Created new Railway service
- [ ] Connected GitHub
- [ ] Set build command: `npm run build`
- [ ] Set start command: `npm run preview`
- [ ] Build completed successfully

### Environment Variables
- [ ] Set `VITE_API_URL=https://your-backend-url.railway.app`
- [ ] Saved variables
- [ ] Frontend redeployed
- [ ] Checked deployment status

**Frontend URL:** `https://ads-dashboard-xxxxx.vercel.app`

---

## Testing (3 min)

### Frontend Access
- [ ] Opened frontend URL in browser
- [ ] Dashboard loaded
- [ ] Logo and header visible
- [ ] No blank page/white screen

### Tab Testing
- [ ] 📈 Overview tab loads and shows data
- [ ] 🔍 Google Ads tab shows campaigns, keywords, tracking
- [ ] 📘 Meta Ads tab shows campaigns
- [ ] 🌍 Market Trends tab shows seasonal, benchmarks, opportunities
- [ ] 🤖 AI Recommendations tab shows analysis
- [ ] Refresh button works without error

### No Errors
- [ ] Opened DevTools (F12)
- [ ] Checked Console tab
- [ ] No red error messages
- [ ] No 404 or CORS errors

### API Testing
- [ ] Tested backend URL directly in browser
- [ ] `/api/google-ads` returns JSON data
- [ ] `/api/meta-ads` returns JSON data
- [ ] No connection errors

---

## Configuration (Optional, 5 min)

### Custom Domain (Optional)
- [ ] Owned a custom domain
- [ ] Added CNAME in domain registrar
- [ ] DNS propagated (5-30 min)
- [ ] Custom domain works

### Monitoring (Optional)
- [ ] Set up Railway uptime monitoring
- [ ] Set up Vercel analytics
- [ ] Configured alerts

---

## Go Live (1 min)

- [ ] Saved backend URL
- [ ] Saved frontend URL
- [ ] Tested in different browser
- [ ] Tested on mobile
- [ ] Shared URL with team
- [ ] Documented deployment date

**Deployment Complete! 🎉**

---

## Post-Deployment (Ongoing)

### First Week
- [ ] Monitor logs for errors
- [ ] Check performance metrics
- [ ] Verify data is loading
- [ ] Get team feedback

### First Month
- [ ] Add real API credentials
- [ ] Connect real Google Ads data
- [ ] Connect real Meta Ads data
- [ ] Monitor usage and costs

### Ongoing
- [ ] Update code when needed (auto-deploys)
- [ ] Monitor Railway/Vercel dashboards
- [ ] Keep environment variables updated
- [ ] Add more integrations as needed

---

## Rollback (If Needed)

If deployment fails:

1. **Check Logs:**
   ```bash
   railway logs
   ```

2. **Redeploy Previous Version:**
   - Go to Railway Deployments
   - Click previous successful deployment
   - Click "Redeploy"

3. **Check Environment Variables:**
   - Verify all variables are set correctly
   - Some variables require service restart

4. **Restart Service:**
   - Railway Dashboard → Settings → "Restart"

---

## Success Metrics

✅ Production deployment is successful if:

- Backend URL responds with JSON data
- Frontend loads without errors
- All tabs show data
- No console errors
- Refresh button works
- API endpoints accessible
- Team can access the dashboard
- Uptime > 99%

---

## Emergency Contacts

**Railway Support:** support@railway.app
**Vercel Support:** support@vercel.com
**Your Status Page:** [Add if using]

---

## Sign-Off

- [ ] Deployment verified by [Your Name]
- [ ] Date: [Date]
- [ ] Status: ✅ PRODUCTION LIVE
- [ ] Backend URL documented
- [ ] Frontend URL documented
- [ ] Team notified

---

**Congratulations! Your dashboard is now live in production! 🚀**
