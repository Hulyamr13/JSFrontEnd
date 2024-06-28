function determineAgeStage(age) {
    if (age >= 0 && age <= 2) {
        return "baby";
    } else if (age >= 3 && age <= 13) {
        return "child";
    } else if (age >= 14 && age <= 19) {
        return "teenager";
    } else if (age >= 20 && age <= 65) {
        return "adult";
    } else if (age >= 66) {
        return "elder";
    } else {
        return "out of bounds";
    }
}

// Примери
console.log(determineAgeStage(20));   // Изход: adult
console.log(determineAgeStage(1));    // Изход: baby
console.log(determineAgeStage(100));  // Изход: elder
console.log(determineAgeStage(-1));   // Изход: out of bounds
