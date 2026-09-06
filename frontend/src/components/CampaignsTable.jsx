export default function CampaignsTable({ campaigns, platform }) {
  return (
    <table className="campaigns-table">
      <thead>
        <tr>
          <th>Campaign Name</th>
          <th>Status</th>
          <th>Impressions</th>
          <th>Clicks</th>
          <th>CTR</th>
          <th>Cost</th>
          <th>Conversions</th>
          <th>CPA</th>
          <th>ROAS</th>
        </tr>
      </thead>
      <tbody>
        {campaigns.map((campaign) => {
          const ctr = ((campaign.clicks / campaign.impressions) * 100).toFixed(2)
          const cpa = (campaign.cost / campaign.conversions).toFixed(2)
          const roas = (campaign.conversion_value / campaign.cost).toFixed(2)
          const isInefficient = cpa > 100

          return (
            <tr key={campaign.id}>
              <td><strong>{campaign.name}</strong></td>
              <td>
                <span className={`badge ${campaign.status === 'ENABLED' || campaign.status === 'ACTIVE' ? 'active' : 'inefficient'}`}>
                  {campaign.status}
                </span>
              </td>
              <td>{campaign.impressions.toLocaleString()}</td>
              <td>{campaign.clicks.toLocaleString()}</td>
              <td>{ctr}%</td>
              <td>${campaign.cost.toFixed(2)}</td>
              <td>{campaign.conversions}</td>
              <td className={isInefficient ? 'text-danger' : ''}>${cpa}</td>
              <td className={roas > 2 ? 'text-success' : 'text-warning'}>{roas}x</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
