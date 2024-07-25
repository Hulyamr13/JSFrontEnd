function attachEventsListeners() {
  const units = {
    'm': 1,
    'km': 1000,
    'cm': 0.01,
    'mm': 0.001,
    'mi': 1609.34,
    'yrd': 0.9144,
    'ft': 0.3048,
    'in': 0.0254,
  };

  document.querySelector('#convert').addEventListener('click', () => {
    const inputValueInMeters = parseFloat(document.querySelector('#inputDistance').value) * units[document.querySelector('#inputUnits').value];
    document.querySelector('#outputDistance').value = inputValueInMeters / units[document.querySelector('#outputUnits').value];
  });
}
