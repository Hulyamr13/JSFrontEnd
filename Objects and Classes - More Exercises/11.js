function storeBooks(input) {
    const shelves = {};

    for (const line of input) {
        if (line.includes('->')) {
            const [shelfId, shelfGenre] = line.split(' -> ');
            if (!shelves.hasOwnProperty(shelfId)) {
                shelves[shelfId] = {
                    genre: shelfGenre,
                    books: []
                };
            }
        } else if (line.includes(':')) {
            const [bookInfo, bookGenre] = line.split(', ');
            const [bookTitle, bookAuthor] = bookInfo.split(': ');

            let shelfToAddBook = null;
            for (const shelfId in shelves) {
                if (shelves[shelfId].genre === bookGenre) {
                    shelfToAddBook = shelfId;
                    break;
                }
            }

            if (shelfToAddBook !== null) {
                shelves[shelfToAddBook].books.push({
                    title: bookTitle,
                    author: bookAuthor
                });
            }
        }
    }

    const sortedShelves = Object.entries(shelves).sort((a, b) => {
        const countA = a[1].books.length;
        const countB = b[1].books.length;
        return countB - countA;
    });

    sortedShelves.forEach(([shelfId, shelfDetails]) => {
        const sortedBooks = shelfDetails.books.sort((a, b) => a.title.localeCompare(b.title));
        console.log(`${shelfId} ${shelfDetails.genre}: ${sortedBooks.length}`);
        sortedBooks.forEach(book => {
            console.log(`--> ${book.title}: ${book.author}`);
        });
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
