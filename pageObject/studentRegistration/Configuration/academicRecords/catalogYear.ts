import { expect } from "@playwright/test";
import { courseName, courseCode } from "./createNewCoursePage"
import formData from "../../../../data/studentRegistration/formData.json"
import genericClass from "../../../../genericMethods/genericClass"
import workbookData from '../../../../data/studentRegistration/WorkbookData/workbookData.json'
const genericMethod = new genericClass()
let yDiscription = genericMethod.randcharset();
let yCode = genericMethod.randcharset();
export default class catalogYear {
    page: any;
    private newYearB: any;
    private discription: any;
    private code: any;
    private searchCampus: any;
    private selectCampus: any;
    private confirmCampus: any;
    private saveYear: any;
    private assignCourse: any;
    private selectDropdown: any;
    private giveCourse: any;
    private filterCourse: any;
    private selectCourse: any;
    private confirmCourse: any;
    private inputCalenderStart: any;
    private clickCalenderStart: any;
    private clickDateStart: any;
    private inputCalenderEnd: any;
    private clickCalenderEnd: any;
    private clickDateEnd: any;
    private dropArrow: any;
    private filterArrow: any;
    private inputYear: any;
    private filterYear: any;
    private validateCatlogYear: any;
    private validateCatlogText: any;
    private validateNewCatalogText: any;
    private catalogTextAfterSave: any;
    private setting: any;
    private clearAll: any;
    private reload: any;
    constructor(page: any) {
        this.page = page;
        this.validateCatlogText = page.locator('[class="ui-primary-label ng-binding cmc-primary-label"]').first();
        this.newYearB = page.locator('[id="newButton"]');
        this.validateNewCatalogText = page.locator('[class="ui-primary-label ng-binding cmc-primary-label"]').nth(1)
        this.discription = page.locator('[id="name"]');
        this.code = page.locator('[id="code"]');
        this.searchCampus = page.locator('[id="search_display_campusesSearchControl"]');
        this.selectCampus = page.locator('[aria-label="Test Campus 2023-1"]')
        this.confirmCampus = page.getByRole('button', { name: "Select" })
        this.inputCalenderStart = page.locator('#effectiveStartDate');
        this.clickCalenderStart = page.locator('//span[@aria-controls="effectiveStartDate_dateview"]//span')
        this.clickDateStart = page.locator('[data-value="2023/8/14"]').first()
        this.inputCalenderEnd = page.locator('#effectiveEndDate');
        this.clickCalenderEnd = page.locator('//span[@aria-controls="effectiveEndDate_dateview"]//span')
        this.clickDateEnd = page.locator('[data-value="2023/8/30"]').nth(1)
        this.saveYear = page.locator('[class="cmc-toolbar-button ng-binding"]').first();
        this.catalogTextAfterSave = page.locator('[class="ui-primary-label ng-binding cmc-primary-label"]').nth(1)
        this.assignCourse = page.locator('#addCoureseCatalogButton')
        this.selectDropdown = page.locator('[class="k-icon k-i-filter"]').first()
        this.giveCourse = page.locator('[class="k-textbox"]').first()
        this.filterCourse = page.getByRole('button', { name: "Filter" }).nth(1)
        this.selectCourse = page.locator('[class="check-box styled-checkbox serach-control"]').first()
        this.confirmCourse = page.locator('[class="cmc-btn cmc-btn-primary ng-binding"]')
        this.dropArrow = page.locator('[class="k-icon k-i-more-vertical"]').nth(1)
        this.filterArrow = page.locator('[class="k-icon k-i-arrow-60-right k-menu-expand-arrow"]').nth(1)
        this.inputYear = page.locator('[class="k-textbox"]').first()
        this.filterYear = page.getByRole('button', { name: "Filter" })
        this.validateCatlogYear = page.locator('[class="cmc-link-column"]').first();
        this.setting = page.locator('[class="k-button k-split-button-arrow"]').first();
        this.clearAll = page.getByRole('link', { name: "Clear All" }).first();
        this.reload = page.locator('[title="Reload"]').first();
    }
    public async validatedCatlogYear() {
        await this.reload.click();
        await this.page.waitForTimeout(2000)
        await this.setting.click();
        await this.clearAll.click();
        await this.page.waitForTimeout(1000)
        await this.dropArrow.click()
        await this.page.waitForTimeout(1000)
        await this.filterArrow.click()
        await this.inputYear.fill(formData.catalogYearForm.yearDiscription + await yDiscription)
        await this.filterYear.click()
        await expect.soft(this.validateCatlogYear).toHaveText(formData.catalogYearForm.yearDiscription + await yDiscription)
    }
    public async fillCatalogYearInfo() {
        await expect.soft(this.validateCatlogText).toHaveText(formData.catalogYearForm.catalogText)
        await this.newYearB.click();
        await expect.soft(this.validateNewCatalogText).toHaveText(formData.catalogYearForm.newCatalogText)
        await this.discription.fill(formData.catalogYearForm.yearDiscription + await yDiscription)
        await this.code.fill(formData.catalogYearForm.yearCode + await yCode)
        await this.searchCampus.click();
        await this.selectCampus.click();
        await this.confirmCampus.click();
        await this.inputCalenderStart.fill(formData.catalogYearForm.inputStart);
        await this.inputCalenderEnd.fill(formData.catalogYearForm.inputEnd);
        await this.saveYear.click();//directly giving input values which is giving problem.
        await this.saveYear.click();
        await expect.soft(this.catalogTextAfterSave).toHaveText(`Edit Catalog Year - ${formData.catalogYearForm.yearDiscription}${await yDiscription}`)
        await this.assignCourse.click();
        await this.page.waitForTimeout(2000)
        await this.selectDropdown.click();
        await this.giveCourse.fill(`${formData.courseForm.code}${await courseCode}`)
        await this.filterCourse.click()
        await this.selectCourse.click();
        await this.confirmCourse.click();
        await genericMethod.writeTheDataInExcel(workbookData.WorkbookName, workbookData.Students.sheetName
            , workbookData.Students["Catalog Years"], `${formData.catalogYearForm.yearDiscription}${await yDiscription}`)
    }
}
