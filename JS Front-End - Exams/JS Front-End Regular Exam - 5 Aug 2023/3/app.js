window.addEventListener("load", solve);

function solve() {
    const taskAPI = 'http://localhost:3030/jsonstore/tasks/';

    const vacation = {
        inputFields: {
            name: document.querySelector('#name'),
            date: document.querySelector('#from-date'),
            days: document.querySelector('#num-days'),
        },
        addBtn: document.querySelector('#add-vacation'),
        editBtn: document.querySelector('#edit-vacation'),
        loadBtn: document.querySelector('#load-vacations'),
        list: document.querySelector('#list'),
        editData: [],
        id: null,
    };

    const bodyData = (id = '') => {
        const body = {
            name: vacation.inputFields.name.value,
            days: vacation.inputFields.days.value,
            date: vacation.inputFields.date.value,
        };
        if (id) body._id = id;
        return body;
    };

    const addBtnFunc = (e) => {
        e.preventDefault();
        fetch(taskAPI, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyData())
        }).then(() => loadBtnFunc());
    };

    const editBtnFunc = (e) => {
        e.preventDefault();
        fetch(`${taskAPI}${vacation.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyData(vacation.id))
        }).then(() => {
            loadBtnFunc();
            vacation.addBtn.disabled = false;
            vacation.editBtn.disabled = true;
        });
    };

    const changeBtnFunc = (e) => {
        const currentElement = e.target.parentNode;
        const [name, date, days] = currentElement.querySelectorAll('h2, h3');
        
        vacation.inputFields.name.value = name.textContent;
        vacation.inputFields.date.value = date.textContent;
        vacation.inputFields.days.value = days.textContent;
        
        vacation.id = e.target.id;
        vacation.addBtn.disabled = true;
        vacation.editBtn.disabled = false;
        vacation.list.removeChild(currentElement);
    };

    const doneBtnFunc = (e) => {
        fetch(`${taskAPI}${e.target.id}`, {
            method: 'DELETE'
        }).then(() => loadBtnFunc());
    };

    const loadBtnFunc = () => {
        Object.values(vacation.inputFields).forEach(input => input.value = '');
        vacation.list.textContent = '';

        fetch(taskAPI)
            .then(response => response.json())
            .then(data => {
                Object.values(data).forEach(vacationData => {
                    const containerDiv = document.createElement('div');
                    containerDiv.className = 'container';

                    const nameH2 = document.createElement('h2');
                    nameH2.textContent = vacationData.name;

                    const dateH3 = document.createElement('h3');
                    dateH3.textContent = vacationData.date;

                    const daysH3 = document.createElement('h3');
                    daysH3.textContent = vacationData.days;

                    const changeBtn = document.createElement('button');
                    changeBtn.className = 'change-btn';
                    changeBtn.textContent = 'Change';
                    changeBtn.id = vacationData._id;
                    changeBtn.addEventListener('click', changeBtnFunc);

                    const doneBtn = document.createElement('button');
                    doneBtn.className = 'done-btn';
                    doneBtn.textContent = 'Done';
                    doneBtn.id = vacationData._id;
                    doneBtn.addEventListener('click', doneBtnFunc);

                    containerDiv.appendChild(nameH2);
                    containerDiv.appendChild(dateH3);
                    containerDiv.appendChild(daysH3);
                    containerDiv.appendChild(changeBtn);
                    containerDiv.appendChild(doneBtn);

                    vacation.list.appendChild(containerDiv);
                });
            });
    };

    vacation.addBtn.addEventListener('click', addBtnFunc);
    vacation.editBtn.addEventListener('click', editBtnFunc);
    vacation.loadBtn.addEventListener('click', loadBtnFunc);
}
