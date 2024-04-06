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
    static lName = "#lastname";
    static address1 = "#address1";
    static address2 = "#address2";
    static city = "#addressCity";
    static zipCode = "#addressZipcode";
    static phone = "#phone"
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

    static fillInput(){
        cy.fixture('cart.json').then((data)=>{
            cy.get(this.fName).type(data.Firstname);
            cy.get(this.lName).type(data.Lastname);
            cy.get(this.address1).type(data.Address);
            cy.get(this.address2).type(data.Address2);
            cy.get(this.city).type(data.City);
            cy.get(this.zipCode).type(data.Zipcode);
            cy.get(this.phone).type(data.Phonenumber);

        })
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
        cy.get(this.lName).clear()
        cy.get(this.address1).clear()
        cy.get(this.address2).clear()
        cy.get(this.city).clear()
        cy.get(this.zipCode).clear()
        cy.get(this.phone).clear()
    }
    
}