function deleteByEmail() {
    const emails = Array.from(document.querySelectorAll('#customers td:nth-child(2)'));
    const input = document.querySelector('input[name="email"]').value.trim();

    const matchingEmails = emails.filter(email => email.textContent === input);

    if (matchingEmails.length > 0) {
        matchingEmails.forEach(email => {
            email.parentNode.remove();
        });
        document.querySelector('#result').textContent = 'Deleted.';
    } else {
        document.querySelector('#result').textContent = 'Not found.';
    }
}
