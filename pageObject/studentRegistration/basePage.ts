import { expect } from '@playwright/test';
export default class BasePage {
    page: any;
    private titleHome: any;
    private linkStudents: any;
    private linkClassSchedule: any;

    constructor(page: any) {
        this.page = page
        this.titleHome = page.getByRole('heading', { name: 'Home' })
        this.linkStudents = page.locator('#temporar-link-to-students')
        this.linkClassSchedule = page.locator('#temporar-link-to-daily-schedule')
    }
    public async verifyTitleHome() {
        const Title = await this.titleHome.textContent()
        expect.soft(Title).toEqual('Home');
    }
    public async clickStudentsLink() {
        await this.linkStudents.click();
    }
    public async clickClassSchedulingLink() {
        await this.linkClassSchedule.click();
    }
}