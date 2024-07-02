function findOddOccurrences(inputString) {
    const elements = new Map();
    const inputArray = inputString.trim().split(/\s+/);

    for (let item of inputArray) {
        let element = item.toLowerCase().trim();
        elements.set(element, (elements.get(element) || 0) + 1);
    }

    const oddOccurrences = [];
    for (let [element, count] of elements) {
        if (count % 2 === 1) {
            oddOccurrences.push(element);
        }
    }

    console.log(oddOccurrences.join(' '));
}

// Example usage:
findOddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'); // Output: c# php 1 5
findOddOccurrences('Cake IS SWEET is Soft CAKE sweet Food'); // Output: soft food
