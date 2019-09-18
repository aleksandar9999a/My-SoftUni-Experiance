function sameNumbers(number) {
    let numAsStr = String(number);
    let isTheSame = true;
    let sum = 0;

    for (let i = 0; i < numAsStr.length; i++) {
        if (numAsStr[0] != numAsStr[i]) {
            isTheSame = false;
        }
        sum += Number(numAsStr[i]);
    }
    
    console.log(isTheSame);
    console.log(sum);
}
sameNumbers(1234)