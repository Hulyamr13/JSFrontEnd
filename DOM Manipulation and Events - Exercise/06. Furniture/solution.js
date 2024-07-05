function solve() {
  const generateButton = document.querySelector('#exercise button:nth-of-type(1)');
  const buyButton = document.querySelector('#exercise button:nth-of-type(2)');
  const boxes = document.querySelectorAll('tbody td input');

  generateButton.addEventListener('click', function(e) {
    const tableBody = document.querySelector('tbody');
    const productObjects = JSON.parse(document.querySelector('#exercise textarea:nth-of-type(1)').value);

    boxes.forEach(box => box.disabled = false);

    productObjects.forEach(productObj => {
      const newRow = document.createElement('tr');

      for (let i = 0; i < 5; i++) {
        newRow.appendChild(document.createElement('td'));
      }

      Object.entries(productObj).forEach(([attr, value]) => {
        let newElement;

        switch (attr) {
          case 'img':
            newElement = document.createElement('img');
            newElement.src = value;
            break;
          default:
            newElement = document.createElement('p');
            newElement.textContent = value;
            break;
        }

        newRow.querySelector(`td:nth-of-type(${attr === 'img' ? 1 : getTdIndex(attr)})`).appendChild(newElement);
      });

      const checkBoxEle = document.createElement('input');
      checkBoxEle.type = 'checkbox';
      newRow.querySelector('td:nth-of-type(5)').appendChild(checkBoxEle);
      tableBody.appendChild(newRow);
    });
  });

  buyButton.addEventListener('click', function(e) {
    const purchasedProducts = [];
    let sumPrice = 0;
    let sumFactors = 0;
    const allRows = document.querySelectorAll('tbody tr');
    const secondTextArea = document.querySelector('#exercise textarea:nth-of-type(2)');
    secondTextArea.disabled = false;

    allRows.forEach(row => {
      const [img, name, price, decFactor, checkbox] = row.querySelectorAll('td');
      if (checkbox.querySelector('input').checked) {
        purchasedProducts.push(name.textContent);
        sumPrice += Number(price.textContent);
        sumFactors += Number(decFactor.textContent);
      }
    });

    const result1 = `Bought furniture: ${purchasedProducts.join(', ')}\n`;
    const result2 = `Total price: ${sumPrice.toFixed(2)}\n`;
    const result3 = `Average decoration factor: ${sumFactors / purchasedProducts.length}`;
    secondTextArea.value = `${result1}${result2}${result3}`;
  });

  function getTdIndex(attr) {
    switch (attr) {
      case 'name': return 2;
      case 'price': return 3;
      case 'decFactor': return 4;
      default: return 1;
    }
  }
}
