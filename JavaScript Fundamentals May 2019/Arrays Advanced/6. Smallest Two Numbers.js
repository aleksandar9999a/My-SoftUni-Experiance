function smallestTwoNumbers(numberArr) {
    numberArr.sort((a, b) => a - b);
    console.log(numberArr[0], numberArr[1]);
}
smallestTwoNumbers([30, 15, 50, 5])