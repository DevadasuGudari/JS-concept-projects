const correctPin = 1234;
let balance = 10000;


const enteredPin = 1234;
const withdrawAmount = 3000;

const minBalance = 500;
const dailyLimit = 20000;

console.log("----- ATM SYSTEM -----");

if (enteredPin !== correctPin) {
  console.log("Invalid PIN. Access denied.");
} else {
  console.log("PIN verified.");

  if (withdrawAmount <= 0) {
    console.log("Enter a valid amount.");
  } else if (withdrawAmount % 100 !== 0) {
    console.log("Amount must be in multiples of 100.");
  } else if (withdrawAmount > dailyLimit) {
    console.log("Withdrawal limit exceeded. Maximum is " + dailyLimit);
  } else if (withdrawAmount > balance) {
    console.log("Insufficient balance.");
  } else if (balance - withdrawAmount < minBalance) {
    console.log("Minimum balance of " + minBalance + " must be maintained.");
  } else {
    balance = balance - withdrawAmount;
    console.log("Withdrawal successful.");
    console.log("Amount withdrawn: " + withdrawAmount);
    console.log("Remaining balance: " + balance);
  }
}