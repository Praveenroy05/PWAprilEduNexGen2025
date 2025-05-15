import { test, expect } from '@playwright/test';

test("Screenshot of page and element", async ({page})=>{
      await page.goto('https://practicetestautomation.com/practice-test-login/');
      await page.screenshot({path : "screenshot/fullPageScreenshot.png", fullPage: true})
      await page.getByText("Test login", {exact: true}).screenshot({path : "screenshot/partialScreenshot.jpg"})
})

test("Visual Testing", async ({page})=>{
      await page.goto('https://www.flightaware.com/');
      // toMatchSnapshot(screenshot)
      await expect(await page.screenshot()).toMatchSnapshot("flight.png")
})
