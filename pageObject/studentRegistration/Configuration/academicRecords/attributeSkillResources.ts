import { expect } from "@playwright/test";
import formData from "../../../../data/studentRegistration/formData.json"
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass()
export default class attributeSkillResources {
    page: any;
    private asrTile: any;
    private attributeText: any;
    private attribute: any;
    private dropDownAttribute: any;
    private searchAttribute: any;
    private filterAttribute: any;
    private clickAttribute: any;
    private selectAttribute: any;
    private validateAttribute: any;
    private skillText: any;
    private addSkill: any;
    private searchSkill: any;
    private clickSkill: any;
    private SelectSkill: any;
    private validateSkill: any;
    private resourceText: any;
    private addResource: any;
    private searchResource: any;
    private clickResource: any;
    private selectResource: any;
    private validateResource: any;
    private saveButton: any;
    constructor(page: any) {
        this.page = page;
        this.asrTile = page.getByText('Attributes, Skills & Resources', { exact: true });
        this.attributeText = page.getByText('Attributes', { exact: true }).first();
        this.attribute = page.locator('#search_display_attribute');
        this.dropDownAttribute = page.locator('//th[@data-title="Name"]//a[@title="Filter"]//span[1]');
        this.searchAttribute = page.locator('[title="Value"]');
        this.filterAttribute = page.getByRole('button', { name: "Filter" }).nth(1);
        this.clickAttribute = page.locator('[class="check-box styled-checkbox serach-control"]').first();
        this.selectAttribute = page.getByRole('button', { name: "Select" });
        this.validateAttribute = page.getByText('Computers', { exact: true }).first()
        this.skillText = page.getByText('Skills', { exact: true });
        this.addSkill = page.locator('#Add').first();
        this.searchSkill = page.locator('[title="Value"]');
        this.clickSkill = page.locator('[class="check-box styled-checkbox serach-control"]').first();
        this.SelectSkill = page.getByRole('button', { name: "Select" });
        this.validateSkill = page.getByText('javaScript', { exact: true }).first()
        this.resourceText = page.getByText('Resources', { exact: true });
        this.addResource = page.locator('#Add').nth(1);
        this.searchResource = page.locator('[title="Value"]');
        this.clickResource = page.locator('[class="check-box styled-checkbox serach-control"]').first();
        this.selectResource = page.getByRole('button', { name: "Select" });
        this.validateResource = page.getByText('Good Wifi', { exact: true }).first()
        this.saveButton = page.getByRole('button', { name: "Save", exact: true });
    }
    public async clickASRTile() {
        await this.asrTile.click();
    }
    public async selectsAttribute() {
        await expect.soft(this.attributeText).toHaveText(formData.asrForm.attributeText);
        await this.attribute.click();
        await this.dropDownAttribute.click();
        await this.page.waitForTimeout(1000)
        await this.searchAttribute.fill(formData.asrForm.attributeName);
        await this.filterAttribute.click();
        await this.page.waitForTimeout(1000)
        await this.clickAttribute.click();
        await this.selectAttribute.click();
    }
    public async validatedAttribute() {
        await this.page.waitForTimeout(1000)
        await expect(this.validateAttribute).toBeVisible();
    }
    public async selectsSkills() {
        await expect.soft(this.skillText).toHaveText(formData.asrForm.skillText);
        await this.addSkill.click();
        await this.dropDownAttribute.click();
        await this.page.waitForTimeout(1000)
        await this.searchSkill.fill(formData.asrForm.skillName);
        await this.filterAttribute.click();
        await this.clickSkill.click();
        await this.SelectSkill.click();
    }
    public async validatedSkills() {
        await this.page.waitForTimeout(1000)
        await expect(this.validateSkill).toBeVisible();
    }
    public async selectsResources() {
        await expect.soft(this.resourceText).toHaveText(formData.asrForm.resourceText);
        await this.addResource.click();
        await this.dropDownAttribute.click();
        await this.page.waitForSelector('[title="Value"]')
        await this.searchResource.fill(formData.asrForm.resourceName);
        await this.filterAttribute.click();
        await this.clickResource.click();
        await genericMethod.simulateAsyncTask()
        await this.selectResource.click();
    }
    public async validatedResources() {
        await this.page.waitForTimeout(1000)
        await expect(this.validateResource).toBeVisible();
        await this.saveButton.click();
    }
}