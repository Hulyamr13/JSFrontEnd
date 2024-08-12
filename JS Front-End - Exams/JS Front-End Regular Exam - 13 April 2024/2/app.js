window.addEventListener("load", initialize);

function initialize() {
  const addButton = document.getElementById('add-btn');
  addButton.addEventListener('click', addNewContact);

  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const categoryInput = document.getElementById('category');

  const ulCheckList = document.getElementById('check-list');
  const ulContactList = document.getElementById('contact-list');

  function addNewContact(event) {
    event.preventDefault();

    if (!nameInput.value.trim() || !phoneInput.value.trim() || !categoryInput.value.trim()) {
      return;
    }

    const li = document.createElement('li');

    const article = document.createElement('article');

    const p1 = document.createElement('p');
    const name = nameInput.value.trim();
    p1.textContent = `name:${name}`;

    const p2 = document.createElement('p');
    const phone = phoneInput.value.trim();
    p2.textContent = `phone:${phone}`;

    const p3 = document.createElement('p');
    const category = categoryInput.value.trim();
    p3.textContent = `category:${category}`;

    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons';

    const editButton = document.createElement('button');
    editButton.className = 'edit-btn';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', editContactEvent);

    const saveButton = document.createElement('button');
    saveButton.className = 'save-btn';
    saveButton.textContent = 'Save';
    saveButton.addEventListener('click', saveContactEvent);

    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(saveButton);

    li.appendChild(article);
    li.appendChild(buttonsDiv);

    ulCheckList.appendChild(li);

    nameInput.value = '';
    phoneInput.value = '';
    categoryInput.value = '';

    function editContactEvent(event) {
      li.remove();

      nameInput.value = name;
      phoneInput.value = phone;
      categoryInput.value = category;
    }

    function saveContactEvent(event) {
      li.remove();

      const li1 = document.createElement('li');

      const article = document.createElement('article');

      const p1 = document.createElement('p');
      p1.textContent = `name:${name}`;

      const p2 = document.createElement('p');
      p2.textContent = `phone:${phone}`;

      const p3 = document.createElement('p');
      p3.textContent = `category:${category}`;

      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(p3);

      const deleteButton = document.createElement('button');
      deleteButton.className = 'del-btn';
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', deleteContactEvent);

      li1.appendChild(article);
      li1.appendChild(deleteButton);

      ulContactList.appendChild(li1);

      function deleteContactEvent(event) {
        li1.remove();
      }
    }
  }
}
