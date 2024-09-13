window.addEventListener("load", solve);

function solve() {
  const colorElement = document.getElementById("colors");
  const modelElement = document.getElementById("motorcycles");
  const nameElement = document.getElementById("full-name");
  const emailElement = document.getElementById("email");
  const dateTimeElement = document.getElementById("datetime");
  const btnElement = document.getElementById("test-ride-btn");
  const previewListElement = document.getElementById("preview-list");
  const completeListElement = document.getElementById("complete-list");
  const dataViewElement = document.querySelector(".data-view");

  btnElement.addEventListener("click", onAdd);

  function onAdd(e) {
    e.preventDefault();

    if (isAnyInputEmpty()) {
      return;
    }

    const liElementInfo = createPreviewItem();

    clearInputs();
    btnElement.disabled = true;

    previewListElement.appendChild(liElementInfo);
  }

  function isAnyInputEmpty() {
    return !(
      colorElement.value &&
      modelElement.value &&
      nameElement.value &&
      emailElement.value &&
      dateTimeElement.value
    );
  }

  function createPreviewItem() {
    const liElementInfo = document.createElement("li");
    liElementInfo.className = "preview-item";

    const articleElementInfo = document.createElement("article");

    articleElementInfo.appendChild(createDetailElement(`Color: ${colorElement.value}`));
    articleElementInfo.appendChild(createDetailElement(`Model: ${modelElement.value}`));
    articleElementInfo.appendChild(createDetailElement(`For: ${nameElement.value}`));
    articleElementInfo.appendChild(createDetailElement(`Contact: ${emailElement.value}`));
    articleElementInfo.appendChild(createDetailElement(`Test Ride On: ${dateTimeElement.value}`));

    const btnContainer = createButtonContainer();

    liElementInfo.appendChild(articleElementInfo);
    liElementInfo.appendChild(btnContainer);

    btnContainer.querySelector(".edit-btn").addEventListener("click", onEdit);
    btnContainer.querySelector(".next-btn").addEventListener("click", onNext);

    return liElementInfo;
  }

  function createDetailElement(text) {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
  }

  function createButtonContainer() {
    const btnContainer = document.createElement("div");
    btnContainer.className = "btn-container";

    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";

    const nextBtn = document.createElement("button");
    nextBtn.className = "next-btn";
    nextBtn.textContent = "Next";

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(nextBtn);

    return btnContainer;
  }

  function clearInputs() {
    colorElement.value = "";
    modelElement.value = "";
    nameElement.value = "";
    emailElement.value = "";
    dateTimeElement.value = "";
  }

  function onEdit() {
    const liElementInfo = this.closest("li");
    const articleElementInfo = liElementInfo.querySelector("article");

    colorElement.value = articleElementInfo.children[0].textContent.replace("Color: ", "");
    modelElement.value = articleElementInfo.children[1].textContent.replace("Model: ", "");
    nameElement.value = articleElementInfo.children[2].textContent.replace("For: ", "");
    emailElement.value = articleElementInfo.children[3].textContent.replace("Contact: ", "");
    dateTimeElement.value = articleElementInfo.children[4].textContent.replace("Test Ride On: ", "");

    liElementInfo.remove();
    btnElement.disabled = false;
  }

  function onNext() {
    const liElementInfo = this.closest("li");
    const articleElementInfo = liElementInfo.querySelector("article");

    const liElementConfirm = document.createElement("li");
    liElementConfirm.className = "complete-item";

    const articleElementContinue = articleElementInfo.cloneNode(true);
    const completeBtn = document.createElement("button");
    completeBtn.className = "complete-btn";
    completeBtn.textContent = "Complete";

    articleElementContinue.appendChild(completeBtn);
    liElementConfirm.appendChild(articleElementContinue);

    liElementInfo.remove();
    completeListElement.appendChild(liElementConfirm);

    completeBtn.addEventListener("click", onComplete);
  }

  function onComplete() {
    const liElementConfirm = this.closest("li");

    liElementConfirm.remove();

    const confirmBtn = document.createElement("button");
    confirmBtn.className = "confirm-btn";
    confirmBtn.textContent = "Your Test Ride is Confirmed";
    dataViewElement.appendChild(confirmBtn);

    confirmBtn.addEventListener("click", () => {
      window.location.reload();
    });
  }
}
