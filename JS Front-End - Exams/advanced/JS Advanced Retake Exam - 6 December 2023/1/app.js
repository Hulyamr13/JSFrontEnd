window.addEventListener('load', solve);

function solve() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const placeElement = document.getElementById('place');
    const eventElement = document.getElementById('event-name');
    const emailElement = document.getElementById('email');
    const addButtonElement = document.getElementById('add-btn');
    const checkListElement = document.getElementById('check-list');
    const upcomingListElement = document.getElementById('upcoming-list');
    const finishedListElement = document.getElementById('finished-list');
    const clearBtn = document.getElementById('clear');

    addButtonElement.addEventListener('click', onNext);

    function onNext(e) {
        e.preventDefault();
        if (!timeElement.value || !placeElement.value || !eventElement.value || !emailElement.value || !dateElement.value) {
            return;
        }

        const liElementInfo = document.createElement('li');
        liElementInfo.setAttribute('class', 'event-content');

        const articleElementInfo = document.createElement("article");

        const time = document.createElement('p');
        time.textContent = `Begins: ${dateElement.value} at: ${timeElement.value}`;

        const place = document.createElement('p');
        place.textContent = `In: ${placeElement.value}`;

        const event = document.createElement('p');
        event.textContent = `Event: ${eventElement.value}`;

        const email = document.createElement('p');
        email.textContent = `Contact: ${emailElement.value}`;

        const editBtn = document.createElement("button");
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';

        const continueBtn = document.createElement("button");
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';

        articleElementInfo.appendChild(time);
        articleElementInfo.appendChild(place);
        articleElementInfo.appendChild(event);
        articleElementInfo.appendChild(email);

        liElementInfo.appendChild(articleElementInfo);
        liElementInfo.appendChild(editBtn);
        liElementInfo.appendChild(continueBtn);

        checkListElement.appendChild(liElementInfo);

        const editedTime = timeElement.value;
        const editedDate = dateElement.value;
        const editedPlace = placeElement.value;
        const editedEvent = eventElement.value;
        const editedEmail = emailElement.value;

        timeElement.value = '';
        dateElement.value = '';
        placeElement.value = '';
        eventElement.value = '';
        emailElement.value = '';

        addButtonElement.disabled = true;

        editBtn.addEventListener("click", onEdit);

        function onEdit() {
            timeElement.value = editedTime;
            dateElement.value = editedDate;
            placeElement.value = editedPlace;
            eventElement.value = editedEvent;
            emailElement.value = editedEmail;

            liElementInfo.remove();
            addButtonElement.disabled = false;
        }

        continueBtn.addEventListener("click", onContinue);

        function onContinue() {
            const liElementConfirm = document.createElement('li');
            liElementConfirm.setAttribute('class', 'event-content');

            const articleElementContinue = articleElementInfo.cloneNode(true);

            const confirmBtn = document.createElement("button");
            confirmBtn.setAttribute('class', 'finished-btn');
            confirmBtn.textContent = 'Move to Finished';

            liElementConfirm.appendChild(articleElementContinue);
            liElementConfirm.appendChild(confirmBtn);
            liElementInfo.remove();

            upcomingListElement.appendChild(liElementConfirm);
            addButtonElement.disabled = false;

            confirmBtn.addEventListener('click', onConfirm);

            function onConfirm() {
                const liElementResolved = document.createElement('li');
                liElementResolved.setAttribute('class', 'event-content');

                const articleElementResolved = articleElementContinue.cloneNode(true);

                liElementResolved.appendChild(articleElementResolved);
                liElementConfirm.remove();

                finishedListElement.appendChild(liElementResolved);
            }
        }
    }

    clearBtn.addEventListener('click', () => {
        finishedListElement.innerHTML = '';
    });
}
