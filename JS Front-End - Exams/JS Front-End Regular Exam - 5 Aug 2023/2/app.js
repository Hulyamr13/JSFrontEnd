window.addEventListener("load", solve);

function solve() {
    const scholarshipInput = {
        nameStudent: document.querySelector('#student'),
        university: document.querySelector('#university'),
        score: document.querySelector('#score'),
    };

    const scholarship = {
        nextBtn: document.querySelector('#next-btn'),
        previewList: document.querySelector('#preview-list'),
        candidatesList: document.querySelector('#candidates-list'),
    };

    const clearInput = () => {
        Object.values(scholarshipInput).forEach(input => input.value = '');
    };

    const checkCorrectInput = () => {
        return Object.values(scholarshipInput).every(input => input.value.trim() !== '');
    };

    const editFunc = (e) => {
        const currentApplication = e.target.parentNode;
        const name = currentApplication.querySelector('h4').textContent;
        const university = currentApplication.querySelector('p').textContent.replace('University: ', '');
        const score = currentApplication.querySelectorAll('p')[1].textContent.replace('Score: ', '');

        scholarshipInput.nameStudent.value = name;
        scholarshipInput.university.value = university;
        scholarshipInput.score.value = score;

        currentApplication.remove();
        scholarship.nextBtn.disabled = false;
    };

    const applyFunc = (e) => {
        const currentApplication = e.target.parentNode;
        const buttons = Array.from(currentApplication.querySelectorAll('button'));
        buttons.forEach(button => button.remove());

        scholarship.previewList.removeChild(currentApplication);
        scholarship.candidatesList.appendChild(currentApplication);

        scholarship.nextBtn.disabled = false;
    };

    const nextBtnFunc = () => {
        if (!checkCorrectInput()) return;

        const newListItem = document.createElement('li');
        newListItem.className = 'application';

        const article = document.createElement('article');
        const name = document.createElement('h4');
        name.textContent = scholarshipInput.nameStudent.value;
        const university = document.createElement('p');
        university.textContent = `University: ${scholarshipInput.university.value}`;
        const score = document.createElement('p');
        score.textContent = `Score: ${scholarshipInput.score.value}`;

        article.appendChild(name);
        article.appendChild(university);
        article.appendChild(score);

        newListItem.appendChild(article);

        const editBtn = document.createElement('button');
        editBtn.className = 'action-btn edit';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', editFunc);
        newListItem.appendChild(editBtn);

        const applyBtn = document.createElement('button');
        applyBtn.className = 'action-btn apply';
        applyBtn.textContent = 'Apply';
        applyBtn.addEventListener('click', applyFunc);
        newListItem.appendChild(applyBtn);

        scholarship.previewList.appendChild(newListItem);

        clearInput();
        scholarship.nextBtn.disabled = true;
    };

    scholarship.nextBtn.addEventListener('click', nextBtnFunc);
}
