function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        const gradientPower = event.offsetX / (gradient.clientWidth - 1);
        const percentPower = Math.floor(gradientPower * 100);
        result.textContent = `${percentPower}%`;
    }

    function gradientOut() {
        result.textContent = '';
    }
}
