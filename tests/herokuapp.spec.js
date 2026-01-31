import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test("Happy path - Login test for herokuapp", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect (loginPage.secureMessage).toContainText('Secure Area');
})

test("Wrong username", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('wrongUser', 'SuperSecretPassword!');
    await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
});

test("Wrong password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('tomsmith', 'wrong password');
    await expect(loginPage.flashMessage).toContainText('Your password is invalid!');
});