function getFlightInfo(mainArray) {
    const [array1, array2, array3] = mainArray;
    let allFlights = {};
    let status = 'Ready to fly';

    // Populate allFlights from array1
    for (let info1 of array1) {
        let [number, destination] = info1.split(' ');
        allFlights[number] = {
            Destination: destination,
            Status: status,
        };
    }

    // Update statuses from array2
    for (let info2 of array2) {
        let number = info2.split(' ')[0];
        if (allFlights.hasOwnProperty(number)) {
            allFlights[number].Status = 'Cancelled';
        }
    }

    // Filter and print flights with the given status from array3
    let filteredFlights = Object.entries(allFlights)
        .filter(([, flight]) => flight.Status === array3[0]);

    filteredFlights.forEach(([number, flight]) => {
        console.log(`{ Destination: '${flight.Destination}', Status: '${flight.Status}' }`);
    });
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
