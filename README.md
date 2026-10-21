# Test Logic เครื่องคิดเลข (Basic Calculator)

เว็บที่ทดสอบ: https://testsheepnz.github.io/BasicCalculator.html
เครื่องมือ: Playwright + JavaScript (Page Object Model, Data-driven)

## วิธีรัน

```bash
npm install
npx playwright install chromium
npm run test:prototype   # รันกับ Prototype
npm test                 # รันชุดเดิมกับ Prototype + Build 1–9
npm run report           # เปิด report ผลการรัน
```

## ไฟล์ที่ส่ง

| สิ่งที่ต้องส่ง | ไฟล์ |
|---|---|
| ตาราง test case (ส่วนที่ 1) | [`docs/TEST-CASES.xlsx`](docs/TEST-CASES.xlsx) (ข้อมูลเดียวกับ [`test-data/test-cases.json`](test-data/test-cases.json) ที่ test อ่าน) |
| Source code | repo นี้ |
| Report ผลการรัน | เปิดดูออนไลน์: https://gitputas.github.io/basic-calculator-test/playwright-report/ (ไฟล์อยู่ที่ `playwright-report/index.html`) |
| ตารางสรุปบั๊ก (ส่วนที่ 3) | [`docs/BUG-REPORT.md`](docs/BUG-REPORT.md), [`docs/BUG-REPORT.xlsx`](docs/BUG-REPORT.xlsx) |

## โครงสร้าง

```
test-data/test-cases.json   ตาราง test case (คอลัมน์เดียวกับส่วนที่ 1)
pages/CalculatorPage.js     Page Object: locator + action
tests/calculator.spec.js    test ชุดเดียว วนทุกแถวในตาราง
playwright.config.js        build เป็น parameter: 1 project ต่อ 1 build
```

- Expected result มาจาก `test-cases.json` เท่านั้น ไม่ได้อ่านจากหน้าเว็บมาเทียบ
- ไม่มี hard wait: ใช้การรออัตโนมัติของ `expect()` และ `click()`
- Operation `Add + Clear` = คำนวณ Add แล้วกด Clear, Operation `Clear` = กด Clear อย่างเดียว
- Expected result ที่ขึ้นต้นด้วย `Error:` = ต้องแสดงข้อความ error นั้น

## การใช้ AI

ใช้ Claude Code (AI) สร้างโค้ด ตาราง test case และร่างรายงานบั๊ก ผู้ส่งเป็นคนกำหนดโจทย์ สั่งให้แก้ และตรวจผลการรัน
