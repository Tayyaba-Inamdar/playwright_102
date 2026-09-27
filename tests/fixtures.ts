import { test as base, expect, type Page } from '@playwright/test';

const BASE_URL = process.env.BASE_URL ?? 'https://www.testmuai.com/selenium-playground/';

type PlaygroundFixtures = {
 menuLink: string; 
 openPage: Page; 
};

export const test = base.extend<PlaygroundFixtures>({
 menuLink: ['', { option: true }],

 openPage: async ({ page, menuLink }, use) => {
 await page.goto(BASE_URL);
 if (menuLink) {
 await page.getByRole('link', { name: menuLink }).click();
 }
 await use(page);
 },
});

export { expect };