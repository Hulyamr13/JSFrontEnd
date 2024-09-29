window.addEventListener("load", solve);

function solve() {
  const ticketNumElement = document.getElementById("num-tickets");
  const seatingElement = document.getElementById("seating-preference");
  const nameElement = document.getElementById("full-name");
  const emailElement = document.getElementById("email");
  const phoneElement = document.getElementById("phone-number");
  const btnElement = document.getElementById("purchase-btn");
  const ticketListElement = document.getElementById("ticket-preview");
  const purchasedListElement = document.getElementById("ticket-purchase");
  const bottomElement = document.querySelector(".bottom-content");

  btnElement.addEventListener("click", onAdd);

  function onAdd(e) {
    e.preventDefault();

    if (
      ticketNumElement.value === "" ||
      seatingElement.value === "" ||
      seatingElement.value === "seating-preference" ||
      nameElement.value === "" ||
      emailElement.value === "" ||
      phoneElement.value === ""
    ) {
      return;
    }

    const liElementInfo = document.createElement("li");
    liElementInfo.classList.add("ticket-purchase");

    const articleElementInfo = document.createElement("article");

    const ticketNumber = document.createElement("p");
    ticketNumber.textContent = `Count: ${ticketNumElement.value}`;

    const seatingPref = document.createElement("p");
    seatingPref.textContent = `Preference: ${seatingElement.value}`;

    const fullName = document.createElement("p");
    fullName.textContent = `To: ${nameElement.value}`;

    const email = document.createElement("p");
    email.textContent = `Email: ${emailElement.value}`;

    const pNumber = document.createElement("p");
    pNumber.textContent = `Phone Number: ${phoneElement.value}`;

    articleElementInfo.appendChild(ticketNumber);
    articleElementInfo.appendChild(seatingPref);
    articleElementInfo.appendChild(fullName);
    articleElementInfo.appendChild(email);
    articleElementInfo.appendChild(pNumber);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";

    const nextBtn = document.createElement("button");
    nextBtn.classList.add("next-btn");
    nextBtn.textContent = "Next";

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(nextBtn);

    liElementInfo.appendChild(articleElementInfo);
    liElementInfo.appendChild(btnContainer);

    ticketListElement.appendChild(liElementInfo);

    const originalData = {
      ticketNum: ticketNumElement.value,
      seating: seatingElement.value,
      name: nameElement.value,
      email: emailElement.value,
      phone: phoneElement.value,
    };

    clearInputFields();
    btnElement.disabled = true;

    editBtn.addEventListener("click", () => {
      ticketNumElement.value = originalData.ticketNum;
      seatingElement.value = originalData.seating;
      nameElement.value = originalData.name;
      emailElement.value = originalData.email;
      phoneElement.value = originalData.phone;

      liElementInfo.remove();
      btnElement.disabled = false;
    });

    nextBtn.addEventListener("click", () => {
      const liElementConfirm = document.createElement("li");
      liElementConfirm.classList.add("ticket-purchase");

      const articleElementContinue = document.createElement("article");
      articleElementContinue.innerHTML = `
        <p>Count: ${originalData.ticketNum}</p>
        <p>Preference: ${originalData.seating}</p>
        <p>To: ${originalData.name}</p>
        <p>Email: ${originalData.email}</p>
        <p>Phone Number: ${originalData.phone}</p>
      `;

      const buyBtn = document.createElement("button");
      buyBtn.classList.add("buy-btn");
      buyBtn.textContent = "Buy";

      articleElementContinue.appendChild(buyBtn);
      liElementConfirm.appendChild(articleElementContinue);

      ticketListElement.removeChild(liElementInfo);
      purchasedListElement.appendChild(liElementConfirm);

      buyBtn.addEventListener("click", () => onBuy(liElementConfirm));
    });
  }

  function onBuy(purchaseLi) {
    purchaseLi.remove();

    const thankYouMessage = document.createElement("h2");
    thankYouMessage.textContent = "Thank you for your purchase!";

    const backBtn = document.createElement("button");
    backBtn.classList.add("back-btn");
    backBtn.textContent = "Back";

    bottomElement.appendChild(thankYouMessage);
    bottomElement.appendChild(backBtn);

    backBtn.addEventListener("click", () => {
      window.location.reload();
    });
  }

  function clearInputFields() {
    ticketNumElement.value = "";
    seatingElement.value = "seating-preference";
    nameElement.value = "";
    emailElement.value = "";
    phoneElement.value = "";
  }
}
