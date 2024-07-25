function addItem() {
    const input = document.querySelector('#newItemText');
    const newItemText = input.value.trim();

    if (!newItemText) return;

    const liItem = document.createElement('li');
    liItem.innerHTML = `${newItemText} <a href="#">[Delete]</a>`;

    liItem.querySelector('a').onclick = function() {
        liItem.remove();
    };

    document.querySelector('#items').appendChild(liItem);
    input.value = '';
}
