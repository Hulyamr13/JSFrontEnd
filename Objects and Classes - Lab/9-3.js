function printSongs(input) {
    const Song = class {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    };

    const n = Number(input[0]);
    const songs = input.slice(1, n + 1).map(line => {
        const [typeList, name, time] = line.split('_');
        return new Song(typeList, name, time);
    });

    const filterType = input[input.length - 1];

    songs
        .filter(song => filterType === 'all' || song.typeList === filterType)
        .forEach(song => console.log(song.name));
}

// Example usage:
printSongs([
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);
// Output:
// DownTown
// Kiss
// Smooth Criminal

printSongs([
    4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'
]);
// Output:
// Andalouse

printSongs([
    2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
]);
// Output:
// Replay
// Photoshop
