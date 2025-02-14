function roadRadar(speed, area) {
    const speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    const speedLimit = speedLimits[area];

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        const difference = speed - speedLimit;
        let status;

        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

// Примери
roadRadar(40, 'city');          // Изход: Driving 40 km/h in a 50 zone
roadRadar(21, 'residential');   // Изход: The speed is 1 km/h faster than the allowed speed of 20 - speeding
roadRadar(120, 'interstate');   // Изход: The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
roadRadar(200, 'motorway');     // Изход: The speed is 70 km/h faster than the allowed speed of 130 - reckless driving
