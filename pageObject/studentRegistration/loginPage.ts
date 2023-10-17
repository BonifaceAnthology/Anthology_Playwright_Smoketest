import { test, expect } from "@playwright/test";
import webclientCredential from "../../data/studentRegistration/webclientCredential.json"
export default class loginPage {
    page: any;
    private username: any;
    private password: any;
    private buttonLogin: any;
    private dropDownToSelectCampus: any;
    private selectCampus: any;
    private clickSetDefault: any;
    private clickCancelButton:any;
    private campusNexusButton:any;
    constructor(page: any) {
        this.page = page
        this.username = page.getByPlaceholder('User name')
        this.password = page.getByPlaceholder('Password')
        this.buttonLogin = page.getByRole('button', { name: 'Sign in' })
        this.dropDownToSelectCampus = page.locator('span').filter({ hasText: '33' }).getByRole('button', { name: 'select' })
        this.selectCampus = page.getByTitle(webclientCredential.credential.campusName)
        this.clickSetDefault = page.getByRole('button', { name: 'Set Default' })
        this.clickCancelButton=page.getByRole('button', { name: 'Cancel' }).first();
        this.campusNexusButton=page.locator('#campusNexusButton')
    }
    public async enterUsername() {
        await this.username.fill(webclientCredential.credential.username);
    }
    public async enterPassword() {
        await this.password.fill(webclientCredential.credential.password);
    }
    public async clickLogin() {
        await this.buttonLogin.click();
    }
    // public async verifyCurrentUrl() {
    //     expect(this.page.url()).toEqual(webclientCredential.baseUrl);
    // }
    public async clickCancelInPopup() {
        await this.clickCancelButton.click();
    }
    public async clickSetDefaultPopup() {
        await this.dropDownToSelectCampus.click();
        await this.selectCampus.click();
        await this.clickSetDefault.click();
    }
    public async loginStudentCampus() {
        await this.username.fill(webclientCredential.credential.username);
        await this.password.fill(webclientCredential.credential.password);
        await this.buttonLogin.click();
    }
     /*
    @anbarasan
  click on the campusNexusButton
    */
   public async campusNexusButtonInHeader() {
    await this.campusNexusButton.click();
}
}
