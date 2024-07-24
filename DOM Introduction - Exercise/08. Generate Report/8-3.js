function generateReport() {
  const headers = Array.from(document.querySelectorAll('th input'));
  const selectedCols = [];

  // Определяне на избраните колони
  for (let i = 0; i < headers.length; i++) {
    if (headers[i].checked) {
      selectedCols.push(i);
    }
  }

  const reportList = [];

  // Създаване на отчетните данни
  const rows = document.querySelectorAll('tbody tr');
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const reportItem = {};

    for (let j = 0; j < selectedCols.length; j++) {
      const colIndex = selectedCols[j];
      const headerName = headers[colIndex].name;
      reportItem[headerName] = row.cells[colIndex].textContent.trim();
    }

    reportList.push(reportItem);
  }

  document.getElementById('output').value = JSON.stringify(reportList, null, 2);
}
