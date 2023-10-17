import formData from "../../../../data/studentRegistration/formData.json"
import workbookData from '../../../../data/studentRegistration/WorkbookData/workbookData.json'
import { expect } from "@playwright/test";
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass()
export let vName = genericMethod.randcharset();
export let vCode = genericMethod.randcharset();
export default class newProgramVersionPage {
    page: any;
    private code: any;
    private name: any;
    private degree: any;
    private selectDegree: any;
    private campusLicenseUnit: any;
    private selectCampusLicenseUnit: any;
    private specialProgram: any;
    private selectSpecialProgram: any;
    private programGroup: any;
    private selectProgramGropu: any;
    private saveProgramGroup: any;
    private gradeScale: any;
    private selectGradeScale: any;
    private activeUnits: any;
    private activeUnitType: any;
    private publishedProgramLength: any;
    private publishedProgramLengthAmount: any;
    private totalWeeks: any;
    private saveProgramVersion: any;
    private validateCodeName: any;
    private startDateTile: any;
    private detailSettingsTile: any;
    private detailSettingsText: any;
    private requiredExternshipStartDate: any;
    private selectRequiredExternshipStartDate: any;
    private hoursPerWeekForExternship: any;
    private creditForExternship: any;
    private totalHoursForExternship: any;
    private programVersionAttendanceRequired: any;
    private selectProgramVersionAttendanceRequired: any;
    private areaOfStudy: any;
    private selectAreaOfStudy: any;
    constructor(page: any) {
        this.page = page;
        this.code = page.locator('#programVersionCodeId')
        this.name = page.locator('#programVersionNameId')
        this.degree = page.locator('//span[@aria-controls="degreeId_listbox"]//span')
        this.selectDegree = page.locator('[title="Robo_Degree_1"]')
        this.campusLicenseUnit = page.locator('[class="k-icon k-i-arrow-60-down"]').nth(3)
        this.selectCampusLicenseUnit = page.locator('//*[@id="campusLicenseId_listbox"]/li[2]')
        this.specialProgram = page.locator('[class="k-icon k-i-arrow-60-down"]').nth(6)
        this.selectSpecialProgram = page.locator('[title="B"]')
        this.programGroup = page.locator('#search_display_programGroupId')
        this.selectProgramGropu = page.locator('[aria-label="12277GR - Test Program Group"]')
        this.saveProgramGroup = page.getByRole('button', { name: 'Select' })
        this.gradeScale = page.locator('[class="k-icon k-i-arrow-60-down"]').nth(9)
        this.selectGradeScale = page.locator('[title="Pass Fail Grade"]')
        this.activeUnits = page.locator('[aria-label="Active Units"]').nth(1);
        this.activeUnitType = page.locator('[aria-label="Active Unit Type"]').nth(1)
        this.publishedProgramLength = page.locator('//input[@name="publishedProgramLengthId_input"]')
        this.publishedProgramLengthAmount = page.locator('[aria-label="Published Program Length Amount"]').nth(1)
        this.totalWeeks = page.locator('[aria-label="Total Weeks"]').nth(1)
        this.saveProgramVersion = page.locator('[aria-label="Save"]').first()
        this.startDateTile = page.locator('//cns-tile[@cns-label="Start Dates"]/div')
        this.validateCodeName = page.locator('[class="hideOutline titleText ng-binding"]')
        this.detailSettingsTile = page.getByText('Detail Settings', { exact: true }).first()
        this.detailSettingsText = page.getByText('Detail Settings', { exact: true }).nth(1)
        this.requiredExternshipStartDate = page.locator('//span[@aria-label="Required Externship Start Date"]//span//span[2]//span')
        this.selectRequiredExternshipStartDate = page.locator('//ul[@id="requiredExternshipStartDate_listbox"]//li[1]')
        this.hoursPerWeekForExternship = page.locator('[aria-label="Expected Hours Per Week for Externship"]').nth(1)
        this.creditForExternship = page.locator('[aria-label="Total Credits for Externship"]').nth(1)
        this.totalHoursForExternship = page.locator('[aria-label="Total Hours for Externship"]').nth(1)
        this.programVersionAttendanceRequired = page.locator('//span[@aria-owns="attendanceRequired_listbox"]//span//span[2]//span')
        this.selectProgramVersionAttendanceRequired = page.locator('//ul[@id="attendanceRequired_listbox"]//li[1]')
        this.areaOfStudy = page.locator('//span[@aria-owns="areaOfStudy_listbox"]//span//span[2]//span')
        this.selectAreaOfStudy = page.locator('//ul[@id="areaOfStudy_listbox"]//li[2]')
    }
    public async validatedCodeName() {
       let programVersionName =await genericMethod.readTheDataInExcel(workbookData.WorkbookName, workbookData.Students.sheetName
            , workbookData.Students["Program Versions"])
        console.log("programVersionName",programVersionName)
        await this.page.waitForTimeout(2000);
        await expect.soft(this.page.getByText(`${await programVersionName}`).first()).toBeVisible();
    }
    public async openStartDateTile() {
        await this.startDateTile.click();
    }
    public async fillProgramVersionInfo() {
        await this.code.fill(formData.programVersionForm.code + await vCode);
        await this.name.fill(formData.programVersionForm.name + await vName);
        await this.degree.click()
        await this.page.waitForTimeout(3000);
        await this.selectDegree.click()
        await this.campusLicenseUnit.click();
        await this.selectCampusLicenseUnit.click();
        await this.specialProgram.click();
        await this.selectSpecialProgram.click();
        await this.programGroup.click();
        await this.selectProgramGropu.click();
        await this.saveProgramGroup.click();
        await this.gradeScale.click();
        await this.selectGradeScale.click();
        await this.activeUnits.fill(formData.programVersionForm.activeUnits);
        await this.activeUnitType.fill(formData.programVersionForm.activeUnitType);
        await this.publishedProgramLength.fill(formData.programVersionForm.PublishedProgramLength);
        await this.publishedProgramLengthAmount.fill(formData.programVersionForm.PublishedProgramLengthAmount);
        await this.page.waitForTimeout(2000);
        await this.totalWeeks.fill(formData.programVersionForm.totalWeeks);
        await this.page.waitForTimeout(2000);
        await this.saveProgramVersion.click();
        await genericMethod.writeTheDataInExcel(workbookData.WorkbookName, workbookData.Students.sheetName
            , workbookData.Students["Program Versions"], formData.programVersionForm.name + await vName)
    }
    public async clickDetailSettingTile() {
        await this.detailSettingsTile.click()
        await expect.soft(this.detailSettingsText).toHaveText(formData.detailSettingForm.detailSettingsText)
    }
    public async fillDetailSetting() {
        await this.requiredExternshipStartDate.click()
        await this.selectRequiredExternshipStartDate.click()
        await this.hoursPerWeekForExternship.fill(formData.detailSettingForm.hoursPerWeekForExternship)
        await this.creditForExternship.fill(formData.detailSettingForm.creditForExternship)
        await this.totalHoursForExternship.fill(formData.detailSettingForm.totalHoursForExternship)
        await this.programVersionAttendanceRequired.click()
        await this.selectProgramVersionAttendanceRequired.click()
        await this.page.waitForTimeout(1000);
        await this.areaOfStudy.click()
        await this.selectAreaOfStudy.click()
        await this.saveProgramVersion.click();
    }


















}