import {expect, test} from '@playwright/test'

test('Element Control',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");

    //text field
    await page.getByPlaceholder('Enter your name').fill('abc');
    let attrVal = await page.getByPlaceholder('Enter your name').getAttribute('value');
    console.log(attrVal);

    //buttons
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0");
    await page.getByRole('button',{name:'Yes'}).click();
   // await page.waitForTimeout(2000);

    //links
    await page.goto("https://demoapps.qspiders.com/ui/link?sublist=0");
    await page.getByRole('link',{name:'Kids'}).click();
   // await page.waitForTimeout(2000);

    //checkbox
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0");
    await page.locator("#domain_a").check();
    await expect(page.locator("#domain_a")).toBeChecked();
    //await page.waitForTimeout(3000);

    //radiobutton
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0");
    await page.locator("#attended").check();
    //await page.waitForTimeout(2500);

    //Image
    await page.goto("https://demoapps.qspiders.com/ui/image?sublist=0");
    await page.getByAltText("order placed").click();
    //await page.waitForTimeout(2000);

    //toggle
    //await page.goto("https://demoapps.qspiders.com/ui/toggle?sublist=0");
    //await page.locator("input#tog").click();
    //await page.waitForTimeout(5000);

    //dropdown
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
    await page.locator("#country_code").selectOption('+14');
    await page.locator("#select3").selectOption('Canada');
    await page.locator("#select5").selectOption('British Columbia');
    //await page.waitForTimeout(3000);

    //multi select
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1");
    await page.waitForTimeout(2000);
    await page.locator("#select-multiple-native").selectOption(['Fjallraven - Foldsac...', 'Mens Casual Premium ...','Mens Cotton Jacket...']);
    await page.getByRole('Button',{name:'Add'}).click();
    let productname= await page.locator('//tbody//tr//td[1]').allTextContents();
     //returns visible text content of matching elements matching 
    console.log(productname);
    let singleproduct = await page.locator('//tbody//tr[1]//td[1]').textContent() // returns visible text of single element
    console.log(singleproduct);
    //await page.waitForTimeout(2000)

    //Select by Index
    // await page.locator("#select-multiple-native").selectOption([{index:1},{index:2}])
    
    //select by label
    //await page.locator("#select-multiple-native").selectOption([{label:''},{label:''}])


    //index: index starts from 0
    //value
    //labels
})