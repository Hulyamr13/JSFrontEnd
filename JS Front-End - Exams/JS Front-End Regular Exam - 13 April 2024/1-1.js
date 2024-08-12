function solve(commands) {
    let num = Number(commands.shift());
    let heroes = {};

    for (let i = 0; i < num; i++) {
        let [name, hp, bullets] = commands[i].split(' ');
        heroes[name] = { hp: Number(hp), bullets: Number(bullets) };
    }

    function executeCommand([action, charName, ...args]) {
        switch (action) {
            case 'FireShot':
                heroes[charName].bullets > 0
                    ? (heroes[charName].bullets--, console.log(`${charName} has successfully hit ${args[0]} and now has ${heroes[charName].bullets} bullets!`))
                    : console.log(`${charName} doesn't have enough bullets to shoot at ${args[0]}!`);
                break;
            case 'TakeHit':
                heroes[charName].hp -= Number(args[0]);
                heroes[charName].hp > 0
                    ? console.log(`${charName} took a hit for ${args[0]} HP from ${args[1]} and now has ${heroes[charName].hp} HP!`)
                    : (console.log(`${charName} was gunned down by ${args[1]}!`), delete heroes[charName]);
                break;
            case 'Reload':
                let reloaded = Math.min(6 - heroes[charName].bullets, 6);
                heroes[charName].bullets += reloaded;
                console.log(reloaded > 0 ? `${charName} reloaded ${reloaded} bullets!` : `${charName}'s pistol is fully loaded!`);
                break;
            case 'PatchUp':
                let healed = Math.min(100 - heroes[charName].hp, Number(args[0]));
                heroes[charName].hp += healed;
                console.log(healed > 0 ? `${charName} patched up and recovered ${healed} HP!` : `${charName} is in full health!`);
                break;
        }
    }

    commands.slice(num).forEach(command => {
        if (command === 'Ride Off Into Sunset') {
            Object.entries(heroes).forEach(([name, { hp, bullets }]) => {
                if (hp > 0) {
                    console.log(name);
                    console.log(` HP: ${hp}`);
                    console.log(` Bullets: ${bullets}`);
                }
            });
            return;
        }
        executeCommand(command.split(' - '));
    });
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
