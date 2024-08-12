function solve() {
    const API_URL = 'http://localhost:3030/jsonstore/gifts/';

    const christmasGifts = {
        inputFields: document.querySelectorAll('#form input'),
        addPresentBtn: document.querySelector('#add-present'),
        editPresentBtn: document.querySelector('#edit-present'),
        loadPresentBtn: document.querySelector('#load-presents'),
        giftList: document.querySelector('#gift-list'),
        form: document.querySelector('form'),
        itemId: null
    };

    const toggleButtons = () => {
        christmasGifts.addPresentBtn.disabled = !christmasGifts.addPresentBtn.disabled;
        christmasGifts.editPresentBtn.disabled = !christmasGifts.editPresentBtn.disabled;
    };

    const getFormData = (id = null) => {
        const formData = Array.from(christmasGifts.inputFields)
            .reduce((acc, input) => {
                acc[input.name] = input.value;
                return acc;
            }, {});

        if (id) {
            formData._id = id;
        }

        return JSON.stringify(formData);
    };

    const addPresent = () => {
        fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: getFormData()
        }).then(() => {
            christmasGifts.form.reset();
            loadPresents();
        });
    };

    const editPresent = () => {
        const itemId = christmasGifts.itemId;
        fetch(`${API_URL}${itemId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: getFormData(itemId)
        }).then(() => {
            loadPresents();
            toggleButtons();
            christmasGifts.form.reset();
        });
    };

    const handleChange = (button) => {
        const currentItem = button.closest('.gift-sock');
        christmasGifts.itemId = button.id;
        Array.from(currentItem.querySelectorAll('p')).forEach((p, i) => {
            christmasGifts.inputFields[i].value = p.textContent;
        });
        currentItem.remove();
        toggleButtons();
    };

    const handleDelete = (button) => {
        fetch(`${API_URL}${button.id}`, { method: 'DELETE' })
            .then(() => loadPresents());
    };

    const loadPresents = () => {
        christmasGifts.giftList.innerHTML = '';
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                Object.values(data).forEach(gift => {
                    const giftElement = document.createElement('div');
                    giftElement.className = 'gift-sock';

                    const contentDiv = document.createElement('div');
                    contentDiv.className = 'content';

                    Object.values(gift).slice(0, -1).forEach(value => {
                        const p = document.createElement('p');
                        p.textContent = value;
                        contentDiv.appendChild(p);
                    });

                    const buttonsContainer = document.createElement('div');
                    buttonsContainer.className = 'buttons-container';

                    const changeBtn = document.createElement('button');
                    changeBtn.className = 'change-btn';
                    changeBtn.id = gift._id;
                    changeBtn.textContent = 'Change';
                    changeBtn.addEventListener('click', () => handleChange(changeBtn));

                    const deleteBtn = document.createElement('button');
                    deleteBtn.className = 'delete-btn';
                    deleteBtn.id = gift._id;
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.addEventListener('click', () => handleDelete(deleteBtn));

                    buttonsContainer.appendChild(changeBtn);
                    buttonsContainer.appendChild(deleteBtn);

                    giftElement.appendChild(contentDiv);
                    giftElement.appendChild(buttonsContainer);

                    christmasGifts.giftList.appendChild(giftElement);
                });
            });
    };

    christmasGifts.addPresentBtn.addEventListener('click', addPresent);
    christmasGifts.editPresentBtn.addEventListener('click', editPresent);
    christmasGifts.loadPresentBtn.addEventListener('click', loadPresents);

    return {
        handleChange,
        handleDelete,
    };
}

solve();
