import BasePage from "../BasePage"


export default class ProductsPage extends BasePage{

    static allProducts = '[class="product-card-container"]'
    static productName = '//div[text()="White Shell Chair"]'
    static soldOutModalMessage = '.modal-title'
    static soldOutModalContinueButton = '.modal-button'
    static productsPageLayout ='[class="products"]'
    static status = ".status"
    static allImages = [
        "img[src='/_nuxt/img/1.71db95e.jpg']", 
        "img[src='/_nuxt/img/4.ede59fc.jpg']",
        
    ]
    
    static productIm = "img[src='/_nuxt/img/1.71db95e.jpg']"
    static loaded(){
        cy.get(this.allProducts).should('have.length', 9) 
    }

    static clickProduct() {
        const totalProducts = this.allImages.length;
    
        for (let i = 0; i < totalProducts; i++) {
            // Get the product status text asynchronously
            cy.get(this.status).invoke('text').then(productStatus => {
                if (productStatus.trim().toLowerCase() === 'in stock') {
                    // Click on the image if the product is in stock
                    cy.get(this.allImages[i]).click();
                } else {
                    // Display sold-out modal message if the product is not in stock
                    cy.get(this.soldOutModalMessage).should('contain.text', 'Oops! This item is sold out.');
                    
                }
            });
        }
    }
    
    
   
   
    
    static clickOneProduct(){
        cy.get(this.productIm).click()
    }
    
}