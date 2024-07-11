const BASE_URL = 'http://localhost:3030/jsonstore/records';

const endpoints = {
    update: (id) => `${BASE_URL}/${id}`,
    delete: (id) => `${BASE_URL}/${id}`,
};

const nameElement = document.getElementById("p-name");
const caloriesElement = document.getElementById("calories");
const stepsElement = document.getElementById("steps");

const recordsList = document.getElementById("records");
const list = document.getElementById('list');

const addBtn = document.getElementById("add-record");
const editBtn = document.getElementById("edit-record");
const loadBtn = document.getElementById("load-records");

let selectedTaskId = null;

function attachEvents() {
    loadBtn.addEventListener('click', loadBoardEventHandler);
    addBtn.addEventListener('click', createTaskEventHandler);
    editBtn.addEventListener('click', editTaskEventHandler);
}

async function getIdByname(name) {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    const record = Object.values(data).find(record => record.name === name);
    return record ? record._id : null;
}

async function loadBoardEventHandler() {
    clearAllSections();
    try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        Object.values(data).forEach(record => {
            const container = document.createElement('li');
            container.className = 'record';

            const content = document.createElement('div');
            content.className = 'info';

            const nameElement = document.createElement('p');
            nameElement.textContent = record.name;

            const caloriesElement = document.createElement('p');
            caloriesElement.textContent = record.calories;

            const stepsElement = document.createElement('p');
            stepsElement.textContent = record.steps;

            const buttonsContainer = document.createElement('div');
            buttonsContainer.className = 'btn-wrapper';

            const changeBtn = document.createElement('button');
            changeBtn.className = 'change-btn';
            changeBtn.textContent = 'Change';

            const doneBtn = document.createElement('button');
            doneBtn.className = 'delete-btn';
            doneBtn.textContent = 'Delete';

            buttonsContainer.appendChild(changeBtn);
            buttonsContainer.appendChild(doneBtn);

            content.appendChild(nameElement);
            content.appendChild(stepsElement);
            content.appendChild(caloriesElement);

            container.appendChild(content);
            container.appendChild(buttonsContainer);

            list.appendChild(container);
        });
        attachEventListeners();
    } catch (err) {
        console.error(err);
    }
}

function attachEventListeners() {
    const changeButtons = document.querySelectorAll('.change-btn');
    const doneButtons = document.querySelectorAll('.delete-btn');

    changeButtons.forEach(changeButton => {
        changeButton.addEventListener('click', async (event) => {
            const taskElement = event.target.closest('.record');
            const name = taskElement.querySelector('p').textContent;
            const steps = taskElement.querySelector('p:nth-child(2)').textContent;
            const calories = taskElement.querySelector('p:nth-child(3)').textContent;
            selectedTaskId = await getIdByname(name);
            nameElement.value = name;
            stepsElement.value = steps;
            caloriesElement.value = calories;
            enableEditBtn();
        });
    });

    doneButtons.forEach(doneButton => {
        doneButton.addEventListener('click', async (event) => {
            const taskElement = event.target.closest('.record');
            const name = taskElement.querySelector('p').textContent;
            const id = await getIdByname(name);
            deleteTask(id);
        });
    });
}

function enableEditBtn() {
    addBtn.disabled = true;
    editBtn.disabled = false;
}

function enableAddBtn() {
    addBtn.disabled = false;
    editBtn.disabled = true;
}

function createTaskEventHandler(ev) {
    ev.preventDefault();
    if (nameElement.value !== '' && stepsElement.value !== '' && caloriesElement.value !== '') {
        const headers = {
            method: 'POST',
            body: JSON.stringify({
                name: nameElement.value,
                steps: stepsElement.value,
                calories: caloriesElement.value,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        };

        fetch(BASE_URL, headers)
            .then(loadBoardEventHandler)
            .catch(console.error);

        clearAllInputs();
    }
}

function editTaskEventHandler(ev) {
    ev.preventDefault();
    const data = {
        name: nameElement.value,
        steps: stepsElement.value,
        calories: caloriesElement.value,
    };

    fetch(endpoints.update(selectedTaskId), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(() => {
            clearAllInputs();
            loadBoardEventHandler();
            selectedTaskId = null;
            enableAddBtn();
        })
        .catch(console.error);
}

function deleteTask(id) {
    fetch(endpoints.delete(id), {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(() => {
            loadBoardEventHandler();
        })
        .catch(console.error);
}

function clearAllSections() {
    list.innerHTML = '';
}

function clearAllInputs() {
    nameElement.value = '';
    stepsElement.value = '';
    caloriesElement.value = '';
}

attachEvents();
