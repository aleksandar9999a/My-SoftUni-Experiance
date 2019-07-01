function equalArrays (firstArr, secondArr) {
    let isEqual = true;
    let i = 0;
    let totalSum = 0;

    for (i = 0; i < firstArr.length; i++) {
        if (firstArr[i] != secondArr[i]) {
            isEqual = false;
            break;
        }

        totalSum += Number(firstArr[i]);
    }

    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${totalSum}`);
    }
    else{
        console.log(`Arrays are not identical. Found difference at ${i} index`);
    }
}
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])