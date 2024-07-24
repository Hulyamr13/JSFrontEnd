function solve() {
    const inputContent = document.querySelector('#input').value
        .split('.')
        .map(item => item.trim())
        .filter(item => item !== '');

    const outputElement = document.querySelector('#output');

    while (inputContent.length > 0) {
        const paragraph = document.createElement('p');

        const sentences = inputContent.splice(0, 3);

        paragraph.textContent = sentences.join('. ') + '.';

        outputElement.appendChild(paragraph);
    }
}
