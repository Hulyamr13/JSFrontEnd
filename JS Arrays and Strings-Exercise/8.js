function pascalCaseSplitter(myString) {
    const words = myString.split(/(?=[A-Z])/).join(', ');

    console.log(words);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
// Очакван изход: Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can

pascalCaseSplitter('HoldTheDoor');
// Очакван изход: Hold, The, Door

pascalCaseSplitter('ThisIsSoAnnoyingToDo');
// Очакван изход: This, Is, So, Annoying, To, Do
