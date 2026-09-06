import MetricCard from './MetricCard'
import CampaignsTable from './CampaignsTable'

export default function GoogleAdsDashboard({ googleData, loading }) {
  if (loading) {
    return <div className="loading"><div className="spinner"></div>Loading Google Ads data...</div>
  }

  if (!googleData) {
    return <div className="error">No Google Ads data available</div>
  }

  const metrics = calculateMetrics(googleData.campaigns)
  const inefficientCount = googleData.campaigns.filter(c => (c.cost / c.conversions) > 100).length

  return (
    <>
      <div className="metrics-grid">
        <MetricCard
          label="Total Spend"
          value={`$${metrics.total.spent.toFixed(2)}`}
          subtext="All campaigns"
        />
        <MetricCard
          label="Impressions"
          value={metrics.total.impressions.toLocaleString()}
          subtext={`CTR: ${metrics.total.ctr}%`}
        />
        <MetricCard
          label="Total Conversions"
          value={metrics.total.conversions}
          subtext={`CPA: $${metrics.total.cpa.toFixed(2)}`}
          status={metrics.total.cpa < 50 ? 'success' : 'danger'}
        />
        <MetricCard
          label="ROAS"
          value={metrics.total.roas.toFixed(2)}
          subtext={`Revenue: $${metrics.total.conversion_value.toFixed(0)}`}
          status={metrics.total.roas > 3 ? 'success' : 'warning'}
        />
      </div>

      {inefficientCount > 0 && (
        <div className="chart-container" style={{ background: '#fee2e2', borderLeft: '4px solid #ef4444' }}>
          <h3 className="chart-title">⚠️ Performance Alerts</h3>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            <li><strong>{inefficientCount} campaigns</strong> have CPA > $100 (consider optimizing or pausing)</li>
            <li>Campaigns with low CTR may need ad copy refresh or audience adjustments</li>
            <li>Review search terms and add negative keywords to reduce wasted spend</li>
          </ul>
        </div>
      )}

      <div className="chart-container">
        <h3 className="chart-title">📊 Campaign Breakdown</h3>
        <CampaignsTable campaigns={googleData.campaigns} platform="google" />
      </div>

      <div className="chart-container">
        <h3 className="chart-title">🎯 Audit Recommendations</h3>
        <div className="recommendation-content">
          <h4>Budget Allocation</h4>
          <ul>
            <li>Shift budget from low-ROAS campaigns (Display, ROAS: {(googleData.campaigns[1]?.conversion_value / googleData.campaigns[1]?.cost).toFixed(2)}x) to high-ROAS campaigns (Shopping, ROAS: {(googleData.campaigns[2]?.conversion_value / googleData.campaigns[2]?.cost).toFixed(2)}x)</li>
            <li>Increase Shopping campaign budget by 25% - highest ROAS</li>
            <li>Reduce Display campaign budget by 30% - lowest ROI</li>
          </ul>

          <h4>Campaign Structure</h4>
          <ul>
            <li>Consider splitting Search campaign by audience type (existing customers vs. new)</li>
            <li>Implement shopping feed optimization for better product performance</li>
            <li>Review keyword match types and bid strategies</li>
          </ul>

          <h4>Quick Wins</h4>
          <ul>
            <li>Add negative keywords (save ~15% of budget on irrelevant clicks)</li>
            <li>Increase bids on top 10% converting keywords by 10-15%</li>
            <li>Pause keywords with CTR < 0.5% and CPA > 2x target</li>
          </ul>
        </div>
      </div>
    </>
  )
}

function calculateMetrics(campaigns) {
  const total = campaigns.reduce((acc, campaign) => ({
    spent: acc.spent + campaign.cost,
    impressions: acc.impressions + campaign.impressions,
    clicks: acc.clicks + campaign.clicks,
    conversions: acc.conversions + campaign.conversions,
    conversion_value: acc.conversion_value + campaign.conversion_value,
  }), { spent: 0, impressions: 0, clicks: 0, conversions: 0, conversion_value: 0 })

  total.cpc = total.spent / total.clicks
  total.cpa = total.spent / total.conversions
  total.roas = total.conversion_value / total.spent
  total.ctr = ((total.clicks / total.impressions) * 100).toFixed(2)

  return { total, campaigns }
}
