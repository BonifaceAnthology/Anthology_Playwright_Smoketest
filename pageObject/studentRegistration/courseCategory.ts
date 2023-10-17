import { expect } from "@playwright/test"
import userData from "../../data/studentRegistration/userData.json"

export default class courseCategory {
    page: any
    private courseCategory: any
    private newButton: any
    private name: any
    private code: any
    private save: any

    constructor(page: any) {
        this.courseCategory = page.getByText('Course Categories')
        this.newButton = page.locator('#newButton')
        this.name = page.locator('#name')
        this.code = page.locator('#code')
        this.save = page.getByRole('button', { name: 'Save' }).first()
    }

    public async clickCourseCategory() {
        await this.courseCategory.click()
    }

    public async clickNewButton() {
        await this.newButton.click();
    }

    public async nameCourse() {
        await this.name.fill(userData.courseData.courseName)
    }

    public async codeCourse() {
        await this.code.fill(userData.courseData.couseCode)
    }

    public async saveCategory() {
        await this.save.click();
    }

    public async verifySave() {
        await expect(this.save).toContainText('Save')
    }

}