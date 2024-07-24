function solve() {
  const selectMenu = document.querySelector('#selectMenuTo');
  ['Hexadecimal', 'Binary'].forEach(opt => {
    const option = document.createElement('option');
    option.value = opt.toLowerCase();
    option.textContent = opt;
    selectMenu.appendChild(option);
  });

  document.querySelector('button').addEventListener('click', () => {
    const inputNum = Number(document.querySelector('#input').value);
    const option = selectMenu.value;
    let result;

    switch (option) {
      case 'hexadecimal':
        result = inputNum.toString(16).toUpperCase();
        break;
      case 'binary':
        result = inputNum.toString(2);
        break;
      default:
        result = '';
    }

    const resultElement = document.querySelector('#result');
    resultElement.value = result;
    resultElement.disabled = false;
  });
}
