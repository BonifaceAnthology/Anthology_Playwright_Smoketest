import { expect } from "@playwright/test";
import formData from '../../../../data/studentRegistration/formData.json'
let categories: any;
export default class courseListInProgramVersion {
    page: any;
    private courseListTile: any;
    private courseListText: any;
    private CatalogsText: any;
    private addCatalog: any;
    private fillCatalog: any;
    private selectCatalog: any;
    private configure: any;
    private addCataegories: any;
    private cataegoriesArrow: any;
    private selectCataegories: any;
    private saveAndCloseButton: any;
    private addCourse: any;
    private searchCourse: any;
    private selectCourse: any;
    private saveCourse: any;
    private newElectivePoolButton: any;
    private electivePoolName: any;
    private savePoolButton: any;
    private clickPoolName: any;
    private clickCourseForPool: any;
    private selectCourseButtonForPool: any;
    private removeButton: any;
    private removePopUpButton: any;
    private errorMessegeOne: any
    constructor(page: any) {
        this.page = page;
        this.courseListTile = page.locator('//cns-tile[@cns-label="Course Lists"]/div');
        this.courseListText = page.getByText('Course Lists', { exact: true }).nth(1);
        this.CatalogsText = page.getByText('Catalogs', { exact: true }).first();
        this.addCatalog = page.locator('#newButton').first();
        this.fillCatalog = page.locator('[aria-label="Catalog"]').nth(1);
        this.selectCatalog = page.locator('#catalogSaveButton');
        this.configure = page.locator('#historicalCatalogOkButton');
        this.addCataegories = page.locator('[id="newButton"]').nth(1);
        this.cataegoriesArrow = page.locator('//span[@aria-controls="categoryId_listbox"]//span');
        this.selectCataegories = page.locator('[class="student-label-container"]').nth(2);
        this.saveAndCloseButton = page.locator('#programCategoryListSaveCloseButton');
        this.addCourse = page.locator('[id="newButton"]').nth(2);
        this.searchCourse = page.locator('[cmc-id="search_display_courseId"]');
        this.selectCourse = page.getByRole('button', { name: "Select", exact: true });
        this.saveCourse = page.locator('[id="requireCourseListSaveButton"]').first();
        this.newElectivePoolButton = page.locator('#newElectivePoolButton');
        this.electivePoolName = page.locator('#electivePoolNameId');
        this.savePoolButton = page.locator('#requireElectivePoolSaveButton');
        this.clickPoolName = page.getByText(formData.courseListForm.poolName, { exact: true }).nth(1);
        this.clickCourseForPool = page.locator('[class="check-box styled-checkbox serach-control"]').first();
        this.selectCourseButtonForPool = page.getByRole('button', { name: "Select", exact: true });
        this.removeButton = page.locator('[id="removeButton"]').first();
        this.removePopUpButton = page.locator('#deleteCatalogOkButton');
        this.errorMessegeOne = page.getByText('Changes were not saved because there is invalid or missing data. Correct and save again.', { exact: true }).first()
    }
    public async clickCourseListTile() {
        await this.courseListTile.click();
        await this.page.waitForTimeout(2000)
        await expect.soft(this.courseListText).toHaveText(formData.courseListForm.courseListText);
    }
    public async addCatalogs(catalog: any) {
        await this.page.waitForTimeout(2000);
        await this.addCatalog.click();
        await this.page.waitForTimeout(2000)
        await this.fillCatalog.fill(await catalog);
        await this.selectCatalog.click();
    }
    public async configureCatalog(catalog: any) {
        await this.page.waitForTimeout(2000)
        if (await this.configure.isVisible()) {
            await this.configure.click();
        }
        await expect.soft(this.page.getByText(`${await catalog}`, { exact: true }).first()).toBeVisible();
    }
    public async addCategories(catalog: any) {
        await expect.soft(this.page.getByText(`Categories: ${await catalog}`)).toBeVisible();
        await this.page.waitForTimeout(2000);
        await this.addCataegories.click();
        await this.cataegoriesArrow.click();
        await this.selectCataegories.click();
        categories = await this.selectCataegories.innerText();
        await this.saveAndCloseButton.click();
        await this.page.waitForTimeout(2000)
        await expect.soft(this.page.getByText(`${categories}`, { exact: true })).toBeVisible();
    }
    public async addCourses(course: any, catalog: any) {
        await expect.soft(this.page.getByText(`Courses:  ${await catalog}`, { exact: true })).toBeVisible();
        await this.addCourse.click();
        await this.searchCourse.click();
        await this.page.waitForTimeout(2000)
        await this.page.locator(`[aria-label="${await course}"]`.toUpperCase()).click();
        await this.selectCourse.click();
        await this.saveCourse.click();
        await expect.soft(this.page.getByText(`${await course}`).first()).toBeVisible();
    }
    public async addPool() {
        await this.newElectivePoolButton.click();
        await this.electivePoolName.fill(formData.courseListForm.poolName);
        await this.savePoolButton.click();
        if (await this.errorMessegeOne.isVisible()) {
            await this.page.waitForTimeout(1000)
            await this.savePoolButton.click();
        }
        await this.clickPoolName.click();
        await this.clickCourseForPool.click();
        await this.selectCourseButtonForPool.click();
    }
    public async removeCatalog(catalog: any) {
        await this.removeButton.click();
        await this.removePopUpButton.click();
        await this.page.waitForTimeout(2000)
        await expect.soft(this.page.getByText(`${await catalog}`, { exact: true }).first()).toBeHidden();
    }
}