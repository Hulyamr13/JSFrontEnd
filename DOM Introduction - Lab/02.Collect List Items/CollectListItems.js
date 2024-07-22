function extractText() {
    const content = document.querySelectorAll('ul li');
    const finalTextarea = document.getElementById('result');

    const contentArr = [];
    for (let element of content) {
        contentArr.push(element.textContent);
    }

    finalTextarea.value = contentArr.join('\n');
}