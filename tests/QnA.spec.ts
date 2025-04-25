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
