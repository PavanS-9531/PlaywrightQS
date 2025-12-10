import {test} from '@playwright/test'
import {RegisterPage} from '../../pageobjects/registerpage'
import excel from 'exceljs'
import path from 'path'
import {readdatafromexcel} from '../../genericutility/excelutility.js'

test('Register from Excel',async ({page})=>{

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    let book=new excel.Workbook();
    let excelpath = path.join(__dirname,'../../testdata/exceldata.xlsx')
    console.log(excelpath)
    let username = await readdatafromexcel(excelpath,'Sheet1',1,1);
    let email = await readdatafromexcel(excelpath,'Sheet1',2,1);
    let pwd =await readdatafromexcel(excelpath,'Sheet1',3,1);
   // await book.xlsx.readFile(excelpath)
   // let sheet= await book.getWorksheet('Sheet1')
  // let username = await sheet.getRow(1).getCell(1).toString()
  // let email = await sheet.getRow(2).getCell(1).toString()
  // let pwd=await sheet.getRow(3).getCell(1).toString()

     
    const regstr = new RegisterPage(page);
    await regstr.registerAction(username,email,pwd)




})

test('Read Multiple data', async({page})=>{
    let book = new excel.Workbook();
    let excelpath = path.join(__dirname,'../../testdata/exceldata.xlsx')
    await book.xlsx.readFile(excelpath);

    let sheet = book.getWorksheet('Sheet1');

    for(let row=1;row<=sheet.rowCount;row++){
        for(let column=1;column<=sheet.actualColumnCount;column++){
            let data=sheet.getRow(row).getCell(column).toString();
            console.log(data);
        }
    }

})

test('Write to Excel', async({page})=>{
    let book= new excel.Workbook();
    let excelpath = path.join(__dirname,'../../testdata/exceldata.xlsx')
    await book.xlsx.readFile(excelpath);
    let sheet = await book.addWorksheet('Sheet2');
    sheet.getRow(1).getCell(1).value='AI-ML';
    await book.xlsx.writeFile(excelpath);

})