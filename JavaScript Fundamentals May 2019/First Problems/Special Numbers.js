function solve(number) {
    let numberForCheck = 0;
    for (let i = 1; i <= number; i++) {
        numberForCheck = i;
        if (i > 9) {
            let indexToString = String(i);
            numberForCheck = parseInt(indexToString[0]) + parseInt(indexToString[1]);
        }

        if (numberForCheck == 5 || numberForCheck == 7 || numberForCheck == 11) {
            console.log(`${i} -> True`);
        }
        else{
            console.log(`${i} -> False`);
        }
    }
}
solve(29)