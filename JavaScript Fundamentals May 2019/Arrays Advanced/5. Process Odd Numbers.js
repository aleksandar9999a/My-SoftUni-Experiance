function processOddNumbers(numberArr) {
    let arrFromOddNumbers = numbersOnOddPosition(numberArr);
    let arrFromDoubledOddNumbers = doubledOddNumbers(arrFromOddNumbers);
    let arrFromReversedDoubledOddNumbers = reversDoubledOddNumbers(arrFromDoubledOddNumbers);
    let result = arrToStr(arrFromReversedDoubledOddNumbers);

    function numbersOnOddPosition(numberArr) {
        let oddNumbers = [];

        for (let i = 0; i < numberArr.length; i++) {
            if (i % 2 != 0) {
                oddNumbers.push(numberArr[i]);
            }
        }

        return oddNumbers;
    }

    function doubledOddNumbers(arrFromOddNumbers) {
        let doubledNumbers = [];

        for (let i = 0; i < arrFromOddNumbers.length; i++) {
            let currentNumber = Number(arrFromOddNumbers[i]) * 2;
            doubledNumbers.push(currentNumber);
        }

        return doubledNumbers;
    }

    function reversDoubledOddNumbers(arrFromDoubledOddNumbers) {
        let reversedNumbers = [];

        for (let i = arrFromDoubledOddNumbers.length - 1; i >= 0; i--) {
            let currentNumber = arrFromDoubledOddNumbers[i];
            reversedNumbers.push(currentNumber);
        }

        return reversedNumbers;
    }

    function arrToStr(arrFromReversedDoubledOddNumbers) {
        let str = ``;

        for (let i = 0; i < arrFromReversedDoubledOddNumbers.length; i++) {
            str += arrFromReversedDoubledOddNumbers[i] + ` `;
        }

        return str;
    }

    console.log(result);
}
processOddNumbers([10, 15, 20, 25]);