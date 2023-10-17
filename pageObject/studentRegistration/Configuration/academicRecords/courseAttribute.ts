import GenericMethods from '../../../../genericMethods/genericClass';
import userData from '../../../../data/studentRegistration/userData.json'
const genericmethod = new GenericMethods();
declare global {
    namespace NodeJS {
        interface Global {
            courseAttributeName: string;
            courseAttributeCode: string;
        }
    }
}
export default class courseAttribute {
    page: any
    private clickCourseAttribute:any
    private newbutton:any
    private name:any
    private code:any
    private saveAndClose:any
    private campusSelect: any;
    private clickSelectButton: any
    private campusNameSelect: any;

    constructor(page: any) {
        this.clickCourseAttribute = page.getByText('Course Attributes')
        this.newbutton = page.locator('#newButton')
        this.name = page.locator('#name')
        this.code = page.locator('#code')
        this.campusSelect = page.locator('#search_display_campusesSearchControl')
        this.campusNameSelect = page.locator('[aria-label="Test Campus 2023-1"]')
        this.clickSelectButton = page.getByRole('button', { name: 'Select' })
        this.saveAndClose = page.getByRole('button', { name: 'Save & Close' })
    }
    public async selectCourseAttributes() {
        await this.clickCourseAttribute.click()
    }
    public async clickNewButton() {
        await this.newbutton.click()
    }
    public async enterName() {
        let randchars = await genericmethod.randcharset();
        global.courseAttributeName = userData.courseLevel.name + randchars;
        await this.name.fill(global.courseAttributeName)
    }
    public async enterCode() {
        let randchars = await genericmethod.randcharset();
        global.courseAttributeCode = userData.courseLevel.code + randchars;
        await this.code.fill(global.courseAttributeCode)
    }
    public async enterCampus() {
        await this.campusSelect.click()
        await this.campusNameSelect.check()
        await this.clickSelectButton.click()
    }
    public async saveCourseAttribute() {
        await this.saveAndClose.click()
    }
}