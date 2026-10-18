let container = document.getElementById("productContainer");


let products = [

    {
        id: 101,
        name: "Apple MacBook Air M3",
        price: 99999,
        category: "Electronics",
        brand: "Apple",
        stock: 12
    },

    {
        id: 102,
        name: "Samsung Galaxy S25",
        price: 79999,
        category: "Electronics",
        brand: "Samsung",
        stock: 20
    },

    {
        id: 103,
        name: "Sony WH-1000XM5",
        price: 29999,
        category: "Electronics",
        brand: "Sony",
        stock: 15
    },

    {
        id: 104,
        name: "Dell XPS 15",
        price: 124999,
        category: "Electronics",
        brand: "Dell",
        stock: 8
    },

    {
        id: 105,
        name: "iPhone 16 Pro",
        price: 119999,
        category: "Electronics",
        brand: "Apple",
        stock: 18
    },

    {
        id: 106,
        name: "Nike Air Max 270",
        price: 12999,
        category: "Footwear",
        brand: "Nike",
        stock: 25
    },

    {
        id: 107,
        name: "Adidas Ultraboost 5",
        price: 15999,
        category: "Footwear",
        brand: "Adidas",
        stock: 18
    },

    {
        id: 108,
        name: "Puma RS-X",
        price: 8999,
        category: "Footwear",
        brand: "Puma",
        stock: 30
    },

    {
        id: 109,
        name: "New Balance 574",
        price: 10999,
        category: "Footwear",
        brand: "New Balance",
        stock: 16
    },

    {
        id: 110,
        name: "Skechers Go Walk",
        price: 7999,
        category: "Footwear",
        brand: "Skechers",
        stock: 24
    },

    {
        id: 111,
        name: "Levi's 511 Jeans",
        price: 3499,
        category: "Clothing",
        brand: "Levi's",
        stock: 30
    },

    {
        id: 112,
        name: "Adidas Sports T-Shirt",
        price: 2499,
        category: "Clothing",
        brand: "Adidas",
        stock: 18
    },

    {
        id: 113,
        name: "Nike Dri-FIT T-Shirt",
        price: 2999,
        category: "Clothing",
        brand: "Nike",
        stock: 24
    },

    {
        id: 114,
        name: "Zara Casual Shirt",
        price: 2999,
        category: "Clothing",
        brand: "Zara",
        stock: 20
    },

    {
        id: 115,
        name: "H&M Cotton Shirt",
        price: 1999,
        category: "Clothing",
        brand: "H&M",
        stock: 35
    },

    {
        id: 116,
        name: "Ray-Ban Aviator",
        price: 12999,
        category: "Accessories",
        brand: "Ray-Ban",
        stock: 20
    },

    {
        id: 117,
        name: "Fossil Chronograph Watch",
        price: 15999,
        category: "Accessories",
        brand: "Fossil",
        stock: 12
    },

    {
        id: 118,
        name: "American Tourister Backpack",
        price: 4999,
        category: "Accessories",
        brand: "American Tourister",
        stock: 24
    },

    {
        id: 119,
        name: "Casio G-Shock",
        price: 8999,
        category: "Accessories",
        brand: "Casio",
        stock: 25
    },

    {
        id: 120,
        name: "Wildcraft Backpack",
        price: 3499,
        category: "Accessories",
        brand: "Wildcraft",
        stock: 29
    }
];


function displayProducts(products) {

    container.innerHTML = products.map(function (item) {

        return `
            <div class="product">

                <h3>${item.name}</h3>

                <p>Brand: ${item.brand}</p>

                <p>Price: ₹${item.price}</p>

                <p>Category: ${item.category}</p>

                <p>Stock: ${item.stock}</p>

                <button>Add to Cart</button>

            </div>
        `;

    }).join(``);
}


function filterProducts(name) {

    let result = products.filter(function (item) {

        return item.name.toLowerCase().includes(name.toLowerCase());

    });

    displayProducts(result);
}

displayProducts(products);