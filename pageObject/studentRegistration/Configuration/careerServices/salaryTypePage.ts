import { expect } from "@playwright/test";
import formData from "../../../../data/studentRegistration/formData.json"
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass()
let name = genericMethod.randcharset()
let code = genericMethod.randcharset()
export default class salaryTypePage {
    page: any;
    private salaryTypeText: any;
    private new: any;
    private newSalaryText: any;
    private name: any;
    private code: any;
    private campus: any;
    private clickCampus: any;
    private selectCampus: any;
    private salaryCategory: any;
    private selectSalaryCategory: any;
    private save: any;
    private dropArrow: any;
    private filterArrow: any;
    private inputSalaryTypeName: any;
    private filter: any;
    private validateName: any;
    constructor(page: any) {
        this.page = page;
        this.salaryTypeText = page.getByText('Salary Types', { exact: true }).nth(1);
        this.new = page.locator('//a[@id="newButton"]');
        this.newSalaryText = page.locator('//div[@class="cmc-accordion-label-container"]//a').nth(1)
        this.name = page.locator('#name')
        this.code = page.locator('#code')
        this.campus = page.locator('[id="search_display_campusesSearchControl"]')
        this.clickCampus = page.locator('[aria-label="Test Campus 2023-2"]')
        this.selectCampus = page.getByRole('button', { name: "Select" });
        this.salaryCategory = page.locator('[class="k-icon k-i-arrow-60-down"]').nth(6);
        this.selectSalaryCategory = page.locator('[title="Flat Rate"]');
        this.save = page.getByRole('button', { name: "Save", exact: true })
        this.dropArrow = page.locator('[class="k-icon k-i-more-vertical"]').nth(1);
        this.filterArrow = page.locator('[class="k-icon k-i-arrow-60-right k-menu-expand-arrow"]').nth(1);
        this.inputSalaryTypeName = page.locator('[title="Value"]').first();
        this.filter = page.getByRole('button', { name: "Filter", exact: true });
        this.validateName = page.locator('[class="cmc-link-column"]').first();
    }
    public async validateSalaryText() {
        await expect.soft(this.salaryTypeText).toHaveText(formData.salaryTypeForm.salaryType)
    }
    public async fillSalaryTypeInfo() {
        await this.new.click();
        await this.page.waitForTimeout(2000);
        await expect.soft(this.newSalaryText).toHaveText(formData.salaryTypeForm.newSalaryType)
        await this.name.fill(formData.salaryTypeForm.name + await name);
        await this.code.fill(formData.salaryTypeForm.code + await code);
        await this.campus.click();
        await this.clickCampus.click();
        await this.selectCampus.click();
        await this.salaryCategory.click();
        await this.selectSalaryCategory.click();
        await this.save.click();
    }
    public async validatesalaryType() {
        await this.page.waitForTimeout(4000);
        await this.dropArrow.click();
        await this.filterArrow.click();
        await this.inputSalaryTypeName.fill(formData.salaryTypeForm.name + await name);
        await this.filter.click();
        await this.page.waitForTimeout(4000);
        await expect.soft(this.validateName).toHaveText(formData.salaryTypeForm.name + await name)
    }
}