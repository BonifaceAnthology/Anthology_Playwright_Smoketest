export default class ConfigurationPage {
    page: any;
    constructor(page: any) {
        this.page = page;
    }
    /*
    @anbarasan
    This function we can pass the text that we need to select in the configuration list
    */
    public async clickFousedSearch(searchtext) {
        await this.page.locator(`xpath=//span[text()='${searchtext}']`).click();
    }
}