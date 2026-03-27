import { test, expect, BrowserContext, Page } from "@playwright/test";
/*
test("Handling Windows Tabbed Page", async ({ browser }) => {
    const context: BrowserContext = await browser.newContext();//opening a fresh browser
    const page: Page = await context.newPage();//Opens a new tab inside that context
    await page.goto("https://demo.automationtesting.in/Windows.html");
    const parent = page.url();
    console.log(parent);
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.click('button:has-text("click")')
    ]);
    await newPage.waitForLoadState();//Still here it's open the page
    console.log(newPage.url());

    await newPage.locator("//a[@class='selenium-button selenium-ide text-uppercase fw-bold']").click();
    await newPage.waitForTimeout(3000);
    //await newPage.close();
    await page.bringToFront();
    await page.locator("//a[@href='#Seperate']").click();
    await page.waitForTimeout(3000);


});

*/

test("Handling Multiple windows", async ({ browser }) => {
    const context: BrowserContext = await browser.newContext();//opening a fresh browser
    const page: Page = await context.newPage();//Opens a new tab inside that context
    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.locator("//a[@href='#Multiple']").click();
    const parentPage = page.url();
    console.log(parentPage);
    const newPages: any[] = [];//Empty array to store newly opened tabs
    context.on('page', async (page) => {//triggers whenever a new pages(tab) opens
        await page.waitForLoadState();
        newPages.push(page);//pushing the pages into an array
    });
    await page.click("//button[@onclick='multiwindow()']");
    await page.waitForTimeout(3000);
    const allPages = context.pages();//return all the tabs in the browser...including parent and child tabs
    console.log('Total Tabs Opened is: ', allPages.length);
    let indexPage = page;//intialize....default parent page
    for (const currentPage of allPages) {
        //console.log(await currentPage.title())
        if (await currentPage.title() == "Index") {
            indexPage = currentPage
            break;
        }
    }
    await indexPage.bringToFront();
    await indexPage.locator("//input[@id='email']").fill("demo@automation.in");
    await indexPage.waitForTimeout(3000);

});


