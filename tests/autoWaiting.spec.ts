import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://www.uitestingplayground.com/ajax");
  await page.getByText("Button Triggering AJAX Request").click();
});

test("auto waiting", async ({ page }) => {
  const successfullMessage = await page.locator(".bg-success");
//   await successfullMessage.click();

//   //  const text = await successfullMessage.textContent()
//   await successfullMessage.waitFor({ state: "attached" });
//   const text = await successfullMessage.allTextContents();

  //expect(text).toContain('Data loaded with AJAX get request.')

  await expect(successfullMessage).toHaveText(
    "Data loaded with AJAX get request.", {timeout: 20000});
});

test('alternative wait', async({page}) => {
    const successfullMessage = await page.locator(".bg-success");

    //wait for element
    // await page.waitForSelector('.bg-success')

    //wait for particular response
    // await page.waitForResponse('http://www.uitestingplayground.com/ajaxdata')

    //wait for network calls to be completed (not recommended)
    await page.waitForLoadState('networkidle')


  const text = await successfullMessage.allTextContents();

  expect(text).toContain('Data loaded with AJAX get request.')
})