function extract(id) {
    const paragraph = document.getElementById(id);
    const text = paragraph.textContent;
    const matches = [];
    let startIndex = 0;

    while (startIndex < text.length) {
        const openParen = text.indexOf('(', startIndex);
        if (openParen === -1) break;

        const closeParen = text.indexOf(')', openParen);
        if (closeParen === -1) break;

        const match = text.substring(openParen + 1, closeParen);
        matches.push(match);

        startIndex = closeParen + 1;
    }

    const result = matches.join("; ");
    console.log(result);

    return result;
}
