const { Builder, By, Key, until } = require('selenium-webdriver');
var should = require('chai').should();
const { describe, it } = require('mocha');
const {
  elementIsDisabled,
  elementLocated,
} = require('selenium-webdriver/lib/until');

describe('Jira Login Test with Unregister Email', function () {
  it('Should not show password page for unregistered email', async function () {
    let driver = await new Builder().forBrowser('firefox').build();

    try {
      await driver.get('https://id.atlassian.com/login');
      await driver.wait(until.elementLocated(By.id('username')), 10000);
      await driver
        .findElement(By.id('username'))
        .sendKeys('universuswebtech@hotmail.com', Key.RETURN);

      await driver.wait(until.elementLocated(By.id('signup-submit')), 1000);
      let message = await driver
        .findElement(By.css('#signup-submit span'))
        .getText()
        .then(function (value) {
          return value;
        });

      message.should.contain('Sign up');
    } catch (error) {
      throw error;
    } finally {
      await driver.quit();
    }
  });
});
