import { useState } from 'react'

export default function PerformanceAnalysis({ googleData, metaData }) {
  const [filterType, setFilterType] = useState('campaign')
  const [searchTerm, setSearchTerm] = useState('')

  const getPerformanceBadge = (performance) => {
    const badges = {
      excellent: { emoji: '🟢', label: 'Excellent', color: '#10b981' },
      good: { emoji: '🟡', label: 'Good', color: '#f59e0b' },
      poor: { emoji: '🔴', label: 'Poor', color: '#ef4444' }
    }
    return badges[performance] || badges.good
  }

  const renderCampaignBreakdown = () => {
    const allCampaigns = [
      ...googleData.campaigns.map(c => ({ ...c, platform: 'Google' })),
      ...metaData.campaigns.map(c => ({ ...c, platform: 'Meta' }))
    ]

    return (
      <div className="performance-cards">
        {allCampaigns.map(campaign => {
          const badge = getPerformanceBadge(campaign.performance)
          return (
            <div key={`${campaign.platform}-${campaign.id}`} className="performance-card">
              <div className="card-header">
                <div>
                  <h4>{campaign.name}</h4>
                  <p className="card-meta">{campaign.platform} • ID: {campaign.id}</p>
                </div>
                <span style={{ fontSize: '24px' }}>{badge.emoji}</span>
              </div>

              <div className="metrics-row">
                <div className="metric-box">
                  <span className="metric-label">ROAS</span>
                  <span className="metric-val">{campaign.roas?.toFixed(2)}x</span>
                </div>
                <div className="metric-box">
                  <span className="metric-label">CTR</span>
                  <span className="metric-val">{(campaign.ctr || (campaign.clicks / campaign.impressions * 100)).toFixed(2)}%</span>
                </div>
                <div className="metric-box">
                  <span className="metric-label">Conversions</span>
                  <span className="metric-val">{campaign.conversions}</span>
                </div>
                <div className="metric-box">
                  <span className="metric-label">Cost</span>
                  <span className="metric-val">${campaign.cost || campaign.spent_today}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  const renderAdSetBreakdown = () => {
    const allAdSets = []
    metaData.campaigns.forEach(campaign => {
      if (campaign.adsets) {
        campaign.adsets.forEach(adset => {
          allAdSets.push({ ...adset, campaignName: campaign.name, platform: 'Meta' })
        })
      }
    })

    if (allAdSets.length === 0) return <p className="empty">No ad sets available</p>

    return (
      <div className="performance-table">
        <table>
          <thead>
            <tr>
              <th>Ad Set Name</th>
              <th>Campaign</th>
              <th>Performance</th>
              <th>Impressions</th>
              <th>Clicks</th>
              <th>Conversions</th>
              <th>CPC</th>
              <th>ROAS</th>
            </tr>
          </thead>
          <tbody>
            {allAdSets.map((adset, idx) => {
              const badge = getPerformanceBadge(adset.performance)
              return (
                <tr key={idx}>
                  <td><strong>{adset.name}</strong></td>
                  <td>{adset.campaignName}</td>
                  <td><span style={{ fontSize: '16px' }}>{badge.emoji} {badge.label}</span></td>
                  <td>{adset.impressions?.toLocaleString()}</td>
                  <td>{adset.clicks}</td>
                  <td>{adset.conversions}</td>
                  <td>${adset.cpc?.toFixed(2)}</td>
                  <td><strong>{adset.roas?.toFixed(2)}x</strong></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

  const renderKeywordBreakdown = () => {
    const allKeywords = []
    googleData.campaigns.forEach(campaign => {
      if (campaign.keywords) {
        campaign.keywords.forEach(kw => {
          allKeywords.push({ ...kw, campaignName: campaign.name })
        })
      }
    })
    googleData.keywords.forEach(kw => {
      allKeywords.push({ ...kw, campaignName: 'All' })
    })

    return (
      <div className="performance-table">
        <table>
          <thead>
            <tr>
              <th>Keyword</th>
              <th>Campaign</th>
              <th>Performance</th>
              <th>Impressions</th>
              <th>Clicks</th>
              <th>CTR</th>
              <th>Conversions</th>
              <th>CPA</th>
            </tr>
          </thead>
          <tbody>
            {allKeywords.map((kw, idx) => {
              const badge = getPerformanceBadge(kw.performance)
              return (
                <tr key={idx}>
                  <td><strong>{kw.name || kw.keyword}</strong></td>
                  <td>{kw.campaignName}</td>
                  <td><span style={{ fontSize: '16px' }}>{badge.emoji} {badge.label}</span></td>
                  <td>{kw.impressions?.toLocaleString()}</td>
                  <td>{kw.clicks}</td>
                  <td>{((kw.clicks / kw.impressions * 100) || 0).toFixed(2)}%</td>
                  <td>{kw.conversions}</td>
                  <td>${kw.cpa?.toFixed(2)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="performance-analysis">
      <div className="analysis-header">
        <div className="filter-tabs">
          <button
            className={`filter-tab ${filterType === 'campaign' ? 'active' : ''}`}
            onClick={() => setFilterType('campaign')}
          >
            📊 Campaign Performance
          </button>
          <button
            className={`filter-tab ${filterType === 'adset' ? 'active' : ''}`}
            onClick={() => setFilterType('adset')}
          >
            🎯 Ad Sets
          </button>
          <button
            className={`filter-tab ${filterType === 'keyword' ? 'active' : ''}`}
            onClick={() => setFilterType('keyword')}
          >
            🔑 Keywords
          </button>
        </div>
      </div>

      <div className="analysis-content">
        {filterType === 'campaign' && renderCampaignBreakdown()}
        {filterType === 'adset' && renderAdSetBreakdown()}
        {filterType === 'keyword' && renderKeywordBreakdown()}
      </div>
    </div>
  )
}
