import {test} from '@playwright/test'

test('Mouse Actions', async({page})=>{

    //left click
    await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0');
    await page.getByRole('button',{name:'Yes'}).click();

    //right click
    await page.goto('https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1');
    await page.getByRole('button',{name:'Right Click'}).click({button:'right'});
    
    //double click
    await page.goto('https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2');
    await page.getByRole('button',{name:'Yes'}).dblclick();
    //or
    //await page.getByRole('button',{name:'Yes'}).click({clickCount:2});
    
    //Disabled button
    await page.goto('https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4');
    await page.locator('#submit').click({force:true});
    let isChecked = page.locator('#submit').isChecked();
    console.log(isChecked)
    //or
    //await page.locator('#submit').dispatchEvent('click');

    //mouse down
    await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0");
    await page.locator('#circle').hover();
    await page.mouse.down();
    await page.waitForTimeout(2000);
    await page.mouse.up();

    //scroll
    await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical');
    await page.waitForTimeout(2000);
    await page.mouse.wheel(0,1000);//pixel values
    await page.pause();

    //scroll to an element
    await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical');
    await page.waitForTimeout(2000);
    await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded();
    
    await page.pause();

    //drag and drop
     await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2');
     let source = await page.getByText('Laptop Charger');
     let target = await page.locator('');
    await source.dragTo(target);  

   //drag and drop using mouse
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2');
    await page.getByText('Laptop Charger').hover();
    await page.mouse.down()
    await page.locator("//div[.='Laptop Accessories']/parent::div").hover();
    await page.mouse.up();

    //by giving x and y co ordinates
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop?sublist=0')
    await page.getByText('Drag Me').hover();
    await page.mouse.down();
    await page.waitForTimeout(2000);
    await page.mouse.move(200,100);


    //by getting the location of an element


    //=========================
     await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2');
     await page.getByText('Laptop Charger').hover();
     await page.mouse.down();
     let box=await page.locator("//div[.='Laptop Accessories]/parent::div").boundingBox();//returns the position of the element x,y,width, height
     console.log(box);
     await page.mouse.move(box.x,box.y);
     await page.mouse.up();
     await page.pause();




})