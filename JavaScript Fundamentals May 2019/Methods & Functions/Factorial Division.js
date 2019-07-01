function factorialDivision(firstNumber, secondNumber) {
    let firstFactorialNumber = calculateFactorialNumber(firstNumber);
    let secondFactorialNumber = calculateFactorialNumber(secondNumber);
    let result = firstFactorialNumber / secondFactorialNumber;

    console.log(result.toFixed(2));
    
    function calculateFactorialNumber(number) {
        if (number == 0) {
            return 1;
        }
    
        return number * calculateFactorialNumber(number - 1);
    }
}
factorialDivision(5, 5)