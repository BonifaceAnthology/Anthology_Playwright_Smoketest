import { expect } from "@playwright/test";
import formData from "../../../../data/studentRegistration/formData.json"
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass();
export let disc = genericMethod.randcharset();
let code = genericMethod.randcharset();
export default class fundSourcesPage {
    page: any;
    private fundSourceText: any;
    private new: any;
    private newFundSourceText: any;
    private discription: any;
    private code: any;
    private crossCampus: any;
    private clickCampus: any;
    private campus: any;
    private selectCampus: any;
    private fundSourceArrow: any;
    private selectFundSourse: any;
    private saveButton: any;
    private refresh: any;
    private downArrow: any;
    private filterArrow: any;
    private inputFundSource: any;
    private filterFundSource: any;
    private validateFundSource: any;
    private setting: any;
    private clearAll: any;
    private selectAnotherFundSourse: any;
    private selectRulesAndAttribute: any;
    private checkPrintNotes: any;
    private checkText: any;
    constructor(page: any) {
        this.page = page;
        this.fundSourceText = page.getByText("Fund Sources", { exact: true }).nth(1);
        this.new = page.locator('#newButton');
        this.newFundSourceText = page.getByText('New Fund Source', { exact: true });
        this.discription = page.locator('#name');
        this.code = page.locator('#code');
        this.crossCampus = page.locator('[class="cmc-icons-cancel cmc-icons-sm"]');
        this.clickCampus = page.locator('#search_display_campusesSearchControl');
        this.campus = page.locator('[aria-label="Test Campus 2023-1"]');
        this.selectCampus = page.getByRole('button', { name: "Select" });
        this.fundSourceArrow = page.locator('[class="k-icon k-i-arrow-60-down"]').nth(6);
        this.selectFundSourse = page.locator('[title="Work Study"]');
        this.saveButton = page.getByRole('button', { name: "Save", exact: true });
        this.refresh = page.locator('[title="Reload"]');
        this.downArrow = page.locator('[class="k-icon k-i-more-vertical"]').nth(1);
        this.filterArrow = page.locator('[class="k-icon k-i-arrow-60-right k-menu-expand-arrow"]').nth(1);
        this.inputFundSource = page.locator('[title="Value"]');
        this.filterFundSource = page.getByRole('button', { name: "Filter" });
        this.validateFundSource = page.locator('[class="cmc-link-column"]').first();
        this.setting = page.locator('[class="k-button k-split-button-arrow"]').first();
        this.clearAll = page.getByRole('link', { name: "Clear All" }).first();
        this.selectAnotherFundSourse = page.locator('[title="Student Payments"]');
        this.selectRulesAndAttribute = page.getByText('Rules and Attributes', { exact: true });
        this.checkPrintNotes = page.locator('[for="isPromissoryNoteAllowed"]');
        this.checkText = page.getByText('The Fund Source records were successfully saved.', { exact: true });
    }
    public async validateFundText() {
        await genericMethod.simulateAsyncTask();
        await expect.soft(this.fundSourceText).toHaveText(formData.fundSourceData.fundSource);
    }
    public async fillFundSource() {
        await this.new.click();
        await this.page.waitForTimeout(3000);
        await expect.soft(this.newFundSourceText).toHaveText(formData.fundSourceData.newFundSource);
        await this.discription.fill(formData.fundSourceData.discription + await disc);
        await this.code.fill(formData.fundSourceData.code + await code);
        await this.crossCampus.click();
        await this.clickCampus.click();
        await this.campus.click();
        await this.selectCampus.click();
        await this.fundSourceArrow.click();
        await this.selectFundSourse.click();
        await this.saveButton.click();
    }
    public async validatedFundSource() {
        await this.refresh.click();
        await this.page.waitForTimeout(2000);
        await this.downArrow.click();
        await this.filterArrow.click();
        await this.inputFundSource.fill(formData.fundSourceData.discription + await disc);
        await this.filterFundSource.click();
        await this.page.waitForTimeout(2000);
        await expect.soft(this.validateFundSource).toHaveText(formData.fundSourceData.discription + await disc);
    }
    public async clickSearchedFundSource() {
        await this.refresh.click();
        await this.page.waitForTimeout(2000);
        await this.downArrow.click();
        await this.filterArrow.click();
        await this.inputFundSource.fill(formData.fundSourceData.discription + await disc);
        await this.filterFundSource.click();
        await this.page.waitForTimeout(2000);
        await this.validateFundSource.click();
    }
    public async fillInfoForPrint() {
        await this.page.waitForTimeout(3000);
        await this.fundSourceArrow.click();
        await this.selectAnotherFundSourse.click();
        await this.selectRulesAndAttribute.click();
        await this.checkPrintNotes.click();
        await this.saveButton.click();
        await this.page.waitForTimeout(2000);
        await expect.soft(this.checkText).toHaveText(formData.fundSourceData.checkPopUpText);
    }
}