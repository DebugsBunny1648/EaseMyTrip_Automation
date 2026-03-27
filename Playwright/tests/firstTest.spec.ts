import { test, expect, Page } from "@playwright/test";
import { LoginPOM } from "../pages/login";

let page:Page;
let loginPage:LoginPOM;
//Hooks are executed something before and after 
test.beforeAll(async ({browser})=>{
    console.log("Before All executed");

})
test.beforeEach(async ({page})=>{
     console.log("Before each executed");
    await page.goto("https://www.saucedemo.com/");
    loginPage=new LoginPOM(page);
})
//test.only(....)//Only run this test cases
test("To validate the login functionlaity with valid credentials", async ({ page }) => {
  //  await page.goto("https://www.saucedemo.com/");
    // await page.getByPlaceholder("Username").fill("standard_user");
    // await page.getByPlaceholder("password").fill("secret_sauce");
    // await page.getByRole("button", { name: "Login" }).click();
//------------------------------------------------------------------------------------------------------------------------------------------------------------
    //-----------------------------------------POM----------------------------------------
    // let loginPage:LoginPOM
    // loginPage =new LoginPOM(page);//already created beforeEach
    //loginPage.validateLoginPage();
   await  loginPage.performLoginAction("standard_user","secret_sauce");
       



    let actualValue = await page.getByText("Products").textContent();
    await expect(actualValue).toBe("Products");

    //  await expect.soft(page.url()).toBe("https://www.saucedemo.com/login.html");//error
    await expect.soft(actualValue).toBe("Products");
      console.log("Test case 1")

});
//wanna to see

test("To validate the login functionlaity with invalid credentials", async ({ page }) => {
    // await page.goto("https://www.saucedemo.com/");
    // await page.locator("#user-name").fill("locked_out_user");
    // await page.locator("input[data-test='password']").fill("secret_sauce");
    // await page.locator(".submit-button").click();



    //-----------------------------------------------------------------------------------
    //-----------------------------------------POM----------------------------------------
   
    //loginPage.validateLoginPage();
    loginPage.performLoginAction("locked_out_user","secret_sauce");
     await expect(page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Sorry, this user has been locked out.");
        console.log("Test case 2")
});



//methods-->Like Only,skip,fixme,fail()...
test.skip("Test under Development(Skip)",async({page})=>{
    console.log("Test Case 3");
})

test("Failed Test Case (Fail)",async({page})=>{
    test.fail();
})

test.fixme("Test Case fixing(Fix)",async({page})=>{
    console.log("Test Case 5");
})

test("To validate the login functionality with Performace glitch credentials",async({page})=>{
    test.slow();//triple the timeout
    loginPage.performLoginAction("performance_glitch_user","secret_sauce");
    let actualValue=await page.getByText("Products").textContent();
    await expect.soft(actualValue).toBe("Products");
    console.log("Test Case 6");
});



test.afterEach(async({page})=>{
             console.log("After each executed");
           page.close();
})

test.afterAll(async({browser})=>{
     console.log("After All executed");
})