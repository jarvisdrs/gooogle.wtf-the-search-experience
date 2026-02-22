# n8n Twitter Automation Setup

## Overview
Automated interactions (likes, replies, retweets) using n8n + Twitter API (free tier for read, manual for write via browser).

## Architecture
```
Twitter/X → n8n (self-hosted) → Automated Actions
                   ↓
              Content Queue
                   ↓
            Manual Approval
                   ↓
            Post/Comment
```

## Prerequisites

### 1. Twitter/X API Access (Free Tier)
- Go to: https://developer.twitter.com/en/portal/dashboard
- Create App → Get API Key & Secret
- Generate Access Token & Secret

### 2. n8n Installation (Local)
```bash
# Install n8n globally
npm install n8n -g

# Start n8n
n8n start

# Access at http://localhost:5678
```

## n8n Workflows

### Workflow 1: Monitor Keywords & Auto-Like
**Trigger:** Schedule (every 15 min)
**Action:** Search tweets → Auto-like relevant ones

```json
{
  "name": "Twitter Auto-Like",
  "nodes": [
    {
      "type": "n8n-nodes-base.scheduleTrigger",
      "interval": 15
    },
    {
      "type": "n8n-nodes-base.twitter",
      "operation": "search",
      "searchText": "#gooogle OR #goooglewtf OR 'opposite search'"
    },
    {
      "type": "n8n-nodes-base.twitter",
      "operation": "like",
      "tweetId": "={{ $json.id }}"
    }
  ]
}
```

### Workflow 2: Reply to Mentions
**Trigger:** Webhook or Polling
**Action:** Get mentions → Queue replies for approval

### Workflow 3: Follow Back
**Trigger:** Schedule (daily)
**Action:** Check new followers → Auto-follow back (if not bot)

## Credentials Setup

### Twitter API v2 (Free)
1. In n8n: Settings → Credentials
2. Add: Twitter OAuth2 API
3. Enter:
   - Client ID: [your API Key]
   - Client Secret: [your API Secret]
   - Access Token: [your Access Token]
   - Access Secret: [your Access Secret]

## Rate Limits (Free Tier)
- Post: 50 tweets/day
- Like: 1000/day
- Follow: 400/day
- Search: 450 requests/15 min

## Safe Automation Rules
✅ DO:
- Like tweets mentioning #gooogle
- Follow back real accounts (check followers/following ratio)
- Reply with template responses (approved by you)
- Retweet quality content

❌ DON'T:
- Spam hashtags
- Follow/unfollow rapidly
- Post duplicate content
- Reply to tweets >24h old
- Use offensive language

## Content Queue System

### Google Sheets Integration
Create spreadsheet with columns:
- Date
- Content (text/image)
- Type (tweet/thread/reply)
- Status (pending/approved/posted)
- Posted At
- URL

### n8n Workflow: Content Queue
```
Google Sheets (pending) → n8n → Manual Approval → Post to Twitter
```

## Browser Automation (Fallback)

If API limits hit, use Playwright:

```javascript
// auto-like.js
const { chromium } = require('playwright');

async function likeTweets() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    storageState: 'twitter-auth.json' // logged in state
  });
  const page = await context.newPage();
  
  // Search for #gooogle
  await page.goto('https://twitter.com/search?q=%23gooogle&f=live');
  
  // Like first 5 tweets
  const likeButtons = await page.$$('[data-testid="like"]');
  for (let i = 0; i < Math.min(5, likeButtons.length); i++) {
    await likeButtons[i].click();
    await page.waitForTimeout(2000);
  }
  
  await browser.close();
}

likeTweets();
```

## Daily Automation Schedule

| Time | Action | Tool |
|------|--------|------|
| 00:00 | Like mentions from previous day | n8n |
| 08:00 | Follow back new followers | n8n |
| 12:00 | Post from content queue | Manual/n8n |
| 15:00 | Search & like relevant tweets | n8n |
| 18:00 | Reply to mentions | n8n + Manual |
| 21:00 | Check DMs, respond if needed | Manual |

## Emergency Stop

To pause all automation:
```bash
# Stop n8n
pkill -f n8n

# Or disable specific workflow in n8n UI
# http://localhost:5678/workflows
```

## Monitoring

Check logs:
```bash
# n8n logs
tail -f ~/.n8n/logs/n8n.log

# Twitter API usage
# Check at: https://developer.twitter.com/en/portal/dashboard
```

## Next Steps

1. [ ] Apply for Twitter Developer Account (free tier)
2. [ ] Install n8n locally or use n8n Cloud (free trial)
3. [ ] Create credentials in n8n
4. [ ] Import workflows from `/n8n-workflows/`
5. [ ] Test with limited scope (5 likes/day)
6. [ ] Scale up gradually

## Files in this folder
- `workflows/` - n8n JSON workflows
- `credentials-template.json` - Template for Twitter API creds
- `content-queue.csv` - Content calendar template