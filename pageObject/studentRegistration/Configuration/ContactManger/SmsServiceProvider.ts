import GenericMethods from "../../../../genericMethods/genericClass";
import SmsServiceProviderData from '../../../../data/studentRegistration/configuration/contactManager/smsServiceProvider.json';
import { expect } from '@playwright/test';
const genericclass = new GenericMethods();
export default class SmsServiceProvider {
    private smsServiceProviderHeader: any;
    private newSmsServiceProviderHeader: any;
    private description: any;
    private code: any;
    private domainName: any;
    private maximumMessageLength: any;
    page: any;
    constructor(page: any) {
        this.page = page;
        this.newSmsServiceProviderHeader = page.locator('(//a[contains(@class,"primary-label")])[2]');
        this.smsServiceProviderHeader = page.locator('(//a[contains(@class,"primary-label")])[1]');
        this.description = page.locator('#name');
        this.code = page.locator('#code');
        this.domainName = page.locator('#domainName');
        this.maximumMessageLength = page.locator('#maximumMessageLength');
    }
    /*
    @anbarasan
    This function is used to validate the header of New sms service provider
    */
    public async VerifyNewSmsServiceProvider() {
        let actualValue = await this.newSmsServiceProviderHeader.textContent();
        await expect.soft(actualValue).toContain(SmsServiceProviderData["New SMS Service Provider"]["New SMS Service Provider"])
    }
    /*
   @anbarasan
   This function is used to validate the header of sms service provider
   */
    public async VerifySmsServiceProvider() {
        let actualValue = await this.smsServiceProviderHeader.textContent();
        await expect.soft(actualValue).toContain(SmsServiceProviderData["New SMS Service Provider"]["SMS Service Providers"])
    }
    /*
   @anbarasan
   This function is fill the Description
   */
    public async fillDescription() {
        await this.description.fill(SmsServiceProviderData["New SMS Service Provider"].Description)
    }
    /*
   @anbarasan
   This function is fill the code
   */
    public async fillCode() {
        await this.code.fill(SmsServiceProviderData["New SMS Service Provider"].code + await genericclass.getRandomThreeDigitNumber())
    }
    /*
   @anbarasan
   This function is fill domainName
   */
    public async filldomainName() {
        await this.domainName.fill(SmsServiceProviderData["New SMS Service Provider"]["Domain Name"])
    }
    /*
   @anbarasan
   This function is fill maximumMessageLength
   */
    public async fillMaximumMessageLength() {
        await this.maximumMessageLength.fill(SmsServiceProviderData["New SMS Service Provider"]["Max characters"])
    }
    /*
   @anbarasan
   This function is used to click the checkbox
   */
    public async clickSavedSMSServiceProvider(name) {
        await this.page.locator(`//a[text()="${name}"]`).first().click();
    }

}