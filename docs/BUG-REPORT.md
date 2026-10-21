# ส่วนที่ 3: รายงานบั๊ก

จากผลการรัน test ชุดเดียวกัน (44 เคส) กับ Build 1–9 · Prototype ผ่านทั้งหมด 44/44

| Build | อาการบั๊ก | Input | Expected | Actual | ความรุนแรง |
|---|---|---|---|---|---|
| 1 | ไม่ตรวจสอบว่า input เป็นตัวเลข ไม่แสดงข้อความ error แต่แสดง NaN แทน | Add, First = abc, Second = 3 (TC36) | Error: Number 1 is not a number | Answer = NaN, ไม่มีข้อความ error | Major |
| 2 | Add กับ Concatenate ทำงานสลับกัน | Add, First = 2, Second = 3 (TC01) | 5 | 23 | Critical |
| 3 | Concatenate ตรวจสอบตัวเลขเหมือนการคำนวณ ต่อข้อความที่เป็นตัวอักษรไม่ได้ | Concatenate, First = abc, Second = def (TC27) | abcdef | Answer ว่าง, Error: Number 1 is not a number | Major |
| 4 | Integers only ถูกติ๊กค้างและเอาออกไม่ได้ ผลลัพธ์ทศนิยมถูกตัดทิ้งเสมอ | Divide, First = 7, Second = 2, Integers only = No (TC21) | 3.5 | 3 | Critical |
| 5 | ปุ่ม Clear กดไม่ได้ตอนเปิดหน้า (กดได้หลังคำนวณครั้งแรก) | เปิดหน้าแล้วกด Clear (TC44) | ปุ่ม Clear กดได้ | ปุ่ม Clear ถูก disable | Minor |
| 6 | หารด้วยศูนย์แล้วไม่แสดงข้อความ error | Divide, First = 5, Second = 0 (TC25) | Error: Divide by zero error! | Answer = Infinity, ไม่มีข้อความ error | Major |
| 7 | ใช้ผลลัพธ์ครั้งก่อนแทนค่า First number | Add, First = 2, Second = 3 บนหน้าที่เพิ่งเปิด (TC01) | 5 | 3 | Critical |
| 8 | First number กับ Second number ถูกสลับกัน | Subtract, First = 5, Second = 3 (TC09) | 2 | -2 | Critical |
| 9 | ช่อง Second number และปุ่ม Calculate หายไป คำนวณไม่ได้เลย | Add, First = 2, Second = 3 (TC01) | 5 | ไม่มีช่อง Second number และปุ่ม Calculate ให้ใช้ | Critical |

ความรุนแรง: Critical = คำนวณผิดหรือใช้งานไม่ได้ในการใช้งานปกติ · Major = ผิดในกรณีพิเศษหรือไม่ป้องกัน input ผิด · Minor = UI ผิดแต่มีทางเลี่ยง

จำนวนเคสที่ fail: Build 1 = 5, Build 2 = 14, Build 3 = 1, Build 4 = 4, Build 5 = 1, Build 6 = 1, Build 7 = 30, Build 8 = 22, Build 9 = 43 (รายละเอียดใน playwright-report)
