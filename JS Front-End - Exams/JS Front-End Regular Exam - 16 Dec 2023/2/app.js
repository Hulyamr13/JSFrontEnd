window.addEventListener("load", solve);

function solve() {
    const expenseTracker = {
        inputFields: {
            type: document.querySelector('#expense'),
            amount: document.querySelector('#amount'),
            date: document.querySelector('#date'),
        },
        addBtn: document.querySelector('#add-btn'),
        previewList: document.querySelector('#preview-list'),
        expensesList: document.querySelector('#expenses-list'),
        deleteBtn: document.querySelector('.delete'),
        currentItem: null
    };

    function clearInputFields() {
        for (const key in expenseTracker.inputFields) {
            if (expenseTracker.inputFields.hasOwnProperty(key)) {
                expenseTracker.inputFields[key].value = '';
            }
        }
    }

    function isInputValid() {
        for (const key in expenseTracker.inputFields) {
            if (expenseTracker.inputFields.hasOwnProperty(key)) {
                if (expenseTracker.inputFields[key].value.trim() === '') {
                    return false;
                }
            }
        }
        return true;
    }

    function handleDeleteBtn() {
        location.reload();
    }

    function handleEdit(e) {
        const listItem = e.target.parentNode.parentNode;

        const type = listItem.querySelector('p:nth-child(1)').textContent.split(': ')[1];
        const amount = listItem.querySelector('p:nth-child(2)').textContent.split(': ')[1].slice(0, -1);
        const date = listItem.querySelector('p:nth-child(3)').textContent.split(': ')[1];

        expenseTracker.inputFields.type.value = type;
        expenseTracker.inputFields.amount.value = amount;
        expenseTracker.inputFields.date.value = date;

        listItem.remove();
        expenseTracker.addBtn.disabled = false;
    }

    function handleOk(e) {
        const listItem = e.target.parentNode.parentNode;
        listItem.querySelector('.buttons').remove();
        expenseTracker.expensesList.appendChild(listItem);
        expenseTracker.addBtn.disabled = false;
    }

    function handleAddBtn(e) {
        e.preventDefault();

        if (!isInputValid()) return;

        const type = expenseTracker.inputFields.type.value;
        const amount = expenseTracker.inputFields.amount.value;
        const date = expenseTracker.inputFields.date.value;

        const listItem = document.createElement('li');
        listItem.className = 'expense-item';

        const article = document.createElement('article');

        const typeP = document.createElement('p');
        typeP.textContent = `Type: ${type}`;

        const amountP = document.createElement('p');
        amountP.textContent = `Amount: ${amount}$`;

        const dateP = document.createElement('p');
        dateP.textContent = `Date: ${date}`;

        article.appendChild(typeP);
        article.appendChild(amountP);
        article.appendChild(dateP);

        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'buttons';

        const editBtn = document.createElement('button');
        editBtn.className = 'btn edit';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', handleEdit);

        const okBtn = document.createElement('button');
        okBtn.className = 'btn ok';
        okBtn.textContent = 'Ok';
        okBtn.addEventListener('click', handleOk);

        buttonsDiv.appendChild(editBtn);
        buttonsDiv.appendChild(okBtn);

        listItem.appendChild(article);
        listItem.appendChild(buttonsDiv);

        expenseTracker.previewList.appendChild(listItem);
        expenseTracker.addBtn.disabled = true;

        clearInputFields();
    }

    expenseTracker.addBtn.addEventListener('click', handleAddBtn);
    expenseTracker.deleteBtn.addEventListener('click', handleDeleteBtn);
}
