import { test, expect } from '@playwright/test'
import { createBdd,DataTable } from 'playwright-bdd'
const { Given, When, Then } = createBdd();

/*
Created By:Visagan
Review By :Test Manager
Description:Steps fro User is on Login Page
*/
Given('User is on Login Page', async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
});

When('User enters <username> and enter <password>', async ({ page},datatable:DataTable) => {
  const userLogin=datatable.hashes();
  const user=userLogin[0].username;
  const pass=userLogin[0].password;
  await page.locator("//input[@data-test='username']").fill(user);
  await page.locator("//input[@data-test='password']").fill(pass);
});

// When('User enters password as {string}', async ({ page },password) => {
//   await page.locator("//input[@data-test='password']").fill(password);
// });

When('User clicks on Login button', async ({ page }) => {
  await page.locator("//input[@data-test='login-button']").click();
});

Then('User is logged in Successfully', async ({ page }) => {
    const actualURL=page.url();
  await expect(actualURL).toBe('https://www.saucedemo.com/inventory.html');
});

Then('User is able to navigate to product page', async ({ page }) => {
    let actualtitle=await page.getByText('Products').textContent();
   await expect(actualtitle).toBe('Products');
});

