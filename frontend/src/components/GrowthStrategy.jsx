export default function GrowthStrategy() {
  const competitorAnalysis = [
    {
      competitor: 'Competitor A',
      roas: 2.1,
      cpa: 125,
      adSpend: 15000,
      yourMetric: 'ROAS: 3.2x ✅ 52% Better',
      status: 'Winning'
    },
    {
      competitor: 'Competitor B',
      roas: 3.5,
      cpa: 85,
      adSpend: 22000,
      yourMetric: 'CPA: $85 vs $95 ✅ 11% Better',
      status: 'Close'
    },
    {
      competitor: 'Competitor C',
      roas: 2.8,
      cpa: 110,
      adSpend: 18000,
      yourMetric: 'ROAS: 3.2x ✅ 14% Better',
      status: 'Winning'
    }
  ]

  const growthOpportunities = [
    {
      icon: '📈',
      title: 'Scaling Potential',
      desc: 'Current budget utilization at 68%. Can scale by 50% with same ROI',
      impact: '+$72,500 Revenue',
      confidence: '94%'
    },
    {
      icon: '🎯',
      title: 'Market Gap',
      desc: 'Keywords with low competition, high intent identified',
      impact: '+$45,000 Revenue',
      confidence: '87%'
    },
    {
      icon: '💰',
      title: 'Budget Reallocation',
      desc: 'Move 20% from underperforming campaigns to top performers',
      impact: '+$28,000 Revenue',
      confidence: '91%'
    },
    {
      icon: '🌍',
      title: 'Geo-Expansion',
      desc: 'Tier-2 regions show 2.5x ROI potential vs current markets',
      impact: '+$95,000 Revenue',
      confidence: '79%'
    }
  ]

  const marketInsights = [
    {
      metric: 'Market Share Gain',
      current: '12%',
      potential: '18%',
      action: 'Increase bid strategy on branded terms'
    },
    {
      metric: 'Share of Voice',
      current: '23%',
      potential: '35%',
      action: 'Expand to new platforms (TikTok, Pinterest)'
    },
    {
      metric: 'Conversion Rate',
      current: '3.2%',
      potential: '4.8%',
      action: 'A/B test landing pages - test 5 variants'
    },
    {
      metric: 'Customer LTV',
      current: '$450',
      potential: '$680',
      action: 'Implement retention campaigns & upsells'
    }
  ]

  const scalingRecommendations = [
    {
      phase: 'Week 1-2',
      action: 'Budget Test',
      budget: '+$5K',
      expectedReturn: '+$16K',
      roi: '320%'
    },
    {
      phase: 'Week 3-4',
      action: 'Full Scale',
      budget: '+$15K',
      expectedReturn: '+$48K',
      roi: '320%'
    },
    {
      phase: 'Month 2',
      action: 'Geo-Expansion',
      budget: '+$25K',
      expectedReturn: '+$60K',
      roi: '240%'
    }
  ]

  return (
    <div className="growth-strategy">
      {/* Competitor Analysis */}
      <div className="strategy-section">
        <div className="section-header">
          <h2>🏆 Competitive Advantage</h2>
          <p>How you compare to market competitors</p>
        </div>

        <div className="competitor-grid">
          {competitorAnalysis.map((comp, idx) => (
            <div key={idx} className="competitor-card">
              <div className="comp-header">
                <span className={`comp-name ${comp.status.toLowerCase()}`}>{comp.competitor}</span>
                <span className="comp-badge">{comp.status}</span>
              </div>
              <div className="comp-metrics">
                <div className="metric-row">
                  <span>Their ROAS</span>
                  <strong>{comp.roas}x</strong>
                </div>
                <div className="metric-row">
                  <span>Their CPA</span>
                  <strong>${comp.cpa}</strong>
                </div>
                <div className="metric-row border-top">
                  <span>Your Advantage</span>
                  <strong className="advantage">{comp.yourMetric}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Growth Opportunities */}
      <div className="strategy-section">
        <div className="section-header">
          <h2>💡 Growth Opportunities</h2>
          <p>Realistic scaling scenarios based on market analysis</p>
        </div>

        <div className="opportunities-grid">
          {growthOpportunities.map((opp, idx) => (
            <div key={idx} className="opportunity-card">
              <div className="opp-icon">{opp.icon}</div>
              <h3>{opp.title}</h3>
              <p>{opp.desc}</p>
              <div className="opp-footer">
                <span className="impact">{opp.impact}</span>
                <span className="confidence">Confidence: {opp.confidence}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Insights */}
      <div className="strategy-section">
        <div className="section-header">
          <h2>📊 Market Metrics Analysis</h2>
          <p>Current state vs market potential</p>
        </div>

        <div className="market-table">
          <div className="table-header">
            <div>Metric</div>
            <div>Current</div>
            <div>Market Potential</div>
            <div>Recommended Action</div>
          </div>
          {marketInsights.map((insight, idx) => (
            <div key={idx} className="table-row">
              <div className="metric-name">{insight.metric}</div>
              <div className="metric-value current">{insight.current}</div>
              <div className="metric-value potential">{insight.potential}</div>
              <div className="metric-action">{insight.action}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scaling Roadmap */}
      <div className="strategy-section">
        <div className="section-header">
          <h2>🚀 Scaling Roadmap</h2>
          <p>Phase-by-phase growth plan with expected returns</p>
        </div>

        <div className="roadmap-grid">
          {scalingRecommendations.map((rec, idx) => (
            <div key={idx} className="roadmap-card">
              <div className="phase-badge">{rec.phase}</div>
              <h3>{rec.action}</h3>
              <div className="roadmap-metrics">
                <div className="roadmap-metric">
                  <span className="label">Budget</span>
                  <span className="value">{rec.budget}</span>
                </div>
                <div className="roadmap-metric">
                  <span className="label">Expected Return</span>
                  <span className="value highlight">{rec.expectedReturn}</span>
                </div>
                <div className="roadmap-metric">
                  <span className="label">ROI</span>
                  <span className="value roi">{rec.roi}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Items */}
      <div className="action-summary">
        <h3>🎯 This Week's Focus</h3>
        <div className="action-items">
          <div className="action-item">
            <span className="priority high">HIGH PRIORITY</span>
            <span>Allocate $5K additional budget to top-performing campaigns (Expected: +$16K revenue)</span>
          </div>
          <div className="action-item">
            <span className="priority high">HIGH PRIORITY</span>
            <span>Launch A/B testing on 5 landing page variants (Target: +1.6% conversion improvement)</span>
          </div>
          <div className="action-item">
            <span className="priority medium">MEDIUM</span>
            <span>Analyze competitor keyword strategy and identify white-space opportunities</span>
          </div>
          <div className="action-item">
            <span className="priority medium">MEDIUM</span>
            <span>Prepare geo-expansion proposal for executive review</span>
          </div>
        </div>
      </div>
    </div>
  )
}
