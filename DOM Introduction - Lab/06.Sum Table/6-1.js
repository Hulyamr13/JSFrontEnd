function sumTable() {
    let sum = [...document.querySelectorAll('table tr:not(:last-child) td:last-child')]
        .reduce((acc, cell) => acc + (parseFloat(cell.textContent) || 0), 0);

    document.getElementById('sum').textContent = sum.toFixed(2);
}
