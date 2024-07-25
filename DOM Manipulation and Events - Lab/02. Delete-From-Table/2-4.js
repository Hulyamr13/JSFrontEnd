function deleteByEmail() {
    const emails = Array.from(document.querySelectorAll('#customers td:nth-child(2)'));
    const input = document.querySelector('input[name="email"]').value.trim();

    let resultValue = 'Not found.';
    emails.forEach(email => {
        if (email.textContent === input) {
            email.parentNode.remove();
            resultValue = 'Deleted.';
        }
    });

    document.querySelector('#result').textContent = resultValue;
}
