import { expect } from "@playwright/test";
import formData from "../../../../data/studentRegistration/formData.json"
import workbookData from '../../../../data/studentRegistration/WorkbookData/workbookData.json'
import { pCode, pDiscription } from "./createNewProgramPage";
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass()
export default class programPage {
    page: any;
    private newButton: any;
    private validateProgramText: any;
    private checkProgram: any;
    private downArrow: any;
    private goToFilter: any;
    private searchedProgram: any;
    private clickFilter: any;
    private reload: any;
    private setting: any;
    private clearAll: any;
    constructor(page: any) {
        this.page = page;
        this.newButton = page.locator('#newButton');
        this.validateProgramText = page.locator('//*[@id="listPane"]/section/div/cmc-collapse/div/div[1]/div[1]/a')
        this.downArrow = page.locator('[class="k-icon k-i-more-vertical"]').nth(1);
        this.goToFilter = page.locator('[class="k-icon k-i-arrow-60-right k-menu-expand-arrow"]').nth(1)
        this.searchedProgram = page.locator('[title="Value"]')
        this.clickFilter = page.getByRole('button', { name: "Filter" })
        this.checkProgram = page.locator('[class="cmc-link-column"]').first();
        this.reload = page.locator('[title="Reload"]').first();
        this.setting = page.locator('[class="k-button k-split-button-arrow"]').first();
        this.clearAll = page.getByRole('link', { name: "Clear All" });
    }
    public async clickNewButton() {
        await this.newButton.click();
    }
    public async validatedprogramText() {
        await this.page.waitForTimeout(2000);
        await expect.soft(this.validateProgramText).toHaveText(formData.programForm.programText)
    }
    public async validatedProgram() {
        await this.reload.click();
        await this.page.waitForTimeout(2000);
        await this.setting.click();
        await this.clearAll.click();
        await this.page.waitForTimeout(3000);
        await this.downArrow.click();
        await this.goToFilter.click();
        await this.searchedProgram.fill(formData.programForm.discription + await pDiscription);
        await this.clickFilter.click();
        await expect.soft(this.checkProgram).toHaveText(formData.programForm.discription + await pDiscription)
        await genericMethod.writeTheDataInExcel(workbookData.WorkbookName, workbookData.Students.sheetName
            , workbookData.Students["Programs"], formData.programForm.discription + await pDiscription)
    }
    public async validateProgram() {
        await this.page.waitForTimeout(3000);
        await this.downArrow.click();
        await this.goToFilter.click();
        await this.searchedProgram.fill(formData.programForm.discription + await pDiscription);
        await this.clickFilter.click();
        await this.checkProgram.click();
    }
    public async searchProgram() {
        await genericMethod.simulateAsyncTask()
        await this.setting.click();
        await this.clearAll.click();
        await genericMethod.simulateAsyncTask()
        await this.downArrow.click();
        await this.goToFilter.click();
        let program = await genericMethod.readTheDataInExcel(workbookData.WorkbookName, workbookData.Students.sheetName
            , workbookData.Students["Programs"])
        await this.searchedProgram.fill(program);
        await this.clickFilter.click();
        await this.checkProgram.click();
    }
}






