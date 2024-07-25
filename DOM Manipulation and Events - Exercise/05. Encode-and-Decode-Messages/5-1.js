function encodeAndDecodeMessages() {
    const [encodeTextArea, decodeTextArea] = document.querySelectorAll('textarea');
    const [encodeButton, decodeButton] = document.querySelectorAll('button');

    encodeButton.addEventListener('click', () => {
        decodeTextArea.value = transformMessage(encodeTextArea.value, 1);
        encodeTextArea.value = '';
    });

    decodeButton.addEventListener('click', () => {
        decodeTextArea.value = transformMessage(decodeTextArea.value, -1);
    });

    function transformMessage(message, shift) {
        return [...message].map(char => String.fromCharCode(char.charCodeAt(0) + shift)).join('');
    }
}
