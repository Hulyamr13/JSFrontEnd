function focused() {
    const inputAreas = document.querySelectorAll('input');

    inputAreas.forEach(input => {
        input.addEventListener('focus', () => input.parentNode.classList.add('focused'));
        input.addEventListener('blur', () => input.parentNode.classList.remove('focused'));
    });
}
