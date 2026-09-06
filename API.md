# 📡 API Documentation

Complete API reference for Ads Dashboard Backend

## Base URL

- **Development:** `http://localhost:5000`
- **Production:** `https://your-deployed-url.com`

## Endpoints

### Get Google Ads Data

```http
GET /api/google-ads
```

**Response:**
```json
{
  "success": true,
  "data": {
    "campaigns": [
      {
        "id": "1",
        "name": "Search - Brand Keywords",
        "status": "ENABLED",
        "budget_daily": 500,
        "spent_today": 450,
        "impressions": 12500,
        "clicks": 850,
        "conversions": 45,
        "cost": 4500,
        "conversion_value": 22500
      }
    ],
    "account_id": "1234567890",
    "currency": "USD"
  },
  "source": "Google Ads API"
}
```

**Parameters:** None

**Authentication:** None (will require API key after integration)

---

### Get Meta Ads Data

```http
GET /api/meta-ads
```

**Response:**
```json
{
  "success": true,
  "data": {
    "campaigns": [
      {
        "id": "fb1",
        "name": "Conversion - Landing Page",
        "status": "ACTIVE",
        "budget_daily": 400,
        "spent_today": 385,
        "impressions": 28000,
        "clicks": 1200,
        "conversions": 65,
        "cost": 3850,
        "conversion_value": 19500
      }
    ],
    "account_id": "9876543210",
    "currency": "USD"
  },
  "source": "Meta Ads API"
}
```

**Parameters:** None

**Authentication:** None (will require API key after integration)

---

### Analyze Ads Performance with AI

```http
POST /api/analyze
Content-Type: application/json

{
  "googleAdsData": {
    "campaigns": [...]
  },
  "metaAdsData": {
    "campaigns": [...]
  }
}
```

**Request Body:**
```json
{
  "googleAdsData": {
    "campaigns": [
      {
        "id": "1",
        "name": "Search Campaign",
        "cost": 4500,
        "conversions": 45,
        "conversion_value": 22500,
        "impressions": 12500,
        "clicks": 850
      }
    ]
  },
  "metaAdsData": {
    "campaigns": [
      {
        "id": "fb1",
        "name": "Meta Campaign",
        "cost": 3850,
        "conversions": 65,
        "conversion_value": 19500,
        "impressions": 28000,
        "clicks": 1200
      }
    ]
  }
}
```

**Response:**
```json
{
  "success": true,
  "googleMetrics": {
    "total": {
      "spent": 7300,
      "impressions": 20400,
      "clicks": 1050,
      "conversions": 57,
      "conversion_value": 29700,
      "cpc": 6.95,
      "cpa": 128.07,
      "roas": 4.07,
      "ctr": "5.15%"
    },
    "campaigns": [...],
    "inefficient_campaigns": [...]
  },
  "metaMetrics": {
    "total": {
      "spent": 3850,
      "impressions": 28000,
      "clicks": 1200,
      "conversions": 65,
      "conversion_value": 19500,
      "cpc": 3.21,
      "cpa": 59.23,
      "roas": 5.06,
      "ctr": "4.29%"
    },
    "campaigns": [...],
    "inefficient_campaigns": []
  },
  "recommendations": {
    "analysis": "# AI Analysis\n\n## Budget Optimization\n1. Increase Meta budget by 30%...",
    "generated_at": "2025-09-06T10:30:00Z"
  },
  "timestamp": "2025-09-06T10:30:00Z"
}
```

**Parameters:**
- `googleAdsData` (object, required) - Google Ads campaign data
- `metaAdsData` (object, required) - Meta Ads campaign data

**Authentication:** Requires valid Claude API key in backend `.env`

---

## Response Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 400 | Bad request (invalid data) |
| 401 | Unauthorized (missing API key) |
| 500 | Server error |

## Error Responses

```json
{
  "success": false,
  "error": "Error message here",
  "message": "Detailed explanation"
}
```

## Rate Limiting

Current limits (per minute):
- `/api/google-ads`: 60 requests
- `/api/meta-ads`: 60 requests
- `/api/analyze`: 10 requests (due to Claude API costs)

## Authentication (After Integration)

Add header to requests:
```http
Authorization: Bearer YOUR_API_KEY
```

## Example Requests

### Using cURL

**Get Google Ads Data:**
```bash
curl -X GET http://localhost:5000/api/google-ads
```

**Analyze Performance:**
```bash
curl -X POST http://localhost:5000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "googleAdsData": {...},
    "metaAdsData": {...}
  }'
```

### Using JavaScript/Axios

```javascript
import axios from 'axios'

// Get Google Ads
const googleData = await axios.get('/api/google-ads')

// Get Meta Ads
const metaData = await axios.get('/api/meta-ads')

// Get AI Analysis
const analysis = await axios.post('/api/analyze', {
  googleAdsData: googleData.data.data,
  metaAdsData: metaData.data.data
})
```

### Using Python/Requests

```python
import requests

# Get Google Ads
response = requests.get('http://localhost:5000/api/google-ads')
google_data = response.json()

# Analyze with Claude
analysis = requests.post('http://localhost:5000/api/analyze', 
  json={
    'googleAdsData': google_data['data'],
    'metaAdsData': meta_data['data']
  }
)
```

## Performance Metrics Returned

Each campaign returns:

| Metric | Formula | Meaning |
|--------|---------|---------|
| **CTR** | (Clicks / Impressions) × 100 | Click-through rate |
| **CPC** | Cost / Clicks | Cost per click |
| **CPA** | Cost / Conversions | Cost per acquisition |
| **ROAS** | Revenue / Cost | Return on ad spend |
| **Conv Value** | (Conversions × AOV) | Total revenue |

## Webhook Events (Future)

After full integration, webhooks will be available for:

```
POST /api/webhooks/google-ads
POST /api/webhooks/meta-ads
POST /api/webhooks/performance-alerts
```

## Pagination (Future)

For large datasets:

```http
GET /api/google-ads?page=1&limit=50
```

## Filtering (Future)

```http
GET /api/google-ads?status=ENABLED&min_spend=100
GET /api/meta-ads?date_from=2025-01-01&date_to=2025-09-06
```

## Changelog

### v1.0.0 (Current)
- ✅ GET /api/google-ads
- ✅ GET /api/meta-ads
- ✅ POST /api/analyze
- ✅ Claude AI recommendations

### v1.1.0 (Planned)
- [ ] Authentication/API keys
- [ ] Rate limiting
- [ ] Pagination
- [ ] Advanced filtering
- [ ] Export to CSV/PDF
- [ ] Webhooks

### v2.0.0 (Future)
- [ ] Pinterest Ads
- [ ] LinkedIn Ads
- [ ] TikTok Ads
- [ ] YouTube Ads
- [ ] Custom metrics
- [ ] Forecasting

---

**Last Updated:** 2025-09-06
**Version:** 1.0.0
**Status:** Production Ready
