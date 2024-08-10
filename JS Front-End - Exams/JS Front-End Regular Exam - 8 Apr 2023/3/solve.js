function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/tasks';

    const taskTitle = document.getElementById('title');
    const taskDescription = document.getElementById('description');

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

    const loadBoardBtn = document.getElementById('load-board-btn');
    const addTaskBtn = document.getElementById('create-task-btn');

    loadBoardBtn.addEventListener('click', loadTasks);
    addTaskBtn.addEventListener('click', addTask);

    function loadTasks() {
        clearLists();

        fetch(baseURL)
            .then(response => response.json())
            .then(data => {
                Object.values(data).forEach(task => {
                    taskLists[task.status].appendChild(createTask(task));
                });
            });
    }

    function addTask() {
        const newTask = getInputs();

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
                clearInputs();
                return loadTasks();
            })
            .catch(error => console.error('Error:', error));
        }
    }

    function moveTask(task) {
        task.status = taskNextStatus[task.status];
        const taskId = task._id;

        fetch(`${baseURL}/${taskId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status: task.status
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update task');
            }
            return loadTasks();
        })
        .catch(error => console.error('Error:', error));
    }

    function deleteTask(task) {
        const taskId = task._id;

        fetch(`${baseURL}/${taskId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete task');
            }
            return loadTasks();
        })
        .catch(error => console.error('Error:', error));
    }

    function clearLists() {
        Object.values(taskLists).forEach(list => list.innerHTML = '');
    }

    function clearInputs() {
        taskTitle.value = '';
        taskDescription.value = '';
    }

    function createTask(task) {
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
                moveTask(task);
            } else {
                deleteTask(task);
            }
        });

        return taskLi;
    }

    function getInputs() {
        if (taskTitle.value !== '' && taskDescription.value !== '') {
            return {
                title: taskTitle.value,
                description: taskDescription.value,
                status: 'ToDo',
            };
        }
    }
}

attachEvents();
