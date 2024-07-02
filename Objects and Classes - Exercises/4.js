function storeMovies(input) {
    let movies = [];

    for (let command of input) {
        if (command.includes('addMovie')) {
            let movieName = command.substring(9);
            movies.push({ name: movieName });
        } else if (command.includes('directedBy')) {
            let [movieName, director] = command.split(' directedBy ');
            let movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.director = director;
            }
        } else if (command.includes('onDate')) {
            let [movieName, date] = command.split(' onDate ');
            let movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }

    let filteredMovies = movies.filter(m => m.name && m.director && m.date);
    for (let movie of filteredMovies) {
        console.log(JSON.stringify(movie));
    }
}

// Test cases
storeMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

console.log(); // Blank line for separation

storeMovies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);
