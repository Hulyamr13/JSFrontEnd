function editElement(element, current, replacement) {
    const regex = new RegExp(current, 'g');

    element.textContent = element.textContent.replace(regex, replacement);
}
