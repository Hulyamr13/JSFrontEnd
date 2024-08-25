const BASE_URL = 'http://localhost:3030/jsonstore/appointments/';

const loadBtn = document.getElementById('load-appointments');
const appointmentsList = document.getElementById('appointments-list');
const addBtn = document.getElementById('add-appointment');
const editBtn = document.getElementById('edit-appointment');
const carModelInput = document.getElementById('car-model');
const carServiceSelect = document.getElementById('car-service');
const dateInput = document.getElementById('date');

let editAppointmentId = null;

loadBtn.addEventListener('click', loadAppointments);
addBtn.addEventListener('click', addAppointment);
editBtn.addEventListener('click', editAppointment);

async function loadAppointments() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    appointmentsList.innerHTML = '';

    Object.values(data).forEach((appointment) => {
      const appointmentItem = createAppointmentItem(appointment);
      appointmentsList.appendChild(appointmentItem);
    });
  } catch (error) {
    console.error('Failed to load appointments', error);
  }
}

function createAppointmentItem({ _id, model, service, date }) {
  const li = document.createElement('li');
  li.className = 'appointment';

  const modelElem = document.createElement('h2');
  modelElem.textContent = model;
  li.appendChild(modelElem);

  const dateElem = document.createElement('h3');
  dateElem.textContent = date;
  li.appendChild(dateElem);

  const serviceElem = document.createElement('h3');
  serviceElem.textContent = service;
  li.appendChild(serviceElem);

  const buttonDiv = document.createElement('div');
  buttonDiv.className = 'buttons-appointment';

  const changeBtn = document.createElement('button');
  changeBtn.className = 'change-btn';
  changeBtn.textContent = 'Change';
  changeBtn.addEventListener('click', () => populateFormForEdit(_id, model, service, date));
  buttonDiv.appendChild(changeBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => deleteAppointment(_id));
  buttonDiv.appendChild(deleteBtn);

  li.appendChild(buttonDiv);

  return li;
}

function populateFormForEdit(id, model, service, date) {
  editAppointmentId = id;
  carModelInput.value = model;
  carServiceSelect.value = service;
  dateInput.value = date;

  addBtn.disabled = true;
  editBtn.disabled = false;
}

async function addAppointment() {
  const model = carModelInput.value.trim();
  const service = carServiceSelect.value;
  const date = dateInput.value;

  if (model && service && date) {
    const newAppointment = { model, service, date };

    try {
      await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAppointment)
      });

      loadAppointments();
      clearForm();
    } catch (error) {
      console.error('Failed to add appointment', error);
    }
  }
}

async function editAppointment() {
  if (!editAppointmentId) return;

  const model = carModelInput.value.trim();
  const service = carServiceSelect.value;
  const date = dateInput.value;

  if (model && service && date) {
    const updatedAppointment = { model, service, date };

    try {
      await fetch(`${BASE_URL}${editAppointmentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedAppointment)
      });

      loadAppointments();
      clearForm();
      editAppointmentId = null;

      addBtn.disabled = false;
      editBtn.disabled = true;
    } catch (error) {
      console.error('Failed to edit appointment', error);
    }
  }
}

async function deleteAppointment(id) {
  try {
    await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE'
    });

    loadAppointments();
  } catch (error) {
    console.error('Failed to delete appointment', error);
  }
}

function clearForm() {
  carModelInput.value = '';
  carServiceSelect.value = '';
  dateInput.value = '';
}
