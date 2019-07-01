function negativeOrPositiveNumbers(numberArr) {
    let arrFromarrangedNumbers = [];

    for (let i = 0; i < numberArr.length; i++) {
        let currentNumber = numberArr[i];

        if (currentNumber < 0) {
            arrFromarrangedNumbers.unshift(currentNumber);
        }
        else{
            arrFromarrangedNumbers.push(currentNumber);
        }
    }

    for (let x = 0; x < arrFromarrangedNumbers.length; x++) {
        console.log(arrFromarrangedNumbers[x]);
    }
}
negativeOrPositiveNumbers([7, -2, 8, 9]);