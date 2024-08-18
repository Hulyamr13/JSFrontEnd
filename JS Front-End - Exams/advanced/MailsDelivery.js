function solve() {
    const inputs = Object.fromEntries(
        Array.from(document.querySelectorAll('input, textarea'))
            .map(i => [i.id, i])
    );

    document.getElementById('reset').addEventListener('click', (ev) => {
        ev.preventDefault();
        clearInput();
    });

    document.getElementById('add').addEventListener('click', (ev) => {
        ev.preventDefault();
        if (!isValid()) return;

        const data = getData();
        const li = createListItem(data);
        document.getElementById('list').appendChild(li);
        clearInput();
    });

    function createListItem(data) {
        const li = createElement('li');
        li.appendChild(createElement('h4', `Title: ${data.title}`));
        li.appendChild(createElement('h4', `Recipient Name: ${data.recipientName}`));
        li.appendChild(createElement('span', data.message));

        const actionDiv = createElement('div', '', 'list-action');
        const sendBtn = createElement('button', 'Send');
        sendBtn.id = 'send';
        const deleteBtn = createElement('button', 'Delete');
        deleteBtn.id = 'delete';

        actionDiv.appendChild(sendBtn);
        actionDiv.appendChild(deleteBtn);
        li.appendChild(actionDiv);

        sendBtn.addEventListener('click', () => onSendClick(li, data));
        deleteBtn.addEventListener('click', () => onDeleteClick(li, data));

        return li;
    }

    function onSendClick(li, data) {
        li.remove();
        const sentLi = createElement('li');
        sentLi.appendChild(createElement('span', `To: ${data.recipientName}`));
        sentLi.appendChild(createElement('span', `Title: ${data.title}`));

        const btnDiv = createElement('div', '', 'btn');
        const sentDeleteBtn = createElement('button', 'Delete', 'delete');
        btnDiv.appendChild(sentDeleteBtn);
        sentLi.appendChild(btnDiv);

        sentDeleteBtn.addEventListener('click', () => {
            sentLi.remove();
            document.querySelector('.delete-list').appendChild(sentLi);
        });

        document.querySelector('.sent-list').appendChild(sentLi);
    }

    function onDeleteClick(li, data) {
        li.remove();
        const deletedLi = createElement('li');
        deletedLi.appendChild(createElement('span', `To: ${data.recipientName}`));
        deletedLi.appendChild(createElement('span', `Title: ${data.title}`));
        document.querySelector('.delete-list').appendChild(deletedLi);
    }

    function createElement(type, text = '', cssClass = '') {
        const element = document.createElement(type);
        if (text) element.textContent = text;
        if (cssClass) element.className = cssClass;
        return element;
    }

    function getData() {
        return Object.fromEntries(
            Object.entries(inputs).map(([name, input]) => [name, input.value])
        );
    }

    function isValid() {
        return Object.values(inputs).every(i => i.value.trim() !== '');
    }

    function clearInput() {
        Object.values(inputs).forEach(i => i.value = '');
    }
}

solve();
