function carCleanness(procedureList) {
    let cleanValue = procedureList.reduce((value, procedure) => {
        switch (procedure) {
            case 'soap': return value + 10;
            case 'water': return value * 1.20;
            case 'vacuum cleaner': return value * 1.25;
            case 'mud': return value * 0.90;
            default: return value;
        }
    }, 0);

    console.log(`The car is ${cleanValue.toFixed(2)}% clean.`);
}

// Examples
carCleanness(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
// Output: The car is 39.00% clean.

carCleanness(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
// Output: The car is 13.12% clean.
