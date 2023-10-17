import { expect } from "@playwright/test";
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass()
export default class ProgramGroups {
    page: any;
    private newButton:any;
    private discriptionTextBox:any;
    private codeTextBox:any;
    private randomNewProgramGroupscode:any;
    private saveAndClose:any;
    private codeTextboxInFilter:any;
    constructor(page: any) {
        this.page = page;
        this.newButton=page.locator(`#newButton`)
        this.discriptionTextBox=page.locator(`#name`)
        this.codeTextBox=page.locator(`#code`)
        this.saveAndClose=page.locator(`//button[@aria-label="Save & Close"]`)   
        this.codeTextboxInFilter=page.locator(`//input[@aria-label="Code"]`)   
    }
    /*
    This method is used to click on the new button in the Program Groups page
    @anbarasang@anthology.com
    */
    public async clickProgramGroupsNewButton() {
      await this.newButton.click();
    }
    /*
    This method is used to fill the name textbox in the New Program Groups page
    @anbarasang@anthology.com
    */
    public async fillDiscriptiontextbox(discription) {
      await this.discriptionTextBox.fill(discription);
    }
    /*
    This method is used to fill the code textbox in the New Program Groups page
    @anbarasang@anthology.com
    */
    public async fillNewProgramGroupsCode(codeName) {
      this.randomNewProgramGroupscode=codeName+ (await genericMethod.randcharset()).toUpperCase();
      await this.codeTextBox.fill(this.randomNewProgramGroupscode);
    }

    /*
    This method is used click save & close button details page
    @anbarasang@anthology.com
    */
    public async clickSaveAndClose() {
      await this.saveAndClose.click();
    }
    /*
    This method is used apply filter in code.
    @anbarasang@anthology.com
    */
    public async applyCodeFilter() {
      await this.codeTextboxInFilter.fill(this.randomNewProgramGroupscode);
      await genericMethod.simulateAsyncTask();
      await this.codeTextboxInFilter.press('Enter');

    }
    /*
    This method is used validate that new Programgroups is created scuccessfully.
    @anbarasang@anthology.com
    */
    public async validateNewProgramGroupIsAdded() {
      await expect.soft(this.page.locator(`//td[text()="${this.randomNewProgramGroupscode}"]`)).toBeVisible();
    }


   
}