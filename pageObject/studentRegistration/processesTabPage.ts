export default class processesTabPage {
    page: any;
    private reassignProspectButton: any;
    private revenueRecognitionButton: any;
    constructor(page: any) {
        this.page = page;
        this.reassignProspectButton = page.getByText('Reassign Prospects', { exact: true });
        this.revenueRecognitionButton = page.getByText('Revenue Recognition', { exact: true });
    }
    public async clickReassignProspect() {
        await this.reassignProspectButton.click()
    }
    public async clickRevenueRecognition() {
        await this.revenueRecognitionButton.click()
    }
}