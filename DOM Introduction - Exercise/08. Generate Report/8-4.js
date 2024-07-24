function generateReport() {
  const thEls = document.querySelectorAll("thead tr th");
  const tbodyRows = document.querySelectorAll("tbody tr");

  const checkedInputs = [];
  for (let i = 0; i < thEls.length; i++) {
    const input = thEls[i].querySelector("input");
    if (input.checked) {
      checkedInputs.push({ el: input, index: i });
    }
  }

  const reportList = [];
  for (let row of tbodyRows) {
    const reportItem = {};
    for (let checkedInput of checkedInputs) {
      const colIndex = checkedInput.index;
      const headerName = thEls[colIndex].querySelector("input").name;
      reportItem[headerName] = row.cells[colIndex].textContent.trim();
    }
    reportList.push(reportItem);
  }

  document.getElementById("output").value = JSON.stringify(reportList, null, 2);
}
