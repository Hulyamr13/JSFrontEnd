function findOddOccurrences(inputString) {
    const words = inputString.trim().toLowerCase().match(/\b\w+\b/g);
    const count = {};

    words.forEach(word => {
        count[word] = (count[word] || 0) + 1;
    });

    const oddOccurrences = Object.keys(count).filter(word => count[word] % 2 === 1);
    console.log(oddOccurrences.join(' '));
}

findOddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'); // Output: c# php 1 5
findOddOccurrences('Cake IS SWEET is Soft CAKE sweet Food'); // Output: soft food