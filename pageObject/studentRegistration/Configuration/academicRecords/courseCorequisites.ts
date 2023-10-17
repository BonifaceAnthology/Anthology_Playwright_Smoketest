import { expect } from "@playwright/test";
import { courseName, courseCode } from "./createNewCoursePage";
let text: any;
export default class courseCorequisites {
    page: any;
    private corequisitesTile: any;
    private newRuleButton: any;
    private clickCourse: any;
    private addCourseButton: any;// 
    private saveButton: any;
    private validateCourse: any;
    constructor(page: any) {
        this.page = page;
        this.corequisitesTile = page.getByText('Corequisites', { exact: true })
        this.newRuleButton = page.locator('#newButton')
        this.clickCourse = page.locator('//div[@id="preRequisteCourses"]//li[1]')
        this.addCourseButton = page.locator('//div[@id="addConditionPropertyButton"]//span[2]//i[2]')
        this.saveButton = page.locator('#prerequisiteSaveButton')
        this.validateCourse = page.locator(`'//input[@value="${text}"]'`).nth(1)
    }
    public async clickCorequisitesTile() {
        await this.corequisitesTile.click();
    }
    public async addNewRule() {
        await this.page.waitForTimeout(3000)
        await this.newRuleButton.click();
        await this.page.waitForTimeout(2000)
        await this.clickCourse.click();
        text = await this.clickCourse.innerText();
        await this.page.waitForTimeout(2000)
        await this.addCourseButton.click();
        await this.saveButton.click();
    }
    public async validatedCourse() {
        await this.page.waitForTimeout(1000)
        await expect.soft(this.validateCourse).toBeHidden()
    }

}