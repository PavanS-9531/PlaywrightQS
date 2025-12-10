import {test,expect} from '@playwright/test'

test('Authentication Pop up',async ({browser})=>{
    //playwright approach only for test level
    //for global level use it in config file under 'use section
   const context= await browser.newContext({
    httpCredentials:{//This can also be mentioned in config file under 'use' section if it is common across project
        username:'admin',
        password:'admin'

    }
   })
     
   const page =await context.newPage();
   await page.goto('https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/');
   
   await page.pause();
})

//pass creds with URL

test('creds with url',async({page})=>{

    await page.goto('https://admin:admin@basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/');
   
    const p = await page.getByText('congratulations with valid credentials').textContent();
    
    await expect(p).toContain('congratulations with valid credentials')


})