import { expect, test } from "@playwright/test";

test("calcula a estimativa e preserva CTAs de WhatsApp", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Precisão que");
  await expect(page.getByRole("link", { name: /solicitar orçamento/i }).first()).toHaveAttribute("href", /wa\.me\/5545991015512/);
  await page.locator('select[aria-label="Modelo do drone"]').selectOption("t40");
  await page.locator('input[aria-label="Área total em hectares"]').fill("40");
  await expect(page.locator("output")).toHaveText("1h 53min");
});

test("FAQ é operável por teclado", async ({ page }) => {
  await page.goto("/#faq");
  const question = page.getByRole("button", { name: /onde o drone de pulverização/i });
  await question.focus();
  await page.keyboard.press("Enter");
  await expect(question).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByText("Em lavouras, pastos, pomares")).toBeVisible();
});
