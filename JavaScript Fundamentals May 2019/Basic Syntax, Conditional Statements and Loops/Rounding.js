function solve(number, precision) {
    if (precision > 15){
        console.log(parseFloat(number.toFixed(15)));
    } else{
        console.log(parseFloat(number.toFixed(precision)));
    }
}
solve(5.51351,16)