import {test,expect} from '@playwright/test'
import path from 'path'

test('File download', async({page})=>{

    page.goto("https://testautomationpractice.blogspot.com/");
    console.log(path.join(__dirname,'../fileupload/Object.txt'));
    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,'../fileupload/Object.txt'))

    await page.getByRole('button',{name:'Upload Single File'}).click();
    await page.waitForTimeout(2000);
    await expect(page.locator('#singleFileStatus')).toBeVisible();
    
})

test('Multiple File uploads',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname,'../fileupload/Object.txt'),path.join(__dirname,'../fileupload/Object1.txt')])
    await page.getByRole('button',{name:'Upload Multiple Files'}).click();
    await page.waitForTimeout(1500);
    await expect(page.getByText('Multiple files selected:')).toBeVisible();
    await page.pause();


})