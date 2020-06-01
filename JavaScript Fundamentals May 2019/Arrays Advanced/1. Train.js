function train(listOfWagonsPlusCommands) {
    let wagons = listOfWagonsPlusCommands.slice(0, 1)[0].split(' ').map(Number);
    let capacity = listOfWagonsPlusCommands.slice(1, 2)[0];
    let commands = listOfWagonsPlusCommands.slice(2).map(x => x.split(' '));

    commands.forEach(command => {
        if (command[0] == `Add`) {
            wagons.push(command[1]);
        }
        else {
            for (let x = 0; x < wagons.length; x++) {
                if (wagons[x] + Number(command[0]) <= capacity) {
                    wagons[x] += Number(command[0]);
                    break;
                }
            }
        }
    })
    return wagons.join(' ');
}
console.log(train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']));
