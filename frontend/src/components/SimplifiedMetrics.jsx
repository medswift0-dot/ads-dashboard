export default function SimplifiedMetrics({ googleData, metaData }) {
  const metrics = [
    {
      title: 'Total Revenue',
      value: '$485,000',
      tooltip: 'Total money generated from all campaigns',
      icon: '💰',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      trend: '+12%',
      trendStatus: 'up'
    },
    {
      title: 'Return on Investment',
      value: '3.2x',
      tooltip: 'For every $1 spent, you get $3.20 back',
      icon: '📈',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      trend: 'Excellent',
      trendStatus: 'up'
    },
    {
      title: 'Cost Per Customer',
      value: '$85',
      tooltip: 'Average cost to acquire one customer. Lower is better.',
      icon: '🎯',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      trend: 'On target',
      trendStatus: 'good'
    },
    {
      title: 'Lead Quality',
      value: '78/100',
      tooltip: 'Quality score of your leads. 70+ is excellent.',
      icon: '⭐',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      trend: 'Good',
      trendStatus: 'up'
    }
  ]

  return (
    <div className="simplified-metrics">
      <div className="metrics-header">
        <div>
          <h2>📊 Performance Overview</h2>
          <p>Your key metrics at a glance</p>
        </div>
      </div>

      <div className="metrics-grid-simple">
        {metrics.map((metric, idx) => (
          <div key={idx} className="metric-card-simple">
            <div className="metric-icon-circle">{metric.icon}</div>

            <div className="metric-content">
              <p className="metric-label">{metric.title}</p>
              <div className="metric-value-display">
                <span className="metric-value-large">{metric.value}</span>
                <span className={`metric-trend-badge ${metric.trendStatus}`}>
                  {metric.trend}
                </span>
              </div>
            </div>

            <div className="metric-info-hover">
              <span className="info-icon-small">ℹ</span>
              <span className="tooltip-text">{metric.tooltip}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="metrics-legend">
        <div className="legend-row">
          <div className="legend-item">
            <span className="legend-status good"></span>
            <span><strong>Green</strong> - Performing well</span>
          </div>
          <div className="legend-item">
            <span className="legend-status warning"></span>
            <span><strong>Yellow</strong> - Monitor this</span>
          </div>
          <div className="legend-item">
            <span className="legend-status danger"></span>
            <span><strong>Red</strong> - Needs action</span>
          </div>
        </div>
      </div>
    </div>
  )
}
