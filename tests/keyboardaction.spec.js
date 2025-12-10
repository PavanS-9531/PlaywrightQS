import {test} from '@playwright/test'

test('KeyBoard Actions', async ({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/keyboard?sublist=0")
    await page.locator("//input[@name='handleInput']").click();
    await page.keyboard.press('A');
    await page.keyboard.type('playwright',{delay:100})

    await page.keyboard.press('Control+A');
    await page.waitForTimeout(1000)
    await page.keyboard.press('Control+X');
    await page.waitForTimeout(1000)
    await page.keyboard.press('Control+V');
    await page.waitForTimeout(1000)
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(1000)

    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.up('Control');

    await page.keyboard.press('Delete');

    await page.keyboard.press('Shift+a')

    await page.locator('[name="handleInput"]').press('Enter')

    await page.pause();
})

test('key',async({page})=>{

})