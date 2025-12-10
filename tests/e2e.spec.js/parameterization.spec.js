import {test} from '@playwright/test'
import { RegisterPage } from '../../pageobjects/registerpage'
import {paradata} from "../../testdata/parameterization.json"

test('Parameterization',async({page})=>{


    for(let pdata of paradata){

        await page.goto(pdata.url);
        const reg = new RegisterPage(page);
        await reg.registerAction(pdata.username,pdata.emaild,pdata.pwd);
        await page.pause();

    }

    
})