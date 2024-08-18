function solve() {
    const [firstName, lastName, age, storyTitle, genre, story] = Array.from(document.querySelectorAll('#first-name, #last-name, #age, #story-title, #genre, #story'))
    const previewList = document.querySelector('#preview-list')
    const publishBtn = document.querySelector('#form-btn')


    const createElement = ({tag, textContent = '', value = '', className = [], attributes = {}, buttonEven = {}}) => {
        const e = document.createElement(tag)
        if (textContent) e.textContent = textContent
        if (value) e.value = value
        className.forEach(x => e.classList.add(x))
        for (const [key, value] of Object.entries(attributes)) {
            e.setAttribute(key, value)
        }
        for (const [key, value] of Object.entries(buttonEven)) {
            e.addEventListener(key, value)
        }
        return e
    }

    const checkCorrectInputs = (dataFromInput) => dataFromInput.every(item => item.value.trim().length !== 0)

    const clearInputFields = (dataFromInput => dataFromInput.forEach(x => x.value = ''))

    const splitData = (data) => data.split(': ').slice(1)[0]

    const deleteElement = (element, toDeleteFrom) => toDeleteFrom.removeChild(element)

    const saveBtnFunctionality = () => {
        const main = document.querySelector('#main')
        main.innerHTML = ''
        main.appendChild(createElement({tag: 'h1', textContent: 'Your scary story is saved!'}))
    }

    const editBtnFunctionality = () => {
        const [nameEdit, ageEdit, storyTitleEdit, genreEdit, storyEdit] = Array.from(document.querySelectorAll('h4, p'))
        const [fName, lName] = splitData(nameEdit.textContent).split(' ')

        firstName.value = fName
        lastName.value = lName
        age.value = splitData(ageEdit.textContent)
        storyTitle.value = splitData(storyTitleEdit.textContent)
        genre.value = splitData(genreEdit.textContent)
        story.value = storyEdit.textContent

        publishBtn.disabled = false
        deleteElement(document.querySelector('.story-info'), previewList)
    }

    const deleteBtnFunctionality = () => {
        publishBtn.disabled = false
        deleteElement(document.querySelector('.story-info'), previewList)
    }

    publishBtn.addEventListener('click', () => {
        if (!checkCorrectInputs([firstName, lastName, age, storyTitle, genre, story])) return

        publishBtn.disabled = true
        const li = createElement({tag: 'li', className: ['story-info']})
        const article = createElement({tag: 'article'})
        article.appendChild(createElement({tag: 'h4', textContent: `Name: ${firstName.value} ${lastName.value}`}))
        article.appendChild(createElement({tag: 'p', textContent: `Age: ${age.value}`}))
        article.appendChild(createElement({tag: 'p', textContent: `Title: ${storyTitle.value}`}))
        article.appendChild(createElement({tag: 'p', textContent: `Genre: ${genre.value}`}))
        article.appendChild(createElement({tag: 'p', textContent: story.value}))
        li.appendChild(article)

        const saveBtn = createElement({tag: 'button', textContent: 'Save Story', className: ['save-btn'], buttonEven: {click: saveBtnFunctionality}})
        const editBtn = createElement({tag: 'button', textContent: 'Edit Story', className: ['edit-btn'], buttonEven: {click: editBtnFunctionality}})
        const deleteBtn = createElement({tag: 'button', textContent: 'Delete Story', className: ['delete-btn'], buttonEven: {click: deleteBtnFunctionality}})

        li.appendChild(saveBtn)
        li.appendChild(editBtn)
        li.appendChild(deleteBtn)

        previewList.appendChild(li)

        clearInputFields([firstName, lastName, age, storyTitle, genre, story])
    })
}

solve()
///
function solve() {
    const [firstName, lastName, age, storyTitle, genre, story] = Array.from(document.querySelectorAll('#first-name, #last-name, #age, #story-title, #genre, #story'));
    const previewList = document.querySelector('#preview-list');
    const publishBtn = document.querySelector('#form-btn');

    const createElement = ({tag, textContent = '', className = [], events = {}}) => {
        const element = document.createElement(tag);
        if (textContent) element.textContent = textContent;
        if (className.length) element.classList.add(...className);
        Object.entries(events).forEach(([event, handler]) => element.addEventListener(event, handler));
        return element;
    };

    const checkCorrectInputs = (inputs) => inputs.every(input => input.value.trim().length > 0);

    const clearInputFields = (inputs) => inputs.forEach(input => input.value = '');

    const deleteElement = (element) => element.remove();

    const saveBtnFunctionality = () => {
        const main = document.querySelector('#main');
        main.innerHTML = '';
        main.appendChild(createElement({tag: 'h1', textContent: 'Your scary story is saved!'}));
    };

    const editBtnFunctionality = () => {
        const storyInfo = document.querySelector('.story-info');
        const [nameEdit, ageEdit, titleEdit, genreEdit, storyEdit] = Array.from(storyInfo.querySelectorAll('article p, h4'));
        const [fName, lName] = nameEdit.textContent.replace('Name: ', '').split(' ');

        firstName.value = fName;
        lastName.value = lName;
        age.value = ageEdit.textContent.replace('Age: ', '');
        storyTitle.value = titleEdit.textContent.replace('Title: ', '');
        genre.value = genreEdit.textContent.replace('Genre: ', '');
        story.value = storyEdit.textContent;

        publishBtn.disabled = false;
        deleteElement(storyInfo);
    };

    const deleteBtnFunctionality = () => {
        const storyInfo = document.querySelector('.story-info');
        publishBtn.disabled = false;
        deleteElement(storyInfo);
    };

    publishBtn.addEventListener('click', () => {
        if (!checkCorrectInputs([firstName, lastName, age, storyTitle, genre, story])) return;

        publishBtn.disabled = true;
        const li = createElement({tag: 'li', className: ['story-info']});
        const article = createElement({tag: 'article'});
        article.appendChild(createElement({tag: 'h4', textContent: `Name: ${firstName.value} ${lastName.value}`}));
        article.appendChild(createElement({tag: 'p', textContent: `Age: ${age.value}`}));
        article.appendChild(createElement({tag: 'p', textContent: `Title: ${storyTitle.value}`}));
        article.appendChild(createElement({tag: 'p', textContent: `Genre: ${genre.value}`}));
        article.appendChild(createElement({tag: 'p', textContent: story.value}));
        li.appendChild(article);

        const saveBtn = createElement({
            tag: 'button',
            textContent: 'Save Story',
            className: ['save-btn'],
            events: { click: saveBtnFunctionality }
        });

        const editBtn = createElement({
            tag: 'button',
            textContent: 'Edit Story',
            className: ['edit-btn'],
            events: { click: editBtnFunctionality }
        });

        const deleteBtn = createElement({
            tag: 'button',
            textContent: 'Delete Story',
            className: ['delete-btn'],
            events: { click: deleteBtnFunctionality }
        });

        li.appendChild(saveBtn);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        previewList.appendChild(li);

        clearInputFields([firstName, lastName, age, storyTitle, genre, story]);
    });
}

solve();
///