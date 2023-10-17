export default class programTestsPage {
    page: any;
    private testForm: any;
    private newTests: any;
    private selectTest: any;
    private selectedTest: any;
    private saveTest: any;
    constructor(page: any) {
        this.page = page;
        this.testForm = page.locator('#programTestGrid > section > div > cmc-collapse > div > div.cmc-collapse-header')
        this.newTests = page.locator('#newButton').nth(1);
        this.selectTest = page.locator('//span[@aria-controls="testId_listbox"]//span')
        this.selectedTest = page.locator('[title="ACT_4"]')
        this.saveTest = page.getByRole("button", { name: "Save" }).nth(3)
    }
    public async openTestForm() {
        await this.testForm.click();
    }
    public async openNewTest() {
        await this.newTests.click();
    }
    public async confirmTest() {
        await this.selectTest.click();
        await this.selectedTest.click();
    }
    public async saveTests() {
        await this.saveTest.click();
    }
    public async fillTestInfo() {
        await this.testForm.click();
        await this.newTests.click();
        await this.selectTest.click();
        await this.selectedTest.click();
        await this.saveTest.click();
    }
}