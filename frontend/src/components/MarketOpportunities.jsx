export default function MarketOpportunities({ opportunities, priceTrends }) {
  if (!opportunities) return null

  const prioritize = (opp) => {
    const roiScore = opp.expected_roi
    const revenueScore = opp.potential_revenue / 1000
    return roiScore + revenueScore
  }

  const sorted = [...opportunities].sort((a, b) => prioritize(b) - prioritize(a))

  return (
    <>
      {/* Strategic Opportunities */}
      <div className="chart-container">
        <h3 className="chart-title">🚀 Strategic Market Opportunities</h3>
        <p style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>
          High-ROI opportunities based on market trends. Priority ranked by expected ROI.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '20px' }}>
          {sorted.map((opp, idx) => {
            const priorityColors = ['#10b981', '#f59e0b', '#3b82f6']
            const borderColor = priorityColors[idx] || '#667eea'
            const bgColor = borderColor + '15'

            return (
              <div key={idx} style={{ background: bgColor, padding: '20px', borderRadius: '8px', borderLeft: `4px solid ${borderColor}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                  <h4 style={{ margin: '0', color: borderColor, fontSize: '16px' }}>
                    {idx === 0 && '🥇'} {idx === 1 && '🥈'} {idx === 2 && '🥉'} {opp.name}
                  </h4>
                  <span style={{ background: borderColor, color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                    Priority #{idx + 1}
                  </span>
                </div>

                <p style={{ fontSize: '13px', color: '#666', marginBottom: '15px', lineHeight: '1.5' }}>
                  {opp.description}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px', fontSize: '12px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.5)', padding: '10px', borderRadius: '4px' }}>
                    <p style={{ margin: '0 0 5px 0', color: '#666', fontSize: '11px' }}>Investment</p>
                    <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold', color: borderColor }}>
                      ${opp.investment.toLocaleString()}
                    </p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.5)', padding: '10px', borderRadius: '4px' }}>
                    <p style={{ margin: '0 0 5px 0', color: '#666', fontSize: '11px' }}>Expected ROI</p>
                    <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold', color: '#10b981' }}>
                      {opp.expected_roi}x
                    </p>
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.5)', padding: '10px', borderRadius: '4px', marginBottom: '15px' }}>
                  <p style={{ margin: '0 0 5px 0', color: '#666', fontSize: '11px' }}>Potential Revenue</p>
                  <p style={{ margin: '0', fontSize: '18px', fontWeight: 'bold', color: borderColor }}>
                    ${opp.potential_revenue.toLocaleString()}
                  </p>
                  <p style={{ margin: '5px 0 0 0', fontSize: '11px', color: '#666' }}>
                    Net Profit: ${(opp.potential_revenue - opp.investment).toLocaleString()}
                  </p>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.5)', padding: '10px', borderRadius: '4px', marginBottom: '15px' }}>
                  <p style={{ margin: '0 0 5px 0', color: '#666', fontSize: '11px', textTransform: 'uppercase', fontWeight: 'bold' }}>Timeline</p>
                  <p style={{ margin: '0', fontSize: '13px', fontWeight: 'bold' }}>{opp.timeline}</p>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.5)', padding: '10px', borderRadius: '4px' }}>
                  <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: '11px', textTransform: 'uppercase', fontWeight: 'bold' }}>Recommendation</p>
                  <p style={{ margin: '0', fontSize: '12px', fontStyle: 'italic' }}>{opp.recommendation}</p>
                </div>

                <button
                  style={{
                    width: '100%',
                    marginTop: '15px',
                    padding: '10px',
                    background: borderColor,
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.opacity = '0.8'}
                  onMouseOut={(e) => e.target.style.opacity = '1'}
                >
                  📋 View Full Strategy
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Price Trends & Forecasts */}
      {priceTrends && (
        <div className="chart-container" style={{ marginTop: '30px' }}>
          <h3 className="chart-title">📊 Price Trends & ROI Forecasts</h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px' }}>
            <div style={{ background: '#fef3c7', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
              <p style={{ fontSize: '12px', color: '#92400e', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '10px' }}>Avg CPC Trend</p>
              <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#b45309', marginBottom: '5px' }}>
                {priceTrends.avg_cpc_trend.replace(/_/g, ' ')}
              </p>
              <p style={{ fontSize: '12px', color: '#92400e' }}>{priceTrends.avg_cpc_forecast}</p>
            </div>

            <div style={{ background: '#d1fae5', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
              <p style={{ fontSize: '12px', color: '#065f46', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '10px' }}>CPA Trend</p>
              <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#059669', marginBottom: '5px' }}>
                {priceTrends.cpa_trend.replace(/_/g, ' ')}
              </p>
              <p style={{ fontSize: '12px', color: '#065f46' }}>{priceTrends.cpa_forecast}</p>
            </div>

            <div style={{ background: '#dbeafe', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
              <p style={{ fontSize: '12px', color: '#1e40af', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '10px' }}>ROAS Forecast</p>
              <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#1e40af', marginBottom: '5px' }}>↗️ Positive Outlook</p>
              <p style={{ fontSize: '12px', color: '#1e40af' }}>{priceTrends.roas_forecast}</p>
            </div>
          </div>

          <div className="recommendation-content" style={{ background: '#f0f9ff', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
            <h4 style={{ color: '#0369a1', marginBottom: '15px' }}>🎯 Pricing & Forecast Implications</h4>
            <ul>
              <li><strong>Cost Pressure:</strong> CPC rising 12% YoY due to increased competition</li>
              <li><strong>Silver Lining:</strong> Your CPA falling 8% - Better conversion efficiency offset higher costs</li>
              <li><strong>Q4 Outlook:</strong> Expect CPC +15-20% in Nov-Dec, but CPA holds steady due to volume surge</li>
              <li><strong>Recommendation:</strong> Prepare higher budgets now for seasonal peak, lock in current bid strategies</li>
            </ul>

            <h4 style={{ color: '#0369a1', marginTop: '20px', marginBottom: '10px' }}>💰 Budget Planning for Next Quarter</h4>
            <ul>
              <li>📈 Plan for 12-15% higher overall spend due to CPC increases</li>
              <li>🎯 Target same ROAS (3.5x+) but need higher budget to achieve it</li>
              <li>🔄 Reallocate from low performers to high performers (better ROI protection)</li>
              <li>⏰ Shift budget timing: Save 30% for Q4 peak season (Nov-Dec)</li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
