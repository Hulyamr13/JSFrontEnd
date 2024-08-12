window.addEventListener("load", solve);

function solve() {
    const weatherAPI = 'http://localhost:3030/jsonstore/tasks/';

    const weatherTracker = {
        inputFields: {
            location: document.querySelector('#location'),
            date: document.querySelector('#date'),
            temperature: document.querySelector('#temperature'),
        },
        addWeatherBtn: document.querySelector('#add-weather'),
        editWeatherBtn: document.querySelector('#edit-weather'),
        loadHistory: document.querySelector('#load-history'),
        list: document.querySelector('#list'),
        id: null,
        editDate: []
    };

    const resetFields = (inputs) => inputs.forEach(input => input.value = '');

    const bodyData = (id = '') => {
        const body = {
            location: weatherTracker.inputFields.location.value,
            temperature: weatherTracker.inputFields.temperature.value,
            date: weatherTracker.inputFields.date.value,
        };
        if (id) body._id = weatherTracker.id;
        return body;
    };

    const createTaskElement = (task) => {
        const container = document.createElement('div');
        container.className = 'container';

        const location = document.createElement('h2');
        location.textContent = task.location;
        container.appendChild(location);

        const date = document.createElement('h3');
        date.textContent = task.date;
        container.appendChild(date);

        const temperature = document.createElement('h3');
        temperature.id = 'celsius';
        temperature.textContent = task.temperature;
        container.appendChild(temperature);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.id = 'buttons-container';

        const changeBtn = document.createElement('button');
        changeBtn.className = 'change-btn';
        changeBtn.id = task._id;
        changeBtn.textContent = 'Change';
        changeBtn.addEventListener('click', changeBtnFunc);
        buttonsContainer.appendChild(changeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.id = task._id;
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteBtnFunc);
        buttonsContainer.appendChild(deleteBtn);

        container.appendChild(buttonsContainer);
        return container;
    };

    const addBtnFunc = () => {
        fetch(weatherAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData())
        })
        .then(() => {
            loadBtnFunc();
            resetFields(Object.values(weatherTracker.inputFields));
        });
    };

    const editBtnFunc = () => {
        fetch(`${weatherAPI}${weatherTracker.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData(weatherTracker.id))
        })
        .then(() => loadBtnFunc());
        weatherTracker.addWeatherBtn.disabled = false;
        weatherTracker.editWeatherBtn.disabled = true;
    };

    const changeBtnFunc = (e) => {
        weatherTracker.id = e.target.id;
        const currentContainer = e.target.parentNode.parentNode;
        weatherTracker.list.removeChild(currentContainer);
        weatherTracker.editDate = Array.from(currentContainer.querySelectorAll('h2, h3')).map(x => x.textContent);
        Object.values(weatherTracker.inputFields).forEach((input, i) => input.value = weatherTracker.editDate[i]);
        weatherTracker.addWeatherBtn.disabled = true;
        weatherTracker.editWeatherBtn.disabled = false;
    };

    const deleteBtnFunc = (e) => {
        fetch(`${weatherAPI}${e.target.id}`, {
            method: 'DELETE'
        })
        .then(() => loadBtnFunc());
    };

    const loadBtnFunc = () => {
        resetFields(Object.values(weatherTracker.inputFields));
        weatherTracker.list.innerHTML = '';
        fetch(weatherAPI)
            .then(response => response.json())
            .then(data => {
                Object.values(data).forEach(task => {
                    const taskElement = createTaskElement(task);
                    weatherTracker.list.appendChild(taskElement);
                });
                weatherTracker.addWeatherBtn.disabled = false;
                weatherTracker.editWeatherBtn.disabled = true;
            });
    };

    weatherTracker.addWeatherBtn.addEventListener('click', addBtnFunc);
    weatherTracker.editWeatherBtn.addEventListener('click', editBtnFunc);
    weatherTracker.loadHistory.addEventListener('click', loadBtnFunc);
}
