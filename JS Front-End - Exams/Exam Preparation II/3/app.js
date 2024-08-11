async function attachEvents() {
    const API_URL = 'http://localhost:3030/jsonstore/grocery/';
    const product = document.querySelector('#product');
    const count = document.querySelector('#count');
    const price = document.querySelector('#price');

    const addProduct = document.querySelector('#add-product');
    const updateProduct = document.querySelector('#update-product');
    const loadProduct = document.querySelector('#load-product');

    const tbody = document.querySelector('#tbody');
    let updateBtnId = null;

    const createElement = (tag, textContent, value, className, attributes) => {
        const e = document.createElement(tag);

        if (textContent) {
            e.textContent = textContent;
        }

        if (value) {
            e.value = value;
        }

        if (className) {
            className.forEach(x => e.classList.add(x));
        }

        if (attributes) {
            for (const key in attributes) {
                e.setAttribute(key, attributes[key]);
            }
        }
        return e;
    };

    const resetInput = (fields) => {
        fields.forEach(field => field.value = '');
    };

    const loadDataFromApi = async () => {
        const response = await fetch(API_URL);
        return await response.json();
    };

    const updateBtnFunctionality = (event) => {
        const tr = event.target.parentElement.parentElement;

        product.value = tr.querySelector('.name').textContent;
        count.value = tr.querySelector('.count-product').textContent;
        price.value = tr.querySelector('.product-price').textContent;

        updateBtnId = event.target.id;
        updateProduct.disabled = false;
        addProduct.disabled = true;
    };

    const deleteBtnFunctionality = async (event) => {
        const id = event.target.id;

        await fetch(`${API_URL}${id}`, {
            method: 'DELETE'
        });

        await loadDataToHTML(await loadDataFromApi());
    };

    const createTaskElement = (data) => {
        const tr = createElement('tr');

        tr.appendChild(createElement('td', data.product, '', ['name']));
        tr.appendChild(createElement('td', data.count, '', ['count-product']));
        tr.appendChild(createElement('td', data.price, '', ['product-price']));

        const td = createElement('td', '', '', ['btn']);

        const updateBtn = createElement('button', 'Update', '', ['update'], { id: data._id });
        updateBtn.addEventListener('click', updateBtnFunctionality);

        const deleteBtn = createElement('button', 'Delete', '', ['delete'], { id: data._id });
        deleteBtn.addEventListener('click', deleteBtnFunctionality);

        td.appendChild(updateBtn);
        td.appendChild(deleteBtn);

        tr.appendChild(td);

        return tr;
    };

    const loadDataToHTML = async (data) => {
        tbody.innerHTML = '';

        for (const key in data) {
            tbody.appendChild(createTaskElement(data[key]));
        }
    };

    const loadProductFunctionality = async (event) => {
        event.preventDefault();
        await loadDataToHTML(await loadDataFromApi());
    };

    const createItemForAPiDb = (product, count, price) => {
        return {
            product, count, price
        };
    };

    const addProductFunctionality = async (event) => {
        event.preventDefault();

        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(createItemForAPiDb(product.value, count.value, price.value))
        });

        await loadDataToHTML(await loadDataFromApi());
        resetInput([product, count, price]);
    };

    const updateProductFunctionality = async (event) => {
        event.preventDefault();

        await fetch(`${API_URL}${updateBtnId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(createItemForAPiDb(product.value, count.value, price.value))
        });

        await loadDataToHTML(await loadDataFromApi());
        resetInput([product, count, price]);
        updateProduct.disabled = true;
        addProduct.disabled = false;
    };

    loadProduct.addEventListener('click', loadProductFunctionality);
    addProduct.addEventListener('click', addProductFunctionality);
    updateProduct.addEventListener('click', updateProductFunctionality);
}

attachEvents();
