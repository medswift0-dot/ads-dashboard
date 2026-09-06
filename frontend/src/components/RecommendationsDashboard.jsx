export default function RecommendationsDashboard({ recommendations, loading }) {
  if (loading) {
    return <div className="loading"><div className="spinner"></div>Generating AI recommendations...</div>
  }

  if (!recommendations) {
    return <div className="error">No recommendations available</div>
  }

  const analysisText = recommendations.analysis || ''
  const lines = analysisText.split('\n')

  return (
    <div className="recommendations-box">
      <h3>🤖 AI-Powered Optimization Analysis</h3>
      <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '20px' }}>
        Generated: {new Date(recommendations.generated_at).toLocaleString()}
      </p>

      <div className="recommendation-content">
        {lines.map((line, index) => {
          // Skip empty lines
          if (!line.trim()) {
            return <br key={index} />
          }

          // Style headers
          if (line.startsWith('# ')) {
            return <h3 key={index} style={{ fontSize: '22px', marginTop: '20px', marginBottom: '15px', color: '#667eea' }}>{line.replace('# ', '')}</h3>
          }

          if (line.startsWith('## ')) {
            return <h4 key={index} style={{ fontSize: '18px', marginTop: '15px', marginBottom: '10px', color: '#667eea' }}>{line.replace('## ', '')}</h4>
          }

          // Style list items
          if (line.startsWith('- ')) {
            return <li key={index}>{line.replace('- ', '')}</li>
          }

          if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ') || line.startsWith('5. ')) {
            return <li key={index}>{line.replace(/^\d\.\s/, '')}</li>
          }

          // Regular text
          return <p key={index} style={{ marginBottom: '10px', lineHeight: '1.6' }}>{line}</p>
        })}
      </div>

      <div style={{ marginTop: '30px', padding: '20px', background: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
        <h4 style={{ color: '#667eea', marginBottom: '10px' }}>💡 Implementation Priority</h4>
        <ol style={{ marginLeft: '20px' }}>
          <li><strong>Week 1:</strong> Implement quick wins (negative keywords, bid adjustments)</li>
          <li><strong>Week 2:</strong> Rebalance budget across platforms</li>
          <li><strong>Week 3:</strong> Launch A/B tests for creative and copy</li>
          <li><strong>Ongoing:</strong> Monitor metrics and adjust based on performance</li>
        </ol>
      </div>

      <div style={{ marginTop: '20px', padding: '20px', background: '#f0fdf4', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
        <h4 style={{ color: '#10b981', marginBottom: '10px' }}>📈 Expected Outcomes</h4>
        <ul style={{ marginLeft: '20px' }}>
          <li>15-20% increase in total conversions</li>
          <li>$15-25 reduction in average CPA</li>
          <li>$5,000-8,000 additional monthly revenue</li>
          <li>Improved campaign efficiency scores</li>
        </ul>
      </div>
    </div>
  )
}
