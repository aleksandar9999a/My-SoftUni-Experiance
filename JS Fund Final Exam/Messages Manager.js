function messagesManager(input) {
    let maxMessages = Number(input.shift());
    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        let currCommand = input[i].split('=');
        let emptyCommand = input[i].split(' ');

        if (currCommand[0] === 'Statistics') {
            printFunc(map);
            break;
        }
        else if (currCommand[0] === 'Add') {
            if (!map.has(currCommand[1])) {
                map.set(currCommand[1], [currCommand[2], currCommand[3]]);
            }
        }
        else if (currCommand[0] === 'Message') {
            if (map.has(currCommand[1]) && map.has(currCommand[2])) {
                senderMessages(currCommand, map, maxMessages);
                receiverMessages(currCommand, map, maxMessages)
            }
        }
        else if(currCommand[0] === 'Empty' || emptyCommand[0] === 'Empty'){
            if (emptyCommand[1] === 'All') {
                map.clear();
            }
            else{
                map.delete(currCommand[1]);
            }
        }
    }
}

function senderMessages(currCommand, map, maxMessages) {
    let [sent, receiv] = map.get(currCommand[1]).map(Number);

    sent++;

    if (sent + receiv >= maxMessages) {
        console.log(`${currCommand[1]} reached the capacity!`);
        map.delete(currCommand[1]);
    }
    else{
        map.set(currCommand[1], [sent, receiv])
    }

    return map;
}

function receiverMessages(currCommand, map, maxMessages) {
    let [sent, receiv] = map.get(currCommand[2]).map(Number);
    receiv++;

    if (receiv + sent >= maxMessages) {
        console.log(`${currCommand[2]} reached the capacity!`);
        map.delete(currCommand[2]);
    }
    else{
        map.set(currCommand[2], [sent, receiv])
    }

    return map;
}

function printFunc(map) {
    let output = [...map.entries()];

    output.sort(sortUsers);
    console.log(`Users count: ` + output.length);
    output.forEach(e => console.log(`${e[0]} - ${Number(e[1][0]) + Number(e[1][1])}`))
}

function sortUsers(a, b) {
    let result = b[1][1] - a[1][1];
    if (result === 0) {
        return a[0].localeCompare(b[0]);
    }

    return result;
}

// messagesManager([ '10',
// 'Add=Mark=5=4',
// 'Add=Clark=3=5',
// 'Add=Berg=9=0',
// 'Add=Kevin=0=0',
// 'Message=Berg=Kevin',
// 'Statistics' ])

messagesManager([ '20',
  'Add=Mark=3=9',
  'Add=Berry=5=5',
  'Add=Clark=4=0',
  'Empty=Berry',
  'Add=Blake=9=3',
  'Add=Michael=3=9',
  'Add=Amy=9=9',
  'Message=Blake=Amy',
  'Message=Michael=Amy',
  'Statistics' ])