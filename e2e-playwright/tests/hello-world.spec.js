const { test, expect } = require("@playwright/test");

test("Main page has title 'Shared shopping lists'", async ({ page }) => {
  const response = await page.goto("/");
  await expect(page).toHaveTitle("Shared shopping lists"); 
  await expect(page.locator("h1")).toHaveText("Shared shopping lists"); 
});

test("Lists page linked in Main page", async ({ page }) => {
  const response = await page.goto("/");
  await page.locator(`a >> text='Show lists'`).click();
  await expect(page.locator("h1")).toHaveText("Shared shopping lists - Lists");
});