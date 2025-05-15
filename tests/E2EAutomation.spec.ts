import {test, expect} from '@playwright/test'

let username : string = "test7lYM@gmail.com"
let password : string = "Test@123"
let productName : string  = "ZARA COAT 3"
let country : string  = " Singapore"

test("E2E automation scenario", async ({page})=>{
  await page.goto("https://rahulshettyacademy.com/client")
  await page.getByPlaceholder("email@example.com").fill(username)
  await page.getByPlaceholder("enter your passsword").fill(password)
  await page.getByRole('button', {name: 'Login', exact: true}).click()
  await expect(page.locator(".fa-sign-out")).toBeVisible()

  const products = await page.locator("div.card-body") // first(), last(), nth(index)
  await products.last().waitFor({state: 'visible'})
  // count() - Return the total number of elements that is matching
  const count = await products.count()
  console.log(count)

  for(let i =0; i<count; i++){
    const productText = await products.nth(i).locator("b").textContent() 
    // page.locator("div.card-body").locator("b") // page.locator("div.card-body b")
    if(productText === productName){
        await products.nth(i).locator('button').last().click()
        break
    }
  }

  await page.locator("[routerlink='/dashboard/cart']").click()
  await page.getByRole('button', {name: 'Checkout'}).click()
  await expect(page.locator("div.user__name input").first()).toHaveValue(username)
  await page.getByPlaceholder("Select Country").pressSequentially("in")
  await page.locator("section.ta-results").waitFor()
  const dropDownValues = page.locator("section.ta-results button")
  const countryCount  = await dropDownValues.count()

  for(let i =0; i<countryCount; i++){
    const countryText = await dropDownValues.nth(i).textContent()
    if(countryText === country){
      await dropDownValues.nth(i).click()
      break
    }
  }

  await page.getByText("Place Order ").click()
  await expect(page.locator("h1.hero-primary")).toBeVisible()
  const orderID = await page.locator(".em-spacer-1 label").last().textContent()
  //console.log(orderID)

  await page.locator("button[routerlink='/dashboard/myorders']").click()
  await expect(page.locator("table")).toBeVisible()
  const rows = page.locator("tbody tr")
  const rowcount = await rows.count()
  let orderText
  for(let i=0; i<rowcount; i++){
    orderText  = await rows.nth(i).locator("th").textContent()
    if(orderID?.includes(orderText)){
      await rows.nth(i).locator('button').first().click()
      break
    }
  }

  await expect(page.locator("div.col-text")).toContainText(orderText)
})