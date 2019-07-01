function solve(number){
    let numberNine = 0;
    number = number.toString();
    for (let i = 0; i < number.length; i++){
        numberNine += Number(number[i]);
    }

    let result = numberNine.toString().includes(`9`);
    console.log(result
        ? `${number} Amazing? True`
        : `${number} Amazing? False`);
}
solve(999)