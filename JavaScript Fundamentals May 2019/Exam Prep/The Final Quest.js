function finalQuest(input) {
    let words = input.shift().split(` `);

    for (let i = 0; i < input.length; i++) {
        let currentCommand = input[i].split(` `);

        if (currentCommand[0] === `Delete`) {
            let index = Number(currentCommand[1]) + 1;
            words.splice(index, 1);
        }
        else if (currentCommand[0] === `Swap`) {
            if (words.includes(currentCommand[1]) && words.includes(currentCommand[2])) {
                let firstIndex = words.indexOf(currentCommand[1]);
                let secondIndex = words.indexOf(currentCommand[2]);

                words[firstIndex] = currentCommand[2];
                words[secondIndex] = currentCommand[1];
            }
        }
        else if (currentCommand[0] === `Put`) {
            if (currentCommand[2] > 0 && currentCommand[2] <= words.length + 1) {
                let index = Number(currentCommand[2]) - 1;
                words.splice(index, 0, currentCommand[1]);
            }
        }
        else if (currentCommand[0] === `Sort`) { //This is problem!!!
            words = words.sort(function(a, b) {
                return b.localeCompare(a);
            });
        }
        else if (currentCommand[0] === `Replace`) {
            if (words.includes(currentCommand[2])){
                let index = words.indexOf(currentCommand[2]);
                words[index] = currentCommand[1];
            }
        }
        else if (currentCommand[0] === `Stop`) {
            break;
        }
    }

    console.log(words.join(` `));
}
finalQuest([ 'Congratulations! You last also through the have challenge!',
'Swap have last',
'Replace made have',
'Delete 2',
'Put it 4',
'Stop',
'' ])