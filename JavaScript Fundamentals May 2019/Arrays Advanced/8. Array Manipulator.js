function solve(numbers, commands) {
    let arr = [...numbers];
    let commandsArr = [...commands].map(x => x.split(' ')).map(parseData);
    let isFinished = false;
    const commandActions = {
        add: function ({ index, element }) {
            arr = [...arr.slice(0, index), element, ...arr.slice(index)];
        },
        addMany: function ({ index, elements }) {
            arr = [...arr.slice(0, index), ...elements, ...arr.slice(index)];
        },
        contains: function ({ element }) {
            console.log(arr.indexOf(element));
        },
        remove: function ({ index }) {
            arr = [...arr.slice(0, index), ...arr.slice(index + 1)];
        },
        shift: function ({ positions }) {
            while (positions > arr.length) { positions -= arr.length; }
            arr = [...arr.slice(positions), ...arr.slice(0, positions)];
        },
        sumPairs: function () {
            arr = arr.reduce((acc, x, i) => {
                if (i % 2 === 0 && i < arr.length - 1) {
                    acc.push(x + arr[i + 1]);
                }
                return acc;
            }, []);
        },
        print: function () {
            isFinished = true;
        }
    }

    function parseData(data) {
        if (data[0] === 'add') {
            return {
                command: 'add',
                index: Number(data[1]),
                element: Number(data[2])
            }
        }
        if (data[0] === 'addMany') {
            return {
                command: data.shift(),
                index: Number(data.shift()),
                elements: data.map(Number)
            }
        }
        if (data[0] === 'contains') {
            return {
                command: 'contains',
                element: Number(data[1])
            }
        }
        if (data[0] === 'remove') {
            return {
                command: 'remove',
                index: Number(data[1])
            }
        }
        if (data[0] === 'shift') {
            return {
                command: 'shift',
                positions: Number(data[1])
            }
        }
        return {
            command: data[0]
        }
    }

    commandsArr.forEach(commandData => {
        if (typeof commandActions[commandData.command] === 'function' && !isFinished) {
            commandActions[commandData.command](commandData);
        }
    })

    return arr
}
solve([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
// solve([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])
// solve([1, 2, 4, 5, 6, 7], ['addMany 1 8 8 4 6 1', 'contains 1', 'contains 3', 'print'])
