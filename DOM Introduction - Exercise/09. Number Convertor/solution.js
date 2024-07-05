function solve() {
  const selectMenu = document.getElementById('selectMenuTo');
  ['Hexadecimal', 'Binary'].forEach(opt => {
    const option = document.createElement('option');
    option.value = opt.toLowerCase();
    option.textContent = opt;
    selectMenu.appendChild(option);
  });

  document.querySelector('button').addEventListener('click', () => {
    const inputNum = Number(document.getElementById('input').value);
    const option = selectMenu.value;
    const result = option === 'hexadecimal' ? inputNum.toString(16).toUpperCase() : inputNum.toString(2);
    document.getElementById('result').value = result;
    document.getElementById('result').disabled = false;
  });
}
