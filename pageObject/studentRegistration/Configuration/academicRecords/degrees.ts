import GenericMethods from '../../../../genericMethods/genericClass';
import userData from '../../../../data/studentRegistration/userData.json'
import { expect } from '@playwright/test';
const genericmethod = new GenericMethods();
declare global {
    namespace NodeJS {
        interface Global {
            degreeName: string;
            degreeCode: string;
        }
    }
}
export default class degree {
    page: any
    private clickDegree:any
    private newbutton:any
    private name:any
    private code:any
    private saveAndClose:any
    private campusSelect: any;
    private clickSelectButton: any
    private campusNameSelect: any;
    private degreeText: any;

    constructor(page: any) {
        this.clickDegree = page.getByText('Degrees')
        this.degreeText = page.getByText('Degrees', { exact: true }).nth(1);
        this.newbutton = page.locator('#newButton')
        this.name = page.locator('#name')
        this.code = page.locator('#code')
        this.campusSelect = page.locator('#search_display_campusesSearchControl')
        this.campusNameSelect = page.locator('[aria-label="Test Campus 2023-1"]')
        this.clickSelectButton = page.getByRole('button', { name: 'Select' })
        this.saveAndClose = page.getByRole('button', { name: 'Save & Close' })
    }
    public async validateDegreeText() {
        await expect.soft(this.degreeText).toHaveText(userData.degree.degreeText);
    }
    public async selectDegrees() {
        await this.clickDegree.click()
    }
    public async clickNewButton() {
        await this.newbutton.click()
    }
    public async enterName() {
        let randchars = await genericmethod.randcharset();
        global.degreeName = userData.courseLevel.name + randchars;
        await this.name.fill(global.degreeName)
    }
    public async enterCode() {
        let randchars = await genericmethod.randcharset();
        global.degreeCode = userData.courseLevel.code + randchars;
        await this.code.fill(global.degreeCode)
    }
    public async enterCampus() {
        await this.campusSelect.click()
        await this.campusNameSelect.check()
        await this.clickSelectButton.click()
    }
    public async saveDegree() {
        await this.saveAndClose.click()
    }
}