function processTowns(input) {
    input.forEach(row => {
        let [town, latitudeStr, longitudeStr] = row.split(' | ');
        let latitude = Number(latitudeStr).toFixed(2);
        let longitude = Number(longitudeStr).toFixed(2);

        let townObj = {
            town,
            latitude,
            longitude
        };

        console.log(townObj);
    });
}

// Test cases
processTowns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);

processTowns([
    'Plovdiv | 136.45 | 812.575'
]);
