import {Locator, Page } from "@playwright/test"
export class Searchandaddproduct
{
   page: Page
   menusearch:Locator
   enterprod:Locator
   close:Locator
   prod1:Locator
   color:Locator
   quantity:Locator
   addtocart:Locator

    constructor (page : Page)
    {
   this.page=page
   this.menusearch=page.locator('#menuSearch').first()
   this.enterprod=page.locator('#autoComplete')
   this.close=page.locator('[data-ng-click="closeSearchForce()"]')
   this.prod1=page.getByText('HP S9500 Bluetooth Wireless Speaker').nth(1)
   this.color=page.getByTitle('WHITE')
   this.quantity =page.locator('.plus')
   this.addtocart=page.getByRole('button',{name:'ADD TO CART'})

    }

    async SearchProduct()
    {
   await this.menusearch.click();
   await this.enterprod.fill('speakers')
   await this.enterprod.press('Enter');
   await this.close.click()

   // Evaluate JS in the page to set the slider
   await this.page.evaluate(() => 
    {
    const slider = document.querySelector('#slider') as any; // replace '#slider' with the actual slider id or class
    if (slider?.noUiSlider) 
      {
        slider.noUiSlider.set([50, 150]); // set min=50, max=150
    }
    })
    }

 async addproduct()
 {
    await this.prod1.click()
    await this.color.click()
    await this.quantity.click()
    await this.addtocart.click()
 }

}