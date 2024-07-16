function storeCarsInGarages(inputArray) {
    const garages = {};

    inputArray.forEach(input => {
        const [garageNumber, carInfo] = input.split(' - ');
        const formattedCarInfo = carInfo.split(', ').map(pair => pair.replace(': ', ' - ')).join(', ');
        (garages[garageNumber] ||= []).push(formattedCarInfo);
    });

    for (const [garageNumber, cars] of Object.entries(garages)) {
        console.log(`Garage № ${garageNumber}`);
        cars.forEach(car => console.log(`--- ${car}`));
    }
}


storeCarsInGarages([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);
