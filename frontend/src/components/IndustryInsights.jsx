export default function IndustryInsights({ trendingKeywords, decliningKeywords }) {
  if (!trendingKeywords || !decliningKeywords) return null

  return (
    <>
      {/* Trending Keywords */}
      <div className="chart-container">
        <h3 className="chart-title">📈 Rising Trends - Opportunities</h3>
        <p style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>
          Keywords with increasing search volume - Early movers get competitive advantage
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
          {trendingKeywords.map((kw, idx) => {
            const bgColor = kw.opportunity === 'high' ? '#d1fae5' : '#fef3c7'
            const borderColor = kw.opportunity === 'high' ? '#10b981' : '#f59e0b'
            const textColor = kw.opportunity === 'high' ? '#065f46' : '#92400e'

            return (
              <div key={idx} style={{ background: bgColor, padding: '15px', borderRadius: '8px', borderLeft: `4px solid ${borderColor}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                  <h4 style={{ margin: '0', color: textColor, fontSize: '14px' }}>{kw.keyword}</h4>
                  <span style={{ background: borderColor, color: 'white', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                    +{kw.volume_change}
                  </span>
                </div>

                <div style={{ fontSize: '12px', color: textColor, lineHeight: '1.6', marginBottom: '10px' }}>
                  <p style={{ margin: '5px 0' }}>📊 Volume: {kw.search_volume.toLocaleString()} monthly searches</p>
                  <p style={{ margin: '5px 0' }}>💰 Avg CPC: ${kw.avg_cpc.toFixed(2)}</p>
                </div>

                <div style={{ padding: '10px', background: 'rgba(255,255,255,0.5)', borderRadius: '4px', marginBottom: '10px' }}>
                  <p style={{ margin: '0', fontSize: '11px', color: textColor, fontWeight: 'bold' }}>
                    {kw.opportunity === 'high'
                      ? '🔥 HIGH OPPORTUNITY - Act Now!'
                      : '📌 Medium Opportunity - Monitor'}
                  </p>
                </div>

                <button
                  style={{
                    width: '100%',
                    padding: '8px',
                    background: borderColor,
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.opacity = '0.8'}
                  onMouseOut={(e) => e.target.style.opacity = '1'}
                >
                  {kw.recommended_action === 'NEW_CAMPAIGN' && '➕ Create New Campaign'}
                  {kw.recommended_action === 'INCREASE_BID' && '📈 Increase Bid'}
                  {kw.recommended_action === 'INCREASE_BUDGET' && '💵 Increase Budget'}
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Declining Keywords */}
      <div className="chart-container" style={{ marginTop: '30px' }}>
        <h3 className="chart-title">📉 Declining Trends - Warning Signs</h3>
        <p style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>
          Keywords losing search volume - Consider reducing spend or pausing
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
          {decliningKeywords.map((kw, idx) => (
            <div key={idx} style={{ background: '#fee2e2', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                <h4 style={{ margin: '0', color: '#7f1d1d', fontSize: '14px' }}>{kw.keyword}</h4>
                <span style={{ background: '#ef4444', color: 'white', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                  {kw.volume_change}
                </span>
              </div>

              <div style={{ fontSize: '12px', color: '#7f1d1d', lineHeight: '1.6', marginBottom: '10px' }}>
                <p style={{ margin: '5px 0', fontStyle: 'italic' }}>💭 Why: {kw.reason}</p>
              </div>

              <button
                style={{
                  width: '100%',
                  padding: '8px',
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.opacity = '0.8'}
                onMouseOut={(e) => e.target.style.opacity = '1'}
              >
                {kw.recommended_action === 'PAUSE' && '⏸️ Pause Campaign'}
                {kw.recommended_action === 'REDUCE_BID' && '📉 Reduce Bid'}
                {kw.recommended_action === 'MONITOR' && '👀 Monitor'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Market Insights */}
      <div className="chart-container" style={{ marginTop: '30px' }}>
        <h3 className="chart-title">🔍 Market Intelligence & Insights</h3>

        <div className="recommendation-content" style={{ background: '#f0f9ff', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
          <h4 style={{ color: '#0369a1', marginBottom: '15px' }}>🎯 Key Market Trends</h4>
          <ul>
            <li><strong>Sustainability Trend:</strong> +65% YoY growth in eco-friendly searches - Your industry is shifting green</li>
            <li><strong>Mobile Dominance:</strong> 52% more mobile searches, but ROAS down 15% - Mobile experience critical</li>
            <li><strong>Long-tail Keywords:</strong> Growing as searchers get more specific - Opportunity in niche keywords</li>
            <li><strong>Voice Search:</strong> Rising share of total searches - Optimize for conversational queries</li>
          </ul>

          <h4 style={{ color: '#0369a1', marginTop: '20px', marginBottom: '10px' }}>📋 Competitive Landscape</h4>
          <ul>
            <li>✅ You have advantage in brand keywords (lower CPA than competitors)</li>
            <li>⚠️ Competitors aggressively bidding on high-intent keywords</li>
            <li>📈 New entrants targeting long-tail (less competitive)</li>
            <li>🔄 Market consolidation - Expect larger competitors to enter</li>
          </ul>

          <h4 style={{ color: '#0369a1', marginTop: '20px', marginBottom: '10px' }}>💡 Strategic Recommendations</h4>
          <ul>
            <li>🎯 <strong>Double down on rising trends</strong> - "sustainable shoes" is your next big winner</li>
            <li>📱 <strong>Fix mobile experience</strong> - Optimize landing pages for mobile users</li>
            <li>🔑 <strong>Expand long-tail keywords</strong> - Less competition, often better ROAS</li>
            <li>🛡️ <strong>Protect brand terms</strong> - Competitors will try to steal your traffic</li>
          </ul>
        </div>
      </div>
    </>
  )
}
