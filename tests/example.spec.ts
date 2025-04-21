import {test, expect} from '@playwright/test'
// const {test, expect} = require('@playwright/test')


test('has title',  async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await page.locator("input#username").fill("student");
  await page.locator("input#password").fill("Password123");
  await page.locator("button#submit").click()
  await expect(page.locator('.post-title')).toContainText("Successfully")

  // Launch the url
  // fill the username
  // fill the password
  // click the login button
})

