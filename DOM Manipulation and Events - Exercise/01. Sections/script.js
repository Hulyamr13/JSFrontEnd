function create(words) {
  const mainDiv = document.getElementById('content');

  mainDiv.innerHTML = words.map(word =>
    `<div><p style="display:none">${word}</p></div>`
  ).join('');

  mainDiv.querySelectorAll('div').forEach(div =>
    div.addEventListener('click', () =>
      div.querySelector('p').style.display = 'block'
    )
  );
}
