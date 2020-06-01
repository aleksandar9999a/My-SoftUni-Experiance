function solve(arr) {
    let numbers = arr[0].split(' ').map(Number);
    const commands = arr.slice(1).map(x => x.split(' ')).map(([command, number, index]) => [command, Number(number), Number(index)]);

    const commandFunctions = {
        Add: function (number) {
            numbers.push(number);
        },
        Remove: function (number) {
            numbers = numbers.filter(x => x !== number);
        },
        RemoveAt: function (index) {
            numbers = [...numbers.slice(0, index), ...numbers.slice(index + 1)];
        },
        Insert: function (number, index) {
            numbers = [...numbers.slice(0, index), number, ...numbers.slice(index)];
        }
    }

    commands.forEach(([command, number, index]) => {
        if (typeof commandFunctions[command] === 'function') {
            commandFunctions[command](number, index);
        } else {
            console.log('Unknown command');
        }
    })

    return numbers.join(` `);
}

console.log(solve(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]));
