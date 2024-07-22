function colorize() {
    const evenRows = document.querySelectorAll('tr:nth-child(even)');
    for (let i = 0; i < evenRows.length; i++) {
        evenRows[i].style.backgroundColor = 'Teal';
    }
}
