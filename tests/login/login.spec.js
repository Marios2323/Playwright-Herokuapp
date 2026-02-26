import { test, expect } from '../../fixtures/login.fixture.js';
import loginData from '../../data/loginData.json';

test.describe('@smoke Login Feature', () => {

    loginData.forEach((data) => {

        test(`Login test - ${data.name}`, async ({ loginPage }) => {

            await loginPage.navigate();
            await loginPage.login(data.username, data.password);

            if (data.success) {
                const message = await loginPage.getSecureMessage();
                expect(message).toContain(data.expectedMessage);
            } else {
                const message = await loginPage.getFlashMessage();
                expect(message).toContain(data.expectedMessage);
            }
        });
    });
});