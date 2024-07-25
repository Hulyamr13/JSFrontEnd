function lockedProfile() {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const parentDiv = button.parentElement;
            const hiddenFields = parentDiv.querySelector('[id*="HiddenFields"]');
            const lock = parentDiv.querySelector('input[value="lock"]');

            if (!lock.checked) {
                const isHidden = hiddenFields.style.display === 'none' || hiddenFields.style.display === '';
                hiddenFields.style.display = isHidden ? 'block' : 'none';
                button.textContent = isHidden ? 'Hide it' : 'Show more';
            }
        });
    });
}
