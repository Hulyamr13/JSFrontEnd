function solve() {
    const titleInputElement = document.getElementById('title');
    const descriptionInputElement = document.getElementById('description');
    const optionSelectElement = document.getElementById('label');
    const pointsInputElement = document.getElementById('points');
    const taskAssigneeInputElement = document.getElementById('assignee');
    const createTaskButtonElement = document.getElementById('create-task-btn');
    const deleteTaskButtonElement = document.getElementById('delete-task-btn');
    const tasksSectionElement = document.getElementById('tasks-section');
    const totalPointsElement = document.getElementById('total-sprint-points');
    const hiddenInputElement = document.getElementById('task-id');

    let totalSprintPoints = 0;
    let taskID = 0;
    const articles = {};

    const features = {
        'Feature': '&#8865;',
        'Low Priority Bug': '&#9737;',
        'High Priority Bug': '&#9888;'
    };

    const divClasses = {
        'Feature': 'feature',
        'Low Priority Bug': 'low-priority',
        'High Priority Bug': 'high-priority'
    };

    createTaskButtonElement.addEventListener('click', onCreateTaskClick);

    function onCreateTaskClick() {
        if (!validateInputs()) {
            return;
        }

        totalSprintPoints += Number(pointsInputElement.value);
        totalPointsElement.textContent = `Total Points ${totalSprintPoints}pts`;
        taskID++;

        const articleElement = createTaskArticle(taskID);
        tasksSectionElement.appendChild(articleElement);

        articles[`task-${taskID}`] = {
            title: titleInputElement.value,
            description: descriptionInputElement.value,
            optionSelect: optionSelectElement.value,
            points: Number(pointsInputElement.value),
            taskAssignee: taskAssigneeInputElement.value,
        };

        clearInputFields();
    }

    function createTaskArticle(id) {
        const articleElement = document.createElement('article');
        articleElement.id = `task-${id}`;
        articleElement.className = 'task-card';

        const taskLabelDivElement = document.createElement('div');
        taskLabelDivElement.classList.add('task-card-label', divClasses[optionSelectElement.value]);
        taskLabelDivElement.innerHTML = `${optionSelectElement.value} ${features[optionSelectElement.value]}`;
        articleElement.appendChild(taskLabelDivElement);

        const taskTitleElement = document.createElement('h3');
        taskTitleElement.className = 'task-card-title';
        taskTitleElement.textContent = titleInputElement.value;
        articleElement.appendChild(taskTitleElement);

        const taskDescriptionElement = document.createElement('p');
        taskDescriptionElement.className = 'task-card-description';
        taskDescriptionElement.textContent = descriptionInputElement.value;
        articleElement.appendChild(taskDescriptionElement);

        const taskPointsDivElement = document.createElement('div');
        taskPointsDivElement.className = 'task-card-points';
        taskPointsDivElement.textContent = `Estimated at ${pointsInputElement.value} pts`;
        articleElement.appendChild(taskPointsDivElement);

        const taskAssigneeDivElement = document.createElement('div');
        taskAssigneeDivElement.className = 'task-card-assignee';
        taskAssigneeDivElement.textContent = `Assigned to: ${taskAssigneeInputElement.value}`;
        articleElement.appendChild(taskAssigneeDivElement);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'task-card-actions';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', onConfirmDeleteClick);
        buttonsContainer.appendChild(deleteButton);

        articleElement.appendChild(buttonsContainer);

        return articleElement;
    }

    function onConfirmDeleteClick(event) {
        const articleElement = event.currentTarget.parentNode.parentNode;
        const id = articleElement.id;

        populateAndDisableInputFields(articles[id]);
        toggleButtons(true);

        deleteTaskButtonElement.addEventListener('click', function onDeleteTask() {
            totalSprintPoints -= articles[id].points;
            totalPointsElement.textContent = `Total Points ${totalSprintPoints}pts`;
            articleElement.remove();

            resetState();
            deleteTaskButtonElement.removeEventListener('click', onDeleteTask);
        });
    }

    function populateAndDisableInputFields(taskData) {
        titleInputElement.value = taskData.title;
        descriptionInputElement.value = taskData.description;
        optionSelectElement.value = taskData.optionSelect;
        pointsInputElement.value = taskData.points;
        taskAssigneeInputElement.value = taskData.taskAssignee;

        disableInputFields(true);
    }

    function validateInputs() {
        return titleInputElement.value !== '' &&
               descriptionInputElement.value !== '' &&
               optionSelectElement.value !== '' &&
               pointsInputElement.value !== '' &&
               taskAssigneeInputElement.value !== '' &&
               pointsInputElement.value > 0;
    }

    function clearInputFields() {
        titleInputElement.value = '';
        descriptionInputElement.value = '';
        optionSelectElement.value = '';
        pointsInputElement.value = '';
        taskAssigneeInputElement.value = '';
        hiddenInputElement.value = '';
    }

    function disableInputFields(disable) {
        titleInputElement.disabled = disable;
        descriptionInputElement.disabled = disable;
        optionSelectElement.disabled = disable;
        pointsInputElement.disabled = disable;
        taskAssigneeInputElement.disabled = disable;
    }

    function toggleButtons(disableCreate) {
        createTaskButtonElement.disabled = disableCreate;
        deleteTaskButtonElement.disabled = !disableCreate;
    }

    function resetState() {
        clearInputFields();
        disableInputFields(false);
        toggleButtons(false);
    }
}
