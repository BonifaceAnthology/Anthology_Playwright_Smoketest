import studentsData from '../../../../data/studentRegistration/studentsData.json'
import { expect, Page } from '@playwright/test';
import GenericMethods from '../../../../genericMethods/genericClass';
const genericmethod = new GenericMethods();

export default class Tasks {
    page: any;
    private newButton: any;
    private taskTemplateDropdown: any;
    private dueDateTextBox: any;
    private changeButton: any;
    private firsttableInTheTasks: any;
    private taskDueDate: any;
    private sortDecending: any;
    private statusTextbox: any;
    private clickStatusDropdown: any;
    private listboxcheck:any;
    private tasktemplateTextbox:any;
    private tasktemplatedropdownFirsttList:any;
    private tasktemplatedropdownSecondtList:any;
    constructor(page: any) {
        this.page = page
        this.newButton = page.locator('#newButton')
        this.taskTemplateDropdown = page.locator('//span[@aria-controls="taskTemplateId_listbox"]')
        this.dueDateTextBox = page.locator('#taskDueDate')
        this.changeButton = page.locator(`#taskEditTaskTemplateChangeConfirmationDialogOkButton`)
        this.firsttableInTheTasks = page.locator(`(//td)[2]`)
        this.taskDueDate = page.locator('//th[@data-field="TaskDueDate"]//a')
        this.sortDecending = page.locator('//span[text()="Sort Descending"]')
        this.statusTextbox = page.locator('//input[@aria-label="Status"]')
        this.clickStatusDropdown = page.locator('//span[@aria-label="Status"]')
        this.listboxcheck-=page.locator('//ul[@id="taskTemplateId_listbox" and @aria-hidden="false"]')
        this.tasktemplateTextbox=page.locator('//span[@aria-controls="taskTemplateId_listbox"]')
        this.tasktemplatedropdownFirsttList=page.locator('(//div[@id="taskTemplateId-list"]//li//div//span)[1]')
        this.tasktemplatedropdownSecondtList=page.locator('(//div[@id="taskTemplateId-list"]//li//div//span)[3]')
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
       click task template dropdown and fill the Task template from the list
       value = which task template we need to select we can pass that value
       returns the selected value
        */
    public async clickTaskTemplateDropdownAndFillDetails() {
        await this.tasktemplateTextbox.click();
        await genericmethod.simulateAsyncTask();
        let selectedValue = await this.tasktemplatedropdownFirsttList.innerText(); 
        await this.tasktemplatedropdownFirsttList.click();
        return selectedValue
    }
    public async clickSecondListInTaskTemplateDropdown() {
        await this.tasktemplateTextbox.click();
        await genericmethod.simulateAsyncTask();
        let selectedValue = await this.tasktemplatedropdownSecondtList.innerText(); 
        await this.tasktemplatedropdownSecondtList.click();
        return selectedValue
    }
    /*
        @anbarasan
       click Due Date text box and fill the due date for the task.
        */
    public async clickDueDateAndFillTheDetails() {
        await this.dueDateTextBox.click();
        let dueDate = await genericmethod.EndDate();
        await this.dueDateTextBox.fill(dueDate);
    }
    /*
        @anbarasan
      verify Task is created Successully
      value we can pass the task template name
        */
    public async verifyTaskIsCreatedFortheStudent(value) {
        await expect.soft(this.page.locator(`//tr//td//a[text()="${value}"]`).first()).toBeVisible();
    }
    /*
        @anbarasan
     click the task created
     value we can pass the task template name to be clicked
        */
    public async clickTaskCreatedFortheStudent(value) {
        await (this.page.locator(`//tr//td//a[text()="${value}"]`).first()).click();
    }
    /*
        @anbarasan
     click the first task displayed
        */
    public async clickFirstTaskDisplayed() {
        await (this.page.locator(`//tr//td`).first()).click();
    }
    /*
        @anbarasan
     click change on the popup
        */
    public async clickChange() {
        await this.changeButton.click();
    }
    /*
        @anbarasan
     click decending order in the due date
        */
    public async clickDecendingOrderInDueDate() {
        let dueDate = await genericmethod.EndDate();
        let date = await this.firsttableInTheTasks.textContent()
        if (date == dueDate) {
        } else {
            await this.taskDueDate.first().click();
            await this.sortDecending.click();
        }
    }
    /*
      @anbarasan
   Enter status in filter
      */
    public async statusFilter() {
        await this.statusTextbox.fill(studentsData.contactManger.Task.status1);
        await this.statusTextbox.press('Enter');
    }
    /*
        @anbarasan
     change the task status to closed
        */
    public async clickStatusAndChangeStatus(status) {
        await this.clickStatusDropdown.click();
        await this.page.locator(`//span[text()="${status}"]`).click();
    }
   

}