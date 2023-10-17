import webclientCredential from "../../../data/studentRegistration/webclientCredential.json"
import ClassScheduleDate from "../../../data/studentRegistration/classScheduleData.json"
import { expect } from '@playwright/test';
import GenericMethods from '../../../genericMethods/genericClass';
const genericClass = new GenericMethods();
import workbookdata from '../../../data/studentRegistration/WorkbookData/workbookData.json'
export default class ClassScheduling {
  page: any;
  private classscheduleHeading: any;
  private campusId: any;
  private clearFilterButton: any;
  private termButton: any;
  private searchBox: any;
  private SelectCheckBox: any;
  private verifyTerm: any;
  private clickSelect: any;
  private applyFilterButton: any;
  private courseButton: any;
  private searchBoxCourse: any;
  private SelectCoursePageCheckBox: any;
  private clickNewButton: any;
  private fillSectCode: any;
  private startDate: any;
  private enddate: any;
  private fillstudents: any;
  private sectionDeliveryDropDown; any;
  private passOrFailDropDown: any;
  private buttonSaveAndClose: any;
  private countOfClassScheduled: any;
  private classScheduledtermCount: any;
  private classScheduledtermCountAfterSaved: any;
  private coursetextbox:any;
  private descriptionTextBox:any;
  private selectCourseDropDown:any;
  private sectionCode:any;
  constructor(page: any) {
    this.page = page
    this.classscheduleHeading = page.getByRole('heading', { name: 'Class Scheduling' })
    this.campusId = page.getByRole('combobox', { name: 'campusId' })
    this.clearFilterButton = page.getByRole('button', { name: 'Clear Filters' })
    this.applyFilterButton = page.getByRole('button', { name: 'Apply Filters' })
    this.termButton = page.getByRole('combobox', { name: 'Terms' })
    this.searchBox = page.getByPlaceholder('Search Code and Name')
    this.searchBoxCourse = page.getByPlaceholder('Search Code or Name')
    this.verifyTerm = page.getByText(webclientCredential.credential.term, { exact: true })
    this.SelectCheckBox = page.getByRole('checkbox', { name: webclientCredential.credential.term })
    this.SelectCoursePageCheckBox = page.getByRole('checkbox', { name: webclientCredential.credential.course })
    this.clickSelect = page.getByRole('button', { name: 'Select' })
    this.courseButton = page.getByRole('combobox', { name: 'Course', exact: true })
    this.clickNewButton = page.getByRole('link', { name: ' New' })
    this.fillSectCode = page.getByRole('textbox', { name: 'Section Code', exact: true })
    this.startDate = page.getByLabel('Class/Section Start\n                        *')
    this.enddate = page.getByLabel('Class/Section End\n                        *')
    this.fillstudents = page.getByRole('spinbutton', { name: 'Max. Studs.' })
    this.passOrFailDropDown = page.locator('cmc-drop-down-list').filter({ hasText: 'Pass/Fail Course *' }).getByRole('button', { name: 'select' })
    this.buttonSaveAndClose = page.getByRole('button', { name: 'Save & Close' })
    this.sectionDeliveryDropDown = page.locator('xpath=//span[@aria-controls="deliveryMethodId_listbox"]')
    this.coursetextbox=page.getByRole('combobox', { name: 'Course', exact: true })
    this.descriptionTextBox=page.getByRole('textbox', { name: 'Description' });
    this.selectCourseDropDown=page.locator("xpath=(//span[@class='k-select'])[3]")
  }
  public async verifyClassSchedulePage() {
    await expect.soft(this.page.locator('h1')).toContainText(ClassScheduleDate.Data.header)
  }
  public async verifyClassSchedulecampus() {
    await expect.soft(this.campusId).toHaveValue(webclientCredential.credential.campusName);
  }
  public async clearFilter() {
    await this.clearFilterButton.click();
  }
  public async applyFilter() {
    await this.applyFilterButton.click();
  }
  public async clickNew() {
    await this.clickNewButton.click();
  }
  public async verifyNewClassSection() {
    await expect.soft(this.page.getByText('New Class Section')).toBeVisible();
  }
  public async fillTerm() {
    await this.termButton.click();
    await this.searchBox.fill(webclientCredential.credential.term);
    await this.searchBox.press('Enter');
    await this.SelectCheckBox.click();
    await this.clickSelect.click();
  }
  public async fillCourse() {
    await this.courseButton.click();
    await this.searchBoxCourse.fill(webclientCredential.credential.course);
    await this.searchBoxCourse.press('Enter');
    await this.SelectCoursePageCheckBox.click();
    await this.clickSelect.click();
  }
  public async fillCourseAndDescription(){
    await genericClass.simulateAsyncTask();
    await this.selectCourseDropDown.click();
    await this.coursetextbox.fill(webclientCredential.credential.course);
    await genericClass.simulateAsyncTask();
    await this.coursetextbox.press('Enter');
    await this.descriptionTextBox.fill(webclientCredential.credential.course+"environment")
  }
  public async fillInstructor() {
    await this.page.locator('cmc-drop-down-list').filter({ hasText: 'Instructor *' }).getByRole('button', { name: 'select' }).click();
    await genericClass.simulateAsyncTask();
    await this.page.getByRole('combobox', { name: 'Instructor' }).fill('adv');
    await this.page.getByText('Advisor, Teacher').click();
  }
  public async fillSectionCode() {
     this.sectionCode = await genericClass.randcharset();
    await this.fillSectCode.fill(this.sectionCode);
  }
  public async enterClassStartDate() {
    await this.startDate.click();
    let date = await genericClass.Date();
    await this.startDate.fill(date);
  }
  public async enterClassEndDate() {
    await this.enddate.click();
    let endDate = await genericClass.EndDate();
    await this.enddate.fill(endDate);
  }
  public async classScheduledCount() {
    let date = await genericClass.Date();
    this.classScheduledtermCount = await this.page.locator(`xpath=//td[text()=('${date}')]`).count();
  }
  public async verifyClassScheduleSaved() {
    let date = await genericClass.Date();
    await genericClass.simulateAsyncTask();
    this.classScheduledtermCountAfterSaved = await this.page.locator(`xpath=//td[text()=('${date}')]`).count();
    await expect.soft(this.page.locator(`xpath=//td[text()=('${date}')]`)).toHaveCount(this.classScheduledtermCount + 1);
    await genericClass.writeTheDataInExcel(workbookdata.WorkbookName,workbookdata.Students.sheetName,workbookdata.Students["Class Scheduling"],`Course: "${webclientCredential.credential.course}", class section code: "${this.sectionCode}"`)
  }
  public async fillMaxstudents() {
    await this.fillstudents.fill('100')
  }
  public async sectionDeliveryMethod() {
    await this.sectionDeliveryDropDown.click();
    await this.page.getByText('DELIVERYLP').first().click();
  }
  public async passOrFailCourse() {
    await this.passOrFailDropDown.click();
    await this.page.getByRole('option', { name: 'Pass/Fail (Required)' }).click();
  }
  public async clickbuttonSaveAndClose() {
    await this.buttonSaveAndClose.click();
  }
}

