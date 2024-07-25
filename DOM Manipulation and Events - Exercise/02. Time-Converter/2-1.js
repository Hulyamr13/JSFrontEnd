function attachEventsListeners() {
    const conversionFactors = { days: 1, hours: 24, minutes: 1440, seconds: 86400 };

    document.querySelectorAll('input[type="button"]').forEach(button => {
        button.addEventListener('click', () => {
            const unit = button.id.replace('Btn', '');
            const value = parseFloat(document.getElementById(unit).value);

            if (!isNaN(value)) {
                const factor = value / conversionFactors[unit];
                document.querySelectorAll('input[type="text"]').forEach(input => {
                    const inputUnit = input.id;
                    input.value = conversionFactors[inputUnit] ? factor * conversionFactors[inputUnit] : input.value;
                });
            }
        });
    });
}
