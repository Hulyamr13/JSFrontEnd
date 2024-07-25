function attachGradientEvents() {
    const gradient = document.querySelector('#gradient');
    const result = document.querySelector('#result');

    gradient.addEventListener('mousemove', (e) => {
        const percent = Math.floor((e.offsetX / gradient.clientWidth) * 100);
        result.textContent = `${percent}%`;
    });

    gradient.addEventListener('mouseout', () => {
        result.textContent = '';
    });
}
