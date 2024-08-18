window.addEventListener("load", solve);

function solve() {
  const addButton = document.getElementById("add-btn");
  const nameInput = document.getElementById("name");
  const timeInput = document.getElementById("time");
  const descriptionInput = document.getElementById("description");
  const previewList = document.getElementById("preview-list");
  const archiveList = document.getElementById("archive-list");

  addButton.addEventListener("click", function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const time = timeInput.value.trim();
    const description = descriptionInput.value.trim();

    if (name === "" || time === "" || description === "") {
      return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
      <article>
        <p>${name}</p>
        <p>${time}</p>
        <p>${description}</p>
      </article>
      <div class="buttons">
        <button class="edit-btn">Edit</button>
        <button class="next-btn">Next</button>
      </div>
    `;

    previewList.appendChild(li);
    nameInput.value = "";
    timeInput.value = "";
    descriptionInput.value = "";
    addButton.disabled = true;

    li.querySelector(".edit-btn").addEventListener("click", function() {
      nameInput.value = name;
      timeInput.value = time;
      descriptionInput.value = description;
      li.remove();
      addButton.disabled = false;
    });

    li.querySelector(".next-btn").addEventListener("click", function() {
      const archiveLi = document.createElement("li");

      archiveLi.innerHTML = `
        <article>
          <p>${name}</p>
          <p>${time}</p>
          <p>${description}</p>
        </article>
        <button class="archive-btn">Archive</button>
      `;

      archiveList.appendChild(archiveLi);
      li.remove();
      addButton.disabled = false;

      archiveLi.querySelector(".archive-btn").addEventListener("click", function() {
        archiveLi.remove();
        addButton.disabled = false;
      });
    });
  });

  const inputs = [nameInput, timeInput, descriptionInput];
  inputs.forEach(input => {
    input.addEventListener("input", () => {
      addButton.disabled = !inputs.every(input => input.value.trim() !== "");
    });
  });
}
