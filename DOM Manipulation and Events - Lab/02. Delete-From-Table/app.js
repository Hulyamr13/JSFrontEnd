function deleteByEmail() {
    let emails = document.querySelectorAll('#customers td:nth-child(2)');
    let input = document.querySelector('input[name="email"]').value.trim();

    let resultValue = 'Not found.';
    for (let element of emails) {
        if (element.textContent === input) {
            document.querySelector('#customers tbody').removeChild(element.parentNode);
            resultValue = 'Deleted.';
            break;
        }
    }

    document.getElementById('result').textContent = resultValue;
}
