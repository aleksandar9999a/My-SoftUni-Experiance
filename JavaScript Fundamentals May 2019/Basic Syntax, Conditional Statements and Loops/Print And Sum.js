function solve(firstNumber, secondNumber) {
    let totalSum = 0;
    let numbers = "";

    for (let i = firstNumber; i <= secondNumber; i++){
        numbers += i + " ";
        totalSum += i;
    }
    console.log(numbers);
    console.log("Sum: " + totalSum);
}
solve(50, 60)