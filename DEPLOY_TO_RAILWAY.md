# 🚀 Deploy to Railway (Production)

Complete step-by-step guide to deploy your Ads Dashboard to production on Railway.

**Estimated Time: 20 minutes**
**Cost: $5-20/month**

---

## Step 1: Prepare Your Code (2 minutes)

Make sure you've committed everything:

```bash
cd ads-dashboard
git status  # Should show "nothing to commit"
```

If there are uncommitted changes:
```bash
git add -A
git commit -m "Production ready - deploying to Railway"
```

---

## Step 2: Create Railway Account (3 minutes)

1. Go to https://railway.app
2. Click **"Start for free"**
3. Sign up with GitHub (easiest option)
4. Connect your GitHub account
5. Authorize Railway

✅ **Account created**

---

## Step 3: Deploy Backend (5 minutes)

### Option A: Deploy from GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/ads-dashboard.git
   git branch -M main
   git push -u origin main
   ```

2. **In Railway Dashboard:**
   - Click **"New Project"**
   - Select **"Deploy from GitHub repo"**
   - Find your `ads-dashboard` repo
   - Click **"Deploy"**

3. **Railway will:**
   - Build your backend
   - Deploy it automatically
   - Provide a public URL

### Option B: Deploy from Local (Alternative)

```bash
npm install -g @railway/cli
railway login
cd backend
railway init
railway up
```

### Add Environment Variables (Critical!)

1. In Railway dashboard, open your backend project
2. Go to **"Variables"** tab
3. Add each variable:

```
PORT=5000
NODE_ENV=production
ANTHROPIC_API_KEY=sk-ant-xxxxx
GOOGLE_ADS_CUSTOMER_ID=your-id
GOOGLE_ADS_DEVELOPER_TOKEN=your-token
GOOGLE_ADS_CLIENT_ID=your-client-id
GOOGLE_ADS_CLIENT_SECRET=your-secret
GOOGLE_ADS_REFRESH_TOKEN=your-refresh-token
META_ACCESS_TOKEN=your-meta-token
META_AD_ACCOUNT_ID=your-ad-account-id
```

**Don't have API keys?** The dashboard works with mock data without them!

4. Click **"Save"** - Backend will redeploy automatically

✅ **Backend is now live!**

Your backend URL will look like: `https://ads-dashboard-prod-xxxxx.railway.app`

---

## Step 4: Deploy Frontend (5 minutes)

### Option A: Deploy to Vercel (Easiest)

1. Go to https://vercel.com
2. Click **"Import Project"**
3. Connect your GitHub account
4. Select your `ads-dashboard` repo
5. Select **"frontend"** as the root directory
6. Click **"Deploy"**

### Add Environment Variable

1. In Vercel project settings, go to **"Environment Variables"**
2. Add:
   ```
   VITE_API_URL=https://your-railway-backend-url.railway.app
   ```
3. Redeploy: Click **"Deployments"** → Latest → **"Redeploy"**

✅ **Frontend is now live!**

Your frontend URL will look like: `https://ads-dashboard-xxxxx.vercel.app`

### Option B: Deploy Frontend on Railway Too

1. In Railway, **"New Service"** from GitHub
2. Select frontend folder
3. Build command: `npm run build`
4. Start command: `npm run preview`
5. Add `VITE_API_URL` environment variable

---

## Step 5: Test Production (3 minutes)

1. **Open Frontend URL:**
   - Visit your Vercel/Railway frontend URL
   - Should see the dashboard immediately

2. **Test Each Tab:**
   - ✅ Overview - Loads Google + Meta data
   - ✅ Google Ads - Shows campaigns, keywords, tracking
   - ✅ Meta Ads - Shows Meta campaigns
   - ✅ Market Trends - Shows seasonal, benchmarks, opportunities
   - ✅ AI Recommendations - Shows Claude analysis
   - ✅ Refresh button works

3. **Check Backend:**
   - Open `https://your-backend-url.railway.app/api/google-ads`
   - Should return JSON data

4. **No Errors?**
   - Open browser DevTools (F12)
   - Check Console tab
   - Should have no red errors

✅ **Production is working!**

---

## Step 6: Configure Domain (Optional, 5 minutes)

### Point Your Domain to Railway Backend

If you have a custom domain (e.g., ads.yourdomain.com):

