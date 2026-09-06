# 🚀 Deployment Guide

Complete step-by-step guide to deploy Ads Dashboard to production.

## Quick Deploy (30 minutes)

### Option 1: Deploy to Railway (Easiest)

Railway is the fastest way to deploy full-stack apps. No credit card required for free tier.

#### Backend Deployment

1. **Install Railway CLI**
   ```bash
   npm i -g @railway/cli
   ```

2. **Login to Railway**
   ```bash
   railway login
   ```

3. **Deploy Backend**
   ```bash
   cd backend
   railway init
   railway up
   ```

4. **Add Environment Variables**
   - In Railway dashboard, go to your project
   - Add variables:
     ```
     ANTHROPIC_API_KEY=your_key
     GOOGLE_ADS_CUSTOMER_ID=your_id
     GOOGLE_ADS_DEVELOPER_TOKEN=your_token
     GOOGLE_ADS_CLIENT_ID=your_client_id
     GOOGLE_ADS_CLIENT_SECRET=your_secret
     GOOGLE_ADS_REFRESH_TOKEN=your_refresh_token
     META_ACCESS_TOKEN=your_token
     META_AD_ACCOUNT_ID=your_account_id
     NODE_ENV=production
     ```

5. **Get Backend URL** - Railway will provide a public URL (e.g., `https://ads-dashboard-prod.up.railway.app`)

#### Frontend Deployment

**Option A: Deploy to Vercel (Recommended)**
```bash
cd frontend
npm install -g vercel
vercel login
vercel deploy --prod
```

**Option B: Deploy to Railway**
```bash
cd frontend
npm run build
railway init
railway up
```

For Vercel/Railway, update frontend environment:
- Set `VITE_API_URL=https://your-backend-railway-url.com`

### Option 2: Deploy to Heroku (Alternative)

1. **Create Heroku Account** at heroku.com

2. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   heroku login
   ```

3. **Deploy Backend**
   ```bash
   cd backend
   heroku create your-app-name-backend
   heroku config:set ANTHROPIC_API_KEY=your_key
   heroku config:set GOOGLE_ADS_CUSTOMER_ID=your_id
   # Set all env vars...
   git push heroku main
   ```

4. **Deploy Frontend**
   ```bash
   cd frontend
   npm run build
   heroku create your-app-name-frontend
   git push heroku main
   ```

## Production Checklist

Before going live, ensure:

### Security
- [ ] All API keys are in environment variables (NOT in code)
- [ ] HTTPS is enabled
- [ ] CORS is configured correctly
- [ ] Input validation added
- [ ] Rate limiting implemented
- [ ] No sensitive data in logs

### Performance
- [ ] Frontend build optimized (`npm run build`)
- [ ] Cache headers configured
- [ ] Database queries optimized
- [ ] CDN enabled for static assets
- [ ] API response times < 1s

### Monitoring
- [ ] Error logging setup (Sentry)
- [ ] Performance monitoring (New Relic)
- [ ] Uptime monitoring (StatusPage)
- [ ] Alerts configured
- [ ] Backup strategy in place

### Testing
- [ ] All features tested in staging
- [ ] API endpoints tested
- [ ] Error scenarios handled
- [ ] Load testing completed
- [ ] Mobile responsiveness verified

## Environment Variables (Production)

Required for production deployment:

```env
# Critical - Set these first
NODE_ENV=production
ANTHROPIC_API_KEY=sk-ant-xxx

# Google Ads
GOOGLE_ADS_CUSTOMER_ID=1234567890
GOOGLE_ADS_DEVELOPER_TOKEN=your_dev_token
GOOGLE_ADS_CLIENT_ID=xxx.apps.googleusercontent.com
GOOGLE_ADS_CLIENT_SECRET=xxx
GOOGLE_ADS_REFRESH_TOKEN=xxx

# Meta/Facebook
META_ACCESS_TOKEN=xxx
META_AD_ACCOUNT_ID=act_1234567890

# Optional
PORT=5000
LOG_LEVEL=info
```

## Domain & SSL Setup

### Point Domain to Your App

1. Get your deployment URL from Railway/Heroku
2. Go to your domain registrar
3. Create CNAME record:
   ```
   CNAME subdomain.yourdomain.com -> railway-app.up.railway.app
   ```
4. Wait for DNS propagation (5-30 minutes)

### SSL Certificate

- Railway/Heroku/Vercel provide free SSL automatically
- No additional setup needed

## Monitoring & Maintenance

### Monitor Application Health

```bash
# Check backend logs
railway logs

# Check uptime
# Use StatusPage.io or similar

# Monitor API performance
# Use New Relic or DataDog
```

### Alerts to Setup

1. **API Down** - Notify when backend returns 500+ errors
2. **High Latency** - Alert if response time > 2s
3. **High Error Rate** - Alert if error rate > 5%
4. **Storage Warning** - Alert if database usage > 80%

### Regular Maintenance

- [ ] Weekly: Check error logs
- [ ] Monthly: Review performance metrics
- [ ] Quarterly: Update dependencies
- [ ] Annually: Security audit

## Scaling (When You Get Traffic)

### When to Scale

- Backend: When latency > 1s or errors spike
- Database: When queries > 100 queries/sec
- Frontend: When bundle size > 500KB

### How to Scale

**Database:**
```bash
# Add read replicas for heavy queries
# Migrate to managed database with auto-scaling
```

**Backend:**
```bash
# Increase instance size on Railway/Heroku
# Enable auto-scaling
# Add load balancer
```

**Frontend:**
```bash
# Add CDN (CloudFlare)
# Enable compression
# Implement lazy loading
```

## Rollback Strategy

If deployment goes wrong:

### Quick Rollback (Railway)
```bash
railway logs  # Find failed deployment
railway deploy --step back  # Roll back to previous
```

### Manual Rollback
1. Connect to previous stable version in git
2. Redeploy from that commit
3. Verify functionality
4. Debug issue offline

## Cost Optimization

### Recommended Free/Cheap Services

| Service | Cost | Alternative |
|---------|------|-------------|
| Railway Backend | $5-20/mo | Heroku free ($7/mo) |
| Vercel Frontend | FREE | Railway ($5/mo) |
| Anthropic Claude | Pay as you go | Cache prompts |
| Monitoring | Sentry free tier | DIY logging |

### Cost Saving Tips

1. Use API caching (reduce AI calls by 50%)
2. Batch data fetches
3. Compress frontend bundle
4. Use CDN for assets
5. Monitor API usage

## Troubleshooting Deployment

### Backend Won't Start
```bash
railway logs  # Check errors
# Common issues:
# - Missing env vars
# - Port already in use
# - Database connection failed
```

### Frontend Build Fails
```bash
npm run build  # Run locally to debug
# Check:
# - Node version compatibility
# - Missing dependencies
# - Build script errors
```

### API Not Responding
- Check CORS settings in backend
- Verify API keys are correct
- Check Rate limits
- Review firewall rules

## Health Check

After deployment, verify:

1. **Backend Health**
   ```bash
   curl https://your-app.railway.app/api/google-ads
   # Should return 200 with JSON data
   ```

2. **Frontend Loads**
   - Visit frontend URL
   - Check for errors in console
   - Test all tabs load

3. **AI Recommendations Work**
   - Create a post
   - Click "Analyze" button
   - Should see Claude recommendations

## Support

Need help?

1. Check Railway/Heroku logs
2. Verify environment variables
3. Test API endpoints with Postman
4. Check browser console for errors
5. Review error monitoring dashboard

---

**Deployment Time:** 30-45 minutes
**Cost:** $5-15/month
**Uptime Target:** 99.5%
