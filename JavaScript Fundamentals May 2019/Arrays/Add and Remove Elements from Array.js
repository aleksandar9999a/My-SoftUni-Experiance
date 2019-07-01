function addAndRemoveElementsFromArray (commands) {
    let commandsToNumbers = [];
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] == `add`) {
            commandsToNumbers.push(i + 1);
        }
        else if (commands[i] == `remove`) {
            commandsToNumbers.pop();
        }
    }

    let numbersArrayToString = ``;
    for (let i = 0; i < commandsToNumbers.length; i++) {
        numbersArrayToString += commandsToNumbers[i] + ` `;
    }

    if (numbersArrayToString != ``) {
        console.log(numbersArrayToString);
    }
    else{
        console.log(`Empty`);
    }
}
addAndRemoveElementsFromArray(['remove'])