import { expect } from "@playwright/test";
import formData from "../../../../data/studentRegistration/formData.json"
import genericClass from "../../../../genericMethods/genericClass"
import { disc } from "./fundSourcesPage";
const genericMethod = new genericClass();
let discrip = genericMethod.randcharset();
let code = genericMethod.randcharset();
export default class packagingMethodPage {
    page: any;
    private packagingMethodText: any;
    private new: any;
    private newPackagingMethodText: any;
    private discription: any;
    private code: any;
    private campus: any;
    private clickCampus: any;
    private clickedCampus: any;
    private selectCampus: any;
    private dependencyStatus: any;
    private selectDependencyStatus: any;
    private giftAidMaxClick: any;
    private selfHelpMaxClick: any;
    private gradeLevelFrom: any;
    private selectGradeLevelFrom: any;
    private to: any;
    private selectTo: any;
    private addFundSource: any;
    private clickFundSource: any;
    private fillFundSource: any;
    private maximumAmount: any;
    private fillMaximumAmount: any;
    private save: any;
    private refresh: any;
    private setting: any;
    private clearAll: any;
    private dropDown: any;
    private filterName: any;
    private inputName: any;
    private filter: any;
    private validateMethod: any;
    constructor(page: any) {
        this.page = page;
        this.packagingMethodText = page.getByText('Packaging Methods', { exact: true }).nth(1);
        this.new = page.locator('#newButton');
        this.newPackagingMethodText = page.getByText('New Packaging Method', { exact: true });
        this.discription = page.locator('#name');
        this.code = page.locator('#code');
        this.campus = page.locator('#campus');
        this.clickCampus = page.locator('//div[@class="search-display-flex"]//span');
        this.clickedCampus = page.locator('[aria-label="Test Campus 2023-1"]');
        this.selectCampus = page.getByRole('button', { name: "Select" });
        this.dependencyStatus = page.locator('//span[@aria-label="Dependency Status"]//span//span[2]//span');
        this.selectDependencyStatus = page.locator('[title="Dependent"]');
        this.giftAidMaxClick = page.locator('[aria-label="Gift Aid Max"]').nth(1);
        this.selfHelpMaxClick = page.locator('[aria-label="Self Help Max"]').nth(1);
        this.gradeLevelFrom = page.locator('//span[@aria-controls="gradeLevelLow_listbox"]//span');
        this.selectGradeLevelFrom = page.locator('[title="robotR"]').first();
        this.to = page.locator('//span[@aria-controls="gradeLevelHigh_listbox"]//span');
        this.selectTo = page.locator('[title="robotR"]').nth(1);
        this.addFundSource = page.locator('#addButton');
        this.clickFundSource = page.locator('[class="editable-cell"]').first();
        this.fillFundSource = page.locator('[aria-controls="fundSourceId_listbox"]').first();
        this.maximumAmount = page.locator('[class="editable-cell"]').nth(1);
        this.fillMaximumAmount = page.locator('[data-value-field="maxAmount"]').first();
        this.save = page.getByRole('button', { name: "Save", exact: true });
        this.refresh = page.locator('[title="Reload"]').first();
        this.setting = page.locator('[class="k-button k-split-button-arrow"]').first();
        this.clearAll = page.getByRole('link', { name: "Clear All" }).first();
        this.dropDown = page.locator('[class="k-icon k-i-more-vertical"]').nth(1);
        this.filterName = page.locator('[class="k-icon k-i-arrow-60-right k-menu-expand-arrow"]').nth(1);
        this.inputName = page.locator('[title="Value"]');
        this.filter = page.getByRole('button', { name: "Filter" });
        this.validateMethod = page.locator('[class="cmc-link-column"]').first();
    }
    public async validatePackagingMethodText() {
        await expect.soft(this.packagingMethodText).toHaveText(formData.packagingMethodData.packagingMethod);
    }
    public async fillPackagingMethod() {
        await this.new.click();
        await this.page.waitForTimeout(3000);
        await expect.soft(this.newPackagingMethodText).toHaveText(formData.packagingMethodData.newPackagingMethod);
        await this.discription.fill(formData.packagingMethodData.discription + await discrip);
        await this.code.fill(formData.packagingMethodData.code + await code);
        await this.campus.click();
        await this.page.waitForTimeout(1000);
        await this.clickCampus.click();
        await this.clickedCampus.click();
        await this.selectCampus.click();
        await this.page.waitForTimeout(1000);
        await this.dependencyStatus.click();
        await this.selectDependencyStatus.click();
        await this.giftAidMaxClick.fill(formData.packagingMethodData.giftAidMax)
        await this.selfHelpMaxClick.fill(formData.packagingMethodData.selfHelpMax);
        await this.gradeLevelFrom.click();
        await this.selectGradeLevelFrom.click();
        await this.to.click();
        await this.selectTo.click();
        await this.addFundSource.click();
        await this.clickFundSource.click();
        await this.page.waitForTimeout(2000)
        await this.fillFundSource.fill(formData.fundSourceData.discription + await disc);
        await this.maximumAmount.click();
        await this.fillMaximumAmount.fill(formData.packagingMethodData.maximumAmount);
        await this.save.click();
    }
    public async validatedPackagingMethod() {
        await this.refresh.click();
        await this.page.waitForTimeout(1000);
        await this.setting.click();
        await this.clearAll.click();
        await this.page.waitForTimeout(3000);
        await this.dropDown.click();
        await this.filterName.click();
        await this.inputName.fill(formData.packagingMethodData.discription + await discrip);
        await this.filter.click();
        await this.page.waitForTimeout(2000);
        await expect.soft(this.validateMethod).toHaveText(formData.packagingMethodData.discription + await discrip);
    }
}