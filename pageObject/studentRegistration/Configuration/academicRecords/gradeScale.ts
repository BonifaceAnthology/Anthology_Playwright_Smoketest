import { expect } from "@playwright/test"
import formData from "../../../../data/studentRegistration/formData.json"
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass()
let scaleDiscription = genericMethod.randcharset();
let scale = genericMethod.randcharset();
let letterDiscription = genericMethod.randcharset();
let letter = genericMethod.randcharset();
export default class gradeScale {
    page: any;
    private gradeScaleText: any
    private newGradeScale: any;
    private newGradeScaleText: any;
    private discription: any;
    private scale: any;
    private campusGroup: any;
    private selectCampusGroup: any;
    private saveGradeScale: any;
    private gradeDiscription: any;
    private newLetterGrade: any;
    private letterGrade: any;
    private letterGradeDiscription: any;
    private saveLetterGrade: any;
    private downArrow1: any;
    private filterArrow: any;
    private searchGradeScale: any;
    private filterButton1: any;
    private checkGrade: any;
    private checkLetter: any;
    private clickRefresh: any;
    constructor(page: any) {
        this.page = page;
        this.gradeScaleText = page.getByText('Grade Scales', { exact: true }).nth(1);
        this.newGradeScale = page.locator('#newButton');
        this.newGradeScaleText = page.locator('[class="ui-primary-label ng-binding cmc-primary-label"]').nth(1)
        this.discription = page.locator('//*[@id="name"]');
        this.scale = page.locator('//*[@id="code"]');
        this.campusGroup = page.locator('//span[@aria-controls="campusGroupId_listbox"]//span');
        this.selectCampusGroup = page.locator('//*[@id="campusGroupId_listbox"]/li[25]');
        this.saveGradeScale = page.locator('[class="cmc-toolbar-button ng-binding"]').nth(0);
        this.gradeDiscription = page.locator('[class="ui-primary-label ng-binding cmc-primary-label"]').nth(1);
        this.newLetterGrade = page.locator('#NewLetterGrade');
        this.letterGrade = page.locator('//*[@id="code"]').first();
        this.letterGradeDiscription = page.locator('//*[@id="name"]').first();
        this.saveLetterGrade = page.getByRole('button', { name: "Save" }).first();
        this.downArrow1 = page.locator('[class="k-icon k-i-more-vertical"]').nth(1);
        this.filterArrow = page.locator('[class="k-icon k-i-arrow-60-right k-menu-expand-arrow"]').nth(1)
        this.searchGradeScale = page.locator('[class="k-textbox"]').first()
        this.filterButton1 = page.getByRole('button', { name: "Filter" })
        this.checkGrade = page.locator('[class="cmc-link-column"]').first()
        this.checkLetter = page.locator('[class="cmc-link-column"]').nth(1);
        this.clickRefresh = page.locator('[class="k-sprite k-icon fa fa-refresh"]').nth(1)
    }
    public async validateGradeScaleText() {
        await this.page.waitForTimeout(2000);
        await expect.soft(this.gradeScaleText).toHaveText(formData.letterGradeForm.gradeText)
    }
    public async openNewGradeScaleForm() {
        await this.newGradeScale.click();
    }
    public async validateNewGradeScaleText() {
        await this.page.waitForTimeout(3000);
        await expect.soft(this.newGradeScaleText).toHaveText(formData.letterGradeForm.newGradeText)
    }
    public async fillGradeScaleInfo() {
        await this.discription.fill(formData.letterGradeForm.gradeScaleDiscription + await scaleDiscription);
        await this.scale.fill(formData.letterGradeForm.scale + await scale);
        await this.campusGroup.click();
        await this.selectCampusGroup.click();
        await this.saveGradeScale.click();
    }
    public async validateGradeDiscription() {
        await this.page.waitForTimeout(2000);
        await expect.soft(this.gradeDiscription).toHaveText(`Edit Grade Scale - ${formData.letterGradeForm.gradeScaleDiscription}${await scaleDiscription}`)
    }
    public async openNewLetterGradeScaleForm() {
        await this.newLetterGrade.click();
    }
    public async fillLetterGradeInfo() {
        await this.page.waitForTimeout(1000)
        await this.letterGrade.fill(formData.letterGradeForm.letterGrade + await letter);
        await this.letterGradeDiscription.fill(formData.letterGradeForm.letterGradeDiscription + await letterDiscription);
        await this.saveLetterGrade.click();
    }
    public async validateGradeScale() {
        await this.page.waitForTimeout(4000);
        await this.downArrow1.click();
        await this.filterArrow.click();
        await this.searchGradeScale.fill(formData.letterGradeForm.gradeScaleDiscription + await scaleDiscription);
        await this.filterButton1.click();
        await expect.soft(this.checkGrade).toHaveText(formData.letterGradeForm.gradeScaleDiscription + await scaleDiscription)
        await this.checkGrade.click();
    }
    public async validateLetterGrade() {
        await this.clickRefresh.click()
        await expect.soft(this.checkLetter).toHaveText(formData.letterGradeForm.letterGrade + await letter)
    }
}