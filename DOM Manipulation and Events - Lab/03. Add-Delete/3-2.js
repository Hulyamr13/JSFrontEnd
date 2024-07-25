function addItem() {
    const newInput = document.querySelector('#newItemText').value.trim();

    if (newInput.length === 0) return;

    const liItem = document.createElement('li');
    liItem.textContent = newInput;

    const aItem = document.createElement('a');
    aItem.href = '#';
    aItem.textContent = '[Delete]';
    aItem.addEventListener('click', () => {
        liItem.remove();
    });

    liItem.appendChild(aItem);
    document.querySelector('#items').appendChild(liItem);

    document.querySelector('#newItemText').value = '';
}