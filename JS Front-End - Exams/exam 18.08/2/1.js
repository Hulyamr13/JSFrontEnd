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

    const article = document.createElement("article");
    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = name;
    const timeParagraph = document.createElement("p");
    timeParagraph.textContent = time;
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = description;

    article.appendChild(nameParagraph);
    article.appendChild(timeParagraph);
    article.appendChild(descriptionParagraph);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.classList.add("next-btn");

    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(nextButton);

    li.appendChild(article);
    li.appendChild(buttonsDiv);

    previewList.appendChild(li);

    nameInput.value = "";
    timeInput.value = "";
    descriptionInput.value = "";
    addButton.disabled = true;

    editButton.addEventListener("click", function() {
      nameInput.value = name;
      timeInput.value = time;
      descriptionInput.value = description;
      li.remove();
      addButton.disabled = false;
    });

    nextButton.addEventListener("click", function() {
      const archiveLi = document.createElement("li");

      const archiveArticle = document.createElement("article");
      const archiveNameParagraph = document.createElement("p");
      archiveNameParagraph.textContent = name;
      const archiveTimeParagraph = document.createElement("p");
      archiveTimeParagraph.textContent = time;
      const archiveDescriptionParagraph = document.createElement("p");
      archiveDescriptionParagraph.textContent = description;

      archiveArticle.appendChild(archiveNameParagraph);
      archiveArticle.appendChild(archiveTimeParagraph);
      archiveArticle.appendChild(archiveDescriptionParagraph);

      const archiveButton = document.createElement("button");
      archiveButton.textContent = "Archive";
      archiveButton.classList.add("archive-btn");

      archiveLi.appendChild(archiveArticle);
      archiveLi.appendChild(archiveButton);

      archiveList.appendChild(archiveLi);
      li.remove();
      addButton.disabled = false;

      archiveButton.addEventListener("click", function() {
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
