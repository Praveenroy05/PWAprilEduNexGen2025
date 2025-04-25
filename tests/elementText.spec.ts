import {test, expect} from '@playwright/test'

test("Get Text from an element", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.getByPlaceholder('email@example.com').fill("test7lYM@gmail.com")
    await page.getByPlaceholder("enter your passsword").fill('Test@123')
    await page.getByRole('button', {name : 'Login', exact : true}).click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()
    await page.locator(".card-body b").nth(1).waitFor({state : 'visible'})                         
    // 3 different elements
    // first() - This will identify the first matching element
    // last() - This will identify the last matching element
    // nth(index) - Returns locator to the n-th matching element. It's zero based, nth(0) selects the first element.
    
    // Text value from an element - textContent()
    const firstText  = await page.locator(".card-body b").nth(1).textContent()
    console.log(firstText);

    // Text value from all the matching elements - allTextContents()
    const allText = await page.locator(".card-body b").allTextContents()
    console.log(allText);

})