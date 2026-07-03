const { test, expect } = require('@playwright/test');
const HomePage = require('../src/pages/home.page');

test('POM: homepage title', async ({ page }) => {
  const home = new HomePage(page);
  await home.open();
  await expect(page).toHaveTitle(/Playwright/);
});
