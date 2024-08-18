document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'http://localhost:3030/jsonstore/matches';
  const loadMatchesBtn = document.getElementById('load-matches');
  const addMatchBtn = document.getElementById('add-match');
  const editMatchBtn = document.getElementById('edit-match');
  const hostInput = document.getElementById('host');
  const scoreInput = document.getElementById('score');
  const guestInput = document.getElementById('guest');
  const matchList = document.getElementById('list');

  let editMatchId = null;

  loadMatchesBtn.addEventListener('click', loadMatches);
  addMatchBtn.addEventListener('click', addMatch);
  editMatchBtn.addEventListener('click', editMatch);

  async function loadMatches() {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Failed to load matches');
      const data = await response.json();
      renderMatches(Object.values(data));
      toggleButtons(true);
    } catch (error) {
      showError('Error loading matches.');
    }
  }

  function renderMatches(matches) {
    matchList.innerHTML = '';
    matches.forEach(match => {
      const matchItem = document.createElement('li');
      matchItem.className = 'match';
      matchItem.innerHTML = `
        <div class="info">
          <p>${match.host}</p>
          <p>${match.score}</p>
          <p>${match.guest}</p>
        </div>
        <div class="btn-wrapper">
          <button class="change-btn" data-id="${match._id}">Change</button>
          <button class="delete-btn" data-id="${match._id}">Delete</button>
        </div>
      `;
      matchList.appendChild(matchItem);
    });
  }

  async function addMatch() {
    const match = getMatchFromInputs();

    if (!isValidMatch(match)) return;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(match)
      });
      if (!response.ok) throw new Error('Failed to add match');
      clearInputs();
      await loadMatches();
    } catch (error) {
      showError('Error adding match.');
    }
  }

  async function editMatch() {
    if (editMatchId === null) {
      alert('No match selected for editing');
      return;
    }

    const match = getMatchFromInputs();

    if (!isValidMatch(match)) return;

    try {
      const response = await fetch(`${apiUrl}/${editMatchId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(match)
      });
      if (!response.ok) throw new Error('Failed to edit match');
      editMatchId = null;
      clearInputs();
      await loadMatches();
      toggleButtons(true);
    } catch (error) {
      showError('Error editing match.');
    }
  }

  async function deleteMatch(id) {
    try {
      const response = await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete match');
      await loadMatches();
    } catch (error) {
      showError('Error deleting match.');
    }
  }

  function clearInputs() {
    hostInput.value = '';
    scoreInput.value = '';
    guestInput.value = '';
  }

  function toggleButtons(isLoad) {
    addMatchBtn.disabled = !isLoad;
    editMatchBtn.disabled = isLoad;
  }

  function getMatchFromInputs() {
    return {
      host: hostInput.value.trim(),
      score: scoreInput.value.trim(),
      guest: guestInput.value.trim()
    };
  }

  function isValidMatch(match) {
    if (!match.host || !match.score || !match.guest) {
      alert('All fields are required!');
      return false;
    }
    return true;
  }

  function showError(message) {
    console.error(message);
    alert(message);
  }

  matchList.addEventListener('click', async (e) => {
    if (e.target.classList.contains('change-btn')) {
      const matchItem = e.target.closest('.match');
      const host = matchItem.querySelector('.info p:nth-child(1)').textContent;
      const score = matchItem.querySelector('.info p:nth-child(2)').textContent;
      const guest = matchItem.querySelector('.info p:nth-child(3)').textContent;
      editMatchId = e.target.dataset.id;
      hostInput.value = host;
      scoreInput.value = score;
      guestInput.value = guest;
      toggleButtons(false);
    } else if (e.target.classList.contains('delete-btn')) {
      await deleteMatch(e.target.dataset.id);
    }
  });
});
