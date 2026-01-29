import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('login and logout on herokuapp', async ({ page }) => {
 //await page.goto('https://the-internet.herokuapp.com/login');

  const loginPage = new LoginPage(page);
  loginPage.navigate();
  // await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');

  loginPage.login('tomsmith', 'SuperSecretPassword!');

  await page.pause();
});
