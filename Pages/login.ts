import { Locator } from "@playwright/test"
import {Page} from '@playwright/test'

export class LoginPage
{
menulink : Locator
username : Locator
password : Locator
rememberme : Locator
signin :Locator
page:Page

constructor(page:Page)
{
this.page=page
this.menulink =page.locator('#menuUserLink')
this.username=page.locator('input[name="username"]')
this.password=page.locator('input[name="password"]')
this.rememberme=page.locator('input[name="remember_me"]')
this.signin=page.locator('#sign_in_btn')
}

async LaunchWebsite()
{
    await this.page.goto('https://advantageonlineshopping.com/#/')
}

//login to user aacount
async FillLoginDetail(UserName : string,Password : string)
{
    await this.menulink.click()
    await this.username.fill(UserName)
    await this.password.fill(Password)
    await this.rememberme.check()
    await this.signin.click()
}
}
