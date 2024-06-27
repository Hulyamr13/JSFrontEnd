function studentInfo(name, age, grade) {
    let formattedGrade = grade.toFixed(2);
    console.log(`Name: ${name}, Age: ${age}, Grade: ${formattedGrade}`);
}

// Examples:
studentInfo('John', 15, 5.54678);  // Output: Name: John, Age: 15, Grade: 5.55
studentInfo('Steve', 16, 2.1426);  // Output: Name: Steve, Age: 16, Grade: 2.14
studentInfo('Marry', 12, 6.00);    // Output: Name: Marry, Age: 12, Grade: 6.00
