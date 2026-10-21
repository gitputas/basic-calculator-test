const { test, expect } = require('@playwright/test');
const { CalculatorPage } = require('../pages/CalculatorPage');
const testCases = require('../test-data/test-cases.json');

// One data-driven test: each row of the test case table becomes a test, and each build is a Playwright project.
for (const tc of testCases) {
  const title = `${tc['TC ID']} | ${tc['Operation']} "${tc['First number']}" , "${tc['Second number']}" | Integers only: ${tc['Integers only']} → "${tc['Expected result']}"`;

  test(title, async ({ page }) => {
    const calculator = new CalculatorPage(page);
    await calculator.open(test.info().project.metadata.build);

    // An Operation like "Add + Clear" runs each step in order: calculate with Add, then click Clear.
    for (const step of tc['Operation'].split(' + ')) {
      if (step === 'Clear') {
        await calculator.clear();
      } else {
        await calculator.calculate(step, tc['First number'], tc['Second number'], tc['Integers only'] === 'Yes');
      }
    }

    // Expected result comes from the table only: "Error: ..." means an error message, anything else is the Answer value.
    const expected = tc['Expected result'];
    if (expected.startsWith('Error: ')) {
      await expect(calculator.errorMessage).toHaveText(expected.replace('Error: ', ''));
    } else {
      await expect(calculator.answer).toHaveValue(expected);
      await expect(calculator.errorMessage).toBeEmpty();
    }
  });
}
