import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'



// pre-requisite 
// Launch the url - We have to call it from LoginPage class
// Login into the applciation using a valid credentails  - Call it from LoginPage class
// Move to the dashboard
// call diff methods from dahboardpage


let url = "https://rahulshettyacademy.com/client"
let username : string = "test7lYM@gmail.com"
let password : string = "Test@123"
let productName : string  = "IPHONE 13 PRO"

let loginPage
let dashboardPage

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
    await loginPage.validLogin(username, password)
})

test("Add a product to the cart", async ()=>{
    await expect(loginPage.homePageIdentifier).toBeVisible()
    await dashboardPage.searchAndAddProductToCart(productName)
    await expect(dashboardPage.addToCartSuccessMessgae).toContainText("Product Added To Cart")
})

test("View the product details", async()=>{
    
})