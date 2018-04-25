const puppeteer = require('puppeteer');
const path = require('path');

const isDebugging = () => {
    const debuggingMode = {
        headless: false,    // false - show how tests work inside of the browser
        slowMo: 50,
        devtools: false,
        args: [
            `--window-size=1500,2400`
        ]
    };

    return debuggingMode;
};

let browser;
let page;

beforeAll(async() => {
    browser = await puppeteer.launch(isDebugging());
    page = await browser.newPage();

    await page.goto('http://localhost:3000');
    await page.setViewport({width: 1500, height: 2400});
});

describe('on page load', () => {
    test('h1 loads correctly', async() => {
        const html = await page.$eval('h1', e => e.innerHTML);

        expect(html).toBe('Welcome!');
    }, 10000);

    test('nav loads correctly', async() => {
        const navbar = await page.$eval('.navbar', el => el ? true : false);
        const listItems = await page.$$('.nav-item');

        expect(navbar).toBe(true);
        expect(listItems.length).toBe(3);
    }, 10000);

    test('adding article works correctly', async() => {
        await page.click('[href="/auth/login"]');
        await page.click('[name="password"]');
        await page.type('[name="email"]', '1@tut.by');
        await page.type('[name="password"]', '1');
        await page.click('[type="submit"]');
    }, 10000);
});

afterAll(() => {
    browser.close();
});
