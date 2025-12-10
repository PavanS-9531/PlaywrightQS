import {test,expect} from '@playwright/test'

test('Assertions',async ({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    let nameFld = await page.locator('//input[@id="name"]');
    let emailFld = await page.locator('//input[@id="email"]');
    expect(nameFld).toBeEditable();
    expect(emailFld).toBeAttached()
    await nameFld.fill("asdf");
    await emailFld.fill("user1@mail.com")
    await page.pause();

})

test('Assertions2',async ({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/checkbox/disabled?sublist=2");
    let chkBox = await page.getByRole('checkbox').first();
    await expect(chkBox).toBeDisabled();
    await page.waitForTimeout(1000);
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0");
    let WACheckBox = await page.locator("//span[.='WhatsApp']/preceding-sibling::input");
    await WACheckBox.check();
    await expect(WACheckBox).toBeChecked();
   // await page.pause();
    await page.waitForTimeout(1000);
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    let passwdFld = await page.getByPlaceholder("Enter your password");
    await expect(passwdFld).toBeEmpty();
    await passwdFld.fill("Welcome@123");
    
    await page.pause();

    
    
    

})



