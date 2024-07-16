function storeBooks(input) {
    const shelves = input.reduce((acc, line) => {
        if (line.includes('->')) {
            const [shelfId, shelfGenre] = line.split(' -> ');
            if (!acc[shelfId]) {
                acc[shelfId] = { genre: shelfGenre, books: [] };
            }
        } else if (line.includes(':')) {
            const [bookInfo, bookGenre] = line.split(', ');
            const [bookTitle, bookAuthor] = bookInfo.split(': ');

            const shelf = Object.values(acc).find(s => s.genre === bookGenre);
            if (shelf) {
                shelf.books.push({ title: bookTitle, author: bookAuthor });
            }
        }
        return acc;
    }, {});

    Object.entries(shelves)
        .sort(([, a], [, b]) => b.books.length - a.books.length)
        .forEach(([shelfId, shelfDetails]) => {
            console.log(`${shelfId} ${shelfDetails.genre}: ${shelfDetails.books.length}`);
            shelfDetails.books
                .sort((a, b) => a.title.localeCompare(b.title))
                .forEach(book => console.log(`--> ${book.title}: ${book.author}`));
        });
}


// Example 1
const input1 = [
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
];

console.log("Example 1:");
storeBooks(input1);

console.log();

// Example 2
const input2 = [
    '1 -> mystery',
    '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi'
];

console.log("Example 2:");
storeBooks(input2);
