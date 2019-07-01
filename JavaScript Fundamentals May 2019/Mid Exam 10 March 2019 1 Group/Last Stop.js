function lastStop(arrWithCommands) {
    let myArr = arrWithCommands.shift().split(` `);

    for (let x = 0; x < arrWithCommands.length; x++) {
        let commandAndNumber = arrWithCommands[x].split(` `);
        
        if (commandAndNumber[0] == `END`) {
            break;
        }
        else if (commandAndNumber[0] == `Change`) {
            myArr = changeMyNumbers(myArr, commandAndNumber);
        }
        else if (commandAndNumber[0] == `Hide`) {
            myArr = hideNumber(myArr, commandAndNumber);
        }
        else if (commandAndNumber[0] == `Switch`) {
            myArr = switchNumber(myArr, commandAndNumber);
        }
        else if (commandAndNumber[0] == `Insert`) {
            myArr = insertNumber(myArr, commandAndNumber);
        }
        else if (commandAndNumber[0] == `Reverse`) {
            myArr.reverse();
        }
    }

    console.log(myArr.join(` `));
    
    function changeMyNumbers(myArr, commandAndNumber) {
        for (let i = 0; i < myArr.length; i++) {
            if (myArr[i] == commandAndNumber[1]) {
                myArr[i] = Number(commandAndNumber[2]);
            }
        }
        return myArr;
    }
    function hideNumber(myArr, commandAndNumber) {
        if (myArr.includes(commandAndNumber[1])) {
            let index = myArr.indexOf(commandAndNumber[1]);
            myArr.splice(index, 1);
        }
        return myArr;
    }
    function switchNumber(myArr, commandAndNumber) {
        if (myArr.includes(commandAndNumber[1]) && myArr.includes(commandAndNumber[2])) {
            let firstIndex = myArr.indexOf(commandAndNumber[1]);
            let secondIndex = myArr.indexOf(commandAndNumber[2]);

            myArr[firstIndex] = Number(commandAndNumber[2]);
            myArr[secondIndex] = Number(commandAndNumber[1]);
        }

        return myArr;
    }
    function insertNumber(myArr, commandAndNumber) {
        if (commandAndNumber[1] < myArr.length && commandAndNumber[1] + 1 >= 0) {
            myArr.splice((Number(commandAndNumber[1]) + 1), 0, Number(commandAndNumber[2]))
        }
        return myArr;
    }
}
lastStop(
[ '115 115 101 114 73 111 116 75',
'Insert 5 114',
'Switch 116 73',
'Hide 75',
'Reverse ',
'Change 73 70',
'Insert 10 85',
'END' ])