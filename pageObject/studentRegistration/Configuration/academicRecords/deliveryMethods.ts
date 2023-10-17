import GenericMethods from '../../../../genericMethods/genericClass';
import userData from '../../../../data/studentRegistration/userData.json'
import { expect } from '@playwright/test';
const genericmethod = new GenericMethods();
declare global {
    namespace NodeJS {
        interface Global {
            deliveryMethodName: string;
            deliveryMethodCode: string;
        }
    }
}
export default class deliveryMethod {
    page: any
    private clickDeliveryMethod:any
    private newbutton:any
    private name:any
    private code:any
    private saveAndClose:any
    private campusSelect: any;
    private clickSelectButton: any
    private campusNameSelect: any;
    private deliveryText: any;

    constructor(page: any) {
        this.clickDeliveryMethod = page.getByText('Delivery Methods')
        this.deliveryText = page.getByText('Delivery Methods', { exact: true }).nth(1);
        this.newbutton = page.locator('#newButton')
        this.name = page.locator('#name')
        this.code = page.locator('#code')
        this.campusSelect = page.locator('#search_display_campusesSearchControl')
        this.campusNameSelect = page.locator('[aria-label="Test Campus 2023-1"]')
        this.clickSelectButton = page.getByRole('button', { name: 'Select' })
        this.saveAndClose = page.getByRole('button', { name: 'Save & Close' })
    }
    public async selectDeliveryMethods() {
        await this.clickDeliveryMethod.click()
    }
    public async validateDeliveryText() {
        await expect.soft(this.deliveryText).toHaveText(userData.deliveryMethod.deliveryText);
    }
    public async clickNewButton() {
        await this.newbutton.click()
    }
    public async enterName() {
        let randchars = await genericmethod.randcharset();
        global.deliveryMethodName = userData.courseLevel.name + randchars;
        await this.name.fill(global.deliveryMethodName)
    }
    public async enterCode() {
        let randchars = await genericmethod.randcharset();
        global.deliveryMethodCode = userData.courseLevel.code + randchars;
        await this.code.fill(global.deliveryMethodCode)
    }
    public async enterCampus() {
        await this.campusSelect.click()
        await this.campusNameSelect.check()
        await this.clickSelectButton.click()
    }
    public async saveDeliveryMethods() {
        await this.saveAndClose.click()
    }
}