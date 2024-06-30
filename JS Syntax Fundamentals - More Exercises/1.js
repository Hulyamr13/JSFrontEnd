function validityChecker(x1, y1, x2, y2) {
    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    function isInteger(num) {
        return Number.isInteger(num);
    }

    function checkValidity(x1, y1, x2, y2) {
        let distance1 = calculateDistance(x1, y1, 0, 0);
        let distance2 = calculateDistance(x2, y2, 0, 0);
        let distance3 = calculateDistance(x1, y1, x2, y2);

        let isValid1 = isInteger(distance1);
        let isValid2 = isInteger(distance2);
        let isValid3 = isInteger(distance3);

        if (isValid1) {
            console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
        }

        if (isValid2) {
            console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
        } else {
            console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
        }

        if (isValid3) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    checkValidity(x1, y1, x2, y2);
}

// Примери
validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
