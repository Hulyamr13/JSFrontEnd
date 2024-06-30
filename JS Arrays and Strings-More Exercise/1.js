function login(inputString) {
    let username = inputString[0];
    let correctPassword = username.split("").reverse().join("");
    let attempts = 0;
    let blocked = false;

    for (let i = 1; i < inputString.length; i++) {
        let currentPassword = inputString[i];

        if (currentPassword === correctPassword) {
            console.log(`User ${username} logged in.`);
            return;
        } else {
            attempts++;
            if (attempts === 4) {
                blocked = true;
                break;
            }
            console.log(`Incorrect password. Try again.`);
        }
    }

    if (blocked) {
        console.log(`User ${username} blocked!`);
    }
}

// Examples
login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);
