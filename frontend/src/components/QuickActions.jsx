import { useState } from 'react'

export default function QuickActions({ googleData, metaData }) {
  const [actionStates, setActionStates] = useState({})

  const actions = [
    {
      id: 1,
      priority: 'HIGH',
      title: 'Pause Underperforming Display Campaign',
      description: 'Display ads have 1.2x ROI (lowest). Pause to save $2,000/month',
      impact: 'Save $2,000/month',
      button: 'Pause Campaign',
      color: '#ef4444'
    },
    {
      id: 2,
      priority: 'HIGH',
      title: 'Increase Google Shopping Budget by 40%',
      description: 'Your best performer (3.8x ROI). Shift budget from Display.',
      impact: 'Potential +$145k revenue',
      button: 'Increase Budget',
      color: '#10b981'
    },
    {
      id: 3,
      priority: 'MEDIUM',
      title: 'Review Lead Quality Form',
      description: 'Form abandonment at 78%. Too many fields? Simplify it.',
      impact: 'Could add ~500 leads/month',
      button: 'Review Form',
      color: '#f59e0b'
    },
    {
      id: 4,
      priority: 'MEDIUM',
      title: 'Add 12 Negative Keywords',
      description: 'Wasting budget on non-relevant searches: "free", "cheap", etc.',
      impact: 'Save ~$800/month',
      button: 'Add Keywords',
      color: '#f59e0b'
    },
    {
      id: 5,
      priority: 'LOW',
      title: 'Scale Winning A/B Test Variant',
      description: 'Ad copy test: Variant has +36.6% lift. Scale by 150%.',
      impact: '+$45k revenue potential',
      button: 'Scale Variant',
      color: '#667eea'
    }
  ]

  const handleAction = (actionId) => {
    setActionStates(prev => ({
      ...prev,
      [actionId]: 'completed'
    }))
    console.log(`Action ${actionId} executed`)
  }

  return (
    <div className="quick-actions-container">
      <div className="actions-header">
        <h2>🎯 Your Action Plan for Today</h2>
        <p>5 high-impact changes based on your campaign data</p>
      </div>

      <div className="actions-grid">
        {actions.map((action, idx) => (
          <div key={action.id} className={`action-card priority-${action.priority.toLowerCase()}`}>
            <div className="action-header">
              <span className={`priority-badge ${action.priority.toLowerCase()}`}>
                {action.priority}
              </span>
              <span className="action-number">#{idx + 1}</span>
            </div>

            <h3>{action.title}</h3>
            <p className="action-description">{action.description}</p>

            <div className="action-impact">
              <span className="impact-icon">⚡</span>
              <span className="impact-text">{action.impact}</span>
            </div>

            <button
              className={`action-button ${actionStates[action.id] === 'completed' ? 'completed' : ''}`}
              onClick={() => handleAction(action.id)}
              style={{ borderLeftColor: action.color }}
            >
              {actionStates[action.id] === 'completed' ? '✓ Done' : action.button}
            </button>
          </div>
        ))}
      </div>

      <div className="bulk-action">
        <button className="bulk-button">
          ⚡ Implement All Quick Wins (5 actions)
        </button>
        <p>Execute all recommended changes in one click</p>
      </div>
    </div>
  )
}
