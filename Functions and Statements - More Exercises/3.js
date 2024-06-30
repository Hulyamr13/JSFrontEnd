function pointsValidation(points) {
    let [x1, y1, x2, y2] = points;

    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    function isValidDistance(x1, y1, x2, y2) {
        let distance = calculateDistance(x1, y1, x2, y2);
        return Number.isInteger(distance);
    }

    function formatPoint(x, y) {
        return `{${x}, ${y}}`;
    }

    // Check distances in order
    let distance1IsValid = isValidDistance(x1, y1, 0, 0);
    let distance2IsValid = isValidDistance(x2, y2, 0, 0);
    let distance3IsValid = isValidDistance(x1, y1, x2, y2);

    // Output results
    if (distance1IsValid) {
        console.log(`${formatPoint(x1, y1)} to {0, 0} is valid`);
    } else {
        console.log(`${formatPoint(x1, y1)} to {0, 0} is invalid`);
    }

    if (distance2IsValid) {
        console.log(`${formatPoint(x2, y2)} to {0, 0} is valid`);
    } else {
        console.log(`${formatPoint(x2, y2)} to {0, 0} is invalid`);
    }

    if (distance3IsValid) {
        console.log(`${formatPoint(x1, y1)} to ${formatPoint(x2, y2)} is valid`);
    } else {
        console.log(`${formatPoint(x1, y1)} to ${formatPoint(x2, y2)} is invalid`);
    }
}

// Examples
pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);
