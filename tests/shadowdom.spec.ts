import {test, expect} from '@playwright/test'

test('Shadow dom validation', async ({page})=>{
    await page.goto("https://books-pwakit.appspot.com/")
    await page.locator("#input").fill("Testing")
    await page.keyboard.press('Enter')
    //await page.locator("div.icon").click()
    await expect(page.locator("h2.title").first()).toContainText("Testing")
})