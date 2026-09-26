// Test Scenario 2:
// 1. Open the https://www.testmuai.com/selenium-playground/ page and click
// “Drag & Drop Sliders”.
// 2. Select the slider “Default value 15” and drag the bar to make it 95 by
// validating whether the range value shows 95.
import { test, expect } from '@playwright/test';

test('Drag and drop slider to 95', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/');
  await page.click('text=Drag & Drop Sliders');

  const slider = page.locator('#slider3 .ui-slider-handle');
  const rangeValue = page.locator('#slider3-value');

  await expect(rangeValue).toHaveText('15');

  const sliderBox = await slider.boundingBox();
  if (!sliderBox) {
    throw new Error('Slider bounding box not found');
  }

  await slider.hover();
  await page.mouse.down();

  const targetValue = 95;
  const totalSteps = 100;
  const sliderTrack = page.locator('#slider3');
  const trackBox = await sliderTrack.boundingBox();
  if (!trackBox) {
    throw new Error('Slider track bounding box not found');
  }

  const targetX = trackBox.x + (trackBox.width * targetValue) / totalSteps;
  const targetY = sliderBox.y + sliderBox.height / 2;

  await page.mouse.move(targetX, targetY, { steps: 20 });
  await page.mouse.up();

  await expect(rangeValue).toHaveText(targetValue.toString());
});

