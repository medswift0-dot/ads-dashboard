# Performance Hub Dashboard - Local Setup Guide

## Prerequisites

### 1. Install Node.js
- **Download:** https://nodejs.org/ (LTS version recommended)
- **Choose:** Windows Installer (.msi)
- **Install:** Follow the wizard (keep defaults)
- **Verify:** Open PowerShell and run:
  ```powershell
  node --version
  npm --version
  ```

---

## Setup & Run

### Step 1: Install Dependencies

**Backend:**
```powershell
cd C:\Users\Z B O O K\Desktop\Claude-Agent\ads-dashboard\backend
npm install
```

**Frontend:**
```powershell
cd C:\Users\Z B O O K\Desktop\Claude-Agent\ads-dashboard\frontend
npm install
```

---

### Step 2: Start Backend (Terminal 1)

```powershell
cd C:\Users\Z B O O K\Desktop\Claude-Agent\ads-dashboard\backend
npm start
```

Expected output:
```
Server running on http://localhost:5000
```

---

### Step 3: Start Frontend (Terminal 2)

```powershell
cd C:\Users\Z B O O K\Desktop\Claude-Agent\ads-dashboard\frontend
npm run dev
```

Expected output:
```
Local:   http://localhost:5173
```

---

### Step 4: Open Dashboard

Visit in your browser: **http://localhost:5173**

---

## Features Available

✅ Google Ads & Meta Ads Performance Analysis  
✅ 8 Advanced Analytics Features (Alerts, Funnel Analysis, Lead Quality, Attribution, Forecasting, Segmentation, A/B Testing, Budget Optimization)  
✅ AI-Powered Recommendations (Claude API)  
✅ Dark Mode Toggle  
✅ Real-time Data with Mock Data  

---

## Environment Variables

Create `.env` in backend folder (optional, for Claude API):
```
ANTHROPIC_API_KEY=your_key_here
```

Without it, the app uses mock recommendations.

---

## Troubleshooting

**Port already in use?**
- Backend (5000): Change in `backend/server.js` line with `5000`
- Frontend (5173): Vite will auto-find next available port

**npm command not found?**
- Restart PowerShell/Terminal after installing Node.js
- Or add Node.js to PATH manually

**Module not found errors?**
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again

---

## Project Structure

```
ads-dashboard/
├── backend/                 # Express.js API
│   ├── server.js           # Main server
│   └── package.json
├── frontend/               # React + Vite
│   ├── src/
│   │   ├── App.jsx         # Main component
│   │   ├── App.css         # Styling
│   │   └── components/     # Dashboard components
│   └── package.json
└── LOCAL_SETUP.md         # This file
```

---

**Ready to go!** 🚀

Run the commands above and start building!
