window.addEventListener("load", solve);

function solve() {
    const API_URL = 'http://localhost:3030/jsonstore/tasks/';
    const dailyCalorieCounter = {
        inputFields: {
            food: document.querySelector('#food'),
            time: document.querySelector('#time'),
            calories: document.querySelector('#calories'),
        },
        form: document.querySelector('form'),
        loadMealBtn: document.querySelector('#load-meals'),
        editMealBtn: document.querySelector('#edit-meal'),
        addMealBtn: document.querySelector('#add-meal'),
        listMeals: document.querySelector('#list'),
        totalMeals: document.querySelector('h2'),
        id: null
    };

    const handlerChangeBtn = (e) => {
        dailyCalorieCounter.id = e.target.id;
        const data = [...e.target.parentNode.parentNode.querySelectorAll('h2, h3')].map(x => x.textContent);
        Object.values(dailyCalorieCounter.inputFields).forEach((x, i) => x.value = data[i]);
        dailyCalorieCounter.editMealBtn.disabled = false;
        dailyCalorieCounter.addMealBtn.disabled = true;
    };

    const handleLoadMealBtn = () => {
        dailyCalorieCounter.listMeals.innerHTML = '';
        fetch(API_URL)
            .then(response => response.json())
            .then(meals => {
                Object.values(meals).forEach(meal => {
                    const mealDiv = document.createElement('div');
                    mealDiv.classList.add('meal');

                    const foodTitle = document.createElement('h2');
                    foodTitle.textContent = meal.food;
                    mealDiv.appendChild(foodTitle);

                    const timeInfo = document.createElement('h3');
                    timeInfo.textContent = meal.time;
                    mealDiv.appendChild(timeInfo);

                    const caloriesInfo = document.createElement('h3');
                    caloriesInfo.textContent = meal.calories;
                    mealDiv.appendChild(caloriesInfo);

                    const buttonsDiv = document.createElement('div');
                    buttonsDiv.id = 'meal-buttons';

                    const changeBtn = document.createElement('button');
                    changeBtn.classList.add('change-meal');
                    changeBtn.id = meal._id;
                    changeBtn.textContent = 'Change';
                    changeBtn.addEventListener('click', handlerChangeBtn);
                    buttonsDiv.appendChild(changeBtn);

                    const deleteBtn = document.createElement('button');
                    deleteBtn.classList.add('delete-meal');
                    deleteBtn.id = meal._id;
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.addEventListener('click', handlerDeleteBtn);
                    buttonsDiv.appendChild(deleteBtn);

                    mealDiv.appendChild(buttonsDiv);
                    dailyCalorieCounter.listMeals.appendChild(mealDiv);
                });
                dailyCalorieCounter.totalMeals.textContent = `Today Meals: ${Object.keys(meals).length}`;
                dailyCalorieCounter.editMealBtn.disabled = true;
            });
    };

    const handlerDeleteBtn = (e) => {
        const id = e.target.id;
        fetch(`${API_URL}${id}`, { method: 'DELETE' })
            .then(() => handleLoadMealBtn());
    };

    const handleAddMealBtn = () => {
        const food = dailyCalorieCounter.inputFields.food.value.trim();
        const time = dailyCalorieCounter.inputFields.time.value.trim();
        const calories = dailyCalorieCounter.inputFields.calories.value.trim();

        if (!food || !time || !calories || isNaN(calories)) {
            alert("Please fill in all fields with valid data.");
            return;
        }

        const mealData = { food, time, calories };
        fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mealData)
        }).then(() => {
            handleLoadMealBtn();
            dailyCalorieCounter.form.reset();
            dailyCalorieCounter.addMealBtn.disabled = false;
            dailyCalorieCounter.editMealBtn.disabled = true;
        });
    };

    const handleEditMealBtn = () => {
        if (!dailyCalorieCounter.id) return;

        const food = dailyCalorieCounter.inputFields.food.value.trim();
        const time = dailyCalorieCounter.inputFields.time.value.trim();
        const calories = dailyCalorieCounter.inputFields.calories.value.trim();

        // Validation
        if (!food || !time || !calories || isNaN(calories)) {
            alert("Please fill in all fields with valid data.");
            return;
        }

        const mealData = { food, time, calories, _id: dailyCalorieCounter.id };
        fetch(`${API_URL}${dailyCalorieCounter.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mealData)
        }).then(() => {
            dailyCalorieCounter.editMealBtn.disabled = true;
            dailyCalorieCounter.addMealBtn.disabled = false;
            handleLoadMealBtn();
            dailyCalorieCounter.form.reset();
        });
    };

    dailyCalorieCounter.loadMealBtn.addEventListener('click', handleLoadMealBtn);
    dailyCalorieCounter.addMealBtn.addEventListener('click', handleAddMealBtn);
    dailyCalorieCounter.editMealBtn.addEventListener('click', handleEditMealBtn);
}
