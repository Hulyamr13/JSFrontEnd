function solve() {
    let totalPrice = 0;
    const inputs = getInputs();

    document.getElementById('add')
        .addEventListener('click', onAddClick);

    function onAddClick(ev) {
        ev.preventDefault();
        if (!isValid()) return;

        const data = getData();
        data.year = Number(data.year);
        data.price = Number(data.price);

        const infoRow = createElement('tr', '', 'info');
        infoRow.appendChild(createElement('td', data.model));
        infoRow.appendChild(createElement('td', data.price.toFixed(2)));

        const actions = createElement('td');
        const moreBtn = createElement('button', 'More Info', 'moreBtn');
        const buyBtn = createElement('button', 'Buy it', 'buyBtn');
        actions.appendChild(moreBtn);
        actions.appendChild(buyBtn);
        infoRow.appendChild(actions);

        const moreInfoRow = createElement('tr', '', 'hide');
        moreInfoRow.appendChild(createElement('td', `Year: ${data.year}`));
        const cell = createElement('td', `Description: ${data.description}`);
        cell.colSpan = 3;
        moreInfoRow.appendChild(cell);

        const furnitureList = document.getElementById('furniture-list');
        furnitureList.appendChild(infoRow);
        furnitureList.appendChild(moreInfoRow);

        moreBtn.addEventListener('click', () => {
            if (moreBtn.textContent === 'More Info') {
                moreBtn.textContent = 'Less Info';
                moreInfoRow.style.display = 'contents';
            } else {
                moreBtn.textContent = 'More Info';
                moreInfoRow.style.display = 'none';
            }
        });

        buyBtn.addEventListener('click', () => {
            infoRow.remove();
            moreInfoRow.remove();
            totalPrice += data.price;
            document.querySelector('.total-price').textContent = totalPrice.toFixed(2);
        });

        clearInput();
    }

    function getInputs() {
        return Object.fromEntries(
            Array.from(document.querySelectorAll('input, textarea'))
                .map(i => [i.id, i])
        );
    }

    function createElement(type, text = '', cssClass = '') {
        const element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }
        if (cssClass) {
            element.className = cssClass;
        }
        return element;
    }

    function getData() {
        return Object.fromEntries(
            Object.entries(inputs)
                .map(([name, input]) => [name, input.value])
        );
    }

    function isValid() {
        const year = Number(inputs.year.value);
        const price = Number(inputs.price.value);
        return Object.values(inputs).every(i => i.value.trim() !== '') &&
               !isNaN(year) && year > 0 &&
               !isNaN(price) && price > 0;
    }

    function clearInput() {
        Object.values(inputs).forEach(i => i.value = '');
    }
}
