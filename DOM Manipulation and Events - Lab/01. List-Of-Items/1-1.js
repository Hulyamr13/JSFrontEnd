function addItem() {
    const newItemText = document.querySelector('#newItemText').value.trim();

    if (newItemText === '') {
        return;
    }

    const liItem = document.createElement('li');
    liItem.textContent = newItemText;

    document.querySelector('#items').appendChild(liItem);

    document.querySelector('#newItemText').value = '';
}
