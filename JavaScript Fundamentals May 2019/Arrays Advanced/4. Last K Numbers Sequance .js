function lastKNumbersSequance(numberN, numberK) {
    let result = `1 `;
    let numbersArr = [1];

    for (let i = 1; i < numberN; i++) {
        let number = 0;

        for (let x = i - numberK; x < i; x++) {
            if (x >= 0) {
                number += Number(numbersArr[x]);
            }
        }

        numbersArr.push(number);
        result += numbersArr[i] + ` `;
    }

    console.log(result);
}
lastKNumbersSequance(8, 2);