function storeProvision(currentStock, deliveries) {
    let stock = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        let product = currentStock[i];
        let quantity = Number(currentStock[i + 1]);

        stock[product] = (stock[product] || 0) + quantity;
    }

    for (let i = 0; i < deliveries.length; i += 2) {
        let product = deliveries[i];
        let quantity = Number(deliveries[i + 1]);

        stock[product] = (stock[product] || 0) + quantity;
    }

    for (let product in stock) {
        console.log(`${product} -> ${stock[product]}`);
    }
}



// Test cases
storeProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);

console.log();

storeProvision(
    [
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
);
