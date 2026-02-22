const { chromium } = require('playwright');

async function followBack() {
  console.log('🚀 Starting Twitter follow-back...');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    storageState: './twitter-auth.json'
  });
  const page = await context.newPage();
  
  try {
    // Go to followers page
    await page.goto('https://twitter.com/goooglewtf/followers');
    await page.waitForTimeout(5000);
    
    // Find follow buttons (users not followed yet)
    const followButtons = await page.$$('button[data-testid="Follow"]:not([disabled])');
    console.log(`Found ${followButtons.length} users to follow back`);
    
    let followed = 0;
    for (const button of followButtons.slice(0, 10)) {
      try {
        await button.click();
        followed++;
        await page.waitForTimeout(3000);
      } catch (e) {
        console.log('Error following:', e.message);
      }
    }
    
    console.log(`✅ Followed ${followed} users`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

followBack();
