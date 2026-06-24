let salary: number = 50000;
let yr_income: number = salary * 12;
console.log("เงินเดือน:", salary);
console.log("รายได้ต่อปี:", yr_income);

let taxRate: number = 0;
let taxAmount: number = 0;

if (yr_income < 100000) {
    taxRate = 0;
} else if (yr_income < 200000) {
    taxRate = 5;
} else if (yr_income < 500000) {
    taxRate = 7;
} else if (yr_income < 1000000) {
    taxRate = 10;
} else {
    taxRate = 15;
}

taxAmount = (yr_income * taxRate) / 100;

console.log("อัตราภาษี:", taxRate + "%");
console.log("ภาษีที่ต้องเสีย:", taxAmount);