function addItem() {
    const textField = document.querySelector('#newItemText');
    const valueField = document.querySelector('#newItemValue');
    const menu = document.querySelector('#menu');

    menu.insertAdjacentHTML('beforeend', `<option value="${valueField.value}">${textField.value}</option>`);

    textField.value = '';
    valueField.value = '';
}
