function solve() {
   document.querySelector('#searchBtn').addEventListener('click', () => {
      const searchItem = document.getElementById('searchField').value.trim(); // Trim whitespace

      // Select all table rows
      const allRows = document.querySelectorAll('tbody tr');

      // Remove previous selection
      allRows.forEach(row => row.classList.remove('select'));

      // Mark rows containing the search item
      allRows.forEach(row => {
         if (Array.from(row.cells).some(cell => cell.textContent.includes(searchItem))) {
            row.classList.add('select');
         }
      });
   });
}
