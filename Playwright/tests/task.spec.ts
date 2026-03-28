import { test, expect } from "@playwright/test";
import { count } from "node:console";

test("task", async ({ page }) => {
    await page.goto("https://www.easemytrip.com/holidays/");

    await page.getByPlaceholder("Enter Your Dream Destination!").fill('Kerala');
    await expect(page.getByRole("heading", { name: 'Where Every Experience Counts!' })).toBeVisible();


    const anchorlinks = await page.locator("//img[@class='ht215']").count();
    for (let i = 0; i < anchorlinks; i++) {
        const link = await page.locator("//img[@class='ht215']").nth(i);
        await link.click();
        await page.waitForTimeout(1000);
        await page.goBack();
    }
    /*
        await page.locator("//button[@class='btnclick _clickbtn']").click();
        await page.waitForTimeout(2000);
        await page.goBack();*/







});
