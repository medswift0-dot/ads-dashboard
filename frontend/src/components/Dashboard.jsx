import Overview from './Overview'
import GoogleAdsDashboard from './GoogleAdsDashboard'
import MetaAdsDashboard from './MetaAdsDashboard'
import RecommendationsDashboard from './RecommendationsDashboard'
import MarketTrendsDashboard from './MarketTrendsDashboard'
import PerformanceAnalysis from './PerformanceAnalysis'
import AdvancedAnalytics from './AdvancedAnalytics'
import GrowthStrategy from './GrowthStrategy'
import StrategicPlan from './StrategicPlan'
import AuditDashboard from './AuditDashboard'
import AgentControlPanel from './AgentControlPanel'

export default function Dashboard({ activeTab, googleData, metaData, recommendations, loading }) {
  return (
    <>
      {activeTab === 'overview' && (
        <Overview googleData={googleData} metaData={metaData} loading={loading} />
      )}
      {activeTab === 'google' && (
        <GoogleAdsDashboard googleData={googleData} loading={loading} />
      )}
      {activeTab === 'meta' && (
        <MetaAdsDashboard metaData={metaData} loading={loading} />
      )}
      {activeTab === 'trends' && (
        <MarketTrendsDashboard googleData={googleData} loading={loading} />
      )}
      {activeTab === 'recommendations' && (
        <RecommendationsDashboard recommendations={recommendations} loading={loading} />
      )}
      {activeTab === 'performance' && (
        <PerformanceAnalysis googleData={googleData} metaData={metaData} />
      )}
      {activeTab === 'advanced' && (
        <AdvancedAnalytics />
      )}
      {activeTab === 'growth' && (
        <GrowthStrategy />
      )}
      {activeTab === 'strategic' && (
        <StrategicPlan />
      )}
      {activeTab === 'audit' && (
        <AuditDashboard />
      )}
      {activeTab === 'agents' && (
        <AgentControlPanel />
      )}
    </>
  )
}
