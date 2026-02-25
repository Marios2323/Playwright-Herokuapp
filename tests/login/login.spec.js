import { test, expect } from '../../fixtures/login.fixture.js';
import loginData from '../../data/loginData.json';

test.describe('@smoke Login Feature', () => {

    loginData.forEach((data) => {

        test(`Login test - ${data.name}`, async ({ loginPage }) => {

            await loginPage.navigate();
            await loginPage.login(data.username, data.password);

            if (data.success) {
                await loginPage.assertLoginSuccess();
            } else {
                await loginPage.assertLoginFailure(data.expectedMessage);
            }
        });
    });
});