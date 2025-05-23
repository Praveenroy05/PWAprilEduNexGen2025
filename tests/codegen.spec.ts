// To open the codegen tool - npx playwright codegen "https://demo.automationtesting.in/Windows.html"

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await expect(page.getByRole('button', { name: 'click' })).toBeVisible();
  await expect(page.locator('b')).toContainText('"_blank"');
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'click' }).click();
  const page2 = await page2Promise;
  await page2.getByRole('link', { name: 'Downloads' }).click();
  await expect(page2.locator('body')).toContainText('Support the Selenium Project');
  await page.getByRole('link', { name: 'Home' }).click();
  await expect(page.getByRole('textbox', { name: 'Email id for Sign Up' })).toBeVisible();
});

test('Login Validation', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('student');
  await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue('student');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Successfully');
});