function sumTable() {
    const table = document.querySelector('table');
    
    let sum = 0;
    
    table.querySelectorAll('tr:not(:last-child)').forEach(row => {
        const cost = parseFloat(row.lastElementChild.textContent);
        
        if (!isNaN(cost)) {
            sum += cost;
        }
    });
    
    const sumElement = document.getElementById('sum');
    sumElement.textContent = sum.toFixed(2);
}
