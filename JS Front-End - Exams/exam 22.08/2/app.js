function solve() {
  const addBtn = document.getElementById('add-btn');
  const clearBtn = document.querySelector('.btn.clear');
  const checkList = document.getElementById('check-list');
  const laptopsList = document.getElementById('laptops-list');
  const modelInput = document.getElementById('laptop-model');
  const storageInput = document.getElementById('storage');
  const priceInput = document.getElementById('price');

  let editingItem = null;

  addBtn.addEventListener('click', () => {
    const model = modelInput.value.trim();
    const storage = storageInput.value.trim();
    const price = priceInput.value.trim();

    if (model && storage && price) {
      if (editingItem) {
        editingItem.querySelector('article p:nth-child(1)').textContent = model;
        editingItem.querySelector('article p:nth-child(2)').textContent = `Memory: ${storage} TB`;
        editingItem.querySelector('article p:nth-child(3)').textContent = `Price: ${price}$`;
        editingItem = null;
      } else {
        const li = document.createElement('li');
        li.className = 'laptop-item';
        li.innerHTML = `
          <article>
            <p>${model}</p>
            <p>Memory: ${storage} TB</p>
            <p>Price: ${price}$</p>
          </article>
          <button class="btn edit">edit</button>
          <button class="btn ok">ok</button>
        `;
        checkList.appendChild(li);
      }
      
      clearInputs();
      addBtn.disabled = true;
    }
  });

  checkList.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit')) {
      const item = e.target.closest('li');
      modelInput.value = item.querySelector('article p:nth-child(1)').textContent;
      storageInput.value = item.querySelector('article p:nth-child(2)').textContent.replace('Memory: ', '').replace(' TB', '');
      priceInput.value = item.querySelector('article p:nth-child(3)').textContent.replace('Price: ', '').replace('$', '');
      
      checkList.removeChild(item);
      addBtn.disabled = false;
      editingItem = item;
    } else if (e.target.classList.contains('ok')) {
      const item = e.target.closest('li');
      item.querySelector('.edit').remove();
      item.querySelector('.ok').remove();
      laptopsList.appendChild(item);
      addBtn.disabled = false;
    }
  });

  clearBtn.addEventListener('click', () => {
    checkList.innerHTML = '';
    laptopsList.innerHTML = '';
    clearInputs();
    addBtn.disabled = false;
  });

  function clearInputs() {
    modelInput.value = '';
    storageInput.value = '';
    priceInput.value = '';
  }
}