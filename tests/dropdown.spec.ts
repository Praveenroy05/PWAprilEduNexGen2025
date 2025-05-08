// Drop down
// 2 Types of drop down
// 1. Static drop down - The value might never get changed
    // a. single select
    // b. multi select drop down
// 2. Dynamic DD - Keeps on chaning
    // a. single select
    // b. multi select drop down

// <select> </select>
// non-select tag - div, span, li, ul



// 1. DD developed using <select> tag - 
// Step by step

// 1. Locate the drop down element
// 2. get the options of the DD - selectOption("value" , {label , index})


// 2. DD developed using non select tag

// 1. Locate the DD element and click on that DD to open the DD element
// 2. Locate the target element and Click on the element that we are trying to select from the DD


import {test, expect} from '@playwright/test'

test('Drop down developed using select tag handling', async function({page}){

    await page.goto("https://practice.expandtesting.com/dropdown")
    // locate the DD element - selectOption()

    await page.locator("select#country").selectOption("AL") // {value: 'AL'}
    await page.waitForTimeout(2000)

    await page.locator("select#country").selectOption({value: 'MV'}) // 
    await page.waitForTimeout(2000)

    await page.locator("select#country").selectOption({label: 'American Samoa'}) //
    await page.waitForTimeout(2000) 

    await page.locator("select#country").selectOption({index: 27}) //
    await page.waitForTimeout(2000) 

    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#cars").selectOption([{label:'Volvo'}, {label:'Saab'}, {label:'Audi'}])
    await page.waitForTimeout(2000) 

})


test('Drop down developed using non-select tag handling', async function({page}){

    await page.goto("https://demoqa.com/select-menu")
    // 1. Locate the DD element and click on that DD to open the DD element

    await page.locator(".css-1hwfws3").first().click()
    await page.locator("#react-select-2-option-1-1").click()
    await page.waitForTimeout(2000)

    await page.locator(".css-1hwfws3").last().click()
    await page.locator("#react-select-4-option-0").click()
    await page.locator("#react-select-4-option-2").click()
    await page.waitForTimeout(2000)

})







