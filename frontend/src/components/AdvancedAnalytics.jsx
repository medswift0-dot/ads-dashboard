import { useState } from 'react'
import { leadQualityData, funnelData, attributionData, forecastingData, audienceData, alertsData, abTestsData, budgetOptimizationData } from '../advancedMetrics'

export default function AdvancedAnalytics() {
  const [activeTab, setActiveTab] = useState('alerts')

  const tabs = [
    { id: 'alerts', label: '🚨 Real-time Alerts', icon: '🚨' },
    { id: 'funnel', label: '🛣️ Sales Funnel', icon: '🛣️' },
    { id: 'leads', label: '📊 Lead Quality', icon: '📊' },
    { id: 'attribution', label: '🔗 Attribution', icon: '🔗' },
    { id: 'forecast', label: '🔮 Forecasting', icon: '🔮' },
    { id: 'audience', label: '👥 Audience Segments', icon: '👥' },
    { id: 'testing', label: '🧪 A/B Tests', icon: '🧪' },
    { id: 'budget', label: '💰 Budget Optimization', icon: '💰' }
  ]

  const renderAlerts = () => (
    <div className="alerts-grid">
      {alertsData.map((alert, idx) => (
        <div key={idx} className={`alert-card alert-${alert.severity}`}>
          <div className="alert-header">
            <h4>{alert.type}</h4>
            <span className={`severity-badge ${alert.severity}`}>{alert.severity.toUpperCase()}</span>
          </div>
          <p className="alert-message">{alert.message}</p>
          <div className="alert-action">✓ {alert.action}</div>
        </div>
      ))}
    </div>
  )

  const renderFunnel = () => (
    <div className="funnel-section">
      <div className="funnel-visualization">
        {funnelData.stages.map((stage, idx) => {
          const width = ((stage.count / funnelData.stages[0].count) * 100)
          const dropoff = idx > 0 ? (((funnelData.stages[idx-1].count - stage.count) / funnelData.stages[idx-1].count * 100).toFixed(1)) : 0
          return (
            <div key={idx} className="funnel-stage">
              <div className="stage-bar" style={{ width: `${width}%` }}>
                <div className="stage-label">
                  <strong>{stage.stage}</strong>
                  <span className="stage-count">{stage.count.toLocaleString()}</span>
                </div>
              </div>
              {idx < funnelData.stages.length - 1 && (
                <div className="dropoff-warning">↓ {dropoff}% drop</div>
              )}
            </div>
          )
        })}
      </div>

      <div className="bottlenecks">
        <h4>🔴 Critical Bottlenecks</h4>
        {funnelData.bottlenecks.map((bn, idx) => (
          <div key={idx} className="bottleneck-item">
            <div className="bn-info">
              <strong>{bn.stage}</strong>
              <p>{bn.reason}</p>
            </div>
            <div className="bn-stats">
              <span className="loss">{bn.loss} loss</span>
              <span className={`impact ${bn.impact.toLowerCase()}`}>{bn.impact}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderLeadQuality = () => (
    <div className="quality-section">
      <div className="quality-metrics">
        <div className="metric-card">
          <span className="metric-label">Email Validity</span>
          <span className="metric-value">{leadQualityData.emailValidityRate}%</span>
        </div>
        <div className="metric-card">
          <span className="metric-label">Bad Lead Rate</span>
          <span className="metric-value danger">{leadQualityData.badLeadRate}%</span>
        </div>
        <div className="metric-card">
          <span className="metric-label">Duplicates</span>
          <span className="metric-value">{leadQualityData.duplicates}</span>
        </div>
      </div>

      <table className="quality-table">
        <thead>
          <tr>
            <th>Source</th>
            <th>Leads</th>
            <th>MQL</th>
            <th>SQL</th>
            <th>Customers</th>
            <th>Conv. Rate</th>
            <th>Quality</th>
          </tr>
        </thead>
        <tbody>
          {leadQualityData.sources.map((src, idx) => {
            const convRate = ((src.customers / src.leads) * 100).toFixed(1)
            const qualityColor = src.quality === 'excellent' ? '#10b981' : '#ef4444'
            return (
              <tr key={idx}>
                <td><strong>{src.source}</strong></td>
                <td>{src.leads}</td>
                <td>{src.mql}</td>
                <td>{src.sql}</td>
                <td>{src.customers}</td>
                <td>{convRate}%</td>
                <td style={{ color: qualityColor }}>{src.quality === 'excellent' ? '🟢' : '🔴'} {src.quality}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )

  const renderAttribution = () => (
    <div className="attribution-section">
      <div className="attribution-models">
        <h4>📊 Attribution Models</h4>
        {attributionData.models.map((model, idx) => (
          <div key={idx} className="model-card">
            <h5>{model.name}</h5>
            <div className="model-stats">
              <div><span>Revenue:</span> <strong>${model.revenue.toLocaleString()}</strong></div>
              <div><span>Leads:</span> <strong>{model.leads}</strong></div>
              <div><span>Top Sources:</span> <strong>{model.topSources.join(', ')}</strong></div>
            </div>
          </div>
        ))}
      </div>

      <div className="journeys">
        <h4>🛤️ Top Customer Journeys</h4>
        {attributionData.journeys.map((journey, idx) => (
          <div key={idx} className="journey-card">
            <div className="journey-path">{journey.path}</div>
            <div className="journey-stats">
              <span>{journey.conversions} conversions</span>
              <span>${journey.revenue.toLocaleString()} revenue</span>
              <span>⏱️ {journey.avgTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderForecast = () => (
    <div className="forecast-section">
      <div className="forecast-cards">
        <div className="forecast-card">
          <h4>📈 Revenue Projection (90 Days)</h4>
          <div className="forecast-timeline">
            <div className="timeline-point">
              <span className="label">Now</span>
              <span className="value">${forecastingData.revenueProjection.current.toLocaleString()}</span>
            </div>
            <div className="timeline-point">
              <span className="label">30 Days</span>
              <span className="value">${forecastingData.revenueProjection.next30days.toLocaleString()}</span>
            </div>
            <div className="timeline-point">
              <span className="label">60 Days</span>
              <span className="value">${forecastingData.revenueProjection.next60days.toLocaleString()}</span>
            </div>
            <div className="timeline-point">
              <span className="label">90 Days</span>
              <span className="value success">${forecastingData.revenueProjection.next90days.toLocaleString()}</span>
            </div>
          </div>
          <p className="confidence">📊 Confidence: {forecastingData.revenueProjection.confidence}%</p>
        </div>

        <div className="forecast-card">
          <h4>💰 Budget Optimization</h4>
          <div className="optimization-rec">
            <p>{forecastingData.budgetOptimization.recommendation}</p>
            <div className="rec-stats">
              <span className="potential">+{forecastingData.budgetOptimization.potentialRevenue}</span>
              <span className="confidence">{forecastingData.budgetOptimization.confidence}% confidence</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAudience = () => (
    <div className="audience-section">
      <div className="segment-cards">
        {audienceData.segments.map((seg, idx) => (
          <div key={idx} className="segment-card">
            <h5>{seg.name}</h5>
            <div className="segment-metrics">
              <div><span className="metric-sm">Size</span> <strong>{seg.size.toLocaleString()}</strong></div>
              <div><span className="metric-sm">Conv. Rate</span> <strong>{seg.convRate}%</strong></div>
              <div><span className="metric-sm">LTV</span> <strong>${seg.ltv}</strong></div>
              <div><span className="metric-sm">CAC</span> <strong>${seg.cac}</strong></div>
            </div>
          </div>
        ))}
      </div>

      <div className="device-geo">
        <div className="device-performance">
          <h4>📱 Device Performance</h4>
          {audienceData.devicePerformance.map((dev, idx) => (
            <div key={idx} className="perf-row">
              <span>{dev.device}</span>
              <span>{dev.convRate}% conv rate</span>
              <span className="roi">ROI: {dev.roi}x</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderTesting = () => (
    <div className="testing-section">
      {abTestsData.map((test, idx) => (
        <div key={idx} className={`test-card test-${test.status}`}>
          <div className="test-header">
            <h4>{test.name}</h4>
            <span className={`test-badge ${test.status}`}>{test.status.toUpperCase()}</span>
          </div>

          <div className="test-comparison">
            <div className="test-variant">
              <span className="var-label">Control</span>
              {Object.entries(test.control).map(([key, val]) => (
                <div key={key} className="var-metric">
                  <span>{key}</span>
                  <strong>{typeof val === 'number' && val < 10 ? val.toFixed(2) : val}</strong>
                </div>
              ))}
            </div>
            <div className="test-arrow">→</div>
            <div className="test-variant winning">
              <span className="var-label">Variant</span>
              {Object.entries(test.variant).map(([key, val]) => (
                <div key={key} className="var-metric">
                  <span>{key}</span>
                  <strong>{typeof val === 'number' && val < 10 ? val.toFixed(2) : val}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="test-stats">
            <span className="lift">📈 {test.lift}% lift</span>
            <span className="confidence">Confidence: {test.confidence}%</span>
          </div>
          <div className="test-rec">✓ {test.recommendation}</div>
        </div>
      ))}
    </div>
  )

  const renderBudget = () => (
    <div className="budget-section">
      <div className="budget-table">
        <table>
          <thead>
            <tr>
              <th>Channel</th>
              <th>Budget</th>
              <th>Spend</th>
              <th>ROI</th>
              <th>Allocation</th>
              <th>Recommendation</th>
            </tr>
          </thead>
          <tbody>
            {budgetOptimizationData.currentAllocation.map((ch, idx) => (
              <tr key={idx}>
                <td><strong>{ch.channel}</strong></td>
                <td>${ch.budget.toLocaleString()}</td>
                <td>${ch.spend.toLocaleString()}</td>
                <td><strong>{ch.roi}x</strong></td>
                <td>{ch.allocation}%</td>
                <td className={ch.recommendation.includes('+') ? 'increase' : 'decrease'}>
                  {ch.recommendation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="budget-projection">
        <h4>📊 Optimal Budget Allocation</h4>
        <div className="projection-card">
          <p><strong>Total Budget:</strong> ${budgetOptimizationData.budgetShiftPrediction.totalBudget.toLocaleString()}</p>
          <p><strong>Projected Revenue:</strong> ${budgetOptimizationData.budgetShiftPrediction.projectedRevenue.toLocaleString()}</p>
          <p><strong>Projected ROI:</strong> {budgetOptimizationData.budgetShiftPrediction.projectedROI}x</p>
          <p className="improvement">🚀 {budgetOptimizationData.budgetShiftPrediction.improvement} improvement</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="advanced-analytics">
      <div className="analytics-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`analytics-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="analytics-content">
        {activeTab === 'alerts' && renderAlerts()}
        {activeTab === 'funnel' && renderFunnel()}
        {activeTab === 'leads' && renderLeadQuality()}
        {activeTab === 'attribution' && renderAttribution()}
        {activeTab === 'forecast' && renderForecast()}
        {activeTab === 'audience' && renderAudience()}
        {activeTab === 'testing' && renderTesting()}
        {activeTab === 'budget' && renderBudget()}
      </div>
    </div>
  )
}
