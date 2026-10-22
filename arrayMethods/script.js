const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 5, category: "electronics" },
  { id: 2, name: "Phone", price: 20000, stock: 10, category: "electronics" },
  { id: 3, name: "Shirt", price: 800, stock: 40, category: "clothing" },
  { id: 4, name: "Shoes", price: 2500, stock: 0, category: "clothing" },
  { id: 5, name: "Headphones", price: 1500, stock: 15, category: "electronics" }
];

const inStockProducts = products.filter(p => p.stock > 0);
console.log("In-stock products:");
console.table(inStockProducts);

const electronics = products.filter(p => p.category === "electronics");
console.log("Electronics products:");
console.table(electronics);


const discountPercent = 10;
const discountedProducts = products.map(p => ({
  ...p, discountedPrice: p.price - (p.price * discountPercent) / 100
}));
console.log("Products after 10% discount:");
console.table(discountedProducts);

const totalInventoryValue = products.reduce(
  (total, p) => total + p.price * p.stock,
  0
);
console.log("Total inventory value:", totalInventoryValue);

const discountedInventoryValue = discountedProducts.reduce(
  (total, p) => total + p.discountedPrice * p.stock,
  0
);
console.log("Total inventory value after discount:", discountedInventoryValue);

const finalTotal = products
  .filter(p => p.stock > 0)
  .map(p => ({ ...p, price: p.price * 0.9 }))
  .reduce((total, p) => total + p.price * p.stock, 0);
console.log("In-stock products total after discount:", finalTotal);