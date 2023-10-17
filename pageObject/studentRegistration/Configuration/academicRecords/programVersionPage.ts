import formData from "../../../../data/studentRegistration/formData.json"
import { expect } from "@playwright/test";
import { vCode } from "./newProgramVersionPage";
import workbookData from '../../../../data/studentRegistration/WorkbookData/workbookData.json'
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass()
export default class programVersionPage {
    page: any;
    private newProgramVersion: any;
    private downArrow: any;
    private goToFilter: any;
    private giveVersion: any;
    private clickFilter: any;
    private checkVersion: any;
    private clickForDropDown: any;
    private versionNameDownArrow: any;
    private versionNameFilterArrow: any;
    private giveVersionName: any;
    private clickVersionName: any;
    private versionName: any;
    private setting: any;
    private clearAll: any;
    constructor(page: any) {
        this.page = page;
        this.newProgramVersion = page.locator('#addProgramVersionButton')
        this.clickForDropDown = page.locator('[class="k-sprite k-icon fa fa-refresh"]').nth(3)
        this.downArrow = page.locator('[class="k-icon k-i-more-vertical"]').nth(20)
        this.goToFilter = page.locator('[class="k-icon k-i-arrow-60-right k-menu-expand-arrow"]').nth(3);
        this.giveVersion = page.locator('[class="k-textbox"]').nth(2);
        this.clickFilter = page.getByRole("button", { name: "Filter" })
        this.checkVersion = page.locator('[class="cmc-link-column"]').nth(2);
        this.versionNameDownArrow = page.locator('//th[@data-title="Version Name"]//a//span').first()
        this.versionNameFilterArrow = page.locator('[class="k-icon k-i-arrow-60-right k-menu-expand-arrow"]').nth(3)
        this.giveVersionName = page.locator('[title="Value"]').nth(1)
        this.clickVersionName = page.locator('[aria-label="Version Code"]').first();
        this.setting = page.locator('[class="k-button k-split-button-arrow"]').nth(6);
        this.clearAll = page.getByRole('link', { name: "Clear All" });
    }
    public async clickNewProgramVersion() {
        await this.newProgramVersion.click();
    }
    public async validateVersion() {
        await this.clickForDropDown.click();
        await genericMethod.simulateAsyncTask()
        await this.setting.click();
        await this.clearAll.click();
        await this.page.waitForTimeout(3000);
        await this.downArrow.click();
        await this.goToFilter.click();
        await this.giveVersion.fill(formData.programVersionForm.code + await vCode);
        await this.clickFilter.click();
        await this.page.waitForTimeout(3000);
        await expect.soft(this.checkVersion).toHaveText(formData.programVersionForm.code.toUpperCase() + (await vCode).toUpperCase())
    }
    public async searchProgramVersion() {
        await this.clickForDropDown.click();
        await genericMethod.simulateAsyncTask()
        await this.setting.click();
        await this.clearAll.click();
        await genericMethod.simulateAsyncTask();
        await this.versionNameDownArrow.click();
        await this.versionNameFilterArrow.click();
        let programVersion = await genericMethod.readTheDataInExcel(workbookData.WorkbookName, workbookData.Students.sheetName
            , workbookData.Students["Program Versions"])
        await genericMethod.simulateAsyncTask();
        await this.giveVersionName.fill(programVersion);
        await this.clickFilter.click();
        await this.checkVersion.click();
    }
}




