// @ts-check
const { test, expect } = require('@playwright/test');
const { CalculatorPage } = require('../pages/CalculatorPage');
const testCases = require('../test-data/test-cases.json');

// test ชุดเดียว: วนทุกแถวในตาราง test case (ส่วนที่ 1)
// build มาจาก project ใน playwright.config.js จึงรันชุดเดิมกับทุก build ได้โดยไม่ copy โค้ด
for (const tc of testCases) {
  const title = `${tc['TC ID']} | ${tc['Operation']} "${tc['First number']}" , "${tc['Second number']}" | Integers only: ${tc['Integers only']} → "${tc['Expected result']}"`;

  test(title, async ({ page }) => {
    const calculator = new CalculatorPage(page);
    await calculator.open(test.info().project.metadata.build);

    // Operation อาจมีหลายขั้นตอน เช่น "Add + Clear" = คำนวณ Add แล้วกด Clear
    for (const step of tc['Operation'].split(' + ')) {
      if (step === 'Clear') {
        await calculator.clear();
      } else {
        await calculator.calculate(step, tc['First number'], tc['Second number'], tc['Integers only'] === 'Yes');
      }
    }

    // Expected result มาจากตารางเท่านั้น: ขึ้นต้นด้วย "Error: " = ต้องเห็นข้อความ error, นอกนั้น = ค่าในช่อง Answer
    const expected = tc['Expected result'];
    if (expected.startsWith('Error: ')) {
      await expect(calculator.errorMessage).toHaveText(expected.replace('Error: ', ''));
    } else {
      await expect(calculator.answer).toHaveValue(expected);
      await expect(calculator.errorMessage).toBeEmpty();
    }
  });
}
