function searchNumber(numArr, commandsArr) {
    numArr = numArr.slice(0, commandsArr[0]);
    numArr = deleteElements(numArr, commandsArr);
    let numberCounter = searchForMyNumber(numArr, commandsArr);

    function deleteElements(numArr, commandsArr) {
        for (let i = 0; i < commandsArr[1]; i++) {
            numArr.shift();
        }

        return numArr;
    }

    function searchForMyNumber(numArr, commandsArr) {
        let counter = 0;

        for (let i = 0; i < numArr.length; i++) {
            if (numArr[i] == commandsArr[2]) {
                counter++;
            }
        }

        return counter;
    }

    console.log(`Number ${commandsArr[2]} occurs ${numberCounter} times.`);
}
searchNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )