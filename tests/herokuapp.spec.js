import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test("Happy path - Login test for herokuapp", async ({ page }) => {
    // await page.goto('https://the-internet.herokuapp.com/login');
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    // await page.getByRole('textbox', { name: 'Username' }).click();
    // await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
    // await page.getByRole('textbox', { name: 'Password' }).click();
    // await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
    await loginPage.login('tomsmith', 'SuperSecretPassword!')
    // await page.getByRole('button', { name: ' Login' }).click();
    await loginPage.clickLogin();
    // await page.pause();
})

test("Wrong username", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.wrongUsernameLogin();
    await loginPage.clickLogin();
    await expect(loginPage.flashMessage).toContainText('Your username is invalid!');

    // await page.pause();
});

test("Wrong password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.wrongPasswordLogin();
    await loginPage.clickLogin();
    await expect(loginPage.flashMessage).toContainText('Your password is invalid!');

    // await page.pause();
});