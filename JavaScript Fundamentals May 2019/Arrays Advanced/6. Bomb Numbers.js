function bombNumbers(sequenceOfNumbers, specialBombNumber) {
    sequenceOfNumbers = bombBombBomb(sequenceOfNumbers, specialBombNumber);
    let sum = sumAfterSplice(sequenceOfNumbers);

    function bombBombBomb(sequenceOfNumbers, specialBombNumber) {
        for (let i = 0; i < sequenceOfNumbers.length; i++) {
            if (sequenceOfNumbers[i] == specialBombNumber[0]) {
                sequenceOfNumbers[i] = 0;

                for (let x = i - specialBombNumber[1]; x < i; x++) {
                    if (x < 0) {
                        x = 0;
                    }
                    sequenceOfNumbers[x] = 0;
                }

                for (let x1 = i + 1; x1 < i + specialBombNumber[1] + 1; x1++) {
                    if (x1 >= sequenceOfNumbers.length) {
                        break;
                    }
                    sequenceOfNumbers[x1] = 0;
                }
            }
        }

        return sequenceOfNumbers;
    }

    function sumAfterSplice(sequenceOfNumbers){
        let mySum = 0

        for (let i = 0; i < sequenceOfNumbers.length; i++) {
            mySum += Number(sequenceOfNumbers[i]);
        }

        return mySum;
    }

    console.log(sum);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]);