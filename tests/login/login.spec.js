import { test, expect } from '../../fixtures/login.fixture.js';

test('Happy Path - Successful Login', async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
     const isSecure = await loginPage.isSecureMessage();
    expect(isSecure).toBe(true);
});

test('Wrong username', async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login('wrong username', 'SuperSecretPassword!');
    const wrongUsername = await loginPage.wrongUsername();
    expect(wrongUsername).toBe(true);
});

test('Wrong password', async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login('tomsmith', 'wrong password!');
    const wrongPassword = await loginPage.wrongPassword();
    expect(wrongPassword).toBe(true);
});