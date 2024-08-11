function managePieces(input) {
    const n = Number(input.shift());
    const pieces = {};

    for (let i = 0; i < n; i++) {
        const [piece, composer, key] = input.shift().split('|');
        pieces[piece] = { composer, key };
    }

    while (input[0] !== 'Stop') {
        const [command, piece, param1, param2] = input.shift().split('|');

        if (command === 'Add') {
            if (pieces.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pieces[piece] = { composer: param1, key: param2 };
                console.log(`${piece} by ${param1} in ${param2} added to the collection!`);
            }
        } else if (command === 'Remove') {
            if (pieces.hasOwnProperty(piece)) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey') {
            if (pieces.hasOwnProperty(piece)) {
                pieces[piece].key = param1;
                console.log(`Changed the key of ${piece} to ${param1}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    for (const [piece, info] of Object.entries(pieces)) {
        console.log(`${piece} -> Composer: ${info.composer}, Key: ${info.key}`);
    }
}

managePieces([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'
]);
