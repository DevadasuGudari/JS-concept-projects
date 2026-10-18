const employeeName = "Deva";
const salary = 50000;

let allowance = 5000;
let deduction = 2000;

var companyName = "Tech Solutions";

let netsalary = salary + allowance - deduction;

console.log("companyName : " +companyName);
console.log("EmployeeName : " +employeeName);
console.log("Allowance : " +allowance);
console.log("Deduction : " +deduction);
console.log("Netsalary : " +netsalary);

allowance = 7000;
deduction = 3000;

netsalary = salary + allowance - deduction;

console.log("Updated Allowance : " +allowance);
console.log("Updated Deduction : " +deduction);
console.log("Updated Netsalary : " +netsalary);
