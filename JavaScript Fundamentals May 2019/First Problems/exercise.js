function solve(firstNumber, secondNumber, thirdNumber){
    let numberForCheck = firstNumber + secondNumber + thirdNumber;

    if (numberForCheck == parseInt(numberForCheck)){
        console.log(numberForCheck + ` - Integer`);
    }
    else{
        console.log(numberForCheck + ` - Float`);
    }
}
solve(100, 200, 303)