import { test, expect } from '@playwright/test';

test('home page shows hero and support cards', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('text=সাহায্য সেবা')).toBeVisible();
  await expect(page.locator('text=ডাক্তার সহায়তা')).toBeVisible();
  await expect(page.locator('text=রিসোর্স দেখুন')).toBeVisible();
  await expect(page.locator('text=রোগী হিসেবে প্রবেশ করুন')).toBeVisible();
});
