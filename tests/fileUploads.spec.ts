import {test, expect} from '@playwright/test'
import path from 'path'

test('Single file upload', async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    // setInputFiles(pathofthefile)
    const directoryPath = path.join(__dirname, '../Test Data/', 'Courses.txt')
    await page.locator("#filesToUpload").setInputFiles(directoryPath)
    await expect(page.locator("#fileList li")).toContainText("Courses.txt")

})

test('Multiple files upload', async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    // setInputFiles(pathofthefile)
    const directoryPath = path.join(__dirname, '../Test Data/', 'Courses.txt')
    const directoryPath2 = path.join(__dirname, '../Test Data/', 'Cypress.txt')

    await page.locator("#filesToUpload").setInputFiles([directoryPath, directoryPath2])

    await expect(page.locator("#fileList li").first()).toContainText("Courses.txt")
    await expect(page.locator("#fileList li").last()).toContainText("Cypress.txt")


})