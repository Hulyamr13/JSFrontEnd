function manageMeetings(input) {
    let meetings = {};

    input.forEach(entry => {
        let [weekday, person] = entry.split(' ');

        if (meetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meetings[weekday] = person;
            console.log(`Scheduled for ${weekday}`);
        }
    });

    for (let weekday in meetings) {
        console.log(`${weekday} -> ${meetings[weekday]}`);
    }
}

function manageMeetings(input) {
    const meetings = {};

    input.forEach(entry => {
        const [weekday, person] = entry.split(' ');

        if (meetings[weekday]) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meetings[weekday] = person;
            console.log(`Scheduled for ${weekday}`);
        }
    });

    for (const [weekday, person] of Object.entries(meetings)) {
        console.log(`${weekday} -> ${person}`);
    }
}


// Test cases
manageMeetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);

manageMeetings([
    'Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'
]);
