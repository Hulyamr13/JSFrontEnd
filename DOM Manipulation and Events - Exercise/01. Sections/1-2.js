function create(words) {
  const mainDiv = document.getElementById('content');

  function createElement(word) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = word;
    p.style.display = 'none';
    div.appendChild(p);
    div.addEventListener('click', () => p.style.display = 'block');
    return div;
  }

  mainDiv.innerHTML = '';
  words.map(createElement).forEach(div => mainDiv.appendChild(div));
}
