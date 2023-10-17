import { expect } from "@playwright/test"
import userData from "../../data/studentRegistration/userData.json"
export default class enrollment {
    page: any
    private search: any
    private clickStudent: any
    private academicRecords: any
    private enrollment: any
    private newButton: any
    private campusName: any
    private adminRep: any
    private nextButton: any
    private programType: any
    private studentStatusDropdown: any
    private studentStatus: any
    private program: any
    private selectProgram: any
    private programVersion: any
    private programVersionSelect: any
    private versionStartDate: any
    private selectDate: any
    private catalog: any
    private catalogName: any
    private shift: any
    private shiftName: any
    private gradeLabel: any
    private selectGradeLabelOption: any
    private addButton: any
    private checkbox: any
    private selectButton: any
    private advertiser: any
    private staffGrp: any
    private stafGrpSelect: any
    private bilingMethod: any
    private selectBilling: any
    private advertiserName: any
    private advertiserNameSelect: any
    private okButton: any
    private enrollButton: any
    private studentCourses: any
    private addCourseButton: any
    private course: any
    private courseSelect: any
    private term: any
    private searchTerm: any
    private termSelect: any
    private saveRegister: any
    private closePopup: any
    private courseRegister: any
    private clickNextNavigation: any
    private gridSelect: any
    private regeisterSaveButton: any
    private registerPopup: any
    private threeDotsMenu: any
    private clickUnregister: any
    private unregisterButton: any
    private drop: any
    private dropCourseButton: any
    private clickReinste: any
    private clickReinstateButton: any
    private deleteButton: any
    private confirmDeleteButton: any
    private finalDelete: any


    constructor(page: any) {
        this.search = page.locator('#basicSearchSearchField')
        this.clickStudent = page.getByRole('gridCell', { name: 'Js, Prateek' })
        this.academicRecords = page.getByText('Academic Records')
        this.enrollment = page.getByRole('button', { name: 'Enrollments' })
        this.newButton = page.locator('#newButton')
        this.campusName = page.locator('#campusId_readOnlyText')
        this.adminRep = page.locator('#enrollAssignedAdmissionsRep').getByText('.AAA .aAA')
        this.nextButton = page.getByRole('button', { name: 'Next' })
        this.programType = page.locator('#programType_readOnlyText')
        this.studentStatusDropdown = page.locator('cmc-drop-down-list').filter({ hasText: 'Student Status *' }).getByLabel('select')
        this.studentStatus = page.getByText('Future Start').first()
        this.program = page.locator('cmc-drop-down-list').filter({ hasText: 'Program *' }).getByLabel('select')
        this.selectProgram = page.getByText('BoPr_MT#1')
        this.programVersion = page.getByRole('combobox', { name: 'Program Version' }).getByLabel('select').locator('span')
        this.programVersionSelect = page.getByText('BPV_MT#1').nth(1)
        this.versionStartDate = page.getByRole('combobox', { name: 'Version Start Date' }).getByLabel('select').locator('span')
        this.selectDate = page.getByText('BOPVST_4Jy23').nth(1)
        this.catalog = page.getByRole('combobox', { name: 'Catalog' }).getByLabel('select').locator('span')
        this.catalogName = page.getByTitle('Ctyr_23_24')
        this.shift = page.locator('cmc-drop-down-list').filter({ hasText: 'Shift *' }).getByLabel('select')
        this.shiftName = page.getByText('Mon. & Wed. evenings')
        this.gradeLabel = page.locator('cmc-drop-down-list').filter({ hasText: 'Grade Level *' }).getByLabel('select')
        this.selectGradeLabelOption = page.getByText('1st year, attended college before')
        this.addButton = page.locator('#addAOSButton')
        this.nextButton = page.getByRole('button', { name: 'Next' })
        this.checkbox = page.getByRole('checkbox')
        this.selectButton = page.getByRole('button', { name: 'Select' })
        this.bilingMethod = page.locator('cmc-drop-down-list').filter({ hasText: 'Billing Method *' }).getByLabel('select')
        this.selectBilling = page.getByTitle('*GR TERM', { exact: true })
        this.advertiser = page.locator('#advisorAddButton')
        this.staffGrp = page.getByRole('combobox', { name: 'Staff Group' }).getByLabel('select').locator('span')
        this.stafGrpSelect = page.getByRole('option', { name: '!!!Test Raajk' })
        this.advertiserName = page.getByRole('combobox', { name: 'Advisor Name' }).getByLabel('select').locator('span')
        this.advertiserNameSelect = page.getByRole('option', { name: 'C2kbuild 2kbuild' })
        this.okButton = page.getByRole('button', { name: 'OK' })
        this.enrollButton = page.locator('#enrollmentPeriodSaveButton').first()

        this.studentCourses = page.getByRole('button', { name: 'Student Courses' })
        this.addCourseButton = page.locator('#addCourseButton')
        this.course = page.getByRole('combobox', { name: 'Course' })
        this.courseSelect = page.getByRole('checkbox', { name: '!!STMT' })
        this.term = page.getByRole('combobox', { name: 'term' })
        this.searchTerm = page.getByPlaceholder('Search Name')
        this.termSelect = page.getByLabel('#someTrm')
        this.saveRegister = page.getByRole('button', { name: 'Save & Register' })
        this.closePopup = page.locator('#courseTakenNotAppliedDialogOkButton')
        this.courseRegister = page.locator('#courseUnRegisterButton')
        this.clickNextNavigation = page.locator('#courseInformationProceedButton')
        this.gridSelect = page.getByText('ApiUser, Faa')
        this.regeisterSaveButton = page.locator('#registerSaveButton')
        this.registerPopup = page.locator('#schedueCourseDialogOkButton')
        this.threeDotsMenu = page.locator('.k-overflow-anchor').first()
        this.drop = page.getByRole('link', { name: 'Drop' })
        this.dropCourseButton = page.locator('#dropCourse')
        this.clickReinste = page.getByRole('link', { name: 'Reinstate' })
        this.clickReinstateButton = page.locator('#confirmReinstateCourseWindowOkButton')
        this.clickUnregister = page.getByRole('link', { name: 'Unregister' })
        this.unregisterButton = page.getByRole('button', { name: 'Unregister' })
        this.deleteButton = page.locator('#deletedCourseButton')
        this.confirmDeleteButton = page.locator('#confirmDeleteDialogOkButton')
        this.finalDelete=page.locator('#okDelete')
    }

