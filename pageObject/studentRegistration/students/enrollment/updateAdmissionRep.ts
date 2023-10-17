import userData from "../../../../data/studentRegistration/userData.json"
export default class admissionRep {
    page: any
    private search: any
    private clickStudent: any
    private academicRecords: any
    private enrollment: any
    private clickEnrolledCourse: any
    private enrollInfo: any
    private dropdown: any
    private clickAdmissionRep: any
    private save: any

    constructor(page: any) {
        this.search = page.locator('#basicSearchSearchField')
        this.clickStudent = page.getByRole('gridCell', { name: 'anth, dubey' })
        this.academicRecords = page.getByText('Academic Records')
        this.enrollment = page.getByRole('button', { name: 'Enrollments' })
        this.clickEnrolledCourse = page.getByRole('link', { name: 'BPV_MT#1' })
        this.enrollInfo = page.getByRole('button', { name: 'Enrollment Information' })
        this.dropdown = page.locator('cmc-drop-down-list').filter({ hasText: 'Admissions Rep' }).getByLabel('select')
        this.clickAdmissionRep = page.getByText('Config Tool',{exact:true}).nth(1)
        this.save = page.getByRole('button', { name: 'Save & Close' })
    }

    public async clickSearch() {
        await this.search.fill(userData.studentData.studentName1)
        await this.clickStudent.click()
    }
    public async clickStudentSelected() {
        await this.academicRecords.click()
        await this.enrollment.click()
        await this.clickEnrolledCourse.click()
    }

    public async clickenrollmentinfo() {
        await this.enrollInfo.click()
    }

    public async selectAdmissionRep() {
        await this.dropdown.click()
        await this.clickAdmissionRep.click()
    }

    public async clickSave() {
        await this.save.click()
    }
}