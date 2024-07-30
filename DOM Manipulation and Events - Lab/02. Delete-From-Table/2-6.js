function deleteByEmail() {
    const emails = document.querySelectorAll('#customers td:nth-child(2)');
    const input = document.querySelector('input[name="email"]').value.trim();

    let found = false;
    emails.forEach(email => {
        if (email.textContent === input) {
            email.parentElement.remove();
            found = true;
        }
    });

    document.querySelector('#result').textContent = found ? 'Deleted.' : 'Not found.';
}
