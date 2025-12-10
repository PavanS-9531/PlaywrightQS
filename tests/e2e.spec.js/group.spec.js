import {test,expect} from '@playwright/test'

test.describe('Grouping',()=>{

    test('authentication',async({browser})=>{
        const context = await browser.newContext({
            httpCredentials:{
            username:'admin',
            password:'admin'
        }

        })

        const page = await context.newPage();
        await page.goto('https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/')
       // await msg= await page.getByRole('paragraph',{name:'congratulations with valid credentials'}).textContent()
         await expect(page.locator('//body/p')).toContainText('congratulations with valid credentials');
         await page.pause()

    });

    test('prompt popup', async({page})=>{
        await page.goto('https://demoapps.qspiders.com/ui/alert/prompt?sublist=1')
        page.once('dialog',async(dialog)=>{
            console.log(dialog.type());
            console.log(dialog.message());
            await page.waitForTimeout(2000)
            await dialog.accept('playwright')
        })

    await page.locator('//tbody//tr[1]//td[1]/input').check()
    await page.getByRole('button', {name:'Delete'}).click()
    await page.pause()
    });

    test('Upload multiple files',async({page})=>{
         await page.goto('https://testautomationpractice.blogspot.com/')
         console.log(__dirname)
         console.log(path.join(__dirname,'../fileupload/Object.txt'))

         await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname,'../fileupload/'),path.join(__dirname,'../fileupload/')])
    })
    
})