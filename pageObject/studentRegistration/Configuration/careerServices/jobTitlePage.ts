import { expect } from "@playwright/test";
import formData from "../../../../data/studentRegistration/formData.json"
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass();
let discription = genericMethod.randcharset();
let code = genericMethod.randcharset();
export default class jobTitlePage {
    page: any;
    private jobTitleText: any;
    private newJobTitle: any;
    private newJobTitleText: any;
    private discription: any;
    private code: any;
    private campus: any;
    private clickCampus: any;
    private selectCampus: any;
    private save: any;
    private downArrow: any;
    private filterArrow: any;
    private inputDisc: any;
    private filterDisc: any;
    private validateJobName: any;
    constructor(page: any) {
        this.page = page;
        this.jobTitleText = page.getByText('Job Titles', { exact: true }).nth(1);
        this.newJobTitle = page.locator('#newButton')
        this.newJobTitleText = page.locator('//div[@class="cmc-accordion-label-container"]//a').nth(1);
        this.discription = page.locator('#name')
        this.code = page.locator('#code');
        this.campus = page.locator('#search_display_campusesSearchControl')
        this.clickCampus = page.locator('[aria-label="Test Campus 2023-1"]')
        this.selectCampus = page.getByRole('button', { name: "Select" })
        this.save = page.getByRole('button', { name: "Save", exact: true }).first()
        this.downArrow = page.locator('//th[@data-title="Name"]//a[@title="Column Settings"]//span');
        this.filterArrow = page.locator('[class="k-icon k-i-arrow-60-right k-menu-expand-arrow"]').nth(1);
        this.inputDisc = page.locator('[title="Value"]');
        this.filterDisc = page.getByRole('button', { name: "Filter" });
        this.validateJobName = page.locator('[class="cmc-link-column"]').first()
    }
    public async validateJobText() {
        await this.page.waitForTimeout(2000);
        await expect.soft(this.jobTitleText).toHaveText(formData.jobTitleForm.jobTitle)
    }
    public async fillJobTitle() {
        await this.newJobTitle.click();
        await this.page.waitForTimeout(3000);
        await expect.soft(this.newJobTitleText).toHaveText(formData.jobTitleForm.newJobTitle)
        await this.discription.fill(formData.jobTitleForm.discription + await discription)
        await this.code.fill(formData.jobTitleForm.code + await code)
        await this.campus.click();
        await this.clickCampus.click();
        await this.selectCampus.click();
        await this.save.click();
    }
    public async validateJobTitle() {
        await this.page.waitForTimeout(3000);
        await this.downArrow.click();
        await this.filterArrow.click();
        await this.inputDisc.fill(formData.jobTitleForm.discription + await discription);
        await this.filterDisc.click();
        await genericMethod.simulateAsyncTask()
        await expect.soft(this.validateJobName).toHaveText(formData.jobTitleForm.discription + await discription)
    }
}