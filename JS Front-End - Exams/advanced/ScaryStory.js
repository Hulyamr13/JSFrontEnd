window.addEventListener("load", solve);

function solve() {
    const inputs = getInputs();
    const publishBtn = document.getElementById('form-btn');

    publishBtn.addEventListener('click', handlePublish);

    function handlePublish(ev) {
        ev.preventDefault();
        if (!isValid()) return;

        const data = getData();
        clearInput();
        publishBtn.disabled = true;
        publishBtn.value = 'Publish';

        const row = createElement('li', '', 'story-info');
        const article = createElement('article', '', '', row);

        createElement('h4', `Name: ${data['first-name']} ${data['last-name']}`, '', article);
        createElement('p', `Age: ${data.age}`, '', article);
        createElement('p', `Title: ${data['story-title']}`, '', article);
        createElement('p', `Genre: ${data.genre}`, '', article);
        createElement('p', `${data.story}`, '', article);

        const btnSave = createElement('button', 'Save Story', 'save-btn', row);
        const btnEdit = createElement('button', 'Edit Story', 'edit-btn', row);
        const btnDelete = createElement('button', 'Delete Story', 'delete-btn', row);

        document.getElementById('preview-list').appendChild(row);

        btnEdit.addEventListener('click', () => handleEdit(data, row));
        btnDelete.addEventListener('click', () => handleDelete(row));
        btnSave.addEventListener('click', handleSave);
    }

    function handleEdit(data, row) {
        row.remove();
        setInputsData(data);
        document.getElementById('form-btn').disabled = false;
    }

    function handleDelete(row) {
        row.remove();
        document.getElementById('form-btn').disabled = false;
    }

    function handleSave() {
        document.getElementById('main').remove();
        const main = createElement('div', '', '', document.body);
        main.id = 'main';
        createElement('h1', 'Your scary story is saved!', '', main);
    }

    function setInputsData(data) {
        Object.entries(inputs).forEach(([name, input]) => input.value = data[name] || '');
    }

    function getInputs() {
        return Object.fromEntries(
            Array.from(document.querySelectorAll('input, textarea, select'))
                .map(i => [i.id, i])
        );
    }

    function createElement(type, text = '', cssClass = '', parent = null) {
        const element = document.createElement(type);
        if (text) element.textContent = text;
        if (cssClass) element.className = cssClass;
        if (parent) parent.appendChild(element);
        return element;
    }

    function getData() {
        return Object.fromEntries(
            Object.entries(inputs).map(([name, input]) => [name, input.value])
        );
    }

    function isValid() {
        return Object.values(inputs).every(input => input.value.trim() !== '');
    }

    function clearInput() {
        Object.values(inputs).forEach(input => input.value = '');
    }
}
