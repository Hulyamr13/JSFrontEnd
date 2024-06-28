function catalogue(products) {
    let catalog = {};

    // Parse each product and store in the catalog object
    for (let product of products) {
        let [name, price] = product.split(' : ');
        price = Number(price);
        let initial = name[0].toUpperCase();

        if (!catalog[initial]) {
            catalog[initial] = [];
        }

        catalog[initial].push({ name, price });
    }

    // Sort the products in each group alphabetically by name (case-insensitive)
    Object.keys(catalog).sort().forEach(initial => {
        console.log(initial);
        catalog[initial].sort((a, b) => a.name.localeCompare(b.name)).forEach(product => {
            console.log(`  ${product.name}: ${product.price}`);
        });
    });
}

// Example 1
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

// Example 2
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);
