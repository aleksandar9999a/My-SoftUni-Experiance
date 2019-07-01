function solve(firstNumber, calculationOperator, secondNumber) {
    let sum = 0;

    if (calculationOperator == `+`) {
        sum = firstNumber + secondNumber;
    }
    else if (calculationOperator == `-`) {
        sum = firstNumber - secondNumber;
    }
    else if (calculationOperator == `*`) {
        sum = firstNumber * secondNumber;
    }
    else if (calculationOperator == `/`) {
        sum = firstNumber / secondNumber;
    }

    console.log(sum.toFixed(2))
}
solve(5, `+`, 10)