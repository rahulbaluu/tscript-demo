"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
console.log("Step file loaded"); // debug: confirm file is loaded
(0, cucumber_1.Given)('Enter the correct username', async function () {
    console.log("Step 1: Enter username");
});
(0, cucumber_1.When)('Enter the correct password', async function () {
    console.log("Step 2: Enter password");
});
(0, cucumber_1.When)('Click the login button', async function () {
    console.log("Step 3: Click login button");
});
(0, cucumber_1.Then)('Verify user is in Login page', async function () {
    console.log("Step 4: Verify login page");
});
