import BasePage from "../BasePage";

export default class HomePage extends BasePage{
    static chairsCard = '.departments > [href="/department/chairs"]'
    static sofasCard = '.departments > [href="/department/sofas"]'
    static beddingCard = '.departments > [href="/department/bedding"]'
    static lightingCard = '.departments > [href="/department/lighting"]'
    static heroSection = '.jumbotron-large'
    static categories = ':nth-child(1) > .departments'
    static shopNow = "div[class='jumbotron jumbotron-large'] a"

    static load(){
        cy.visit("/")
    }

    static Visible(){
        cy.isVisible(this.heroSection)
        cy.isVisible(this.categories)
    }

    static clickShopNow(){
        cy.get(this.shopNow).click()
    }

    static clickChairs(){
        cy.get(this.chairsCard).click()
    }
}