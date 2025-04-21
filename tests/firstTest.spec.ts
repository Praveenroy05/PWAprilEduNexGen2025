import {test, expect} from '@playwright/test'

test("browser fixture", async ({browser})=>{
// BrowserContext()

const context =  await browser.newContext() // Creates a browser context
const page = await context.newPage() // create a new page on the browser context

await page.goto("https://practicetestautomation.com/practice-test-login/");
await page.locator("input#username").fill("student");
await page.locator("input#password").fill("Password123");
await page.locator("button#submit").click({force : true})
await expect(page.locator('.post-title')).toContainText("Successfully")
//await page.locator("//h1[@class='text-center']/following-sibling::h5[1]")
// page.getByRole('heading', {name: 'Login', exact: true})

})

test("Page fixture", async ({page})=>{
    
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("input#username").fill("student");
    await page.locator("input#password").fill("Password123");
    await page.locator("button#submit").click()
    await expect(page.locator('.post-title')).toContainText("Successfully")
})
