const price1 = "250.50";
const qty1 = "2";

const price2 = "120";
const qty2 = "3";

const price3 = "75.25";
const qty3 = "4";


console.log("Without conversion:", price1 + qty1);   


const p1 = parseFloat(price1);
const q1 = parseInt(qty1);

const p2 = Number(price2);
const q2 = Number(qty2);

const p3 = parseFloat(price3);
const q3 = parseInt(qty3);


console.log("price1 type:", typeof price1);   
console.log("p1 type:", typeof p1);           


const total1 = p1 * q1;
const total2 = p2 * q2;
const total3 = p3 * q3;


let subtotal = 0;
subtotal += total1;
subtotal += total2;
subtotal += total3;


const discount = subtotal * 10 / 100;
const afterDiscount = subtotal - discount;
const gst = afterDiscount * 18 / 100;
const finalBill = afterDiscount + gst;


console.log("----- SHOPPING BILL -----");
console.log("Item 1:", p1, "x", q1, "=", total1);
console.log("Item 2:", p2, "x", q2, "=", total2);
console.log("Item 3:", p3, "x", q3, "=", total3);
console.log("Subtotal:", subtotal.toFixed(2));
console.log("Discount (10%):", discount.toFixed(2));
console.log("After Discount:", afterDiscount.toFixed(2));
console.log("GST (18%):", gst.toFixed(2));
console.log("Final Bill:", finalBill.toFixed(2));