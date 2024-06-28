class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        this.totalCost += product.price * product.quantity;
    }

    getProducts() {
        return this.storage.map(product => JSON.stringify(product)).join('\n');
    }
}

// Example 1
let productOne = {name: 'Cucumber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};

let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);

console.log(storage.getProducts());
// Expected output:
// {"name":"Cucumber","price":1.5,"quantity":15}
// {"name":"Tomato","price":0.9,"quantity":25}
// {"name":"Bread","price":1.1,"quantity":8}

console.log(storage.capacity); // Expected output: 2
console.log(storage.totalCost); // Expected output: 53.8

// Example 2
let productFour = {name: 'Tomato', price: 0.90, quantity: 19};
let productFive = {name: 'Potato', price: 1.10, quantity: 10};

let storage2 = new Storage(30);
storage2.addProduct(productFour);
storage2.addProduct(productFive);

console.log(storage2.totalCost); // Expected output: 28.1
