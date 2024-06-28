function calculateVacationPrice(groupSize, groupType, dayOfWeek) {
    let pricePerPerson = 0;

    switch (groupType) {
        case "Students":
            switch (dayOfWeek) {
                case "Friday":
                    pricePerPerson = 8.45;
                    break;
                case "Saturday":
                    pricePerPerson = 9.80;
                    break;
                case "Sunday":
                    pricePerPerson = 10.46;
                    break;
            }
            break;
        case "Business":
            switch (dayOfWeek) {
                case "Friday":
                    pricePerPerson = 10.90;
                    break;
                case "Saturday":
                    pricePerPerson = 15.60;
                    break;
                case "Sunday":
                    pricePerPerson = 16.00;
                    break;
            }
            break;
        case "Regular":
            switch (dayOfWeek) {
                case "Friday":
                    pricePerPerson = 15.00;
                    break;
                case "Saturday":
                    pricePerPerson = 20.00;
                    break;
                case "Sunday":
                    pricePerPerson = 22.50;
                    break;
            }
            break;
    }

    let totalPrice = groupSize * pricePerPerson;

    // Apply discounts based on conditions
    if (groupType === "Students" && groupSize >= 30) {
        totalPrice *= 0.85; // 15% discount
    } else if (groupType === "Business" && groupSize >= 100) {
        totalPrice -= 10 * pricePerPerson; // 10 people stay for free
    } else if (groupType === "Regular" && groupSize >= 10 && groupSize <= 20) {
        totalPrice *= 0.95; // 5% discount
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

// Examples
calculateVacationPrice(30, "Students", "Sunday");    // Output: Total price: 266.73
calculateVacationPrice(40, "Regular", "Saturday");   // Output: Total price: 800.00
