function makeDictionary(input) {
    let dictionary = {};

    input.forEach(jsonString => {
        let obj = JSON.parse(jsonString);
        let term = Object.keys(obj)[0];
        let definition = obj[term];

        dictionary[term] = definition;
    });

    let sortedTerms = Object.keys(dictionary).sort();

    sortedTerms.forEach(term => {
        let definition = dictionary[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    });
}


// Test cases
let input1 = [
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
];

let input2 = [
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."}',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."}',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."}',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."}'
];

console.log("Output for input1:");
makeDictionary(input1);

console.log("\nOutput for input2:");
makeDictionary(input2);
