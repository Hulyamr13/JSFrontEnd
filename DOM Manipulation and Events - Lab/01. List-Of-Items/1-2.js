function addItem() {
    const newItemText = document.querySelector('#newItemText');
    const newText = newItemText.value.trim();

    if (newText) {
        const liItem = document.createElement('li');
        liItem.textContent = newText;
        document.querySelector('#items').appendChild(liItem);
        newItemText.value = '';
    }
}
