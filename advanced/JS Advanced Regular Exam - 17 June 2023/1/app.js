window.addEventListener('load', solve);

function solve() {
    let carModelElement = document.getElementById('car-model');
    let carYearElement = document.getElementById('car-year');
    let partNameElement = document.getElementById('part-name');
    let partNumberElement = document.getElementById('part-number');
    let conditionElement = document.getElementById('condition');
    let nextButtonElement = document.getElementById('next-btn');
    let partInfoElement = document.querySelector('.info-list');
    let partConfirmElement = document.querySelector('.confirm-list');
    let completeImg = document.getElementById('complete-img');
    let completeText = document.getElementById('complete-text');

    nextButtonElement.addEventListener('click', onNext);

    function onNext(e) {
        e.preventDefault();

        if (!carModelElement.value || !carYearElement.value || !partNameElement.value || !partNumberElement.value || !conditionElement.value) {
            return;
        }

        let year = Number(carYearElement.value);
        if (year < 1980 || year > 2023) {
            return;
        }

        completeImg.style.visibility = "hidden";
        completeText.textContent = "";

        let liElementInfo = document.createElement('li');
        liElementInfo.setAttribute('class', 'part-content');

        let articleElementInfo = document.createElement("article");

        let carModelParagraph = document.createElement('p');
        carModelParagraph.textContent = `Car Model: ${carModelElement.value}`;

        let carYearParagraph = document.createElement('p');
        carYearParagraph.textContent = `Car Year: ${carYearElement.value}`;

        let partNameParagraph = document.createElement('p');
        partNameParagraph.textContent = `Part Name: ${partNameElement.value}`;

        let partNumberParagraph = document.createElement('p');
        partNumberParagraph.textContent = `Part Number: ${partNumberElement.value}`;

        let conditionParagraph = document.createElement('p');
        conditionParagraph.textContent = `Condition: ${conditionElement.value}`;

        articleElementInfo.appendChild(carModelParagraph);
        articleElementInfo.appendChild(carYearParagraph);
        articleElementInfo.appendChild(partNameParagraph);
        articleElementInfo.appendChild(partNumberParagraph);
        articleElementInfo.appendChild(conditionParagraph);

        let editBtn = document.createElement("button");
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';

        let continueBtn = document.createElement("button");
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';

        liElementInfo.appendChild(articleElementInfo);
        liElementInfo.appendChild(editBtn);
        liElementInfo.appendChild(continueBtn);
        partInfoElement.appendChild(liElementInfo);

        clearInputFields();
        nextButtonElement.disabled = true;

        editBtn.addEventListener("click", () => onEdit(liElementInfo));

        continueBtn.addEventListener("click", () => onContinue(liElementInfo, articleElementInfo));
    }

    function onEdit(liElementInfo) {
        const article = liElementInfo.querySelector('article');
        const carModel = article.children[0].textContent.split(': ')[1];
        const carYear = article.children[1].textContent.split(': ')[1];
        const partName = article.children[2].textContent.split(': ')[1];
        const partNumber = article.children[3].textContent.split(': ')[1];
        const condition = article.children[4].textContent.split(': ')[1];

        carModelElement.value = carModel;
        carYearElement.value = carYear;
        partNameElement.value = partName;
        partNumberElement.value = partNumber;
        conditionElement.value = condition;

        liElementInfo.remove();
        nextButtonElement.disabled = false;
    }

    function onContinue(liElementInfo, articleElementInfo) {
        let liElementConfirm = document.createElement('li');
        liElementConfirm.setAttribute('class', 'part-content');

        // Копиране на статията
        let articleElementConfirm = articleElementInfo.cloneNode(true);

        let confirmBtn = document.createElement("button");
        confirmBtn.setAttribute('class', 'confirm-btn');
        confirmBtn.textContent = 'Confirm';

        let cancelBtn = document.createElement("button");
        cancelBtn.setAttribute('class', 'cancel-btn');
        cancelBtn.textContent = 'Cancel';

        liElementConfirm.appendChild(articleElementConfirm);
        liElementConfirm.appendChild(confirmBtn);
        liElementConfirm.appendChild(cancelBtn);
        liElementInfo.remove();

        partConfirmElement.appendChild(liElementConfirm);

        confirmBtn.addEventListener('click', () => onConfirm(liElementConfirm));
        cancelBtn.addEventListener('click', () => onCancel(liElementConfirm));
    }

    function onConfirm(liElementConfirm) {
        liElementConfirm.remove();
        completeText.textContent = `Part is Ordered!`;
        completeImg.style.visibility = "visible";
        nextButtonElement.disabled = false;
    }

    function onCancel(liElementConfirm) {
        liElementConfirm.remove();
        nextButtonElement.disabled = false;
    }

    function clearInputFields() {
        carModelElement.value = '';
        carYearElement.value = '';
        partNameElement.value = '';
        partNumberElement.value = '';
        conditionElement.value = '';
    }
}
