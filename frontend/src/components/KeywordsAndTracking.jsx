export default function KeywordsAndTracking({ googleData }) {
  if (!googleData) return null

  const { keywords = [], negative_keywords = [], suggested_negative_keywords = [], conversion_tracking_audit = {} } = googleData

  return (
    <>
      {/* Keywords Section */}
      <div className="chart-container">
        <h3 className="chart-title">🔑 Search Keywords Performance</h3>
        <table className="campaigns-table">
          <thead>
            <tr>
              <th>Keyword</th>
              <th>Match Type</th>
              <th>Impressions</th>
              <th>Clicks</th>
              <th>Quality Score</th>
              <th>CPA</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {keywords.map((kw, idx) => (
              <tr key={idx}>
                <td><strong>{kw.keyword}</strong></td>
                <td>{kw.match_type}</td>
                <td>{kw.impressions.toLocaleString()}</td>
                <td>{kw.clicks}</td>
                <td>
                  <span style={{ fontWeight: 'bold', color: kw.quality_score >= 7 ? '#10b981' : kw.quality_score >= 5 ? '#f59e0b' : '#ef4444' }}>
                    {kw.quality_score}/10
                  </span>
                </td>
                <td>${(kw.cpa || 0).toFixed(2)}</td>
                <td>
                  <span className={`badge ${kw.status === 'ENABLED' ? 'active' : 'inefficient'}`}>
                    {kw.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Negative Keywords Section */}
      <div className="chart-container" style={{ marginTop: '30px' }}>
        <h3 className="chart-title">❌ Negative Keywords (Already Added)</h3>
        <div style={{ background: '#f0fdf4', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <p style={{ color: '#065f46', marginBottom: '15px' }}>
            ✅ {negative_keywords.length} negative keywords active - Estimated monthly savings: <strong>${negative_keywords.reduce((sum, nk) => sum + nk.estimated_savings, 0)}</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
            {negative_keywords.map((nk, idx) => (
              <div key={idx} style={{ background: 'white', padding: '15px', borderRadius: '6px', borderLeft: '4px solid #10b981' }}>
                <p style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>"{nk.keyword}"</p>
                <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>{nk.reason}</p>
                <p style={{ fontSize: '13px', fontWeight: 'bold', color: '#10b981' }}>
                  Save: ${nk.estimated_savings}/mo (~{nk.monthly_wasted_clicks} clicks)
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Suggested Negative Keywords */}
      <div className="chart-container" style={{ marginTop: '30px' }}>
        <h3 className="chart-title">⚠️ Suggested Negative Keywords to Add</h3>
        <div style={{ background: '#fef3c7', padding: '20px', borderRadius: '8px' }}>
          <p style={{ color: '#92400e', marginBottom: '15px' }}>
            Add these {suggested_negative_keywords.length} negative keywords to save budget on irrelevant searches
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
            {suggested_negative_keywords.map((snk, idx) => (
              <div key={idx} style={{ background: 'white', padding: '15px', borderRadius: '6px', borderLeft: '4px solid #f59e0b' }}>
                <p style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>"{snk.keyword}"</p>
                <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>{snk.reason}</p>
                <p style={{ fontSize: '13px', fontWeight: 'bold', color: '#f59e0b' }}>
                  Potential Savings: ${snk.estimated_impact}/mo
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conversion Tracking Audit */}
      <div className="chart-container" style={{ marginTop: '30px' }}>
        <h3 className="chart-title">📊 Conversion Tracking Audit</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
          <div style={{ background: '#d1fae5', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
            <p style={{ fontSize: '12px', color: '#065f46', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '5px' }}>Campaigns Tracking Active</p>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#10b981' }}>{conversion_tracking_audit.tracking_active}/{conversion_tracking_audit.total_campaigns}</p>
          </div>
          <div style={{ background: '#fee2e2', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
            <p style={{ fontSize: '12px', color: '#7f1d1d', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '5px' }}>Tracking Issues</p>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#ef4444' }}>{conversion_tracking_audit.tracking_issues}</p>
          </div>
          <div style={{ background: '#dbeafe', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
            <p style={{ fontSize: '12px', color: '#1e40af', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '5px' }}>Tracking Quality</p>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#3b82f6' }}>{conversion_tracking_audit.quality_score}%</p>
          </div>
        </div>

        {conversion_tracking_audit.tracking_issues > 0 && (
          <div style={{ background: '#fee2e2', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
            <h4 style={{ color: '#dc2626', marginBottom: '15px' }}>⚠️ Tracking Issues Found</h4>
            <ul style={{ marginLeft: '20px', lineHeight: '1.8', color: '#7f1d1d' }}>
              {conversion_tracking_audit.recommendations?.map((rec, idx) => (
                <li key={idx}>{rec}</li>
              ))}
            </ul>
            <p style={{ marginTop: '15px', fontSize: '13px', color: '#dc2626', fontStyle: 'italic' }}>
              ⚠️ Fix immediately: Missing conversion tracking means you can't measure ROI accurately
            </p>
          </div>
        )}

        {conversion_tracking_audit.recommendations && (
          <div style={{ marginTop: '20px', background: '#f0f9ff', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
            <h4 style={{ color: '#0369a1', marginBottom: '15px' }}>✅ Tracking Recommendations</h4>
            <ul style={{ marginLeft: '20px', lineHeight: '1.8', color: '#1e40af' }}>
              {conversion_tracking_audit.recommendations?.map((rec, idx) => (
                <li key={idx}>{rec}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Keywords Optimization Tips */}
      <div className="chart-container" style={{ marginTop: '30px' }}>
        <h3 className="chart-title">💡 Keywords Optimization Strategy</h3>
        <div className="recommendation-content">
          <h4>High-Quality Keywords (Keep & Increase Bid)</h4>
          <ul>
            <li><strong>"buy shoes online"</strong> - Quality Score 9, CPA $46.22 → Increase bid by 10-15%</li>
            <li><strong>"best running shoes"</strong> - Quality Score 8, CPA $44.64 → Excellent performer, increase budget</li>
          </ul>

          <h4>Low-Quality Keywords (Pause or Optimize)</h4>
          <ul>
            <li><strong>"cheap shoes free shipping"</strong> - Quality Score 4, CPA $120 → Pause this keyword, attracts bargain hunters</li>
            <li><strong>"how to tie shoes"</strong> - Quality Score 2, No conversions → Pause immediately</li>
          </ul>

          <h4>Immediate Actions</h4>
          <ul>
            <li>✅ Add 3 suggested negative keywords (saves ~$545/month)</li>
            <li>✅ Increase bid on high-quality keywords by 10%</li>
            <li>✅ Fix conversion tracking in Display campaign</li>
            <li>✅ Pause low-quality keywords (Quality Score < 5)</li>
          </ul>

          <h4>Expected Impact</h4>
          <ul>
            <li>📈 10-15% increase in conversion rate (better quality scores)</li>
            <li>💰 $500-700/month savings from negative keywords</li>
            <li>📊 More accurate ROI tracking (fix conversion tracking)</li>
            <li>⚡ Improved ad relevance and CTR</li>
          </ul>
        </div>
      </div>
    </>
  )
}
