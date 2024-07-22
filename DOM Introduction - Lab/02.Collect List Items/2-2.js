function extractText() {
    const content = document.querySelectorAll('ul li');
    const finalTextarea = document.getElementById('result');

    const contentArr = Array.from(content).map(element => element.textContent);

    finalTextarea.value = contentArr.join('\n');
}
