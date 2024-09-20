window.addEventListener('load', solution);
function solution() {
  const addBtn = document.getElementById('add-btn');
  const employeeField = document.getElementById('employee');
  const categoryField = document.getElementById('category');
  const urgencyField = document.getElementById('urgency');
  const teamField = document.getElementById('team');
  const descriptionField = document.getElementById('description');
  const previewList = document.querySelector('.preview-list');
  const pendingList = document.querySelector('.pending-list');
  const resolvedList = document.querySelector('.resolved-list');

  addBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const employee = employeeField.value.trim();
    const category = categoryField.value;
    const urgency = urgencyField.value;
    const team = teamField.value;
    const description = descriptionField.value.trim();

    if (!employee || !category || !urgency || !team || !description) {
      return;
    }

    const li = document.createElement('li');
    li.classList.add('problem-content');

    const article = document.createElement('article');
    appendParagraph(article, `From: ${employee}`);
    appendParagraph(article, `Category: ${category}`);
    appendParagraph(article, `Urgency: ${urgency}`);
    appendParagraph(article, `Assigned to: ${team}`);
    appendParagraph(article, `Description: ${description}`);

    li.appendChild(article);

    const editBtn = createButton('Edit', 'edit-btn');
    const continueBtn = createButton('Continue', 'continue-btn');

    li.appendChild(editBtn);
    li.appendChild(continueBtn);

    previewList.appendChild(li);

    clearInputs();
    addBtn.disabled = true;

    editBtn.addEventListener('click', function () {
      employeeField.value = employee;
      categoryField.value = category;
      urgencyField.value = urgency;
      teamField.value = team;
      descriptionField.value = description;

      previewList.removeChild(li);
      addBtn.disabled = false;
    });

    continueBtn.addEventListener('click', function () {
      previewList.removeChild(li);

      const liPending = document.createElement('li');
      liPending.classList.add('problem-content');

      const articlePending = document.createElement('article');
      appendParagraph(articlePending, `From: ${employee}`);
      appendParagraph(articlePending, `Category: ${category}`);
      appendParagraph(articlePending, `Urgency: ${urgency}`);
      appendParagraph(articlePending, `Assigned to: ${team}`);
      appendParagraph(articlePending, `Description: ${description}`);

      liPending.appendChild(articlePending);

      const resolveBtn = createButton('Resolved', 'resolve-btn');
      liPending.appendChild(resolveBtn);

      pendingList.appendChild(liPending);

      resolveBtn.addEventListener('click', function () {
        pendingList.removeChild(liPending);

        const liResolved = document.createElement('li');
        liResolved.classList.add('problem-content');

        const articleResolved = document.createElement('article');
        appendParagraph(articleResolved, `From: ${employee}`);
        appendParagraph(articleResolved, `Category: ${category}`);
        appendParagraph(articleResolved, `Urgency: ${urgency}`);
        appendParagraph(articleResolved, `Assigned to: ${team}`);
        appendParagraph(articleResolved, `Description: ${description}`);

        liResolved.appendChild(articleResolved);

        const clearBtn = createButton('Clear', 'clear-btn');
        liResolved.appendChild(clearBtn);

        resolvedList.appendChild(liResolved);

        clearBtn.addEventListener('click', function () {
          resolvedList.removeChild(liResolved);
        });
      });
    });
  });

  function appendParagraph(parent, text) {
    const p = document.createElement('p');
    p.textContent = text;
    parent.appendChild(p);
  }

  function createButton(text, className) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add(className);
    return button;
  }

  function clearInputs() {
    employeeField.value = '';
    categoryField.value = '';
    urgencyField.value = '';
    teamField.value = '';
    descriptionField.value = '';
  }
}
