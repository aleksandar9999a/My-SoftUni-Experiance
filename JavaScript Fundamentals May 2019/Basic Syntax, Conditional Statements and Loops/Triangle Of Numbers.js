function solve(number) {
    let myNumber = "";
    for (let i = 1; i <= number; i++){

        for (let p = 1; p <= i; p++){
            myNumber += i + " ";
        }
        console.log(myNumber);
        myNumber = "";
    } 
}
solve(3)