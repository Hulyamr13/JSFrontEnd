function roadRadar(speed, area) {
    let speedLimit;

    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
        default:
            console.log("Unknown area");
            return;
    }

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        let difference = speed - speedLimit;
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
