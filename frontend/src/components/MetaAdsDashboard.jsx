import MetricCard from './MetricCard'
import CampaignsTable from './CampaignsTable'

export default function MetaAdsDashboard({ metaData, loading }) {
  if (loading) {
    return <div className="loading"><div className="spinner"></div>Loading Meta Ads data...</div>
  }

  if (!metaData) {
    return <div className="error">No Meta Ads data available</div>
  }

  const metrics = calculateMetrics(metaData.campaigns)
  const inefficientCount = metaData.campaigns.filter(c => (c.cost / c.conversions) > 100).length

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
          status={metrics.total.roas > 2 ? 'success' : 'warning'}
        />
      </div>

      {inefficientCount > 0 && (
        <div className="chart-container" style={{ background: '#fee2e2', borderLeft: '4px solid #ef4444' }}>
          <h3 className="chart-title">⚠️ Performance Alerts</h3>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            <li><strong>{inefficientCount} campaigns</strong> have CPA > $100</li>
            <li>Awareness campaigns should focus on CTR and reach, not conversions</li>
            <li>Consider using conversion value optimization for better ROAS</li>
          </ul>
        </div>
      )}

      <div className="chart-container">
        <h3 className="chart-title">📊 Campaign Breakdown</h3>
        <CampaignsTable campaigns={metaData.campaigns} platform="meta" />
      </div>

      <div className="chart-container">
        <h3 className="chart-title">🎯 Audit Recommendations</h3>
        <div className="recommendation-content">
          <h4>Audience & Targeting</h4>
          <ul>
            <li>Create lookalike audiences from your best customers (LTV > $500)</li>
            <li>Implement audience exclusions to prevent targeting existing customers in acquisition campaigns</li>
            <li>Test narrow interest targeting vs. broad targeting with value optimization</li>
          </ul>

          <h4>Campaign Optimization</h4>
          <ul>
            <li>Shift Awareness campaign to Reach objective if you're optimizing for conversions</li>
            <li>Implement dynamic creative optimization to test variations automatically</li>
            <li>Use conversion value optimization instead of CPC bidding</li>
          </ul>

          <h4>Budget Reallocation</h4>
          <ul>
            <li>Pause bottom-performing ad sets in Awareness campaign (save ${(metaData.campaigns[1]?.cost * 0.25).toFixed(0)}/month)</li>
            <li>Allocate 60% budget to Conversion campaigns, 40% to Awareness (brand building)</li>
            <li>Implement daily budget caps to prevent overspending</li>
          </ul>

          <h4>Creative & Copy</h4>
          <ul>
            <li>Test video ads (historically 3-5x higher engagement than static images)</li>
            <li>A/B test copy variants (emotional vs. logical appeals)</li>
            <li>Refresh creative every 2-3 weeks to combat ad fatigue</li>
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
