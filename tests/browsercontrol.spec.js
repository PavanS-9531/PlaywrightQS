import {test} from '@playwright/test'
//provides the testing framework.in built test runner.
//it provides whatever is required for test script.

test('Browser actions', async ({browser})=>{
   // await : this wait for action to be completed. it will handled the promise returned by the function.
    const context = await browser.newContext();//creating one new empty browser without any history.
    //empty browser context , without cookies
    //fixture reusable code, which is used across test scripts

    const page=await context.newPage();//creating one new tab in the context
    await page.goto('https://www.amazon.in'); // navigating to the URL.
    await page.reload();//reloads the current page
    
    //await page.close(); //to close the browser
    let viewportsize = await page.viewportSize(); // returns the browser size in pixels
    console.log(viewportsize);
    await page.setViewportSize({width:1280,height:780}) //to resize the browser window
    await page.screenshot({path:'./screenshots/window1.png',fullPage:true});// for each execution it generates a new screenshot and replaces the old one.
    //if both screenshots are required , change the file name dynamically
    const page1=await context.newPage();
    await page1.goto("https://www.flipkart.com"); // it opens the new tab and navigates to the new URL.
    await page.goBack();//navigates to the previous history
    await page.goForward();//navigates to the previous history page

    const pages = await context.pages();
    console.log(pages);
    console.log(pages.length);
    let title1= await page.title();
    console.log(title1);
    let title2=await page1.title();
    console.log(title2);
    await page.close();



})
