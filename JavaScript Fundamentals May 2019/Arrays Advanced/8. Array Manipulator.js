function arrayManipulator(arrForManipulating, commandsArr) {

    for (let i = 0; i < commandsArr.length; i++) {
        let currentCommand = commandsArr[i].split(` `)
        
        if (currentCommand[0] == `add`) {
            addElements(currentCommand, arrForManipulating);
        }
        else if (currentCommand[0] == `addMany`) {
            addManyElements(currentCommand, arrForManipulating);
        }
        else if (currentCommand[0] == `contains`) {
            containsElements(currentCommand, arrForManipulating);
        }
        else if (currentCommand[0] == `remove`) {
            removeElement(currentCommand, arrForManipulating);
        }
        else if (currentCommand[0] == `shift`) {
            arrForManipulating = shiftElement(currentCommand, arrForManipulating);
        }
        else if (currentCommand[0] == `sumPairs`) {
            arrForManipulating = sumPairsElements(currentCommand, arrForManipulating);
        }
        else if (currentCommand[0] == `print`) {
            break;
        }
    }
    
    function addElements(currentCommand, arrForManipulating) {
        arrForManipulating.splice(currentCommand[1], 0, Number(currentCommand[2]));
        return arrForManipulating;
    }

    function addManyElements(currentCommand, arrForManipulating) {
        currentCommand.shift();

        for (let x = currentCommand.length - 1; x > 0; x--) {
            arrForManipulating.splice(currentCommand[0], 0, Number(currentCommand[x]));
        }

        return arrForManipulating;
    }

    function containsElements(currentCommand, arrForManipulating) {
        let isItThere = false;
        let index = -1;

        for (let i = 0; i < arrForManipulating.length; i++) {
            if (currentCommand[1] == arrForManipulating[i]) {
                isItThere = true;
                index = i;
                break;
            }
        }

        if (isItThere) {
            console.log(index);
        }
        else{
            console.log(index);
        }

        return arrForManipulating;
    }

    function removeElement(currentCommand, arrForManipulating) {
        arrForManipulating.splice(currentCommand[1], 1);

        return arrForManipulating;
    }

    function shiftElement(currentCommand, arrForManipulating) {
        for (let i = 0; i < currentCommand[1]; i++) {
            let currentElement = arrForManipulating[i];
            arrForManipulating.push(currentElement);
        }
        
        arrForManipulating.splice(0, currentCommand[1]);
        
        return arrForManipulating;
    }

    function sumPairsElements(currentCommand, arrForManipulating) {
        let newArr = [];

        for (let i = 0; i < arrForManipulating.length; i += 2) {
            if (i + 1 >= arrForManipulating.length) {
                newArr.push(Number(arrForManipulating[i]));
                break;
            }
            let number = Number(arrForManipulating[i]) + Number(arrForManipulating[i + 1]);
            newArr.push(number);
        }

        return newArr;
    }

    console.log(arrForManipulating);
}
arrayManipulator([1, 2, 3, 4, 5],
    ["shift 1", "print"])