window.addEventListener("load", solve);

function solve() {
  const snowmanNameElement = document.getElementById("snowman-name");
  const snowmanHeightElement = document.getElementById("snowman-height");
  const locationElement = document.getElementById("location");
  const creatorNameElement = document.getElementById("creator-name");
  const attributeElement = document.getElementById("special-attribute");
  const addBtnElement = document.querySelector(".add-btn");

  const snowListElement = document.querySelector(".snowman-preview");
  const showSnowmanElement = document.querySelector(".snow-list");

  const mainContent = document.getElementById("hero");
  const bodyElement = document.querySelector(".body");
  const backImg = document.getElementById('back-img');

  addBtnElement.addEventListener("click", onAdd);

  function onAdd(event) {
    event.preventDefault();

    if (isAnyFieldEmpty()) {
      return;
    }

    const snowmanInfo = createSnowmanInfo();
    const snowmanElement = createSnowmanElement(snowmanInfo);

    snowListElement.appendChild(snowmanElement);

    clearForm();
    addBtnElement.disabled = true;
  }

  function isAnyFieldEmpty() {
    return (
      snowmanNameElement.value === "" ||
      snowmanHeightElement.value === "" ||
      locationElement.value === "" ||
      creatorNameElement.value === "" ||
      attributeElement.value === ""
    );
  }

  function createSnowmanInfo() {
    return {
      name: snowmanNameElement.value,
      height: snowmanHeightElement.value,
      location: locationElement.value,
      creator: creatorNameElement.value,
      attribute: attributeElement.value
    };
  }

  function createSnowmanElement(info) {
    const liElement = document.createElement("li");
    liElement.classList.add("snowman-info");

    const articleElement = document.createElement("article");
    articleElement.innerHTML = `
      <p>Name: ${info.name}</p>
      <p>Height: ${info.height}</p>
      <p>Location: ${info.location}</p>
      <p>Creator: ${info.creator}</p>
      <p>Attribute: ${info.attribute}</p>
    `;

    const btnContainer = createButtonContainer(info, liElement);

    liElement.appendChild(articleElement);
    liElement.appendChild(btnContainer);

    return liElement;
  }

  function createButtonContainer(info, liElement) {
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => onEdit(info, liElement));

    const nextBtn = document.createElement("button");
    nextBtn.classList.add("next-btn");
    nextBtn.textContent = "Next";
    nextBtn.addEventListener("click", () => onNext(info, liElement));

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(nextBtn);

    return btnContainer;
  }

  function onEdit(info, liElement) {
    snowmanNameElement.value = info.name;
    snowmanHeightElement.value = info.height;
    locationElement.value = info.location;
    creatorNameElement.value = info.creator;
    attributeElement.value = info.attribute;

    liElement.remove();
    addBtnElement.disabled = false;
  }

  function onNext(info, liElement) {
    const liConfirmElement = document.createElement("li");
    liConfirmElement.classList.add("snowman-content");

    const articleConfirmElement = document.createElement("article");
    articleConfirmElement.innerHTML = `
      <p>Name: ${info.name}</p>
      <p>Height: ${info.height}</p>
      <p>Location: ${info.location}</p>
      <p>Creator: ${info.creator}</p>
      <p>Attribute: ${info.attribute}</p>
    `;

    const sendBtn = document.createElement("button");
    sendBtn.classList.add("send-btn");
    sendBtn.textContent = "Send";
    sendBtn.addEventListener("click", onSend);

    articleConfirmElement.appendChild(sendBtn);
    liConfirmElement.appendChild(articleConfirmElement);

    liElement.remove();
    showSnowmanElement.appendChild(liConfirmElement);
  }

  function onSend() {
    mainContent.remove();
    const backBtn = document.createElement("button");
    backBtn.classList.add("back-btn");
    backBtn.textContent = "Back";

    backImg.hidden = false;
    bodyElement.appendChild(backBtn);

    backBtn.addEventListener("click", () => window.location.reload());
  }

  function clearForm() {
    snowmanNameElement.value = "";
    snowmanHeightElement.value = "";
    locationElement.value = "";
    creatorNameElement.value = "";
    attributeElement.value = "";
  }
}