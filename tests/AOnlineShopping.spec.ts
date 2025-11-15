import {test , expect} from '@playwright/test'
import {LoginPage} from '../Pages/login'
import {Searchandaddproduct} from '../Pages/ProductDashboard'
import {VerifyCartPage} from '../Pages/CartPage'
import{ShippingandPayment} from '../Pages/PaymentDetails'
import {OrderSuccessPage} from '../Pages/OrderSuccess'

test('Online Shopping ', async({page}) =>
{
    const UserName='Tester123'
    const Email='tester1@gmail.com'
    const LastName='Tez'
    const Password='Tester@1234'
    const PhoneNumber='28765432456'
    const City='Fayetteville'
    const Adddress='31 Spooner St'
    const State='New York'
    const Postal='02108'
    const SafepayPwd='Qwerty@1234'

  //launching the website login to user aacount
  const login= new LoginPage(page)    
  await login. LaunchWebsite()
  await login.FillLoginDetail(UserName,Password)

  //searching for products and adding it
  const searchAddproduct= new Searchandaddproduct(page)
  await searchAddproduct.SearchProduct()
  await searchAddproduct.addproduct()

  //verifying cart page
  const cartPage=new VerifyCartPage(page)
  await cartPage.Cartpage()

  //fill out the checkout page , entering shipping and payment details
   const shippingandpayment=new ShippingandPayment(page)
   await shippingandpayment.fillorderdetails()
   await shippingandpayment.addshippingdetails (UserName,LastName,PhoneNumber,City,Adddress,State,Postal)
   await shippingandpayment.paymentDetails(UserName,SafepayPwd)
  
  // verifying the order success page
  const ordrsuces= new OrderSuccessPage(page)
  await ordrsuces.ordersuccess()
})


