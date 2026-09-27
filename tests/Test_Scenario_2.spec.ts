// Test Scenario 2:
// 1. Open the https://www.testmuai.com/selenium-playground/ page and click
// “Drag & Drop Sliders”.
// 2. Select the slider “Default value 15” and drag the bar to make it 95 by
// validating whether the range value shows 95.
import { test, expect } from '@playwright/test';

test('Drag and drop slider to 95', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/');
  await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click();
 
  const sliderContainer = page.locator('#slider3');
  const slider = page.locator('//input[@type="range" and @value="15"]');
  const output = sliderContainer.locator('//output[@id="rangeSuccess"]');

  await expect(slider).toHaveAttribute('value', '15');
  await expect(output).toHaveText('15');

   await slider.evaluate((element: HTMLInputElement) => {
    element.value = '95';
    element.dispatchEvent(new Event('input', { bubbles: true }));
  });

  await expect(output).toHaveText('95');

});

