import { expect } from "@playwright/test";
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass();
export default class Employers {
    page: any;
    private employerHeader:any;
    private newButton: any;
    private newEmployerHeader:any;
    private employerName:any;
    private employerCode:any;
    private employerPhoneNumber:any;
    private SaveAndCloseButton: any;
    private emCode:any;
    private CodeTextBoxInFilter: any;
    constructor(page: any) {
        this.page = page;
        this.employerHeader=page.locator('//a[contains(text(),"Employers")]')
        this.newButton = page.locator('#newButton')
        this.newEmployerHeader = page.locator('//h2[text()="New Employer"]')
        this.employerName = page.locator('#employerName')
        this.employerCode = page.locator('#employerCode')
        this.employerPhoneNumber = page.locator('#phoneNumber')
        this.SaveAndCloseButton = page.locator('//button[@aria-label="Save & Close"]')
        this.CodeTextBoxInFilter = page.locator("//input[@aria-label='Code']").first();
    }
    /*
    @anbarasan
    This function used click Save Button
    */
    public async clickSaveAndCloseButton() {
        await this.SaveAndCloseButton.click();
    }
    /*
    @anbarasan
    This function verfies the Employers page 
    */
    public async verifyEmpolyerspage() {
        await expect.soft(this.employerHeader).toBeVisible();

    }
    /*
    @anbarasan
    This function fill the name of the employer 
    */
    public async fillNewEmpolyerDetails(name,code,phoneNumber) {
        this.emCode=code+await genericMethod.randcharsetwithChar(4)
        await this.employerName.fill(name+await genericMethod.randcharsetwithChar(4));
        await this.employerCode.fill(this.emCode);
        await this.employerPhoneNumber.fill(phoneNumber);
    }
    /*
    @anbarasan
    This function verfies the New Employers page 
    */
    public async verifyNewEmpolyerspage() {
        await expect.soft(this.newEmployerHeader).toBeVisible();

    }

     /*
       @anbarasan
      click new button 
       */
      public async clickNewButton() {
        await this.newButton.click();
    }
     /*
   @anbarasan
   This function used click Filter option
   */
   public async FilterByCode() {
    await this.CodeTextBoxInFilter.fill(this.emCode);
    await this.CodeTextBoxInFilter.press('Enter')
}
     /*
   @anbarasan
   verify the employer created using the code
   */
   public async verifyTheEmployerIsCreated() {
    await this.page.locator(`//td[text()="${this.emCode}"]`)
   
}

}