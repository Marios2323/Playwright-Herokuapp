import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../data/loginData.json';

test.describe('Login Feature', () => {

    for (const data of loginData) {

        test(data.name, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.navigate();
            await loginPage.login(data.username, data.password);

            if (data.success) {
                await expect(loginPage.secureMessage)
                    .toContainText(data.expectedMessage);
            } else {
                await expect(loginPage.flashMessage)
                    .toContainText(data.expectedMessage);
            }

        });

    }

});