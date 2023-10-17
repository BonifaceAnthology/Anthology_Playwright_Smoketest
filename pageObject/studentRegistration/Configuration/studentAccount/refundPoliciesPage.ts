import { expect } from "@playwright/test";
import formData from "../../../../data/studentRegistration/formData.json";
import genericClass from "../../../../genericMethods/genericClass";
const genericMethod = new genericClass();
let discription = genericMethod.randcharset();
let code = genericMethod.randcharset();
export default class courseRefundPoliciesPage {
    page: any;
    private refundPoliciesText: any;
    private new: any;
    private newRefundPoliciesText: any;
    private discription: any;
    private code: any;
    private removeCampus: any;
    private openCampus: any;
    private clickCampus: any;
    private selectCampus: any;
    private save: any;
    private reload:any;
    private setting: any;
    private clearAll: any;
    private downArrow: any;
    private filterArrow: any;
    private inputDiscription: any;
    private filter: any;
    private validate: any;
    constructor(page: any) {
        this.page = page;
        this.refundPoliciesText = page.getByText('Refund Policies', { exact: true }).nth(1);
        this.new = page.locator('#newButton');
        this.newRefundPoliciesText = page.getByText('New Refund Policy', { exact: true });
        this.discription = page.locator('#name');
        this.code = page.locator('#code');
        this.removeCampus = page.locator('[class="cmc-icons-cancel cmc-icons-sm"]');
        this.openCampus = page.locator('[cmc-id="search_display_campusId"]');
        this.clickCampus = page.locator('[aria-label="Test Campus 2023-1"]');
        this.selectCampus = page.getByRole('button', { name: "Select" });
        this.save = page.getByRole('button', { name: "Save", exact: "true" });
        this.reload=page.locator('[title="Reload"]');
        this.setting = page.locator('[class="k-button k-split-button-arrow"]').first();
        this.clearAll = page.getByRole('link', { name: "Clear All" });
        this.downArrow = page.locator('[class="k-icon k-i-more-vertical"]').nth(1);
        this.filterArrow = page.locator('[class="k-icon k-i-arrow-60-right k-menu-expand-arrow"]').nth(1);
        this.inputDiscription = page.locator('[title="Value"]');
        this.filter = page.getByRole('button', { name: "Filter" });
        this.validate = page.locator('[class="cmc-link-column"]').first();
    }
    public async validateRefundPoliciesText() {
        await this.page.waitForTimeout(2000);
        await expect.soft(this.refundPoliciesText).toHaveText(formData.refundPoliciesData.refundPoliciesText);
    }
    public async fillRefundPoliciesDetails() {
        await this.new.click();
        await this.page.waitForTimeout(3000);
        await expect.soft(this.newRefundPoliciesText).toHaveText(formData.refundPoliciesData.newRefundPoliciesText);
        await this.discription.fill(formData.refundPoliciesData.discription + await discription);
        await this.code.fill(formData.refundPoliciesData.code + await code);
        await this.page.waitForTimeout(2000);
        await this.removeCampus.click();
        await this.openCampus.click();
        await this.clickCampus.click();
        await this.selectCampus.click();
        await this.save.click();
    }
    public async validateRefundPolicies() {
        await this.reload.click();
        await this.page.waitForTimeout(2000);
        await this.setting.click();
        await this.clearAll.click();
        await genericMethod.simulateAsyncTask();
        await this.downArrow.click();
        await this.filterArrow.click();
        await this.inputDiscription.fill(formData.refundPoliciesData.discription + await discription);
        await this.filter.click();
        await genericMethod.simulateAsyncTask();
        await expect.soft(this.validate).toHaveText(formData.refundPoliciesData.discription + await discription);
    }
}