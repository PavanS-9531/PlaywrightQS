import {test} from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('File Download test', async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.locator("#writeArea").fill("Testing the download again");
    let custompath ='D:/Personal/QSpidersPW/filedownload/';
    let customfilename="example.txt";
    let fullpath = path.join(custompath,customfilename);
    console.log(fullpath);
  //  await page.getByPlaceholder("Filename").fill(fullpath);
    
    
    let downloadpromise=page.waitForEvent('download'); //waiting for event to happen
    await page.getByRole('button',{name:'Download',exact:true}).click(); //
    let downloadedfile = await downloadpromise;
    //another way of handling promise
 // const [downloadedfile1]=  await Promise.all([
   //     page.waitForEvent('download'), //1st promise : it is a listener wait for the download event to happen
   //     page.getByRole('button',{name:'Download',exact:true}).click() //2nd promise
   // ])


    await downloadedfile.saveAs(fullpath);

    //temp folder
    console.log('Download temp path', await downloadedfile.path())


    //verify if it is saved

    if(fs.existsSync(fullpath)){
        console.log('File is saved')
    }else{
        console.log('File is not saved')
    }

})