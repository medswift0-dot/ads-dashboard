export default function SimplifiedMetrics({ googleData, metaData }) {
  const metrics = [
    {
      title: 'Total Revenue This Month',
      value: '$485,000',
      tooltip: 'Total money generated from all campaigns',
      color: '#10b981',
      trend: '+12% vs last month'
    },
    {
      title: 'Campaign Efficiency (ROI)',
      value: '3.2x',
      tooltip: 'For every $1 spent, you get $3.20 back. Above 3x is excellent.',
      color: '#667eea',
      trend: 'Excellent performance'
    },
    {
      title: 'Cost Per Acquisition',
      value: '$85',
      tooltip: 'Average cost to get one customer. Lower is better.',
      color: '#f59e0b',
      trend: 'Target: $50-100'
    },
    {
      title: 'Lead Quality Score',
      value: '78/100',
      tooltip: 'Measures how "good" your leads are (likely to convert). 70+ is good.',
      color: '#667eea',
      trend: 'Good quality'
    }
  ]

  return (
    <div className="simplified-metrics">
      <div className="metrics-header">
        <h2>📊 Your Dashboard (In Simple Terms)</h2>
        <p>Hover over any metric to learn what it means</p>
      </div>

      <div className="metrics-grid-simple">
        {metrics.map((metric, idx) => (
          <div key={idx} className="metric-card-simple" style={{ borderTopColor: metric.color }}>
            <div className="metric-top">
              <h3>{metric.title}</h3>
              <span className="info-icon" title={metric.tooltip}>?</span>
            </div>

            <div className="metric-value-large">{metric.value}</div>
            <p className="metric-trend">{metric.trend}</p>

            <div className="metric-explanation">
              <span className="explain-icon">💡</span>
              <span>{metric.tooltip}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="metrics-legend">
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#10b981' }}></span>
          <span><strong>Green = Good</strong> - You're performing well here</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#f59e0b' }}></span>
          <span><strong>Yellow = Watch</strong> - Keep an eye on this metric</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#ef4444' }}></span>
          <span><strong>Red = Action Needed</strong> - This needs improvement</span>
        </div>
      </div>
    </div>
  )
}
