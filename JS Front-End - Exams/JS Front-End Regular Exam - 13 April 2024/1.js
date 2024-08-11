function solve(commands) {
    let num = Number(commands.shift());
    let heroes = {};

    for (let i = 0; i < num; i++) {
        let parts = commands[i].split(' ');
        let name = parts[0];
        let hp = Number(parts[1]);
        let bullets = Number(parts[2]);
        heroes[name] = { hp, bullets };
    }

    for (let command of commands) {
        if (command === 'Ride Off Into Sunset') {
            for (let name in heroes) {
                let { hp, bullets } = heroes[name];
                if (hp > 0) {
                    console.log(name);
                    console.log(` HP: ${hp}`);
                    console.log(` Bullets: ${bullets}`);
                }
            }
            break;
        }

        let parts = command.split(' - ');
        let action = parts[0];

        if (action === 'FireShot') {
            let charName = parts[1];
            let target = parts[2];
            if (heroes[charName].bullets > 0) {
                heroes[charName].bullets--;
                console.log(`${charName} has successfully hit ${target} and now has ${heroes[charName].bullets} bullets!`);
            } else {
                console.log(`${charName} doesn't have enough bullets to shoot at ${target}!`);
            }
        } else if (action === 'TakeHit') {
            let charName = parts[1];
            let damage = Number(parts[2]);
            let attacker = parts[3];
            heroes[charName].hp -= damage;
            if (heroes[charName].hp > 0) {
                console.log(`${charName} took a hit for ${damage} HP from ${attacker} and now has ${heroes[charName].hp} HP!`);
            } else {
                console.log(`${charName} was gunned down by ${attacker}!`);
                delete heroes[charName];
            }
        } else if (action === 'Reload') {
            let charName = parts[1];
            if (heroes[charName].bullets < 6) {
                let bulletsReloaded = 6 - heroes[charName].bullets;
                heroes[charName].bullets = 6;
                console.log(`${charName} reloaded ${bulletsReloaded} bullets!`);
            } else {
                console.log(`${charName}'s pistol is fully loaded!`);
            }
        } else if (action === 'PatchUp') {
            let charName = parts[1];
            let amount = Number(parts[2]);
            if (heroes[charName].hp < 100) {
                let hpRecovered = Math.min(100 - heroes[charName].hp, amount);
                heroes[charName].hp += hpRecovered;
                console.log(`${charName} patched up and recovered ${hpRecovered} HP!`);
            } else {
                console.log(`${charName} is in full health!`);
            }
        }
    }
}

solve([
    "2",
    "Gus 100 0",
    "Walt 100 6",
    "FireShot - Gus - Bandit",
    "TakeHit - Gus - 80 - Bandit",
    "Reload - Walt",
    "Ride Off Into Sunset"
]);

solve([
    "2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
    "TakeHit - Walt - 30 - Bandit",
    "PatchUp - Walt - 20",
    "Reload - Jesse",
    "Ride Off Into Sunset"
]);

solve([
    "2",
    "Gus 100 4",
    "Walt 100 5",
    "FireShot - Gus - Bandit",
    "TakeHit - Walt - 100 - Bandit",
    "Reload - Gus",
    "Ride Off Into Sunset"
]);
