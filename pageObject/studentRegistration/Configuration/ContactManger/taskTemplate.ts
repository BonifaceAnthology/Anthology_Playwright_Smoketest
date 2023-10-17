import GenericMethods from "../../../../genericMethods/genericClass";
import configurationdata from '../../../../data/studentRegistration/configurationpage.json';
import { expect } from '@playwright/test';
const genericclass = new GenericMethods();
export default class TaskTemplate {
    page: any;
    private clicksettings: any;
    private clickClearAllInSettings: any;
    private clickNewButton: any;
    private checkNewTaskTemplate: any;
    private description: any;
    private codeTextbox: any;
    private EventTypeDropDown: any;
    private emailSubjectTextBox: any;
    private clickSaveAndCloseButton: any;
    private clickEvenType: any;
    private codevalue: any;
    private clickReset: any;
    private filter: any;
    private CodeTextBoxInFilter: any;
    private deleteButton: any;
    private deletepopup:any;
    private deletepopupDeletebutton:any;
    constructor(page: any) {
        this.page = page;
        this.clicksettings = page.locator('xpath=//a[contains(@id,"settingsButton")]')
        this.clicksettings = page.locator('//div[contains(@id,"settingsButton")]')
        this.clickClearAllInSettings = page.getByRole('link', { name: ' Clear All' })
        this.clickNewButton = page.getByRole('link', { name: ' New' })
        this.checkNewTaskTemplate = page.getByText('New Task Template')
        this.description = page.getByRole('textbox', { name: 'Description' })
        this.codeTextbox = page.locator('#code')
        this.EventTypeDropDown = page.locator('xpath=//span[@aria-controls="taskTypeId_listbox"]')
        this.emailSubjectTextBox = page.locator('//input[@name="emailSubject"]')
        this.clickSaveAndCloseButton = page.locator('//button[@aria-label="Save & Close"]')
        this.clickEvenType = page.getByTitle('E-Mail Staff')
        this.clickReset = page.getByRole('link', { name: ' Reset to Default' })
        this.filter = page.locator('//a[@title="Show Filters"]')
        this.CodeTextBoxInFilter = page.locator("//input[@aria-label='Code']").first();
        this.deleteButton = page.locator('#deleteButton')
        this.deletepopup=page.locator('//div[contains(@style,"display: block;") and contains(@class,"k-overlay") ]')
        this.deletepopupDeletebutton=page.locator('//button[contains(text(),"Delete")]')
    }
    /*
   @anbarasan
   This function used to clear all the filters applied. 
   */
    public async clickClearAll() {
        await this.clicksettings.click();
        await this.clickClearAllInSettings.click();
    }
    /*
    @anbarasan
    This function used to click the New button
    */
    public async clickNew() {
        await this.clickNewButton.click();
    }
    /*
    @anbarasan
    This function used to check that New Task Template detail pane is displayed
    */
    public async validateNewTaskTemplate() {
        await expect.soft(this.checkNewTaskTemplate).toBeVisible();
    }
    /*
    @anbarasan
    This function used to fill the required details on New Task Template detail
    */
    public async FillNewTaskTemplatedetail() {
        await this.description.fill(configurationdata["Contact Manager"].description);
        this.codevalue = configurationdata["Contact Manager"].code + await genericclass.randcharsetwithChar(2) + await genericclass.getRandomThreeDigitNumber()
        await this.codeTextbox.fill(this.codevalue);
        await this.EventTypeDropDown.click();
        await this.clickEvenType.click();
        await this.emailSubjectTextBox.fill(configurationdata["Contact Manager"].emailSubject)
    }
    /*
    @anbarasan
    This function used click Save & close Button
    */
    public async clickSaveAndCloseButtonOnDetailPane() {
        await this.clickSaveAndCloseButton.click();
    }
    /*
     @anbarasan
     This function used click Reset To Default in the settings
     */
    public async clickRestToDefault() {
        await this.clicksettings.click();
        await genericclass.simulateAsyncTask();
        if (await this.clickReset.isVisible()) {
            await this.clickReset.click();
        } else {
            await this.clicksettings.click();
            await this.clickReset.click();
        }

    }
    /*
   @anbarasan
   This function used click Filter option
   */
    public async clickFilter() {
        if (await this.filter.isVisible()) {
            await this.filter.click();
        } else {
            //do nothing already element is clicked
        }
    }
    /*
   @anbarasan
   This function used click Filter option
   */
    public async FilterByCode() {
        await this.CodeTextBoxInFilter.fill(this.codevalue);
        await this.CodeTextBoxInFilter.press('Enter')
    }
    /*
       @anbarasan
       This function used verify that the task Template is created Successfully.
       */
    public async VerifyTaskTemplateIsCreated() {
        await expect.soft(this.page.locator(`//tr//td[text()='${this.codevalue.toUpperCase()}']`)).toBeVisible();
    }
    /*
       @anbarasan
       This function used delete the task Template which was created Successfully.
       */
    public async DeleteTaskTemplateCreated() {
        await expect.soft(this.page.locator(`//tr//td[text()='${this.codevalue.toUpperCase()}']`)).toBeVisible();
        await this.page.locator(`//tr//td[text()='${this.codevalue.toUpperCase()}']`).click();
        await genericclass.simulateAsyncTask();
        await this.deleteButton.click();
        if(this.deletepopup.isVisible()){
            this.deletepopupDeletebutton.click();
        }
}
}