// Advanced Performance Marketing Metrics

export const leadQualityData = {
  sources: [
    { source: 'Google Branded Search', leads: 245, mql: 198, sql: 142, customers: 68, leadScore: 92, quality: 'excellent' },
    { source: 'Google Shopping', leads: 189, mql: 142, sql: 98, customers: 52, leadScore: 78, quality: 'excellent' },
    { source: 'Meta Conversions', leads: 156, mql: 98, sql: 42, customers: 18, leadScore: 54, quality: 'poor' },
    { source: 'Display Remarketing', leads: 124, mql: 62, sql: 18, customers: 5, leadScore: 32, quality: 'poor' },
    { source: 'LinkedIn', leads: 89, mql: 82, sql: 71, customers: 42, leadScore: 88, quality: 'excellent' }
  ],
  badLeadRate: 8.2,
  emailValidityRate: 94.3,
  duplicates: 12
};

export const funnelData = {
  stages: [
    { stage: 'Ad Impression', count: 285000, ctr: 5.2, avgCPC: 1.24 },
    { stage: 'Website Visit', count: 14820, bounceRate: 32, timeOnSite: '2m 45s' },
    { stage: 'Lead Form View', count: 8245, conversionRate: 22, abandonRate: 78 },
    { stage: 'Lead Submit', count: 1813, quality: 'mixed', leadScore: 62 },
    { stage: 'MQL (Marketing Qualified)', count: 1245, mktoEngaged: 89, mktoScore: 78 },
    { stage: 'SQL (Sales Qualified)', count: 687, salesEngaged: 76, conversionRate: 52 },
    { stage: 'Opportunity', count: 358, dealSize: 'avg $45k', winRate: 54 },
    { stage: 'Customer', count: 193, ltv: '$145k', retention: 78 }
  ],
  bottlenecks: [
    { stage: 'Lead Form Abandon', loss: '78%', reason: 'Too many fields', impact: 'Critical' },
    { stage: 'MQL → SQL', loss: '45%', reason: 'Sales not following up', impact: 'High' }
  ]
};

export const attributionData = {
  models: [
    {
      name: 'First Click',
      topSources: ['Google Search', 'LinkedIn', 'Direct'],
      revenue: 450000,
      leads: 542
    },
    {
      name: 'Last Click',
      topSources: ['Google Shopping', 'Email', 'Direct'],
      revenue: 520000,
      leads: 678
    },
    {
      name: 'Multi-Touch (Linear)',
      topSources: ['Google Search', 'Google Shopping', 'LinkedIn'],
      revenue: 485000,
      leads: 610
    }
  ],
  journeys: [
    { path: 'Search → Search → Shopping → Purchase', conversions: 156, revenue: 187000, avgTime: '8 days' },
    { path: 'Search → Shopping → Purchase', conversions: 142, revenue: 170000, avgTime: '4 days' },
    { path: 'Direct → Search → Purchase', conversions: 98, revenue: 117000, avgTime: '12 days' }
  ]
};

export const forecastingData = {
  revenueProjection: {
    current: 485000,
    next30days: 542000,
    next60days: 625000,
    next90days: 728000,
    confidence: 87,
    trend: 'up'
  },
  leadProjection: {
    current: 610,
    next30days: 725,
    next60days: 850,
    next90days: 1020,
    growth: 'consistent'
  },
  churnRisk: [
    { cohort: 'Jan 2024 Customers', riskScore: 12, ltvLoss: '$18k' },
    { cohort: 'Feb 2024 Customers', riskScore: 8, ltvLoss: '$12k' }
  ],
  budgetOptimization: {
    currentSpend: 25000,
    projectedROI: 19.4,
    recommendation: 'Increase Google Shopping by 40%',
    potentialRevenue: '+$145k',
    confidence: 84
  }
};

