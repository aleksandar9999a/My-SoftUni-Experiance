function binaryDigitsCount(number, binaryDigit) {
    let binaryNumber = number.toString(2);
    let binaryCounter = 0;

    for (let i = 0; i < binaryNumber.length; i++) {
        if (binaryNumber[i] == binaryDigit) {
            binaryCounter++;
        }
    }

    console.log(binaryCounter);
}
binaryDigitsCount(10, 0)