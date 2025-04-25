// Input field - fill 
// Clicking on an element
// How do we handle radio button
// How do we handle checkbox

// Launch the url - goto('url')
// To write the locators  - locator()
// fill the username  - fill() // pressSequentially()
// fill the password
// click on login button - click()
// Validate if you are on the home page or not 


import {test, expect} from '@playwright/test'

test("UI Basics - Input field validation", async ({page})=>{

await page.goto("https://demoqa.com/automation-practice-form")

await page.getByPlaceholder("First Name").fill("Playwright", {force: true})
await expect(page.getByPlaceholder("First Name")).toHaveValue("Playwright")

await page.getByPlaceholder("Last Name").fill("Testing")
await expect(page.getByPlaceholder("Last Name")).toHaveValue("Testing")

await page.locator("#userEmail").fill("playwright@testing.com")
await expect(page.locator("#userEmail")).toHaveValue("playwright@testing.com")

await page.getByPlaceholder("Mobile Number").pressSequentially("0000000000")
await expect(page.getByPlaceholder("Mobile Number")).toHaveValue("0000000000")

await page.getByPlaceholder("Current Address").fill("India")
await expect(page.getByPlaceholder("Current Address")).toHaveValue("India")

})


test('Radio button and checkbox validation', async ({page})=>{

    await page.goto("https://demoqa.com/automation-practice-form")
    // check() - Ensure that checkbox or radio element is checked.
    //await expect(page.locator("#gender-radio-2")).toBeChecked()
    
    await page.locator("#gender-radio-2").check({force: true})
    await expect(page.locator("#gender-radio-2")).toBeChecked()

    await page.getByLabel('Sports').check({force: true})
    await expect(page.getByLabel('Sports')).toBeChecked()


})