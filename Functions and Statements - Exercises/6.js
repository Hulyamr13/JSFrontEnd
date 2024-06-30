function passwordValidator(password) {
    let isValid = true;
    let messages = [];

    // Length check
    if (password.length < 6 || password.length > 10) {
        messages.push("Password must be between 6 and 10 characters");
        isValid = false;
    }

    // Character composition check
    if (!password.match(/^[a-zA-Z0-9]+$/)) {
        messages.push("Password must consist only of letters and digits");
        isValid = false;
    }

    // Digits count check
    let digitCount = 0;
    for (let char of password) {
        if (/\d/.test(char)) {
            digitCount++;
        }
    }
    if (digitCount < 2) {
        messages.push("Password must have at least 2 digits");
        isValid = false;
    }

    // Output messages
    if (isValid) {
        console.log("Password is valid");
    } else {
        for (let message of messages) {
            console.log(message);
        }
    }
}

// Examples
passwordValidator('logIn');      // Output: Password must be between 6 and 10 characters
                                //         Password must have at least 2 digits
passwordValidator('MyPass123');  // Output: Password is valid
passwordValidator('Pa$s$s');    // Output: Password must consist only of letters and digits
                                //         Password must have at least 2 digits
