// Locators and methods for Login Page

import { Locator, Page} from "playwright";

// export / import

export class LoginPage{

    // let or const keyword should not be included when we create a properties inside the class
    // function keyword should not be included when we create a method inside the class

    // locators
    private page : Page
    private username :Locator 
    private password :Locator
    private loginBtn : Locator
    loginErrorMessage : Locator
    homePageIdentifier : Locator

    constructor(page){
        this.page = page
        this.username = this.page.getByPlaceholder("email@example.com")
        this.password = this.page.getByPlaceholder("enter your passsword")
        this.loginBtn = this.page.getByRole('button', {name: 'Login', exact: true})
        this.loginErrorMessage = this.page.locator("#toast-container")
        this.homePageIdentifier = this.page.locator(".fa-sign-out") 
    }

    // methods
    // launchURL()
    // fillUsername()
    // fillPassword()
    // clickLoginBtn()
    // ValidLogin()
    // InvalidLogin()

    async LaunchURL(url:string){
        await this.page.goto(url)
    }

    async fillUsername(username){
        await this.username.fill(username)
    }

    async fillPassword(password){
        await this.password.fill(password)
    }

    async clickLoginButton(){
        await this.loginBtn.click()
    }

    async validLogin(email:string, password:string){
    //    await this.username.fill(username)
        await this.fillUsername(email) // test@gmal.com
        await this.fillPassword(password)
        await this.clickLoginButton()
    }

    async invalidLogin(username, incorrectPassword){
        await this.fillUsername(username)
        await this.fillPassword(incorrectPassword)
        await this.clickLoginButton()
    }
}
