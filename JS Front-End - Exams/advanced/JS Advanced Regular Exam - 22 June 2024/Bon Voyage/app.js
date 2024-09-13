window.addEventListener('load', solve);

function solve() {
    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const dateInElement = document.getElementById('from-date');
    const dateOutElement = document.getElementById('to-date');
    const nextBtnElement = document.getElementById('next-btn');
    const infoListElement = document.querySelector('.info-list');
    const confirmListElement = document.querySelector('.confirm-list');
    const statusElement = document.getElementById('status');
    const okElement = document.getElementById('ok');

    nextBtnElement.addEventListener('click', onNext);

    function onNext(e) {
        e.preventDefault();

        if (!firstNameElement.value || !lastNameElement.value ||
            !dateInElement.value || !dateOutElement.value ||
            new Date(dateInElement.value) >= new Date(dateOutElement.value)) {
            return;
        }

        const liElementInfo = document.createElement('li');
        liElementInfo.classList.add('vacation-content');

        const articleElementInfo = document.createElement('article');
        const fullName = document.createElement('h3');
        fullName.textContent = `Name: ${firstNameElement.value} ${lastNameElement.value}`;

        const dateIn = document.createElement('p');
        dateIn.textContent = `From date: ${dateInElement.value}`;

        const dateOut = document.createElement('p');
        dateOut.textContent = `To date: ${dateOutElement.value}`;

        const editBtn = document.createElement("button");
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';

        const continueBtn = document.createElement("button");
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue';

        articleElementInfo.appendChild(fullName);
        articleElementInfo.appendChild(dateIn);
        articleElementInfo.appendChild(dateOut);

        liElementInfo.appendChild(articleElementInfo);
        liElementInfo.appendChild(editBtn);
        liElementInfo.appendChild(continueBtn);

        infoListElement.appendChild(liElementInfo);

        const editFirstName = firstNameElement.value;
        const editLastName = lastNameElement.value;
        const editDateIn = dateInElement.value;
        const editDateOut = dateOutElement.value;

        firstNameElement.value = "";
        lastNameElement.value = "";
        dateInElement.value = "";
        dateOutElement.value = "";

        nextBtnElement.disabled = true;

        editBtn.addEventListener('click', () => onEdit(liElementInfo, editFirstName, editLastName, editDateIn, editDateOut));
        continueBtn.addEventListener('click', () => onContinue(liElementInfo, articleElementInfo));
    }

    function onEdit(liElementInfo, firstName, lastName, dateIn, dateOut) {
        firstNameElement.value = firstName;
        lastNameElement.value = lastName;
        dateInElement.value = dateIn;
        dateOutElement.value = dateOut;

        liElementInfo.remove();
        nextBtnElement.disabled = false;
    }

    function onContinue(liElementInfo, articleElementInfo) {
        const liElementConfirm = document.createElement('li');
        liElementConfirm.classList.add('vacation-content');

        const confirmBtn = document.createElement("button");
        confirmBtn.classList.add('confirm-btn');
        confirmBtn.textContent = 'Confirm';

        const cancelBtn = document.createElement("button");
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'Cancel';

        liElementConfirm.appendChild(articleElementInfo);
        liElementConfirm.appendChild(confirmBtn);
        liElementConfirm.appendChild(cancelBtn);

        liElementInfo.remove();
        confirmListElement.appendChild(liElementConfirm);

        confirmBtn.addEventListener('click', () => onConfirm(liElementConfirm));
        cancelBtn.addEventListener('click', () => onCancel(liElementConfirm));
    }

    function onConfirm(liElementConfirm) {
        liElementConfirm.remove();
        nextBtnElement.disabled = false;
        statusElement.classList.add('vacation-confirmed');
        statusElement.textContent = 'Vacation Requested';
    }

    function onCancel(liElementConfirm) {
        liElementConfirm.remove();
        nextBtnElement.disabled = false;
        statusElement.classList.add('vacation-cancelled');
        statusElement.textContent = 'Cancelled Vacation';
    }

    okElement.addEventListener('click', () => window.location.reload());
}
