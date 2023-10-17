import { expect } from "@playwright/test";
import formData from "../../../../data/studentRegistration/formData.json"
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass()
let bDiscription = genericMethod.randcharset()
let bCode = genericMethod.randcharset()
let fName = genericMethod.randcharset()
let lName = genericMethod.randcharset()
export default class createBankPage {
    page: any;
    private bankText: any;
    private newBank: any;
    private newBankText: any;
    private discription: any;
    private code: any;
    private dropdownCampus: any;
    private selectCampus: any;
    private firstName: any;
    private lastName: any;
    private saveBank: any;
    private dropArrow: any;
    private filterArrow: any;
    private fillBankDisc: any;
    private filterButton: any;
    private validBank: any;
    private bankAccoundText: any;
    private addBankAccount: any;
    private holderName: any;
    private accountNumber: any;
    private saveAccount: any;
    private bankADownArrow: any;
    private bankAFilterArrow: any;
    private inputNameForAcc: any;
    private filterAccName: any;
    private valideAccName: any;
    private clickRefresh: any;
    constructor(page: any) {
        this.page = page;
        this.bankText = page.getByText('Banks', { exact: true }).nth(1);
        this.newBank = page.locator('#newButton');
        this.newBankText = page.getByText('New Bank', { exact: true })
        this.discription = page.locator('#name');
        this.code = page.locator('#code');
        this.dropdownCampus = page.locator('//span[@aria-controls="campus_listbox"]//span')
        this.selectCampus = page.locator('[title="Test Campus 2023-1"]');
        this.firstName = page.locator('#firstName')
        this.lastName = page.locator('#lastName')
        this.saveBank = page.locator('[class="fa fa-save"]')
        this.dropArrow = page.locator('[class="k-icon k-i-more-vertical"]').nth(1);
        this.filterArrow = page.locator('[class="k-icon k-i-arrow-60-right k-menu-expand-arrow"]').nth(1);
        this.fillBankDisc = page.locator('[title="Value"]')
        this.filterButton = page.getByRole('button', { name: "Filter" })
        this.validBank = page.locator('[class="cmc-link-column"]').first()
        this.bankAccoundText = page.getByText('Bank Accounts', { exact: true })
        this.addBankAccount = page.locator('#newButton').nth(1);
        this.holderName = page.locator('//*[@id="name"]').nth(1);
        this.accountNumber = page.locator('#accountNumber');
        this.saveAccount = page.locator('[class="fa fa-save"]').nth(1)
        this.clickRefresh = page.locator('//a[@id="cnsBankAccountGrid_cnsToolbar_kendoToolBar_reloadButton"]/span')
        this.bankADownArrow = page.locator('[class="k-icon k-i-more-vertical"]').nth(6);
        this.bankAFilterArrow = page.locator('[class="k-icon k-i-arrow-60-right k-menu-expand-arrow"]').nth(3)
        this.inputNameForAcc = page.locator('[title="Value"]').nth(1);
        this.filterAccName = page.getByRole('button', { name: "Filter" });
        this.valideAccName = page.locator('[class="cmc-link-column"]').nth(1)
    }
    public async validateBankText() {
        await this.page.waitForTimeout(2000);
        await expect.soft(this.bankText).toHaveText(formData.bankForm.bank)
    }
    public async fillBankDetails() {
        await this.newBank.click();
        await this.page.waitForTimeout(3000);
        await expect.soft(this.newBankText).toHaveText(formData.bankForm.newBank)
        await this.discription.fill(formData.bankForm.discription + await bDiscription);
        await this.code.fill(formData.bankForm.code + await bCode);
        await this.page.waitForTimeout(2000);
        await this.dropdownCampus.click()
        await this.selectCampus.click();
        await this.firstName.fill(await fName);
        await this.lastName.fill(await lName);
        await this.saveBank.click();
    }
    public async validateBank() {
        await this.page.waitForTimeout(4000)
        await this.dropArrow.click();
        await this.filterArrow.click();
        await this.page.waitForTimeout(2000)
        await this.fillBankDisc.fill(formData.bankForm.discription + await bDiscription);
        await this.filterButton.click()
        await expect.soft(this.validBank).toHaveText(formData.bankForm.discription + await bDiscription)
    }
    public async validBankAccText() {
        await expect.soft(this.bankAccoundText).toHaveText(formData.bankForm.bankAccounts)
    }
    public async fillBankAccDetails() {
        await this.addBankAccount.click();
        await genericMethod.simulateAsyncTask();
        await this.holderName.fill(`${await fName} ${await lName}`);
        await genericMethod.simulateAsyncTask();
        await this.accountNumber.fill(formData.bankForm.accountNumber);
        await this.saveAccount.click();
    }
    public async validateBankAcc() {
        await genericMethod.simulateAsyncTask();
        await this.clickRefresh.click()
        await this.bankADownArrow.click();
        await genericMethod.simulateAsyncTask();
        await this.bankAFilterArrow.click();
        await this.inputNameForAcc.fill(`${await fName} ${await lName}`);
        await this.filterAccName.click();
        await this.page.waitForTimeout(2000);
        await expect.soft(this.valideAccName).toHaveText(`${await fName} ${await lName}`)
    }

}