import { useState } from 'react'

export default function QuickActions({ googleData, metaData }) {
  const [actionStates, setActionStates] = useState({})

  const actions = [
    {
      id: 1,
      priority: 'HIGH',
      emoji: '⏹️',
      title: 'Pause Underperforming Campaign',
      description: 'Display ads have lowest ROI. Save $2,000/month immediately.',
      impact: 'Save $2,000/mo',
      button: 'Pause Now',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
    },
    {
      id: 2,
      priority: 'HIGH',
      emoji: '📈',
      title: 'Increase Best Performer Budget',
      description: 'Google Shopping has 3.8x ROI. Allocate more budget there.',
      impact: '+$145k potential',
      button: 'Increase',
      gradient: 'linear-gradient(135deg, #51cf66 0%, #37b24d 100%)'
    },
    {
      id: 3,
      priority: 'MEDIUM',
      emoji: '📋',
      title: 'Simplify Lead Form',
      description: 'Form abandonment at 78%. Reduce fields to improve conversion.',
      impact: '+500 leads/mo',
      button: 'Review Form',
      gradient: 'linear-gradient(135deg, #ffa94d 0%, #ff922b 100%)'
    },
    {
      id: 4,
      priority: 'MEDIUM',
      emoji: '🚫',
      title: 'Block Wasted Keywords',
      description: 'Add negative keywords: "free", "cheap". Stop irrelevant clicks.',
      impact: 'Save $800/mo',
      button: 'Add Keywords',
      gradient: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)'
    },
    {
      id: 5,
      priority: 'LOW',
      emoji: '🚀',
      title: 'Scale Winning Variant',
      description: 'A/B test winner has +36.6% lift. Scale by 150%.',
      impact: '+$45k potential',
      button: 'Scale It',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }
  ]

  const handleAction = (actionId) => {
    setActionStates(prev => ({
      ...prev,
      [actionId]: 'completed'
    }))
  }

  return (
    <div className="quick-actions-container">
      <div className="actions-header">
        <div>
          <h2>🎯 Action Plan</h2>
          <p>Top 5 changes to boost your performance today</p>
        </div>
        <div className="actions-status">
          <span className="completed-count">{Object.keys(actionStates).length} / 5 Complete</span>
        </div>
      </div>

      <div className="actions-grid">
        {actions.map((action, idx) => (
          <div
            key={action.id}
            className={`action-card ${actionStates[action.id] === 'completed' ? 'completed' : ''}`}
            style={{ background: action.gradient }}
          >
            <div className="action-priority-label">{action.priority}</div>
            <div className="action-emoji">{action.emoji}</div>

            <h3 className="action-title">{action.title}</h3>
            <p className="action-description">{action.description}</p>

            <div className="action-footer">
              <div className="impact-badge">
                <span className="impact-value">{action.impact}</span>
              </div>
              <button
                className={`action-btn ${actionStates[action.id] === 'completed' ? 'done' : ''}`}
                onClick={() => handleAction(action.id)}
              >
                {actionStates[action.id] === 'completed' ? '✓' : action.button}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bulk-action-section">
        <div className="bulk-card">
          <div className="bulk-content">
            <h3>⚡ Quick Win Mode</h3>
            <p>Execute all 5 recommendations instantly</p>
          </div>
          <button className="bulk-button">
            Apply All Now
          </button>
        </div>
      </div>
    </div>
  )
}