export const audienceData = {
  segments: [
    { name: 'High-Value Tech Buyers', size: 8245, ctr: 8.2, convRate: 14.2, ltv: '$285k', cac: '$450' },
    { name: 'SMB Decision Makers', size: 12500, ctr: 6.1, convRate: 9.8, ltv: '$125k', cac: '$380' },
    { name: 'Enterprise Prospects', size: 3200, ctr: 4.5, convRate: 22.1, ltv: '$850k', cac: '$2100' },
    { name: 'Price Sensitive', size: 15600, ctr: 3.2, convRate: 4.1, ltv: '$35k', cac: '$120' },
    { name: 'Competitors' Customers', size: 4100, ctr: 7.8, convRate: 18.5, ltv: '$195k', cac: '$280' }
  ],
  devicePerformance: [
    { device: 'Desktop', sessions: 8245, convRate: 5.2, ctr: 6.1, roi: 4.2 },
    { device: 'Mobile', sessions: 4156, convRate: 2.1, ctr: 3.8, roi: 2.1 },
    { device: 'Tablet', sessions: 1245, convRate: 3.5, ctr: 4.2, roi: 3.2 }
  ],
  geoPerformance: [
    { geo: 'US-CA', convRate: 6.2, ctr: 7.1, roi: 4.8 },
    { geo: 'US-NY', convRate: 5.8, ctr: 6.5, roi: 4.5 },
    { geo: 'US-TX', convRate: 4.2, ctr: 4.8, roi: 3.2 }
  ]
};

export const alertsData = [
  { type: 'Performance Drop', message: 'Display campaign CTR down 35% in last 2 days', severity: 'high', action: 'Pause low-quality placements' },
  { type: 'Budget Alert', message: 'Spending 120% of daily budget pace', severity: 'medium', action: 'Reduce bids by 15%' },
  { type: 'Quality Issue', message: 'Lead quality score dropped from 78 to 62', severity: 'high', action: 'Review form fields' },
  { type: 'Conversion Anomaly', message: 'Conversions up 28% with no budget change', severity: 'info', action: 'Investigate winning variation' }
];

export const abTestsData = [
  {
    name: 'Ad Copy - Value Prop vs. Problem',
    status: 'winning',
    control: { ctr: 3.8, cpc: 1.24, conversions: 145 },
    variant: { ctr: 5.2, cpc: 1.18, conversions: 198 },
    lift: 36.6,
    confidence: 94,
    recommendation: 'Scale variant by 150%'
  },
  {
    name: 'Landing Page - Video vs. Static',
    status: 'winning',
    control: { convRate: 3.2, ctr: 2.1, visitors: 5245 },
    variant: { convRate: 4.8, ctr: 3.2, visitors: 5180 },
    lift: 50,
    confidence: 88,
    recommendation: 'Implement video on all campaigns'
  },
  {
    name: 'CTA Button - "Start Free Trial" vs. "Get Demo"',
    status: 'running',
    control: { convRate: 2.8, visitors: 8245 },
    variant: { convRate: 3.1, visitors: 8100 },
    lift: 10.7,
    confidence: 62,
    recommendation: 'Continue testing'
  }
];

export const budgetOptimizationData = {
  currentAllocation: [
    { channel: 'Google Search', budget: 8000, spend: 7850, roi: 4.2, allocation: 32, recommendation: '+25%' },
    { channel: 'Google Shopping', budget: 7000, spend: 6920, roi: 3.8, allocation: 28, recommendation: '+40%' },
    { channel: 'Meta Ads', budget: 5000, spend: 4850, roi: 1.8, allocation: 20, recommendation: '-30%' },
    { channel: 'LinkedIn', budget: 3000, spend: 2980, roi: 3.2, allocation: 12, recommendation: '+20%' },
    { channel: 'Display', budget: 2000, spend: 1900, roi: 1.2, allocation: 8, recommendation: '-50%' }
  ],
  budgetShiftPrediction: {
    scenario: 'Optimal Allocation',
    totalBudget: 25000,
    projectedRevenue: 625000,
    projectedROI: 25,
    improvement: '+28.8%'
  }
};
