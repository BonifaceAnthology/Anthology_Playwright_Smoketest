import GenericMethods from '../../../../genericMethods/genericClass';
import userData from '../../../../data/studentRegistration/userData.json'
const genericmethod = new GenericMethods();
declare global {
    namespace NodeJS {
      interface Global {
       courseLevelName:string;
       courseLevelCode:string;
      }
    }
  }
export default class courseLevel {
    page: any
    private clickcourseLevel
    private newbutton
    private name
    private code
    private saveAndClose

    constructor(page: any) {
        this.clickcourseLevel = page.getByText('Course Levels')
        this.newbutton = page.locator('#newButton')
        this.name = page.locator('#name')
        this.code = page.locator('#code')
        this.saveAndClose = page.getByRole('button', { name: 'Save & Close' })
    }
    public async selectCourseLevels(){
        this.clickcourseLevel.click()
    }
    public async clickNewButton(){
        this.newbutton.click()
    }
    public async enterName(){
        let randchars = await genericmethod.randcharset();
        global.courseLevelName=userData.courseLevel.name + randchars;
        await this.name.fill(global.courseLevelName)
    }
    public async enterCode(){
        let randchars = await genericmethod.randcharset();
        global.courseLevelCode=userData.courseLevel.code + randchars;
        await this.code.fill(global.courseLevelCode)
    }
    public async saveCourseLevel(){
        this.saveAndClose.click()
    }
}