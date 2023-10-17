import { expect } from "@playwright/test";
import formData from "../../../../data/studentRegistration/formData.json"
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass()
let name = genericMethod.randcharset();
let code = genericMethod.randcharset();
let date = genericMethod.getRandomDate();
export default class calendars {
    page: any;
    private calendarText: any;
    private newButton: any;
    private newCalendarText: any;
    private discription: any;
    private code: any;
    private campus: any;
    private clickCampus: any;
    private selectCampusButton: any;
    private firstDate: any;
    private EndDate: any;
    private saveButton: any;
    private dropArrow: any;
    private filterArrow: any;
    private inputType: any;
    private filter: any;
    private validateCalendars: any;
    constructor(page: any) {
        this.page = page;
        this.calendarText = page.getByText('Calendars', { exact: true }).nth(1);
        this.newButton = page.locator("#newButton");
        this.newCalendarText = page.getByText('New Calendar', { exact: true });
        this.discription = page.locator('#name');
        this.code = page.locator('#code');
        this.campus = page.locator('[cmc-id="search_display_campusesSearchControl"]');
        this.clickCampus = page.locator('[aria-label="Test Campus 2023-1"]');
        this.selectCampusButton = page.getByRole('button', { name: "Select" });
        this.firstDate = page.locator('#startDate');
        this.EndDate = page.locator('#endDate');
        this.saveButton = page.getByRole('button', { name: "Save", exact: true });
        this.dropArrow = page.locator('//th[@data-field="Name"]/a[1]/span');
        this.filterArrow = page.locator('[class="k-icon k-i-arrow-60-right k-menu-expand-arrow"]').nth(1);
        this.inputType = page.locator('[title="Value"]');
        this.filter = page.getByRole('button', { name: "Filter" });
        this.validateCalendars = page.locator('[class="cmc-link-column"]').first();
    }
    public async validateCalendarText() {
        await genericMethod.simulateAsyncTask()
        await expect.soft(this.calendarText).toHaveText(formData.calendarsForm.calendarsText);
    }
    public async fillCalendars() {
        await this.newButton.click();
        await genericMethod.simulateAsyncTask()
        await expect.soft(this.newCalendarText).toHaveText(formData.calendarsForm.newCalendarsText);
        await this.discription.fill(formData.calendarsForm.name + await name);
        await this.code.fill(formData.calendarsForm.code + await code);
        await this.campus.click();
        await this.clickCampus.click();
        await this.selectCampusButton.click();
        await this.firstDate.fill(await date);
        await this.EndDate.fill(await date);
        await this.saveButton.click();
        await this.saveButton.click();
    }
    public async validateCalendar() {
        await this.page.waitForTimeout(2000)
        await this.dropArrow.click();
        await this.filterArrow.click();
        await this.inputType.fill(formData.calendarsForm.name + await name);
        await this.filter.click();
        await expect.soft(this.validateCalendars).toHaveText(formData.calendarsForm.name + await name);
    }
}