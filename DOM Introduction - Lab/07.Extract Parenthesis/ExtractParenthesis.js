function extract(id) {
    const paragraph = document.getElementById(id);

    const regex = /\((.*?)\)/g;

    let matches = [];

    let match;
    while ((match = regex.exec(paragraph.textContent)) !== null) {
        matches.push(match[1]);
    }

    let result = matches.join("; ");
    
    console.log(result);
    
    return result;
}
