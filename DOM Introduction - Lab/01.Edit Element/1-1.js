
function editElement(element, current, replacement) {
    element.textContent = element.textContent.split(current).join(replacement);
}
