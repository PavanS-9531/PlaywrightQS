import {test,expect} from '@playwright/test'

test('Auto Suggestion test', async ({page})=>{

    await page.goto("https://www.amazon.in/");
    //assertion w.r.t page title comparing actual with expected
    //await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
    await expect(page).toHaveURL('https://www.amazon.in/');
    await page.getByPlaceholder("Search Amazon.in").fill("mobile phone ")
    await page.waitForSelector('(//div[@class="left-pane-results-container"]/div[1])');
    let allSug = await page.locator("//div[@class='left-pane-results-container']/div").all();
    console.log(allSug);
    for(let sugg of allSug){
        let t = await sugg.textContent();
        console.log(t);
        if(t.includes('andriod')){
            
            await sugg.click();
            break;
        }
    }

    for(let i=0;i<10;i++){
        await page.keyboard.press('ArrowDown');
        await page.waitForTimeout(100);
    }

    for(let i=0;i<5;i++){
        await page.keyboard.press('ArrowUp');
        await page.waitForTimeout(100);
    }
    await page.pause();

})

//Time out for assertions by default is 5 secs
