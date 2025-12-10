import {test} from '@playwright/test'

test('explicit wait', async ({page})=>{

    await page.goto('https://www.amazon.in/');

    //page level
    //await page.waitForURL(/.*amazon.*/);
    await page.pause();

    await page.waitForSelector("//input[@id='twotabsearchtextbox']");


    await page.locator("").waitFor({state:'attached',timeout:2000});

    await page.waitForEvent();
    await page.waitForLoadState('networkidle');

})