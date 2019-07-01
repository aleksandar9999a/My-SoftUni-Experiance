function solve(number) {
    let sum = 0;

    let numberToString = String(number);
    for (let i = 0; i < numberToString.length; i++) {
        sum += parseInt(numberToString[i]);
        
    }
    console.log(sum);
}
solve(97561)