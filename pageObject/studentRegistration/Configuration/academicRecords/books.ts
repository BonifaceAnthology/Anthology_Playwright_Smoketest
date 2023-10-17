import { expect } from "@playwright/test";
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass()
export default class Books {
    page: any;
    private newButton:any;
    private nameTextBox:any;
    private codeTextBox:any;
    private randomBookcode:any;
    private saveAndClose:any;
    private codeTextboxInFilter:any;
    constructor(page: any) {
        this.page = page;
        this.newButton=page.locator(`#newButton`)
        this.nameTextBox=page.locator(`#name`)
        this.codeTextBox=page.locator(`#code`)
        this.saveAndClose=page.locator(`//button[@aria-label="Save & Close"]`)   
        this.codeTextboxInFilter=page.locator(`//input[@aria-label="Code"]`)   
    }
    /*
    This method is used to click on the new button in the books page
    @anbarasang@anthology.com
    */
    public async clickBooksNewButton() {
      await this.newButton.click();
    }
    /*
    This method is used to fill the name textbox in the books page
    @anbarasang@anthology.com
    */
    public async fillBookName(bookName) {
      await this.nameTextBox.fill(bookName);
    }
    /*
    This method is used to fill the code textbox in the books page
    @anbarasang@anthology.com
    */
    public async fillBookNameCode(codeName) {
      this.randomBookcode=codeName+ (await genericMethod.randcharset()).toUpperCase();
      await this.codeTextBox.fill(this.randomBookcode);
    }
    /*
    This method is used click save & close button new books details page
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
      await this.codeTextboxInFilter.fill(this.randomBookcode);
      await genericMethod.simulateAsyncTask();
      await this.codeTextboxInFilter.press('Enter');

    }
    /*
    This method is used validate that book is created scuccessfully.
    @anbarasang@anthology.com
    */
    public async validateBookIsAdded() {
      await expect.soft(this.page.locator(`//td[text()="${this.randomBookcode}"]`)).toBeVisible();
    }


   
}