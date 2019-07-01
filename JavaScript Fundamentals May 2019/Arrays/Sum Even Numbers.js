function sumEvenNumbers (numbersArr) {
    let totalSum = 0;

    for (let i = 0; i < numbersArr.length; i++) {

        let number = Number(numbersArr[i]);
        if (number % 2 == 0) {
            totalSum += number;
        }
    }
    console.log(totalSum);
}
sumEvenNumbers(['3','5','7','9'])