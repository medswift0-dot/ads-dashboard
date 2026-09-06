import { useState, useEffect } from 'react'
import axios from 'axios'
import Dashboard from './components/Dashboard'
import { mockGoogleData, mockMetaData } from './mockData'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('overview')
  const [googleData, setGoogleData] = useState(null)
  const [metaData, setMetaData] = useState(null)
  const [recommendations, setRecommendations] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    fetchAllData()
    const savedDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(savedDarkMode)
    if (savedDarkMode) document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  const fetchAllData = async () => {
    setLoading(true)
    setError(null)
    try {
      const [googleRes, metaRes] = await Promise.all([
        axios.get('/api/google-ads'),
        axios.get('/api/meta-ads')
      ])

      setGoogleData(googleRes.data.data)
      setMetaData(metaRes.data.data)

      const analysisRes = await axios.post('/api/analyze', {
        googleAdsData: googleRes.data.data,
        metaAdsData: metaRes.data.data
      })

      setRecommendations(analysisRes.data.recommendations)
    } catch (err) {
      console.error('API error, using mock data:', err)
      setGoogleData(mockGoogleData)
      setMetaData(mockMetaData)
      setRecommendations({
        summary: 'Mock AI Analysis - Backend not connected',
        insights: ['Campaign performance is above average', 'Consider optimizing low-performing keywords']
      })
      setError('Backend not connected - Using demo data')
    } finally {
      setLoading(false)
    }
  }

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode)
    if (newDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }

  const navItems = [
    { id: 'overview', label: '📈 Overview', icon: '📈' },
    { id: 'google', label: '🔍 Google Ads', icon: '🔍' },
    { id: 'meta', label: '📘 Meta Ads', icon: '📘' },
    { id: 'trends', label: '🌍 Market Trends', icon: '🌍' },
    { id: 'recommendations', label: '🤖 AI Recommendations', icon: '🤖' }
  ]

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>📊 AdsAI</h2>
          <p>Dashboard</p>
        </div>

        <nav className="sidebar-nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button
            className="theme-toggle"
            onClick={toggleDarkMode}
            title={darkMode ? 'Light mode' : 'Dark mode'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button
            className="refresh-btn-sidebar"
            onClick={fetchAllData}
            disabled={loading}
            title="Refresh data"
          >
            {loading ? '⟳' : '⟳'}
          </button>
        </div>
      </aside>

      <main className="main-content">
        <div className="top-bar">
          <h1>Ads Audit Dashboard</h1>
          <p>Real-time Google Ads & Meta Ads Performance Analysis with AI Recommendations</p>
        </div>

        {error && (
          <div className="error-banner">
            ⚠️ {error} - Using mock data for demonstration
          </div>
        )}

        <div className="content-wrapper">
          {loading && activeTab === 'overview' ? (
            <div className="loading">
              <div className="spinner"></div>
              Loading dashboard data...
            </div>
          ) : (
            <Dashboard
              activeTab={activeTab}
              googleData={googleData}
              metaData={metaData}
              recommendations={recommendations}
              loading={loading}
            />
          )}
        </div>
      </main>
    </div>
  )
}

export default App
