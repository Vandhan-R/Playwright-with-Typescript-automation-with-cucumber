import { Locator, Page, expect} from "@playwright/test"

export class ShippingandPayment
{
    page:Page
    checkout : Locator
    payment :Locator
    ordersummary:Locator
    shippingdetails:Locator
    fname:Locator
    lname:Locator
    phnumber:Locator
    country:Locator
    city:Locator
    address:Locator
    state:Locator
    postal:Locator
    next:Locator
    selectpayment:Locator
    safepayUname:Locator
    safepaypwd:Locator
    checkoption:Locator
    pay:Locator

    constructor(page :Page)
    {
      this.page=page
      this.checkout=page.getByRole('button',{name:/CHECKOUT/i}).nth(1)
      this.payment=page.getByText('ORDER PAYMENT')
      this.ordersummary=page.getByText('ORDER SUMMARY')
      this.shippingdetails=page.getByRole('link',{name:'Edit shipping details'})
      this.fname=page.locator('[name="first_name"]')
      this.lname=page.locator('[name="last_name"]')
      this.phnumber=page.locator('[name="phone_number"]')
      this.country=page.locator('select[name="countryListbox"]')
      this.city=page.locator('[name="city"]')
      this.address= page.locator('[name="address"]')
      this.state=page.locator('[name="state_/_province_/_region"]')
      this.postal=page.locator('[name="postal_code"]')
      this.next=page.locator('#next_btn').nth(1)
      this.selectpayment= page.locator('input[name="safepay"]')
      this.safepayUname=page.locator('input[name="safepay_username"]')
      this.safepaypwd=page.locator('input[name="safepay_password"]')
      this.checkoption=page.locator('input[name="save_safepay"]')
      this.pay=page.locator('#pay_now_btn_SAFEPAY')
    }

    async fillorderdetails()
    {
    await this.checkout.click()
    await this.payment.isVisible()
    await this.ordersummary.isVisible()
    await this.shippingdetails.click()
    }

  async addshippingdetails(UserName: string,LastName:string,PhoneNumber: string,City:string,Adddress:string,State:string,Postal:string)
  {
        await expect(this.fname).toHaveValue(UserName)
        await this.lname.fill(LastName)
        await this.phnumber.fill(PhoneNumber)
        await this.country.selectOption('United States')
        await this.city.fill(City)
        await this.address.fill(Adddress)
        await this.state.fill(State)
        await this.postal.fill(Postal)
        await this.page.screenshot({ path: 'filled_checkout_form.png', fullPage: true });
        await this.next.click()
  } 

  async paymentDetails(UserName:string,SafepayPwd:string)
  {
    await this.selectpayment.check()
    await this.safepayUname.fill(UserName)
    await this.safepaypwd.fill(SafepayPwd)
    await this.checkoption.isChecked()
    await this.page.screenshot({ path: 'filled_checkout_form2.png', fullPage: true });
    await this.pay.click()
  }
}