function calculateOrder(product, quantity) {
    let price = 0;

    switch (product) {
        case "coffee":
            price = 1.50;
            break;
        case "water":
            price = 1.00;
            break;
        case "coke":
            price = 1.40;
            break;
        case "snacks":
            price = 2.00;
            break;
        default:
            console.log("Invalid product.");
            return;
    }

    let totalPrice = price * quantity;
    console.log(totalPrice.toFixed(2));
}


calculateOrder("water", 5);   // Output: 5.00
calculateOrder("coffee", 2);  // Output: 3.00
calculateOrder("coke", 1);    // Output: 1.40
calculateOrder("snacks", 3);  // Output: 6.00
calculateOrder("tea", 2);     // Output: Invalid product.
