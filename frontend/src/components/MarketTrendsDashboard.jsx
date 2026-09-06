import SeasonalTrends from './SeasonalTrends'
import CompetitorBenchmarks from './CompetitorBenchmarks'
import IndustryInsights from './IndustryInsights'
import MarketOpportunities from './MarketOpportunities'

export default function MarketTrendsDashboard({ googleData, loading }) {
  if (loading) {
    return <div className="loading"><div className="spinner"></div>Loading market trends...</div>
  }

  if (!googleData || !googleData.market_trends) {
    return <div className="error">No market trends data available</div>
  }

  const {
    seasonal_data,
    industry_benchmarks,
    trending_keywords,
    declining_keywords,
    market_opportunities,
    price_trends
  } = googleData.market_trends

  return (
    <>
      <SeasonalTrends seasonalData={seasonal_data} />
      <CompetitorBenchmarks benchmarks={industry_benchmarks} />
      <IndustryInsights trendingKeywords={trending_keywords} decliningKeywords={declining_keywords} />
      <MarketOpportunities opportunities={market_opportunities} priceTrends={price_trends} />
    </>
  )
}
