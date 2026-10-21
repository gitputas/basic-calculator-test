// Page Object for the Basic Calculator page: locators and actions only, assertions live in the test.
class CalculatorPage {
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

  // Opens the page and picks a build ("Prototype" or "1" to "9").
  async open(build) {
    await this.page.goto('/BasicCalculator.html');
    await this.buildSelect.selectOption({ label: build });
  }

  // Fills both numbers, picks the operation, ticks Integers only if asked, then clicks Calculate.
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
