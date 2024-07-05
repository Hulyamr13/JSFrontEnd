function lockedProfile() {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const parentDiv = button.parentElement;
            const hiddenFields = parentDiv.querySelector('[id*=HiddenFields]');
            const lock = parentDiv.querySelector('input[value=lock]');

            if (!lock.checked) {
                if (button.textContent === 'Show more') {
                    hiddenFields.style.display = 'block';
                    button.textContent = 'Hide it';
                } else {
                    hiddenFields.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        });
    });
}
