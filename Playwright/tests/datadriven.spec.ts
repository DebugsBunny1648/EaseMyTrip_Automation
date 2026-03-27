import { test, expect, Page } from "@playwright/test";
import { LoginPOM } from "../pages/login";
import { readExcelFile } from "../utils/excelReader";//project


interface LoginData {
    username:string;
    password:string,
    expectedOutput:string;
}
let page:Page;
let loginPage:LoginPOM;
const loginUser:LoginData[]=readExcelFile("login.xlsx","Sheet1");//project

test.beforeEach(async ({page})=>{
     console.log("Before each executed");
    await page.goto("https://www.saucedemo.com/");
    loginPage=new LoginPOM(page);
})
loginUser.forEach(data=>{
 test(`To validate the login functionlaity with ${data.username}`, async ({ page }) => {

   await  loginPage.performLoginAction(data.username,data.password);
   if(data.expectedOutput==='Products')
   {
      let actualValue = await page.getByText("Products").textContent();
      await expect(actualValue).toBe(data.expectedOutput);
   }
 else{
 await expect(page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Sorry, this user has been locked out.");
 }
   // await expect.soft(actualValue).toBe("Products");
     // console.log("Test case 1")
});
})
   