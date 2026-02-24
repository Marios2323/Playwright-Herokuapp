import { test, expect } from '../fixtures/login.fixture.js';
import loginData from '../data/loginData.json';

test.describe('Login Feature', () => {

    for (const data of loginData) {

        test(data.name, async ({ loginPage }) => {

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