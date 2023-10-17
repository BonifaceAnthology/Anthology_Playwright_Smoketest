import { expect } from "@playwright/test";
import formData from "../../../../data/studentRegistration/formData.json"
import genericClass from "../../../../genericMethods/genericClass"
const genericMethod = new genericClass()
let name = genericMethod.randcharset();
let code = genericMethod.randcharset();
export default class bookList {
    page: any;
    private bookListTile: any;
    private bookListText: any;
    private newBookListButton: any;
    private newBookListText: any;
    private name: any;
    private code: any;
    private saveButton: any;
    private validateBookList: any;
    private selectBookList: any;
    private selectCancelButton: any;
    private addBookButton: any;
    private selectBookArrow: any;
    private selectBook: any;
    private saveBook: any;
    constructor(page: any) {
        this.page = page;
        this.bookListTile = page.locator('[cns-label="Book Lists"]')
        this.bookListText = page.getByText('Book Lists', { exact: true })
        this.newBookListButton = page.getByText('New Book List').first();
        this.newBookListText = page.locator('[title="New Book List"]')
        this.name = page.locator('#courseBookListName')
        this.code = page.locator('#courseBookListCode')
        this.saveButton = page.locator('#saveModelContentButton')
        this.validateBookList = page.locator('[class="cmc-link-column"]').first()
        this.selectBookList = page.locator('[class="cmc-link-column"]').first()
        this.selectCancelButton = page.getByRole('button', { name: "Cancel" })
        this.addBookButton = page.locator('#NewBook')
        this.selectBookArrow = page.locator('//span[@aria-controls="bookItemId_listbox"]/span')
        this.selectBook = page.locator('[title="Active Book 3"]')
        this.saveBook = page.getByRole('button', { name: "Save" })
    }
    public async clickBookListTile() {
        await this.bookListTile.click();
        await expect.soft(this.bookListText).toHaveText(formData.bookListForm.bookListText);
    }
    public async addBookList() {
        await this.page.waitForTimeout(2000)
        await this.newBookListButton.click();
        await this.page.waitForTimeout(1000)
        await expect.soft(this.newBookListText).toHaveText(formData.bookListForm.newBookListText);
        await this.name.fill(formData.bookListForm.name + await name);
        await this.code.fill(formData.bookListForm.code + await code);
        await this.saveButton.click();
        await expect(this.validateBookList).toBeVisible();
        await this.selectBookList.click();
        await this.selectCancelButton.click();
    }
    public async addBook() {
        await this.addBookButton.click();
        await this.selectBookArrow.click();
        await this.selectBook.click();
        await this.saveBook.click();
    }
}