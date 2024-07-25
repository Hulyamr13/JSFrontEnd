function solve() {
  const [generateButton, buyButton] = document.querySelectorAll('#exercise button');
  const [generateTextArea, resultTextArea] = document.querySelectorAll('#exercise textarea');
  const tableBody = document.querySelector('tbody');

  generateButton.addEventListener('click', () => {
    const products = JSON.parse(generateTextArea.value);

    products.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><img src="${product.img}"></td>
        <td><p>${product.name}</p></td>
        <td><p>${product.price}</p></td>
        <td><p>${product.decFactor}</p></td>
        <td><input type="checkbox" /></td>
      `;
      tableBody.appendChild(row);
    });
  });

  buyButton.addEventListener('click', () => {
    const selectedProducts = [...tableBody.querySelectorAll('input[type="checkbox"]:checked')]
      .map(checkbox => checkbox.closest('tr'));

    const names = selectedProducts.map(row => row.children[1].textContent);
    const totalPrice = selectedProducts.reduce((sum, row) => sum + Number(row.children[2].textContent), 0);
    const avgDecFactor = selectedProducts.reduce((sum, row) => sum + Number(row.children[3].textContent), 0) / selectedProducts.length;

    resultTextArea.value = `Bought furniture: ${names.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor}`;
  });
}
