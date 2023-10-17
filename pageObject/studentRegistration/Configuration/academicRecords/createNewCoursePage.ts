import { expect } from "@playwright/test"
import formData from "../../../../data/studentRegistration/formData.json"
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass();
export let courseName = genericMethod.randcharset();
export let courseCode = genericMethod.randcharset();
export default class createNewCoursePage {
    page: any;
    private name: any;
    private code: any;
    private courseTypeDrop: any;
    private courseTypeSelect: any;
    private courseLevelDrop: any;
    private courseLevelSelect: any;
    private campusDrop: any;
    private campusDone: any;
    private campusSelectComplete: any;
    private saveButton: any;
    private newCourseText: any;
    private validateCodeAndName: any;
    constructor(page: any) {
        this.page = page;
        this.name = page.locator("#courseName")
        this.code = page.locator("#courseCode")
        this.courseTypeDrop = page.locator('//span[@aria-controls="courseTypeId_listbox"]//span')
        this.courseTypeSelect = page.locator("[title='ADM Program']");
        this.courseLevelDrop = page.locator('//span[@aria-controls="courseLevelId_listbox"]//span')
        this.courseLevelSelect = page.locator("[title='All Levels']")
        this.campusDrop = page.locator("#search_display_campuses")
        this.campusDone = page.locator('[aria-label="Test Campus 2023-1"]')
        this.campusSelectComplete = page.getByRole('button', { name: "Select" });
        this.saveButton = page.locator('[class="cmc-toolbar-button ng-binding"]').first();
        this.newCourseText = page.locator('[title="New Course"]');
        this.validateCodeAndName = page.locator('//*[@id="editPrimaryLabel"]/a');
    }
    public async validatedCodeName() {
        await expect.soft(this.validateCodeAndName).toHaveText(`Edit Course - ${formData.courseForm.code.toUpperCase()}${(await courseCode).toUpperCase()} - ${formData.courseForm.name}${await courseName}`)
    }
    public async validateFeilds() {
        await expect.soft(this.newCourseText).toHaveText(formData.courseForm.newCourseText)
    }
    public async fillCourseInfo() {
        await this.name.fill(formData.courseForm.name + await courseName);
        await this.code.fill(formData.courseForm.code + await courseCode);
        await genericMethod.simulateAsyncTask();
        await this.courseTypeDrop.click();
        await this.page.waitForTimeout(1000);
        await this.courseTypeSelect.click();
        await this.courseLevelDrop.click();
        await this.courseLevelSelect.click();
        await genericMethod.simulateAsyncTask();
        await this.campusDrop.click();
        await this.campusDone.click();
        await this.campusSelectComplete.click();
        await this.saveButton.click();
    }
}