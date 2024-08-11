window.addEventListener("load", solve);

function solve() {
    const inputFields = {
        firstName: document.querySelector('#first-name'),
        lastName: document.querySelector('#last-name'),
        age: document.querySelector('#age'),
        title: document.querySelector('#story-title'),
        genre: document.querySelector('#genre'),
        story: document.querySelector('#story'),
    };

    const storyApp = {
        publishButton: document.querySelector('#form-btn'),
        preview: document.querySelector('#preview-list'),
        saveStory: document.querySelector('#main'),
    };

    let saveData = [];

    const createElement = ({tag, textContent = '', className = [], attributes = {}, buttonEvent = {}}) => {
        const e = document.createElement(tag);
        if (textContent) e.textContent = textContent;
        className.forEach(x => e.classList.add(x));
        for (const [key, value] of Object.entries(attributes)) {
            e.setAttribute(key, value);
        }
        for (const [key, value] of Object.entries(buttonEvent)) {
            e.addEventListener(key, value);
        }
        return e;
    };

    const checkCorrectInputs = (dataFromInput) => dataFromInput.every(item => item.value.trim().length !== 0);

    const clearInputFields = (dataFromInput) => dataFromInput.forEach(x => x.value = '');

    const saveBtnFunctionality = () => {
        while (storyApp.saveStory.firstChild) {
            storyApp.saveStory.removeChild(storyApp.saveStory.firstChild);
        }
        storyApp.saveStory.appendChild(createElement({tag: 'h1', textContent: 'Your scary story is saved!'}));
    };

    const editBtnFunctionality = (event) => {
        const parentElement = event.currentTarget.parentElement;
        Object.values(inputFields).forEach((x, index) => x.value = saveData[index]);
        storyApp.publishButton.disabled = false;
        storyApp.preview.removeChild(parentElement);
    };

    const deleteBtnFunctionality = (event) => {
        const parentElement = event.currentTarget.parentElement;
        storyApp.preview.removeChild(parentElement);
        storyApp.publishButton.disabled = false;
    };

    const createStoryElement = (inputFields) => {
        const li = createElement({tag: 'li', className: ['story-info']});
        const article = createElement({tag: 'article'});
        article.appendChild(createElement({tag: 'h4', textContent: `Name: ${inputFields.firstName.value} ${inputFields.lastName.value}`}));
        article.appendChild(createElement({tag: 'p', textContent: `Age: ${inputFields.age.value}`}));
        article.appendChild(createElement({tag: 'p', textContent: `Title: ${inputFields.title.value}`}));
        article.appendChild(createElement({tag: 'p', textContent: `Genre: ${inputFields.genre.value}`}));
        article.appendChild(createElement({tag: 'p', textContent: inputFields.story.value}));
        li.appendChild(article);
        li.appendChild(createElement({tag: 'button', textContent: 'Save Story', className: ['save-btn'], buttonEvent: {click: saveBtnFunctionality}}));
        li.appendChild(createElement({tag: 'button', textContent: 'Edit Story', className: ['edit-btn'], buttonEvent: {click: editBtnFunctionality}}));
        li.appendChild(createElement({tag: 'button', textContent: 'Delete Story', className: ['delete-btn'], buttonEvent: {click: deleteBtnFunctionality}}));
        return li;
    };

    const publishButtonFunctionality = (event) => {
        event.preventDefault();
        const data = Object.values(inputFields);

        if (!checkCorrectInputs(data)) return;
        saveData = [];

        storyApp.preview.appendChild(createStoryElement(inputFields));

        data.forEach(x => saveData.push(x.value));

        clearInputFields(data);
        storyApp.publishButton.disabled = true;
    };

    storyApp.publishButton.addEventListener("click", publishButtonFunctionality);
}
