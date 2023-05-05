// helpers.js
const { By } = require('selenium-webdriver');

async function clickElement(driver, xpath, failMessage, sleepAmt) {
  try {
    const element = await driver.findElement(By.xpath(xpath));
    await element.click();
    await driver.sleep(sleepAmt);
  } catch (error) {
    throw new Error(failMessage);
  }
}
async function inputTxt(driver, xpath, input,failMessage, sleepAmt) {
    try {
      const element = await driver.findElement(By.xpath(xpath));
      await element.sendKeys(input);
      await driver.sleep(sleepAmt);
    } catch (error) {
      throw new Error(failMessage);
    }
  }

module.exports = {
  clickElement,
  inputTxt
};
