function evenAndOddSubtraction (numberArr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numberArr.length; i++) {
        let number = Number(numberArr[i]);

        if (number % 2 == 0) {
            evenSum += number;
        }
        else{
            oddSum += number;
        }
    }

    console.log(evenSum - oddSum);
}
evenAndOddSubtraction([3,5,7,9])