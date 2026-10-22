const products = [
  "Apple iPhone 15",
  "Samsung Galaxy Phone",
  "Dell Laptop",
  "HP Laptop Bag",
  "Sony Headphones",
  "Boat Bluetooth Speaker",
  "Mi LED TV"
];


const searchText = "  PHONE ";

const keyword = searchText.trim().toLowerCase();

let found = 0;

console.log("===== PRODUCT SEARCH =====");
console.log("You searched for: " + searchText.trim());
console.log("--------------------------");

if (keyword.length === 0) {
  console.log("Please type something to search.");
} else {
  for (let i = 0; i < products.length; i++) {
    if (products[i].toLowerCase().includes(keyword)) {
      found++;
      console.log(found + ". " + products[i]);
    }
  }

  if (found === 0) {
    console.log("No products found.");
  } else {
    console.log("--------------------------");
    console.log("Total results: " + found);
  }
}
