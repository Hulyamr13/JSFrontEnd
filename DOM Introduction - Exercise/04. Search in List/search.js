function search() {
   const input = document.getElementById('searchText').value.trim(); // Trim whitespace

   const listItems = document.querySelectorAll('#towns li');

   const pattern = new RegExp(`.*(${input}).*`, 'i'); // 'i' flag for case insensitive matching

   let counter = 0;

   for (let item of listItems) {
      const match = pattern.test(item.textContent);

      if (match) {
         item.style.textDecoration = 'underline';
         item.style.fontWeight = 'bold';
         counter += 1;
      } else {
         item.style.textDecoration = 'none';
         item.style.fontWeight = 'normal';
      }
   }

   document.getElementById('result').textContent = `${counter} matches found`;
}
