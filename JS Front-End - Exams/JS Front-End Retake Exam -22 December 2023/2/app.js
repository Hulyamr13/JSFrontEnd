window.addEventListener("load", solve);

function solve() {
    const ulTaskList = document.getElementById('task-list');
    const ulDoneTaskList = document.getElementById('done-list');

    const addButton = document.getElementById('add-btn');
    addButton.addEventListener('click', addNewTask);

    const placeElement = document.getElementById('place');
    const actionElement = document.getElementById('action');
    const personElement = document.getElementById('person');

    function addNewTask(event) {
        event.preventDefault();

        let place = placeElement.value.trim();
        let action = actionElement.value.trim();
        let person = personElement.value.trim();

        if (place === '' || action === '' || person === '') {
            return;
        }

        let li = document.createElement('li');
        li.className = 'clean-task';

        let article = document.createElement('article');

        let p1 = document.createElement('p');
        p1.textContent = `Place:${place}`;

        let p2 = document.createElement('p');
        p2.textContent = `Action:${action}`;

        let p3 = document.createElement('p');
        p3.textContent = `Person:${person}`;

        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        let buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'buttons';

        let editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', editTaskEvent);

        let doneButton = document.createElement('button');
        doneButton.className = 'done';
        doneButton.textContent = 'Done';
        doneButton.addEventListener('click', moveDoneTaskEvent);

        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(doneButton);

        li.appendChild(article);
        li.appendChild(buttonsDiv);

        ulTaskList.appendChild(li);

        placeElement.value = '';
        actionElement.value = '';
        personElement.value = '';

        function editTaskEvent(event) {
            li.remove();

            placeElement.value = place;
            actionElement.value = action;
            personElement.value = person;
        }

        function moveDoneTaskEvent(event) {
            li.remove();

            let li1 = document.createElement('li');

            let article1 = document.createElement('article');

            let p11 = document.createElement('p');
            p11.textContent = `Place:${place}`;

            let p22 = document.createElement('p');
            p22.textContent = `Action:${action}`;

            let p33 = document.createElement('p');
            p33.textContent = `Person:${person}`;

            article1.appendChild(p11);
            article1.appendChild(p22);
            article1.appendChild(p33);

            let deleteButton = document.createElement('button');
            deleteButton.className = 'delete';
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', deleteTaskEvent);

            li1.appendChild(article1);
            li1.appendChild(deleteButton);

            ulDoneTaskList.appendChild(li1);
        }
    }

    function deleteTaskEvent(event) {
        event.currentTarget.parentElement.remove();
    }
}
