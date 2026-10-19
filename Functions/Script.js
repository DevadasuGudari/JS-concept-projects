function calculatesubtotal(price, quantity){
    return subtotal = 0;
    for( let i = 0 ; i<quantity.length ; i++){
        subtotal+=price[i]*quantity[i];
    }
    return subtotal;
}

function calculateDeliveryFee(subtotal){
    if(subtotal > 500){
        return 0 ;
    }
    return 40;
}

function calculateDiscount(subtotal){
    if(subtotal >= 300){
        return subtotal*10/100;
    }
    return 0;
}

function calculateTotal(subtotal, discount, deliveryFee){
    return subtotal-discount+deliveryFee;
}

function printBill(customerName, itemsNames, price, quantities){
    const subtotal = calculatesubtotal(price, quantities);
    const discount = calculateDiscount(subtotal);
    const deliveryFee = calculateDeliveryFee(subtotal);
    const total = calculateTotal(subtotal, discount, deliveryFee);

    console.log("===============Food Delivery Bill=================");
    console.log("Customer Name :" +customerName);
    console.log("--------------------------------------------------");

    for(let i = 0 ; i<itemsNames.length; i++){
        console.log(itemsNames[i] + ":" +price[i]+ " x " + quantities[i] + " = " + (price[i] * quantities[i]));
    }
    console.log("--------------------------------------------------");
    console.log("Subtotal : " + subtotal);
    console.log("Discount : " + discount);
    console.log("Delivery Fee : " + deliveryFee);
    console.log("Total : " + total);
    console.log("==================================================");
}


// Order 1
printBill(
  "Ravi",
  ["Biryani", "Paneer Roll", "Cold Drink"],
  [250, 120, 80],
  [2, 1, 3]
);

// Order 2 (same functions, different data)
printBill(
  "Sita",
  ["Fries", "Juice"],
  [100, 50],
  [1, 2]
);