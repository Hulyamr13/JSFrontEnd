function printSongs(songsArr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];

    let numSongs = Number(songsArr.shift());
    let typeSong = songsArr.pop();

    for (let song of songsArr) {
        let [typeListSong, nameSong, timeSong] = song.split('_');
        let newSong = new Song(typeListSong, nameSong, timeSong);
        songs.push(newSong);
    }

    if (typeSong === "all") {
        songs.forEach(s => console.log(s.name));
    } else {
        let filteredSongs = songs.filter(s => s.typeList === typeSong);
        filteredSongs.forEach(s => console.log(s.name));
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
