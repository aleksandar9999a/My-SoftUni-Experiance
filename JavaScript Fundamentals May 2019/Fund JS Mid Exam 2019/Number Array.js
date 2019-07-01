function numberArray(commandArr) {
    let numberArr = commandArr.shift().split(` `);
    numberArr = numberArr.map(Number);

    for (let i = 0; i < commandArr.length; i++) {
        let currentCommand = commandArr[i].split(` `);
        if (currentCommand[0] === `End`) {
            break;
        }
        else if (currentCommand[0] === `Switch`) {
            if (numberArr[currentCommand[1]] != undefined) {
                    numberArr[currentCommand[1]] = numberArr[currentCommand[1]] * -1;
            }
        }
        else if (currentCommand[0] === `Change`) {
            if (numberArr[currentCommand[1]] != undefined) {
                numberArr[currentCommand[1]] = Number(currentCommand[2]);
        }
        }
        else if (currentCommand[0] === `Sum`) {
            if (currentCommand[1] === `Negative`) {
                let negativeSum = 0;

                for (let x = 0; x < numberArr.length; x++) {
                    let currentNumber = numberArr[x];

                    if (currentNumber < 0) {
                        negativeSum += currentNumber;
                    }
                }

                console.log(negativeSum);
            }
            else if (currentCommand[1] === `Positive`){
                let positiveSum = 0;

                for (let x = 0; x < numberArr.length; x++) {
                    let currentNumber = numberArr[x];

                    if (currentNumber >= 0) {
                        positiveSum += currentNumber;
                    }
                }

                console.log(positiveSum);
            }
            else if (currentCommand[1] === `All`){
                let sumAllNumber = 0;

                for (let x = 0; x < numberArr.length; x++) {
                    sumAllNumber += numberArr[x];
                }

                console.log(sumAllNumber);
            }
        }
    }

    let arrFromPositive = [];
    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] >= 0) {
            arrFromPositive.push(numberArr[i]);
        }
    }
    console.log(arrFromPositive.join(` `));
}
numberArray([ '1 2 3 4 5', 'Switch 4', 'Change 0 -3', 'Sum Negative', 'End' ])
numberArray([ '1 2 3 4 5 4 3 2 1 0', 'Switch -4', 'Change 13 0', 'Switch 0', 'Sum All', 'End' ])