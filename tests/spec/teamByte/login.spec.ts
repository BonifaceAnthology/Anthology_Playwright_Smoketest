import { test, expect, chromium, Browser, BrowserContext,page} from '@playwright/test';
import loginPage from '../../../pageObject/studentRegistration/loginPage';
import webclientPortalData from '../../../data/teamByte/webclientPortal/webclientPortal.json'
import studentPortalData from '../../../data/teamByte/self-Service Portal/studentPortal/studentPortal.json'
declare global {
  namespace NodeJS {
    interface Global {
      browser: Browser;
      context: BrowserContext;
      webClient:any;
      studenPortal:any;
    }
  }
}
test.describe.configure({ mode: 'serial' });
  test.beforeAll(async () => {
    console.log("***************Test Execution Started**************")
    global.browser = await chromium.launch({ channel: "chrome", headless: false });
    global.context = await global.browser.newContext();
    global.webClient = await global.context.newPage();
    global.studenPortal = await global.context.newPage();
    global.webclientLoginPage=new loginPage(global.webClient)
    await global.webClient.goto(webclientPortalData.url);
    await global.studenPortal.goto(studentPortalData.url);
    
  })
  test.beforeEach(async () => {
   
  })
  test.afterEach(async () => {
    
  });
  test.afterAll(async () => {
    await global.webClient.close();
    await global.context.close();
    await global.browser.close();
    console.log("***************Test Execution Ended**************")
  });
  test('login', async () => {
    await global.studenPortal.locator('[id="_ctl0_cphHeader_Header1_btnLogout"]').click();
  })