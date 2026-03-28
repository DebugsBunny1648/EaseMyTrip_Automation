import {createBdd} from "playwright-bdd"
import {test,expect} from "@playwright/test"
 
const {Given,When,Then} = createBdd();
 
Given('User is on the login page', async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
});
 
When('User enters username', async ({page}) => {
    await page.getByPlaceholder("Username").fill("standard_user");
});
 
When('User enters password', async ({page}) => {
    await page.getByPlaceholder("Password").fill("secret_sauce");
});
 
When('User clicks the login button', async ({page}) => {
    await page.locator("//input[@type='submit']").click();
});
 
Then('User is logged in successfully', async ({page}) => {
     await expect(await page.url()).toBe("https://www.saucedemo.com/inventory.html");
});
 
Then('User is navigated to products page', async ({page}) => {
    await expect(await page.locator('//span[@class="title"]').textContent()).toBe('Products');
});
 
Given('User is logged in', async ({page}) => {
    await page.goto("https://www.saucedemo.com/inventory.html");
});
 
When('User click on the product', async ({page}) => {
    await page.locator("//div[text()='Sauce Labs Backpack']").click();
});
 
Then('Product description is available', async ({page}) => {
    await expect(await page.locator('//div[@data-test="inventory-item-desc"]').textContent()).toBe("carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.");
});
 
When('User clicks on the add-to-cart button', async ({page}) => {
    await page.locator('//button[@name="add-to-cart"]').click();
});
 
Then('Product is added to cart', async ({page}) => {
    await expect(await page.locator('//span[@data-test="shopping-cart-badge"]').textContent()).toBe("1");
});
 
When('User clicks on the cart menu', async ({page}) => {
    await page.locator('//a[@class="shopping_cart_link"]').click();
});
 
Then('The cart is opened', async ({page}) => {
    await expect(await page.url()).toBe("https://www.saucedemo.com/cart.html");
});
 
Then('User is able to view the added product', async ({page}) => {
    await expect(await page.locator("//div[@class='inventory_item_name']").textContent()).toBe('Sauce Labs Backpack');
});