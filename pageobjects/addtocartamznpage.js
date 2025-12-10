export class Addtocart{
     /**
   * @param {import('playwright').Page} page  //to get suggestion
   */

constructor(page)

{
   this.page = page
   this.addcartbtn= page.locator("//input[@id='add-to-cart-button']")
   this.cartbtn= page.locator("//input[@class='a-button-input']/following-sibling::span[.=' Cart ']")
   this.gotocartbtn= page.getByText('Go to Cart',{exact:true})
   this.cartproductname= page.locator('//span[@class="a-truncate-cut"]')
   this.subtotal= page.locator('[class="a-size-medium a-color-base sc-price sc-white-space-nowrap"]')

}


async productaddtocart()
{
    await this.addcartbtn.nth(1).click()
    await this.gotocartbtn.click()

}


}