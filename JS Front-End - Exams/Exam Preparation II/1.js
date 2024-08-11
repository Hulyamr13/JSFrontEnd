function shoppingList(commands) {
    let groceries = commands[0].split("!");

    for (let i = 1; i < commands.length; i++) {
        let command = commands[i];

        if (command === "Go Shopping!") {
            break;
        }

        let [action, item, newItem] = command.split(" ");

        if (action === "Urgent") {
            if (!groceries.includes(item)) {
                groceries.unshift(item);
            }

        } else if (action === "Unnecessary") {
            groceries = groceries.filter(grocery => grocery !== item);

        } else if (action === "Correct") {
            if (groceries.includes(item)) {
                let index = groceries.indexOf(item);
                groceries[index] = newItem;
            }

        } else if (action === "Rearrange") {
            if (groceries.includes(item)) {
                groceries = groceries.filter(grocery => grocery !== item);
                groceries.push(item);
            }
        }
    }

    console.log(groceries.join(", "));
}

// Example usage:
shoppingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]);

shoppingList([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
]);
