# Basic Calculator Test

Automated tests for the [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html), written with Playwright and JavaScript using a Page Object and a data-driven test.

## Run

```bash
npm install
npx playwright install chromium
npm run test:prototype   # Prototype only
npm test                 # Prototype and Build 1–9
npm run report           # open the HTML report
```

## Deliverables

| Deliverable | Location |
|---|---|
| Test case table (Part 1) | [`docs/TEST-CASES.xlsx`](docs/TEST-CASES.xlsx), same data as [`test-data/test-cases.json`](test-data/test-cases.json) |
| Source code (Part 2) | this repository |
| Test report | https://gitputas.github.io/basic-calculator-test/playwright-report/ (file: `playwright-report/index.html`) |
| Bug report (Part 3) | [`docs/BUG-REPORT.md`](docs/BUG-REPORT.md), [`docs/BUG-REPORT.xlsx`](docs/BUG-REPORT.xlsx) |

## Structure

```
test-data/test-cases.json   test case table, same columns as Part 1
pages/CalculatorPage.js     Page Object: locators and actions
tests/calculator.spec.js    one test that runs every row of the table
playwright.config.js        one project per build (Prototype, 1–9)
```

## How it works

- Every row in `test-cases.json` becomes a test, and every build runs the same test as its own project.
- Expected results come from the table. Nothing is read back from the page to build an expectation.
- No hard waits. Playwright's `expect()` and `click()` wait for the page on their own.
- `Add + Clear` in the Operation column means calculate with Add, then click Clear. `Clear` alone means click Clear only.
- An expected result starting with `Error:` means the page must show that error message.

## Results

Prototype passes all 44 test cases. Build 1–9 each fail at least one, and the bugs are listed in [`docs/BUG-REPORT.md`](docs/BUG-REPORT.md).

## AI use

Code, test cases and the bug report draft were produced with Claude Code; I set the requirements, reviewed the runs and directed the changes.
