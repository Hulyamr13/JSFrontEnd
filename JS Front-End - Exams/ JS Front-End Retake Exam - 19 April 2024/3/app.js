function theStepChallenge() {
  const API_URL = "http://localhost:3030/jsonstore/records/";
  const challengeApp = {
    inputFields: document.querySelectorAll("input"),
    loadRecords: document.querySelector("#load-records"),
    addRecord: document.querySelector("#add-record"),
    editRecord: document.querySelector("#edit-record"),
    list: document.querySelector("#list"),
    form: document.querySelector("form"),
    id: null,
  };

  function getFormData(id) {
    const formData = {};
    challengeApp.inputFields.forEach((input) => {
      formData[input.name.replace("p-", "")] = input.value;
    });
    if (id) formData._id = id;
    return JSON.stringify(formData);
  }

  function deleteRecord(e) {
    const recordId = e.closest("li").id;
    fetch(`${API_URL}${recordId}`, { method: "DELETE" })
      .then(loadRecords);
  }

  function changeRecord(e) {
    const recordElement = e.closest("li");
    challengeApp.id = recordElement.id;

    recordElement.querySelectorAll("p").forEach((p, index) => {
      challengeApp.inputFields[index].value = p.textContent;
    });

    challengeApp.list.removeChild(recordElement);
    challengeApp.editRecord.disabled = false;
    challengeApp.addRecord.disabled = true;
  }

  function addRecord() {
    fetch(API_URL, {
      method: "POST",
      body: getFormData(),
    }).then(() => {
      challengeApp.form.reset();
      loadRecords();
    });
  }

  function editRecord() {
    fetch(`${API_URL}${challengeApp.id}`, {
      method: "PUT",
      body: getFormData(challengeApp.id),
    }).then(() => {
      loadRecords();
      challengeApp.editRecord.disabled = true;
      challengeApp.addRecord.disabled = false;
    });
  }

  function loadRecords() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        challengeApp.list.innerHTML = ""; // Clear the list before appending new items
        Object.values(data).forEach((record) => {
          const listItem = document.createElement("li");
          listItem.className = "record";
          listItem.id = record._id;

          const infoDiv = document.createElement("div");
          infoDiv.className = "info";

          const nameP = document.createElement("p");
          nameP.textContent = record.name;
          infoDiv.appendChild(nameP);

          const stepsP = document.createElement("p");
          stepsP.textContent = record.steps;
          infoDiv.appendChild(stepsP);

          const caloriesP = document.createElement("p");
          caloriesP.textContent = record.calories;
          infoDiv.appendChild(caloriesP);

          listItem.appendChild(infoDiv);

          const btnWrapperDiv = document.createElement("div");
          btnWrapperDiv.className = "btn-wrapper";

          const changeBtn = document.createElement("button");
          changeBtn.className = "change-btn";
          changeBtn.textContent = "Change";
          changeBtn.addEventListener("click", () => changeRecord(changeBtn));
          btnWrapperDiv.appendChild(changeBtn);

          const deleteBtn = document.createElement("button");
          deleteBtn.className = "delete-btn";
          deleteBtn.textContent = "Delete";
          deleteBtn.addEventListener("click", () => deleteRecord(deleteBtn));
          btnWrapperDiv.appendChild(deleteBtn);

          listItem.appendChild(btnWrapperDiv);
          challengeApp.list.appendChild(listItem);
        });

        challengeApp.form.reset();
      });
  }

  challengeApp.addRecord.addEventListener("click", addRecord);
  challengeApp.editRecord.addEventListener("click", editRecord);
  challengeApp.loadRecords.addEventListener("click", loadRecords);

  return { deleteRecord, changeRecord };
}

const solve = theStepChallenge();
