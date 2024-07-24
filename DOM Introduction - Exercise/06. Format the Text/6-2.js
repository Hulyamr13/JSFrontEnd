function solve() {
    const inputContent = document.querySelector('#input').value
        .split('.')
        .map(item => item.trim())
        .filter(item => item !== '');

    const outputElement = document.querySelector('#output');

    for (let i = 0; i < inputContent.length; i += 3) {
        const paragraph = document.createElement('p');

        const sentences = inputContent.slice(i, i + 3);

        paragraph.textContent = sentences.join('. ') + '.';

        outputElement.appendChild(paragraph);
    }
}
