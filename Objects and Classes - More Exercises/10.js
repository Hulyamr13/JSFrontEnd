function storeComments(inputArray) {
    const users = new Set();
    const articles = {};

    inputArray.forEach(line => {
        if (line.startsWith('user ')) {
            users.add(line.slice(5));
        } else if (line.startsWith('article ')) {
            articles[line.slice(8)] = [];
        } else {
            const [_, username, articleName, commentTitle, commentContent] = line.match(/^(.+?) posts on (.+?): (.+), (.+)$/) || [];
            if (username && users.has(username) && articles[articleName]) {
                articles[articleName].push({ username, title: commentTitle, content: commentContent });
            }
        }
    });

    Object.entries(articles)
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(([articleName, comments]) => {
            console.log(`Comments on ${articleName}`);
            comments
                .sort((a, b) => a.username.localeCompare(b.username))
                .forEach(comment => console.log(`--- From user ${comment.username}: ${comment.title} - ${comment.content}`));
        });
}



const input1 = [
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
];

storeComments(input1);

const input2 = [
    'user Mark',
    'Mark posts on someArticle: NoTitle, stupidComment',
    'article Bobby',
    'article Steven',
    'user Liam',
    'user Henry',
    'Mark posts on Bobby: Is, I do really like them',
    'Mark posts on Steven: title, Run',
    'someUser posts on Movies: Like'
];

storeComments(input2);
