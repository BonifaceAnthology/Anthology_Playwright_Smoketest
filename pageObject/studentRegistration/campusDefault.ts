export default class campusDefault {
    page: any
    private clickCross: any;
    constructor(page: any) {
        this.page = page;
        this.clickCross = page.getByRole('button', { name: "X" ,exact:true});
    }
    public async clickDefaultCampus() {
        await this.clickCross.click()
    }
}