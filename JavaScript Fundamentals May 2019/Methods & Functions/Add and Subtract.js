function addAndSubtract(firstNum, secondNum, thirdNum) {
    let addFirstAndSecondNums = (a, b) => a + b;
    let subtractNums = (a, b) => a - b;

    let addResult = addFirstAndSecondNums(firstNum, secondNum);
    let subtractResult = subtractNums(addResult, thirdNum);
    
    console.log(subtractResult);
}
addAndSubtract(23, 6, 10)