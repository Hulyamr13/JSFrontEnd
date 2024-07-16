function manageArmies(inputArray) {
    const armyLog = {};

    inputArray.forEach(info => {
        if (info.endsWith('arrives')) {
            let leader = info.split(' arrives')[0];
            if (!armyLog[leader]) armyLog[leader] = {};
        } else if (info.includes(': ')) {
            let [leader, armyInfo] = info.split(': ');
            if (armyLog[leader]) {
                let [army, num] = armyInfo.split(', ');
                armyLog[leader][army] = +num;
            }
        } else if (info.includes(' + ')) {
            let [army, num] = info.split(' + ');
            Object.values(armyLog).forEach(leaderArmies => {
                if (leaderArmies[army]) leaderArmies[army] += +num;
            });
        } else if (info.endsWith('defeated')) {
            delete armyLog[info.split(' defeated')[0]];
        }
    });

    Object.entries(armyLog)
        .map(([leader, armies]) => [leader, Object.values(armies).reduce((sum, count) => sum + count, 0), armies])
        .sort((a, b) => b[1] - a[1])
        .forEach(([leader, total, armies]) => {
            console.log(`${leader}: ${total}`);
            Object.entries(armies)
                .sort((a, b) => b[1] - a[1])
                .forEach(([army, count]) => console.log(`>>> ${army} - ${count}`));
        });
}


manageArmies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
]);
