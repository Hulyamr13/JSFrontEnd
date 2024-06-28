function storeComments(inputArray) {
    const users = {};
    const articles = {};

    for (const line of inputArray) {
        if (line.startsWith('user')) {
            const username = line.replace('user ', '');
            users[username] = true;
        } else if (line.startsWith('article')) {
            const articleName = line.replace('article ', '');
            articles[articleName] = [];
        } else {
            const match = line.match(/^(.+?) posts on (.+?): (.+), (.+)$/);
            if (match) {
                const username = match[1];
                const articleName = match[2];
                const commentTitle = match[3];
                const commentContent = match[4];

                if (users.hasOwnProperty(username) && articles.hasOwnProperty(articleName)) {
                    articles[articleName].push({
                        username: username,
                        title: commentTitle,
                        content: commentContent
                    });
                }
            }
        }
    }

    const sortedArticles = Object.entries(articles).sort((a, b) => b[1].length - a[1].length);

    sortedArticles.forEach(([articleName, comments]) => {
        console.log(`Comments on ${articleName}`);
        comments.sort((a, b) => a.username.localeCompare(b.username)); // Sort comments by username
        comments.forEach(comment => {
            console.log(`--- From user ${comment.username}: ${comment.title} - ${comment.content}`);
        });
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
