import { useState, useEffect } from 'react'
import axios from 'axios'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('overview')
  const [googleData, setGoogleData] = useState(null)
  const [metaData, setMetaData] = useState(null)
  const [recommendations, setRecommendations] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Fetch data on component mount
  useEffect(() => {
    fetchAllData()
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

      // Get AI recommendations
      const analysisRes = await axios.post('/api/analyze', {
        googleAdsData: googleRes.data.data,
        metaAdsData: metaRes.data.data
      })

      setRecommendations(analysisRes.data.recommendations)
    } catch (err) {
      setError(err.message || 'Failed to fetch data')
      console.error('Fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1>📊 Ads Audit Dashboard</h1>
          <p>Real-time Google Ads & Meta Ads Performance Analysis with AI Recommendations</p>
        </div>

        {error && (
          <div className="error">
            ⚠️ {error} - Using mock data for demonstration
          </div>
        )}

        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            📈 Overview
          </button>
          <button
            className={`tab-btn ${activeTab === 'google' ? 'active' : ''}`}
            onClick={() => setActiveTab('google')}
          >
            🔍 Google Ads
          </button>
          <button
            className={`tab-btn ${activeTab === 'meta' ? 'active' : ''}`}
            onClick={() => setActiveTab('meta')}
          >
            📘 Meta Ads
          </button>
          <button
            className={`tab-btn ${activeTab === 'trends' ? 'active' : ''}`}
            onClick={() => setActiveTab('trends')}
          >
            🌍 Market Trends
          </button>
          <button
            className={`tab-btn ${activeTab === 'recommendations' ? 'active' : ''}`}
            onClick={() => setActiveTab('recommendations')}
          >
            🤖 AI Recommendations
          </button>
          <button
            className="tab-btn refresh-btn"
            onClick={fetchAllData}
            disabled={loading}
            title="Refresh data"
          >
            {loading ? '⟳ Refreshing...' : '⟳ Refresh'}
          </button>
        </div>

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
    </div>
  )
}

export default App
