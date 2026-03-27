import { test } from '@playwright/test';
import { LoginPOM } from '../pages/project'; // make sure the path is correct

test.describe('Sorting Test', () => {

    test('Sort items Low to High', async ({ page }) => {
        const loginPOM = new LoginPOM(page);

        // Navigate to your page
        await page.goto(
    'https://www.easemytrip.com/holidays/europe-tours-packages/',
    { timeout: 60000, waitUntil: 'domcontentloaded' } // 60 seconds
);

        // Perform Low to High sorting
        await loginPOM.performAction('lowToHigh');

        // Optional: log the first item's text
        const firstItem = await loginPOM.show.first().textContent();
        await page.waitForTimeout(3000);
        console.log('First item after Low to High:', firstItem);
         await loginPOM.performAction('highToLow');

        // Optional: log the first item's text
        const secondItem = await loginPOM.show.first().textContent();
        await page.waitForTimeout(3000);
        console.log('First item after Low to High:', secondItem);
    });
    
});






test.describe('Search from to dest', () => {

    test('from', async ({ page }) => {
        const loginPOM = new LoginPOM(page);

        // Navigate to your page
        await page.goto(
    'https://www.easemytrip.com/holidays/dubai-tours-packages/',
    { timeout: 60000, waitUntil: 'domcontentloaded' } // 60 seconds
);
await loginPOM.fromfunc('jaipur', 'New Delhi');
//await loginPOM.fromfunc();
await page.waitForTimeout(3000); 
    });

});







