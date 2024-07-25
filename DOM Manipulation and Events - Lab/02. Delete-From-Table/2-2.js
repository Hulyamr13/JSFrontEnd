function deleteByEmail() {
    const emails = document.querySelectorAll('#customers td:nth-child(2)');
    const input = document.querySelector('input[name="email"]').value.trim();

    let resultValue = 'Not found.';
    for (let email of emails) {
        if (email.textContent === input) {
            email.parentNode.remove();
            resultValue = 'Deleted.';
        }
    }

    document.querySelector('#result').textContent = resultValue;
}
