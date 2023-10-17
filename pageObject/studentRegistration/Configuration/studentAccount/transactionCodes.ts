import GenericMethods from '../../../../genericMethods/genericClass';
import userData from '../../../../data/studentRegistration/userData.json'
const genericmethod = new GenericMethods();
declare global {
    namespace NodeJS {
        interface Global {
            TransactionCodeName: string;
            TransactionCodeCode: string;
        }
    }
}
export default class transactionCode {
    page: any
    private clickTransactionCode:any
    private newbutton:any
    private name:any
    private code:any
    private saveAndClose:any
    private campusSelect: any;
    private clickSelectButton: any
    private campusNameSelect: any;

    constructor(page: any) {
        this.clickTransactionCode = page.getByText('Transaction Codes')
        this.newbutton = page.locator('#newButton')
        this.name = page.locator('#name')
        this.code = page.locator('#code')
        this.campusSelect = page.locator('#search_display_campus')
        this.campusNameSelect = page.locator('[aria-label="Test Campus 2023-1"]')
        this.clickSelectButton = page.getByRole('button', { name: 'Select' })
        this.saveAndClose = page.getByRole('button', { name: 'Save & Close' })
    }
    public async selectTransactionCodes() {
        await this.clickTransactionCode.click()
    }
    public async clickNewButton() {
        await this.newbutton.click()
    }
    public async enterName() {
        let randchars = await genericmethod.randcharset();
        global.TransactionCodeName = userData.courseLevel.name + randchars;
        await this.name.fill(global.TransactionCodeName)
    }
    public async enterCode() {
        let randchars = await genericmethod.randcharset();
        global.TransactionCodeCode = userData.courseLevel.code + randchars;
        await this.code.fill(global.TransactionCodeCode)
    }
    public async enterCampus() {
        await this.campusSelect.click()
        await this.campusNameSelect.check()
        await this.clickSelectButton.click()
    }
    public async saveTransactionCode() {
        await this.saveAndClose.click()
    }
}