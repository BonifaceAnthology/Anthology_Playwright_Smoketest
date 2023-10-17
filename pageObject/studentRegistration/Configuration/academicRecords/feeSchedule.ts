import GenericMethods from "../../../../genericMethods/genericClass";
import userData from "../../../../data/studentRegistration/userData.json";
import { expect } from "@playwright/test";

const genericMethod = new GenericMethods();
declare global {
  namespace NodeJS {
    interface Global {
      feeScheduleName: string;
      feeScheduleCode: string;
    }
  }
}
export default class feeSchedule {
  page: any;
  private clickfeeScheduleTile: any;
  private newFeeSchedule: any;
  private feeName: any;
  private feeCode: any;
  private effectiveDate: any;
  private saveFeeSchedule: any;
  private grid: any;
  private addBillingBUtton: any;
  private transaction: any;
  private selectTransaction: any;
  private clickSelectButton: any;
  private enterSequence: any;
  private enterAmount: any;
  private saveFee: any;
  private feeScheduleText: any;

  constructor(page: any) {
    this.page = page;
    this.clickfeeScheduleTile = page.getByText("Fee Schedules", {exact: true});
    this.feeScheduleText = page.getByText('Fee Schedules', { exact: true }).nth(1);
    this.newFeeSchedule = page.locator("#btnAddCourseFeeSchedule");
    this.feeName = page.locator("#courseFeeName");
    this.feeCode = page.locator("#courseFeeCode");
    this.effectiveDate = page.locator("#effectiveDate");
    this.saveFeeSchedule = page.locator("#saveModelContentButton");
    this.grid = page.getByRole("gridcell", { name: "yes" });
    this.addBillingBUtton = page.locator("#btnAddBilling");
    this.transaction = page.locator("#search_display_billingTransactionCodeId");
    this.selectTransaction = page.getByLabel("Books/Supplies", { exact: true });
    this.clickSelectButton = page.getByRole("button", { name: "Select" });
    this.enterSequence = page.getByPlaceholder("0", { exact: true });
    this.enterAmount = page.getByPlaceholder("0.00", { exact: true }).first();
    this.saveFee = page.getByRole("button",{ name: "Save & Close" },{ exact: true });
  }

  public async selectFeeSchedule() {
    await this.clickfeeScheduleTile.click();
    await this.page.waitForTimeout(2000);
  }
  public async verifyFeeScheduleText(){
    await expect.soft(this.feeScheduleText).toHaveText(userData.feeSchedule.feeScheduleText);
  }
  public async fillFeeScheduleDetails() {
    await this.newFeeSchedule.click();
    let randchars1 = await genericMethod.randcharset();
    global.feeScheduleName = userData.feeSchedule.name + randchars1;
    await this.feeName.fill(global.feeScheduleName);
    let randchars = await genericMethod.randcharset();
    global.feeScheduleCode = userData.feeSchedule.code+ randchars;
    await this.feeCode.fill(global.feeScheduleCode);
    await this.effectiveDate.fill(userData.date.effectiveDate);
    await this.saveFeeSchedule.click();
    await this.saveFeeSchedule.click();
  }
  public async clickGrid() {
    await this.grid.click();
  }
  public async addFee() {
    await this.addBillingBUtton.click();
    await this.transaction.click();
    await this.selectTransaction.check();
    await this.clickSelectButton.click();
    await this.enterSequence.fill(userData.feeSchedule.sequence);
    await this.enterAmount.fill(userData.feeSchedule.amount);
    await this.saveFee.click();
  }
}
