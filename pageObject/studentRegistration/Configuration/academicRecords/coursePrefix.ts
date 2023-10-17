import { expect } from "@playwright/test";
import formData from "../../../../data/studentRegistration/formData.json"
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass()
let discription = genericMethod.randcharset();
let code = genericMethod.randcharset();
export default class courseprefix {
    page: any;
    private coursePrefixText: any;
    private newButton: any;
    private newCoursePrefixText: any;
    private name: any;
    private code: any;
    private campus: any;
    private clickCampus: any;
    private selectCampusButton: any;
    private saveButton: any;
    private dropArrow: any;
    private filterArrow: any;
    private inputValue: any;
    private filter: any;
    private validateCoursePrefix: any;
    constructor(page: any) {
        this.page = page;
        this.coursePrefixText = page.getByText('Course Prefixes', { exact: true }).nth(1);
        this.newButton = page.locator('#newButton');
        this.newCoursePrefixText = page.getByText('New Course Prefix', { exact: true });
        this.name = page.locator('#name');
        this.code = page.locator('#code');
        this.campus = page.locator('[cmc-id="search_display_campusesSearchControl"]');
        this.clickCampus = page.locator('[aria-label="Test Campus 2023-1"]');
        this.selectCampusButton = page.getByRole('button', { name: "Select" });
        this.saveButton = page.getByRole('button', { name: "Save", exact: true });
        this.dropArrow = page.locator('//th[@data-title="Name"]//a[1]//span');
        this.filterArrow = page.locator('[class="k-icon k-i-arrow-60-right k-menu-expand-arrow"]').nth(1);
        this.inputValue = page.locator('[title="Value"]');
        this.filter = page.getByRole('button', { name: "Filter" });
        this.validateCoursePrefix = page.locator('[class="cmc-link-column"]').first();
    }
    public async validateCoursePrefixText() {
        await expect.soft(this.coursePrefixText).toHaveText(formData.coursePrefixForm.coursePrefixText);
    }
    public async fillCoursePrefix() {
        await this.newButton.click();
        await genericMethod.simulateAsyncTask()
        await expect.soft(this.newCoursePrefixText).toHaveText(formData.coursePrefixForm.newCoursePrefixText);
        await this.name.fill(formData.coursePrefixForm.discription + await discription);
        await this.code.fill(formData.coursePrefixForm.code + await code);
        await this.campus.click();
        await this.clickCampus.click();
        await this.selectCampusButton.click();
        await this.saveButton.click();
    }
    public async validatedCoursePrefix() {
        await this.page.waitForTimeout(3000);
        await this.dropArrow.click();
        await this.filterArrow.click();
        await this.inputValue.fill(formData.coursePrefixForm.discription + await discription);
        await this.filter.click();
        await this.page.waitForSelector('[class="cmc-link-column"]');
        await expect.soft(this.validateCoursePrefix).toHaveText(formData.coursePrefixForm.discription + await discription);
    }
}