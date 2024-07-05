function solve() {
    const sumNumbers = (a, b, c) => a + b + c;

    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const tableElement = document.querySelector('table');
    const checkParagraphElement = document.querySelector('#check p');

    const [quickCheckButton, clearButton] = Array.from(document.querySelectorAll('tfoot tr td button'));

    quickCheckButton.addEventListener('click', function checkSudomuEvent(event) {
        const columns = [[], [], []];
        let correctSum = true;

        rows.forEach(row => {
            const [first, second, third] = Array.from(row.querySelectorAll('td input')).map(input => Number(input.value));
            columns[0].push(first);
            columns[1].push(second);
            columns[2].push(third);

            const sum = sumNumbers(first, second, third);
            if (sum !== 6) {
                correctSum = false;
            }
        });

        columns.forEach(column => {
            const sum = sumNumbers(column[0], column[1], column[2]);
            if (sum !== 6) {
                correctSum = false;
            }
        });

        const borderStyle = correctSum ? '2px solid green' : '2px solid red';
        const message = correctSum ? 'You solve it! Congratulations!' : 'NOP! You are not done yet...';
        const color = correctSum ? 'green' : 'red';

        tableElement.style.border = borderStyle;
        checkParagraphElement.textContent = message;
        checkParagraphElement.style.color = color;
    });

    clearButton.addEventListener('click', function clearButtonEvent(event) {
        rows.forEach(row => {
            Array.from(row.querySelectorAll('td input')).forEach(input => input.value = '');
        });

        tableElement.style.border = '';
        checkParagraphElement.textContent = '';
        checkParagraphElement.style.color = '';
    });
}