    public async clickSearch() {
        await this.search.fill(userData.studentData.studentName2)
    }
    public async clickStudentSelected() {
        await this.academicRecords.click()
        await this.enrollment.click()
        await this.newButton.click()
    }

    public async verifyCampus() {
        await expect(this.campusName).toHaveText(userData.studentData.campusName)
    }

    public async verifyAdminRep() {
        await expect(this.adminRep).toContainText(userData.studentData.adminRep)
    }

    public async clickNextButton() {
        await this.nextButton.click()
    }
    public async verifyDegree() {
        await expect(this.programType).toContainText(userData.studentData.degree)
    }

    public async selectStudentStatus() {
        await this.studentStatusDropdown.click()
        await this.studentStatus.click()
    }
    public async selectProgramfromList() {
        await this.program.click()
        await this.selectProgram.click()
    }

    public async selectProgramVersionFromList() {
        await this.programVersion.click()
        await this.programVersionSelect.click()
    }

    public async selectVersionDate() {
        await this.versionStartDate.click()
        await this.selectDate.click()
    }

    public async selectCatalog() {
        await this.catalog.click()
        await this.catalogName.click()
    }

    public async selectShift() {
        await this.shift.click()
        await this.shiftName.click()
    }
    public async selectGradeLabel() {
        await this.gradeLabel.click()
        await this.selectGradeLabelOption.click()
    }

    public async selectAreaOfStudy() {
        await this.addButton.click()
        await this.checkbox.check()
        await this.selectButton.click()
        await this.nextButton.click()
    }

    public async selectBillingMethod() {
        await this.bilingMethod.click()
        await this.selectBilling.click()
        await this.nextButton.click()
    }

    public async selectAdvertiser() {
        await this.advertiser.click()
        await this.staffGrp.click()
        await this.stafGrpSelect.click()
        await this.advertiserName.click()
        await this.advertiserNameSelect.click()
        await this.okButton.click()
        await this.nextButton.click()
    }

    public async clickEnrollButton() {
        await this.enrollButton.click()
    }

    public async clickStudentcourese() {
        await this.clickStudent.click()
        await this.studentCourses.click()
    }

    public async selectCourse() {
        await this.addCourseButton.click()
        await this.course.click();
        await this.courseSelect.check()
        await this.selectButton.click()
    }
    public async selectTerm() {
        await this.term.click()
        await this.searchTerm.fill(userData.termsData.termName)
        await this.searchTerm.press(userData.keyboard.enter)
        await this.termSelect.check()
        await this.selectButton.click()
    }

    public async saveStudentCourse() {
        await this.saveRegister.click()
        await this.closePopup.click()
    }
    public async clickCourseSelect(){
        await this.courseSelect.first().check()
    }
    public async registerCourseSelected() {
        await this.threeDotsMenu.click()
        await this.courseRegister.click()
    }

    public async clickNextNaviagationButton() {
        await this.clickNextNavigation.click()
    }
    public async clickgridSelect() {
        await this.gridSelect.click()
    }

    public async clickRegisterSaveButton() {
        await this.regeisterSaveButton.first().click()
    }
    public async registerButtton() {
        await this.registerPopup.click()
    }

    public async dropCourse() {
       await this.threeDotsMenu.click()
        await this.drop.click()
        await this.dropCourseButton.click()
    }

    public async reinstateCourse() {
        await this.threeDotsMenu.click()
        await this.clickReinste.click()
        await this.clickReinstateButton.click()
    }

    public async unregisterCourse() {
        await this.threeDotsMenu.click()
        await this.clickUnregister.click()
        await this.unregisterButton.click()
    }

    public async deleteCourse() {
        await this.courseSelect.first().check()
        await this.deleteButton.click()
        await this.confirmDeleteButton.click()
    }
    
    public async clickFinalDelete(){
        await this.finalDelete.nth(1).click()
        
    }

}