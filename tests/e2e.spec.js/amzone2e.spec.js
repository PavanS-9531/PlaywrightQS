import{test,expect} from '@playwright/test'
import { AmazonHomePage } from '../../pageobjects/amazonpage'
import {Addtocart} from '../../pageobjects/addtocartamznpage'

test('amazon e2e script', async({browser}) => {
    const context= await browser.newContext()
    const page= await context.newPage()

    //creating object for pom page

  const amznpg = new AmazonHomePage(page)
  await amznpg.amazonurl('https://www.amazon.in/')
  await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
  
  await amznpg.searchproduct('sumsung mobile')
  await amznpg.selectfromautosugg('20000')


  const pagepromise = context.waitForEvent('page')
  await amznpg.productsumsung.click()
  const newpage = await pagepromise

  await expect(page).toHaveTitle('Amazon.in : samsung mobile phone under 20000')
  const addpro= new Addtocart(newpage)
  await addpro.productaddtocart()
  
  //cart validation

  await expect(addpro.cartproductname.first()).toContainText('Samsung Galaxy A35 5G')
  await expect(addpro.subtotal.nth(1)).toContainText('₹19,699.00')
  await page.pause()



    
});