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
