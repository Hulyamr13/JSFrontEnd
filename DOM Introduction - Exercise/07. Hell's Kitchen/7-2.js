function solve() {
  document.querySelector('#btnSend').addEventListener('click', () => {
    const inputArray = JSON.parse(document.querySelector('textarea').value);
    const restaurants = {};

    inputArray.forEach(info => {
      const [restaurant, workers] = info.split(' - ');
      restaurants[restaurant] = (restaurants[restaurant] || [])
        .concat(workers.split(', ').map(worker => {
          const [name, wage] = worker.split(' ');
          return [name, Number(wage)];
        }));
    });

    const bestRestaurant = Object.entries(restaurants)
      .map(([name, staff]) => ({
        name,
        avgWage: staff.reduce((sum, [, wage]) => sum + wage, 0) / staff.length,
        staff: staff.sort(([, wageA], [, wageB]) => wageB - wageA)
      }))
      .sort((a, b) => b.avgWage - a.avgWage)[0];

    document.querySelector('#bestRestaurant p').textContent =
      `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgWage.toFixed(2)} Best Salary: ${bestRestaurant.staff[0][1].toFixed(2)}`;
    document.querySelector('#workers p').textContent =
      bestRestaurant.staff.map(([name, wage]) => `Name: ${name} With Salary: ${wage}`).join(' ');
  });
}
