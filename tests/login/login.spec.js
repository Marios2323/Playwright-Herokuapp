import { test, expect } from '../../fixtures/login.fixture.js';
import loginData from '../../data/loginData.json';

test('Happy Path - Successful Login', async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login(
        loginData.happyPath.username,
        loginData.happyPath.password
    );
    const message = await loginPage.isSecureMessage();
    expect(message).toBe(loginData.happyPath.expectedMessage);
});

test('Wrong username', async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login(
        loginData.wrongUsername.username,
        loginData.wrongUsername.password
    );
    const wrongUsername = await loginPage.wrongUsername();
    expect(wrongUsername).toBe(true);
});

test('Wrong password', async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login(
        loginData.wrongPassword.username,
        loginData.wrongPassword.password
    );
    const wrongPassword = await loginPage.wrongPassword();
    expect(wrongPassword).toBe(true);
});