export default class Navbar{
    static logo = "div[class='brand-large'] img"
    static chairs = "a[class='a-exact-active chairs'] div[class='menu-item-large']"
    static sofas = "a[class='sofas'] div[class='menu-item-large']"
    static bedding = "a[class='bedding'] div[class='menu-item-large']"
    static lightning = "a[class='lighting'] div[class='menu-item-large']"
    static myProfile = "a[class='profile'] div[class='menu-item-large']"
    static cart = "a[class='cart'] div[class='menu-item-large']"
    static cartNumber = '.menu-item-large'
    
    static click(selector) {
        switch (selector) {
            case 'logo':
                cy.get(this.logo).click();
                break;
            case 'chairs':
                cy.get(this.chairs).click();
                break;
            case 'sofas':
                cy.get(this.sofas).click();
                break;
            case 'bedding':
                cy.get(this.bedding).click();
                break;
            case 'lightning':
                cy.get(this.lightning).click();
                break;
            case 'myProfile':
                cy.get(this.myProfile).click();
                break;
            case 'cart':
                cy.get(this.cart).click();
                break;
            default:
                throw new Error('Invalid selector');
        }
    }

    static invokeQuantity(){
        cy.get(this.cartNumber).invoke('text')
        .then(text=>text.trim())
        .as('expectedQuantity')
    }

    static verifyQuantity(number){
        cy.get(this.cartNumber).should('contain.text', number)
    }
}