import userData from "../../../../data/studentRegistration/userData.json"
export default class placement {
    page: any
    private search: any
    private clickStudent: any
    private careerServices: any
    private placementIntership: any
    private newPlacement: any
    private searchEmployee: any
    private checkEmployee: any
    private selectButton: any
    private jobTypeDropdown: any
    private clickJobType: any
    private placementStatusDropdown: any
    private clickPlacementStatus: any
    private jobTitleDropdown: any
    private enterJobTitle: any
    private description: any
    private salaryAmount: any
    private salaryStatusDropdown: any
    private clickSalaryStatus: any
    private salaryTypeDropdown: any
    private clickSalaryType: any
    private datePlaced: any
    private startDate: any
    private verificationAgent: any
    private verificaionAgentTitle: any
    private vericationDate: any
    private verificationPhoneNumber: any
    private verificationRepDropdown: any
    private clickVerificationRep: any
    private savePlacement:any

    constructor(page: any) {
        this.search = page.locator('#basicSearchSearchField')
        this.clickStudent = page.getByRole('gridCell', { name: 'anth, dubey' })
        this.careerServices = page.getByText('Career Services')
        this.placementIntership = page.getByRole('button', { name: 'Placements & Internship' })
        this.newPlacement = page.locator('#studentPlacementNewButton')
        this.searchEmployee = page.locator('#search_display_employerSearch')
        this.checkEmployee = page.getByLabel('1820 Portal Street')
        this.selectButton = page.locator('.cmc-btn-primary')
        this.jobTypeDropdown = page.locator('cmc-drop-down-list').filter({ hasText: 'Job Type *' }).getByLabel('select')
        this.clickJobType = page.getByText('*MTYP1')
        this.placementStatusDropdown = page.locator('cmc-drop-down-list').filter({ hasText: 'Placement Status *' }).getByLabel('select')
        this.clickPlacementStatus = page.getByTitle('In school Placed', { exact: true })
        this.jobTitleDropdown = page.locator('cmc-drop-down-list').filter({ hasText: 'Job Title *' }).getByLabel('select')
        this.enterJobTitle = page.getByTitle('robottitle', { exact: true })
        this.description = page.locator('#jobDescription')
        this.salaryAmount = page.getByRole('spinbutton', { name: 'Salary Amount' })
        this.salaryStatusDropdown = page.locator('cmc-drop-down-list').filter({ hasText: 'Salary Status *' }).getByLabel('select')
        this.clickSalaryStatus = page.getByTitle('Actual', { exact: true })
        this.salaryTypeDropdown = page.locator('cmc-drop-down-list').filter({ hasText: 'Salary Type *' }).getByLabel('select')
        this.clickSalaryType = page.getByTitle('robot salary', { exact: true })
        this.datePlaced = page.locator('#datePlaced')
        this.startDate = page.locator('#startDate')
        this.verificationAgent = page.locator('#plVerificationAgent')
        this.verificaionAgentTitle = page.locator('#plVerificationAgentTitle')
        this.vericationDate = page.locator('#plVerificationDate')
        this.verificationPhoneNumber = page.locator('#plVerificationPhone')
        this.verificationRepDropdown = page.locator('cmc-drop-down-list').filter({ hasText: 'Verification Representative *' }).getByLabel('select')
        this.clickVerificationRep = page.getByTitle('Campus Management', { exact: true }).nth(1)
        this.savePlacement=page.getByRole('button',{name:'Save & Close'})

    }

    public async clickSearch() {
        await this.search.fill(userData.studentData.studentName1)
        await this.clickStudent.click()
    }
    public async clickStudentSelected() {
        await this.careerServices.click()
        await this.placementIntership.click()
    }
    public async selectEmplyeeFromList() {
        await this.newPlacement.click()
        await this.searchEmployee.click()
        await this.checkEmployee.check()
        await this.selectButton.click()
    }
    public async selectJobType() {
        await this.jobTypeDropdown.click()
        await this.clickJobType.click()
    }
    public async selectPlacementStatus() {
        await this.placementStatusDropdown.click()
        await this.clickPlacementStatus.click()
    }
    public async selectJobTitle() {
        await this.jobTitleDropdown.click()
        await this.enterJobTitle.click()
    }
    public async selectDescription() {
        await this.description.fill(userData.plcacementData.description)
    }
    public async selectSalaryAmount() {
        await this.salaryAmount.fill(userData.plcacementData.salaryAmount)
    }
    public async selectSalaryStatus() {
        await this.salaryStatusDropdown.click()
        await this.clickSalaryStatus.click()
    }
    public async selectSalaryType() {
        await this.salaryTypeDropdown.click()
        await this.clickSalaryType.click()
    }
    public async selectDatePlaced() {
        await this.datePlaced.fill(userData.date.datePlaced)
    }
    public async selectStartDate() {
        await this.startDate.fill(userData.date.startDate)
    }
    public async selectVerificationAgent() {
        await this.verificationAgent.fill(userData.plcacementData.agentName)
    }
    public async selectVerificationAgentTitle() {
        await this.verificaionAgentTitle.fill(userData.plcacementData.agentTitle)
    }
    public async selectVerificationDate() {
        await this.vericationDate.fill(userData.plcacementData.date)
    }
    public async selectVerificationPhoneNumber() {
        await this.verificationPhoneNumber.fill(userData.plcacementData.phoneNumber)
    }
    public async selectVerificationRepresentative() {
        await this.verificationRepDropdown.click()
        await this.clickVerificationRep.click()
    }
    public async clickSaveAndCloseButton(){
        await this.savePlacement.click()
    }
}