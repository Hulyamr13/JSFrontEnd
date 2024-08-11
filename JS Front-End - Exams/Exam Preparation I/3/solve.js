function attachEvents() {
    const API_URL = 'http://localhost:3030/jsonstore/tasks/';
    const toDoList = {
        text: document.querySelector('#title'),
        addButton: document.querySelector('#add-button'),
        loadButton: document.querySelector('#load-button'),
        result: document.querySelector('#todo-list'),
    };

    const createElement = ({ tag, textContent = '', value = '', className = [], attributes = {}, buttonEven = {} }) => {
        const e = document.createElement(tag);
        if (textContent) e.textContent = textContent;
        if (value) e.value = value;
        className.forEach(x => e.classList.add(x));
        for (const [key, value] of Object.entries(attributes)) {
            e.setAttribute(key, value);
        }
        for (const [key, value] of Object.entries(buttonEven)) {
            e.addEventListener(key, value);
        }
        return e;
    };

    const loadDataFromApi = async () => {
        const data = await fetch(API_URL);
        return await data.json();
    };

    const addItemApi = async (data) => {
        event.preventDefault();

        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(createItemForAPiDb(data))
        });
        toDoList.text.value = '';
        await loadApiToHtml();
    };

    const updateItemApi = async (id, event) => {
        const button = event.currentTarget;

        if (button.textContent === 'Edit') {
            button.textContent = 'Submit';
            const span = event.currentTarget.parentElement.querySelector('span');
            const input = createElement({ tag: 'input', attributes: { value: span.textContent } });
            span.replaceWith(input);
        } else {
            button.textContent = 'Edit';
            const input = event.currentTarget.parentElement.querySelector('input');

            await fetch(`${API_URL}${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(createItemForAPiDb(input.value))
            });
            await loadApiToHtml();
        }
    };

    const deleteItemApi = async (id) => {
        await fetch(`${API_URL}${id}`, {
            method: 'DELETE',
        });
        await loadApiToHtml();
    };

    const createItemForAPiDb = (name) => {
        return { name };
    };

    const removeBtnFunctionality = async (event) => {
        await deleteItemApi(event.currentTarget.parentElement.id);
    };

    const editBtnFunctionality = async (event) => {
        await updateItemApi(event.currentTarget.parentElement.id, event);
    };

    const createHtmlElement = (text, key) => {
        const li = createElement({ tag: 'li', attributes: { id: key } });
        li.appendChild(createElement({ tag: 'span', textContent: text }));
        li.appendChild(createElement({
            tag: 'button', textContent: 'Remove', buttonEven: { click: removeBtnFunctionality }
        }));
        li.appendChild(createElement({ tag: 'button', textContent: 'Edit', buttonEven: { click: editBtnFunctionality } }));
        return li;
    };

    const clearList = (resultElement) => {
        while (resultElement.firstChild) {
            resultElement.removeChild(resultElement.firstChild);
        }
    };

    const loadApiToHtml = async () => {
        const data = await loadDataFromApi();
        clearList(toDoList.result);
        Object.keys(data).forEach(key => {
            toDoList.result.appendChild(createHtmlElement(data[key].name, data[key]._id));
        });
    };

    const addButtonFunctionality = async (event) => {
        event.preventDefault();
        await addItemApi(toDoList.text.value);
    };

    const loadButtonFunctionality = async (event) => {
        event.preventDefault();
        await loadApiToHtml();
    };

    toDoList.addButton.addEventListener('click', addButtonFunctionality);
    toDoList.loadButton.addEventListener('click', loadButtonFunctionality);
}

attachEvents();
