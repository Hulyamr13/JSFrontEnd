function validate() {
    let inputField = document.querySelector('#email');
    inputField.addEventListener('change', onChangeEvent);

    let regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function onChangeEvent(e) {
        let currentValue = e.currentTarget.value.trim();

        if (!regexPattern.test(currentValue)) {
            e.currentTarget.classList.add('error');
        } else {
            e.currentTarget.classList.remove('error');
        }
    }
}
