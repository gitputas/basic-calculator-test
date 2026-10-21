# Bug Report

Found by running the same 44 test cases against Build 1–9. Prototype passes all 44.

| Build | Bug | Input | Expected | Actual | Severity |
|---|---|---|---|---|---|
| 1 | Input is not checked for numbers; shows NaN instead of an error | Add, First = abc, Second = 3 (TC36) | Error: Number 1 is not a number | Answer = NaN, no error message | Major |
| 2 | Add and Concatenate are swapped | Add, First = 2, Second = 3 (TC01) | 5 | 23 | Critical |
| 3 | Concatenate checks for numbers, so text cannot be joined | Concatenate, First = abc, Second = def (TC27) | abcdef | Answer empty, Error: Number 1 is not a number | Major |
| 4 | Integers only is always ticked and cannot be unticked, so decimals are always cut off | Divide, First = 7, Second = 2, Integers only = No (TC21) | 3.5 | 3 | Critical |
| 5 | Clear button is disabled when the page loads and only works after the first calculation | Click Clear right after the page loads (TC44) | Clear button is enabled | Clear button is disabled | Minor |
| 6 | Divide by zero shows no error | Divide, First = 5, Second = 0 (TC25) | Error: Divide by zero error! | Answer = Infinity, no error message | Major |
| 7 | Uses the previous answer in place of First number | Add, First = 2, Second = 3 on a freshly loaded page (TC01) | 5 | 3 | Critical |
| 8 | First number and Second number are swapped | Subtract, First = 5, Second = 3 (TC09) | 2 | -2 | Critical |
| 9 | Second number field and Calculate button are missing, so nothing can be calculated | Add, First = 2, Second = 3 (TC01) | 5 | No Second number field or Calculate button | Critical |

Severity: Critical = wrong result or unusable in normal use. Major = wrong in special cases or bad input is not caught. Minor = UI problem with a workaround.

Failed test cases per build: Build 1 = 5, Build 2 = 14, Build 3 = 1, Build 4 = 4, Build 5 = 1, Build 6 = 1, Build 7 = 30, Build 8 = 22, Build 9 = 43. Details are in the [test report](https://gitputas.github.io/basic-calculator-test/playwright-report/).
