function attachEventsListeners() {
    const conversionFactors = { days: 1, hours: 24, minutes: 1440, seconds: 86400 };

    document.querySelectorAll('input[type="button"]').forEach(button => {
        button.addEventListener('click', () => {
            const unit = button.id.replace('Btn', '');
            const value = Number(document.getElementById(unit).value);

            if (!isNaN(value)) {
                const factor = value / conversionFactors[unit];

                document.querySelectorAll('input[type="text"]').forEach(input => {
                    input.value = factor * conversionFactors[input.id];
                });
            }
        });
    });
}
