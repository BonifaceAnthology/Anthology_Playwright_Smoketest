import { expect } from "@playwright/test";
export default class Admissions {
    page: any;
    private admissionsLink:any;
    private schoolFields:any;
    private schoolFieldsPagetitle:any;
    private schoolFieldsSaveButton:any;
    constructor(page: any) {
        this.page = page;
        this.admissionsLink=page.locator('//span[contains(text(),"Admissions")]')
        this.schoolFields=page.locator('//span[contains(text(),"Admissions")]//parent::li//div/div/span[contains(text(),"School Fields")]')
        this.schoolFieldsPagetitle=page.locator('//div[text()="School Fields"]')
        this.schoolFieldsSaveButton=page.locator('(//button[@aria-label="Save"])[2]')
    }
    /*
    @anbarasan
    Click admissions link in the student page
    */
    public async clickAdmissionsLink() {
       await this.admissionsLink.click();
    }
    /*
    @anbarasan
    Click School Fields link in the Admission tile
    */
    public async clickSchoolFields() {
       await this.schoolFields.click();
    }
    /*
    @anbarasan
    verify School Fields link in the Admission tile
    */
    public async verifySchoolFieldsPagetitle() {
       await expect.soft(this.schoolFieldsPagetitle).toBeVisible();
    }
    /*
    @anbarasan
    click save button School Fields page
    */
    public async clickSchoolFieldsSaveButton() {
      await this.schoolFieldsSaveButton.click();
    }

}