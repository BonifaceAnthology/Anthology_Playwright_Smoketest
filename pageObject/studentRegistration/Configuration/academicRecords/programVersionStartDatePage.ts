import formData from "../../../../data/studentRegistration/formData.json"
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass()
let dDiscription = genericMethod.randcharset();
let dCode = genericMethod.randcharset();
export default class programVersionStartDatePage {
    page: any;
    private addStartDate: any;
    private discription: any;
    private code: any;
    private startDate: any;
    private campus: any;
    private checkCampus: any;
    private selectCampus: any;
    private saveStartDate: any;
    constructor(page: any) {
        this.page = page;
        this.addStartDate = page.locator('#newButton')
        this.discription = page.locator('#name')
        this.code = page.locator('#code')
        this.startDate = page.locator('[aria-owns="startDate_dateview"]')
        this.campus = page.locator("//div[@id='search_display_campusId']")
        this.checkCampus = page.locator('[aria-label="Test Campus 2023-1"]')
        this.selectCampus = page.getByRole('button', { name: "Select" })
        this.saveStartDate = page.locator('[class="cmc-toolbar-button ng-binding"]').first()
    }
    public async fillStartDateInfo() {
        await this.addStartDate.click();
        await this.discription.fill(formData.programVersionStartDForm.discription + await dDiscription);
        await this.code.fill(formData.programVersionStartDForm.code + await dCode)
        await this.startDate.fill(formData.programVersionStartDForm.startDate)
        await this.campus.click()
        await this.campus.click()
        await this.checkCampus.click()
        await this.selectCampus.click()
        await this.saveStartDate.click()
    }
}