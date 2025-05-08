// Launch the url - page.goto() - Main page or original page
// Identify the click button which is having an attribute as target="_blank"
// Click on the click button
// Handle the popup event - const page1 = page.waitForEvent('popup')
// return us a newPage handle - const newPage = await page1

import {test, expect} from '@playwright/test'

test("Window Handling", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")

    const page1 =  page.waitForEvent('popup')
    await page.getByRole('button', {name : '    click   ', exact : true}).click()
   // await page.locator("a[target='_blank']").first().click()

    const newPage = await page1

    await newPage.getByText("Downloads").click()
    await expect(newPage.locator("h2.card-title").last()).toContainText("Support the Selenium Project")

    await newPage.close()

    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()



})

test("Window Handling in 2nd way", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")
    await page.getByRole('button', {name : '    click   ', exact : true}).click()
    const newPage =  await page.waitForEvent('popup')

    await newPage.getByText("Downloads").click()
    await expect(newPage.locator("h2.card-title").last()).toContainText("Support the Selenium Project")

    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

})

