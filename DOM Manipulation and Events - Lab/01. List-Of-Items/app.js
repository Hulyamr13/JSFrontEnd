function addItem() {
    const newItemText = document.getElementById('newItemText').value.trim();

    if (newItemText === '') {
        return;
    }

    const liItem = document.createElement('li');
    liItem.textContent = newItemText;

    document.getElementById('items').appendChild(liItem);

    document.getElementById('newItemText').value = '';
}
