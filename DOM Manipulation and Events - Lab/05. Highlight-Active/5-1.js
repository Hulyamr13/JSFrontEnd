function focused() {
    document.addEventListener('focus', (event) => {
        if (event.target.tagName === 'INPUT') {
            event.target.parentNode.classList.add('focused');
        }
    }, true);

    document.addEventListener('blur', (event) => {
        if (event.target.tagName === 'INPUT') {
            event.target.parentNode.classList.remove('focused');
        }
    }, true);
}
