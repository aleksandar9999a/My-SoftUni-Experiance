function condenseArrayToNumber(numsArr) {
    let condensed = [];

    while (numsArr.length > 1) {
        for (let i = 0; i < numsArr.length - 1; i++) {
            condensed[i] = Number(numsArr[i]) + Number(numsArr[i + 1]);

        }
        numsArr = condensed.slice();
        condensed.pop();
    }

        console.log(Number(numsArr));
}
condenseArrayToNumber([5])