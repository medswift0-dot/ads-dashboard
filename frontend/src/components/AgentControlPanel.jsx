import { useState } from 'react'

export default function AgentControlPanel() {
  const [activeTab, setActiveTab] = useState('overview')
  const [runningAgent, setRunningAgent] = useState(null)
  const [lastDigest, setLastDigest] = useState(null)
  const [agentStatus, setAgentStatus] = useState({})

  const agents = [
    {
      id: 'media-buyer',
      name: 'Media Buyer',
      icon: '💰',
      description: 'Campaign structure, bid strategy, budget pacing',
      owns: 'Google + Meta budgets',
      cadence: 'Weekly (Monday)',
      model: 'claude-sonnet-5',
      status: 'ready'
    },
    {
      id: 'google-specialist',
      name: 'Google Ads Specialist',
      icon: '🔍',
      description: 'Search terms, Quality Score, keyword expansion',
      owns: 'Google Ads only',
      cadence: 'Daily wasted-spend, weekly QS, monthly mining',
      model: 'claude-sonnet-5',
      status: 'ready'
    },
    {
      id: 'meta-specialist',
      name: 'Meta Ads Specialist',
      icon: '📘',
      description: 'Audience overlap, creative fatigue, frequency',
      owns: 'Meta + Instagram',
      cadence: 'Weekly account scan',
      model: 'claude-sonnet-5',
      status: 'ready'
    },
    {
      id: 'creative-strategist',
      name: 'Creative Strategist',
      icon: '🎨',
      description: 'Your own top ads, new variants, designer briefs',
      owns: 'Creative pipeline',
      cadence: 'Weekly + on fatigue refresh',
      model: 'claude-fable-5',
      status: 'ready'
    },
    {
      id: 'performance-analyst',
      name: 'Performance Analyst',
      icon: '📊',
      description: 'Weekly digest, ROAS, CPA, movers, plain English',
      owns: 'The Monday-morning digest',
      cadence: 'Weekly (run last)',
      model: 'claude-fable-5',
      status: 'ready'
    }
  ]

  const runAgent = (agentId) => {
    setRunningAgent(agentId)
    setAgentStatus(prev => ({ ...prev, [agentId]: 'running' }))

    // Simulate agent running
    setTimeout(() => {
      setAgentStatus(prev => ({ ...prev, [agentId]: 'complete' }))
      setRunningAgent(null)

      // Simulate digest generation for Performance Analyst
      if (agentId === 'performance-analyst') {
        setLastDigest({
          timestamp: new Date().toLocaleString(),
          headline: 'Blended ROAS 3.1 this week, up from 2.8. On target.',
          topMovers: [
            { name: 'Meta Retargeting', change: '+18%', reason: 'Budget shift to winner' },
            { name: 'Google Brand', change: '+12%', reason: 'Removed spending cap' },
            { name: 'Creative Fatigue', change: '-8%', reason: 'Fatigued ad paused' }
          ],
          priorities: [
            'Launch refreshed creative tomorrow',
            'Push Google behind-pace spend',
            'Test net-new founder-voiced concept'
          ]
        })
      }
    }, 2500)
  }

  const runFullTeam = () => {
    // Run all four specialists in parallel, then analyst
    const specialistIds = ['media-buyer', 'google-specialist', 'meta-specialist', 'creative-strategist']

    specialistIds.forEach(id => {
      setAgentStatus(prev => ({ ...prev, [id]: 'running' }))
      setRunningAgent(id)
    })

    setTimeout(() => {
      specialistIds.forEach(id => {
        setAgentStatus(prev => ({ ...prev, [id]: 'complete' }))
      })

      // Now run Performance Analyst
      setRunningAgent('performance-analyst')
      setAgentStatus(prev => ({ ...prev, 'performance-analyst': 'running' }))

      setTimeout(() => {
        setAgentStatus(prev => ({ ...prev, 'performance-analyst': 'complete' }))
        setRunningAgent(null)

        setLastDigest({
          timestamp: new Date().toLocaleString(),
          headline: 'Blended ROAS 3.1 this week, up from 2.8. Above your 2.5 floor, at CPA $28.',
          topMovers: [
            { name: 'Meta Retargeting', change: '+18%', reason: 'Budget shift to winner' },
            { name: 'Google Brand Search', change: '+12%', reason: 'Spending cap raised' },
            { name: 'Creative Fatigue', change: '-8%', reason: 'Fatigued ad paused' }
          ],
          thisWeek: [
            'Killed losing Meta video test',
            'Funded retargeting winner at ROAS 4.1',
            'Added Google negative keyword list',
            'Fixed Meta audience overlap (2 pairs)'
          ],
          nextWeek: [
            'Launch refreshed "Warm Nights" creative',
            'Push Google budget (behind pace)',
            'Test 2 net-new founder-voiced concepts'
          ],
          bottomLine: 'Profitable and improving, with clear plan to spend more without losing efficiency.'
        })
      }, 3000)
    }, 2500)
  }

  return (
    <div className="agent-control-panel">
      {activeTab === 'overview' ? (
        <>
          <div className="panel-header">
            <h1>🤖 Five-Agent Command Center</h1>
            <p>Specialized Claude agents that run your Google + Meta accounts as a team, every Monday.</p>
          </div>

          <div className="agents-grid">
            {agents.map(agent => (
              <div key={agent.id} className="agent-card">
                <div className="agent-header">
                  <span className="agent-icon">{agent.icon}</span>
                  <h3>{agent.name}</h3>
                </div>

                <div className="agent-body">
                  <p className="description">{agent.description}</p>

                  <div className="agent-details">
                    <div className="detail-row">
                      <span className="label">Owns:</span>
                      <span className="value">{agent.owns}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">Cadence:</span>
                      <span className="value">{agent.cadence}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">Engine:</span>
                      <span className="model-badge">{agent.model}</span>
                    </div>
                  </div>
                </div>

                <div className="agent-footer">
                  <button
                    className={`agent-button ${agentStatus[agent.id]}`}
                    onClick={() => runAgent(agent.id)}
                    disabled={runningAgent !== null}
                  >
                    {runningAgent === agent.id ? '⟳ Running...' : 'Run Now →'}
                  </button>
                  {agentStatus[agent.id] === 'complete' && (
                    <span className="status-badge">✓ Done</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="run-team-section">
            <div className="run-team-card">
              <div className="run-team-content">
                <h2>📅 Monday Morning Workflow</h2>
                <p>Run all four specialists in parallel, then Performance Analyst generates the digest.</p>
                <ul className="workflow-steps">
                  <li>1. Specialists run simultaneously (Media Buyer, Google, Meta, Creative)</li>
                  <li>2. Performance Analyst reads all four outputs</li>
                  <li>3. Digest generated: ROAS, CPA, top movers, priorities, plain English</li>
                  <li>4. Send digest to team/client, execute top priority</li>
                </ul>
              </div>
              <button className="run-team-button" onClick={runFullTeam} disabled={runningAgent !== null}>
                {runningAgent ? '⟳ Running team...' : '▶ Run Full Team'}
              </button>
            </div>
          </div>

          {lastDigest && (
            <div className="digest-preview">
              <h2>📋 Latest Monday Digest</h2>
              <div className="digest-content">
                <div className="digest-headline">
                  <strong>Headline:</strong> {lastDigest.headline}
                </div>

                <div className="digest-movers">
                  <strong>Top Movers:</strong>
                  <ul>
                    {lastDigest.topMovers.map((mover, idx) => (
                      <li key={idx}>
                        <span className="mover-name">{mover.name}</span>
                        <span className={`mover-change ${mover.change.startsWith('+') ? 'up' : 'down'}`}>
                          {mover.change}
                        </span>
                        <span className="mover-reason">— {mover.reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="digest-actions">
                  <div className="action-column">
                    <strong>This Week:</strong>
                    <ul>
                      {lastDigest.thisWeek?.map((action, idx) => (
                        <li key={idx}>{action}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="action-column">
                    <strong>Next Week:</strong>
                    <ul>
                      {lastDigest.nextWeek?.map((priority, idx) => (
                        <li key={idx}>{priority}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="digest-bottom-line">
                  <strong>Bottom line:</strong> {lastDigest.bottomLine}
                </div>

                <div className="digest-timestamp">
                  Generated: {lastDigest.timestamp}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="setup-guide">
          <h2>🚀 Setup Guide</h2>
          <div className="setup-steps">
            <div className="setup-step">
              <span className="step-number">1</span>
              <div>
                <h3>Create TARGETS.md</h3>
                <p>In your project root, create a TARGETS.md file with your account targets:</p>
                <code className="code-block">{`CPA Target: $32
ROAS Floor: 2.5
Monthly Budget (Google): $18,000
Monthly Budget (Meta): $27,000
Naming Convention: [Platform] | [Funnel Stage] | [Audience/Creative]`}</code>
              </div>
            </div>

            <div className="setup-step">
              <span className="step-number">2</span>
              <div>
                <h3>Create .claude/agents/ folder</h3>
                <p>Drop the five agent files into .claude/agents/:</p>
                <ul>
                  <li>media-buyer.md</li>
                  <li>google-ads-specialist.md</li>
                  <li>meta-ads-specialist.md</li>
                  <li>creative-strategist.md</li>
                  <li>performance-analyst.md</li>
                </ul>
              </div>
            </div>

            <div className="setup-step">
              <span className="step-number">3</span>
              <div>
                <h3>Connect Your Data</h3>
                <p>Either:</p>
                <ul>
                  <li>Connect Google Ads + Meta via AdManage MCP (live pulls)</li>
                  <li>Export CSVs from your dashboards and paste when agents ask</li>
                </ul>
              </div>
            </div>

            <div className="setup-step">
              <span className="step-number">4</span>
              <div>
                <h3>Run Your First Monday</h3>
                <p>Click "Run Full Team" above to kick off all agents in parallel, then digest generation.</p>
              </div>
            </div>
          </div>

          <div className="agent-files-info">
            <h3>📄 Download Agent Files</h3>
            <p>Copy each agent file into .claude/agents/ with its system prompt. The agents are fully self-contained and read TARGETS.md on startup.</p>
            <div className="file-list">
              {agents.map(agent => (
                <div key={agent.id} className="file-item">
                  <span className="file-icon">📄</span>
                  <span className="file-name">{agent.id}.md</span>
                  <span className="file-engine">{agent.model}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="panel-tabs">
        <button
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Command Center
        </button>
        <button
          className={`tab-button ${activeTab === 'setup' ? 'active' : ''}`}
          onClick={() => setActiveTab('setup')}
        >
          Setup Guide
        </button>
      </div>
    </div>
  )
}
