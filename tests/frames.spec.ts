// Frames

// Launch the url - Original page  - By using page fixture we will be able automate everything
// Action on the main page - page.locator()
// Write the locators to identify the iframes  - const frames  = page.frameLocator()
// By using "frames" we can automation/identify any element on the frames page


import {test, expect} from '@playwright/test'

test('Frames handling', async  ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator("#checkBoxOption1").check()
    await expect(page.locator("#checkBoxOption1")).toBeChecked()

    const framePage = await page.frameLocator("#courses-iframe")
    await framePage.getByText("All Access plan", {exact: true}).first().click()
    await expect(framePage.locator("div.inner-box")).toContainText("All Access Subscription")
    await page.waitForTimeout(3000)

    await page.getByRole('button', {name:'Home', exact: true}).click()
    await page.waitForTimeout(3000)

})

