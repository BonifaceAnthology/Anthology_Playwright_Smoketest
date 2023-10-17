import { expect } from "@playwright/test";
import formData from "../../../../data/studentRegistration/formData.json"
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass()
let discription = genericMethod.randcharset();
let code = genericMethod.randcharset();
export default class courseType {
    private page: any;
    private courseTypeText: any;
    private newButton: any;
    private newCourseTypeText: any;
    private discription: any;
    private code: any;
    private save: any;
    private dropArrow: any;
    private filterArrow: any;
    private inputType: any;
    private filterType: any;
    private validateCourseType: any;
    constructor(page: any) {
        this.page = page;
        this.courseTypeText = page.getByText('Course Types', { exact: true }).nth(1);
        this.newButton = page.locator("#newButton");
        this.newCourseTypeText = page.getByText('New Course Type', { exact: true });
        this.discription = page.locator('#name');
        this.code = page.locator('#code');
        this.save = page.getByRole('button', { name: "Save & Close" });
        this.dropArrow = page.locator('//th[@data-title="Name"]//a[1]//span');
        this.filterArrow = page.locator('[class="k-icon k-i-arrow-60-right k-menu-expand-arrow"]').nth(1);
        this.inputType = page.locator('[title="Value"]');
        this.filterType = page.getByRole('button', { name: "Filter" });
        this.validateCourseType = page.locator('[class="cmc-link-column"]').first();
    }
    public async validateCourseTypeText() {
        await expect.soft(this.courseTypeText).toHaveText(formData.courseTypeForm.courseTypeText);
    }
    public async fillCourseType() {
        await this.newButton.click();
        await expect.soft(this.newCourseTypeText).toHaveText(formData.courseTypeForm.newCourseTypeText);
        await this.discription.fill(formData.courseTypeForm.discription + await discription);
        await this.code.fill(formData.courseTypeForm.code + await code);
        await this.save.click();
    }
    public async validatedCourseType() {
        await genericMethod.simulateAsyncTask();
        await this.dropArrow.click();
        await this.filterArrow.click();
        await this.inputType.fill(formData.courseTypeForm.discription + await discription);
        await this.filterType.click();
        await this.page.waitForSelector('[class="cmc-link-column"]');
        await expect.soft(this.validateCourseType).toHaveText(formData.courseTypeForm.discription + await discription);
    }
}