// Test Scenario 1:
// 1. Open TestMu AI Selenium Playground from
// https://www.testmuai.com/selenium-playground/
// 2. Click “Simple Form Demo”.
// 3. Validate that the URL contains “simple-form-demo”.
// 4. Create a variable for a string value, e.g., “Welcome to TestMu AI”.
// 5. Use this variable to enter values in the “Enter Message” text box.
// 6. Click “Get Checked Value”.
// 7. Validate whether the same text message is displayed in the
// right-hand panel under the “Your Message:” section.

import { test, expect } from '@playwright/test';

test('Simple Form Demo', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/');

  await page.getByRole('link', { name: 'Simple Form Demo' }).click();

  await expect(page).toHaveURL(/simple-form-demo/);

  const message = 'Welcome to TestMu AI';

  await page.locator('//input[@id="user-message" and @placeholder="Please enter your Message"]').fill(message);

  await page.getByRole('button', { name: 'Get Checked Value' }).click();

  await expect(page.locator('[id="message"]')).toHaveText(message);

});