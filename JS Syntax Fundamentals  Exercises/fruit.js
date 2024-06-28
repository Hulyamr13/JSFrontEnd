function calculateFruitCost(fruit, weightInGrams, pricePerKilogram) {
    let weightInKilograms = weightInGrams / 1000;
    let moneyNeeded = weightInKilograms * pricePerKilogram;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`);
}


calculateFruitCost('orange', 2500, 1.80);  // Изход: I need $4.50 to buy 2.50 kilograms orange.
calculateFruitCost('apple', 1563, 2.35);   // Изход: I need $3.67 to buy 1.56 kilograms apple.
