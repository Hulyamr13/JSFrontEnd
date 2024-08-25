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
        const article = editingItem.querySelector('article');
        article.children[0].textContent = model;
        article.children[1].textContent = `Memory: ${storage} TB`;
        article.children[2].textContent = `Price: ${price}$`;
        editingItem = null;
      } else {
        const li = document.createElement('li');
        li.className = 'laptop-item';

        const article = document.createElement('article');

        const modelPara = document.createElement('p');
        modelPara.textContent = model;
        article.appendChild(modelPara);

        const storagePara = document.createElement('p');
        storagePara.textContent = `Memory: ${storage} TB`;
        article.appendChild(storagePara);

        const pricePara = document.createElement('p');
        pricePara.textContent = `Price: ${price}$`;
        article.appendChild(pricePara);

        li.appendChild(article);

        const editBtn = document.createElement('button');
        editBtn.className = 'btn edit';
        editBtn.textContent = 'edit';
        li.appendChild(editBtn);

        const okBtn = document.createElement('button');
        okBtn.className = 'btn ok';
        okBtn.textContent = 'ok';
        li.appendChild(okBtn);

        checkList.appendChild(li);
      }

      clearInputs();
      addBtn.disabled = true;
    }
  });

  checkList.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit')) {
      const item = e.target.closest('li');
      const article = item.querySelector('article');
      modelInput.value = article.children[0].textContent;
      storageInput.value = article.children[1].textContent.replace('Memory: ', '').replace(' TB', '');
      priceInput.value = article.children[2].textContent.replace('Price: ', '').replace('$', '');

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
