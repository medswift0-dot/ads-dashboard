import Overview from './Overview'
import GoogleAdsDashboard from './GoogleAdsDashboard'
import MetaAdsDashboard from './MetaAdsDashboard'
import RecommendationsDashboard from './RecommendationsDashboard'

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
      {activeTab === 'recommendations' && (
        <RecommendationsDashboard recommendations={recommendations} loading={loading} />
      )}
    </>
  )
}
