import studentsData from '../../data/studentRegistration/studentsData.json'
import { expect, Page } from '@playwright/test';
import GenericMethods from '../../genericMethods/genericClass';
const genericmethod = new GenericMethods();
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
    private clickCheckboxProspectSource12023: any;
    private clickCheckboxDicecom: any;
    private clickSelectInPopup: any;
    private clickAdm_Rep: any;
    private fillAdm_RepInSearch: any;
    private selectCampusMangement: any;
    private clickSelectButtonOnAdm_Rep: any;
    private clickTVLocalRoboDropdown: any;
    private clickCorsairConsulting: any;
    private clickCareerBuilder: any;
    private studentsSearchBar: any;
    private studentFirstName: any;
    private studentLastName: any;
    private gridcellStudentselectFirstStudent: any;
    private gridcellCampus: any;
    private contactManager:any;
    private clickTasksTile:any;
    private verifyTaskTile:any;
    private newButton:any;
    private taskTemplateDropdown:any;
    private dueDateTextBox:any;
    private changeButton:any;

    constructor(page: any) {
        this.page = page
        this.gridcellCampus = page.getByRole('gridcell', { name: 'Test Campus 2023-1' })
        this.gridcellStudentselectFirstStudent = page.locator('xpath=(//td[@role="gridcell"])[1]')
        this.studentsSearchBar = page.getByRole('textbox', { name: ' ' })
        this.buttonSaveAndClose = page.getByRole('button', { name: 'Save & Close' })
        this.clickCareerBuilder = page.getByRole('checkbox', { name: 'Career Builder' })
        this.clickCorsairConsulting = page.getByRole('treeitem', { name: ' Corsair Consulting, Inc. Corsair Consulting, Inc.' }).locator('div').filter({ hasText: 'Corsair Consulting, Inc.' }).locator('span').first()
        this.clickTVLocalRoboDropdown = page.getByRole('treeitem', { name: ' TV Local Robo TV Local Robo' }).locator('div').filter({ hasText: 'Corsair Consulting, Inc.' }).locator('span').first()
        this.clickSelectButtonOnAdm_Rep = page.getByRole('button', { name: 'Select' })
        this.selectCampusMangement = page.getByRole('checkbox', { name: 'Campus Management' })
        this.fillAdm_RepInSearch = page.getByPlaceholder('Search Name')
        this.clickAdm_Rep = page.getByRole('combobox', { name: 'Adm. Rep' })
        this.clickSelectInPopup = page.getByRole('button', { name: 'Select', exact: true })
        this.clickCheckboxDicecom = page.getByRole('checkbox', { name: 'Dice.com' })
        this.clickCheckboxProspectSource12023 = page.getByRole('checkbox', { name: 'Prospect Source 1-2023' })
        this.buttonNewStudent = page.getByRole('link', { name: ' New Student' })
        this.firstName = page.getByRole('textbox', { name: 'First Name' })
        this.lastName = page.getByRole('textbox', { name: 'Last Name' })
        this.sectionRecruitmentInformation = page.getByRole('button', { name: 'Recruitment Information Collapse ' }).locator('a').filter({ hasText: 'Collapse' })
        this.ClickGenderDropDown = page.locator('cmc-drop-down-list').filter({ hasText: 'Gender *' }).getByRole('button', { name: 'select' })
        this.clickMaleInGenderDropDown = page.getByText('Male', { exact: true })
        this.clickLeadSourseOnRecruitmentInformation = page.locator('cmc-multi-select div').filter({ hasText: /^Web Internet AD RoboTV Local RoboProspect Source 1-2023$/ }).locator('div')
        this.contactManager=page.locator('//span[contains(text(),"Contact Manager")]')
        this.clickTasksTile=page.locator('//div[@class="tile-content"]//span[contains(text(),"Tasks")]')
        this.verifyTaskTile=page.locator('//div[contains(@class,"collapse-header")]//a[contains(text(),"Tasks")]')
        this.newButton=page.locator('#newButton')
        this.taskTemplateDropdown=page.locator('//span[@aria-controls="taskTemplateId_listbox"]')
        this.dueDateTextBox=page.locator('#taskDueDate')
        this.changeButton=page.locator(`#taskEditTaskTemplateChangeConfirmationDialogOkButton`)
        
    }
    public async clickNewStudent() {
        await this.buttonNewStudent.click();
    }
    public async enterFirstName() {
        let randchars = await genericmethod.randcharset();
        this.studentFirstName = studentsData.PersonalInformation.firstName + randchars;
        await this.firstName.fill(this.studentFirstName);
    }
    public async enterLastName() {
        let randchars = await genericmethod.randcharset();
        this.studentLastName = studentsData.PersonalInformation.lastName + randchars;
        await this.lastName.fill(this.studentLastName);
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
        await this.clickCheckboxProspectSource12023.check();
        await this.clickTVLocalRoboDropdown.click();
        await this.clickCheckboxDicecom.check();
        await this.clickCorsairConsulting.click();
        await this.clickCareerBuilder.check();
        await this.clickSelectInPopup.click();
    }
    public async clickAdm_RepAndFillTheDetailsInPopup() {
        await this.clickAdm_Rep.click();
        await this.fillAdm_RepInSearch.fill('campus');
        await this.selectCampusMangement.check();
        await this.clickSelectButtonOnAdm_Rep.click();
    }
    public async VerifyUserIsAddedSuccessFully() {
        await this.studentsSearchBar.fill(this.studentFirstName);
        await expect.soft(this.gridcellCampus).toHaveCount(1);
        await this.gridcellStudentselectFirstStudent.click();
        await expect.soft(this.page.locator('h1>a')).toContainText(this.studentFirstName)
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
    await this.page.locator(`//span[@title="${value}"]`).click();
}
/*
    @anbarasan
   click Due Date text box and fill the due date for the task.
    */
   public async clickDueDateAndFillTheDetails() {
    await this.dueDateTextBox.click();
    let dueDate=await genericmethod.EndDate();
    await this.dueDateTextBox.fill(dueDate);  
}
/*
    @anbarasan
  verify Task is created Successully
  value we can pass the task template name
    */
   public async verifyTaskIsCreatedFortheStudent(value) {
    await expect.soft(this.page.locator(`//tr//td//a[text()="${value}"]`)).toBeVisible();
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
 click change on the popup
    */
 public async clickChange() {
    await this.changeButton.click();
}
}