import GenericMethods from "../../../genericMethods/genericClass";
const genericclass = new GenericMethods();
export default class CommonUtils {
    private clickReset: any;
    private clicksettings: any;
    private clickNewButton: any;
    private clickSaveAndCloseButton: any;
    private filter: any;
    private deleteButton: any;
    private nameInFilterOption: any;
    private deletebuttonInThePopup: any;
    private checkall:any
    page: any;
    constructor(page: any) {
        this.page = page;
        this.clicksettings = page.locator('xpath=//a[contains(@id,"settingsButton")]')
        this.clickReset = page.getByRole('link', { name: ' Reset to Default' })
        this.clickNewButton = page.getByRole('link', { name: ' New' })
        this.filter = page.locator('//a[@title="Show Filters"]')
        this.clickSaveAndCloseButton = page.locator('//button[@aria-label="Save & Close"]')
        this.deleteButton = page.locator('#deleteButton')
        this.nameInFilterOption = page.locator('//input[@aria-label="Name"]')
        this.deletebuttonInThePopup = page.locator('//button[contains(text(),"Delete")]')
        this.checkall=page.locator('#checkAll')

    }
    /*
    @anbarasan
    This function we can pass the text that we need to select in the configuration list
    @searchtext pass the module name to select in the configuration page.
    */
    public async clickFousedSearch(searchtext) {
        await this.page.locator(`xpath=//span[text()='${searchtext}']`).click();
    }
    /*
     @anbarasan
     This function used click Reset To Default in the settings
     */
    public async clickRestToDefault() {
        await this.clicksettings.click();
        await genericclass.simulateAsyncTask();
        if (await this.clickReset.isVisible()) {
            await this.clickReset.click();
        } else {
            await this.clicksettings.click();
            await this.clickReset.click();
        }
    }
    /*
   @anbarasan
   This function used to click the New button in congiguration-sub modules 
   */
    public async clickNew() {
        await this.clickNewButton.click();
    }
    /*
   @anbarasan
   This function used to click the Delete in congiguration-sub modules 
   */
    public async clickDelete() {
        await this.deleteButton.click();
        await this.deletebuttonInThePopup.click();
    }
    /*
  @anbarasan
  This function used click Filter option the module grid
  */
    public async clickFilter() {
        if (await this.filter.isVisible()) {
            await this.filter.click();
        } else {
            //do nothing already element is clicked
        }
    }
    /*
        @anbarasan
        This function used click Save & close Button
        */
    public async clickSaveAndCloseButtonOnDetailPane() {
        await this.clickSaveAndCloseButton.click();
    }
    /*
        @anbarasan
        This function used fill the name in the filter option
        @value pass the value that need to be filed
        */
    public async fillTheNameFilter(value) {
        await this.nameInFilterOption.fill(value);
        await this.nameInFilterOption.press('Enter');
    }
    /*
        @anbarasan
        This function used to check all the filtered options
        
        */
    public async clickCheckAll() {
        await this.checkall.click();
        
    }

}