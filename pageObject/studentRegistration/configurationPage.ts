import GenericMethods from "../../genericMethods/genericClass";
import configurationdata from '../../data/studentRegistration/configurationpage.json';
import { expect } from '@playwright/test';
const genericclass = new GenericMethods();
export default class configurationPage {
    page: any;
    private courseButton: any;
    private programButton: any
    private gradeScaleButton: any;
    private clicksettings: any;
    private clickClearAllInSettings: any;
    private clickNewButton: any;
    private checkNewTaskTemplate: any;
    private description: any;
    private codeTextbox: any;
    private EventTypeDropDown: any;
    private EvenTypeTextBox: any;
    private emailSubjectTextBox: any;
    private clickSaveButton: any;
    private catalogYearButton: any;
    private banksButton: any;
    private clickSaveAndCloseButton: any;
    private clickEvenType: any;
    private codevalue: any;
    private clickReset: any;
    private filter: any;
    private CodeTextBoxInFilter: any;
    private deleteButton: any;
    private jobTitleButton: any;
    private salaryTypeButton: any;
    private fundSourceButton: any;
    private academicYearButton: any;
    private courseRefundPoliciesButton: any;
    private refundPoliciesButton: any;
    private packagingMethodButton: any;
    private courseTypeButton: any;
    private coursePrefixButton: any;
    private skillsButton: any;
    private resourcesButton: any;
    private calendarButton: any;
    constructor(page: any) {
        this.page = page;
        this.courseButton = page.locator('#lists-treeview > div.row.cmc-treeview-container.k-widget.k-treeview.cmc-treeview-hide-disabled > ul > li.k-item.k-first > ul > li:nth-child(14) > div > span');
        this.programButton = page.locator('//*[@id="lists-treeview"]/div[2]/ul/li[1]/ul/li[28]/div/span')
        this.gradeScaleButton = page.locator('//*[@id="lists-treeview"]/div[2]/ul/li[1]/ul/li[21]/div/span')
        this.clicksettings = page.locator('xpath=//a[contains(@id,"settingsButton")]')
        this.clicksettings = page.locator('//div[contains(@id,"settingsButton")]')
        this.clickClearAllInSettings = page.getByRole('link', { name: ' Clear All' })
        this.clickNewButton = page.getByRole('link', { name: ' New' })
        this.checkNewTaskTemplate = page.getByText('New Task Template')
        this.description = page.getByRole('textbox', { name: 'Description' })
        this.codeTextbox = page.locator('#code')
        this.EventTypeDropDown = page.locator('xpath=//span[@aria-controls="taskTypeId_listbox"]')
        this.EvenTypeTextBox = page.locator('//input[@name="taskTypeId_input"]')
        this.emailSubjectTextBox = page.locator('//input[@name="emailSubject"]')
        this.clickSaveButton = page.getByRole('button', { name: 'Save', exact: true })
        this.catalogYearButton = page.locator('//*[@id="lists-treeview"]/div[2]/ul/li[1]/ul/li[6]/div/span')
        this.banksButton = page.getByText('Banks', { exact: true })
        this.clickSaveAndCloseButton = page.locator('//button[@aria-label="Save & Close"]')
        this.catalogYearButton = page.locator('//*[@id="lists-treeview"]/div[2]/ul/li[1]/ul/li[6]/div/span')
        this.clickEvenType = page.getByTitle('E-Mail Staff')
        this.clickReset = page.getByRole('link', { name: ' Reset to Default' })
        this.filter = page.locator('//a[@title="Show Filters"]')
        this.CodeTextBoxInFilter = page.locator("//input[@aria-label='Code']").first();
        this.deleteButton = page.locator('#deleteButton')
        this.jobTitleButton = page.getByText('Job Titles', { exact: true })
        this.salaryTypeButton = page.getByText('Salary Types', { exact: true });
        this.fundSourceButton = page.getByText('Fund Sources', { exact: true });
        this.academicYearButton = page.getByText('Academic Years', { exact: true });
        this.courseRefundPoliciesButton = page.getByText('Course Refund Policies', { exact: true });
        this.refundPoliciesButton = page.getByText('Refund Policies', { exact: true });
        this.packagingMethodButton = page.getByText('Packaging Methods', { exact: true });
        this.courseTypeButton = page.getByText('Course Types', { exact: true });
        this.coursePrefixButton = page.getByText('Course Prefixes', { exact: true });
        this.skillsButton = page.getByText('Skills', { exact: true });
        this.resourcesButton = page.getByText('Resources', { exact: true });
        this.calendarButton = page.getByText('Calendars', { exact: true });
    }
    public async clickCourses() {
        await this.courseButton.click();
    }
    public async clickProgram() {
        await this.programButton.click();
    }
    public async clickGradeScale() {
        await this.gradeScaleButton.click();
        await this.page.waitForTimeout(2000)
    } /*
    @anbarasan
    This function used to clear all the filters applied. 
    */
    public async clickClearAll() {
        await this.clicksettings.click();
        await this.clickClearAllInSettings.click();
    }
    /*
    @anbarasan
    This function we can pass the text that we need to select in the configuration list
    */
    public async clickFousedSearch(searchtext) {
        await this.page.locator(`xpath=//span[text()='${searchtext}']`).click();
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
    This function used click Save Button
    */
    public async clickSaveAndCloseButtonOnDetailPane() {
        await this.clickSaveAndCloseButton.click();
    }
    public async clickCatalogYear() {
        await this.catalogYearButton.click();
    }
    /*
    @suraj
    This function to click on banks 
    */
    public async clickBank() {
        await this.banksButton.click()
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
        await this.deleteButton.click();
    }
    // @suraj
    // This function to click on jobTitle 
    public async clickJobTitle() {
        await this.jobTitleButton.click()
    }
    // @suraj
    // This function to click on salaryType 
    public async clickSalaryType() {
        await this.salaryTypeButton.click()
    }
    // @suraj
    // This function to click on fundSource 
    public async clickFundSource() {
        await this.fundSourceButton.click()
    }
    // @suraj
    // This function to click on academic year
    public async clickAcademicYear() {
        await this.academicYearButton.click()
    }
    // @suraj
    // This function to click on course refund policies
    public async clickCourseRefundPolicies() {
        await this.courseRefundPoliciesButton.click()
    }
    // @suraj
    // This function to click on refund policies
    public async clickRefundPolicies() {
        await this.refundPoliciesButton.click()
    }
    // @suraj
    // This function to click on PackagingMethod
    public async clickPackagingMethod() {
        await this.packagingMethodButton.click()
    }
    // @suraj
    // This function to click on CourseType
    public async clickCourseType() {
        await this.courseTypeButton.click()
    }
    // @suraj
    // This function to click on CoursePrefix
    public async clickCoursePrefix() {
        await this.coursePrefixButton.click()
    }
    // @suraj
    // This function to click on skills
    public async clickSkills() {
        await this.skillsButton.click()
    }
    // @suraj
    // This function to click on resources
    public async clickResources() {
        await this.resourcesButton.click()
    }
    // @suraj
    // This function to click on calendar
    public async clickCalendar() {
        await this.calendarButton.click()
    }
}