function solve() {
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const tableElement = document.querySelector('table');
    const checkParagraphElement = document.querySelector('#check p');

    document.querySelector('tfoot tr td button').addEventListener('click', checkSudomuEvent);
    document.querySelectorAll('tfoot tr td button')[1].addEventListener('click', clearButtonEvent);

    function checkSudomuEvent() {
        let isValid = true;

        // Check rows and columns
        for (let i = 0; i < 3; i++) {
            const row = rows[i].querySelectorAll('td input');
            const column = rows.map(row => row.querySelectorAll('td input')[i]);

            if (!isSetValid(row) || !isSetValid(column)) {
                isValid = false;
                break;
            }
        }

        tableElement.style.border = isValid ? '2px solid green' : '2px solid red';
        checkParagraphElement.textContent = isValid ? 'You solve it! Congratulations!' : 'NOP! You are not done yet...';
        checkParagraphElement.style.color = isValid ? 'green' : 'red';
    }

    function clearButtonEvent() {
        rows.forEach(row => row.querySelectorAll('td input').forEach(input => input.value = ''));
        tableElement.style.border = '';
        checkParagraphElement.textContent = '';
        checkParagraphElement.style.color = '';
    }

    function isSetValid(elements) {
        const values = Array.from(elements).map(input => Number(input.value));
        const uniqueValues = new Set(values);
        return uniqueValues.size === 3 && [...uniqueValues].reduce((a, b) => a + b, 0) === 6;
    }
}
