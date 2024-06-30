function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldBroken = 0; // Counter for shield breaks

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            expenses += helmetPrice;
        }
        if (i % 3 === 0) {
            expenses += swordPrice;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            expenses += shieldPrice;
            shieldBroken++;
            if (shieldBroken % 2 === 0) {
                expenses += armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

// Examples:
gladiatorExpenses(7, 2, 3, 4, 5);   // Output: Gladiator expenses: 16.00 aureus
gladiatorExpenses(23, 12.50, 21.50, 40, 200);   // Output: Gladiator expenses: 608.00 aureus
