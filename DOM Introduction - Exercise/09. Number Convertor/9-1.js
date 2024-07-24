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
    const result = option === 'hexadecimal' ? inputNum.toString(16).toUpperCase() : inputNum.toString(2);
    const resultElement = document.querySelector('#result');
    resultElement.value = result;
    resultElement.disabled = false;
  });
}
