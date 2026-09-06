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
      conversion_tracking: "ACTIVE",
      performance: "excellent",
      roas: 5.0,
      ctr: 6.8,
      keywords: [
        { name: "running shoes", performance: "excellent", ctr: 8.5, cpa: 45, conversions: 15, roas: 5.5 },
        { name: "best shoes online", performance: "excellent", ctr: 8.1, cpa: 46, conversions: 18, roas: 5.2 },
        { name: "shoe sale", performance: "poor", ctr: 2.1, cpa: 150, conversions: 2, roas: 1.5 }
      ]
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
      conversion_tracking: "WARNING",
      performance: "poor",
      roas: 2.57,
      ctr: 0.71,
      keywords: []
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
      conversion_tracking: "ACTIVE",
      performance: "excellent",
      roas: 4.24,
      ctr: 5.84,
      keywords: []
    }
  ],
  keywords: [
    { keyword: "running shoes", match_type: "broad", impressions: 2500, clicks: 180, quality_score: 8, cpa: 45.22, performance: "excellent" },
    { keyword: "best shoes online", match_type: "phrase", impressions: 1800, clicks: 145, quality_score: 9, cpa: 46.22, performance: "excellent" },
    { keyword: "shoe discount", match_type: "exact", impressions: 950, clicks: 65, quality_score: 4, cpa: 120.00, performance: "poor" }
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
      objective: "CONVERSIONS",
      performance: "excellent",
      roas: 8.83,
      cpc: 3.21,
      adsets: [
        { name: "AS-1: Video Creative", performance: "excellent", impressions: 14000, clicks: 650, conversions: 52, cpc: 2.8, roas: 9.5 },
        { name: "AS-2: Carousel", performance: "good", impressions: 8000, clicks: 380, conversions: 22, cpc: 3.5, roas: 7.2 },
        { name: "AS-3: Static Image", performance: "poor", impressions: 6000, clicks: 170, conversions: 11, cpc: 4.2, roas: 5.1 }
      ]
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
      objective: "AWARENESS",
      performance: "good",
      roas: 4.31,
      cpc: 0.93,
      adsets: [
        { name: "AS-4: Brand Awareness", performance: "good", impressions: 80000, clicks: 1400, conversions: 18, cpc: 0.89, roas: 4.8 },
        { name: "AS-5: Video Ads", performance: "good", impressions: 45000, clicks: 700, conversions: 10, cpc: 0.98, roas: 3.9 }
      ]
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
