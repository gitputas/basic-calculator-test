// @ts-check

// Page Object ของ https://testsheepnz.github.io/BasicCalculator.html
// เก็บ locator และ action ทั้งหมดของหน้า ส่วน assertion อยู่ในไฟล์ test
class CalculatorPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.buildSelect = page.getByTestId('selectBuild');
    this.firstNumber = page.getByTestId('number1Field');
    this.secondNumber = page.getByTestId('number2Field');
    this.operationSelect = page.getByTestId('selectOperationDropdown');
    this.integersOnly = page.getByTestId('integerSelect');
    this.calculateButton = page.getByTestId('calculateButton');
    this.clearButton = page.getByTestId('clearButton');
    this.answer = page.getByTestId('numberAnswerField');
    this.errorMessage = page.getByTestId('errorMsgField');
  }

  /**
   * เปิดหน้าเว็บแล้วเลือก build
   * @param {string} build "Prototype" หรือ "1".."9"
   */
  async open(build) {
    await this.page.goto('/BasicCalculator.html');
    await this.buildSelect.selectOption({ label: build });
  }

  /**
   * กรอกตัวเลข เลือก operation ติ๊ก Integers only (ถ้าต้องการ) แล้วกด Calculate
   * @param {string} operation
   * @param {string} first
   * @param {string} second
   * @param {boolean} integersOnly
   */
  async calculate(operation, first, second, integersOnly) {
    await this.firstNumber.fill(first);
    await this.secondNumber.fill(second);
    await this.operationSelect.selectOption({ label: operation });
    if (integersOnly) {
      await this.integersOnly.check();
    }
    await this.calculateButton.click();
  }

  async clear() {
    await this.clearButton.click();
  }
}

module.exports = { CalculatorPage };
