import { Given, When, Then, setDefaultTimeout} from '@cucumber/cucumber';
setDefaultTimeout(60 * 1000); 
import { chromium } from 'playwright';
import {LoginPage} from '../../Pages/login.ts'
import {Searchandaddproduct} from '../../Pages/ProductDashboard.ts'
import {VerifyCartPage} from '../../Pages/CartPage.ts'
import{ShippingandPayment} from '../../Pages/PaymentDetails.ts'
import {OrderSuccessPage} from '../../Pages/OrderSuccess.ts'
       
  Given('the user logs in with username {string} and password {string}', async function (this:any, UserName :string, Password:string)
   {
       const browser=await chromium.launch() // gets browser object
       const context= await browser.newContext()
       this.page=await context.newPage()

       const login= new LoginPage(this.page)    
       await login. LaunchWebsite()
       await login.FillLoginDetail(UserName,Password)
   });

When('the user searches for the product {string} and sets the price range from {string} to {string}', async function (this:any, productname : string, min :string, max:string) 
    {
        this. searchAddproduct= new Searchandaddproduct(this.page)
        await this.searchAddproduct.SearchProduct()
    });

 When('the user selects the product {string} adds it to the cart and proceeds to the cart page', async function (this:any,prod1:string,) 
 {     
        await this.searchAddproduct.addproduct()
    });

 Then('user verifies that the cart page has total text {string}', async function (this:any, label1 :string) 
 {      
          const cartPage=new VerifyCartPage(this. page)
          await cartPage.Cartpage()
     });


 Then('the users checkouts and order payment, order summary details should be displayed',async  function (this:any) {
           this.shippingandpayment=new ShippingandPayment(this.page)
            await this.shippingandpayment.fillorderdetails()
    });

When('the user enters shipping details:', async function ( this:any,dataTable ) 
{
   const data = dataTable.hashes()[0]
   await this.shippingandpayment.addshippingdetails (data.UserName ,data.LastName,data.PhoneNumber,data.City,data.Address,data.State,data.Postal)
});


 When('the user proceeds with payment option and adds the safepay username {string} and password {string}', async function (this:any,UserName :string, SafepayPwd:string)
  {           
          await this.shippingandpayment.paymentDetails(UserName,SafepayPwd)

});

 Then('after user completes the payment order placed success message should be displayed', async function (this:any)
   {
         const ordrsuces= new OrderSuccessPage(this.page)
         await ordrsuces.ordersuccess()
    });
