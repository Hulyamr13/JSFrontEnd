function solution() {

    const giftNameInput = document.querySelector('input[type="text"]');
    const addGiftButton = document.querySelector('button');
    const [giftList, giftSendList, giftDiscardList] = Array.from(document.querySelectorAll('.card ul'));

    const createElement = ({ tag, textContent = '', value = '', className = [], attributes = {}, eventListeners = {} }) => {
        const element = document.createElement(tag);
        if (textContent) element.textContent = textContent;
        if (value) element.value = value;
        className.forEach(classItem => element.classList.add(classItem));
        for (const [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value);
        }
        for (const [event, listener] of Object.entries(eventListeners)) {
            element.addEventListener(event, listener);
        }
        return element;
    };

    const clearInputFields = (fields) => fields.forEach(field => field.value = '');

    const removeButtons = (element) => {
        Array.from(element.querySelectorAll('button')).forEach(button => button.remove());
    };

    const handleSend = (event) => {
        const giftItem = event.currentTarget.parentElement;
        removeButtons(giftItem);
        giftSendList.appendChild(giftItem);
    };

    const handleDiscard = (event) => {
        const giftItem = event.currentTarget.parentElement;
        removeButtons(giftItem);
        giftDiscardList.appendChild(giftItem);
    };

    const createGiftItem = (giftName) => {
        const giftItem = createElement({ tag: 'li', className: ['gift'], textContent: giftName });
        giftItem.appendChild(createElement({ tag: 'button', textContent: 'Send', attributes: { id: 'sendButton' }, eventListeners: { click: handleSend } }));
        giftItem.appendChild(createElement({ tag: 'button', textContent: 'Discard', attributes: { id: 'discardButton' }, eventListeners: { click: handleDiscard } }));
        return giftItem;
    };

    const handleAddGift = () => {
        const giftName = giftNameInput.value.trim();
        if (!giftName) return;

        const giftItem = createGiftItem(giftName);
        giftList.appendChild(giftItem);

        const sortedGifts = Array.from(giftList.querySelectorAll('.gift'))
            .map(giftElement => giftElement.textContent.replace(/SendDiscard$/, ''))
            .sort((a, b) => a.localeCompare(b));

        giftList.innerHTML = '';
        sortedGifts.forEach(gift => giftList.appendChild(createGiftItem(gift)));

        clearInputFields([giftNameInput]);
    };

    addGiftButton.addEventListener('click', handleAddGift);
}
