function printSongs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

        getName() {
            return this.name;
        }

        getTypeList() {
            return this.typeList;
        }
    }

    const n = Number(input[0]);
    const songs = [];

    for (let i = 1; i <= n; i++) {
        const [typeList, name, time] = input[i].split('_');
        const song = new Song(typeList, name, time);
        songs.push(song);
    }

    const filterType = input[input.length - 1];

    if (filterType === 'all') {
        songs.forEach(song => console.log(song.getName()));
    } else {
        songs.filter(song => song.getTypeList() === filterType)
             .forEach(song => console.log(song.getName()));
    }
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
