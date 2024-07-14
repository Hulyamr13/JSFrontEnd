function flightSchedule(info) {
    const [flights, statusUpdates, [searchedStatus]] = info;
    const flightInfo = flights.reduce((acc, flight) => {
        const [flightNumber, ...destinationParts] = flight.split(' ');
        acc[flightNumber] = {
            Destination: destinationParts.join(' '),
            Status: 'Ready to fly'
        };
        return acc;
    }, {});

    statusUpdates.forEach(update => {
        const [flightNumber, status] = update.split(' ');
        if (flightInfo[flightNumber]) {
            flightInfo[flightNumber].Status = status;
        }
    });

    Object.values(flightInfo)
        .filter(flight => flight.Status === searchedStatus)
        .forEach(flight => console.log(flight));
}

// Example usage:
let input1 = [
    ['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'],
    ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'],
    ['Cancelled']
];

let input2 = [
    ['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'],
    ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'],
    ['Ready to fly']
];

console.log("Output for input1:");
getFlightInfo(input1);

console.log("\nOutput for input2:");
getFlightInfo(input2);
