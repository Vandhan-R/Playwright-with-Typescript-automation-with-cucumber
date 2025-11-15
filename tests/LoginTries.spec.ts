import {test , expect} from '@playwright/test'



test('Online Shopping ', async({page}) =>{

    const UserName='Tester123'
    const Email='tester1@gmail.com'
    const Password='Tester@1234'

//launching the website
    await page.goto('https://advantageonlineshopping.com/#/')

//Creating new user aacount
   await page.locator('#menuUserLink').click()
   await page.locator('[class*="create-new-account"]').click()
   await page.locator('input[name="usernameRegisterPage"]').fill(UserName)
   await page.locator('input[name="emailRegisterPage"]').fill(Email)
   await page.locator('input[name="passwordRegisterPage"]').fill('Tests@1234')
   await page.locator('input[name="confirm_passwordRegisterPage"]').fill('Tests@1234')
   await expect(page.locator('input[name="allowOffersPromotion"]')).toBeChecked()
   await page.locator('input[name="i_agree"]').check()
   await page.locator('#register_btn').click()

//if username already exists

// Wait for and assert error message directly on the locator
  const errormsg = page.locator('label.center.block.smollMargin.invalid');
  await expect(errormsg).toHaveText('User name already exists');

// Get the text content and print it
  const errorText = await errormsg.textContent();
  console.log('Error message:', errorText);

    if (errorText?.includes('User name already exists')) 
    {
    const alreadyAccountLink = page.getByRole('link', { name: 'ALREADY HAVE AN ACCOUNT?' });
    await expect(alreadyAccountLink).toBeVisible();
    await alreadyAccountLink.click();
    await page.locator('input[name="username"]').fill(UserName)
    await page.locator('input[name="password"]').fill(Password)
    await page.getByRole('button',{name:'SIGN IN'}).click()
    }
    
    //searching for products and adding it
    await page.getByPlaceholder('Search').fill('speakers')
    await page.locator('#menuSearch').click()
})