1. In Railway project settings, go to **"Domains"**
2. Click **"Add Custom Domain"**
3. Enter your domain (e.g., `api.yourdomain.com`)
4. Railway gives you a CNAME record
5. In your domain registrar (GoDaddy, Namecheap, etc.):
   - Go to DNS settings
   - Add CNAME record:
     ```
     Name: api
     Value: [Railway CNAME value]
     ```
6. Wait 5-30 minutes for DNS to propagate

### For Frontend (Vercel)

1. In Vercel project settings, go to **"Domains"**
2. Click **"Add"**
3. Enter your domain
4. Follow Vercel's instructions (usually just point nameservers)

✅ **Custom domain is now live!**

---

## Step 7: Monitor & Maintain (Ongoing)

### View Logs

**Railway Backend Logs:**
```bash
railway logs
```

**Vercel Frontend Logs:**
- Dashboard → Deployments → Latest → Logs

### Monitor Uptime

Railway automatically restarts failed services.

### Update Environment Variables

If you add API keys later:
1. Railway dashboard → Variables
2. Add/update the variable
3. Service redeploys automatically

### Update Code

To deploy new changes:

```bash
# Make changes locally
git add -A
git commit -m "Update feature"
git push origin main

# Railway/Vercel auto-deploy on git push
# Check dashboard → Deployments to verify
```

---

## Troubleshooting

### Frontend shows blank page

**Solution:**
1. Check browser console (F12) for errors
2. Verify `VITE_API_URL` environment variable is set
3. Restart frontend deployment

### Backend returns error

**Solution:**
1. Check Railway logs: `railway logs`
2. Verify environment variables are set
3. Check API keys are correct (if using real data)

### API 404 errors

**Solution:**
1. Verify backend URL in frontend environment variable
2. Make sure backend is running (check Railway dashboard)
3. Try accessing backend URL directly in browser

### Deployment stuck

**Solution:**
1. Cancel deployment in Railway/Vercel
2. Trigger new deployment
3. Check build logs for errors

---

## Cost Breakdown

| Service | Cost | Notes |
|---------|------|-------|
| Railway Backend | $5-20/mo | Pay as you go, free tier available |
| Vercel Frontend | FREE | Generous free tier |
| Custom Domain | $10-15/yr | Optional, from registrar |
| Claude API | $1-10/mo | Pay per use, only if using real data |
| **Total** | **~$70/year** | Scales with usage |

---

## What You Now Have

✅ **Production Dashboard:**
- Backend running 24/7 on Railway
- Frontend on Vercel CDN (ultra-fast worldwide)
- Custom domain (optional)
- Automatic restarts if it crashes
- Environment variables secured
- GitHub auto-deploy on code push

✅ **Data Flow:**
```
Your Browser
    ↓
Vercel (Frontend - ultra-fast CDN)
    ↓
Railway (Backend API)
    ↓
Google Ads API / Meta API (when connected)
```

✅ **Ready for Users:**
- Share the URL with your team
- Use dashboard in production
- Track real ads data
- Get AI recommendations

---

## Next Steps

### Immediately (Today)
1. ✅ Deploy to Railway & Vercel (this guide)
2. ✅ Test all features
3. ✅ Share URL with team

### This Week
1. Add real API credentials to environment variables
2. Connect real Google Ads account
3. Connect real Meta Ads account
4. See live data flowing in

### Next Month
1. Set up team access
2. Add authentication if needed
3. Monitor performance
4. Optimize based on usage

---

## Production Checklist

- [ ] Backend deployed to Railway
- [ ] Frontend deployed to Vercel
- [ ] Environment variables configured
- [ ] All tabs working in production
- [ ] No console errors
- [ ] Backend URL accessible
- [ ] Mock data showing in dashboard
- [ ] Refresh button works
- [ ] Share URL with team
- [ ] Add API keys when ready

---

## Support

### If deployment fails:

1. Check Railway logs: `railway logs`
2. Check Vercel logs: Dashboard → Deployments → Logs
3. Verify all environment variables are set
4. Try restarting deployment

### Common issues:

| Issue | Solution |
|-------|----------|
| Frontend blank | Check VITE_API_URL environment variable |
| API 404 | Verify backend URL is correct |
| Crashes on startup | Check logs for error message |
| Env vars not working | Restart deployment after changing them |

---

**You're now live in production! 🎉**

Your dashboard is available 24/7, worldwide, on a CDN.

Next: Connect real data and start seeing live metrics!

---

**Deployment Date:** [Date]
**Backend URL:** [Your Railway URL]
**Frontend URL:** [Your Vercel URL]
**Status:** ✅ PRODUCTION READY
