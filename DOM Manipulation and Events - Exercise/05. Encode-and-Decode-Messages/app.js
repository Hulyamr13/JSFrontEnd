function encodeAndDecodeMessages() {
    const [encodeTextArea, decodeTextArea] = document.querySelectorAll('textarea');
    const [encodeButton, decodeButton] = document.querySelectorAll('button');

    encodeButton.addEventListener('click', () => {
        const encodedMessage = encodeMessage(encodeTextArea.value);
        encodeTextArea.value = '';
        decodeTextArea.value = encodedMessage;
    });

    decodeButton.addEventListener('click', () => {
        const decodedMessage = decodeMessage(decodeTextArea.value);
        decodeTextArea.value = decodedMessage;
    });

    function encodeMessage(message) {
        return transformMessage(message, 1);
    }

    function decodeMessage(message) {
        return transformMessage(message, -1);
    }

    function transformMessage(message, n) {
        return message.split('').map(symbol => String.fromCharCode(symbol.charCodeAt(0) + n)).join('');
    }
}
