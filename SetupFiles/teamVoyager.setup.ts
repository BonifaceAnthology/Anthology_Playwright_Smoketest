import { test as setup} from '@playwright/test';
import { STORAGE_STATE } from '../playwright.config';
import selfServicePortalData from "../data/self-Service Portal/self-ServicePortal.json"
import studentPortalData from "../data/self-Service Portal/studentPortal/studentPortal.json"
import webclientPortalData from "../data/webclientPortal/webclientPortal.json"

setup.describe.configure({ mode: 'serial' });

setup('webclient', async ({ page }) => {
    await page.goto(webclientPortalData.url);
    await page.getByPlaceholder('User name').fill(webclientPortalData.username);
    await page.getByPlaceholder('Password').fill(webclientPortalData.password);
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.context().storageState({ path: STORAGE_STATE });
    
 });
setup('student-portal', async ({ page }) => {
    await page.goto(selfServicePortalData.url);
    await page.getByRole('link', { name: 'Student Portal Homepage' }).click();
    await page.getByLabel('Username').fill(studentPortalData.username);
    await page.getByLabel('Password').fill(studentPortalData.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.context().storageState({ path: STORAGE_STATE });   
});
