import { expect } from "@playwright/test";
import formData from "../../../../data/studentRegistration/formData.json"
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass()
let discription = genericMethod.randcharset();
let code = genericMethod.randcharset();
export default class resources {
    page: any;
    private resourcesText: any;
    private newButton: any;
    private newResourcesText: any;
    private name: any;
    private code: any;
    private campusGroup: any;
    private clickCampusGroup: any;
    private saveButton: any;
    private dropArrow: any;
    private filterArrow: any;
    private inputValue: any;
    private filter: any;
    private validateResource: any;
    constructor(page: any) {
        this.page = page;
        this.resourcesText = page.getByText('Resources', { exact: true }).nth(1);
        this.newButton = page.locator('#newButton');
        this.newResourcesText = page.getByText('New Resource', { exact: true });
        this.name = page.locator('#name');
        this.code = page.locator('#code');
        this.campusGroup = page.locator('[class="k-icon k-i-arrow-60-down"]').nth(6);
        this.clickCampusGroup = page.locator('//ul[@id="campusGroupId_listbox"]//li[7]');
        this.saveButton = page.getByRole('button', { name: "Save", exact: true });
        this.dropArrow = page.locator('//th[@data-title="Name"]//a[1]//span');
        this.filterArrow = page.locator('[class="k-icon k-i-arrow-60-right k-menu-expand-arrow"]').nth(1);
        this.inputValue = page.locator('[title="Value"]');
        this.filter = page.getByRole('button', { name: "Filter" });
        this.validateResource = page.locator('[class="cmc-link-column"]').first();
    }
    public async validateResourceText() {
        await expect.soft(this.resourcesText).toHaveText(formData.resourcesForm.resourcesText);
    }
    public async fillResource() {
        await this.newButton.click();
        await genericMethod.simulateAsyncTask()
        await expect.soft(this.newResourcesText).toHaveText(formData.resourcesForm.newResourcesText);
        await this.name.fill(formData.resourcesForm.discription + await discription);
        await this.code.fill(formData.resourcesForm.code + await code);
        await this.campusGroup.click();
        await this.clickCampusGroup.click();
        await this.saveButton.click();
    }
    public async validatedResource() {
        await this.page.waitForTimeout(3000);
        await this.dropArrow.click();
        await this.filterArrow.click();
        await this.inputValue.fill(formData.resourcesForm.discription + await discription);
        await this.filter.click();
        await this.page.waitForSelector('[class="cmc-link-column"]');
        await expect.soft(this.validateResource).toHaveText(formData.resourcesForm.discription + await discription);
    }
}