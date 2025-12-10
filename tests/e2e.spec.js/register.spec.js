import {test} from '@playwright/test'
import { RegisterPage } from '../../pageobjects/registerpage'
import regdata from "../../testdata/registerdata.json"

test('Registering the user',async({page})=>{

    await page.goto(regdata.url);
    const regstr = new RegisterPage(page);
    //await regstr.registerAction('abc','abc@gmail.com','abc');
    await regstr.registerAction(regdata.username,regdata.emaild,regdata.pwd);
    await page.pause();

})