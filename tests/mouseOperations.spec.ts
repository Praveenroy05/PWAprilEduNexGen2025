// click - click({force: true})
// double click
// right click
// mouse hover on an element
// drag and drop
// Alert or Pop-up handling

// double click - 
//1. Launch the url
//2. Locate the element on the webpage
//3. double click on the element

import {test, expect} from '@playwright/test'

test('Double click and right click handling', async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    // page.on('dialog', dialog=>{
    //     console.log(dialog.message())
    //     dialog.accept()
    // })
    await page.getByText("right click me", {exact: true}).click({button :'right'})
    await page.getByText('Delete', { exact: true }).click()

    //await page.waitForTimeout(3000)

    // double click
    await page.getByText('Double-Click Me To See Alert', {exact: true}).dblclick()
    //await page.waitForTimeout(3000)

})

test('Mouse Hover', async ({page})=>{
    await page.goto("https://www.spicejet.com/")
    await page.getByText("Add-ons", {exact: true}).hover()
    await expect(page.getByTestId('test-id-Visa Services')).toBeVisible()
})

test('drag and drop handling', async ({page})=>{
    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html")
    const draggable = await page.locator("#draggable")
    const droppable = await page.locator("#droppable")

    //dragTo(locator)
    // Syntax:
    // draggableElement.dragTo(dropPlaceElement)

    await draggable.dragTo(droppable)
    await expect(page.getByText('Dropped!').first()).toBeVisible()
})

test('pop-up or alert validation', async ({page})=>{
    await page.goto("https://demoqa.com/alerts")
    // on() - Help us to wait for an event to appear on the page
    page.on('dialog', async (dialog) =>{
        await console.log(dialog.message())
        await expect(dialog.message()).toContain("You clicked a button")
        await dialog.accept()
    })
    await page.locator("#alertButton").click()
   
})

test('Confirm alert validation', async ({page})=>{
    await page.goto("https://demoqa.com/alerts")
    // on() - Help us to wait for an event to appear on the page
    // accept() - It will click on Ok button
    // dismiss() - will click on cancel button
    page.on('dialog', async (dialog) =>{
        await console.log(dialog.message())
        await dialog.dismiss()
    })
    await page.locator("#confirmButton").click()
    await expect(page.locator("#confirmResult")).toContainText("You selected Cancel")
   
})


test('Prompt alert validation', async ({page})=>{
    await page.goto("https://demoqa.com/alerts")
    // on() - Help us to wait for an event to appear on the page
    // accept() - It will click on Ok button
    // dismiss() - will click on cancel button
    const message = "Playwright"
    page.on('dialog', async (dialog) =>{
        await console.log(dialog.message())
        await dialog.accept(message)
    })
    await page.locator("#promtButton").click()
    await expect(page.locator("#promptResult")).toContainText(`You entered ${message}`)
   
})

