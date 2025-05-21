import { Locator } from "playwright"

export class DashboardPage{

    private page
    private products :Locator
    addToCartSuccessMessgae : Locator

    constructor(page) {
        this.page = page  
        this.products = this.page.locator("div.card-body")
        this.addToCartSuccessMessgae = this.page.locator("#toast-container")
    }

    async searchAndAddProductToCart(productName){
        const count = await this.products.count()
        for(let i =0; i<count; i++){
            const productText = await this.products.nth(i).locator("b").textContent() 
            if(productText === productName){
                await this.products.nth(i).locator('button').last().click()
                break
            }
        }
    }


    async viewProductDetails(productName){
        
    }

}