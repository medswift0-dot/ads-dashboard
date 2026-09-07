# 🚀 Performance Hub Dashboard - READY TO RUN!

## ✅ Setup Complete!

Your dashboard is fully installed and ready to use locally. All dependencies are installed.

---

## 🎯 How to Run

### **Option 1: Start Everything at Once** (Recommended)

Double-click: **`START_ALL.ps1`**

This will open 2 PowerShell windows automatically:
- Backend running on `http://localhost:5000`
- Frontend running on `http://localhost:5173`

Then open your browser to: **http://localhost:5173**

---

### **Option 2: Start Manually in Two Terminals**

**Terminal 1 - Backend:**
```powershell
cd C:\Users\Z B O O K\Desktop\Claude-Agent\ads-dashboard
.\START_BACKEND.ps1
```

**Terminal 2 - Frontend:**
```powershell
cd C:\Users\Z B O O K\Desktop\Claude-Agent\ads-dashboard
.\START_FRONTEND.ps1
```

Then visit: **http://localhost:5173** in your browser

---

## 📊 What You Get

✅ **Google Ads Analytics** - Performance metrics, ROI tracking  
✅ **Meta Ads Analytics** - Campaign performance, budget analysis  
✅ **Advanced Analytics** - 8 powerful features:
- 🚨 Real-time Alerts
- 📈 Funnel Analysis
- ⭐ Lead Quality Scoring
- 🔗 Attribution Modeling
- 🔮 Revenue Forecasting
- 👥 Audience Segmentation
- 🧪 A/B Testing Results
- 💰 Budget Optimization

✅ **AI-Powered Recommendations** - Claude API integration  
✅ **Dark Mode** - Toggle for comfortable viewing  
✅ **Mock Data** - Real-looking test data included  

---

## 🛠️ What's Installed

- **Node.js v24.20.0** - JavaScript runtime
- **Express.js** - Backend API server
- **React + Vite** - Frontend framework & build tool
- **Anthropic SDK** - Claude AI integration
- **CORS** - Cross-origin request handling

---

## 📁 Project Structure

```
ads-dashboard/
├── backend/                    # Express.js API
│   ├── server.js              # Main API server
│   ├── package.json           # Backend dependencies
│   └── node_modules/          # Installed packages
│
├── frontend/                  # React + Vite app
│   ├── src/
│   │   ├── App.jsx            # Main dashboard component
│   │   ├── App.css            # Global styling
│   │   ├── components/        # UI components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── AdvancedAnalytics.jsx
│   │   │   ├── SimplifiedMetrics.jsx
│   │   │   ├── QuickActions.jsx
│   │   │   └── ...more components
│   │   └── mockData.js        # Test data
│   ├── package.json           # Frontend dependencies
│   └── node_modules/          # Installed packages
│
├── START_ALL.ps1              # Run everything at once
├── START_BACKEND.ps1          # Run backend only
├── START_FRONTEND.ps1         # Run frontend only
├── LOCAL_SETUP.md             # Setup instructions
├── READY_TO_RUN.md            # This file
└── git history/               # All your commits
```

---

## 🌐 URLs When Running

- **Dashboard**: http://localhost:5173
- **API Backend**: http://localhost:5000
- **API Endpoints**:
  - `GET /api/google-ads` - Google Ads data
  - `GET /api/meta-ads` - Meta Ads data
  - `POST /api/analyze` - AI recommendations

---

## 🔌 Environment Variables (Optional)

For Claude AI recommendations, create a `.env` file in the `backend` folder:

```
ANTHROPIC_API_KEY=your_api_key_here
```

Without it, the app uses mock recommendations (still works great!).

---

## ⚡ Troubleshooting

### **Port Already in Use?**
If you get "port 5000 or 5173 already in use":
1. Close other applications using those ports
2. Or modify the port numbers in:
   - Backend: `backend/server.js` (search for `5000`)
   - Frontend: `vite.config.js` (search for `5173`)

### **npm command not found?**
- Restart PowerShell/Terminal
- Or run the startup scripts provided

### **Blank screen or errors?**
- Check browser console (F12)
- Ensure backend is running (Terminal 1)
- Ensure frontend is running (Terminal 2)
- Check that both are fully started before loading the dashboard

### **Module not found errors?**
```powershell
# In backend folder:
rm -r node_modules
rm package-lock.json
npm install

# In frontend folder:
rm -r node_modules
rm package-lock.json
npm install
```

---

## 🎮 Using the Dashboard

1. **Open** http://localhost:5173
2. **View** Google Ads & Meta Ads performance
3. **Toggle** Dark Mode (button in sidebar)
4. **Click** tabs to explore:
   - Overview - Key metrics
   - Google Ads - Detailed analysis
   - Meta Ads - Campaign performance
   - Performance Deep Dive - Advanced filtering
   - Advanced Analytics - 8 powerful tools
   - Market Trends - Seasonal patterns
   - AI Recommendations - Smart insights

---

## 📝 Commands Reference

```powershell
# Start everything
.\START_ALL.ps1

# Start just backend
.\START_BACKEND.ps1

# Start just frontend
.\START_FRONTEND.ps1

# Manual start - Backend
cd backend && npm start

# Manual start - Frontend
cd frontend && npm run dev

# Build for production (frontend)
cd frontend && npm run build
```

---

## 🚀 Next Steps

1. **Run it:** Double-click `START_ALL.ps1`
2. **Explore:** Visit http://localhost:5173
3. **Enjoy:** Use all the features!
4. **Deploy later:** When ready, use GitHub + Vercel (setup docs available)

---

## 💡 Tips

- Backend must start before frontend
- Keep both terminals open while using the dashboard
- The frontend automatically connects to the backend API
- All data is mocked - perfect for testing
- Add your own data by modifying files in `frontend/src/mockData.js`

---

## 📞 Need Help?

Check these files for more info:
- `LOCAL_SETUP.md` - Detailed setup guide
- `backend/server.js` - API endpoints
- `frontend/src/App.jsx` - Main component

---

**Happy coding! 🎉**

Your Performance Hub Dashboard is ready to use!
