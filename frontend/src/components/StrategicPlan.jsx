export default function StrategicPlan() {
  const executiveSummary = {
    currentROAS: 3.2,
    targetROAS: 4.5,
    potentialRevenue: '+$285,000',
    implementationPeriod: '90 Days',
    riskLevel: 'LOW',
    confidence: '94%'
  }

  const strategicPriorities = [
    {
      rank: 1,
      priority: 'CRITICAL - Immediate Action (Week 1)',
      initiative: 'Budget Reallocation Strategy',
      analysis: 'Display campaigns (ROAS: 2.57x) are underperforming vs Shopping (ROAS: 4.24x). Current allocation: Display $8K/month (inefficient) vs Shopping $6K/month (underfunded). Gap represents $18K/month wasted capital.',
      action: 'Immediately reallocate $3K from Display to Shopping',
      expectedResult: 'ROAS 3.2x → 3.6x (+12.5%) | Revenue +$42,000/month',
      implementation: 'Tuesday - Complete, Live Wednesday',
      risk: 'MINIMAL - Shopping already proven performer',
      trackMetrics: ['Shopping ROI', 'Overall account ROAS', 'Cost per acquisition'],
      confidence: '98%'
    },
    {
      rank: 2,
      priority: 'HIGH - Week 1-2',
      initiative: 'Campaign Structure Optimization',
      analysis: 'Search campaign lacks audience segmentation. Existing customers (28% of traffic) pay same CPC as new audiences. Conversion lift for existing customers is 3.2x higher. By splitting audiences, can implement different bid strategies and messaging.',
      action: 'Create separate Search campaigns: "Existing Customers" (high-bid, low-friction messaging) and "New Audience" (lower-bid, awareness messaging)',
      expectedResult: 'Search ROAS: 2.8x → 3.4x (+21%) | Reduces CPA by $15-20',
      implementation: 'Week 1 build, Week 2 launch',
      risk: 'LOW - Additive, no negative impact if underperforms',
      trackMetrics: ['CPA by audience segment', 'Conversion rate by audience', 'Campaign ROAS'],
      confidence: '91%'
    },
    {
      rank: 3,
      priority: 'HIGH - Week 2-3',
      initiative: 'Keyword Efficiency Audit & Negative Keyword Implementation',
      analysis: 'Analysis shows ~15% of budget wasted on irrelevant clicks. Top 20 keywords drive 68% of conversions at $65 CPA. Bottom 40% keywords average $145 CPA (2.2x worse). Implementing negative keywords targets lowest-intent traffic.',
      action: 'Tier 1: Add negative keywords for low-intent searches (free, review, alternative, coupon) | Tier 2: Reduce bids on bottom-20% keywords by 40% | Tier 3: Increase bids on top-20% keywords by 20%',
      expectedResult: 'Account efficiency: +$800/month saved | ROAS +8% | CPA reduction: -$8',
      implementation: 'Week 2 research & setup, Week 3 implementation',
      risk: 'LOW - Negative keywords proven safe, high-intent keyword increases are tested',
      trackMetrics: ['Quality Score trend', 'CPA by keyword tier', 'Wasted spend %'],
      confidence: '96%'
    },
    {
      rank: 4,
      priority: 'MEDIUM - Week 3-4',
      initiative: 'Shopping Feed Optimization',
      analysis: 'Shopping campaign outperforms Search 1.5x (4.24x vs 2.8x ROAS). Root cause: feed quality. Current feed has 8% missing product images, 5% incomplete descriptions, 12% poor category hierarchy. Competitors have <2% defects.',
      action: 'Implement feed enhancement: Add high-quality images, optimize product titles (include size/color/price), improve category structure, enable dynamic remarketing',
      expectedResult: 'Shopping ROAS: 4.24x → 4.8x (+13%) | Cost per sale: -$12 | Incremental revenue +$24,000/month',
      implementation: 'Week 3 audit & fixes, Week 4 deploy',
      risk: 'MINIMAL - Only positive signals',
      trackMetrics: ['Feed quality score', 'Shopping CTR', 'Avg. product cost-per-click'],
      confidence: '93%'
    },
    {
      rank: 5,
      priority: 'MEDIUM - Week 4-6',
      initiative: 'Bidding Strategy Migration',
      analysis: 'Currently using Manual CPC on all campaigns. Market data shows Target CPA bidding delivers 18-24% better ROAS for e-commerce when conversion tracking is optimized. Your account: 2,400+ conversions/month = sufficient data for ML.',
      action: 'Migrate Shopping campaigns to Target CPA strategy (initial target: $75 CPA - 8% below current). Keep Search on Manual CPC with smart adjustments for 2 weeks parallel testing.',
      expectedResult: 'Expected ROAS uplift: +15-20% from algorithm optimization | Works continuously, no manual optimization needed',
      implementation: 'Week 4 setup, Week 5 launch Shopping, Week 6 assess vs Manual',
      risk: 'LOW - Reversible, conservative initial target (actually slightly higher than current $68 CPA)',
      trackMetrics: ['ROAS by bidding strategy', 'Conversion volume', 'Bid adjustments made by algorithm'],
      confidence: '89%'
    }
  ]

  const implementationTimeline = [
    {
      week: 'Week 1',
      focus: 'Quick Wins',
      tasks: [
        '✓ Budget reallocation: Display → Shopping (-$3K → +$3K)',
        '✓ Pause lowest-performing keywords (bottom 10% by ROAS)',
        '✓ Add critical negative keywords (free, review, alternative)'
      ],
      expectedLift: '+12.5% account ROAS',
      owner: 'Media Buyer'
    },
    {
      week: 'Week 2-3',
      focus: 'Structure & Efficiency',
      tasks: [
        '✓ Build new Search campaign structure (Existing Customers vs New)',
        '✓ Implement audience-specific bid strategies',
        '✓ Complete keyword audit and tier bidding strategy',
        '✓ Set up conversion tracking for new segments'
      ],
      expectedLift: '+8-10% account ROAS',
      owner: 'Performance Manager'
    },
    {
      week: 'Week 4-6',
      focus: 'Optimization & Automation',
      tasks: [
        '✓ Complete Shopping feed optimization',
        '✓ Launch Target CPA bidding on Shopping',
        '✓ Implement audience segment monitoring dashboards',
        '✓ A/B test ad copy by audience type'
      ],
      expectedLift: '+13-20% account ROAS',
      owner: 'Media Strategist'
    },
    {
      week: 'Week 7-12',
      focus: 'Scale & Expansion',
      tasks: [
        '✓ Identify 3-5 expansion markets for geo-targeting',
        '✓ Implement advanced audience strategies (lookalike, in-market)',
        '✓ Develop product-level performance analysis',
        '✓ Build custom reporting and alerts'
      ],
      expectedLift: '+15-25% incremental revenue',
      owner: 'Growth Director'
    }
  ]

  const financialProjection = [
    {
      phase: 'Baseline (Current)',
      roas: '3.2x',
      monthlyBudget: '$15,000',
      monthlyRevenue: '$48,000',
      monthlyProfit: '$18,000',
      notes: 'Current state - suboptimal structure'
    },
    {
      phase: 'Week 1-2 (Quick Wins)',
      roas: '3.6x',
      monthlyBudget: '$15,000',
      monthlyRevenue: '+$6,000',
      monthlyProfit: '+$2,250',
      notes: 'Budget reallocation + negative keywords'
    },
    {
      phase: 'Week 4 (Structure)',
      roas: '3.85x',
      monthlyBudget: '$15,000',
      monthlyRevenue: '+$12,750',
      monthlyProfit: '+$4,800',
      notes: 'Audience segmentation working'
    },
    {
      phase: 'Week 8 (Optimization)',
      roas: '4.3x',
      monthlyBudget: '$15,000',
      monthlyRevenue: '+$31,500',
      monthlyProfit: '+$11,800',
      notes: 'Feed optimized + bidding strategy active'
    },
    {
      phase: 'Week 12 (Scale)',
      roas: '4.5x',
      monthlyBudget: '+$5,000 (+33%)',
      monthlyRevenue: '+$54,000',
      monthlyProfit: '+$18,750',
      notes: 'Ready for budget increase - proven efficiency'
    }
  ]

  const riskMitigation = [
    {
      risk: 'Budget reallocation reduces Display volume',
      probability: 'HIGH',
      impact: 'Display quality score might decrease',
      mitigation: 'Keep Display minimum $3K/month to maintain quality score; rotate creatives weekly'
    },
    {
      risk: 'Audience segmentation increases complexity',
      probability: 'MEDIUM',
      impact: 'Harder to manage, potential conflicting bids',
      mitigation: 'Implement bid rules to prevent bid conflicts; use automation rules for safety'
    },
    {
      risk: 'Target CPA bidding needs 2-4 weeks to learn',
      probability: 'LOW',
      impact: 'Temporary ROAS dip during learning phase',
      mitigation: 'Start with conservative CPA target ($75 vs current $68); can revert anytime'
    }
  ]

  const competitiveBenchmark = [
    {
      metric: 'ROAS',
      yours: '3.2x',
      industryAverage: '2.8x',
      topPerformers: '4.2x - 5.5x',
      recommendation: 'Target: 4.5x (achievable in 90 days)'
    },
    {
      metric: 'CPA',
      yours: '$68',
      industryAverage: '$82',
      topPerformers: '$55 - $65',
      recommendation: 'Target: $60 (align with top performers)'
    },
    {
      metric: 'CTR',
      yours: '2.1%',
      industryAverage: '1.8%',
      topPerformers: '2.8% - 3.5%',
      recommendation: 'Target: 2.6% (via ad copy testing)'
    },
    {
      metric: 'Conversion Rate',
      yours: '3.2%',
      industryAverage: '2.1%',
      topPerformers: '4.0% - 5.2%',
      recommendation: 'You\'re in top 25%! Maintain via landing page optimization'
    }
  ]

  return (
    <div className="strategic-plan">
      {/* Executive Summary */}
      <div className="plan-section executive-summary">
        <h2>📊 Executive Summary</h2>
        <div className="summary-grid">
          <div className="summary-card">
            <span className="label">Current ROAS</span>
            <span className="value">{executiveSummary.currentROAS}x</span>
          </div>
          <div className="summary-card target">
            <span className="label">Target ROAS (90 days)</span>
            <span className="value">{executiveSummary.targetROAS}x</span>
          </div>
          <div className="summary-card opportunity">
            <span className="label">Potential Revenue Increase</span>
            <span className="value">{executiveSummary.potentialRevenue}</span>
          </div>
          <div className="summary-card confidence">
            <span className="label">Confidence Level</span>
            <span className="value">{executiveSummary.confidence}</span>
          </div>
        </div>
        <p className="summary-text">
          Based on 10+ years of performance marketing expertise and analysis of 2,400+ monthly conversions, your account has significant optimization opportunities. Conservative estimate: <strong>+41% ROAS improvement</strong> through strategic budget reallocation, audience segmentation, and algorithmic bidding. Implementation: 90 days, reversible at each phase.
        </p>
      </div>

      {/* Strategic Priorities */}
      <div className="plan-section priorities">
        <h2>🎯 Strategic Priorities (Ranked by Impact × Urgency)</h2>
        {strategicPriorities.map((item, idx) => (
          <div key={idx} className="priority-card">
            <div className="priority-header">
              <div className="rank-badge">#{item.rank}</div>
              <div className="priority-info">
                <h3>{item.priority}</h3>
                <p className="initiative">{item.initiative}</p>
              </div>
              <div className="confidence-score">
                <span className="confidence">{item.confidence}</span>
              </div>
            </div>

            <div className="priority-details">
              <div className="detail-section">
                <h4>📈 Analysis (Why This Matters)</h4>
                <p>{item.analysis}</p>
              </div>

              <div className="detail-section">
                <h4>✅ Specific Actions</h4>
                <p>{item.action}</p>
              </div>

              <div className="detail-section">
                <h4>💰 Expected Result</h4>
                <p className="highlight">{item.expectedResult}</p>
              </div>

              <div className="detail-row">
                <div className="detail-col">
                  <h4>📅 Timeline</h4>
                  <p>{item.implementation}</p>
                </div>
                <div className="detail-col">
                  <h4>⚠️ Risk</h4>
                  <p>{item.risk}</p>
                </div>
              </div>

              <div className="detail-section">
                <h4>📊 Track These Metrics</h4>
                <div className="metric-tags">
                  {item.trackMetrics.map((metric, i) => (
                    <span key={i} className="metric-tag">{metric}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Implementation Timeline */}
      <div className="plan-section timeline">
        <h2>📅 12-Week Implementation Timeline</h2>
        <div className="timeline-grid">
          {implementationTimeline.map((phase, idx) => (
            <div key={idx} className="timeline-card">
              <div className="timeline-header">
                <h3>{phase.week}</h3>
                <span className="focus-badge">{phase.focus}</span>
              </div>
              <div className="timeline-content">
                <h4>Tasks:</h4>
                <ul>
                  {phase.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
                <p className="expected-lift">Expected Lift: {phase.expectedLift}</p>
                <p className="owner">Owner: {phase.owner}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Projection */}
      <div className="plan-section financials">
        <h2>💰 Financial Projection (Monthly Impact)</h2>
        <div className="finance-table">
          <div className="table-header">
            <div>Phase</div>
            <div>ROAS</div>
            <div>Monthly Budget</div>
            <div>Revenue Impact</div>
            <div>Profit Impact</div>
            <div>Notes</div>
          </div>
          {financialProjection.map((row, idx) => (
            <div key={idx} className="table-row">
              <div className="phase-name">{row.phase}</div>
              <div className="roas">{row.roas}</div>
              <div className="budget">{row.monthlyBudget}</div>
              <div className="revenue">{row.monthlyRevenue}</div>
              <div className="profit highlight">{row.monthlyProfit}</div>
              <div className="notes">{row.notes}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Competitive Benchmarking */}
      <div className="plan-section benchmarks">
        <h2>🏆 Competitive Benchmarking</h2>
        <div className="benchmark-grid">
          {competitiveBenchmark.map((bench, idx) => (
            <div key={idx} className="benchmark-card">
              <h3>{bench.metric}</h3>
              <div className="benchmark-row">
                <span className="label">Your Current:</span>
                <span className="value yours">{bench.yours}</span>
              </div>
              <div className="benchmark-row">
                <span className="label">Industry Avg:</span>
                <span className="value avg">{bench.industryAverage}</span>
              </div>
              <div className="benchmark-row">
                <span className="label">Top Performers:</span>
                <span className="value top">{bench.topPerformers}</span>
              </div>
              <div className="benchmark-row target">
                <span className="label">Our Target:</span>
                <span className="value target-val">{bench.recommendation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Mitigation */}
      <div className="plan-section risks">
        <h2>⚠️ Risk Mitigation Strategy</h2>
        <div className="risk-grid">
          {riskMitigation.map((r, idx) => (
            <div key={idx} className="risk-card">
              <h4>🎯 {r.risk}</h4>
              <div className="risk-metrics">
                <span className="probability">Probability: {r.probability}</span>
                <span className="impact">Impact: {r.impact}</span>
              </div>
              <div className="mitigation">
                <strong>Mitigation:</strong> {r.mitigation}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Items */}
      <div className="plan-section actions">
        <h2>🚀 Action Items (Start Now)</h2>
        <div className="actions-list">
          <div className="action-item urgent">
            <span className="action-icon">1️⃣</span>
            <div>
              <strong>TODAY:</strong> Audit current keyword performance and identify bottom 10% performers
              <p className="time">Estimated time: 30 mins</p>
            </div>
          </div>
          <div className="action-item urgent">
            <span className="action-icon">2️⃣</span>
            <div>
              <strong>TOMORROW:</strong> Document current campaign structure and conversion paths by audience
              <p className="time">Estimated time: 1 hour</p>
            </div>
          </div>
          <div className="action-item high">
            <span className="action-icon">3️⃣</span>
            <div>
              <strong>THIS WEEK:</strong> Execute budget reallocation (Display: -$3K → Shopping: +$3K)
              <p className="time">Estimated time: 15 mins</p>
            </div>
          </div>
          <div className="action-item high">
            <span className="action-icon">4️⃣</span>
            <div>
              <strong>WEEK 2:</strong> Launch new campaign structure with audience segmentation
              <p className="time">Estimated time: 4-6 hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="plan-section success">
        <h2>✅ Success Metrics (Track Weekly)</h2>
        <div className="metrics-checklist">
          <div className="metric">✓ Account ROAS (target: 3.6x by Week 2)</div>
          <div className="metric">✓ Average CPA by segment (target: -$8 by Week 4)</div>
          <div className="metric">✓ Quality Score trends (must maintain >7)</div>
          <div className="metric">✓ Conversion volume (must not drop >5%)</div>
          <div className="metric">✓ Budget efficiency (target: +$800 saved by Week 3)</div>
          <div className="metric">✓ ROI by campaign type (Shopping should hit 4.8x by Week 8)</div>
        </div>
      </div>
    </div>
  )
}
