function equalSums(numberArr) {
    let indexOfNumber = -1;

    for (let i = 0; i < numberArr.length; i++) {
        let leftSum = 0;
        let rigthSum = 0;

        for (let j = i - 1; j >= 0; j--) {
            leftSum += numberArr[j];
        }

        for (let j = i + 1; j < numberArr.length; j++) {
            rigthSum += numberArr[j];
        }

        if (rigthSum === leftSum) {
            indexOfNumber = i;
        }
    }
    
    if (indexOfNumber !== -1) {
        console.log(indexOfNumber);
    }
    else{
        console.log(`no`);
    }
}
equalSums([1, 2, 3, 3])