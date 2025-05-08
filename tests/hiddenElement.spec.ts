import {test, expect} from '@playwright/test'

test('Hidden Element Validation', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect(page.getByPlaceholder('Hide/Show Example')).toBeVisible()
    await page.locator("#hide-textbox").click()
    await expect(page.getByPlaceholder('Hide/Show Example')).not.toBeVisible()
    await expect(page.getByPlaceholder('Hide/Show Example')).toBeHidden()

})