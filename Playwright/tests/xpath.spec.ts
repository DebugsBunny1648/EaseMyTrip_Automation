import { test, expect } from "@playwright/test";
test("Test lucky button", async ({ page }) => {
    // await page.goto("https://google.com");
    // await page.locator("//div[@class='c93Gbe']/parent::div").click();

    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.locator('#msdd').click();
    //  await page.locator(".ui-corner-all").locator('a', { hasText: 'English' }).click();


    const totalLanguages = await page.locator(".ui-corner-all").locator('a');
    for (let i = 0; i < await totalLanguages.count(); i++) {
        const rowValue = totalLanguages.nth(i);

        if (await rowValue.textContent() === "English" || await rowValue.textContent() === "Spanish") {
            await rowValue.click();
            continue;
        }
    }




    await page.locator("#Skills").selectOption({ label: "Python" });



    await page.locator("span[role='combobox']").click();
    const searchbox = page.locator("input[type='search']");
    searchbox.fill("India");
    await page.locator("li", { hasText: "India" }).click();

    await page.locator("//select[@id='#yearbox']").click();
    const searbox2 = page.locator('select[type=text');
    searbox2.fill("2026");
    await page.locator("li", { hasText: "2026" }).click();

    const fileUpload = page.locator("#imagesrc");
    await fileUpload.setInputFiles("C:\\Users\\Administrator\\Desktop\\pic.jpg");









    await page.waitForTimeout(5000);


});