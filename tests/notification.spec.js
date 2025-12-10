import{test,expect} from '@playwright/test'

test('notification',async({browser})=>{
    const context = await browser.newContext(
        {
            permissions:['notifications']
        }
    )

    const page = await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0');
    await page.getByRole('button',{name:'Notification'}).click();
    //await page.pause();
    

    //it is a playwright method which helps run javascript code inside browser and not in node.js

    let result = await page.evaluate(()=>Notification.permission)
    console.log('permission:',result);

    expect(result).toBe('granted')

    await page.pause();
})
