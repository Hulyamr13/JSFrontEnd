function colorize() {
    const evenRows = document.querySelectorAll('tr:nth-child(even)');

    evenRows.forEach(row => {
        row.style.backgroundColor = 'Teal';
    });
}
