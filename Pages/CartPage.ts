import { expect , Locator, Page} from '@playwright/test'
export class VerifyCartPage
{
page:Page
cartbadge :Locator
cartlink :Locator
totaltext:Locator

constructor(page :Page)
{
this.page=page
this.cartbadge=page.locator('span[class="cart ng-binding"]').nth(1)
this.cartlink=page.locator('#shoppingCartLink svg')
this.totaltext=page.locator('span[class*=roboto-light]').nth(1)
}

async Cartpage()
{
    await expect (this.cartbadge).toHaveCount(1)
    await this.cartlink.click()
    await expect(this.totaltext).toHaveText('TOTAL:')
}
}