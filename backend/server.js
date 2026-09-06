import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(cors());
app.use(express.json());

// ============ MOCK DATA - For testing without API keys ============
const mockGoogleAdsData = {
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
      conversion_value: 22500
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
      conversion_value: 7200
    },
    {
      id: "3",
      name: "Shopping - Top Products",
      status: "ENABLED",
      budget_daily: 800,
      spent_today: 920,
      impressions: 8900,
      clicks: 600,
      conversions: 78,
      cost: 9200,
      conversion_value: 39000
    }
  ],
  account_id: "1234567890",
  currency: "USD"
};

const mockMetaAdsData = {
  campaigns: [
    {
      id: "fb1",
      name: "Conversion - Landing Page",
      status: "ACTIVE",
      budget_daily: 400,
      spent_today: 385,
      impressions: 28000,
      clicks: 1200,
      conversions: 65,
      cost: 3850,
      conversion_value: 19500
    },
    {
      id: "fb2",
      name: "Awareness - Video Ads",
      status: "ACTIVE",
      budget_daily: 200,
      spent_today: 195,
      impressions: 95000,
      clicks: 2100,
      conversions: 8,
      cost: 1950,
      conversion_value: 2400
    }
  ],
  account_id: "9876543210",
  currency: "USD"
};

// ============ ROUTES ============

app.get('/api/google-ads', (req, res) => {
  res.json({
    success: true,
    data: mockGoogleAdsData,
    source: "Google Ads API"
  });
});

app.get('/api/meta-ads', (req, res) => {
  res.json({
    success: true,
    data: mockMetaAdsData,
    source: "Meta Ads API"
  });
});

app.post('/api/analyze', async (req, res) => {
  try {
    const { googleAdsData, metaAdsData } = req.body;

    // Calculate metrics
    const googleMetrics = calculateMetrics(googleAdsData.campaigns);
    const metaMetrics = calculateMetrics(metaAdsData.campaigns);

    // Get Claude AI recommendations
    const recommendations = await getAIRecommendations(googleMetrics, metaMetrics);

    res.json({
      success: true,
      googleMetrics,
      metaMetrics,
      recommendations,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Analysis error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ============ HELPER FUNCTIONS ============

function calculateMetrics(campaigns) {
  const total = campaigns.reduce((acc, campaign) => ({
    spent: acc.spent + campaign.cost,
    impressions: acc.impressions + campaign.impressions,
    clicks: acc.clicks + campaign.clicks,
    conversions: acc.conversions + campaign.conversions,
    conversion_value: acc.conversion_value + campaign.conversion_value,
    cpc: 0,
    cpa: 0,
    roas: 0
  }), { spent: 0, impressions: 0, clicks: 0, conversions: 0, conversion_value: 0 });

  total.cpc = total.spent / total.clicks;
  total.cpa = total.spent / total.conversions;
  total.roas = total.conversion_value / total.spent;
  total.ctr = ((total.clicks / total.impressions) * 100).toFixed(2);

  return {
    total,
    campaigns,
    inefficient_campaigns: campaigns.filter(c => c.cost / c.conversions > 100)
  };
}

async function getAIRecommendations(googleMetrics, metaMetrics) {
  try {
    // Check if we have API key
    if (!process.env.ANTHROPIC_API_KEY) {
      return generateMockRecommendations(googleMetrics, metaMetrics);
    }

    const { Anthropic } = await import('@anthropic-ai/sdk');
    const client = new Anthropic();

    const prompt = `You are an expert PPC (Pay-Per-Click) advertising analyst. Analyze these ad campaign metrics and provide specific, actionable recommendations:

Google Ads Performance:
- Total Spent: $${googleMetrics.total.spent.toFixed(2)}
- Conversions: ${googleMetrics.total.conversions}
- ROAS: ${googleMetrics.total.roas.toFixed(2)}x
- CPA: $${googleMetrics.total.cpa.toFixed(2)}
- Inefficient Campaigns (CPA > $100): ${googleMetrics.inefficient_campaigns.length}

Meta Ads Performance:
- Total Spent: $${metaMetrics.total.spent.toFixed(2)}
- Conversions: ${metaMetrics.total.conversions}
- ROAS: ${metaMetrics.total.roas.toFixed(2)}x
- CPA: $${metaMetrics.total.cpa.toFixed(2)}
- Inefficient Campaigns: ${metaMetrics.inefficient_campaigns.length}

Provide:
1. Budget optimization recommendations (where to increase/decrease spend)
2. Campaign efficiency issues and solutions
3. Predicted impact of recommended changes (revenue increase %)
4. Quick wins (high-impact, low-effort changes)
5. Long-term strategic improvements

Keep response concise and actionable.`;

    const message = await client.messages.create({
      model: "claude-opus-4-1",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    });

    return {
      analysis: message.content[0].text,
      generated_at: new Date().toISOString()
    };
  } catch (error) {
    console.error('Claude API error:', error);
    return generateMockRecommendations(googleMetrics, metaMetrics);
  }
}

function generateMockRecommendations(googleMetrics, metaMetrics) {
  return {
    analysis: `# Ads Performance Analysis & Recommendations

## Budget Optimization
1. **Reduce underperforming Google Display campaign** by 20% - CPA is $${googleMetrics.inefficient_campaigns[0]?.cost || 'N/A'}/conversion
2. **Increase Meta Conversion campaign budget** by 30% - ROAS is ${metaMetrics.total.roas.toFixed(2)}x (healthy)
3. **Reallocate** $200/day from Display to Shopping campaigns

## Campaign Efficiency Issues
- Google Display campaign has 450% higher CPA than Shopping
- Meta Awareness campaign has 0.4% CTR (should be 1.2%+)
- Recommend pausing low-performing ad sets in Meta

## Predicted Impact of Changes
- Budget reallocation could increase conversions by 15-20%
- Lower CPA by $15-25 per conversion
- Expected revenue lift: $5,000-8,000/month

## Quick Wins
1. Pause bottom 10% of keywords in Google Search (save $150/day)
2. Increase bid on top 20% performing keywords (+5%)
3. Add negative keywords (save $100/day on wasted clicks)
4. Implement audience exclusions in Meta

## Long-term Improvements
- Implement conversion value tracking across all platforms
- Set up automated bidding (maximize conversion value)
- Create lookalike audiences from best customers
- A/B test ad copy and creative monthly`,
    generated_at: new Date().toISOString()
  };
}

// ============ ERROR HANDLING ============

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
    message: err.message
  });
});

// ============ START SERVER ============

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Ads Dashboard Backend running on port ${PORT}`);
  console.log(`📊 GET /api/google-ads - Google Ads data`);
  console.log(`📊 GET /api/meta-ads - Meta Ads data`);
  console.log(`🤖 POST /api/analyze - Get AI recommendations`);
});
