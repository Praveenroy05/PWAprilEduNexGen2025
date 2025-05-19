import { test, expect } from '@playwright/test';

test('Click on anthem link dynamically for a given country', async ({ page }) => {
  const country = 'United_States'; 
  await page.goto(`https://en.wikipedia.org/wiki/${country}`);

  const anthemLink = page.locator('//table[contains(@class, "infobox")]//td[b[contains(text(), "Anthem")]]//a').first();

  if (await anthemLink.count() > 0) {
    console.log(`Anthem link found for ${country}. Clicking...`);
    await anthemLink.click();

    await expect(page).toHaveURL(/wiki/);
    console.log('Navigated to anthem page:', await page.title());
  } else {
    console.log(`No anthem link found for ${country}.`);
  }
});


// Assignment - 
// URL - https://demoqa.com/select-menu
// Go to Multiselect drop down and select all the drop down values one by one
// For loop



// trace.playwright.dev - This will help us in opening the trace file or log file



// Scroll Down - scrollIntoViewIfNeeded()
// Download 
// Calendar Selection