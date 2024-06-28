function calculateVacationPrice(groupSize, groupType, dayOfWeek) {
    const prices = {
        Students: {
            Friday: 8.45,
            Saturday: 9.80,
            Sunday: 10.46
        },
        Business: {
            Friday: 10.90,
            Saturday: 15.60,
            Sunday: 16.00
        },
        Regular: {
            Friday: 15.00,
            Saturday: 20.00,
            Sunday: 22.50
        }
    };

    let pricePerPerson = prices[groupType][dayOfWeek];
    let totalPrice = groupSize * pricePerPerson;

    if (groupType === "Students" && groupSize >= 30) {
        totalPrice *= 0.85; // 15% discount
    } else if (groupType === "Business" && groupSize >= 100) {
        totalPrice -= 10 * pricePerPerson; // 10 people stay for free
    } else if (groupType === "Regular" && groupSize >= 10 && groupSize <= 20) {
        totalPrice *= 0.95; // 5% discount
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

// Примери
calculateVacationPrice(30, "Students", "Sunday");    // Изход: Total price: 266.73
calculateVacationPrice(40, "Regular", "Saturday");   // Изход: Total price: 800.00
