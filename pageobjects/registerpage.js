export class RegisterPage{
    /**
     * @param{import('playwright').Page} page
     */
    


    constructor(page){
        //locators
        this.page=page;
        this.namefld = page.getByPlaceholder('Enter your name');
        this.emailfld = page.getByPlaceholder('Enter Your Email');
        this.pwdfld = page.getByPlaceholder('Enter your password');
        this.rgstrbtn= page.getByRole('button',{name:'Register'})
    } 


//function or a method
    async registerAction(username,email,pwd){
        await this.namefld.fill(username);
        await this.emailfld.fill(email);
        await this.pwdfld.fill(pwd);
        await this.rgstrbtn.click();
    }
    
    
}