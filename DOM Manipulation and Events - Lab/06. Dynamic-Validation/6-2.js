function validate() {
    let inputField = document.querySelector('#email');
    inputField.addEventListener('change', onChangeEvent);

    function onChangeEvent(e) {
        let currentValue = e.currentTarget.value.trim();

        if (isValidEmail(currentValue)) {
            e.currentTarget.classList.remove('error');
        } else {
            e.currentTarget.classList.add('error');
        }
    }

    function isValidEmail(email) {
        let atIndex = email.indexOf('@');
        let dotIndex = email.indexOf('.', atIndex);

        return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
    }
}
