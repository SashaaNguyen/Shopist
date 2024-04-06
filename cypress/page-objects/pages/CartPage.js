import BasePage from "../BasePage";

export default class Cart extends BasePage{
    static productPicture = '.product-picture'
    static minus = "div[class='product-counter'] div div:nth-child(1) div:nth-child(1)"
    static plus = "div[class='products'] div div:nth-child(3) div:nth-child(1)"
    static amount = "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)"
    static removeBtn = ".remove-button"
    static productPrice = ".product-price"
    static productInfo = "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)"
    static discountInput = "input[placeholder='Discount code']"
    static apply = "div[class='discount'] div"
    static checkOutBtn = ".checkout"
    static emptyMsg = ".no-products"
    static checkOutTitle = ".checkout-title"
    static checkOutmsg = ".checkout > :nth-child(2) > :nth-child(1)"
    static checkOutmsg2 = ".checkout > :nth-child(2) > :nth-child(2)"
    static continueShoppingBtn = ".continue-shopping"
    static invalidMsg = ".discount-toast"

    static increaseAmount(){
        cy.get(this.plus).click()
    }

    static decreaseAmount(){
        cy.get(this.minus).click()
    }

    static removeProduct(){
        cy.get(this.removeBtn).click()
    }

    static verifyInvalidMsg(){
        cy.get(this.invalidMsg).should('contain.text','Coupon is invalid')
    }

    static verifyCodelength(){
        cy.get(this.discountInput).should('have.attr','maxlength','15')
        
    }

    static verifyNoProducts(){
        cy.get(this.emptyMsg).should('contain.text', 'Your cart is currently empty')
    }

    static invokeProductPriceText() {
        cy.get(this.productPrice).invoke('text').as('expectedPrice')
    }

    static verifyPrice(){
        cy.get("@expectedPrice").then(expectedPrice=>{
            cy.get(this.productPrice).should('contain.text',expectedPrice)
            } 
        )
    }

    static click(selector){
        switch(selector){
            case "apply":
                cy.get(this.apply).click();
                break;

            case "checkoutBtn":
                cy.get(this.checkoutBtn).click();
                break;
            
            case "checkOutBtn":
                cy.get(this.checkOutBtn).click();
                break;

        }
    }

    static verifyCheckOut(){
        cy.get(this.checkOutTitle).should("contain.text","Thank you!")
        cy.get(this.checkOutmsg).should("contain.text","Your order has been placed.")
        cy.get(this.checkOutmsg2).should("contain.text","We will update you when it's shipped.")

    }

    static nonStopClicking() {
        cy.get(this.plus).then(($btn) => {
            let isButtonDisabled = $btn.hasClass('disabled');
    
            while (!isButtonDisabled) {
                
                this.increaseAmount();
    
                
                cy.get(this.plus).then(($updatedBtn) => {
                    isButtonDisabled = $updatedBtn.hasClass('disabled');
                });
    
                cy.wait(1000); 
            }
        });
    }

    static typeCode(text){
        cy.get(this.discountInput).type(text)
    }
    
}