function messagesManager(input) {
    let maxMessages = Number(input.shift());
    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        let currCommand = input[i].split('=');

        if (currCommand[0] === 'Statistics') {
            let output = [...map.entries()];
            let count = 0;
            output.forEach(e => count++);
            let sortNumber = (a, b) => b[1][0] - a[1][0];
            let sortByName = (a, b) => a[0].localeCompare(b[0]);
            output.sort(sortNumber && sortByName);

            console.log(`Users count: ${count}`);
            output.forEach(e => console.log(`${e[0]} - ${Number(e[1][0]) + Number(e[1][1])}`));

            break;
        }
        else if (currCommand[0] === 'Add') {
            if (!map.has(currCommand[1])) {
                map.set(currCommand[1], [currCommand[2], currCommand[3]]);
            }
        }
        else if (currCommand[0] === 'Message') {
            if (map.has(currCommand[1]) && map.has(currCommand[2])) {
                let sender = map.get(currCommand[1]);
                sender[0]++;

                if (sender[0] === maxMessages) {
                    console.log(`${currCommand[1]} reached the capacity!`);
                    map.delete(currCommand[1]);
                }
                else{
                    map.set(currCommand[1], [sender[0], sender[1]])
                }
                
                let receiver = map.get(currCommand[2]);
                receiver[1]++;

                if (receiver[1] === maxMessages) {
                    console.log(`${currCommand[2]} reached the capacity!`);
                    map.delete(currCommand[2]);
                }
                else{
                    map.set(currCommand[2], [receiver[0], receiver[1]])
                }
            }
        }
        else if (currCommand[0] === 'Empty') {
            if (currCommand[1] === 'All') {
                map.clear();
            }
            else{
                map.delete(currCommand[1]);
            }
        }
    }
}
messagesManager([ '10',
'Add=Mark=5=4',
'Add=Clark=3=5',
'Add=Berg=9=0',
'Add=Kevin=0=0',
'Message=Berg=Kevin',
'Statistics' ])