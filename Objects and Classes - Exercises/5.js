function createHeroRegister(input) {
    let heroes = [];

    for (let line of input) {
        let [heroName, heroLevelStr, itemsString] = line.split(' / ');

        let heroLevel = Number(heroLevelStr);

        let items = itemsString ? itemsString.split(', ') : [];

        let hero = {
            name: heroName,
            level: heroLevel,
            items: items
        };

        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    });
}


// Test cases
createHeroRegister([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

console.log(); // Blank line for separation

createHeroRegister([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);
