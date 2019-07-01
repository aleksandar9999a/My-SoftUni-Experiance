function printSmallestNumber(firstNum, secondNum, thirdNum) {
    let result = checkSmallestNumber(firstNum, secondNum, thirdNum);

    console.log(result);
    
    function checkSmallestNumber(firstNum, secondNum, thirdNum) {
        let theSmallestNum = Math.min(firstNum, secondNum, thirdNum);

        return theSmallestNum;
    }
}

printSmallestNumber(2, 5, 3)