// @ts-check
import { test, expect } = from "@playwright/test"

const LOCALHOST_URL = "http://localhost:5173/"

test("app shows list of products", async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('heading', { name: 'Sign up' })

  await expect(text).toBeVisible();
});
