const names = ["Ravi", "Sita", "Kiran", "Anil", "Priya"];
const units = [120, 250, 80, 300, 150];

const ratePerUnit = 6;      
const fixedCharge = 50;     

let totalUnits = 0;
let totalAmount = 0;

console.log("===== MONTHLY ELECTRICITY BILL REPORT =====");

for (let i = 0; i < names.length; i++) {
  const bill = units[i] * ratePerUnit + fixedCharge;

  totalUnits += units[i];
  totalAmount += bill;

  console.log("Customer " + (i + 1));
  console.log("Name: " + names[i]);
  console.log("Units: " + units[i]);
  console.log("Bill: ₹" + bill);
  console.log("--------------------------");
}

console.log("Total Customers: " + names.length);
console.log("Total Units: " + totalUnits);
console.log("Total Amount: ₹" + totalAmount);
