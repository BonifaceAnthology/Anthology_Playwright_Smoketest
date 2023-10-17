import formData from "../../../../data/studentRegistration/formData.json"
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass()
export let pDiscription = genericMethod.randcharset();
export let pCode = genericMethod.randcharset();
export default class createNewProgramPage {
    page: any;
    private discription: any;
    private code: any;
    private selectActive: any;
    private activeSelected: any;
    private selectProgrameGroup: any;
    private enterGroup: any;
    private searchGroup: any;
    private programeGroupSelected: any;
    private programeGroupConfirmed: any;
    private saveProgram: any;
    constructor(page: any) {
        this.page = page;
        this.discription = page.locator('#name');
        this.code = page.locator('#code');
        this.selectActive = page.locator('//*[@id="detailPane"]/div/cns-program/section/div/cmc-collapse/div/div[2]/div/div[1]/cmc-drop-down-list-classic/div/div/span/span');
        this.activeSelected = page.getByRole('option', { name: 'Yes' })
        this.selectProgrameGroup = page.locator('//*[@id="detailPane"]/div/cns-program/section/div/cmc-collapse/div/div[2]/div/div[4]/cmc-search/dl/dd[1]');
        this.enterGroup = page.locator('#search');
        this.searchGroup = page.locator('//*[@id="basicSearch"]/i[1]');
        this.programeGroupSelected = page.locator('[aria-label="101145 Progarm Group"]');
        this.programeGroupConfirmed = page.getByRole('button', { name: 'Select' })
        this.saveProgram = page.getByRole('button', { name: "Save", exact: true });
    }
    public async fillProgramInfo() {
        await this.discription.fill(formData.programForm.discription + await pDiscription);
        await this.code.fill(formData.programForm.code + await pCode);
        await this.selectActive.click();
        await this.activeSelected.click();
        await this.selectProgrameGroup.click();
        await this.enterGroup.fill(formData.programForm.group);
        await this.searchGroup.click();
        await this.programeGroupSelected.click()
        await this.programeGroupConfirmed.click()
        await this.saveProgram.click()
    }
}


