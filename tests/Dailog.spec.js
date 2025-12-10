import {test} from '@playwright/test'

test('handle popup', async({page})=>{
     await page.goto("https://demoapps.qspiders.com/ui/alert?sublist=0");

     //by default dialog/popup are to be auto dismissed
     //if you want to handle use page.on
    //multiple pop ups will be handled by page.on

     page.on('dialog', async(dialog)=>{
        await page.waitForTimeout(2000);
        console.log(dialog.type());
        console.log(dialog.message());
        await dialog.accept();// to click on ok
        
     })

     await page.getByRole('checkbox').first().check();
     await page.waitForTimeout(2000);
     await page.getByRole('button',{name:'Delete'}).click();
     await page.pause();




})

test('Handle message prompt',async ({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/alert/prompt?sublist=1");
    page.once('prompt alert', async(dialog)=>{
        console.log(dialog.type());
        console.log(dialog.message());
        await page.waitForTimeout(2000);
        await dialog.accept("tested");
    })

    await page.getByRole('checkbox').first().check();
     await page.waitForTimeout(2000);
     await page.getByRole('button',{name:'Delete'}).click();
     await page.pause();



})