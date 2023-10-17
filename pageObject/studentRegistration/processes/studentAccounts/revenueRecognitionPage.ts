import { expect } from "@playwright/test";
import formData from "../../../../data/studentRegistration/formData.json"
export default class reassignProspectPage {
    page: any;
    private revenueRecognitionText: any;
    private unCheckCampus: any;
    private dropdown: any;
    private filterArrow: any;
    private inputCampus: any;
    private filterCampus: any;
    private clickCampus: any;
    private clickStartDate: any;
    private startDate: any;
    private leftArrow: any;
    private queueBatchButton: any;
    private queuePopUp: any;
    private succeededPopUp: any;
    private recognitionProcessText: any;
    constructor(page: any) {
        this.page = page;
        this.revenueRecognitionText = page.getByText('Revenue Recognition', { exact: true }).nth(1);
        this.unCheckCampus = page.locator('[class="k-checkbox"]').first();
        this.dropdown = page.locator('[class="k-icon k-i-more-vertical"]').nth(1);
        this.filterArrow = page.locator('[class="k-icon k-i-arrow-60-right k-menu-expand-arrow"]').nth(1);
        this.inputCampus = page.locator('[title="Value"]');
        this.filterCampus = page.getByRole('button', { name: "Filter" });
        this.clickCampus = page.locator('[class="k-checkbox"]').nth(1);
        this.clickStartDate = page.locator('[class="editable-cell"]').first();
        this.startDate = page.locator('[data-bind="value:StartDate"]');
        this.leftArrow = page.locator('[class="k-icon k-i-arrow-end-left"]');
        this.queueBatchButton = page.locator('[class="k-sprite k-icon fa fa-cogs"]');
        this.queuePopUp = page.getByText('Revenue Recognition records were successfully queued.', { exact: true });
        this.succeededPopUp = page.getByText('Revenue Recognition Batch Succeeded', { exact: true });
        this.recognitionProcessText = page.getByText('Revenue Recognition is in progress for the selected campuses. Retry when the process is complete.', { exact: true });
    }
    public async validateRevenueRecognitionText() {
        await expect.soft(this.revenueRecognitionText).toHaveText(formData.RevenueRecognitionData.revenueRecognition);
    }
    public async selectCampus() {
        await this.unCheckCampus.click();
        await this.dropdown.click();
        await this.filterArrow.click();
        await this.inputCampus.fill(formData.RevenueRecognitionData.campus);
        await this.filterCampus.click();
        await this.clickCampus.click();
        await this.clickStartDate.click();
        await this.startDate.fill(formData.RevenueRecognitionData.startDate);
        await this.leftArrow.click();
        await this.queueBatchButton.click();
    }
    public async validateRevenueRecognitionPopUp() {
        await this.page.waitForTimeout(1000);
        if (await this.queuePopUp.isVisible()) {
            await expect.soft(this.queuePopUp).toHaveText(formData.RevenueRecognitionData.queuePopUp);
            await expect.soft(this.succeededPopUp).toHaveText(formData.RevenueRecognitionData.succeededPopUp);
        } else {
            await expect.soft(this.recognitionProcessText).toHaveText(formData.RevenueRecognitionData.recognitionProcessText);
        }
    }
}