function addItem() {
    const newItemText = document.getElementById('newItemText').value.trim();

    if (newItemText === '') {
        return;
    }

    const liItem = document.createElement('li');
    liItem.append(newItemText);

    document.getElementById('items').append(liItem);

    document.getElementById('newItemText').value = '';
}
