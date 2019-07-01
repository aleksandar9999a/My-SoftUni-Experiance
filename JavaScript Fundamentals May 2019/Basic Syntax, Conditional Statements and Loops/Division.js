function solve(number) {
    let theBiggestDivisibleNumber = 0;
    if (number % 2 == 0){
        theBiggestDivisibleNumber = 2;
    }
    if (number % 3 == 0){
        theBiggestDivisibleNumber = 3;
    }
    if (number % 6 == 0){
        theBiggestDivisibleNumber = 6;
    }
    if (number % 7 == 0){
        theBiggestDivisibleNumber = 7;
    }
    if (number % 10 == 0){
        theBiggestDivisibleNumber = 10;
    }
    if (number % 2 == 0 || number % 3 == 0 || number % 6 == 0 || number % 7 == 0 || number % 10 == 0) {
        console.log("The number is divisible by " + theBiggestDivisibleNumber);
    }
    else{
        console.log("Not divisible");
    }
}
solve(1643)