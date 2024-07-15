function storeCarsInGarages(inputArray) {
    let garages = {};

    inputArray.forEach(input => {
        let [garageNumber, carInfo] = input.split(' - ');
        garageNumber = parseInt(garageNumber);

        if (!garages.hasOwnProperty(garageNumber)) {
            garages[garageNumber] = [];
        }

        let formattedCarInfo = carInfo.split(', ')
            .map(pair => {
                let [key, value] = pair.split(': ');
                return `${key.trim()} - ${value.trim()}`;
            })
            .join(', ');

        garages[garageNumber].push(formattedCarInfo);
    });

    Object.keys(garages).forEach(garageNumber => {
        console.log(`Garage № ${garageNumber}`);
        garages[garageNumber].forEach(car => {
            console.log(`--- ${car}`);
        });
    });
}


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
