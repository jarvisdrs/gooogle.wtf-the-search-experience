const { chromium } = require('playwright');

const MODE = process.argv[2] || 'like'; // 'like' or 'follow'

async function autoLike() {
  console.log('🚀 Twitter Auto-Like started...');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    storageState: './twitter-auth.json'
  });
  const page = await context.newPage();
  
  try {
    const searchTerms = ['#gooogle', '#goooglewtf', '@goooglewtf'];
    const searchQuery = searchTerms.join(' OR ');
    
    await page.goto(`https://twitter.com/search?q=${encodeURIComponent(searchQuery)}&f=live`);
    await page.waitForTimeout(5000);
    
    const likeButtons = await page.$$('button[data-testid="like"]');
    console.log(`Found ${likeButtons.length} tweets to like`);
    
    let liked = 0;
    for (const button of likeButtons.slice(0, 5)) {
      try {
        await button.click();
        liked++;
        await page.waitForTimeout(2000);
      } catch (e) {
        console.log('Skip:', e.message);
      }
    }
    
    console.log(`✅ Liked ${liked} tweets`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

async function followBack() {
  console.log('🚀 Twitter Follow-Back started...');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    storageState: './twitter-auth.json'
  });
  const page = await context.newPage();
  
  try {
    await page.goto('https://twitter.com/goooglewtf/followers');
    await page.waitForTimeout(5000);
    
    const followButtons = await page.$$('button[data-testid="Follow"]:not([disabled])');
    console.log(`Found ${followButtons.length} users to follow`);
    
    let followed = 0;
    for (const button of followButtons.slice(0, 10)) {
      try {
        await button.click();
        followed++;
        await page.waitForTimeout(3000);
      } catch (e) {
        console.log('Skip:', e.message);
      }
    }
    
    console.log(`✅ Followed ${followed} users`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

// Run based on mode
if (MODE === 'like') {
  autoLike();
} else if (MODE === 'follow') {
  followBack();
} else {
  console.log('Usage: node twitter-auto.js [like|follow]');
}
