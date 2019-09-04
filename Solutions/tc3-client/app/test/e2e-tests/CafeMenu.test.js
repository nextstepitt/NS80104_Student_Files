// CafeMenu.test.js
// Copyrigh © 2019 NextStep IT Training. All rights reserved.
//
// This fixture performs system (e2e) tests of the cafe-menu component.
//

import puppeteer from 'puppeteer';
import select from 'puppeteer-select'

describe("Cafe Menu Tests", () => {

    let browser = null
    let page = null

    beforeEach(async () => {

        browser = await puppeteer.launch({ headless: true }) // added headless: true, use false to see the browser windows.
        page = await browser.newPage()
        await page.goto('http://localhost:9000/index.html')
    })

    afterEach(async () => {

        await browser.close();
    })

    test('switches from beverages to pastries', async () => {

        await page.click('button#pastries_button')
        await page.waitForFunction('document.querySelector("h2").innerText.includes("Pastries")');

        await select(page).assertElementPresent('h2:contains(Pastries)');
        expect((await page.content()).match(/Banana Nut Bread/gi).length).toBeGreaterThan(0)
    })

    test('switches from pastries to beverages', async () => {

        await page.click('button#pastries_button')
        await page.waitForFunction('document.querySelector("h2").innerText.includes("Pastries")');

        await page.click('button#beverages_button')
        await page.waitForFunction('document.querySelector("h2").innerText.includes("Beverages")');

        await select(page).assertElementPresent('h2:contains(Beverages)');
        expect((await page.content()).match(/Juan Valdez Reserve Cafe - Small/gi).length).toBeGreaterThan(0)
    })
})