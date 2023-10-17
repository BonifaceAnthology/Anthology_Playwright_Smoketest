import formData from "../../../../data/studentRegistration/formData.json"
import { expect } from "@playwright/test";
import { courseName, courseCode } from "./createNewCoursePage";
import genericClass from "../../../../genericMethods/genericClass"
import workbookData from '../../../../data/studentRegistration/WorkbookData/workbookData.json'
const genericMethod = new genericClass()
export default class coursePage {
  page: any;
  private newButton: any;
  private checkCourse: any;
  private dropArrow: any;
  private goToFilter: any;
  private giveCourse: any;
  private clickFilter: any;
  private courseText: any;
  private courseTextBoxInFilter: any;
  private clickFilteredCourse: any;
  private booklistTile: any;
  private newBookList: any;
  private courseBookListName: any;
  private courseBookListcode: any;
  private newBookListSaveButton: any;
  private booklistcode:any
  private newBookListDeleteButton:any
  private DeleteButtonpopup:any
  constructor(page: any) {
    this.page = page;
    this.newButton = page.locator('#newButton');
    this.dropArrow = page.locator('//th[@data-title="Course"]//a[1]//span');
    this.goToFilter = page.locator('[class="k-icon k-i-arrow-60-right k-menu-expand-arrow"]').nth(1)
    this.giveCourse = page.locator('[title="Value"]');
    this.clickFilter = page.getByRole('button', { name: "Filter" })
    this.checkCourse = page.locator('[class="cmc-link-column"]').first();
    this.courseText = page.locator('//*[@id="navigationSplitter"]/div[3]/div[2]/cns-course-list/section/div/cmc-collapse/div/div[1]/div[1]/a')
    this.courseTextBoxInFilter = page.locator('//input[@aria-label="Course"]')
    this.clickFilteredCourse = page.locator('//tbody//a').first();
    this.booklistTile = page.locator('//div[text()="Book Lists"]');
    this.newBookList = page.locator('#NewBookList');
    this.courseBookListName = page.locator('#courseBookListName');
    this.courseBookListcode = page.locator('#courseBookListCode');
    this.newBookListSaveButton = page.locator('#saveModelContentButton');
    this.newBookListDeleteButton = page.locator('#DeleteBookList');
    this.DeleteButtonpopup = page.locator('#confirmBookListDeleteDialogOkButton');
  }
  public async clickNew() {
    await this.newButton.click();
  }
  public async validateCourseField() {
    await expect.soft(this.courseText).toHaveText(formData.courseForm.courseText)
  }
  public async validatedCourse() {
    await this.page.waitForTimeout(1000)
    await this.dropArrow.click();
    await this.goToFilter.click();
    await this.giveCourse.fill(formData.courseForm.name + await courseCode);
    await this.clickFilter.click();
    await genericMethod.simulateAsyncTask()
    await expect.soft(this.checkCourse).toHaveText(`${formData.courseForm.code}${(await courseCode).toUpperCase()} - ${formData.courseForm.name}${await courseName}`)
    await genericMethod.writeTheDataInExcel(workbookData.WorkbookName, workbookData.Students.sheetName
      , workbookData.Students["New Courses"], `${formData.courseForm.code}${await courseCode}`)
  }
  public async selectCourse() {
    await this.page.waitForTimeout(2000)
    await this.dropArrow.click();
    await this.goToFilter.click();
    let course = await genericMethod.readTheDataInExcel(workbookData.WorkbookName, workbookData.Students.sheetName
      , workbookData.Students["New Courses"])
    await this.giveCourse.fill(course);
    await this.clickFilter.click();
    await this.page.waitForTimeout(1000)
    await this.checkCourse.click();
  }
  /*
  @anbarasan 
  This function is used to type the course value in the filter section.
  */
  public async fillCourseValueInFilterInput() {
    let course = await genericMethod.readTheDataInExcel(workbookData.WorkbookName, workbookData.Students.sheetName
      , workbookData.Students["New Courses"])
    await this.courseTextBoxInFilter.fill(course);
    await genericMethod.simulateAsyncTask();
    await this.courseTextBoxInFilter.press('Enter');
   
  }
  /*
  @anbarasan 
  This function is used to click the first result that appear on the filter
  */
  public async clickFirstFilteredCourse()
  {
    await this.clickFilteredCourse.click();
  }
  /*
  @anbarasan 
  This function is used to click the first result that appear on the filter
  */
  public async clickBookListTile()
  {
    await this.booklistTile.click();
  }
  /*
  @anbarasan 
  This function is used to click the new Book list button on the book list page
  */
  public async clicknewBookListbutton()
  {
    await this.newBookList.click();
  }
  /*
  @anbarasan 
  This function is used to fill the name and code in the course BookList popup
  */
  public async fillnewBookListpopup(bookName,bookCode)
  {
    this.booklistcode=bookCode+await genericMethod.randcharset()
    await this.courseBookListName.fill(bookName);
    await this.courseBookListcode.fill(this.booklistcode);
  }
  /*
  @anbarasan 
  This function is used to click save button new course BookList popup
  */
  public async clicknewBookListpopupSaveButton()
  {
    await this.newBookListSaveButton.click();
  }
  /*
  @anbarasan 
  This function is used to validate new BookList added to the course
  */
  public async validatenewBookListsaved()
  {
    await expect.soft(this.page.locator(`//td[text()="${this.booklistcode.toUpperCase()}"]`)).toBeVisible();
  }
  /*
  @anbarasan 
  This function is used to delete the new BookList added to the course
  */
  public async deletenewBookListsaved()
  {
    await this.page.locator(`//td[text()="${this.booklistcode.toUpperCase()}"]`).click();
    await this.newBookListDeleteButton.click();
    await this.DeleteButtonpopup.click();
  }
  
}





















