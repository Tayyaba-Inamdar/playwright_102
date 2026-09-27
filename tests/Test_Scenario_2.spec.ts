// Test Scenario 2:
// 1. Open the https://www.testmuai.com/selenium-playground/ page and click
// “Drag & Drop Sliders”.
// 2. Select the slider “Default value 15” and drag the bar to make it 95 by
// validating whether the range value shows 95.

import { test, expect } from './fixtures';

test.use({ menuLink: 'Drag & Drop Sliders' });

test('Drag and drop slider to 95', async ({ openPage: page },testInfo) => {
 
  const sliderContainer = page.locator('#slider3');
  const slider = page.locator('//input[@type="range" and @value="15"]');
  const output = sliderContainer.locator('//output[@id="rangeSuccess"]');

   await testInfo.attach('slider-at-default-value', {
    body: await page.screenshot(),
    contentType: 'image/png',
  });

 await slider.focus();
  for (let i = 0; i < 80; i++) { await slider.press('ArrowRight');  }
 
  await expect(output).toHaveText('95');

});
