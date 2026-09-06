import MetricCard from './MetricCard'
import CampaignsTable from './CampaignsTable'
import SimplifiedMetrics from './SimplifiedMetrics'
import QuickActions from './QuickActions'

export default function Overview({ googleData, metaData, loading }) {
  if (loading) {
    return <div className="loading"><div className="spinner"></div>Loading...</div>
  }

  if (!googleData || !metaData) {
    return <div className="error">No data available</div>
  }

  const googleMetrics = calculateMetrics(googleData.campaigns)
  const metaMetrics = calculateMetrics(metaData.campaigns)

  const totalSpent = googleMetrics.total.spent + metaMetrics.total.spent
  const totalConversions = googleMetrics.total.conversions + metaMetrics.total.conversions
  const combinedROAS = (googleMetrics.total.conversion_value + metaMetrics.total.conversion_value) / totalSpent
  const combinedCPA = totalSpent / totalConversions

  return (
    <>
      <SimplifiedMetrics googleData={googleData} metaData={metaData} />

      <QuickActions googleData={googleData} metaData={metaData} />

      <div style={{ marginTop: '40px' }}>
        <h2>📋 Detailed Campaign Breakdown</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          For more detailed metrics and analysis, check the Google Ads and Meta Ads tabs
        </p>
      </div>

      <div className="metrics-grid">
        <MetricCard
          label="Total Spend"
          value={`$${totalSpent.toFixed(0)}`}
          subtext="Google + Meta combined"
        />
        <MetricCard
          label="Total Conversions"
          value={totalConversions}
          subtext="All campaigns"
        />
        <MetricCard
          label="Combined ROAS"
          value={combinedROAS.toFixed(2)}
          subtext={`${(combinedROAS * 100 - 100).toFixed(0)}% return`}
          status={combinedROAS > 3 ? 'success' : 'warning'}
        />
        <MetricCard
          label="Avg. CPA"
          value={`$${combinedCPA.toFixed(2)}`}
          subtext="Cost per acquisition"
          status={combinedCPA < 50 ? 'success' : 'danger'}
        />
      </div>

      <div className="chart-container">
        <h3 className="chart-title">Google Ads Campaigns Performance</h3>
        <CampaignsTable campaigns={googleData.campaigns} platform="google" />
      </div>

      <div className="chart-container" style={{ marginTop: '30px' }}>
        <h3 className="chart-title">Meta Ads Campaigns Performance</h3>
        <CampaignsTable campaigns={metaData.campaigns} platform="meta" />
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

  return { total, campaigns }
}
