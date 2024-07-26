function solve() {
    const sumNumbers = (a, b, c) => a + b + c;

    const rows = [...document.querySelectorAll('tbody tr')];
    const tableElement = document.querySelector('table');
    const checkParagraphElement = document.querySelector('#check p');
    const [quickCheckButton, clearButton] = document.querySelectorAll('tfoot tr td button');

    quickCheckButton.addEventListener('click', () => {
        const columns = [[], [], []];
        let correctSum = true;

        rows.forEach(row => {
            const inputs = [...row.querySelectorAll('td input')].map(input => Number(input.value));
            inputs.forEach((num, i) => columns[i].push(num));

            if (sumNumbers(...inputs) !== 6) correctSum = false;
        });

        columns.forEach(column => {
            if (sumNumbers(...column) !== 6) correctSum = false;
        });

        tableElement.style.border = correctSum ? '2px solid green' : '2px solid red';
        checkParagraphElement.textContent = correctSum ? 'You solve it! Congratulations!' : 'NOP! You are not done yet...';
        checkParagraphElement.style.color = correctSum ? 'green' : 'red';
    });

    clearButton.addEventListener('click', () => {
        rows.forEach(row => row.querySelectorAll('td input').forEach(input => input.value = ''));

        tableElement.style.border = '';
        checkParagraphElement.textContent = '';
        checkParagraphElement.style.color = '';
    });
}
