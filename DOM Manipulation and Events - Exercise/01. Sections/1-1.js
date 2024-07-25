function create(words) {
  const mainDiv = document.getElementById('content');

  mainDiv.innerHTML = '';

  words.forEach(word => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = word;
    p.style.display = 'none';
    div.appendChild(p);
    div.addEventListener('click', () => p.style.display = 'block');
    mainDiv.appendChild(div);
  });
}
