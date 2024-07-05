function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const loadCourse = document.getElementById("load-course");
    const list = document.getElementById("list");
    const addCourseBtn = document.getElementById('add-course');
    const editCourseBtn = document.getElementById('edit-course');
    const courseTitle = document.getElementById("course-name");
    const courseType = document.getElementById('course-type');
    const courseDescr = document.getElementById("description");
    const courseTeacherName = document.getElementById("teacher-name");

    loadCourse.addEventListener("click", getData);
    addCourseBtn.addEventListener("click", sendData);

    function getData() {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(data => displayCourses(data))
            .catch(error => console.log(error));
    }

    function displayCourses(data) {
        list.innerHTML = '';
        Object.values(data).forEach(course => {
            let divEl = document.createElement("div");
            divEl.className = 'container';
            divEl.id = course._id;
            divEl.innerHTML = `
                <h2>${course.title}</h2>
                <h3>${course.teacher}</h3>
                <h3>${course.type}</h3>
                <h4>${course.description}</h4>
                <button class="edit-btn">Edit Course</button>
                <button class="finish-btn">Finish Course</button>
            `;

            divEl.querySelector('.edit-btn').addEventListener("click", () => editCourse(course));
            divEl.querySelector('.finish-btn').addEventListener("click", () => finishCourse(course._id));

            list.appendChild(divEl);
        });
    }

    function editCourse(course) {
        courseTitle.value = course.title;
        courseType.value = course.type;
        courseDescr.value = course.description;
        courseTeacherName.value = course.teacher;

        editCourseBtn.disabled = false;
        addCourseBtn.disabled = true;

        editCourseBtn.addEventListener("click", (e) => {
            e.preventDefault();
            editData(course._id);
        });
    }

    function finishCourse(courseId) {
        fetch(BASE_URL + courseId, {
            method: 'DELETE'
        })
        .then(() => getData())
        .catch(error => console.log(error));
    }

    function sendData(e) {
        e.preventDefault();
        if (['Long', 'Medium', 'Short'].includes(courseType.value)) {
            fetch(BASE_URL, {
                method: "POST",
                body: JSON.stringify({
                    title: courseTitle.value,
                    type: courseType.value,
                    description: courseDescr.value,
                    teacher: courseTeacherName.value,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(() => {
                clear();
                getData();
            })
            .catch(error => console.log(error));
        } else {
            alert('Invalid course type. Please enter Long, Medium, or Short.');
        }
    }

    function editData(courseId) {
        fetch(BASE_URL + courseId, {
            method: "PATCH",
            body: JSON.stringify({
                title: courseTitle.value,
                type: courseType.value,
                description: courseDescr.value,
                teacher: courseTeacherName.value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(() => {
            clear();
            getData();
        })
        .catch(error => console.log(error));
    }

    function clear() {
        courseTitle.value = '';
        courseType.value = '';
        courseDescr.value = '';
        courseTeacherName.value = '';

        editCourseBtn.disabled = true;
        addCourseBtn.disabled = false;
    }
}

solve();
