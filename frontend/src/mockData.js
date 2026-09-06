export const mockGoogleData = {
  campaigns: [
    {
      id: "1",
      name: "Search - Brand Keywords",
      status: "ENABLED",
      budget_daily: 500,
      spent_today: 450,
      impressions: 12500,
      clicks: 850,
      conversions: 45,
      cost: 4500,
      conversion_value: 22500,
      conversion_tracking: "ACTIVE"
    },
    {
      id: "2",
      name: "Display - Remarketing",
      status: "ENABLED",
      budget_daily: 300,
      spent_today: 280,
      impressions: 45000,
      clicks: 320,
      conversions: 12,
      cost: 2800,
      conversion_value: 7200,
      conversion_tracking: "WARNING"
    },
    {
      id: "3",
      name: "Shopping - Top Products",
      status: "ENABLED",
      budget_daily: 800,
      spent_today: 920,
      impressions: 8900,
      clicks: 520,
      conversions: 78,
      cost: 9200,
      conversion_value: 39000,
      conversion_tracking: "ACTIVE"
    }
  ],
  keywords: [
    { keyword: "running shoes", match_type: "broad", impressions: 2500, clicks: 180, quality_score: 8, cpa: 45.22 },
    { keyword: "best shoes online", match_type: "phrase", impressions: 1800, clicks: 145, quality_score: 9, cpa: 46.22 },
    { keyword: "shoe discount", match_type: "exact", impressions: 950, clicks: 65, quality_score: 4, cpa: 120.00 }
  ],
  negative_keywords: [
    { keyword: "cheap shoes", monthly_savings: 450 },
    { keyword: "free shipping", monthly_savings: 320 },
    { keyword: "sale", monthly_savings: 225 }
  ]
};

export const mockMetaData = {
  campaigns: [
    {
      id: "1",
      name: "Conversion Campaign",
      status: "ACTIVE",
      budget_daily: 400,
      spent_today: 385,
      impressions: 28000,
      clicks: 1200,
      conversions: 85,
      cost: 3850,
      conversion_value: 34000,
      objective: "CONVERSIONS"
    },
    {
      id: "2",
      name: "Awareness Campaign",
      status: "ACTIVE",
      budget_daily: 200,
      spent_today: 195,
      impressions: 125000,
      clicks: 2100,
      conversions: 28,
      cost: 1950,
      conversion_value: 8400,
      objective: "AWARENESS"
    }
  ]
};

export const mockMetrics = {
  totalSpend: 16380,
  conversions: 248,
  roas: 4.07,
  ctr: 5.15,
  avgCpa: 128,
  impressions: 220900,
  clicks: 5235
};
