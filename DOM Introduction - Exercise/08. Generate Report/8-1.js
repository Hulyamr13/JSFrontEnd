function generateReport() {
  const selectedCols = Array.from(document.querySelectorAll('th input'))
    .map((input, index) => input.checked ? index : -1)
    .filter(index => index !== -1);

  const reportList = Array.from(document.querySelectorAll('tbody tr')).map(row => {
    return selectedCols.reduce((acc, colIndex) => {
      const headerName = document.querySelectorAll('th input')[colIndex].name;
      acc[headerName] = row.cells[colIndex].textContent.trim();
      return acc;
    }, {});
  });

  document.getElementById('output').value = JSON.stringify(reportList, null, 2);
}
