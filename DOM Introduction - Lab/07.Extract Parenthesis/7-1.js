function extract(id) {
    const paragraph = document.getElementById(id);
    const regex = /\((.*?)\)/g;

    const matches = [...paragraph.textContent.matchAll(regex)].map(m => m[1]);

    const result = matches.join("; ");

    console.log(result);

    return result;
}
