import BasePage from "../BasePage";
import 'cypress-file-upload';


export default class MyProfile extends BasePage{
    static profile = ".profile"
    static profilePicture = ".profile-picture"
    static label = ".label"
    static editBtn = ".button"
    static editProfileForm = "section.profile-editor > .profile-editor"
    static pictureBtn = "#picture"
    static uploadBtn = "label[class='button inline']"
    static fName = "#firstname"
    static saveProfile = ".button.big.inverted"
    static errorMsg = ".error"
    static formInputs = ".input-field"
    static cancelBtn = "button[class='button big']"
    static successMsg = ".success.banner"


    static loaded(){
        cy.isVisible(this.profile)
        cy.isVisible(this.profilePicture)
        cy.isVisible(this.label)
        cy.isVisible(this.editBtn)
    }

    static click(selector){
        switch(selector){
            case "editBtn":
                cy.get(this.editBtn).click()
                break;
            
            case "pictureBtn":
                cy.get(this.pictureBtn).click()
                break;

            case "saveProfile":
                cy.get(this.saveProfile).click()
                break;
            
            case "cancelBtn":
                cy.get(this.cancelBtn).click()
                break;
        }
    }

    static formLoaded(){
        cy.isVisible(this.editProfileForm)
    }

    static uploadingPhoto() {
        const filePath = "Cart shopist.png";
        cy.get(this.pictureBtn)
            .attachFile(filePath);
    }

    static verifyError(){
       
        cy.get(this.errorMsg).should('contain.text','Please enter a firstname')
            
        
    }

    static verifyBanner(){
        cy.get(this.successMsg).should('contain.text','Profile successfully saved.')
    }

    static clearInput(){
        cy.get(this.fName).clear()
    }
    
}