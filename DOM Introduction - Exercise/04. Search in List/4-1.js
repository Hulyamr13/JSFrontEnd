function search() {
    const input = document.getElementById('searchText').value.trim();
    const listItems = document.querySelectorAll('#towns li');
    const pattern = new RegExp(input, 'i');

    let counter = 0;

    listItems.forEach(item => {
        if (pattern.test(item.textContent)) {
            item.style.cssText = 'text-decoration: underline; font-weight: bold;';
            counter++;
        } else {
            item.style.cssText = 'text-decoration: none; font-weight: normal;';
        }
    });

    document.getElementById('result').textContent = `${counter} matches found`;
}
