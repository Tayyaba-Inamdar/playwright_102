// Test Scenario 3:
// 1. Open the https://www.testmuai.com/selenium-playground/ page and
// click “Input Form Submit”.
// 2. Click “Submit” without filling in any information in the
// form.
// 3. Assert “Please fill in this field.” error message.
// 4. Fill in Name, Email, and other fields.
// 5. From the Country drop-down, select “United States” using the
// text property.
// 6. Fill in all fields and click “Submit”.
// 7. Once submitted, validate the success message “Thanks for contacting
// us, we will get back to you shortly.” on the screen.

import { test, expect } from '@playwright/test';

test('Input form submit validation', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/');
  await page.click('text=Input Form Submit');

  await page.click('button:has-text("Submit")');

  const nameField = page.locator('#name');
  const validationMessage = await nameField.evaluate(
    (el: HTMLInputElement) => el.validationMessage
  );
  expect(validationMessage).toBe('Please fill out this field.');

  await page.fill('#name', 'TAyyAba InAmDaR');
  await page.fill('#inputEmail4', 'john.doe@example.com');
  await page.fill('#inputPassword4', 'Password123');
  await page.fill('#company', 'TestmuAi Company');
  await page.fill('#websitename', 'https://www.example.com');

  await page.selectOption('select[name="country"]', { label: 'United States' });

  await page.fill('#inputCity', 'New Gate');
  await page.fill('#inputAddress1', '123 Main Street');
  await page.fill('#inputAddress2', 'Apt 4B');
  await page.fill('#inputState', 'NY');
  await page.fill('#inputZip', '10001');

  await page.click('button:has-text("Submit")');

  const successMessage = page.locator('.success-msg');
  await expect(successMessage).toHaveText(
    'Thanks for contacting us, we will get back to you shortly.'
  );
});