import userData from '../../../../data/studentRegistration/userData.json'
export default class awarding {
  page: any
  private searchStudent: any
  private clickStudent: any
  private financialAid: any
  private clickAwarding: any
  private newButton: any
  private clickAutomatic: any
  private clickHour: any
  private valueFill: any
  private gridcell:any
  private saveTransferCredit: any
  private clickDownArrow: any
  private clickGradeLevel: any
  private selectHousingFromDropdown: any
  private clickHousing: any
  private selectAcademicYear: any
  private clickYearfromDropdown: any
  private updateYear: any
  private weeksInAY: any
  private packagingDropdown: any
  private packagingYeard1Status: any
  private startDate: any;
  private endDate: any;
  private budgetDefinitionDropdown: any
  private selectBudgetDefination: any
  private academicYearButton: any
  private clickGridcell: any
  private clickDelete: any
  private confirmDelete: any
  private proceedDeleteButton: any

  constructor(page: any) {
    this.page=page;
    this.searchStudent = page.locator('#basicSearchSearchField')
    this.clickStudent = page.getByRole('gridCell', { name: 'anth, dubey' })
    this.financialAid = page.getByText(' Financial Aid', { exact: true })
    this.clickAwarding = page.getByRole('button', { name: 'Awarding' })
    this.newButton = page.locator('#newButton')
    this.clickAutomatic = page.locator('#autoAwardingYearDialogOkButton')
    this.clickHour = page.getByRole('spinbutton', { name: 'Enter positive number of transfer credits' })
    this.startDate = page.locator('#startDate')
    this.endDate = page.locator('#endDate')
    this.valueFill = page.locator('#transferCreditHours')
    this.saveTransferCredit = page.locator('#saveTransferCredit')
    this.gridcell=page.getByText('04/29/2024')
    this.clickDownArrow = page.getByRole('combobox', { name: 'Grade Level' }).getByLabel('select').locator('span')
    this.clickGradeLevel = page.getByTitle('1st year, never attended college').first()
    this.selectHousingFromDropdown = page.getByRole('combobox', { name: 'Housing' }).getByLabel('select').locator('span')
    this.clickHousing = page.getByTitle('On Campus')
    this.selectAcademicYear = page.getByRole('combobox', { name: 'Academic Year' }).getByLabel('select').locator('span')
    this.clickYearfromDropdown = page.getByTitle('.40 WK')
    this.updateYear = page.locator('#financialAcademicYearDialogOkButton')
    this.weeksInAY = page.getByLabel('Weeks Enrolled in AY').nth(1)
    this.packagingDropdown = page.getByRole('combobox', { name: 'Award Year 1 Packaging Status' }).getByLabel('select').locator('span')
    this.packagingYeard1Status = page.getByTitle('COMPLETE').first()
    this.budgetDefinitionDropdown = page.locator('//*[@id="listWrap"]/section/div[2]/cns-student-financial-awarding-academic-years/section/div/div[2]/section/div/cmc-collapse/div/div[2]/div/div[2]/div[2]/div[1]/div/div[1]/cmc-drop-down-list-classic/div/div/span/span/span[2]/span')
    this.selectBudgetDefination = page.getByTitle('Fall/Winter/Spring Diploma Budget')
    this.academicYearButton = page.getByRole('button', { name: 'Academic Years' })
    this.clickGridcell = page.getByText('08/20/2023').first()
    this.clickDelete = page.locator('#deleteButton')
    this.confirmDelete = page.locator('#confirmAwardingYearDeleteDialogOkButton')
    this.proceedDeleteButton = page.locator('#awardingYearDialogOkButton')
  }

  public async clickSearchStudent() {
    await this.searchStudent.fill(userData.studentData.studentName1)
    await this.clickStudent.click()
  }
  public async clickFinancialAid() {
    await this.financialAid.click()
    await this.clickAwarding.click()
  }
  public async clickNewButton() {
    await this.newButton.click()
    await this.clickAutomatic.click()
    await this.clickHour.click()
  }

  public async fillCreditHours() {
    await this.valueFill.fill(userData.studentData.hours)
    await this.saveTransferCredit.click()
  }
  public async selectGridCell(){
    await this.page.waitForTimeout(2000)
    await this.gridcell.click();
  }
  public async fillDates() {
    await this.startDate.click()
    await this.startDate.press(userData.keyboard.selectAll)
    await this.startDate.press(userData.keyboard.backspace)
    await this.startDate.fill(userData.date.startDate)
    await this.endDate.click()
    await this.endDate.press(userData.keyboard.selectAll)
    await this.endDate.press(userData.keyboard.backspace)
    await this.endDate.fill(userData.date.endDate)
  }
  public async selectGradeLevel() {
    await this.clickDownArrow.click()
    await this.clickGradeLevel.click()
  }

  public async selectHousing() {
    await this.selectHousingFromDropdown.click()
    await this.clickHousing.click()
  }
  public async selectAcademicYearFromDropdown() {
    await this.selectAcademicYear.click()
    await this.clickYearfromDropdown.click()
    await this.updateYear.click()
  }

  public async selectWeeksInAY() {
    await this.weeksInAY.fill(userData.studentData.weeks);
  }

  public async selectYear1PackagingStatus() {
    await this.packagingDropdown.click()
    await this.packagingYeard1Status.click()
  }

  public async budgetDefination() {
    await this.budgetDefinitionDropdown.click()
    await this.selectBudgetDefination.click()
    await this.academicYearButton.click()
    await this.clickGridcell.click()
  }

  public async deleteAwarding() {
    await this.clickDelete.click()
    await this.confirmDelete.click()
  }

  public async confirmDeleteOK() {
    await this.proceedDeleteButton.click()
  }
}