import {test} from '@playwright/test'

test('iFrame', async({page})=>{

    await page.goto('https://demoapps.qspiders.com/ui/frames?sublist=0');
    //const frame = await page.locator('//iframe[@class="w-full h-96"]').frameLocator() - another way of locating the frame
    const frame = await page.frameLocator('//iframe[@class="w-full h-96"]');
    await frame.getByLabel('Username:').fill('abc');//we can use getbylabel to fill out text fields
    await frame.getByLabel('Password').fill('abc123');
    await frame.getByRole('button',{name:'Login'}).click();
    await page.pause();
    
})

test('nested frame', async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/frames/nested?sublist=1');
    const parentframe = await page.frameLocator('//iframe[@class="w-full h-96"]');
    const childframe = await parentframe.frameLocator('iframe');
    await childframe.getByLabel('Email:').fill('abc@abc.com')
    await childframe.getByLabel('Password',{exact:'true'}).fill('password@123');
    await childframe.getByLabel('Confirm Password:').fill('password@123');
    await childframe.getByRole('button',{name:'Sing Up'}).click();
    await page.pause();
    const allframes = await page.frames()// it will return all the frames of a page
    console.log(allframes.length);
    await page.mainFrame() //switch to top level frame
})