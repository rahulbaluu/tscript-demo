import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import { expect } from '@playwright/test';

const url = "https://automationexercise.com/login"


Given('Enter the correct username', async function () {
  
  await pageFixture.page.goto(url);
  //await pageFixture.page.getByRole('button', { name: 'Consent' }).click();
  await pageFixture.page.locator('[data-qa="login-email"]').fill('rahul4321@gmail.com')
});

When('Enter the correct password', async function () {
  await pageFixture.page.locator('[data-qa="login-password"]').fill('Rahul1234')
});

When('Click the login button', async function () {
  await pageFixture.page.locator('[data-qa="login-button"]').click();
});

Then('Verify user is in Login page', async function () {
  await expect(pageFixture.page.locator('li a:has-text("Logged in as") b')).toHaveText('Rahul');
  console.log("Passed")
});


Given('Enter the username', async function () {
  
  await pageFixture.page.goto(url);
  //await pageFixture.page.getByRole('button', { name: 'Consent' }).click();
  await pageFixture.page.locator('[data-qa="login-email"]').fill('rahul4321@gmail.com')
});

When('Enter the wrong password', async function () {
  await pageFixture.page.locator('[data-qa="login-password"]').fill('Rahul1235')
});

When('Click the login button', async function () {
  await pageFixture.page.locator('[data-qa="login-button"]').click();
});

Then('Verify the Error message displayed', async function () {
  const errorMessage = this.page.locator('p:has-text("Your email or password is incorrect!")');
  await expect(errorMessage).toHaveText('Your email or password is incorrect!');
});
