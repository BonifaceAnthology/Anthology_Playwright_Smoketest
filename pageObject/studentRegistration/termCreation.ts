import { expect } from "@playwright/test"
import userData from '../../data/studentRegistration/userData.json'
import GenericMethods from "../../genericMethods/genericClass";
import workbookData from "../../data/studentRegistration/WorkbookData/workbookData.json"

const genericMethod = new GenericMethods();
declare global {
    namespace NodeJS {
        interface Global {
            termName: string;
            termCode: string;
        }
    }
}

export default class termsCreation {
    private term: any
    private newterm: any
    private termsDataName: any
    private termsDataCode: any
    private campus: any
    private campusSelect: any
    private campusNameSelect: any
    private select: any
    private startDate: any
    private endDate: any
    private save: any

    constructor(page: any) {

        this.term = page.locator('#lists-treeview > div.row.cmc-treeview-container.k-widget.k-treeview.cmc-treeview-hide-disabled > ul > li.k-item.k-first > ul > li:nth-child(39) > div > span')
        this.newterm = page.locator('#newButton')
        this.termsDataName = page.locator('#name')
        this.termsDataCode = page.locator('#code')
        this.campus = page.locator('#campusesSearch')
        this.campusSelect = page.locator('#search_display_campusesSearch > div > span')
        this.campusNameSelect = page.locator('[aria-label="Test Campus 2023-1"]')
        this.select = page.getByRole('button', { name: 'Select' })
        this.startDate = page.locator('#startDate')
        this.endDate = page.locator('#endDate')
        this.save = page.getByRole('button', { name: 'Save & Close' })
    }

    public async clickOnTerm() {
        await this.term.click()
    }
    public async buttonNewTerm() {
        await this.newterm.click()
    }
    public async filltermName() {
        let randchars = await genericMethod.randcharset();
        global.termName = userData.termsData.termName + randchars;
        await this.termsDataName.fill(global.termName)
    }
    public async fillCode() {
        let randchars = await genericMethod.randcharset();
        global.termCode = userData.termsData.termCode + randchars;
        await this.termsDataCode.fill(global.termCode)
    }
    public async clickOnCampus() {
        await this.campus.click()
    }
    public async clickCampus() {
        await this.campusSelect.click()
    }
    public async clickCampusName() {
        await this.campusNameSelect.click()
    }
    public async clickSelectButton() {
        await this.select.click()
    }
    public async startDateSelect() {
        await this.startDate.fill(userData.date.startDate)
    }
    public async endDateSelect() {
        await this.endDate.fill(userData.date.endDate)
    }
    public async clickSave() {
        await this.save.click()
        await genericMethod.writeTheDataInExcel(workbookData.WorkbookName, workbookData.Students.sheetName
            , workbookData.Students["Terms"], global.termName)
    }
    public async verifySave() {
        await expect(this.save).toContainText('Save & Close')
    }
}