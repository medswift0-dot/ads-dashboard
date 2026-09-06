export default function SeasonalTrends({ seasonalData }) {
  if (!seasonalData) return null

  const maxVolume = Math.max(...seasonalData.map(d => d.search_volume_index))

  return (
    <div className="chart-container">
      <h3 className="chart-title">📅 Seasonal Trends & Monthly Performance</h3>

      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ marginBottom: '15px', color: '#667eea' }}>Search Volume by Month (Index)</h4>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '250px', padding: '20px', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
          {seasonalData.map((data, idx) => {
            const height = (data.search_volume_index / maxVolume) * 200
            return (
              <div key={idx} style={{ textAlign: 'center', flex: 1 }}>
                <div
                  style={{
                    height: `${height}px`,
                    background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '4px 4px 0 0',
                    marginBottom: '10px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  title={`${data.month}: ${data.search_volume_index} (${data.conversions} conversions)`}
                />
                <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#333' }}>{data.month}</p>
                <p style={{ fontSize: '11px', color: '#666' }}>{data.search_volume_index}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px' }}>
        <div style={{ background: '#fef3c7', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
          <p style={{ fontSize: '12px', color: '#92400e', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '5px' }}>Peak Season</p>
          <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#b45309' }}>Nov - Dec</p>
          <p style={{ fontSize: '12px', color: '#92400e', marginTop: '5px' }}>Search volume +110% higher, CPA drops to $30-32</p>
        </div>
        <div style={{ background: '#dbeafe', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
          <p style={{ fontSize: '12px', color: '#1e40af', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '5px' }}>Mid-Peak Season</p>
          <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#1e40af' }}>Jun - Oct</p>
          <p style={{ fontSize: '12px', color: '#1e40af', marginTop: '5px' }}>Steady growth, +50-95% volume, CPA $34-40</p>
        </div>
        <div style={{ background: '#fee2e2', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
          <p style={{ fontSize: '12px', color: '#7f1d1d', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '5px' }}>Low Season</p>
          <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#dc2626' }}>Jan - May</p>
          <p style={{ fontSize: '12px', color: '#7f1d1d', marginTop: '5px' }}>Low volume, highest CPA ($42-45), plan campaigns ahead</p>
        </div>
      </div>

      <div className="recommendation-content" style={{ background: '#f0f9ff', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
        <h4 style={{ color: '#0369a1', marginBottom: '15px' }}>📊 Strategic Budget Allocation by Season</h4>
        <ul>
          <li><strong>Jan-May (Low Season):</strong> 30% of annual budget - Test new campaigns, optimize creatives</li>
          <li><strong>Jun-Oct (Growth Season):</strong> 35% of annual budget - Scale winners, increase bids on top performers</li>
          <li><strong>Nov-Dec (Peak Season):</strong> 35% of annual budget - Maximum spend, all budget to proven campaigns</li>
          <li><strong>CPA Pattern:</strong> Highest in Jan ($45), drops 33% by Dec ($30) - Better margins in peak season</li>
        </ul>

        <h4 style={{ color: '#0369a1', marginTop: '20px', marginBottom: '10px' }}>🎯 Recommended Actions</h4>
        <ul>
          <li>✅ Increase budget 80% starting October for holiday season</li>
          <li>✅ Bid up on seasonal keywords in August (before peak)</li>
          <li>✅ Plan Black Friday/Cyber Monday campaigns now (60 days out)</li>
          <li>✅ Test new ad creative during low season (cheaper testing)</li>
        </ul>
      </div>
    </div>
  )
}
