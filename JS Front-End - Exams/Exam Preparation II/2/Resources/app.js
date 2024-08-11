window.addEventListener('load', solve);

function solve() {
    const inputFields = {
        genre: document.querySelector('#genre'),
        name: document.querySelector('#name'),
        author: document.querySelector('#author'),
        date: document.querySelector('#date'),
    };

    const musicApp = {
        addButton: document.querySelector('#add-btn'),
        collections: document.querySelector('.all-hits-container'),
        saved: document.querySelector('.saved-container'),
        likes: document.querySelector('.likes > p'),
    };

    const createElement = ({ tag, textContent = '', className = [], attributes = {}, eventHandlers = {} }) => {
        const element = document.createElement(tag);
        if (textContent) element.textContent = textContent;
        className.forEach(cls => element.classList.add(cls));
        Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
        Object.entries(eventHandlers).forEach(([event, handler]) => element.addEventListener(event, handler));
        return element;
    };

    const areInputsValid = () => Object.values(inputFields).every(field => field.value.trim() !== '');

    const clearInputFields = () => Object.values(inputFields).forEach(field => field.value = '');

    const saveSong = (event) => {
        const songElement = event.currentTarget.parentElement;
        musicApp.collections.removeChild(songElement);
        songElement.removeChild(songElement.querySelector('.save-btn'));
        songElement.removeChild(songElement.querySelector('.like-btn'));
        musicApp.saved.appendChild(songElement);
    };

    const likeSong = (event) => {
        const likeButton = event.currentTarget;
        let [text, likes] = musicApp.likes.textContent.split(': ');
        likes = Number(likes) + 1;
        musicApp.likes.textContent = `${text}: ${likes}`;
        likeButton.disabled = true;
    };

    const deleteSong = (event) => {
        const songElement = event.currentTarget.parentElement;
        songElement.remove();
    };

    const createSongElement = () => {
        const div = createElement({ tag: 'div', className: ['hits-info'] });
        div.appendChild(createElement({ tag: 'img', attributes: { src: './static/img/img.png' } }));
        div.appendChild(createElement({ tag: 'h2', textContent: `Genre: ${inputFields.genre.value}` }));
        div.appendChild(createElement({ tag: 'h2', textContent: `Name: ${inputFields.name.value}` }));
        div.appendChild(createElement({ tag: 'h2', textContent: `Author: ${inputFields.author.value}` }));
        div.appendChild(createElement({ tag: 'h3', textContent: `Date: ${inputFields.date.value}` }));
        div.appendChild(createElement({
            tag: 'button',
            textContent: 'Save song',
            className: ['save-btn'],
            eventHandlers: { click: saveSong }
        }));
        div.appendChild(createElement({
            tag: 'button',
            textContent: 'Like song',
            className: ['like-btn'],
            eventHandlers: { click: likeSong }
        }));
        div.appendChild(createElement({
            tag: 'button',
            textContent: 'Delete',
            className: ['delete-btn'],
            eventHandlers: { click: deleteSong }
        }));
        return div;
    };

    const addSong = (event) => {
        event.preventDefault();
        if (!areInputsValid()) return;
        const songElement = createSongElement();
        musicApp.collections.appendChild(songElement);
        clearInputFields();
    };

    musicApp.addButton.addEventListener('click', addSong);
}
