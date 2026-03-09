import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";
import { pageFixture } from "./browserContextFixture";
import fs from "fs";

let browser: Browser;

BeforeAll(async function(){
    console.log("\nExecuting test suite.....");
})

AfterAll(async function () {
    console.log("\nFinished execution of test suite!");
})

Before(async function () {
    browser = await chromium.launch({headless: true});
    pageFixture.page = await browser.newPage();
})

After(async function (scenario) {
    if (!fs.existsSync("./screenshots")) {
        fs.mkdirSync("./screenshots");
    }

    const screenshotPath = `./screenshots/${scenario.pickle.name}.png`;

    const screenshot = await pageFixture.page.screenshot({
        path: screenshotPath,
        fullPage: true
    });

    await this.attach(screenshot, "image/png");

    await pageFixture.page.close();
    await browser.close();
})
