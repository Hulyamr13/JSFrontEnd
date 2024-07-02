function findOddOccurrences(inputString) {
    const words = inputString.trim().toLowerCase().split(/\s+/);
    const uniqueWords = [...new Set(words)];
    const count = {};

    uniqueWords.forEach(word => {
        count[word] = words.filter(w => w === word).length;
    });

    const oddOccurrences = uniqueWords.filter(word => count[word] % 2 === 1);
    console.log(oddOccurrences.join(' '));
}

findOddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'); // Output: c# php 1 5
findOddOccurrences('Cake IS SWEET is Soft CAKE sweet Food'); // Output: soft food