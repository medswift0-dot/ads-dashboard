export default function MetricCard({ label, value, subtext, status = 'normal' }) {
  return (
    <div className={`metric-card ${status === 'success' ? 'success' : status === 'warning' ? 'warning' : status === 'danger' ? 'danger' : ''}`}>
      <div className="metric-label">{label}</div>
      <div className="metric-value">{value}</div>
      {subtext && <div className="metric-change">{subtext}</div>}
    </div>
  )
}
