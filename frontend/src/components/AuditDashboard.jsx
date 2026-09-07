import { useState } from 'react'

export default function AuditDashboard() {
  const [selectedAudit, setSelectedAudit] = useState(null)
  const [auditResults, setAuditResults] = useState(null)
  const [loading, setLoading] = useState(false)

  const audits = [
    // Meta Audits
    {
      id: 'tracking-audit',
      name: 'Tracking Audit',
      description: 'Audit Meta Pixel + CAPI parity. Find missing events, broken deduplication, and weak event-match quality.',
      category: 'Meta Ads',
      icon: '🔍',
      findings: ['Missing CAPI events', 'Deduplication gaps', 'Low EMQ scores', 'Pixel-only events'],
      severity: 'CRITICAL'
    },
    {
      id: 'kpi-map',
      name: 'KPI Map',
      description: 'Map every campaign to its real funnel stage. Flag campaigns running on the wrong objective.',
      category: 'Meta Ads',
      icon: '🎯',
      findings: ['Objective mismatches', 'Underscaled campaigns', 'Learning-phase risk', 'Wrong optimization events'],
      severity: 'HIGH'
    },
    {
      id: 'campaign-structure-audit',
      name: 'Campaign Structure',
      description: 'Audit Meta campaign structure. Surface consolidation opportunities, learning-phase risk, and a target structure.',
      category: 'Meta Ads',
      icon: '📊',
      findings: ['Consolidation opportunities', 'Audience overlap', 'Learning-phase fragmentation', 'Budget concentration risk'],
      severity: 'HIGH'
    },
    {
      id: 'adset-analysis',
      name: 'Adset Analysis',
      description: 'Rank every adset on spend efficiency, audience overlap, frequency, and stability. Return scale / hold / kill verdicts.',
      category: 'Meta Ads',
      icon: '📈',
      findings: ['SCALE opportunities', 'HOLD adsets', 'KILL recommendations', 'Frequency issues'],
      severity: 'MEDIUM'
    },
    {
      id: 'creative-fatigue',
      name: 'Creative Fatigue',
      description: 'Catch fatigued Meta ads before CPMs spike. Return the kill list and replacement brief seeds.',
      category: 'Meta Ads',
      icon: '😴',
      findings: ['Fatigued creatives', 'Rising frequency', 'Falling CTR', 'Rising CPM signals'],
      severity: 'MEDIUM'
    },
    // Google Audits
    {
      id: 'wasted-spend-audit',
      name: 'Wasted Spend',
      description: 'Find Google Ads spend with zero or near-zero conversions across search terms, placements, and asset groups.',
      category: 'Google Ads',
      icon: '🗑️',
      findings: ['Zero-conversion search terms', 'Dead placements', 'Negative keyword gaps', 'Dead asset groups'],
      severity: 'CRITICAL'
    },
    {
      id: 'google-search-audit',
      name: 'Search Audit',
      description: 'Audit Google Search campaigns end-to-end: match types, search impression share lost, ad-rank loss reasons, RSA strength.',
      category: 'Google Ads',
      icon: '🔎',
      findings: ['Match-type issues', 'Budget lost IS', 'Rank lost IS', 'RSA strength gaps', 'LP mismatches'],
      severity: 'HIGH'
    },
    {
      id: 'shopping-audit',
      name: 'Shopping Audit',
      description: 'Audit Google Shopping. Find feed issues, dead products, and bid mismatches. Return title rewrites and disable list.',
      category: 'Google Ads',
      icon: '🛒',
      findings: ['Dead products', 'Title quality issues', 'Feed disapprovals', 'Bidding mismatches'],
      severity: 'HIGH'
    },
    {
      id: 'pmax-audit',
      name: 'Performance Max',
      description: 'Audit Performance Max. Grade asset groups, surface dead listing groups, recommend theme splits and asset rewrites.',
      category: 'Google Ads',
      icon: '🎨',
      findings: ['Asset group grades', 'Dead listing groups', 'Theme drift', 'Missing audience signals'],
      severity: 'MEDIUM'
    },
    {
      id: 'keyword-opportunities',
      name: 'Keyword Opportunities',
      description: 'Find Google Ads expansion keywords and theme gaps from search-term-view + conversion data.',
      category: 'Google Ads',
      icon: '🔑',
      findings: ['New exact-match keywords', 'Expansion themes', 'Gap themes', 'Clustering opportunities'],
      severity: 'LOW'
    }
  ]

  const runAudit = async (auditId) => {
    setLoading(true)
    setSelectedAudit(auditId)

    // Simulate audit running (in production, would call backend)
    setTimeout(() => {
      const audit = audits.find(a => a.id === auditId)
      setAuditResults({
        id: auditId,
        name: audit.name,
        category: audit.category,
        timestamp: new Date().toLocaleString(),
        findings: [
          { type: 'CRITICAL', count: Math.floor(Math.random() * 5) + 1, action: 'Fix this week' },
          { type: 'HIGH', count: Math.floor(Math.random() * 8) + 2, action: 'Fix this month' },
          { type: 'MEDIUM', count: Math.floor(Math.random() * 6) + 1, action: 'Review and plan' },
          { type: 'LOW', count: Math.floor(Math.random() * 10) + 3, action: 'Consider optimizing' }
        ],
        estimatedImpact: `${Math.floor(Math.random() * 20) + 10}% potential ROAS improvement`,
        timeToExecute: `${Math.floor(Math.random() * 4) + 1}-${Math.floor(Math.random() * 6) + 4} hours`
      })
      setLoading(false)
    }, 2000)
  }

  const metaAudits = audits.filter(a => a.category === 'Meta Ads')
  const googleAudits = audits.filter(a => a.category === 'Google Ads')

  return (
    <div className="audit-dashboard">
      {!selectedAudit ? (
        <>
          <div className="audit-header">
            <h1>🔍 Comprehensive Audit Center</h1>
            <p>Run 10 professional audits across Meta + Google Ads. Identify wasted spend, structural issues, and optimization opportunities.</p>
          </div>

          <div className="audit-sections">
            {/* Meta Audits Section */}
            <div className="audit-section">
              <div className="section-header">
                <h2>📘 Meta Ads Audits (5)</h2>
                <span className="section-badge">Priority: Tracking → Structure → Scale</span>
              </div>
              <div className="audits-grid">
                {metaAudits.map(audit => (
                  <div key={audit.id} className="audit-card" onClick={() => runAudit(audit.id)}>
                    <div className="audit-icon">{audit.icon}</div>
                    <h3>{audit.name}</h3>
                    <p className="audit-desc">{audit.description}</p>
                    <div className="audit-findings">
                      {audit.findings.map((finding, idx) => (
                        <span key={idx} className="finding-badge">{finding}</span>
                      ))}
                    </div>
                    <div className="audit-footer">
                      <span className={`severity-badge ${audit.severity.toLowerCase()}`}>
                        {audit.severity}
                      </span>
                      <button className="audit-button">Run Audit →</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Audits Section */}
            <div className="audit-section">
              <div className="section-header">
                <h2>🔍 Google Ads Audits (5)</h2>
                <span className="section-badge">Priority: Spend → Structure → Opportunities</span>
              </div>
              <div className="audits-grid">
                {googleAudits.map(audit => (
                  <div key={audit.id} className="audit-card" onClick={() => runAudit(audit.id)}>
                    <div className="audit-icon">{audit.icon}</div>
                    <h3>{audit.name}</h3>
                    <p className="audit-desc">{audit.description}</p>
                    <div className="audit-findings">
                      {audit.findings.map((finding, idx) => (
                        <span key={idx} className="finding-badge">{finding}</span>
                      ))}
                    </div>
                    <div className="audit-footer">
                      <span className={`severity-badge ${audit.severity.toLowerCase()}`}>
                        {audit.severity}
                      </span>
                      <button className="audit-button">Run Audit →</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested Audit Sequence */}
            <div className="audit-sequence">
              <h3>📋 Recommended Audit Sequence</h3>
              <div className="sequence-cards">
                <div className="sequence-card">
                  <span className="sequence-num">1</span>
                  <div>
                    <strong>Foundation (Day 1)</strong>
                    <p>/tracking-audit, /wasted-spend-audit — Fix bleeding first</p>
                  </div>
                </div>
                <div className="sequence-card">
                  <span className="sequence-num">2</span>
                  <div>
                    <strong>Structure (Day 2-3)</strong>
                    <p>/kpi-map, /campaign-structure-audit, /google-search-audit</p>
                  </div>
                </div>
                <div className="sequence-card">
                  <span className="sequence-num">3</span>
                  <div>
                    <strong>Optimization (Day 4-5)</strong>
                    <p>/adset-analysis, /creative-fatigue, /shopping-audit, /pmax-audit</p>
                  </div>
                </div>
                <div className="sequence-card">
                  <span className="sequence-num">4</span>
                  <div>
                    <strong>Growth (Day 6-7)</strong>
                    <p>/keyword-opportunities — Find expansion keywords</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        // Audit Results View
        <div className="audit-results">
          <button className="back-button" onClick={() => { setSelectedAudit(null); setAuditResults(null) }}>
            ← Back to Audits
          </button>

          {loading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <h2>Running {audits.find(a => a.id === selectedAudit)?.name} Audit...</h2>
              <p>Analyzing your account data across Meta + Google...</p>
            </div>
          ) : auditResults ? (
            <>
              <div className="results-header">
                <h1>📊 {auditResults.name} Results</h1>
                <div className="results-meta">
                  <span className="category">{auditResults.category}</span>
                  <span className="timestamp">{auditResults.timestamp}</span>
                </div>
              </div>

              <div className="results-summary">
                <div className="summary-card impact">
                  <span className="label">Estimated Impact</span>
                  <span className="value">{auditResults.estimatedImpact}</span>
                </div>
                <div className="summary-card time">
                  <span className="label">Time to Execute</span>
                  <span className="value">{auditResults.timeToExecute}</span>
                </div>
              </div>

              <div className="findings-breakdown">
                <h2>Findings by Severity</h2>
                <div className="findings-grid">
                  {auditResults.findings.map((finding, idx) => (
                    <div key={idx} className={`finding-card ${finding.type.toLowerCase()}`}>
                      <div className="finding-type">{finding.type}</div>
                      <div className="finding-count">{finding.count} issues</div>
                      <div className="finding-action">{finding.action}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="audit-actions">
                <h2>Next Steps</h2>
                <div className="actions-list">
                  <div className="action-item">
                    <span className="action-number">1</span>
                    <div>
                      <strong>Review Detailed Findings</strong>
                      <p>Click "View Full Report" below to see exact items with specific recommendations</p>
                    </div>
                  </div>
                  <div className="action-item">
                    <span className="action-number">2</span>
                    <div>
                      <strong>Prioritize by Severity</strong>
                      <p>Fix CRITICAL items first, then HIGH, then MEDIUM. LOW items can wait 30 days.</p>
                    </div>
                  </div>
                  <div className="action-item">
                    <span className="action-number">3</span>
                    <div>
                      <strong>Execute Recommendations</strong>
                      <p>Use the provided MCP commands to push changes directly to your ad accounts</p>
                    </div>
                  </div>
                  <div className="action-item">
                    <span className="action-number">4</span>
                    <div>
                      <strong>Schedule Follow-up Audit</strong>
                      <p>Run this audit again in 2 weeks to track progress and catch new issues</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="audit-buttons">
                <button className="btn-primary">View Full Report</button>
                <button className="btn-secondary">Export as PDF</button>
                <button className="btn-secondary">Share with Team</button>
              </div>
            </>
          ) : null}
        </div>
      )}
    </div>
  )
}
