import { expect } from "@playwright/test";
import formData from "../../../../data/studentRegistration/formData.json"
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass()
let discription = genericMethod.randcharset();
let code = genericMethod.randcharset();
export default class skills{
    page: any;
    private skillsText: any;
    private newButton: any;
    private newSkillsText: any;
    private discription: any;
    private code: any;
    private campus: any;
    private clickCampus: any;
    private selectCampusButton: any;
    private jobSkills:any;
    private selectJobSkills:any;
    private saveButton: any;
    private dropArrow: any;
    private filterArrow: any;
    private inputValue: any;
    private filter: any;
    private validateSkills: any;
    constructor(page: any) {
        this.page = page;
        this.skillsText = page.getByText('Skills', { exact: true }).nth(1);
        this.newButton = page.locator('#newButton');
        this.newSkillsText = page.getByText('New Skill', { exact: true });
        this.discription = page.locator('#name');
        this.code = page.locator('#code');
        this.campus = page.locator('[cmc-id="search_display_campusesSearchControl"]');
        this.clickCampus = page.locator('[aria-label="Test Campus 2023-1"]');
        this.selectCampusButton = page.getByRole('button', { name: "Select" });
        this.jobSkills = page.locator('[class="k-icon k-i-arrow-60-down"]').nth(6);
        this.selectJobSkills = page.locator('//ul[@id="isJobSkill_listbox"]//li[1]');
        this.saveButton = page.getByRole('button', { name: "Save", exact: true });
        this.dropArrow = page.locator('//th[@data-title="Name"]//a[1]//span');
        this.filterArrow = page.locator('[class="k-icon k-i-arrow-60-right k-menu-expand-arrow"]').nth(1);
        this.inputValue = page.locator('[title="Value"]');
        this.filter = page.getByRole('button', { name: "Filter" });
        this.validateSkills = page.locator('[class="cmc-link-column"]').first();
    }
    public async validateSkillsText() {
        await expect.soft(this.skillsText).toHaveText(formData.skillsForm.skillsText);
    }
    public async fillSkills() {
        await this.newButton.click();
        await expect.soft(this.newSkillsText).toHaveText(formData.skillsForm.newSkillsText);
        await this.discription.fill(formData.skillsForm.discription + await discription);
        await this.code.fill(formData.skillsForm.code + await code);
        await this.campus.click();
        await this.clickCampus.click();
        await this.selectCampusButton.click();
        await this.jobSkills.click();
        await this.selectJobSkills.click();
        await this.saveButton.click();
    }
    public async validatedSkills() {
        await this.page.waitForTimeout(3000);
        await this.dropArrow.click();
        await this.filterArrow.click();
        await this.inputValue.fill(formData.skillsForm.discription + await discription);
        await this.filter.click();
        await this.page.waitForSelector('[class="cmc-link-column"]');
        await expect.soft(this.validateSkills).toHaveText(formData.skillsForm.discription + await discription);
    }
}