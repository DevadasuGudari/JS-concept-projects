const cart = [];

function showCart() {
  console.log("----- CART -----");
  if (cart.length === 0) {
    console.log("Cart is empty");
  } else {
    for (let i = 0; i < cart.length; i++) {
      console.log((i + 1) + ". " + cart[i]);
    }
  }
  console.log("Total items: " + cart.length);
  console.log("");
}

// Add a product at the end
function addProduct(product) {
  cart.push(product);
  console.log(product + " added");
}

// Remove a product by name
function removeProduct(product) {
  const position = cart.indexOf(product);

  if (position === -1) {
    console.log(product + " is not in the cart");
  } else {
    cart.splice(position, 1);
    console.log(product + " removed");
  }
}

// Remove the last product
function removeLast() {
  if (cart.length === 0) {
    console.log("Cart is already empty");
  } else {
    const removed = cart.pop();
    console.log(removed + " removed (last item)");
  }
}

// ----- Use the cart -----
console.log("===== SHOPPING CART =====");

addProduct("Laptop");
addProduct("Mouse");
addProduct("Keyboard");
addProduct("Headphones");
showCart();

removeProduct("Mouse");
showCart();

removeProduct("Camera");     
removeLast();                 
showCart();


cart.unshift("Monitor");
console.log("Monitor in cart? " + cart.includes("Monitor"));
showCart();
