import studentsData from '../../../data/studentRegistration/studentsData.json'
import { expect, Page } from '@playwright/test';
import GenericMethods from '../../../genericMethods/genericClass';
import workbookData from '../../../data/studentRegistration/WorkbookData/workbookData.json'
const genericmethod = new GenericMethods();
declare global {
    namespace NodeJS {
      interface Global {
       newStudentName:string;
      }
    }
  }
export default class Students {
    page: any;
    private buttonNewStudent: any;
    private firstName: any;
    private lastName: any;
    private sectionRecruitmentInformation: any;
    private buttonSaveAndClose: any;
    private ClickGenderDropDown: any;
    private clickMaleInGenderDropDown: any;
    private clickLeadSourseOnRecruitmentInformation: any;
    private clickCheckbox: any;
    private clickSelectInPopup: any;
    private clickAdm_Rep: any;
    private selectAdmRepFirstCheckbox: any;
    private clickSelectButtonOnAdm_Rep: any;
    private studentsSearchBar: any;
    private studentFirstName: any;
    private studentLastName: any;
    private gridcellStudentselectFirstStudent: any;
    private gridcellCampus: any;
    private contactManager: any;
    private clickTasksTile: any;
    private verifyTaskTile: any;
    private newButton: any;
    private taskTemplateDropdown: any;
    private dueDateTextBox: any;
    private changeButton: any;
    private firsttableInTheTasks: any;
    private taskDueDate: any;
    private sortDecending: any;
    private statusTextbox: any;
    private clickStatusDropdown: any;
    private statusMessage: any;
    private subscribeToSms: any;
    private smsServiceProvider: any;
    private mobileNumber: any;
    private saveOldAddressTitle:any;
    private saveOldAddress_address:any;
    private saveOldAddressTitledropdown:any;
    private oldAddressSaveButton:any
    private contactInformation:any
    constructor(page: any) {
        this.page = page
        this.gridcellCampus = page.getByRole('gridcell', { name: 'Test Campus 2023-1' })
        this.gridcellStudentselectFirstStudent = page.locator('xpath=(//td[@role="gridcell"])[1]')
        this.studentsSearchBar = page.getByRole('textbox', { name: ' ' })
        this.buttonSaveAndClose = page.getByRole('button', { name: 'Save & Close' })
        this.clickSelectButtonOnAdm_Rep = page.getByRole('button', { name: 'Select' })
        this.selectAdmRepFirstCheckbox = page.locator('//tbody//input').first();
        this.clickAdm_Rep = page.getByRole('combobox', { name: 'Adm. Rep' })
        this.clickSelectInPopup = page.getByRole('button', { name: 'Select', exact: true })
        this.clickCheckbox = page.locator('//div[@id="leadSourceTreeView"]//input[@type="checkbox"]').first();
        this.buttonNewStudent = page.getByRole('link', { name: ' New Student' })
        this.firstName = page.getByRole('textbox', { name: 'First Name' })
        this.lastName = page.getByRole('textbox', { name: 'Last Name' })
        this.sectionRecruitmentInformation = page.getByRole('button', { name: 'Recruitment Information Collapse ' }).locator('a').filter({ hasText: 'Collapse' })
        this.ClickGenderDropDown = page.locator('cmc-drop-down-list').filter({ hasText: 'Gender *' }).getByRole('button', { name: 'select' })
        this.clickMaleInGenderDropDown = page.getByText('Male', { exact: true })
        this.clickLeadSourseOnRecruitmentInformation = page.locator('cmc-multi-select div').filter({ hasText: /^Web Internet AD RoboTV Local RoboProspect Source 1-2023$/ }).locator('div')
        this.contactManager = page.locator('//span[contains(text(),"Contact Manager")]')
        this.contactInformation = page.locator('//a[contains(text(),"Contact Information")]')
        this.clickTasksTile = page.locator('//div[@class="tile-content"]//span[contains(text(),"Tasks")]')
        this.verifyTaskTile = page.locator('//div[contains(@class,"collapse-header")]//a[contains(text(),"Tasks")]')
        this.newButton = page.locator('#newButton')
        this.taskTemplateDropdown = page.locator('//span[@aria-controls="taskTemplateId_listbox"]')
        this.dueDateTextBox = page.locator('#taskDueDate')
        this.changeButton = page.locator(`#taskEditTaskTemplateChangeConfirmationDialogOkButton`)
        this.firsttableInTheTasks = page.locator(`(//td)[2]`)
        this.taskDueDate = page.locator('//th[@data-field="TaskDueDate"]//a')
        this.sortDecending = page.locator('//span[text()="Sort Descending"]')
        this.statusTextbox = page.locator('//input[@aria-label="Status"]')
        this.clickStatusDropdown = page.locator('//span[@aria-label="Status"]')
        this.statusMessage = page.locator('span[role="status"]').first();
        this.subscribeToSms = page.locator('//span[text()="Subscribe to SMS"]')
        this.smsServiceProvider = page.locator('//span[@aria-controls="smsProvider_listbox"]')
        this.mobileNumber = page.locator('#mobileNumber')
        this.saveOldAddressTitle = page.locator('//span[@aria-controls="oldAddrAddressType_listbox"]')
        this.saveOldAddressTitledropdown = page.locator('//div[@id="oldAddrAddressType-list"]//li').first();
        this.saveOldAddress_address = page.locator('//textarea[@name="oldAddrStreetAddress"]')
        this.oldAddressSaveButton = page.locator('#oldAddressSaveButton')
        

    }
    public async clickNewStudent() {
        await this.buttonNewStudent.click();
    }
    public async enterFirstName() {
        let randchars = await genericmethod.randcharset();
        global.newStudentName=studentsData.PersonalInformation.firstName + randchars;
        this.studentFirstName =global.newStudentName;
        await this.firstName.fill(this.studentFirstName);
    }
    public async enterLastName() {
        let randchars = await genericmethod.randcharset();
        this.studentLastName = studentsData.PersonalInformation.lastName + randchars;
        await this.lastName.fill(this.studentLastName);
        global.newStudentName =  global.newStudentName +" "+ this.studentLastName;
        
        
    }
    public async enterGenderAsMale() {
        await this.ClickGenderDropDown.click();
        await genericmethod.simulateAsyncTask();
        if (await this.clickMaleInGenderDropDown.isVisible()) {
            await this.clickMaleInGenderDropDown.click();
        } else {
            await this.ClickGenderDropDown.click();
            await this.clickMaleInGenderDropDown.click();
        }

    }
    public async clicksectionRecruitmentInformation() {
        await this.sectionRecruitmentInformation.click();
    }
    public async clickbuttonSaveAndClose() {
        await this.buttonSaveAndClose.click();
    }
    public async verifySuccessMessage() {
        const text = await this.page.locator('span[role="status"]').textContent()
        await expect.soft(text).toContain("The Student records were successfully saved.")
    }
    public async clickLeadSourseAndFillTheDetailsPopup() {
        await this.clickLeadSourseOnRecruitmentInformation.click();
        await this.clickCheckbox.check();
        await this.clickSelectInPopup.click();
    }
    public async clickAdm_RepAndFillTheDetailsInPopup() {
        await this.clickAdm_Rep.click();
        await this.selectAdmRepFirstCheckbox.check();
        await this.clickSelectButtonOnAdm_Rep.click();
    }
    public async VerifyUserIsAddedSuccessFully() {
        await this.studentsSearchBar.fill(global.newStudentName);
        await expect.soft(this.gridcellCampus).toHaveCount(1);
        await this.gridcellStudentselectFirstStudent.click();
        await expect.soft(this.page.locator('h1>a')).toContainText(global.newStudentName)
        await genericmethod.writeTheDataInExcel(workbookData.WorkbookName,workbookData.Students.sheetName,workbookData.Students.NewStudentName, global.newStudentName)
    }
    
