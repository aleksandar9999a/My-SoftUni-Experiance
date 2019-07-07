function piccolo(arrWithCommands) {
    let arrWithCarNumbers = [];

    for (let i = 0; i < arrWithCommands.length; i++) {
        let currentCommandAndNumber = arrWithCommands[i].split(`, `);

        if (currentCommandAndNumber[0] === `IN`) {
            arrWithCarNumbers.push(currentCommandAndNumber[1]);
        }
        else if (currentCommandAndNumber[0] === `OUT`) {
            let index = arrWithCarNumbers.indexOf(currentCommandAndNumber[1]);
            arrWithCarNumbers.splice(index, 1);
        }
    }

    arrWithCarNumbers.sort((a, b) => a.slice(2, 6) - b.slice(2, 6));

    if (arrWithCarNumbers.length > 0) {
        for (const element of arrWithCarNumbers) {
            console.log(element);
        }
    }
    else{
        console.log(`Parking Lot is Empty`);
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)