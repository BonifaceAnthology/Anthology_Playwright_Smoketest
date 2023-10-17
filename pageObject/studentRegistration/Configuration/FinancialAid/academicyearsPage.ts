import { expect } from "@playwright/test";
import formData from "../../../../data/studentRegistration/formData.json";
import genericClass from "../../../../genericMethods/genericClass";
const genericMethod = new genericClass();
let discription = genericMethod.randcharset();
let code = genericMethod.randcharset();
export default class academicYearsPage {
    page: any;
    private academicYearText: any;
    private new: any;
    private newAcademicYearText: any;
    private discription: any;
    private code: any;
    private save: any;
    private setting: any;
    private clearAll: any;
    private downArrow: any;
    private filterArrow: any;
    private inputDiscrption: any;
    private filter: any;
    private validateAcademicYear: any;
    constructor(page: any) {
        this.page = page;
        this.academicYearText = page.getByText('Academic Years', { exact: true }).nth(1);
        this.new = page.locator('#newButton');
        this.newAcademicYearText = page.getByText('New Academic Year', { exact: true });
        this.discription = page.locator('#name');
        this.code = page.locator('#code');
        this.save = page.getByRole('button', { name: "Save", exact: true });
        this.setting = page.locator('[class="k-button k-split-button-arrow"]').first();
        this.clearAll = page.getByRole('link', { name: "Clear All" });
        this.downArrow = page.locator('[class="k-icon k-i-more-vertical"]').nth(1);
        this.filterArrow = page.locator('[class="k-icon k-i-arrow-60-right k-menu-expand-arrow"]').nth(1);
        this.inputDiscrption = page.locator('[title="Value"]');
        this.filter = page.getByRole('button', { name: "Filter" });
        this.validateAcademicYear = page.locator('[class="cmc-link-column"]').first();
    }
    public async validateAcademicYearText() {
        await expect.soft(this.academicYearText).toHaveText(formData.academicYearData.academicYearText);
    }
    public async fillAcademicYear() {
        await this.new.click();
        await this.page.waitForTimeout(3000);
        await expect.soft(this.newAcademicYearText).toHaveText(formData.academicYearData.newAcademicYearText);
        await this.discription.fill(formData.academicYearData.discription + await discription);
        await this.code.fill(formData.academicYearData.code + await code);
        await this.save.click();
    }
    public async validatedAcademicYear() {
        await this.page.waitForTimeout(1000);
        await this.setting.click();
        await this.clearAll.click();
        await genericMethod.simulateAsyncTask();
        await this.downArrow.click();
        await this.filterArrow.click();
        await genericMethod.simulateAsyncTask();
        await this.inputDiscrption.fill(formData.academicYearData.discription + await discription);
        await this.filter.click();
        await expect.soft(this.validateAcademicYear).toHaveText(formData.academicYearData.discription + await discription);
        await this.page.waitForTimeout(2000);
    }
}