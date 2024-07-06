function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    const infoDiv = document.querySelector('.info');

    let stopId = 'depot';
    let stopName;

    async function depart() {
        try {
            const response = await fetch(`${BASE_URL}${stopId}`);
            if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
            const data = await response.json();
            stopName = data.name;
            stopId = data.next;
            infoDiv.textContent = `Next Stop ${stopName}`;
            departButton.disabled = true;
            arriveButton.disabled = false;
        } catch (error) {
            infoDiv.textContent = 'Error';
            arriveButton.disabled = true;
        }
    }

    function arrive() {
        infoDiv.textContent = `Arriving at ${stopName}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
