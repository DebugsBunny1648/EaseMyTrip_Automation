import { test, expect } from "@playwright/test";
/*
test("Test Data Pickers Page", async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/Datepicker.html");
    await page.locator("#datepicker2").click();
    await page.locator("//select[@title='Change the year']").selectOption("2023");
    await page.locator("//select[@title='Change the month']").selectOption("March");
    await page.locator("a", { hasText: "23" }).click();
    await page.waitForTimeout(3000);
}); 

*/


test("Dynamic Date Picker Test", async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Datepicker.html");

    // Get today's date dynamically
    const today = new Date();
    const year = today.getFullYear().toString();
    const month = today.toLocaleString("default", { month: "long" }); // full month name
    const day = today.getDate().toString();

    // Open the datepicker
    await page.locator("#datepicker2").click();

    // Select year and month dynamically
    await page.locator("//select[@title='Change the year']").selectOption(year);
    await page.locator("//select[@title='Change the month']").selectOption(month);

    // Click the day dynamically
    await page.locator("a", { hasText: day }).click();

    await page.waitForTimeout(3000);
});