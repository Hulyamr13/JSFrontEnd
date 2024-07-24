function generateReport() {
  const headers = Array.from(document.querySelectorAll('th input'));
  const selectedCols = headers
    .map((input, index) => input.checked ? index : -1)
    .filter(index => index !== -1);

  const reportList = [];

  document.querySelectorAll('tbody tr').forEach(row => {
    const reportItem = {};
    selectedCols.forEach(colIndex => {
      const headerName = headers[colIndex].name;
      reportItem[headerName] = row.cells[colIndex].textContent.trim();
    });
    reportList.push(reportItem);
  });

  document.getElementById('output').value = JSON.stringify(reportList, null, 2);
}
