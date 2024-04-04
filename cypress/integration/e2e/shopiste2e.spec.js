import BasePage from "../../page-objects/BasePage";
import Navbar from "../../page-objects/components/navbar";
import HomePage from "../../page-objects/pages/HomePage";
import ProductDetailsPage from "../../page-objects/pages/ProductsDetailsPage";
import ProductsPage from "../../page-objects/pages/ProductsPage";
import Cart from "../../page-objects/pages/CartPage";
import MyProfile from "../../page-objects/pages/MyProfile";



//First test suit
describe("Cart test suite",()=>{
    
    beforeEach(()=>{
        HomePage.load()
        HomePage.Visible()
    })

    it("User can add item to cart",()=>{
        
        HomePage.clickShopNow()
        BasePage.goBack()
        HomePage.clickChairs()
        ProductsPage.loaded()
        ProductsPage.clickOneProduct()
        ProductDetailsPage.invokeProductNameText()
        ProductDetailsPage.invokeProductPriceText()
        ProductDetailsPage.clickAddToCart()
        Navbar.verifyQuantity('(1)')
        
    })

    it("User can delete item from the cart by decreasing product's amount to 0",()=>{
        
        HomePage.clickShopNow()
        BasePage.goBack()
        HomePage.clickChairs()
        ProductsPage.loaded()
        ProductsPage.clickOneProduct()
        ProductDetailsPage.invokeProductNameText()
        ProductDetailsPage.invokeProductPriceText()
        ProductDetailsPage.clickAddToCart()
        Navbar.verifyQuantity('(1)')
        Navbar.click('cart')
        Cart.decreaseAmount()
        Cart.verifyNoProducts()
        Navbar.verifyQuantity('(0)')
    })

    it("User can remove item from the cart by clicking on remove button",()=>{
       
        HomePage.clickShopNow()
        BasePage.goBack()
        HomePage.clickChairs()
        ProductsPage.loaded()
        ProductsPage.clickOneProduct()
        ProductDetailsPage.invokeProductNameText()
        ProductDetailsPage.invokeProductPriceText()
        ProductDetailsPage.clickAddToCart()
        Navbar.verifyQuantity('(1)')
        Navbar.click('cart')
        Cart.removeProduct()
        Cart.verifyNoProducts()
    })


    it("User can increase amount of product in Cart",()=>{
        
        HomePage.clickShopNow()
        BasePage.goBack()
        HomePage.clickChairs()
        ProductsPage.loaded()
        ProductsPage.clickOneProduct()
        ProductDetailsPage.invokeProductNameText()
        ProductDetailsPage.invokeProductPriceText()
        ProductDetailsPage.clickAddToCart()
        Navbar.verifyQuantity('(1)')
        Navbar.click('cart')
        Cart.increaseAmount()
        Navbar.verifyQuantity('(2')
    })

    it("User can decrease amount of items in a cart",()=>{
        
        HomePage.clickShopNow()
        BasePage.goBack()
        HomePage.clickChairs()
        ProductsPage.loaded()
        ProductsPage.clickOneProduct()
        ProductDetailsPage.invokeProductNameText()
        ProductDetailsPage.invokeProductPriceText()
        ProductDetailsPage.doubleClick()
        Navbar.verifyQuantity('(2)')
        Navbar.click('cart')
        Cart.decreaseAmount()
        Navbar.verifyQuantity('(1)')

    })

    it.skip("User can incfrease quantity of products until the item is out of stock",()=>{
        
        HomePage.clickShopNow()
        BasePage.goBack()
        HomePage.clickChairs()
        ProductsPage.loaded()
        ProductsPage.clickOneProduct()
        ProductDetailsPage.clickAddToCart()
        Navbar.verifyQuantity('(1)')
        Navbar.click('cart')
        Cart.nonStopClicking()
    })

    it("Product's price displays correctly on cart page",()=>{
        
        HomePage.clickShopNow()
        BasePage.goBack()
        HomePage.clickChairs()
        ProductsPage.loaded()
        ProductsPage.clickOneProduct()
        ProductDetailsPage.clickAddToCart()
        Navbar.verifyQuantity('(1)')
        Navbar.click('cart')
        Cart.invokeProductPriceText()
        Cart.verifyPrice()
    })

    it("User can successfully proceed to checkout",()=>{
        
        HomePage.clickShopNow()
        BasePage.goBack()
        HomePage.clickChairs()
        ProductsPage.loaded()
        ProductsPage.clickOneProduct()
        ProductDetailsPage.clickAddToCart()
        Navbar.verifyQuantity('(1)')
        Navbar.click('cart')
        Cart.click("checkOutBtn")
        Cart.verifyCheckOut()
        
        HomePage.load()
    })

    it("User can't proceed checkOut with no products in cart",()=>{
        
        Navbar.verifyQuantity('(0)')
        Navbar.click("cart")
        Cart.verifyNoProducts()
        Cart.click("checkOutBtn")
    })
})








//Second test suite

describe("Discount code test suite",()=>{

    beforeEach(()=>{
        HomePage.load()
        HomePage.Visible()
    })

    it.only("Coupon is invalid message appears if the code is invalid",()=>{
        HomePage.clickShopNow()
        BasePage.goBack()
        HomePage.clickChairs()
        ProductsPage.loaded()
        ProductsPage.clickOneProduct()
        ProductDetailsPage.clickAddToCart()
        Navbar.verifyQuantity('(1)')
        Navbar.click('cart')
        Cart.typeCode("asdasdads")
        Cart.click("apply")
        Cart.verifyInvalidMsg()
    })

    it("Input can receive max 15 characters",()=>{
        
        HomePage.clickShopNow()
        BasePage.goBack()
        HomePage.clickChairs()
        ProductsPage.loaded()
        ProductsPage.clickOneProduct()
        ProductDetailsPage.clickAddToCart()
        Navbar.verifyQuantity('(1)')
        Navbar.click('cart')
        Cart.verifyCodelength()
    })
})



//Third Test Suite

describe("My Profile test suite",()=>{

    beforeEach(()=>{
        HomePage.load()
        HomePage.Visible()
    })
    
    it("All info dispalys correctly",()=>{
       
        Navbar.click("myProfile")
        MyProfile.loaded()
        MyProfile.click('editBtn')
        MyProfile.formLoaded()
    })


    it("Edit profile page displays correctly",()=>{
       
        Navbar.click("myProfile")
        MyProfile.loaded()
        MyProfile.click('editBtn')
        MyProfile.formLoaded()
        
    })

    it("User can upload profile picture",()=>{
        
        
        Navbar.click("myProfile")
        MyProfile.loaded()
        MyProfile.click('editBtn')
        MyProfile.formLoaded()
        MyProfile.uploadingPhoto()
        MyProfile.click("uploadBntn")
        MyProfile.click("saveProfile")
        MyProfile.verifyBanner()
    })
    

    it("Please enter “…” message is triggered by empty field",()=>{
     
        Navbar.click("myProfile")
        MyProfile.loaded()
        MyProfile.click('editBtn')
        MyProfile.formLoaded()
        MyProfile.clearInput()
        MyProfile.click("saveProfile")
        MyProfile.verifyError()
    })

   

    it("Cancel button works correctly",()=>{
        
        Navbar.click("myProfile")
        MyProfile.loaded()
        MyProfile.click('editBtn')
        MyProfile.formLoaded()
        MyProfile.click("cancelBtn")
        MyProfile.loaded()
    })
})