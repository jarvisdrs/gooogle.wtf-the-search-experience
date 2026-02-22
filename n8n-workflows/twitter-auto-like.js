const { chromium } = require('playwright');

async function autoLike() {
  console.log('🚀 Starting Twitter auto-like...');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    storageState: './twitter-auth.json'
  });
  const page = await context.newPage();
  
  try {
    // Search for hashtags
    const searchTerms = ['#gooogle', '#goooglewtf', '@goooglewtf'];
    const searchQuery = searchTerms.join(' OR ');
    
    await page.goto(`https://twitter.com/search?q=${encodeURIComponent(searchQuery)}&f=live`);
    await page.waitForTimeout(5000);
    
    // Find and click like buttons
    const likeButtons = await page.$$('button[data-testid="like"]');
    console.log(`Found ${likeButtons.length} tweets to like`);
    
    let liked = 0;
    for (const button of likeButtons.slice(0, 5)) {
      try {
        await button.click();
        liked++;
        await page.waitForTimeout(2000);
      } catch (e) {
        console.log('Already liked or error:', e.message);
      }
    }
    
    console.log(`✅ Liked ${liked} tweets`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

autoLike();
