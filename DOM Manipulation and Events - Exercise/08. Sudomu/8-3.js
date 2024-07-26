function solve() {
    const expectedNumbers = [1, 2, 3];

    const rows = [...document.querySelectorAll('tbody tr')];
    const tableElement = document.querySelector('table');
    const checkParagraphElement = document.querySelector('#check p');
    const [quickCheckButton, clearButton] = document.querySelectorAll('tfoot tr td button');

    quickCheckButton.addEventListener('click', () => {
        let correct = true;

        // Check rows
        for (const row of rows) {
            const rowNumbers = [...row.querySelectorAll('td input')].map(input => Number(input.value));
            if (!isValidSet(rowNumbers)) {
                correct = false;
                break;
            }
        }

        // Check columns
        for (let i = 0; i < 3; i++) {
            const colNumbers = rows.map(row => Number(row.querySelectorAll('td input')[i].value));
            if (!isValidSet(colNumbers)) {
                correct = false;
                break;
            }
        }

        tableElement.style.border = correct ? '2px solid green' : '2px solid red';
        checkParagraphElement.textContent = correct ? 'You solve it! Congratulations!' : 'NOP! You are not done yet...';
        checkParagraphElement.style.color = correct ? 'green' : 'red';
    });

    clearButton.addEventListener('click', () => {
        rows.forEach(row => row.querySelectorAll('td input').forEach(input => input.value = ''));

        tableElement.style.border = '';
        checkParagraphElement.textContent = '';
        checkParagraphElement.style.color = '';
    });

    function isValidSet(numbers) {
        numbers.sort();
        return numbers.join('') === expectedNumbers.join('');
    }
}
