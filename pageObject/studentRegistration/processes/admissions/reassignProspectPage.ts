import { expect } from "@playwright/test";
import formData from "../../../../data/studentRegistration/formData.json"
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass();
export default class reassignProspectPage {
    page: any;
    private reassignProspectText: any;
    private crossCampus: any;
    private clickCampus: any;
    private chooseCampus: any;
    private selectCampus: any;
    private prospectDateFrom: any;
    private prospectDateTo: any;
    private newAdmissionTask: any;
    private nextButton: any;
    private queueReassignButton: any;
    private batchText: any;
    private clickQueue: any;
    private reassignProspectPopUp: any;
    private errorMessegeOne: any;
    constructor(page: any) {
        this.page = page;
        this.reassignProspectText = page.getByText('Reassign Prospects', { exact: true }).nth(1);
        this.crossCampus = page.locator('[class="cmc-icons-cancel cmc-icons-sm"]');
        this.clickCampus = page.locator('#search_display_campus');
        this.chooseCampus = page.locator('[aria-label="Test Campus 2023-1"]');
        this.selectCampus = page.getByRole('button', { name: "Select", exact: true });
        this.prospectDateFrom = page.locator('#prospectStartDate');
        this.prospectDateTo = page.locator('#prospectEndDate');
        this.newAdmissionTask = page.locator('[name="newAdmissionsRepresentativeTask_input"]');
        this.nextButton = page.getByRole('button', { name: "Next", exact: true });
        this.queueReassignButton = page.locator('#queueApproveButton');
        this.batchText = page.locator('[title="Queue Batch"]');
        this.clickQueue = page.getByRole('button', { name: "Queue", exact: true });
        this.reassignProspectPopUp = page.getByText('The Reassign Prospect records were successfully queued.')
        this.errorMessegeOne = page.getByText('Changes were not saved because there is invalid or missing data. Correct and save again.', { exact: true }).first();
    }
    public async validateProspectText() {
        await expect(this.reassignProspectText).toHaveText(formData.reassignProspectData.prospectText);
    }
    public async fillSelectionCriteria() {
        await this.crossCampus.click();
        await this.clickCampus.click();
        await this.chooseCampus.click();
        await this.selectCampus.click();
        await this.prospectDateFrom.fill(formData.reassignProspectData.dateFrom);
        await this.prospectDateTo.fill(formData.reassignProspectData.dateTo);
        await this.page.waitForTimeout(1000);
        await this.newAdmissionTask.fill(formData.reassignProspectData.newAdmissionTask);
        await this.nextButton.click();
        while (await this.errorMessegeOne.isVisible()) {
            if (await this.errorMessegeOne.isVisible()) {
                await this.nextButton.click();
                break;
            }
        }
        await this.page.waitForTimeout(2000);
        await this.queueReassignButton.click();
    }
    public async validateBatch() {
        await this.page.waitForTimeout(3000);
        await this.clickQueue.click();
    }
    public async validateReassignProspect() {
        await this.page.waitForTimeout(2000);
        await expect(this.reassignProspectPopUp).toHaveText(formData.reassignProspectData.popUpText);

    }
}