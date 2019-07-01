function magicSum(numberOfArr, numberForCompare) {
    for (let i = 0; i < numberOfArr.length; i++) {
        for (let j = i + 1; j < numberOfArr.length; j++) {
            if (numberOfArr[i] + numberOfArr[j] === numberForCompare) {
                console.log(numberOfArr[i], numberOfArr[j]);
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27)