export default class programRequirenmentPage {
    page: any;
    private requirenmentForm: any;
    private newRequirenments: any;
    private programCheckBox: any;
    private saveProgram: any;
    constructor(page: any) {
        this.page = page;
        this.requirenmentForm = page.locator('//*[@id="programRequirementRuleGrid"]/section/div/cmc-collapse/div/div[1]');
        this.newRequirenments = page.locator('#newButton').nth(2);
        this.programCheckBox = page.locator('[aria-label="test"]');
        this.saveProgram = page.locator('#programRequirementRuleDetailSaveButton')
    }
    public async clickRequirenmentForm() {
        await this.requirenmentForm.click();
        await this.newRequirenments.click();
        await this.programCheckBox.click();
    }
    public async saveRequirenmentProgram() {
        await this.saveProgram.click();
    }
}
