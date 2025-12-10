import {test} from "@playwright/test"

test('Sample first script',async({browser}) => {
    //test execution happens on playwright browser, which is installed during the installation of playwright.
   const context = await browser.newContext();//it does not contain any cookies or sessions. A new incognito browser
   const page= await context.newPage();//creating one new tab in browser context.
   await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
   const url = page.url();
   console.log(url);

   let title = await page.title();
   console.log(title);
   await page.setViewportSize({width:1080,height:720});
   let viewport = page.viewportSize();
   console.log(viewport);

//browser will be closed automatically once the execution is completed. No need to write closing statement
})

test('Locators practice', async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
    await page.getByPlaceholder('Enter your name').fill('abc');
    await page.getByPlaceholder('Enter your Email').fill('abc@gtalk.com');
    await page.getByPlaceholder('Enter your password').fill("P@ssWord");
    await page.pause();
    await page.getByRole("button",{name:'Register'}).click();
    await page.pause();

    await page.locator("//input[@id=name]").fill();//xpath
    await page.locator('#name').fill()//css

})

test('practice',async ({page})=>{
    await page.getByPlaceholder("Enter your name").fill("abc");
    await page.getByText('Register',{exact:true}).first();
    await page.getByText('Register',{exact:true}).nth(3);//index starts from 0
    //These methods can be used for any getBy methods.
    //nth()
    //first()
    //last()

    const heading=await page.getByText('Register',{exact:true}).first().textContent();//returns the text of the matching element.
    console.log(heading);
    //getByAlttext is used to locate images.
    await page.getByAltText('broken image').nth(0).click();
    await page.pause();
    //the element should have 'alt' attribute.
    //===========
    //getByLabel
    //label tag is available for text fields, by using label tag you can locate text field and fill forms
    await page.getByLabel('Email Id').fill('xyz@gmail.com');//used to fill text fields having labels
    await page.getByRole('link');

    //============================
    //page,locator is used when you want css or xpath expression
    await page.locator('css/xpath expression')

    //get by title

    await page.goto("https://demo.nopcommerce.com");
    await page.getByTitle("Show products in category Electronics"),nth(1).click()

    //get by test id
    await page.getByTestId('AV').click();


})


