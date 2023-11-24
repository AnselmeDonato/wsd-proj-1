const { test, expect } = require("@playwright/test");

test("Main page shows statistics", async ({ page }) => {
  const response = await page.goto("/");
  await expect(page.locator("h5")).toHaveText(["Statistics:"]); 
});

test("Lists page linked in Main page", async ({ page }) => {
  const response = await page.goto("/");
  await page.locator(`a >> text='Lists'`).click();
  await expect(page).toHaveURL("http://localhost:7777/lists"); 
});

test("Can create a task", async ({ page }) => {
	await page.goto("/lists");
	const listName = `My list: ${Math.random()}`;
	await page.locator("input[type=text]").type(listName);
	await page.locator("button[type=submit]").click();
	await expect(page.locator(`li >> text='${listName}'`)).toHaveText(listName);
});