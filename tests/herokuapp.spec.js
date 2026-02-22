import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const testData = [
    {
        name: 'Happy path',
        username: 'tomsmith',
        password: 'SuperSecretPassword!',
        expectedMessage: 'Secure Area',
        success: true
    },
    {
        name: 'Wrong username',
        username: 'wrongUser',
        password: 'SuperSecretPassword!',
        expectedMessage: 'Your username is invalid!',
        success: false
    },
    {
        name: 'Wrong password',
        username: 'tomsmith',
        password: 'wrong password',
        expectedMessage: 'Your password is invalid!',
        success: false
    }
];

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
});

test.describe('Login Tests', () => {

    for (const data of testData) {

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