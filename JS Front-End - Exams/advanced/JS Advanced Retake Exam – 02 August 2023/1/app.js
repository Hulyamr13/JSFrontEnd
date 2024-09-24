window.addEventListener('load', solve);

function solve() {
    // Selecting DOM elements
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const contNumElement = document.getElementById('contact-number');
    const classTypeElement = document.getElementById('class-type');
    const classTimeElement = document.getElementById('class-time');
    const nextButtonElement = document.getElementById('next-btn');
    const previewUlElement = document.querySelector('.class-info');
    const confirmUlElement = document.querySelector('.confirm-class');
    const mainElement = document.getElementById("main");
    const bodyElement = document.getElementById("body");

    // Adding event listener to the "Next" button
    nextButtonElement.addEventListener('click', onNext);

    // Function that handles the "Next" button click event
    function onNext(e) {
        e.preventDefault();

        // Validation: check if all fields are filled
        if (nameElement.value === "" || emailElement.value === "" || contNumElement.value === "" ||
            classTypeElement.value === "" || classTimeElement.value === "") {
            return;
        }

        // Creating a new list item for the preview section
        let liElement = document.createElement("li");
        liElement.classList.add("info-item");

        let article = document.createElement("article");
        article.classList.add('personal-info');

        // Creating paragraphs for each input and adding them to the article
        let nameParagraph = createParagraph(nameElement.value);
        let emailParagraph = createParagraph(emailElement.value);
        let contNumParagraph = createParagraph(contNumElement.value);
        let classTypeParagraph = createParagraph(classTypeElement.value);
        let classTimeParagraph = createParagraph(classTimeElement.value);

        // Creating "Edit" and "Continue" buttons
        let editBtn = createButton('Edit', 'edit-btn');
        let continueBtn = createButton('Continue', 'continue-btn');

        // Appending elements to the list item
        appendChildren(article, [nameParagraph, emailParagraph, contNumParagraph, classTypeParagraph, classTimeParagraph]);
        appendChildren(liElement, [article, editBtn, continueBtn]);
        previewUlElement.appendChild(liElement);

        // Saving the values for editing later
        let editedValues = {
            name: nameElement.value,
            email: emailElement.value,
            contact: contNumElement.value,
            classType: classTypeElement.value,
            classTime: classTimeElement.value
        };

        // Clearing the input fields and disabling the "Next" button
        clearInputs();
        nextButtonElement.disabled = true;

        // Adding event listeners to the "Edit" and "Continue" buttons
        editBtn.addEventListener("click", () => onEdit(liElement, editedValues));
        continueBtn.addEventListener("click", () => onContinue(liElement, article));
    }

    // Function to handle "Edit" button click
    function onEdit(liElement, editedValues) {
        // Filling the inputs with the previously saved values
        nameElement.value = editedValues.name;
        emailElement.value = editedValues.email;
        contNumElement.value = editedValues.contact;
        classTypeElement.value = editedValues.classType;
        classTimeElement.value = editedValues.classTime;

        // Enabling the "Next" button and removing the list item from the preview section
        nextButtonElement.disabled = false;
        liElement.remove();
    }

    // Function to handle "Continue" button click
    function onContinue(liElement, article) {
        let liElementContinue = document.createElement("li");
        liElementContinue.classList.add("continue-info");

        // Reusing the article from the preview
        let articleContinue = article;

        // Creating "Cancel" and "Confirm" buttons
        let cancelBtn = createButton('Cancel', 'cancel-btn');
        let confirmBtn = createButton('Confirm', 'confirm-btn');

        // Appending elements to the new list item
        appendChildren(liElementContinue, [articleContinue, cancelBtn, confirmBtn]);
        confirmUlElement.appendChild(liElementContinue);

        // Removing the old list item from the preview
        liElement.remove();

        // Adding event listeners to the "Cancel" and "Confirm" buttons
        cancelBtn.addEventListener("click", () => onCancel(liElementContinue));
        confirmBtn.addEventListener("click", onConfirm);
    }

    // Function to handle "Cancel" button click
    function onCancel(liElementContinue) {
        liElementContinue.remove();
        nextButtonElement.disabled = false;
    }

    // Function to handle "Confirm" button click
    function onConfirm() {
        // Removing the main content and displaying the thank-you message
        mainElement.remove();

        let header1 = document.createElement("h1");
        header1.id = "thank-you";
        header1.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!";

        let backBtn = document.createElement("button");
        backBtn.id = "done-btn";
        backBtn.textContent = "Done";

        bodyElement.appendChild(header1);
        bodyElement.appendChild(backBtn);

        // Reloading the page when the "Done" button is clicked
        backBtn.addEventListener("click", () => location.reload());
    }

    // Utility function to create a paragraph
    function createParagraph(text) {
        let paragraph = document.createElement("p");
        paragraph.textContent = text;
        return paragraph;
    }

    // Utility function to create a button
    function createButton(text, className) {
        let button = document.createElement("button");
        button.classList.add(className);
        button.textContent = text;
        return button;
    }

    // Utility function to append multiple children to an element
    function appendChildren(parent, children) {
        children.forEach(child => parent.appendChild(child));
    }

    // Utility function to clear input fields
    function clearInputs() {
        nameElement.value = "";
        emailElement.value = "";
        contNumElement.value = "";
        classTypeElement.value = "";
        classTimeElement.value = "";
    }
}
