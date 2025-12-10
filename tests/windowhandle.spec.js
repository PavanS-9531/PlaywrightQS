import {test} from '@playwright/test'

test('multiple window handling',async({browser})=>{

    const context =await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0");


   // let pagepromise = context.waitForEvent('page')
    //await page.getByRole('button',{name:'view more'}).first().click()
    //const newpage = await pagepromise

    const[newpage] =await Promise.all([
        context.waitForEvent('page'),
         await page.getByRole('button',{name:'view more'}).first().click()
    ])

    await newpage.getByRole('button',{name:'Add to Cart'}).click();

    let pages = await context.pages();
    console.log(pages.length);
   let title1= await pages[0].title();//returns the title of the first tab
    console.log(title1);
    let title2=await pages[1].title();
    console.log(title2)

    await pages[0].bringToFront();// to highlight a particular page

    await pages[1].close();




})