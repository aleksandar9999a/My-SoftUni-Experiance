function arrayManipulations(arrFromComands) {
    let numberArr = arrFromComands[0].split(` `);
    arrFromComands.shift();

    for (let i = 0; i < arrFromComands.length; i++) {
        let command = arrFromComands[i].split(` `);
        
        if (command[0] === `Add`) {
            numberArr.push(command[1]);
        }
        else if (command[0] === `Remove`) {
            for (let x = 0; x < numberArr.length; x++) {
                if (numberArr[x] == command[1]) {
                    numberArr.splice(x, 1)
                }
            }
        }
        else if (command[0] === `RemoveAt`) {
            numberArr.splice(command[1], 1)
        }
        else if (command[0] === `Insert`) {
            numberArr.splice(command[2], 0, command[1])
        }
    }

    console.log(numberArr.join(` `));
}
arrayManipulations(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);