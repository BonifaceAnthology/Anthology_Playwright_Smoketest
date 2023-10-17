import { defineConfig, devices } from '@playwright/test';
import path from 'path';
export const STORAGE_STATE = path.join(__dirname, 'playwright/.auth/user.json');


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: '.',
  timeout: 130000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  retries: 2,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
 //reporter: process.env.CI ? 'dot' : 'list',
  // reporter: process.env.CI ? 
  // [
  //   ['html',{ outputFolder: 'my-report' }]]:[
  //    ['junit', { outputFile: 'test-results/TEST.xml' }],
  //   ['allure-playwright',{outputFolder:'allure-results'}],
  //  ],
  

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'teamByteSetup',
      testMatch: '**/*teamByte.setup.ts',
    },
    {
      name: 'teamVertexSetup',
      testMatch: '**/*teamVertex.setup.ts',
    },
    {
      name: 'teamVoyagerSetup',
      testMatch: '**/*teamVoyager.setup.ts',
    },
    {
      name: 'teamByte',
      dependencies: ['teamByteSetup'],
      use: { 
      storageState: STORAGE_STATE, }
    },
    {
      name: 'teamVertex',
      dependencies: ['teamVertexSetup'],
      use: { 
      storageState: STORAGE_STATE, }
    },
    {
      name: 'teamVoyager',
      dependencies: ['teamVoyagerSetup'],
      use: { 
      storageState: STORAGE_STATE, }
    },
  ],
});
