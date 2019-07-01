function printOddAndEvenSum(myBigNumber) {
    let oddSum = whoIsMyOddNumber(myBigNumber);
    let evenSum = whoIsMyEvenNumber(myBigNumber);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
    function whoIsMyOddNumber(myBigNumber) {
        let result = 0;
        myBigNumber = String(myBigNumber);

        for (let i = 0; i < myBigNumber.length; i++) {
            let num = Number(myBigNumber[i]);

            if (num % 2 != 0) {
                result += num;
            }
        }

        return result;
    }

    function whoIsMyEvenNumber(myBigNumber) {
        let result = 0;
        myBigNumber = String(myBigNumber);

        for (let i = 0; i < myBigNumber.length; i++) {
            let num = Number(myBigNumber[i]);

            if (num % 2 == 0) {
                result += num;
            }
        }

        return result;
    }
}
printOddAndEvenSum(1000435)