    /*
    @anbarasan
    search student based on the first name and click on the First student
    */
    public async searchStudent() {
        await this.studentsSearchBar.fill(studentsData.PersonalInformation.firstName);
        await this.gridcellStudentselectFirstStudent.click();
    }
    /*
    @anbarasan
    search specific student based on the name and click on the exact student
    */
    public async searchExactStudent(nameOfTheStudent) {
        await this.studentsSearchBar.fill(nameOfTheStudent);
        await genericmethod.simulateAsyncTask();
        await this.gridcellStudentselectFirstStudent.click();
    }
    /*
    @anbarasan
   click contact manager in the right side dropdown in Students page
    */
    public async clickContactManagerLink() {
        await this.contactManager.click();
    }
    /*
    @anbarasan
   click task in the contact manager dropdown in Students page
    */
    public async clickTasktile() {
        await this.clickTasksTile.click();
    }
    /*
       @anbarasan
      verify Task tile is displayed on click of Task tile
       */
    public async verifyTasktile() {
        await expect.soft(this.verifyTaskTile).toBeVisible();
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
        */
    public async clickTaskTemplateDropdownAndFillDetails(value) {
        await this.taskTemplateDropdown.click();
        await this.page.locator(`//span[@title="${value}"]`).first().click();
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
    /*
        @anbarasan
     verify the successfull status message
        */
    public async verifyMessage() {
       let message= await this.statusMessage.textContent();
       await expect.soft(message).toContain("successfully saved.");
    }
    /*
        @anbarasan
    Click subscribeToSms check box in contact information tab
        */
    public async clicksubscribeToSms() {
        await this.subscribeToSms.click();
    }
    /*
        @anbarasan
    Click smsServiceProvider text box in contact information tab and fill the details
        */
    public async fillSmsServiceProvider() {
        await this.smsServiceProvider.click()
        await this.page.locator(`//div[@id="smsProvider-list"]//li`).first().click()
    }
    /*
        @anbarasan
    Click mobile number text box in contact information tab and fill the details
        */
    public async fillMobileNumber() {
        await this.mobileNumber.fill(studentsData.PersonalInformation.mobileNumber);
    }
    /*
        @anbarasan
    In save old address popup click title text box and fill the details
        */
    public async fillSaveOldAddressPopupTitle() {
        await this.saveOldAddressTitle.click();
        await this.saveOldAddressTitledropdown.click();
    }
    public async SaveOldAddressPopupvisible() {
        await genericmethod.simulateAsyncTask();
        return await this.saveOldAddressTitle.isVisible();
    }

    /*
        @anbarasan
    In save old address popup click address text box and fill the details
        */
    public async fillSaveOldAddressPopupAddress() {
        await this.saveOldAddress_address.fill(studentsData.PersonalInformation.address);
    }
    /*
        @anbarasan
    In save old address popup click SaveButton
        */
    public async clickoldAddressSaveButton() {
        await this.oldAddressSaveButton.click();
       
    }
    /*
        @anbarasan
   click contactInformation link in the student page
        */
    public async clickContactInformationLink() {
        await this.contactInformation.click();
       
    }


}