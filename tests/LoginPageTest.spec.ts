// Test cases and trhe assertion
import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

let url = "https://rahulshettyacademy.com/client"
let username : string = "test7lYM@gmail.com"
let password : string = "Test@123"
let incorrectPassword :string = "Test123"


// hooks - 
let loginPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
})

test("Valid Login Test", async ({page})=>{
   
    await loginPage.validLogin(username, password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("Invalid Login Test", async ({page})=>{
    await loginPage.invalidLogin(username, incorrectPassword)
    await expect(loginPage.loginErrorMessage).toBeVisible()
})

