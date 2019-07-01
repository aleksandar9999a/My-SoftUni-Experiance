function train(listOfWagonsPlusCommands) {
    let listOfWagons = listOfWagonsPlusCommands.shift().split(` `);
    let maxCapacity = listOfWagonsPlusCommands.shift();

    for (let i = 0; i < listOfWagonsPlusCommands.length; i++) {
        let command = listOfWagonsPlusCommands[i].split(` `);

        if (command[0] == `Add`) {
            listOfWagons.push(command[1]);
        }
        else{
            for (let x = 0; x < listOfWagons.length; x++) {
                if (Number(listOfWagons[x]) + Number(command[0]) <= maxCapacity) {
                    listOfWagons[x] = Number(listOfWagons[x]);
                    listOfWagons[x] += Number(command[0]);
                    break;
                }
            }
        }
    }

    console.log(listOfWagons.join(` `));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])