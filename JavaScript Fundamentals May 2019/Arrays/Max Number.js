function maxNumber(numberArr) {
    let biggerNumbers = [];

    for (let i = 0; i < numberArr.length; i++) {
        let isBigger = true;
        for (let j = i + 1; j < numberArr.length; j++) {
            if (numberArr[i] <= numberArr[j]) {
                isBigger = false;
                break;
            } 
        }
        if (isBigger) {
            biggerNumbers.push(numberArr[i]);
        }
    }

    console.log(biggerNumbers.join(" "));
}
maxNumber([27, 19, 42, 2, 13, 45, 48])