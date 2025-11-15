import { Locator , expect,Page } from "@playwright/test"

export class OrderSuccessPage
{
   page:Page 
    orderpaymenttext:Locator
    orderidlable:Locator

    constructor(page :Page)
    {
    this.page=page
    this.orderpaymenttext=page.locator('h3[translate="ORDER_PAYMENT"]')
    this.orderidlable=page.locator('#orderNumberLabel')
    }

    async ordersuccess()
    {
    await expect(this.orderpaymenttext).toBeVisible()
    await this.orderidlable.isVisible()
    }

}