export default function CompetitorBenchmarks({ benchmarks }) {
  if (!benchmarks) return null

  const {
    your_roas, industry_avg_roas, top_performers_roas,
    your_cpa, industry_avg_cpa, top_performers_cpa,
    your_ctr, industry_avg_ctr,
    your_quality_score, industry_avg_quality_score
  } = benchmarks

  const getRoasStatus = () => {
    if (your_roas >= top_performers_roas) return { color: '#10b981', status: '🏆 TOP TIER' }
    if (your_roas >= industry_avg_roas) return { color: '#f59e0b', status: '📈 ABOVE AVERAGE' }
    return { color: '#ef4444', status: '⚠️ BELOW AVERAGE' }
  }

  const getCpaStatus = () => {
    if (your_cpa <= top_performers_cpa) return { color: '#10b981', status: '🏆 TOP TIER' }
    if (your_cpa <= industry_avg_cpa) return { color: '#f59e0b', status: '📈 ABOVE AVERAGE' }
    return { color: '#ef4444', status: '⚠️ BELOW AVERAGE' }
  }

  const roasStatus = getRoasStatus()
  const cpaStatus = getCpaStatus()

  return (
    <div className="chart-container">
      <h3 className="chart-title">🎯 Industry Benchmarking & Competitive Position</h3>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
        {/* ROAS Comparison */}
        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', borderLeft: `4px solid ${roasStatus.color}` }}>
          <p style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '15px' }}>Return on Ad Spend (ROAS)</p>

          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 'bold' }}>Your ROAS</span>
              <span style={{ fontSize: '18px', fontWeight: 'bold', color: roasStatus.color }}>{your_roas}x</span>
            </div>
            <div style={{ background: '#e9ecef', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ background: roasStatus.color, height: '100%', width: `${(your_roas / top_performers_roas) * 100}%` }} />
            </div>
          </div>

          <div style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #e9ecef' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '12px' }}>
              <span>Industry Average</span>
              <span style={{ fontWeight: 'bold' }}>{industry_avg_roas}x</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '12px' }}>
              <span>Top Performers</span>
              <span style={{ fontWeight: 'bold', color: '#10b981' }}>{top_performers_roas}x</span>
            </div>
          </div>

          <p style={{ fontSize: '13px', fontWeight: 'bold', color: roasStatus.color, margin: '0' }}>
            {roasStatus.status}
          </p>
          <p style={{ fontSize: '12px', color: '#666', margin: '8px 0 0 0' }}>
            {your_roas > industry_avg_roas
              ? `🎯 You're ${((your_roas / industry_avg_roas - 1) * 100).toFixed(0)}% better than average`
              : `⚠️ You're ${((1 - your_roas / industry_avg_roas) * 100).toFixed(0)}% worse than average`}
          </p>
        </div>

        {/* CPA Comparison */}
        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', borderLeft: `4px solid ${cpaStatus.color}` }}>
          <p style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '15px' }}>Cost Per Acquisition (CPA)</p>

          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 'bold' }}>Your CPA</span>
              <span style={{ fontSize: '18px', fontWeight: 'bold', color: cpaStatus.color }}>${your_cpa.toFixed(2)}</span>
            </div>
            <div style={{ background: '#e9ecef', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ background: cpaStatus.color, height: '100%', width: `${Math.min((top_performers_cpa / your_cpa) * 100, 100)}%` }} />
            </div>
          </div>

          <div style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #e9ecef' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '12px' }}>
              <span>Industry Average</span>
              <span style={{ fontWeight: 'bold' }}>${industry_avg_cpa.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '12px' }}>
              <span>Top Performers</span>
              <span style={{ fontWeight: 'bold', color: '#10b981' }}>${top_performers_cpa.toFixed(2)}</span>
            </div>
          </div>

          <p style={{ fontSize: '13px', fontWeight: 'bold', color: cpaStatus.color, margin: '0' }}>
            {cpaStatus.status}
          </p>
          <p style={{ fontSize: '12px', color: '#666', margin: '8px 0 0 0' }}>
            {your_cpa < industry_avg_cpa
              ? `🎯 ${((1 - your_cpa / industry_avg_cpa) * 100).toFixed(0)}% better CPA than average`
              : `⚠️ ${((your_cpa / industry_avg_cpa - 1) * 100).toFixed(0)}% higher CPA than average`}
          </p>
        </div>
      </div>

      {/* Other Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '20px' }}>
        <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
          <p style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '10px' }}>CTR (Click-Through Rate)</p>
          <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#667eea', marginBottom: '5px' }}>{your_ctr}%</p>
          <p style={{ fontSize: '11px', color: '#666' }}>Industry avg: {industry_avg_ctr}% ({((your_ctr / industry_avg_ctr - 1) * 100).toFixed(0)}% better)</p>
        </div>
        <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
          <p style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '10px' }}>Quality Score</p>
          <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#667eea', marginBottom: '5px' }}>{your_quality_score}/10</p>
          <p style={{ fontSize: '11px', color: '#666' }}>Industry avg: {industry_avg_quality_score}/10</p>
        </div>
      </div>

      {/* Recommendations */}
      <div className="recommendation-content" style={{ background: '#f0f9ff', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
        <h4 style={{ color: '#0369a1', marginBottom: '15px' }}>🎯 Competitive Strategy</h4>
        {your_roas >= top_performers_roas ? (
          <ul>
            <li>✅ You're in the top tier - maintain your strategy</li>
            <li>📈 Consider increasing budget to capture more market share</li>
            <li>🔍 Monitor competitor moves - you're their target to beat</li>
            <li>💡 Document your winning strategy - it's your competitive advantage</li>
          </ul>
        ) : your_roas >= industry_avg_roas ? (
          <ul>
            <li>📈 You're above average but room to improve</li>
            <li>🔄 Study top performers: better keyword selection, bid strategy, creative quality</li>
            <li>⚙️ Implement keyword optimization (quality scores affect ROAS)</li>
            <li>🎨 Test new ad creative - top performers likely refresh creative monthly</li>
          </ul>
        ) : (
          <ul>
            <li>⚠️ URGENT: Your ROAS is below industry average</li>
            <li>🔍 Audit: Poor keywords, low quality scores, or weak creative</li>
            <li>❌ Pause underperforming campaigns immediately</li>
            <li>📋 Implement full audit checklist: keywords, tracking, bid strategy</li>
          </ul>
        )}

        <h4 style={{ color: '#0369a1', marginTop: '20px', marginBottom: '10px' }}>💡 Target Metrics for Top-Tier Performance</h4>
        <ul>
          <li>🎯 ROAS Target: {top_performers_roas}x (currently: {your_roas}x) - Gap: {(top_performers_roas - your_roas).toFixed(2)}x</li>
          <li>💰 CPA Target: ${top_performers_cpa.toFixed(2)} (currently: ${your_cpa.toFixed(2)}) - Gap: ${(your_cpa - top_performers_cpa).toFixed(2)}</li>
          <li>👁️ CTR Target: 6.5%+ (currently: {your_ctr}%)</li>
          <li>⭐ Quality Score Target: 8/10+ (currently: {your_quality_score}/10)</li>
        </ul>
      </div>
    </div>
  )
}
