document.getElementById('more').addEventListener('click', function(event) {
    event.preventDefault();
    const link = event.target;
    const text = document.getElementById('text');

    text.style.display = 'inline';
    link.style.display = 'none';
});
