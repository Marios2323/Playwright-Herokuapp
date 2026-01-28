import { test, expect } from '@playwright/test';

test('login and logout on herokuapp', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  
  await page.getByRole('link', { name: 'Logout' }).click();
});
