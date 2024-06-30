function formatGrade(grade) {
    let description;

    if (grade < 3.00) {
        description = `Fail (${Math.floor(grade)})`;
    } else if (grade < 3.50) {
        description = `Poor (${grade.toFixed(2)})`;
    } else if (grade < 4.50) {
        description = `Good (${grade.toFixed(2)})`;
    } else if (grade < 5.50) {
        description = `Very good (${grade.toFixed(2)})`;
    } else {
        description = `Excellent (${grade.toFixed(2)})`;
    }

    console.log(description);
}

// Example usage:
formatGrade(3.33); // Output: Poor (3.33)
formatGrade(4.50); // Output: Very good (4.50)
formatGrade(2.99); // Output: Fail (2.99)
formatGrade(5.75); // Output: Excellent (5.75)
