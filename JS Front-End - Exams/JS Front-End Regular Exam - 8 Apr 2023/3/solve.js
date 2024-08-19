function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/tasks';

    const taskTitleElement = document.getElementById('title');
    const taskDescriptionElement = document.getElementById('description');

    const taskLists = {
        'ToDo': document.querySelector('#todo-section .task-list'),
        'In Progress': document.querySelector('#in-progress-section .task-list'),
        'Code Review': document.querySelector('#code-review-section .task-list'),
        'Done': document.querySelector('#done-section .task-list'),
    };

    const taskButtonsContent = {
        'ToDo': 'Move to In Progress',
        'In Progress': 'Move to Code Review',
        'Code Review': 'Move to Done',
        'Done': 'Close',
    };

    const taskNextStatus = {
        'ToDo': 'In Progress',
        'In Progress': 'Code Review',
        'Code Review': 'Done',
    };

    const loadBoardButtonElement = document.getElementById('load-board-btn');
    const addTaskButtonElement = document.getElementById('create-task-btn');

    loadBoardButtonElement.addEventListener('click', loadTasksHandler);
    addTaskButtonElement.addEventListener('click', createTaskHandler);

    function loadTasksHandler() {
        clearLists();

        fetch(baseURL)
            .then((response) => response.json())
            .then((data) => {
                Object.values(data).forEach(task => {
                    taskLists[task.status].appendChild(createTaskElement(task));
                });
            })
            .catch((error) => console.error('Error:', error));
    }

    function createTaskHandler() {
        const newTask = getTaskInputs();

        if (newTask) {
            fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add task');
                }
                clearTaskInputs();
                loadTasksHandler();
            })
            .catch(error => console.error('Error:', error));
        }
    }

    function moveTaskHandler(task) {
        task.status = taskNextStatus[task.status];

        fetch(`${baseURL}/${task._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: task.status }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update task');
            }
            loadTasksHandler();
        })
        .catch(error => console.error('Error:', error));
    }

    function deleteTaskHandler(task) {
        fetch(`${baseURL}/${task._id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete task');
            }
            loadTasksHandler();
        })
        .catch(error => console.error('Error:', error));
    }

    function createTaskElement(task) {
        const taskLi = document.createElement('li');
        taskLi.className = 'task';

        const taskTitleElem = document.createElement('h3');
        taskTitleElem.textContent = task.title;
        taskLi.appendChild(taskTitleElem);

        const taskDescriptionElem = document.createElement('p');
        taskDescriptionElem.textContent = task.description;
        taskLi.appendChild(taskDescriptionElem);

        const taskButton = document.createElement('button');
        taskButton.textContent = taskButtonsContent[task.status];
        taskLi.appendChild(taskButton);

        taskButton.addEventListener('click', () => {
            if (task.status !== 'Done') {
                moveTaskHandler(task);
            } else {
                deleteTaskHandler(task);
            }
        });

        return taskLi;
    }

    function getTaskInputs() {
        if (taskTitleElement.value !== '' && taskDescriptionElement.value !== '') {
            return {
                title: taskTitleElement.value,
                description: taskDescriptionElement.value,
                status: 'ToDo',
            };
        }
    }

    function clearTaskInputs() {
        taskTitleElement.value = '';
        taskDescriptionElement.value = '';
    }

    function clearLists() {
        Object.values(taskLists).forEach(list => list.innerHTML = '');
    }

    loadTasksHandler();
}

attachEvents();
