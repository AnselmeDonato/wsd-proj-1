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

test("Can create a list", async ({ page }) => {
	await page.goto("/lists");
	const listName = `My list: ${Math.random()}`;
	await page.locator("input[type=text]").type(listName);
	await page.getByRole("button", {name : "Create list"}).click();
	await expect(page.locator(`li >> text='${listName}'`)).toHaveText(listName);
});

test("Can deactivate a list", async ({ page }) => {
  // Crating the list to deactivate 
	await page.goto("/lists");
	const listName = "Deactivate me"; 
	await page.locator("input[type=text]").type(listName);
	await page.getByRole("button", {name : "Create list"}).click();
	await expect(page.locator(`li >> text='${listName}'`)).toHaveText(listName);
  
  // Actually deactivating the list 
	await page.locator(`button:right-of(:has-text("${listName}"))`).first().click();
	await expect(page.locator(`li >> text='${listName}'`)).toHaveCount(0);
});

test("Can navigate to a list", async ({ page }) => {
  // Crating the list to navigate to 
	await page.goto("/lists");
	const listName = "Test me"; 
	await page.locator("input[type=text]").type(listName);
	await page.getByRole("button", {name : "Create list"}).click();
	await expect(page.locator(`li >> text='${listName}'`)).toHaveText(listName);
  
  // Actually mavigating to the list 
  await page.locator(`a >> text='${listName}'`).click();
  await expect(page.locator("h1")).toHaveText(`List: ${listName}`); 
});