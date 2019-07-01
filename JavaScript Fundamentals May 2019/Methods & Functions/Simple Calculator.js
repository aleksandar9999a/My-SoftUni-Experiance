function printResult(firstOperand, secondOperand, operator) {
    let operation;

    switch (operator) {
        case `multiply`:
            operation = (a, b) => a * b;
            break;
    
        case 'divide':
            operation = (a, b) => a / b;
            break;
        
        case 'add':
            operation = (a, b) => a + b;
            break;

        case 'subtract':
            operation = (a, b) => a - b;
            break;
    }

    console.log(operation(firstOperand, secondOperand));
}
printResult(5, 5, 'multiply')