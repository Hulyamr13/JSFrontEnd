function solve() {
    const rows = [...document.querySelectorAll('tbody tr')];
    const tableElement = document.querySelector('table');
    const checkParagraphElement = document.querySelector('#check p');
    const [quickCheckButton, clearButton] = document.querySelectorAll('tfoot tr td button');

    quickCheckButton.addEventListener('click', () => {
        const isValid = arr => arr.sort().join('') === '123';

        const rowsValid = rows.every(row => isValid([...row.querySelectorAll('td input')].map(input => input.value)));
        const colsValid = [0, 1, 2].every(i => isValid(rows.map(row => row.querySelectorAll('td input')[i].value)));

        const valid = rowsValid && colsValid;
        tableElement.style.border = valid ? '2px solid green' : '2px solid red';
        checkParagraphElement.textContent = valid ? 'You solve it! Congratulations!' : 'NOP! You are not done yet...';
        checkParagraphElement.style.color = valid ? 'green' : 'red';
    });

    clearButton.addEventListener('click', () => {
        rows.forEach(row => row.querySelectorAll('td input').forEach(input => input.value = ''));
        tableElement.style.border = '';
        checkParagraphElement.textContent = '';
        checkParagraphElement.style.color = '';
    });
}